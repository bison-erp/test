import { SITE_URL } from "@shared/const";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { IMAGES } from "@shared/images";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Landmark, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import { useLanguage } from "../contexts/LanguageContext";

export default function LuxuryRealEstateParis() {
  const { t } = useTranslation("RealEstateParis");
  const { language } = useLanguage();

  return (
    <Layout>
      <SEOHead
        title={t("seo.title", "Real Estate Paris | Exclusive Off-Market Apartments")}
        description={t("seo.description", "Discover prestigious off-market apartments and penthouses for sale in Paris' 1st, 8th, and 16th Arrondissements. Professional buyer agent services.")}
        keywords={t("seo.keywords", "real estate Paris, buy apartment Paris, off-market apartment Paris buy, Haussmann apartment Paris sale, penthouse Paris buy, real estate agent Paris")}
        canonicalUrl={SITE_URL + "/real-estate-paris"}
        schemaType="WebPage"
      />

      {/* Header Banner */}
      <section className="relative py-24 bg-card/50 overflow-hidden border-b border-border/10">
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.parisApartmentElegant}
            alt={t("banner.alt", "Exclusive Haussmannian luxury apartment interior in Paris")}
            className="w-full h-full object-cover opacity-30 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent z-10" />
        </div>
        <div className="container relative z-20 text-center space-y-4">
          <span className="font-serif-classic text-xs tracking-[0.3em] text-primary uppercase block font-semibold">
            {t("banner.subtitle", "Regional Portfolio")}
          </span>
          <h1 className="font-serif-classic text-4xl md:text-5xl tracking-wide font-light text-foreground">
            {t("banner.title", "Paris & Ile-de-France")}
          </h1>
          <p className="font-sans-modern text-base text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
            {t("banner.description", "Acquire exceptional, highly confidential off-market residential properties and premium corporate offices in the most prestigious districts of the French capital.")}
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
                  Securing High-Capital Appreciation Heritage Assets in Paris
                </>
              ) : (
                <>
                  Sécuriser des <span className="text-primary italic">Actifs Patrimoniaux</span> à Forte Valorisation à Paris
                </>
              )}
            </h2>
            <p className="font-sans-modern text-base text-muted-foreground font-light leading-relaxed">
              {t("content.p1", "Parisian real estate is globally recognized as one of the most stable and reliable wealth shelters. The combination of historical preservation, limited new supply, and consistent international demand ensures that premium properties in the capital maintain their value and deliver strong, long-term capital appreciation.")}
            </p>
            <p className="font-sans-modern text-base text-muted-foreground font-light leading-relaxed">
              {t("content.p2", "We specialize in identifying prime residential properties in the most prestigious locations, including the Golden Triangle (8th Arrondissement), Saint-Germain-des-Prés (6th Arrondissement), and the highly desirable residential areas of the 16th Arrondissement. From classic high-ceiling Haussmannian apartments to contemporary penthouses with panoramic views of the Eiffel Tower, we coordinate with a network of local experts to source the perfect asset for your portfolio.")}
            </p>
            <p className="font-sans-modern text-base text-muted-foreground font-light leading-relaxed">
              {t("content.p3", "Additionally, we assist institutional investors and corporate clients in acquiring premium office buildings and headquarters, ensuring solid yields and corporate prestige.")}
            </p>
            
            {/* Maillage Interne Fort */}
            <div className="p-6 border border-primary/20 bg-primary/5 space-y-4">
              <h3 className="font-serif-classic text-lg tracking-wider text-primary">
                {t("internal_linking.title", "Looking Beyond Paris?")}
              </h3>
              <p className="font-sans-modern text-sm text-muted-foreground font-light leading-relaxed">
                {language === "en" ? (
                  <>
                    If you are looking to diversify your European portfolio, we invite you to explore our beachfront villas in the{" "}
                    <Link href="/real-estate-french-riviera">
                      <span className="text-primary hover:underline cursor-pointer">French Riviera</span>
                    </Link>
                    , premium assets in{" "}
                    <Link href="/real-estate-luxembourg">
                      <span className="text-primary hover:underline cursor-pointer">Luxembourg</span>
                    </Link>
                    , or high-yield commercial properties in{" "}
                    <Link href="/hotels-resorts">
                      <span className="text-primary hover:underline cursor-pointer">Greece</span>
                    </Link>
                    .
                  </>
                ) : (
                  <>
                    Si vous souhaitez diversifier votre portefeuille européen, nous vous invitons à découvrir nos villas en bord de mer sur la{" "}
                    <Link href="/fr/real-estate-french-riviera">
                      <span className="text-primary hover:underline cursor-pointer">Côte d'Azur</span>
                    </Link>
                    , nos actifs premium au{" "}
                    <Link href="/fr/real-estate-luxembourg">
                      <span className="text-primary hover:underline cursor-pointer">Luxembourg</span>
                    </Link>
                    , ou nos propriétés commerciales à haut rendement en{" "}
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
              <h3 className="font-serif-classic text-xl tracking-wider">{t("sidebar.focus_areas.title", "Parisian Focus Areas")}</h3>
              <div className="space-y-3 pt-2">
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                  <span className="font-sans-modern text-sm font-light">{t("sidebar.focus_areas.items.0", "The Golden Triangle (8th Arr.)")}</span>
                </div>
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                  <span className="font-sans-modern text-sm font-light">{t("sidebar.focus_areas.items.1", "Saint-Germain-des-Prés (6th Arr.)")}</span>
                </div>
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                  <span className="font-sans-modern text-sm font-light">{t("sidebar.focus_areas.items.2", "Trocadéro & Passy (16th Arr.)")}</span>
                </div>
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                  <span className="font-sans-modern text-sm font-light">{t("sidebar.focus_areas.items.3", "Marais Historical Estates (4th Arr.)")}</span>
                </div>
              </div>
            </div>
	
            <div className="border border-border/10 bg-card p-8 space-y-4">
              <ShieldCheck className="h-8 w-8 text-primary" />
              <h3 className="font-serif-classic text-xl tracking-wider">{t("sidebar.representation.title", "Uncompromising Representation")}</h3>
              <p className="font-sans-modern text-sm text-muted-foreground font-light leading-relaxed">
                {t("sidebar.representation.description", "As dedicated buyer agents, we offer complete representation. We do not list properties ourselves; instead, we source them on-demand to guarantee completely unbiased advice and absolute alignment with your financial interests.")}
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
                Access Private Off-Market Parisian Listings
              </>
            ) : (
              <>
                Accédez aux Biens Parisiens <span className="text-primary italic">Off-Market</span> Privés
              </>
            )}
          </h2>
          <p className="font-sans-modern text-base text-muted-foreground font-light leading-relaxed">
            {t("cta.description", "Many of our finest apartments and office spaces in Paris are held under strict confidentiality mandates. Connect with our Parisian office to arrange a private consultation.")}
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
