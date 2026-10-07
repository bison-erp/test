import { getPage } from "@/content/registry";
import PageBody from "@/components/PageBody";
import { SITE_URL } from "@shared/const";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { AGENCY_ADDRESS, AGENCY_PHONE, AGENCY_EMAIL } from "@shared/const";
import { IMAGES } from "@shared/images";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "@/hooks/useTranslation";
import { Link } from "../components/Link";
import { useLanguage } from "../contexts/LanguageContext";

export default function ContactNewsletter() {
  const { t } = useTranslation("ContactNewsletter");
  const { language } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactFormSchema = z.object({
    fullName: z.string().min(2, t("form.errors.fullName", "Full name is required (minimum 2 characters)")),
    phone: z.string().min(6, t("form.errors.phone", "Valid phone number is required")),
    email: z.string().email(t("form.errors.email", "Valid email address is required")),
    confirmEmail: z.string().email(t("form.errors.confirmEmail", "Please confirm your email address")),
    preferredLocation: z.string().min(1, t("form.errors.preferredLocation", "Please select a preferred location")),
    message: z.string().min(10, t("form.errors.message", "Please provide a detailed message (minimum 10 characters)")),
    website_honeypot: z.string().optional() // Honeypot field for anti-bot security
  }).refine((data) => data.email === data.confirmEmail, {
    message: t("form.errors.emailMismatch", "Email addresses do not match"),
    path: ["confirmEmail"]
  });

  type ContactFormValues = z.infer<typeof contactFormSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      confirmEmail: "",
      preferredLocation: "Paris",
      message: ""
    }
  });

  const onSubmit = async (data: ContactFormValues) => {
    // If the honeypot field is filled, silently reject the submission as it's a bot
    if (data.website_honeypot) {
      console.warn("Spam bot submission detected via honeypot.");
      setIsSubmitted(true);
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, lang: language }),
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
    } catch {
      setIsSubmitting(false);
      toast.error(t("form.error.toast", "Your message could not be sent. Please try again in a moment."));
      return;
    }
    setIsSubmitting(false);
    setIsSubmitted(true);
    toast.success(t("form.success.toast", "Your inquiry has been securely transmitted. A private advisor will contact you shortly."));
    reset();
  };

  return (
    <Layout>
      <SEOHead />

      <section className="py-24 bg-background">
        <div className="container max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Contact Details & Info Column - High Contrast */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="font-serif-classic text-sm tracking-[0.3em] text-primary uppercase block font-bold">
                {t("content.subtitle", "Private Consultation")}
              </span>
              <h1 className="font-serif-classic text-3xl md:text-4xl tracking-wide font-light text-primary">
              {getPage("contact", language).data.h1}
            </h1>
              <p className="font-sans-modern text-base text-foreground font-semibold leading-relaxed">
                {t("content.description", "Whether you are looking to acquire a prestigious private residence, invest in institutional hospitality portfolios, or explore European Golden Visa programs, our dedicated team of advisors is at your service.")}
              </p>
            </div>

            {/* Executive Profile of Nicolas - Enhanced, Enlarged and Ultra-Sharp Portrait */}
            <div className="border border-border bg-card p-8 flex flex-col gap-6 items-center sm:items-start shadow-sm my-6">
              <div className="w-48 h-48 sm:w-56 sm:h-56 shrink-0 rounded-none overflow-hidden border-2 border-accent shadow-md mx-auto sm:mx-0">
                <img
                  src={IMAGES.avatarNicolas}
                  alt={t("content.profile.name", "Nicolas Milonas")}
                  className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="space-y-2 w-full">
                <h3 className="font-serif-classic text-xl font-bold text-primary text-center sm:text-left">{t("content.profile.name", "Nicolas Milonas")}</h3>
                <p className="font-sans-modern text-xs tracking-widest text-accent uppercase font-bold text-center sm:text-left">{t("content.profile.role", "President of the Acropolis Group")}</p>
                <p className="font-sans-modern text-xs text-foreground/90 font-semibold leading-relaxed">
                  {t("content.profile.description1", "I will be your direct contact for real estate matters and residence permits. Based in Luxembourg, I travel to France and Greece regularly according to my clients' needs.")}
                </p>
                <p className="font-sans-modern text-xs text-muted-foreground font-semibold leading-relaxed pt-1">
                  {t("content.profile.description2", "I communicate in French, English, and Greek. My team communicates in French, English, Mandarin and the Shanghai dialect.")}
                </p>
              </div>
            </div>

            <div className="space-y-6 pt-4">
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-primary shrink-0 mt-1" />
                <div className="space-y-4 w-full">
                  <div>
                    <h3 className="font-serif-classic text-lg tracking-wider text-primary">{t("content.offices.paris.city", "Paris")}</h3>
                    <p className="font-sans-modern text-sm text-foreground font-semibold leading-relaxed mt-1">
                      {t("content.offices.paris.address", "231, Rue Saint Honoré, 75001 – Paris")}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-serif-classic text-lg tracking-wider text-primary">{t("content.offices.luxembourg.city", "Luxembourg")}</h3>
                    <p className="font-sans-modern text-sm text-foreground font-semibold leading-relaxed mt-1">
                      {t("content.offices.luxembourg.address", "54, rue Charles Darwin, L-1433 – Luxembourg")}
                    </p>
                  </div>
                </div>
              </div>

              {/* Glowing, Attention-grabbing appointment notice */}
              <div className="relative border border-accent/30 bg-accent/5 p-4 text-center overflow-hidden">
                <div className="absolute inset-0 bg-accent/5 animate-pulse" />
                <p className="relative z-10 font-sans-modern text-xs tracking-widest uppercase font-bold text-accent animate-pulse">
                  {t("content.notice", "⚠️ Face-to-face meetings and video conference interviews are by prior appointment only.")}
                </p>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-primary shrink-0 mt-1" />
                <div>
                  <h3 className="font-serif-classic text-xl tracking-wider text-primary">{t("content.contact.phoneTitle", "Direct Line")}</h3>
                  <p className="font-sans-modern text-sm text-foreground font-bold mt-1">
                    {AGENCY_PHONE}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="h-6 w-6 text-primary shrink-0 mt-1" />
                <div>
                  <h3 className="font-serif-classic text-xl tracking-wider text-primary">{t("content.contact.emailTitle", "Confidential Email")}</h3>
                  <div className="font-sans-modern text-sm text-foreground font-bold mt-1.5">
                    <img
                      src="/manus-storage/pasted_file_Hs1mMd_image_2cd2c6f6.png"
                      alt={t("content.contact.emailAlt", "Confidential Contact Email")}
                      className="h-6 sm:h-7 object-contain align-middle"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-border bg-card p-6 space-y-4 shadow-sm">
              <h3 className="font-serif-classic text-xl tracking-wider text-primary">{t("content.newsletter.title", "The Off-Market Newsletter")}</h3>
              <p className="font-sans-modern text-xs text-foreground/80 font-semibold leading-relaxed">
                {t("content.newsletter.description", "By submitting this form, you will also be registered to receive our highly exclusive, monthly off-market property brief. Our newsletter showcases prime assets that are strictly prohibited from public listing.")}
              </p>
            </div>
          </div>

          {/* Contact Form Column - High Contrast Form Fields */}
          <div className="lg:col-span-7 bg-card border border-border p-8 md:p-12 space-y-6 shadow-sm">
            <h2 className="font-serif-classic text-2xl tracking-wide font-light text-primary">
              {t("content.formTitle", "Initiate Secure Inquiry")}
            </h2>
            
            {isSubmitted ? (
              <div className="border border-primary/20 bg-primary/5 p-8 text-center space-y-4 animate-in fade-in duration-500">
                <CheckCircle2 className="h-12 w-12 text-primary mx-auto" />
                <h3 className="font-serif-classic text-xl tracking-wide">{t("form.successMessage.title", "Inquiry Successfully Transmitted")}</h3>
                <p className="font-sans-modern text-sm text-foreground/80 font-semibold leading-relaxed">
                  {t("form.successMessage.description", "Thank you for contacting Acropolis Real Estate. A dedicated private advisor will review your parameters and contact you within one business day.")}
                </p>
                <Button
                  onClick={() => setIsSubmitted(false)}
                  className="bg-primary text-primary-foreground hover:bg-primary/90 font-sans-modern text-xs tracking-widest uppercase py-4 px-6 rounded-none transition-all duration-300"
                >
                  {t("form.buttons.sendAnother", "Send Another Inquiry")}
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                
                {/* Honeypot field (hidden from real users but filled by spam bots) */}
                <div className="hidden opacity-0 absolute w-0 h-0 overflow-hidden" aria-hidden="true">
                  <input
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    placeholder="Your website"
                    {...register("website_honeypot")}
                  />
                </div>

                {/* Full Name */}
                <div className="space-y-2">
                  <label className="font-sans-modern text-xs tracking-widest uppercase text-foreground/80 font-bold">
                    {t("form.labels.fullName", "Full Name")}
                  </label>
                  <Input
                    {...register("fullName")}
                    placeholder={t("form.placeholders.fullName", "e.g. Nicolas Zhang")}
                    className="bg-background border-border focus:border-primary focus:ring-1 focus:ring-primary rounded-none font-sans-modern text-sm text-foreground font-semibold"
                  />
                  {errors.fullName && (
                    <p className="text-destructive text-xs font-sans-modern font-semibold">{errors.fullName.message}</p>
                  )}
                </div>

                {/* Phone Number */}
                <div className="space-y-2">
                  <label className="font-sans-modern text-xs tracking-widest uppercase text-foreground/80 font-bold">
                    {t("form.labels.phone", "Phone Number")}
                  </label>
                  <Input
                    {...register("phone")}
                    placeholder={t("form.placeholders.phone", "e.g. +33 6 12 34 56 78")}
                    className="bg-background border-border focus:border-primary focus:ring-1 focus:ring-primary rounded-none font-sans-modern text-sm text-foreground font-semibold"
                  />
                  {errors.phone && (
                    <p className="text-destructive text-xs font-sans-modern font-semibold">{errors.phone.message}</p>
                  )}
                </div>

                {/* Email Address & Confirmation (Double Saisie demandée par le client) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-sans-modern text-xs tracking-widest uppercase text-foreground/80 font-bold">
                      {t("form.labels.email", "Email Address")}
                    </label>
                    <Input
                      {...register("email")}
                      placeholder={t("form.placeholders.email", "e.g. john.smith@example.com")}
                      className="bg-background border-border focus:border-primary focus:ring-1 focus:ring-primary rounded-none font-sans-modern text-sm text-foreground font-semibold"
                    />
                    {errors.email && (
                      <p className="text-destructive text-xs font-sans-modern font-semibold">{errors.email.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="font-sans-modern text-xs tracking-widest uppercase text-foreground/80 font-bold">
                      {t("form.labels.confirmEmail", "Confirm Email Address")}
                    </label>
                    <Input
                      {...register("confirmEmail")}
                      placeholder={t("form.placeholders.confirmEmail", "e.g. john.smith@example.com")}
                      className="bg-background border-border focus:border-primary focus:ring-1 focus:ring-primary rounded-none font-sans-modern text-sm text-foreground font-semibold"
                    />
                    {errors.confirmEmail && (
                      <p className="text-destructive text-xs font-sans-modern font-semibold">{errors.confirmEmail.message}</p>
                    )}
                  </div>
                </div>

                {/* Preferred Investment Location */}
                <div className="space-y-2">
                  <label className="font-sans-modern text-xs tracking-widest uppercase text-foreground/80 font-bold">
                    {t("form.labels.preferredLocation", "Preferred Location")}
                  </label>
                  <select
                    {...register("preferredLocation")}
                    className="w-full bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none p-3 rounded-none font-sans-modern text-sm text-foreground font-semibold"
                  >
                    <option value="Paris">{t("form.locations.paris", "Paris & Ile-de-France")}</option>
                    <option value="French Riviera">{t("form.locations.frenchRiviera", "The French Riviera (Cote d'Azur)")}</option>
                    <option value="Luxembourg">{t("form.locations.luxembourg", "Luxembourg")}</option>
                    <option value="Greece">{t("form.locations.greece", "Greece (Athens & Islands)")}</option>
                  </select>
                  {errors.preferredLocation && (
                    <p className="text-destructive text-xs font-sans-modern font-semibold">{errors.preferredLocation.message}</p>
                  )}
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="font-sans-modern text-xs tracking-widest uppercase text-foreground/80 font-bold">
                    Investment Parameters & Message
                  </label>
                  <Textarea
                    {...register("message")}
                    placeholder="Please describe your ideal property type, budget, and timing..."
                    rows={5}
                    className="bg-background border-border focus:border-primary focus:ring-1 focus:ring-primary rounded-none font-sans-modern text-sm resize-none text-foreground font-semibold"
                  />
                  {errors.message && (
                    <p className="text-destructive text-xs font-sans-modern font-semibold">{errors.message.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-sans-modern text-xs tracking-widest uppercase py-6 rounded-none transition-all duration-300 shadow-sm"
                >
                  {isSubmitting ? (
                    "Transmitting Securely..."
                  ) : (
                    <span className="inline-flex items-center">
                      Transmit Inquiry <Send className="ml-2 h-4 w-4" />
                    </span>
                  )}
                </Button>

              </form>
            )}
          </div>

        </div>
      </section>
      <PageBody pageKey="contact" />
    </Layout>
  );
}
