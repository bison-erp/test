import { SITE_URL } from "@shared/const";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { IMAGES } from "@shared/images";
import { AGENCY_ADDRESS } from "@shared/const";
import { Landmark, Shield, Users, Trophy } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import { Link } from "../components/Link";

export default function About() {
  const { t } = useTranslation("About");

  return (
    <Layout>
      <SEOHead
        title={t("seo.title", "About Our Prestigious Real Estate Agency")}
        description={t("seo.description", "Learn more about Acropolis Real Estate, an elite buyer agency. Specialized in high-end European property acquisitions.")}
        keywords={t("seo.keywords", "about Acropolis Real Estate, real estate agent Paris, elite buyer agent Europe, real estate network Paris")}
        canonicalUrl={SITE_URL + "/about"}
        schemaType="AboutPage"
      />

      {/* Header Banner - 100% Opacity with Glassmorphism Text Box */}
      <section className="relative h-[60vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={IMAGES.faubourgSaintHonore}
            alt={t("header.imageAlt", "Faubourg Saint Honoré Paris Luxury District")}
            className="w-full h-full object-cover filter brightness-90"
          />
          <div className="absolute inset-0 bg-black/25" />
        </div>
        <div className="container relative z-10 max-w-4xl text-center px-4">
          <div className="bg-background/95 backdrop-blur-md p-8 sm:p-12 md:p-16 border border-white/20 shadow-2xl space-y-6">
            <span className="font-serif-classic text-xs sm:text-sm tracking-[0.4em] text-primary uppercase block font-bold">
              {t("header.subtitle", "Our Legacy")}
            </span>
            <h1 className="font-serif-classic text-3xl sm:text-4xl md:text-5xl tracking-wide font-light text-primary">
              {t("header.title", "About Acropolis")}
            </h1>
            <p className="font-sans-modern text-sm sm:text-base text-foreground max-w-xl mx-auto font-semibold leading-relaxed">
              {t("header.description", "Acropolis Real Estate is a premier boutique agency operating from the heart of Paris, dedicated to providing discerning global clients with uncompromised real estate solutions.")}
            </p>
          </div>
        </div>
      </section>

      {/* Agency Philosophy - Balanced Contrast */}
      <section className="py-24 bg-card border-b border-border">
        <div className="container grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-serif-classic text-3xl tracking-wide font-light text-primary">
              {t("philosophy.title", "A Unique Buyer-Agent Model Built on")} <span className="text-accent italic">{t("philosophy.titleHighlight", "Absolute Trust")}</span>
            </h2>
            <p className="font-sans-modern text-base text-foreground font-semibold leading-relaxed">
              {t("philosophy.paragraph1", "Founded on the principles of classic architectural heritage and modern financial sophistication, Acropolis Real Estate operates under a highly specialized buyer-agent model. Unlike traditional listing agencies, our sole fiduciary duty is to you, the buyer.")}
            </p>
            <p className="font-sans-modern text-base text-foreground font-semibold leading-relaxed">
              {t("philosophy.paragraph2", "We coordinate a high-caliber network of local property experts, legal advisors, and financial analysts across Paris, the French Riviera, Luxembourg, and Greece. Our objective is to secure the perfect heritage asset for your portfolio under complete confidentiality.")}
            </p>
          </div>
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="border border-border bg-background p-8 space-y-4 shadow-sm">
              <Shield className="h-8 w-8 text-primary" />
              <h3 className="font-serif-classic text-2xl tracking-wider text-primary">{t("philosophy.features.fiduciary.title", "Absolute Fiduciary Duty")}</h3>
              <p className="font-sans-modern text-sm text-foreground/80 font-semibold leading-relaxed">
                {t("philosophy.features.fiduciary.description", "We represent buyers exclusively, ensuring completely unbiased advice and aggressive price negotiations.")}
              </p>
            </div>
            <div className="border border-border bg-background p-8 space-y-4 shadow-sm">
              <Users className="h-8 w-8 text-primary" />
              <h3 className="font-serif-classic text-2xl tracking-wider text-primary">{t("philosophy.features.network.title", "Elite Network")}</h3>
              <p className="font-sans-modern text-sm text-foreground/80 font-semibold leading-relaxed">
                {t("philosophy.features.network.description", "Our network consists of highly vetted local professionals who possess deep, insider knowledge of their markets.")}
              </p>
            </div>
          </div>
        </div>
      </section>



      {/* Core Values */}
      <section className="py-24 bg-card">
        <div className="container max-w-5xl text-center space-y-16">
          <div className="space-y-4">
            <span className="font-serif-classic text-sm tracking-[0.3em] text-primary uppercase block font-bold">
              {t("values.subtitle", "Our Values")}
            </span>
            <h2 className="font-serif-classic text-3xl md:text-4xl tracking-wide font-light text-primary">
              {t("values.title", "The Pillars of Our Excellence")}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 border border-border bg-background space-y-4 shadow-sm">
              <Landmark className="h-10 w-10 text-primary mx-auto" />
              <h3 className="font-serif-classic text-2xl tracking-wider text-primary">{t("values.items.heritage.title", "Heritage & Legacy")}</h3>
              <p className="font-sans-modern text-sm text-foreground/80 font-semibold leading-relaxed">
                {t("values.items.heritage.description", "We believe that real estate is more than just a financial asset; it is a legacy of architectural beauty and cultural heritage to be preserved.")}
              </p>
            </div>
            <div className="p-8 border border-border bg-background space-y-4 shadow-sm">
              <Trophy className="h-10 w-10 text-primary mx-auto" />
              <h3 className="font-serif-classic text-2xl tracking-wider text-primary">{t("values.items.standards.title", "Uncompromising Standards")}</h3>
              <p className="font-sans-modern text-sm text-foreground/80 font-semibold leading-relaxed">
                {t("values.items.standards.description", "From the selection of our local experts to the depth of our financial modeling, we settle for nothing less than absolute perfection.")}
              </p>
            </div>
            <div className="p-8 border border-border bg-background space-y-4 shadow-sm">
              <Shield className="h-10 w-10 text-primary mx-auto" />
              <h3 className="font-serif-classic text-2xl tracking-wider text-primary">{t("values.items.confidentiality.title", "Guaranteed Confidentiality")}</h3>
              <p className="font-sans-modern text-sm text-foreground/80 font-semibold leading-relaxed">
                {t("values.items.confidentiality.description", "We operate under strict confidentiality protocols to ensure that our clients' personal identities and transaction histories remain secure.")}
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
