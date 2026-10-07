import { SITE_URL } from "@shared/const";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { IMAGES } from "@shared/images";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Landmark, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import { useLanguage } from "../contexts/LanguageContext";

export default function LuxuryRealEstateFrenchRiviera() {
  const { t } = useTranslation("RealEstateFrenchRiviera");
  const { language } = useLanguage();

  return (
    <Layout>
      <SEOHead
        title={t("seo.title", "Real Estate French Riviera | Exclusive Waterfront Villas")}
        description={t("seo.description", "Explore prestigious waterfront villas, hillside estates, and penthouses for sale along the French Riviera. Premium buyer agent services in Nice, Cannes, and Monaco.")}
        keywords={t("seo.keywords", "real estate French Riviera, buy villa Cote d'Azur, waterfront villa Cannes buy, property Nice sale, penthouse Monaco, real estate agent French Riviera")}
        canonicalUrl={SITE_URL + "/real-estate-french-riviera"}
        schemaType="WebPage"
      />

      {/* Header Banner */}
      <section className="relative py-24 bg-card/50 overflow-hidden border-b border-border/10">
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.rivieraVillaSea}
            alt={t("banner.alt", "Panoramic Mediterranean sea view from a luxury villa on the French Riviera")}
            className="w-full h-full object-cover opacity-30 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent z-10" />
        </div>
        <div className="container relative z-20 text-center space-y-4">
          <span className="font-serif-classic text-xs tracking-[0.3em] text-primary uppercase block font-semibold">
            {t("banner.subtitle", "Regional Portfolio")}
          </span>
          <h1 className="font-serif-classic text-4xl md:text-5xl tracking-wide font-light text-foreground">
            {t("banner.title", "The French Riviera")}
          </h1>
          <p className="font-sans-modern text-base text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
            {t("banner.description", "Discover a breathtaking selection of waterfront estates, prestigious hillside villas, and exclusive penthouses with panoramic Mediterranean views.")}
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
                  Investing in the World's Most Iconic Coastline
                </>
              ) : (
                <>
                  Investir sur le <span className="text-primary italic">Littoral le plus Iconique</span> du Monde
                </>
              )}
            </h2>
            <p className="font-sans-modern text-base text-muted-foreground font-light leading-relaxed">
              {t("content.paragraph1", "The French Riviera (Côte d'Azur) remains the ultimate global benchmark for prestigious coastal living. Combining an exceptional climate, rich cultural heritage, and legendary glamour, it has attracted discerning international buyers and high-net-worth individuals for over a century.")}
            </p>
            <p className="font-sans-modern text-base text-muted-foreground font-light leading-relaxed">
              {t("content.paragraph2", "Our regional portfolio focuses on prime coastal locations, including the prestigious Cap d'Antibes, Saint-Jean-Cap-Ferrat, Saint-Tropez, and the highly desirable residential areas surrounding Cannes and Nice. Whether you are looking for a historic Belle Époque estate, a contemporary architectural masterpiece with an infinity pool, or an exclusive penthouse overlooking the port of Monaco, we coordinate with vetted local professionals to secure your ideal property.")}
            </p>
            <p className="font-sans-modern text-base text-muted-foreground font-light leading-relaxed">
              {t("content.paragraph3", "We understand that acquiring coastal real estate involves unique technical, environmental, and legal considerations. Our team ensures rigorous due diligence, from analyzing shoreline regulations to coordinating structural audits, giving you complete peace of mind.")}
            </p>
            
            {/* Maillage Interne Fort */}
            <div className="p-6 border border-primary/20 bg-primary/5 space-y-4">
              <h3 className="font-serif-classic text-lg tracking-wider text-primary">
                {t("internal_linking.title", "Explore Other Portfolios")}
              </h3>
              <p className="font-sans-modern text-sm text-muted-foreground font-light leading-relaxed">
                {language === "en" ? (
                  <>
                    If you prefer urban heritage or strategic financial locations, explore our prestigious apartments in{" "}
                    <Link href="/real-estate-paris">
                      <span className="text-primary hover:underline cursor-pointer">Paris</span>
                    </Link>{" "}
                    and stable corporate assets in{" "}
                    <Link href="/real-estate-luxembourg">
                      <span className="text-primary hover:underline cursor-pointer">Luxembourg</span>
                    </Link>
                    . For high-yield resort opportunities, see our{" "}
                    <Link href="/hotels-resorts">
                      <span className="text-primary hover:underline cursor-pointer">Hospitality Investment Portfolio</span>
                    </Link>
                    .
                  </>
                ) : (
                  <>
                    Si vous préférez le patrimoine urbain ou les localisations financières stratégiques, découvrez nos appartements de prestige à{" "}
                    <Link href="/fr/real-estate-paris">
                      <span className="text-primary hover:underline cursor-pointer">Paris</span>
                    </Link>{" "}
                    et nos actifs d'entreprise stables au{" "}
                    <Link href="/fr/real-estate-luxembourg">
                      <span className="text-primary hover:underline cursor-pointer">Luxembourg</span>
                    </Link>
                    . Pour des opportunités de resorts à haut rendement, consultez notre{" "}
                    <Link href="/fr/hotels-resorts">
                      <span className="text-primary hover:underline cursor-pointer">Portefeuille d'Investissement Hôtelier</span>
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
              <h3 className="font-serif-classic text-xl tracking-wider">{t("focus_areas.title", "Riviera Focus Areas")}</h3>
              <div className="space-y-3 pt-2">
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                  <span className="font-sans-modern text-sm font-light">{t("focus_areas.area1", "Saint-Jean-Cap-Ferrat Peninsula")}</span>
                </div>
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                  <span className="font-sans-modern text-sm font-light">{t("focus_areas.area2", "Cap d'Antibes Prestigious Estates")}</span>
                </div>
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                  <span className="font-sans-modern text-sm font-light">{t("focus_areas.area3", "Cannes & La Croisette Penthouses")}</span>
                </div>
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                  <span className="font-sans-modern text-sm font-light">{t("focus_areas.area4", "Monaco & Surrounding Hills")}</span>
                </div>
              </div>
            </div>
	
            <div className="border border-border/10 bg-card p-8 space-y-4">
              <ShieldCheck className="h-8 w-8 text-primary" />
              <h3 className="font-serif-classic text-xl tracking-wider">{t("bespoke_service.title", "Bespoke Acquisition Representation")}</h3>
              <p className="font-sans-modern text-sm text-muted-foreground font-light leading-relaxed">
                {t("bespoke_service.description", "We provide exclusive buyer agent services, guiding you through the complex French Riviera market with absolute confidentiality, complete legal coordination, and highly personalized property sourcing.")}
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
                Access Private Off-Market Riviera Villas
              </>
            ) : (
              <>
                Accédez aux Villas de la Côte d'Azur <span className="text-primary italic">Off-Market</span> Privées
              </>
            )}
          </h2>
          <p className="font-sans-modern text-base text-muted-foreground font-light leading-relaxed">
            {t("cta.description", "The most prestigious waterfront estates along the Côte d'Azur are never listed publicly. Connect with our regional experts to discuss your acquisition parameters under complete confidentiality.")}
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
