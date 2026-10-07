import { SITE_URL } from "@shared/const";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { IMAGES } from "@shared/images";
import { Button } from "@/components/ui/button";
import { Link } from "../components/Link";
import { ArrowUpRight, Shield, Compass, Landmark, HelpCircle, Check, ArrowRight } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useTranslation } from "../hooks/useTranslation";
import { useLanguage } from "../contexts/LanguageContext";

export default function Home() {
  const { t } = useTranslation("Home");
  const { language } = useLanguage();
  return (
    <Layout>
      <SEOHead
        title={t("seo.title", "Acropolis Real Estate | Elite European Property Buyer Agency")}
        description={t("seo.description", "Exclusive off-market real estate acquisitions in Paris, French Riviera, Luxembourg, and Greece. Specialized boutique buyer agents for global VIP investors.")}
        keywords={t("seo.keywords", "real estate Paris, off-market properties France, French Riviera villa, Luxembourg prestigious estate, Greek Golden Visa property investment, elite buyer agent Europe")}
        canonicalUrl={SITE_URL}
        schemaType="RealEstateAgent"
      />

      {/* SECTION 1: HERO IMMERSIF FULL SCREEN (Fine, Elegant Serif Typography) */}
      <section className="relative h-screen w-full flex items-center justify-start overflow-hidden bg-primary">
        {/* Background Image - 100% Opacity, pure and high impact */}
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.heroParisSkyline}
            alt={t("hero.imageAlt", "Haussmannian Paris Eiffel Tower Sunset View")}
            className="w-full h-full object-cover object-center filter brightness-[0.7] contrast-[1.05]"
          />
          {/* Subtle vignette for high-end cinematic contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/30 to-transparent" />
        </div>

        {/* Content Box - Asymmetric, left-aligned, elegant layout */}
        <div className="container relative z-10 max-w-5xl px-6 md:px-12">
          <div className="max-w-2xl space-y-6 text-white">
            <span className="font-sans-modern text-[10px] md:text-xs tracking-[0.4em] text-accent uppercase block animate-fade-in font-bold">
              {t("hero.subtitle", "Elite Buyer Agency")}
            </span>
            <h1 className="font-serif-classic text-4xl sm:text-5xl md:text-6xl font-normal tracking-wide leading-[1.2] text-white">
              {language === "en" ? (
                <>
                  The Art of <br />
                  <span className="text-accent italic font-normal">Off-Market</span> Acquisition
                </>
              ) : (
                <>
                  {t("hero.title", "L'Art de l'Acquisition")} <br />
                  <span className="text-accent italic font-normal">{t("hero.titleHighlight", "Off-Market")}</span>
                </>
              )}
            </h1>
            <p className="font-sans-modern text-sm sm:text-base md:text-lg text-white/90 max-w-xl font-light leading-relaxed">
              {t("hero.description", "We operate exclusively as buy-side advisors, unlocking confidential real estate portfolios for global wealth owners across Paris, the French Riviera, Luxembourg, and Greece.")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/residential-offices">
                <Button className="bg-accent hover:bg-accent/90 text-primary font-sans-modern text-xs tracking-widest uppercase font-bold py-6 px-8 rounded-none transition-luxury flex items-center group">
                  {t("hero.ctaExplore", "Explore Portfolios")} <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Button>
              </Link>
              <Link href="/contact-newsletter">
                <Button className="border border-white hover:bg-white hover:text-primary text-white bg-transparent font-sans-modern text-xs tracking-widest uppercase font-bold py-6 px-8 rounded-none transition-luxury">
                  {t("hero.ctaConsultation", "Private Consultation")}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: INTRO SPLIT-SCREEN (Modern & Immersive) */}
      <section className="py-24 bg-background border-b border-border">
        <div className="container grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-6 space-y-8">
            <span className="font-sans-modern text-xs tracking-[0.3em] text-accent uppercase block font-bold">
              {t("intro.subtitle", "Uncompromising Duty")}
            </span>
            <h2 className="font-serif-classic text-3xl md:text-5xl tracking-wide font-normal text-primary leading-tight">
              {language === "en" ? (
                <>
                  We represent <span className="text-accent italic">you</span>, and only you.
                </>
              ) : (
                <>
                  {t("intro.title", "Nous vous représentons,")} <span className="text-accent italic">{t("intro.titleHighlight", "et vous seul.")}</span>
                </>
              )}
            </h2>
            <div className="font-sans-modern text-sm text-foreground/90 font-medium leading-relaxed space-y-4">
              <p>
                {t("intro.p1", "As a real estate agency, Acropolis Real Estate has a network that gives you access to the most beautiful apartments in Paris, the Paris region, the French Riviera, and Luxembourg, including off-market properties.")}
              </p>
              <p>
                {t("intro.p2", "We identify your needs, and a qualified professional will select properties that match your requirements, welcome you, and guide you through the process—all at no extra cost.")}
              </p>
              <div className="border-l-2 border-accent pl-4 py-1 my-4 space-y-3">
                <p>
                  <strong>{t("intro.residentialTitle", "RESIDENTIAL:")}</strong> {t("intro.residentialText", "we can offer you any type of apartment, from a two-room flat to a private mansion, ranging from €500,000 to €50 million, at no additional cost compared to a local real estate agent, and by managing the entire sales process from start to finish (notary, lawyers, translators).")}
                </p>
                <p>
                  <strong>{t("intro.hotelsTitle", "HOTELS:")}</strong> {t("intro.hotelsText", "we can offer you any type of hotel, from a boutique hotel in Paris to 5-star hotels in European capitals or on Greek islands.")}
                </p>
                <p>
                  <strong>{t("intro.addedValueTitle", "OUR ADDED VALUE:")}</strong> {t("intro.addedValueText", "beyond traditional real estate, we are also experts in furnished rental property investment (LMNP - Non-Professional Furnished Rental), with returns of 5% to 7% net of expenses and virtually tax-free. LMNP investment is an excellent way to build supplemental retirement income.")}
                </p>
              </div>
            </div>
            <div className="pt-4">
              <Link href="/about">
                <span className="inline-flex items-center text-xs tracking-widest uppercase text-primary hover:text-accent font-bold transition-luxury cursor-pointer group">
                  {t("intro.ctaLegacy", "Our Legacy & Philosophy")} <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </div>
          </div>
          <div className="lg:col-span-6 relative h-[500px] overflow-hidden border border-border group shadow-lg">
            <img
              src={IMAGES.parisApartmentElegant}
              alt={t("intro.imageAlt", "Elegant European Interior Asset")}
              className="w-full h-full object-cover transition-luxury duration-700 group-hover:scale-105"
            />
          </div>
        </div>
      </section>

            {/* SECTION 3: BENTO GRID PORTFOLIO (Innovative Layout) */}
      <section className="py-24 bg-secondary/50">
        <div className="container space-y-16">
          <div className="max-w-3xl space-y-4">
            <span className="font-sans-modern text-xs tracking-[0.3em] text-accent uppercase block font-bold">
              {t("portfolio.subtitle", "Curated Portfolios")}
            </span>
            <h2 className="font-serif-classic text-3xl md:text-5xl tracking-wide font-normal text-primary">
              {t("portfolio.title", "Strategic Investment Pillars")}
            </h2>
            <p className="font-sans-modern text-base text-muted-foreground font-medium max-w-xl">
              {t("portfolio.description", "A highly selective structure focused on core wealth-preservation assets across Europe's most stable markets.")}
            </p>
          </div>

          {/* BENTO GRID LAYOUT - Dynamic and highly contemporary */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            
            {/* Bento Box 1: Residential (Large, Landscape) */}
            <div className="md:col-span-8 bg-background border border-border overflow-hidden flex flex-col justify-between group shadow-sm transition-luxury hover:shadow-md">
              <div className="relative h-[300px] overflow-hidden">
                <img
                  src={IMAGES.parisHaussmannInterior}
                  alt={t("portfolio.residential.imageAlt", "Prestigious Haussmannian Apartment Interior")}
                  className="w-full h-full object-cover transition-luxury duration-700 group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 bg-background/90 backdrop-blur-md text-[10px] tracking-widest uppercase font-bold text-primary px-3 py-1.5 border border-border">
                  {t("portfolio.residential.tag", "Residential & Offices")}
                </span>
              </div>
              <div className="p-8 space-y-4">
                <h3 className="font-serif-classic text-2xl font-normal text-primary">{t("portfolio.residential.title", "Haussmannian & Contemporary Estates")}</h3>
                <p className="font-sans-modern text-sm text-muted-foreground font-medium leading-relaxed">
                  {t("portfolio.residential.description", "Discover exceptional new builds and meticulously renovated historical properties. Focused on premier residential neighborhoods and prestigious office spaces in Paris, the French Riviera, and Luxembourg.")}
                </p>
                <div className="pt-2">
                  <Link href="/residential-offices">
                    <span className="inline-flex items-center text-xs tracking-widest uppercase text-primary hover:text-accent font-bold transition-luxury cursor-pointer group">
                      {t("portfolio.residential.cta", "Explore Residential")} <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Bento Box 2: Hotels (Tall, Portrait) */}
            <div className="md:col-span-4 bg-background border border-border overflow-hidden flex flex-col justify-between group shadow-sm transition-luxury hover:shadow-md">
              <div className="relative h-[300px] md:h-full overflow-hidden">
                <img
                  src={IMAGES.greeceLuxuryVilla}
                  alt={t("portfolio.hotels.imageAlt", "Hotel & Resort in Greece")}
                  className="w-full h-full object-cover transition-luxury duration-700 group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 bg-background/90 backdrop-blur-md text-[10px] tracking-widest uppercase font-bold text-primary px-3 py-1.5 border border-border">
                  {t("portfolio.hotels.tag", "Hotels & Resorts")}
                </span>
              </div>
              <div className="p-8 space-y-4">
                <h3 className="font-serif-classic text-2xl font-normal text-primary">{t("portfolio.hotels.title", "Hospitality Portfolios")}</h3>
                <p className="font-sans-modern text-sm text-muted-foreground font-medium leading-relaxed">
                  {t("portfolio.hotels.description", "Acquire premium hospitality assets in major European capitals, high-growth French cities, and the Greek islands. Designed for institutional investors.")}
                </p>
                <div className="pt-2">
                  <Link href="/hotels-resorts">
                    <span className="inline-flex items-center text-xs tracking-widest uppercase text-primary hover:text-accent font-bold transition-luxury cursor-pointer group">
                      {t("portfolio.hotels.cta", "Explore Hospitality")} <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Bento Box 3: Residency (Tall, Portrait) */}
            <div className="md:col-span-4 bg-background border border-border overflow-hidden flex flex-col justify-between group shadow-sm transition-luxury hover:shadow-md">
              <div className="relative h-[300px] overflow-hidden">
                <img
                  src={IMAGES.athensAcropolis}
                  alt={t("portfolio.residency.imageAlt", "Greek Golden Visa Property Investment")}
                  className="w-full h-full object-cover transition-luxury duration-700 group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 bg-background/90 backdrop-blur-md text-[10px] tracking-widest uppercase font-bold text-primary px-3 py-1.5 border border-border">
                  {t("portfolio.residency.tag", "Residency & Visas")}
                </span>
              </div>
              <div className="p-8 space-y-4">
                <h3 className="font-serif-classic text-2xl font-normal text-primary">{t("portfolio.residency.title", "Golden Visa & Mobility")}</h3>
                <p className="font-sans-modern text-sm text-muted-foreground font-medium leading-relaxed">
                  {t("portfolio.residency.description", "Secure European residency through strategic real estate investments. Navigate the prestigious Greek Golden Visa program, alongside premium residency pathways.")}
                </p>
                <div className="pt-2">
                  <Link href="/residency-visas">
                    <span className="inline-flex items-center text-xs tracking-widest uppercase text-primary hover:text-accent font-bold transition-luxury cursor-pointer group">
                      {t("portfolio.residency.cta", "Explore Residency")} <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Bento Box 4: Chinese Clients (Large, Landscape) */}
            <div className="md:col-span-8 bg-background border border-border overflow-hidden flex flex-col md:flex-row justify-between group shadow-sm transition-luxury hover:shadow-md">
              <div className="p-8 space-y-4 md:w-1/2 flex flex-col justify-between">
                <div className="space-y-4">
                  <span className="bg-accent/10 text-accent text-[10px] tracking-widest uppercase font-bold px-3 py-1.5">
                    {t("portfolio.chineseClients.tag", "Bilingual Legal Support")}
                  </span>
                  <h3 className="font-serif-classic text-2xl font-normal text-primary pt-2">{t("portfolio.chineseClients.title", "Support for Chinese Clients")}</h3>
                  <p className="font-sans-modern text-sm text-muted-foreground font-medium leading-relaxed">
                    {t("portfolio.chineseClients.p1", "We offer tailored and highly specialized support for our Chinese friends and investors throughout the entire process of acquiring real estate or obtaining residency permits in Europe. From confidential property selection to rigorous coordination with law firms and notaries experienced in legal, cultural, and translation requirements.")}
                  </p>
                  <p className="font-sans-modern text-xs text-muted-foreground font-semibold leading-relaxed">
                    {t("portfolio.chineseClients.p2", "We master the entire notarial process through our Franco-Chinese friend & partner based in Paris and Shanghai. For 13 years, our partner has been selling new and existing properties to Chinese clients in Paris, the Île-de-France region, and on the French Riviera (primarily Cannes and Nice).")}
                  </p>
                  <p className="font-sans-modern text-xs text-muted-foreground font-semibold leading-relaxed">
                    {t("portfolio.chineseClients.p3", "Our strengths: mastery of the processes, our real estate network, our market knowledge (30 years), and our understanding of the specific selection criteria of Chinese clients (orientation, Feng Shui, etc.).")}
                  </p>
                </div>
                <div className="pt-4">
                  <Link href="/contact-newsletter">
                    <span className="inline-flex items-center text-xs tracking-widest uppercase text-primary hover:text-accent font-bold transition-luxury cursor-pointer group">
                      {t("portfolio.chineseClients.cta", "Private Consultation")} <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                </div>
              </div>
              <div className="relative h-[300px] md:h-full md:w-1/2 overflow-hidden border-t md:border-t-0 md:border-l border-border">
                <img
                  src={IMAGES.teamMeeting}
                  alt={t("portfolio.chineseClients.imageAlt", "Elite Chinese investors meeting in Paris office")}
                  className="w-full h-full object-cover transition-luxury duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: FAQ INTERACTIVE STYLISÉE (Minimalist & High Contrast Accordions) */}
      <section className="py-24 bg-background border-b border-border">
        <div className="container max-w-4xl space-y-16">
          <div className="text-center space-y-4">
            <span className="font-sans-modern text-xs tracking-[0.3em] text-accent uppercase block font-bold">
              {t("faq.subtitle", "Essential Intelligence")}
            </span>
            <h2 className="font-serif-classic text-3xl md:text-5xl tracking-wide font-normal text-primary">
              {t("faq.title", "Private Advisory &")} <span className="text-accent italic">{t("faq.titleHighlight", "Investor Insights")}</span>
            </h2>
            <p className="font-sans-modern text-base text-muted-foreground font-medium max-w-xl mx-auto">
              {t("faq.description", "Essential answers regarding off-market acquisitions, residency pathways, and legal frameworks in Europe.")}
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            
            <AccordionItem value="item-1" className="border border-border bg-card px-6 py-2 shadow-sm">
              <AccordionTrigger className="font-serif-classic text-lg md:text-xl font-bold text-primary hover:text-accent transition-luxury text-left">
                {t("faq.q1.question", "How does the private off-market real estate market operate in Europe?")}
              </AccordionTrigger>
              <AccordionContent className="font-sans-modern text-sm text-foreground/90 font-semibold leading-relaxed pt-4 border-t border-border mt-2 space-y-3">
                <p>
                  {t("faq.q1.a1", "The off-market sector represents transactions that are never advertised publicly or listed on commercial databases. In the ultra-high-net-worth segment, approximately 40% of prime assets in Paris and the French Riviera change hands confidentially.")}
                </p>
                <p>
                  {t("faq.q1.a2", "Sellers choose this route to protect their privacy, while buyers benefit from reduced competition and exclusive access. Acropolis Real Estate acts as a central node, receiving direct, unlisted opportunities from private family offices, trust attorneys, and local notary networks.")}
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border border-border bg-card px-6 py-2 shadow-sm">
              <AccordionTrigger className="font-serif-classic text-lg md:text-xl font-bold text-primary hover:text-accent transition-luxury text-left">
                {t("faq.q2.question", "Are there any hidden fees or additional costs for your bespoke buyer agent service?")}
              </AccordionTrigger>
              <AccordionContent className="font-sans-modern text-sm text-foreground/90 font-semibold leading-relaxed pt-4 border-t border-border mt-2 space-y-3">
                <p>
                  {t("faq.q2.a1", "No, we operate under a strict policy of absolute transparency. Our commission is established at the initiation of our engagement and is fully integrated into the standard acquisition costs.")}
                </p>
                <p>
                  {t("faq.q2.a2", "Because we act solely on the buyer's behalf, our interests are perfectly aligned with yours: we negotiate aggressively to secure the lowest possible purchase price, often resulting in savings that far exceed our advisory fee.")}
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border border-border bg-card px-6 py-2 shadow-sm">
              <AccordionTrigger className="font-serif-classic text-lg md:text-xl font-bold text-primary hover:text-accent transition-luxury text-left">
                {t("faq.q3.question", "What are the investment requirements and benefits of the Greek Golden Visa program?")}
              </AccordionTrigger>
              <AccordionContent className="font-sans-modern text-sm text-foreground/90 font-semibold leading-relaxed pt-4 border-t border-border mt-2 space-y-3">
                <p>
                  {t("faq.q3.a1", "The Greek Golden Visa program grants a 5-year renewable residency permit to the main investor, spouse, children under 21, and parents of both spouses. It requires a strategic real estate investment in Greece, with thresholds varying by region (ranging from €250,000 to €800,000 depending on the municipality).")}
                </p>
                <p>
                  {t("faq.q3.a2", "Key benefits include full access to the Schengen Zone, zero requirement to reside in Greece, and the ability to generate premium rental yields from your acquired property. We provide full legal and administrative coordination to guarantee a successful application.")}
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border border-border bg-card px-6 py-2 shadow-sm">
              <AccordionTrigger className="font-serif-classic text-lg md:text-xl font-bold text-primary hover:text-accent transition-luxury text-left">
                {t("faq.q4.question", "How does Acropolis Real Estate assist international and Chinese VIP clients?")}
              </AccordionTrigger>
              <AccordionContent className="font-sans-modern text-sm text-foreground/90 font-semibold leading-relaxed pt-4 border-t border-border mt-2 space-y-3">
                <p>
                  {t("faq.q4.a1", "We understand that cross-border acquisitions involve complex legal, tax, and cultural barriers. For our international and Chinese clients, we provide an all-inclusive, bilingual service.")}
                </p>
                <p>
                  {t("faq.q4.a2", "Our team coordinates with top-tier international tax lawyers, bilingual notaries, and private banking institutions to streamline capital transfers, structure ownership vehicles (such as French SCIs), and secure favorable financing. We manage every detail, from initial search to property management.")}
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border border-border bg-card px-6 py-2 shadow-sm">
              <AccordionTrigger className="font-serif-classic text-lg md:text-xl font-bold text-primary hover:text-accent transition-luxury text-left">
                {t("faq.q5.question", "Can you assist with commercial real estate, specifically luxury hotels and resorts?")}
              </AccordionTrigger>
              <AccordionContent className="font-sans-modern text-sm text-foreground/90 font-semibold leading-relaxed pt-4 border-t border-border mt-2 space-y-3">
                <p>
                  {t("faq.q5.a1", "Yes, our commercial division specializes in off-market hospitality transactions. We assist family offices, private equity groups, and boutique hotel operators in sourcing and acquiring operating hotels, boutique resorts, and development land in Greece, Paris, and high-growth European destinations.")}
                </p>
                <p>
                  {t("faq.q5.a2", "Our services include underwriting, financial modeling, operator search, and transaction structuring.")}
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border border-border bg-card px-6 py-2 shadow-sm">
              <AccordionTrigger className="font-serif-classic text-lg md:text-xl font-bold text-primary hover:text-accent transition-luxury text-left">
                {t("faq.q6.question", "Are there better practices (smart financing) for financing the purchase of real estate without paying cash, even if you have the entire amount in cash?")}
              </AccordionTrigger>
              <AccordionContent className="font-sans-modern text-sm text-foreground/90 font-semibold leading-relaxed pt-4 border-t border-border mt-2 space-y-3">
                <p>
                  {t("faq.q6.a1", "Yes, there are smart financing options for purchasing real estate without paying cash, even if you have the full amount available. These strategies can improve the overall profitability of your investment by not relying solely on the property's appreciation. It's a profitability accelerator.")}
                </p>
              </AccordionContent>
            </AccordionItem>

          </Accordion>
        </div>
      </section>

      {/* SECTION 5: FINAL CTA (Minimalist & High Contrast) */}
      <section className="py-24 text-center bg-secondary/30 relative overflow-hidden border-t border-border">
        <div className="absolute inset-0 bg-noise opacity-10" />
        <div className="container max-w-3xl relative z-10 space-y-8">
          <span className="font-sans-modern text-xs tracking-[0.3em] text-accent uppercase block font-bold">
            {t("cta.subtitle", "Secure Entry")}
          </span>
          <h2 className="font-serif-classic text-3xl md:text-5xl tracking-wide font-normal text-primary">
            {t("cta.title", "Access Our Private")} <span className="text-accent italic">{t("cta.titleHighlight", "Off-Market")}</span> Catalog
          </h2>
          <p className="font-sans-modern text-base text-muted-foreground font-semibold max-w-xl mx-auto">
            {t("cta.description", "The most prestigious properties in Paris, the French Riviera, and Luxembourg are never listed publicly. Connect with our private advisors to discuss your investment objectives under absolute confidentiality.")}
          </p>
          <div className="pt-4">
            <Link href="/contact-newsletter">
              <Button className="bg-primary text-primary-foreground hover:bg-accent hover:text-primary font-sans-modern text-xs tracking-widest uppercase font-bold py-6 px-10 rounded-none transition-luxury shadow-md">
                {t("cta.button", "Request Private Consultation")}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
