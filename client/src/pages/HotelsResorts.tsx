import { getPage } from "@/content/registry";
import PageBody from "@/components/PageBody";
import { SITE_URL } from "@shared/const";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { IMAGES } from "@shared/images";
import { Button } from "@/components/ui/button";
import { Link } from "../components/Link";
import { ShieldAlert, Hotel, Map, ArrowRight } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import { useLanguage } from "../contexts/LanguageContext";

export default function HotelsResorts() {
  const { t } = useTranslation("HotelsResorts");
  const { language } = useLanguage();

  return (
    <Layout>
      <SEOHead />

      {/* Header Banner - 100% Opacity with Glassmorphism Text Box */}
      <section className="relative h-[60vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={IMAGES.santoriniHotel}
            alt={t("hero.imageAlt", "Luxury hotel in Santorini Greece overlooking the sea")}
            className="w-full h-full object-cover filter brightness-90"
          />
          <div className="absolute inset-0 bg-black/25" />
        </div>
        <div className="container relative z-10 max-w-4xl text-center px-4">
          <div className="bg-background/95 backdrop-blur-md p-8 sm:p-12 md:p-16 border border-white/20 shadow-2xl space-y-6">
            <span className="font-serif-classic text-xs sm:text-sm tracking-[0.4em] text-primary uppercase block font-bold">
              {t("hero.subtitle", "Commercial Acquisitions")}
            </span>
            <h1 className="font-serif-classic text-3xl sm:text-4xl md:text-5xl tracking-wide font-light text-primary">
              {getPage("hotelsResorts", language).data.h1}
            </h1>
            <p className="font-sans-modern text-sm sm:text-base text-foreground max-w-xl mx-auto font-semibold leading-relaxed">
              {t("hero.description", "Unlocking institutional-grade hospitality investments across Europe's prime tourist destinations. Specialized in confidential hotels, urban assets, and beachfront resorts.")}
            </p>
          </div>
        </div>
      </section>

      {/* Hospitality Investment Strategy - Balanced Contrast */}
      <section className="py-24 bg-card border-b border-border">
        <div className="container grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-serif-classic text-3xl tracking-wide font-light text-primary">
              {language === "en" ? (
                <>
                  Strategic Hospitality <span className="text-accent italic">Acquisitions & Asset</span> Management
                </>
              ) : (
                <>
                  {t("strategy.title", "Acquisitions Stratégiques & Gestion ")} <span className="text-accent italic">{t("strategy.titleHighlight", "d'Actifs Hôteliers")}</span>
                </>
              )}
            </h2>
            <p className="font-sans-modern text-base text-foreground font-semibold leading-relaxed">
              {t("strategy.description", "The European hospitality market is highly competitive and characterized by significant barriers to entry. Our specialized team operates as strategic advisors, bridging the gap between global capital and exclusive, off-market hotel properties. We focus on prime city-center assets and coastal resorts.")}
            </p>
          </div>
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="border border-border bg-background p-8 space-y-4 shadow-sm">
              <Hotel className="h-8 w-8 text-primary" />
              <h3 className="font-serif-classic text-2xl tracking-wider text-primary">{t("strategy.boutique.title", "Boutique Hotels")}</h3>
              <p className="font-sans-modern text-sm text-foreground/80 font-semibold leading-relaxed">
                {t("strategy.boutique.description", "Historic urban properties with high brand value and operational excellence in major European gateways.")}
              </p>
            </div>
            <div className="border border-border bg-background p-8 space-y-4 shadow-sm">
              <Map className="h-8 w-8 text-primary" />
              <h3 className="font-serif-classic text-2xl tracking-wider text-primary">{t("strategy.resorts.title", "Luxury Resorts")}</h3>
              <p className="font-sans-modern text-sm text-foreground/80 font-semibold leading-relaxed">
                {t("strategy.resorts.description", "Beachfront and mountain resorts in premier tourist destinations, combining luxury amenities with high occupancy.")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Geographical Focus (Maillage Interne Fort) */}
      <section className="py-24 bg-background border-b border-border">
        <div className="container space-y-16">
          <div className="text-center space-y-4">
            <span className="font-serif-classic text-sm tracking-[0.3em] text-primary uppercase block font-bold">
              {t("geography.subtitle", "Geographical Focus")}
            </span>
            <h2 className="font-serif-classic text-3xl md:text-4xl tracking-wide font-light text-primary">
              {t("geography.title", "Hospitality Hubs")}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Hub 1: European Capitals */}
            <div className="bg-card border border-border p-8 flex flex-col justify-between h-[380px] group transition-all duration-300 hover:border-primary hover:shadow-md">
              <div className="space-y-4">
                <span className="font-serif-classic text-xs tracking-widest text-accent uppercase block font-bold">
                  {t("geography.hubs.capitals.number", "01 . Capital Cities")}
                </span>
                <h3 className="font-serif-classic text-2xl tracking-wide text-primary">{t("geography.hubs.capitals.title", "European Capitals")}</h3>
                <p className="font-sans-modern text-sm text-foreground font-semibold leading-relaxed">
                  {t("geography.hubs.capitals.description", "Focusing on premium hotel acquisitions in Paris, London, and other capital cities. High barrier-to-entry urban assets with robust institutional demand.")}
                </p>
              </div>
              <Link href="/real-estate-paris">
                <span className="inline-flex items-center text-xs tracking-widest uppercase text-primary hover:text-accent font-bold cursor-pointer transition-colors pt-4">
                  {t("geography.hubs.capitals.link", "Paris Portfolio")} <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              </Link>
            </div>

            {/* Hub 2: French Cities */}
            <div className="bg-card border border-border p-8 flex flex-col justify-between h-[380px] group transition-all duration-300 hover:border-primary hover:shadow-md">
              <div className="space-y-4">
                <span className="font-serif-classic text-xs tracking-widest text-accent uppercase block font-bold">
                  {t("geography.hubs.france.number", "02 . France")}
                </span>
                <h3 className="font-serif-classic text-2xl tracking-wide text-primary">{t("geography.hubs.france.title", "Major French Cities")}</h3>
                <p className="font-sans-modern text-sm text-foreground font-semibold leading-relaxed">
                  {t("geography.hubs.france.description", "Targeting boutique hotels and yield-generating hospitality properties in Lyon, Bordeaux, and key coastal hubs along the French Riviera.")}
                </p>
              </div>
              <Link href="/real-estate-french-riviera">
                <span className="inline-flex items-center text-xs tracking-widest uppercase text-primary hover:text-accent font-bold cursor-pointer transition-colors pt-4">
                  {t("geography.hubs.france.link", "French Riviera Portfolio")} <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              </Link>
            </div>

            {/* Hub 3: Greece */}
            <div className="bg-card border border-border p-8 flex flex-col justify-between h-[380px] group transition-all duration-300 hover:border-primary hover:shadow-md">
              <div className="space-y-4">
                <span className="font-serif-classic text-xs tracking-widest text-accent uppercase block font-bold">
                  {t("geography.hubs.greece.number", "03 . Greece")}
                </span>
                <h3 className="font-serif-classic text-2xl tracking-wide text-primary">{t("geography.hubs.greece.title", "Greece & Islands")}</h3>
                <p className="font-sans-modern text-sm text-foreground font-semibold leading-relaxed">
                  {t("geography.hubs.greece.description", "Exceptional resort investment opportunities in Athens, Mykonos, Santorini, Samos, Kos, Rhodos and Crete. Capitalizing on Greece's booming luxury tourism sector.")}
                </p>
              </div>
              <Link href="/hotel-investment-greece">
                <span className="inline-flex items-center text-xs tracking-widest uppercase text-primary hover:text-accent font-bold cursor-pointer transition-colors pt-4">
                  {t("geography.hubs.greece.link", "Greek Hotel Portfolio")} <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Discretion & Confidentiality */}
      <section className="py-24 bg-card border-t border-border">
        <div className="container max-w-4xl border border-primary/20 bg-background p-12 text-center space-y-6 shadow-sm">
          <ShieldAlert className="h-12 w-12 text-primary mx-auto" />
          <h2 className="font-serif-classic text-3xl tracking-wide font-light text-primary">
            {language === "en" ? (
              <>
                Strict Confidentiality & <span className="text-accent italic">Off-Market</span> Discretion
              </>
            ) : (
              <>
                {t("confidentiality.title", "Confidentialité Absolue & Discrétion ")} <span className="text-accent italic">{t("confidentiality.titleHighlight", "Off-Market")}</span>
              </>
            )}
          </h2>
          <p className="font-sans-modern text-base text-foreground font-semibold leading-relaxed">
            {t("confidentiality.description", "Due to the highly sensitive nature of commercial hotel transactions, we never publish our active hospitality listings online. Our mandates are managed under strict Non-Disclosure Agreements (NDAs). To gain access to our institutional portfolio, please contact our lead commercial advisor.")}
          </p>
          <div className="pt-4">
            <Link href="/contact-newsletter">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-sans-modern text-xs tracking-widest uppercase py-6 px-10 rounded-none transition-all duration-300 shadow-md">
                {t("confidentiality.button", "Initiate Confidential Inquiry")}
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <PageBody pageKey="hotelsResorts" />
    </Layout>
  );
}
