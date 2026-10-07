import { SITE_URL } from "@shared/const";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { IMAGES } from "@shared/images";
import { Button } from "@/components/ui/button";
import { Link } from "../components/Link";
import { Landmark, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

export default function GoldenVisaGreece() {
  const { t } = useTranslation("GoldenVisaGreece");

  return (
    <Layout>
      <SEOHead
        title={t("seo.title", "Greek Golden Visa Program | European Residency by Investment")}
        description={t("seo.description", "Learn how to obtain a 5-year renewable European residency permit through strategic real estate investment in Greece. Discover qualifying off-market properties.")}
        keywords={t("seo.keywords", "golden visa Greece, Greek residency by investment, buy property Greece Golden Visa, European mobility investment, residency Greece real estate, Greek residency permit")}
        canonicalUrl={SITE_URL + "/golden-visa-greece"}
        schemaType="WebPage"
      />

      {/* Header Banner */}
      <section className="relative py-24 bg-card/50 overflow-hidden border-b border-border/10">
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.greeceLuxuryVilla}
            alt={t("header.imageAlt", "Beautiful luxury villa in Greece with sea view")}
            className="w-full h-full object-cover opacity-30 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent z-10" />
        </div>
        <div className="container relative z-20 text-center space-y-4">
          <span className="font-serif-classic text-xs tracking-[0.3em] text-primary uppercase block font-semibold">
            {t("header.subtitle", "Mobility Programs")}
          </span>
          <h1 className="font-serif-classic text-4xl md:text-5xl tracking-wide font-light text-foreground">
            {t("header.title", "Golden Visa Greece")}
          </h1>
          <p className="font-sans-modern text-base text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
            {t("header.description", "Secure European residency for your entire family through strategic real estate acquisitions in Athens, Mykonos, Santorini, or Crete.")}
          </p>
        </div>
      </section>

      {/* In-Depth SEO Content - "Meilleur sur Internet" Style */}
      <section className="py-24">
        <div className="container grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7 space-y-8">
            <h2 className="font-serif-classic text-3xl tracking-wide font-light text-foreground">
              {t("content.title", "Unlocking Global Mobility & Wealth Protection through")} <span className="text-primary italic">{t("content.titleHighlight", "Greek Real Estate")}</span>
            </h2>
            <p className="font-sans-modern text-base text-muted-foreground font-light leading-relaxed">
              {t("content.paragraph1", "The Greek Golden Visa program remains one of the most attractive and prestigious residency-by-investment schemes in the European Union. It grants a 5-year renewable residency permit to the main investor, spouse, children under 21, and parents of both spouses. With no physical stay requirements and full access to the Schengen Zone, it serves as a highly strategic asset for global wealth planning and mobility.")}
            </p>
            <p className="font-sans-modern text-base text-muted-foreground font-light leading-relaxed">
              {t("content.paragraph2", "Our specialized mobility team provides comprehensive, end-to-end guidance. We help you identify qualifying premium properties in high-demand areas, including Athens, Mykonos, Santorini, and Crete. Whether you are looking for a luxury beachfront villa, a historic townhouse, or a modern apartment, we coordinate with top-tier immigration attorneys and local notary networks to ensure a flawless execution of both your property acquisition and your residency application.")}
            </p>
            <p className="font-sans-modern text-base text-muted-foreground font-light leading-relaxed">
              {t("content.paragraph3", "We also specialize in assisting Chinese investors, providing bilingual legal support and tailored administrative guidance to navigate international fund transfers, document translation, and legal certifications under complete security and discretion.")}
            </p>
            
            {/* Maillage Interne Fort */}
            <div className="p-6 border border-primary/20 bg-primary/5 space-y-4">
              <h3 className="font-serif-classic text-lg tracking-wider text-primary">{t("content.internalLinking.title", "Explore Other Opportunities")}</h3>
              <p className="font-sans-modern text-sm text-muted-foreground font-light leading-relaxed">
                {t("content.internalLinking.text", "If you are interested in commercial opportunities, explore our high-yield")} <Link href="/hotel-investment-greece"><span className="text-primary hover:underline cursor-pointer">{t("content.internalLinking.link1", "Greek Hotel Investment Portfolio")}</span></Link>{t("content.internalLinking.text2", ". For prestigious residential properties in major financial centers, see our exclusive listings in")} <Link href="/real-estate-paris"><span className="text-primary hover:underline cursor-pointer">{t("content.internalLinking.link2", "Paris")}</span></Link> {t("content.internalLinking.text3", "and")} <Link href="/real-estate-luxembourg"><span className="text-primary hover:underline cursor-pointer">{t("content.internalLinking.link3", "Luxembourg")}</span></Link>{t("content.internalLinking.text4", ".")}
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="border border-border/10 bg-card p-8 space-y-4">
              <Landmark className="h-8 w-8 text-primary" />
              <h3 className="font-serif-classic text-xl tracking-wider">{t("benefits.title", "Golden Visa Benefits")}</h3>
              <div className="space-y-3 pt-2">
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                  <span className="font-sans-modern text-sm font-light">{t("benefits.item1", "Visa-Free Travel to 29 Schengen Countries")}</span>
                </div>
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                  <span className="font-sans-modern text-sm font-light">{t("benefits.item2", "Residency for Three Generations")}</span>
                </div>
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                  <span className="font-sans-modern text-sm font-light">{t("benefits.item3", "No Minimum Stay Requirements")}</span>
                </div>
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                  <span className="font-sans-modern text-sm font-light">{t("benefits.item4", "High Rental Yield & Capital Growth")}</span>
                </div>
              </div>
            </div>
	
            <div className="border border-border/10 bg-card p-8 space-y-4">
              <ShieldCheck className="h-8 w-8 text-primary" />
              <h3 className="font-serif-classic text-xl tracking-wider">{t("legal.title", "End-to-End Legal Support")}</h3>
              <p className="font-sans-modern text-sm text-muted-foreground font-light leading-relaxed">
                {t("legal.description", "We coordinate with elite immigration law firms in Athens to manage your application process from start to finish. We ensure full compliance with the latest Greek immigration laws and guarantee absolute discretion.")}
              </p>
            </div>
          </div>
        </div>
      </section>
	
      {/* CTA Section */}
      <section className="py-24 text-center space-y-8 bg-gradient-to-b from-card/50 to-background">
        <div className="container max-w-3xl space-y-6">
          <h2 className="font-serif-classic text-3xl tracking-wide font-light text-foreground">
            {t("cta.title", "Secure Your European")} <span className="text-primary italic">{t("cta.titleHighlight", "Residency")}</span> {t("cta.titleEnd", "Today")}
          </h2>
          <p className="font-sans-modern text-base text-muted-foreground font-light leading-relaxed">
            {t("cta.description", "Many of our qualifying Greek properties are held under confidential, off-market mandates. Connect with our global mobility specialists to design your tailored investment roadmap.")}
          </p>
          <div className="pt-4">
            <Link href="/contact-newsletter">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-sans-modern text-xs tracking-widest uppercase py-6 px-10 rounded-none transition-all duration-300">
                {t("cta.button", "Initiate Golden Visa Inquiry")}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
