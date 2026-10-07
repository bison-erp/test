import { SITE_URL } from "@shared/const";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { IMAGES } from "@shared/images";
import { Button } from "@/components/ui/button";
import { Link } from "../components/Link";
import { ArrowRight, MapPin, Building2, Key, Shield } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

export default function ResidentialOffices() {
  const { t } = useTranslation("ResidentialOffices");

  const regions = [
    {
      title: t("regions.items.0.title", "Paris & Île-de-France"),
      description: t("regions.items.0.description", "Exceptional Haussmannian apartments, private mansions in the 16th and 7th arrondissements, and modern offices in La Défense. Focused on premium, historical, and highly liquid assets."),
      image: IMAGES.parisApartmentElegant,
      link: "/real-estate-paris",
      tag: t("regions.items.0.tag", "Historical & Modern")
    },
    {
      title: t("regions.items.1.title", "French Riviera (Côte d'Azur)"),
      description: t("regions.items.1.description", "Breathtaking waterfront villas in Saint-Jean-Cap-Ferrat, Saint-Tropez, Nice and Cannes. Perfect secondary residences and high-yield seasonal rental estates with unmatched panoramic sea views."),
      image: IMAGES.rivieraVillaSea,
      link: "/real-estate-french-riviera",
      tag: t("regions.items.1.tag", "Waterfront Luxury")
    },
    {
      title: t("regions.items.2.title", "Grand Duchy of Luxembourg"),
      description: t("regions.items.2.description", "Ultra-secure modern penthouses, premium corporate headquarters, and high-capital appreciation office buildings in Luxembourg City (Kirchberg, Belair, Ville-Haute)."),
      image: IMAGES.luxembourgCity,
      link: "/real-estate-luxembourg",
      tag: t("regions.items.2.tag", "Corporate & Wealth")
    }
  ];

  return (
    <Layout>
      <SEOHead
        title={t("seo.title", "Residential & Office Portfolios | Paris, Riviera, Luxembourg")}
        description={t("seo.description", "Explore our curated, highly confidential portfolio of off-market luxury residential apartments, historical estates, and premium corporate offices.")}
        keywords={t("seo.keywords", "luxury apartments Paris, buy office space Luxembourg, French Riviera waterfront villas, off-market real estate agent Paris, buy luxury home France")}
        canonicalUrl={SITE_URL + "/residential-offices"}
        schemaType="RealEstateAgent"
      />

      {/* Hero Banner - 100% Opacity with Dark Text Overlay Box */}
      <section className="relative h-[60vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={IMAGES.parisHaussmannInterior}
            alt={t("hero.imageAlt", "Haussmannian Luxury Apartment Interior")}
            className="w-full h-full object-cover filter brightness-90"
          />
          <div className="absolute inset-0 bg-black/25" />
        </div>
        <div className="container relative z-10 max-w-4xl text-center px-4">
          <div className="bg-background/95 backdrop-blur-md p-8 sm:p-12 md:p-16 border border-white/20 shadow-2xl space-y-6">
            <span className="font-serif-classic text-xs sm:text-sm tracking-[0.4em] text-primary uppercase block font-bold">
              {t("hero.subtitle", "Bespoke Acquisitions")}
            </span>
            <h1 className="font-serif-classic text-3xl sm:text-4xl md:text-5xl tracking-wide font-light text-primary">
              {t("hero.title", "Residential &")} <span className="text-accent italic">{t("hero.titleHighlight", "Office Portfolios")}</span>
            </h1>
            <p className="font-sans-modern text-sm sm:text-base text-foreground max-w-xl mx-auto font-semibold leading-relaxed">
              {t("hero.description", "Curating prestigious living spaces and strategic corporate environments across Europe's most coveted and secure locations.")}
            </p>
          </div>
        </div>
      </section>

      {/* Intro Description Section */}
      <section className="py-24 bg-card border-b border-border">
        <div className="container max-w-4xl text-center space-y-8">
          <h2 className="font-serif-classic text-3xl tracking-wide font-light text-primary">
            {t("intro.title", "An Uncompromising Standard of Curation")}
          </h2>
          <p className="font-sans-modern text-base text-foreground font-semibold leading-relaxed">
            {t("intro.description", "Whether you are seeking a family home, an ultra-private penthouse, or a strategic corporate headquarters, our network of local experts provides seamless access to the finest properties best suited to your budget. We work exclusively on a buyer's agent model: we champion your interests by prioritising quality and conducting in-depth market analysis to secure the ideal property at the optimal price.")}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8">
            <div className="flex flex-col items-center space-y-2">
              <MapPin className="h-8 w-8 text-primary" />
              <span className="font-serif-classic text-lg text-primary font-medium">{t("intro.features.locations", "Prime Locations")}</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Building2 className="h-8 w-8 text-primary" />
              <span className="font-serif-classic text-lg text-primary font-medium">{t("intro.features.offMarket", "Off-Market Access")}</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Shield className="h-8 w-8 text-primary" />
              <span className="font-serif-classic text-lg text-primary font-medium">{t("intro.features.dueDiligence", "Bespoke Due Diligence")}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Regions Grid */}
      <section className="py-24 space-y-20">
        <div className="container text-center space-y-4">
          <span className="font-serif-classic text-sm tracking-[0.3em] text-primary uppercase block font-bold">
            {t("regions.subtitle", "Strategic Locations")}
          </span>
          <h2 className="font-serif-classic text-3xl md:text-4xl tracking-wide font-light text-primary">
            {t("regions.title", "Where We Operate")}
          </h2>
        </div>

        <div className="container max-w-6xl space-y-16">
          {regions.map((region, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${
                  isEven ? "" : "lg:flex-row-reverse"
                }`}
              >
                {/* Image Column - 100% Opacity */}
                <div
                  className={`lg:col-span-6 relative h-[400px] overflow-hidden border border-border shadow-md ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <img
                    src={region.image}
                    alt={region.title}
                    className="w-full h-full object-cover opacity-100 scale-100"
                  />
                </div>

                {/* Text Column - High Contrast */}
                <div
                  className={`lg:col-span-6 space-y-6 ${
                    isEven ? "lg:order-2 lg:pl-8" : "lg:order-1 lg:pr-8"
                  }`}
                >
                  <span className="font-serif-classic text-xs tracking-widest text-accent uppercase block font-bold">
                    {region.tag}
                  </span>
                  <h3 className="font-serif-classic text-3xl tracking-wide font-light text-primary">
                    {region.title}
                  </h3>
                  <p className="font-sans-modern text-base text-foreground font-semibold leading-relaxed">
                    {region.description}
                  </p>
                  <div className="pt-2">
                    <Link href={region.link}>
                      <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-sans-modern text-xs tracking-widest uppercase py-5 px-8 rounded-none transition-all duration-300">
                        {t(`regions.items.${index}.button`, "View Regional Portfolio")} <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Private Acquisition Consultation */}
      <section className="py-24 bg-card border-t border-border text-center">
        <div className="container max-w-3xl space-y-8">
          <Key className="h-12 w-12 text-primary mx-auto" />
          <h2 className="font-serif-classic text-3xl md:text-4xl tracking-wide font-light text-primary">
            {t("consultation.title", "Initiate Your Private Search")}
          </h2>
          <p className="font-sans-modern text-base text-foreground font-semibold leading-relaxed">
            {t("consultation.description", "The standard real estate search engines only reveal a fraction of what is truly available. By partnering with Acropolis Real Estate, you commission a dedicated advocate who will search the entire off-market ecosystem on your behalf.")}
          </p>
          <div className="pt-4">
            <Link href="/contact-newsletter">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-sans-modern text-xs tracking-widest uppercase py-6 px-10 rounded-none transition-all duration-300 shadow-md">
                {t("consultation.button", "Request Private Consultation")}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
