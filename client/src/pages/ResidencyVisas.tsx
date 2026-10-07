import { useLanguage } from "@/contexts/LanguageContext";
import { getPage } from "@/content/registry";
import PageBody from "@/components/PageBody";
import { SITE_URL } from "@shared/const";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { IMAGES } from "@shared/images";
import { Button } from "@/components/ui/button";
import { Link } from "../components/Link";
import { Landmark, ShieldCheck, ArrowRight } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

export default function ResidencyVisas() {
  const { language } = useLanguage();
  const { t } = useTranslation("ResidencyVisas");

  return (
    <Layout>
      <SEOHead />

      {/* Header Banner - 100% Opacity with Glassmorphism Text Box */}
      <section className="relative h-[60vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={IMAGES.athensAcropolis}
            alt="Historical Athens Acropolis Parthenon"
            className="w-full h-full object-cover filter brightness-90"
          />
          <div className="absolute inset-0 bg-black/25" />
        </div>
        <div className="container relative z-10 max-w-4xl text-center px-4">
          <div className="bg-background/95 backdrop-blur-md p-8 sm:p-12 md:p-16 border border-white/20 shadow-2xl space-y-6">
            <span className="font-serif-classic text-xs sm:text-sm tracking-[0.4em] text-primary uppercase block font-bold">
              {t("header.subtitle", "Global Mobility Solutions")}
            </span>
            <h1 className="font-serif-classic text-3xl sm:text-4xl md:text-5xl tracking-wide font-light text-primary">
              {getPage("residencyVisas", language).data.h1}
            </h1>
            <p className="font-sans-modern text-sm sm:text-base text-foreground max-w-xl mx-auto font-semibold leading-relaxed">
              {t("header.description", "Securing your global mobility and wealth shelter through strategic real estate acquisitions. Specializing in prestigious European Golden Visa and residency pathways.")}
            </p>
          </div>
        </div>
      </section>

      {/* Program Comparison - Balanced Contrast */}
      <section className="py-24 bg-card border-b border-border">
        <div className="container grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-serif-classic text-3xl tracking-wide font-light text-primary">
              {t("comparison.title", "Strategic Residency by")} <span className="text-accent italic">{t("comparison.titleHighlight", "Real Estate Investment")}</span>
            </h2>
            <p className="font-sans-modern text-base text-foreground font-semibold leading-relaxed">
              {t("comparison.paragraph1", "In an increasingly complex global environment, securing alternative residency or a secondary foothold in Europe is a highly effective risk-mitigation strategy. We provide comprehensive, end-to-end guidance for global investors looking to acquire high-value real estate that simultaneously qualifies for prestigious national residency programs.")}
            </p>
            <p className="font-sans-modern text-base text-foreground font-semibold leading-relaxed">
              {t("comparison.paragraph2", "We collaborate with top-tier immigration attorneys and local notary networks to ensure that both your property acquisition and your residency application are executed flawlessly, with full compliance and absolute discretion.")}
            </p>
          </div>
          <div className="lg:col-span-6 space-y-6">
            <div className="border border-border bg-background p-6 flex items-start space-x-4 shadow-sm">
              <Landmark className="h-8 w-8 text-primary shrink-0 mt-1" />
              <div>
                <h3 className="font-serif-classic text-2xl tracking-wider text-primary">{t("comparison.greece.title", "Greek Golden Visa")}</h3>
                <p className="font-sans-modern text-sm text-foreground/80 font-semibold leading-relaxed mt-1">
                  {t("comparison.greece.description", "Obtain a 5-year renewable residency permit for your entire family by investing in premium Greek real estate. No requirement to reside in the country.")}
                </p>
                <Link href="/golden-visa-greece">
                  <span className="inline-flex items-center text-xs tracking-widest uppercase text-primary hover:text-accent font-bold mt-3 cursor-pointer">
                    {t("comparison.greece.link", "Program Details")} <ArrowRight className="ml-2 h-4 w-4" />
                  </span>
                </Link>
              </div>
            </div>
            <div className="border border-border bg-background p-6 flex items-start space-x-4 shadow-sm">
              <ShieldCheck className="h-8 w-8 text-primary shrink-0 mt-1" />
              <div>
                <h3 className="font-serif-classic text-2xl tracking-wider text-primary">{t("comparison.luxembourgFrance.title", "Luxembourg & France")}</h3>
                <p className="font-sans-modern text-sm text-foreground/80 font-semibold leading-relaxed mt-1">
                  {t("comparison.luxembourgFrance.description", "Explore prestigious residency pathways in triple-A rated Luxembourg or high-capital appreciation regions in France through high-value real estate investments, as well as through the creation of businesses with genuine economic activity.")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Greek Golden Visa Focus - High Contrast */}
      <section className="py-24 bg-background border-b border-border">
        <div className="container grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 relative h-[400px] overflow-hidden border border-border shadow-md">
            <img
              src={IMAGES.greeceLuxuryVilla}
              alt="Luxury modern villa in Greece with sea view"
              className="w-full h-full object-cover opacity-100"
            />
          </div>
          <div className="lg:col-span-5 space-y-6">
            <span className="font-serif-classic text-sm tracking-[0.3em] text-primary uppercase block font-bold">
              {t("spotlight.subtitle", "Spotlight Program")}
            </span>
            <h2 className="font-serif-classic text-3xl md:text-4xl tracking-wide font-light text-primary">
              {t("spotlight.title", "The Greek Golden Visa")}
            </h2>
            <p className="font-sans-modern text-base text-foreground font-semibold leading-relaxed">
              {t("spotlight.paragraph1", "The Greek Golden Visa program remains one of Europe's most popular and accessible residency-by-investment schemes. It grants a 5-year renewable residency permit to the main investor, spouse, children under 21, and parents of both spouses.")}
            </p>
            <p className="font-sans-modern text-base text-foreground font-semibold leading-relaxed">
              {t("spotlight.paragraph2", "With no physical stay requirements, full access to the Schengen Zone, and excellent capital appreciation potential on premium real estate, it represents a highly strategic asset for global wealth planning.")}
            </p>
		            <div className="pt-2">
		              <Link href="/golden-visa-greece">
		                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-sans-modern text-xs tracking-widest uppercase py-5 px-8 rounded-none transition-all duration-300">
		                  {t("spotlight.button", "Explore Greek Golden Visa Benefits")} <ArrowRight className="ml-2 h-4 w-4" />
		                </Button>
		              </Link>
		            </div>
          </div>
        </div>
      </section>

      {/* Contact Section Link */}
      <section className="py-24 text-center space-y-8 bg-card">
        <div className="container max-w-3xl space-y-6">
          <h2 className="font-serif-classic text-3xl md:text-4xl tracking-wide font-light text-primary">
            {t("contact.title", "Secure Your Global")} <span className="text-accent italic">{t("contact.titleHighlight", "Mobility")}</span>
          </h2>
          <p className="font-sans-modern text-base text-foreground font-semibold leading-relaxed">
            {t("contact.description", "Our private immigration and real estate advisors are ready to design a tailored investment roadmap for you and your family. Connect with us today.")}
          </p>
          <div className="pt-4">
            <Link href="/contact-newsletter">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-sans-modern text-xs tracking-widest uppercase py-6 px-10 rounded-none transition-all duration-300 shadow-md">
                {t("contact.button", "Schedule a Private Consultation")}
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <PageBody pageKey="residencyVisas" />
    </Layout>
  );
}
