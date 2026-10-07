import { ArrowRight, Phone } from "lucide-react";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import Markdown from "@/components/Markdown";
import Breadcrumbs from "@/components/Breadcrumbs";
import ContentCta from "@/components/ContentCta";
import { Link } from "@/components/Link";
import { AGENCY_PHONE } from "@shared/const";
import { getPage, getPosts, linkTitleFor, localizePath, type PageKey } from "@/content/registry";
import { useLanguage } from "../contexts/LanguageContext";

/** Long-form SEO page rendered from content/pages/<key>.<lang>.md */
export default function LandingPage({ pageKey }: { pageKey: PageKey }) {
  const { language } = useLanguage();
  const fr = language === "fr";
  const { data, body } = getPage(pageKey, language);
  const related = (data.related ?? "").split(",").map((s) => s.trim()).filter(Boolean);
  const posts = getPosts(language).filter((p) => p.data.pillar === pageKey);

  return (
    <Layout>
      <SEOHead />

      <section className="relative py-20 md:py-24 bg-card/50 overflow-hidden border-b border-border/10">
        {data.image && (
          <div className="absolute inset-0 z-0">
            <img src={data.image} alt={data.imageAlt ?? ""} className="w-full h-full object-cover opacity-30 scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent z-10" />
          </div>
        )}
        <div className="container relative z-20 text-center space-y-5">
          <Breadcrumbs items={[{ label: data.breadcrumb || data.h1 || "" }]} />
          {data.eyebrow && (
            <span className="font-serif-classic text-xs tracking-[0.3em] text-primary uppercase block font-semibold">{data.eyebrow}</span>
          )}
          <h1 className="font-serif-classic text-4xl md:text-5xl tracking-wide font-light text-foreground max-w-4xl mx-auto">{data.h1}</h1>
          {data.intro && (
            <p className="font-sans-modern text-base md:text-lg text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">{data.intro}</p>
          )}
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <article className="lg:col-span-8 min-w-0">
            <Markdown source={body} faqTitle={fr ? "Questions fréquentes" : "Frequently asked questions"} />
          </article>

          <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-28 self-start">
            <div className="border border-primary/20 bg-primary/5 p-8 space-y-4">
              <h2 className="font-serif-classic text-xl tracking-wide text-primary">
                {fr ? "Consultation privée" : "Private consultation"}
              </h2>
              <p className="font-sans-modern text-sm text-muted-foreground leading-relaxed">
                {fr
                  ? "Décrivez votre recherche : nous vous répondons sous 24 h ouvrées, en toute confidentialité."
                  : "Tell us what you are looking for: we reply within one business day, in strict confidence."}
              </p>
              <Link href="/contact-newsletter" className="inline-flex items-center gap-2 font-sans-modern text-xs tracking-widest uppercase text-primary font-semibold hover:text-accent">
                {fr ? "Nous contacter" : "Contact us"} <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={`tel:${AGENCY_PHONE.replace(/\s+/g, "")}`}
                title={fr ? "Appeler Acropolis Real Estate" : "Call Acropolis Real Estate"}
                className="flex items-center gap-2 font-sans-modern text-sm text-foreground/80 hover:text-primary"
              >
                <Phone className="h-4 w-4 text-accent" /> {AGENCY_PHONE}
              </a>
            </div>

            {related.length > 0 && (
              <nav className="border border-border p-8 space-y-4" aria-label={fr ? "Pages associées" : "Related pages"}>
                <h2 className="font-serif-classic text-lg tracking-wide text-foreground">{fr ? "À découvrir aussi" : "Explore further"}</h2>
                <ul className="space-y-3">
                  {related.map((href) => {
                    const localized = localizePath(href, language);
                    return (
                      <li key={href}>
                        <Link href={href} className="font-sans-modern text-sm text-primary hover:text-accent">
                          {linkTitleFor(localized)}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            )}

            {posts.length > 0 && (
              <nav className="border border-border p-8 space-y-4" aria-label={fr ? "Articles du blog" : "Blog articles"}>
                <h2 className="font-serif-classic text-lg tracking-wide text-foreground">{fr ? "Nos guides" : "Our guides"}</h2>
                <ul className="space-y-3">
                  {posts.map((post) => (
                    <li key={post.id}>
                      <Link href={post.path} className="font-sans-modern text-sm text-primary hover:text-accent">
                        {post.data.h1 || post.data.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            )}
          </aside>
        </div>
      </section>

      <ContentCta title={data.ctaTitle} text={data.ctaText} />
    </Layout>
  );
}
