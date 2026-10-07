import { SITE_URL } from "@shared/const";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { IMAGES } from "@shared/images";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Landmark, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import { useLanguage } from "../contexts/LanguageContext";

export default function LuxuryRealEstateLuxembourg() {
  const { t } = useTranslation("RealEstateLuxembourg");
  const { language } = useLanguage();

  return (
    <Layout>
      <SEOHead
        title={t("seo.title", "Real Estate Luxembourg | Premium Apartments & Offices")}
        description={t("seo.description", "Discover prestigious apartments and corporate office spaces for sale in Luxembourg. Professional buyer agent services in Belair, Limpertsberg, and Kirchberg.")}
        keywords={t("seo.keywords", "real estate Luxembourg, buy apartment Luxembourg, corporate offices Luxembourg buy, premium real estate Luxembourg, real estate agent Luxembourg")}
        canonicalUrl={SITE_URL + "/real-estate-luxembourg"}
        schemaType="WebPage"
      />

      {/* Header Banner */}
      <section className="relative py-24 bg-card/50 overflow-hidden border-b border-border/10">
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.luxembourgCity}
            alt={t("header.imageAlt", "Panoramic view of modern Luxembourg City financial district")}
            className="w-full h-full object-cover opacity-30 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent z-10" />
        </div>
        <div className="container relative z-20 text-center space-y-4">
          <span className="font-serif-classic text-xs tracking-[0.3em] text-primary uppercase block font-semibold">
            {t("header.subtitle", "Regional Portfolio")}
          </span>
          <h1 className="font-serif-classic text-4xl md:text-5xl tracking-wide font-light text-foreground">
            {t("header.title", "Luxembourg")}
          </h1>
          <p className="font-sans-modern text-base text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
            {t("header.description", "Acquire premium residential properties and high-yield corporate office spaces in one of Europe's most stable, triple-A rated financial capitals.")}
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
                  Stable Yields & Wealth Preservation in a Triple-A Economy
                </>
              ) : (
                <>
                  Rendements Stables & <span className="text-primary italic">Préservation du Patrimoine</span> dans une Économie Triple-A
                </>
              )}
            </h2>
            <p className="font-sans-modern text-base text-muted-foreground font-light leading-relaxed">
              {t("content.paragraph1", "Luxembourg represents the ultimate European benchmark for financial stability and wealth preservation. As one of the few global economies with a consistent triple-A rating, its real estate market is characterized by robust capital preservation, low volatility, and highly reliable rental yields, driven by its position as a premier global financial center.")}
            </p>
            <p className="font-sans-modern text-base text-muted-foreground font-light leading-relaxed">
              {t("content.paragraph2", "Our specialized portfolio focuses on prime locations within Luxembourg City, including the prestigious residential districts of Belair and Limpertsberg, as well as the dynamic commercial and financial hub of Kirchberg. Whether you are looking to acquire a high-end contemporary apartment for personal use or a strategic corporate office building to generate institutional yield, we coordinate with vetted local professionals to source the perfect asset.")}
            </p>
            <p className="font-sans-modern text-base text-muted-foreground font-light leading-relaxed">
              {t("content.paragraph3", "We assist our clients through every step of the transaction, ensuring full compliance with Luxembourg's highly secure legal framework. Our buyer-agent model guarantees completely unbiased representation, focusing solely on securing your financial interests.")}
            </p>
            
            {/* Maillage Interne Fort */}
            <div className="p-6 border border-primary/20 bg-primary/5 space-y-4">
              <h3 className="font-serif-classic text-lg tracking-wider text-primary">
                {t("internalLinking.title", "Explore Other Portfolios")}
              </h3>
              <p className="font-sans-modern text-sm text-muted-foreground font-light leading-relaxed">
                {language === "en" ? (
                  <>
                    If you wish to expand your European real estate holdings, explore our prestigious off-market apartments in{" "}
                    <Link href="/real-estate-paris">
                      <span className="text-primary hover:underline cursor-pointer">Paris</span>
                    </Link>
                    , waterfront villas on the{" "}
                    <Link href="/real-estate-french-riviera">
                      <span className="text-primary hover:underline cursor-pointer">French Riviera</span>
                    </Link>
                    , or high-growth hospitality assets in{" "}
                    <Link href="/hotels-resorts">
                      <span className="text-primary hover:underline cursor-pointer">Greece</span>
                    </Link>
                    .
                  </>
                ) : (
                  <>
                    Si vous souhaitez diversifier vos investissements immobiliers en Europe, découvrez nos appartements de prestige off-market à{" "}
                    <Link href="/fr/real-estate-paris">
                      <span className="text-primary hover:underline cursor-pointer">Paris</span>
                    </Link>
                    , nos villas en bord de mer sur la{" "}
                    <Link href="/fr/real-estate-french-riviera">
                      <span className="text-primary hover:underline cursor-pointer">Côte d'Azur</span>
                    </Link>
                    , ou nos actifs hôteliers à forte croissance en{" "}
                    <Link href="/fr/hotels-resorts">
                      <span className="text-primary hover:underline cursor-pointer">Grèce</span>
                    </Link>
                    .
                  </>
                )}
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="border border-border/10 bg-card p-8 space-y-4">
              <Landmark className="h-8 w-8 text-primary" />
              <h3 className="font-serif-classic text-xl tracking-wider">{t("features.focusAreas.title", "Luxembourg Focus Areas")}</h3>
              <div className="space-y-3 pt-2">
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                  <span className="font-sans-modern text-sm font-light">{t("features.focusAreas.area1", "Belair Prestigious Residences")}</span>
                </div>
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                  <span className="font-sans-modern text-sm font-light">{t("features.focusAreas.area2", "Limpertsberg Historic Apartments")}</span>
                </div>
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                  <span className="font-sans-modern text-sm font-light">{t("features.focusAreas.area3", "Kirchberg Financial & Office Hub")}</span>
                </div>
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                  <span className="font-sans-modern text-sm font-light">{t("features.focusAreas.area4", "Cents & Merl Residential Districts")}</span>
                </div>
              </div>
            </div>
	
            <div className="border border-border/10 bg-card p-8 space-y-4">
              <ShieldCheck className="h-8 w-8 text-primary" />
              <h3 className="font-serif-classic text-xl tracking-wider">{t("features.wealthPreservation.title", "Secure Wealth Preservation")}</h3>
              <p className="font-sans-modern text-sm text-muted-foreground font-light leading-relaxed">
                {t("features.wealthPreservation.description", "Our Luxembourg office is dedicated to helping global investors preserve and grow their capital. We offer comprehensive market research, financial modeling, and legal coordination to ensure your real estate acquisition is a sound, long-term success.")}
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
                Access Private Off-Market Luxembourg Assets
              </>
            ) : (
              <>
                Accédez aux Actifs Luxembourgeois <span className="text-primary italic">Off-Market</span> Privés
              </>
            )}
          </h2>
          <p className="font-sans-modern text-base text-muted-foreground font-light leading-relaxed">
            {t("cta.description", "Due to the highly discreet nature of Luxembourg's financial community, many premium properties are never listed publicly. Connect with our local advisors to discuss your parameters under complete confidentiality.")}
          </p>
          <div className="pt-4">
		            <Link href="/contact-newsletter">
		              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-sans-modern text-xs tracking-widest uppercase py-6 px-10 rounded-none transition-all duration-300">
		                {t("cta.button", "Connect with us")}
		              </Button>
		            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
