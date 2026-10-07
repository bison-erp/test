import { SITE_URL } from "@shared/const";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { IMAGES } from "@shared/images";
import { Button } from "@/components/ui/button";
import { Link } from "../components/Link";
import { Landmark, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import { useLanguage } from "../contexts/LanguageContext";

export default function HotelInvestmentGreece() {
  const { t } = useTranslation("HotelInvestmentGreece");
  const { language } = useLanguage();

  return (
    <Layout>
      <SEOHead
        title={t("seo.title", "Hotel Investment Greece | Exclusive Hospitality Acquisitions")}
        description={t("seo.description", "Acquire high-yield boutique hotels and luxury resorts in Athens, Mykonos, and Santorini. Strategic commercial hospitality investments in Greece.")}
        keywords={t("seo.keywords", "hotel investment Greece, buy resort Greece, hotels for sale Greece, buy boutique hotel Athens, hospitality acquisition Greek islands, resort Mykonos sale")}
        canonicalUrl={SITE_URL + "/hotel-investment-greece"}
        schemaType="WebPage"
      />

      {/* Header Banner */}
      <section className="relative py-24 bg-card/50 overflow-hidden border-b border-border/10">
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.santoriniResort}
            alt={t("header.imageAlt", "Panoramic view of a luxury resort swimming pool in Santorini Greece")}
            className="w-full h-full object-cover opacity-30 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent z-10" />
        </div>
        <div className="container relative z-20 text-center space-y-4">
          <span className="font-serif-classic text-xs tracking-[0.3em] text-primary uppercase block font-semibold">
            {t("header.subtitle", "Commercial Portfolio")}
          </span>
          <h1 className="font-serif-classic text-4xl md:text-5xl tracking-wide font-light text-foreground">
            {t("header.title", "Hotel Investment Greece")}
          </h1>
          <p className="font-sans-modern text-base text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
            {t("header.description", "Acquire exceptional boutique hotels and luxury beachfront resorts in Greece's most prestigious and high-growth tourist destinations.")}
          </p>
        </div>
      </section>

      {/* In-Depth SEO Content - "Meilleur sur Internet" Style */}
      <section className="py-24">
        <div className="container grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7 space-y-8">
            <h2 className="font-serif-classic text-3xl tracking-wide font-light text-foreground">
              {language === "en" ? (
                <>
                  Capitalizing on Greece's Booming <span className="text-primary italic">Tourism Sector</span>
                </>
              ) : (
                <>
                  Capitaliser sur l'Essor du Secteur <span className="text-primary italic">Touristique</span> en Grèce
                </>
              )}
            </h2>
            <p className="font-sans-modern text-base text-muted-foreground font-light leading-relaxed">
              {t("content.paragraph1", "Greece's hospitality sector is experiencing unprecedented growth, driven by robust international tourist arrivals and a strong demand for high-end boutique experiences. Acquiring hotel assets in prime locations, such as Athens, Mykonos, Santorini, Samos, Kos, Rhodos and Crete, offers institutional investors and boutique operators a unique opportunity to secure solid yields and long-term capital appreciation.")}
            </p>
            <p className="font-sans-modern text-base text-muted-foreground font-light leading-relaxed">
              {t("content.paragraph2", "Our specialized commercial team bridges the gap between global capital and exclusive, off-market Greek hotel properties. We focus on high-yield boutique hotels in historic Athens, as well as prestigious beachfront resorts on the Greek islands. Whether you are looking for a fully operational asset with a strong brand value or a value-add property with development potential, we coordinate with vetted local professionals to source the perfect asset.")}
            </p>
            <p className="font-sans-modern text-base text-muted-foreground font-light leading-relaxed">
              {t("content.paragraph3", "We guide our clients through every step of the transaction, coordinating rigorous financial modeling, technical due diligence, operator selection, and legal compliance under complete confidentiality.")}
            </p>
            
            {/* Maillage Interne Fort */}
            <div className="p-6 border border-primary/20 bg-primary/5 space-y-4 text-left">
              <h3 className="font-serif-classic text-lg tracking-wider text-primary">{t("goldenVisa.title", "Looking for Residency?")}</h3>
              <p className="font-sans-modern text-sm text-muted-foreground font-light leading-relaxed">
                {language === "en" ? (
                  <>
                    Many of our commercial real estate investments in Greece also qualify for the prestigious{" "}
                    <Link href="/golden-visa-greece">
                      <span className="text-primary hover:underline cursor-pointer">Greek Golden Visa Program</span>
                    </Link>
                    , granting 5-year renewable European residency for your entire family.
                  </>
                ) : (
                  <>
                    Bon nombre de nos investissements immobiliers commerciaux en Grèce sont également éligibles au prestigieux{" "}
                    <Link href="/golden-visa-greece">
                      <span className="text-primary hover:underline cursor-pointer">Programme du Golden Visa Grec</span>
                    </Link>
                    , accordant une résidence européenne renouvelable de 5 ans pour l'ensemble de votre famille.
                  </>
                )}
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="border border-border/10 bg-card p-8 space-y-4">
              <Landmark className="h-8 w-8 text-primary" />
              <h3 className="font-serif-classic text-xl tracking-wider">{t("focusHubs.title", "Greek Focus Hubs")}</h3>
              <div className="space-y-3 pt-2">
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                  <span className="font-sans-modern text-sm font-light">{t("focusHubs.item1", "Athens Historical Boutique Hotels")}</span>
                </div>
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                  <span className="font-sans-modern text-sm font-light">{t("focusHubs.item2", "Mykonos Luxury Beach Resorts")}</span>
                </div>
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                  <span className="font-sans-modern text-sm font-light">{t("focusHubs.item3", "Santorini Caldera View Hotels")}</span>
                </div>
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                  <span className="font-sans-modern text-sm font-light">{t("focusHubs.item4", "Crete Premium Coastal Resorts")}</span>
                </div>
              </div>
            </div>
	
            <div className="border border-border/10 bg-card p-8 space-y-4">
              <ShieldCheck className="h-8 w-8 text-primary" />
              <h3 className="font-serif-classic text-xl tracking-wider">{t("nda.title", "Strict NDA Protocols")}</h3>
              <p className="font-sans-modern text-sm text-muted-foreground font-light leading-relaxed">
                {t("nda.description", "Due to the highly sensitive nature of commercial hotel transactions, we never publish our active hospitality listings online. All inquiries are managed under strict Non-Disclosure Agreements (NDAs).")}
              </p>
            </div>
          </div>
        </div>
      </section>
	
      {/* CTA Section */}
      <section className="py-24 text-center space-y-8 bg-gradient-to-b from-card/50 to-background">
        <div className="container max-w-3xl space-y-6">
          <h2 className="font-serif-classic text-3xl tracking-wide font-light text-foreground">
            {language === "en" ? (
              <>
                Initiate Confidential <span className="text-primary italic">Greek Hotel</span> Inquiry
              </>
            ) : (
              <>
                Initier une Demande Confidentielle pour un <span className="text-primary italic">Hôtel en Grèce</span>
              </>
            )}
          </h2>
          <p className="font-sans-modern text-base text-muted-foreground font-light leading-relaxed">
            {t("cta.description", "Connect with our lead commercial hospitality advisor to gain access to our private, off-market Greek resort portfolio.")}
          </p>
          <div className="pt-4">
            <Link href="/contact-newsletter">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-sans-modern text-xs tracking-widest uppercase py-6 px-10 rounded-none transition-all duration-300">
                {t("cta.button", "Contact Commercial Advisor")}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
