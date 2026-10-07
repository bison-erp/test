import { useLocation } from "wouter";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import Breadcrumbs from "@/components/Breadcrumbs";
import Markdown from "@/components/Markdown";
import ContentCta from "@/components/ContentCta";
import { Link } from "@/components/Link";
import { IMAGES } from "@shared/images";
import { getPosts, getRoute, PAGE_PATHS, localizePath, linkTitleFor } from "@/content/registry";
import { readingTime } from "@/content/markdown";
import { formatDate } from "@/content/format";
import { LINKEDIN_NICOLAS } from "@/content/head";
import { useLanguage } from "../contexts/LanguageContext";
import NotFound from "./NotFound";

export default function BlogPost() {
  const [location] = useLocation();
  const { language } = useLanguage();
  const route = getRoute(location);
  if (!route || route.kind !== "post") return <NotFound />;
  const fr = language === "fr";
  const { data, body } = route.doc;
  const pillarPath = data.pillar && data.pillar in PAGE_PATHS ? PAGE_PATHS[data.pillar as keyof typeof PAGE_PATHS] : undefined;
  const others = getPosts(language)
    .filter((p) => p.id !== route.key)
    .sort((a, b) => Number(b.data.pillar === data.pillar) - Number(a.data.pillar === data.pillar))
    .slice(0, 3);

  return (
    <Layout>
      <SEOHead />
      <article>
        <header className="py-16 bg-card/50 border-b border-border/10">
          <div className="container max-w-4xl text-center space-y-5">
            <Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: data.breadcrumb || data.h1 || "" }]} />
            <p className="font-sans-modern text-[11px] tracking-widest uppercase text-accent font-semibold">
              {data.category} · <time dateTime={data.date}>{formatDate(data.date, language)}</time> · {readingTime(body)} min
            </p>
            <h1 className="font-serif-classic text-3xl md:text-5xl tracking-wide font-light text-foreground leading-tight">{data.h1}</h1>
            {data.excerpt && <p className="font-sans-modern text-base md:text-lg text-muted-foreground font-light leading-relaxed">{data.excerpt}</p>}
          </div>
        </header>

        <figure className="container max-w-5xl -mt-px pt-10">
          <img src={data.cover} alt={data.coverAlt ?? ""} className="w-full aspect-[16/8] object-cover" />
          {data.coverCredit && (
            <figcaption className="pt-2 font-sans-modern text-[11px] text-muted-foreground text-right">{data.coverCredit}</figcaption>
          )}
        </figure>

        <div className="container max-w-3xl py-12">
          <Markdown source={body} faqTitle={fr ? "Questions fréquentes" : "Frequently asked questions"} />

          {pillarPath && (
            <p className="mt-10 border border-primary/20 bg-primary/5 p-6 font-sans-modern text-sm text-foreground/80 leading-relaxed">
              {fr ? "Pour aller plus loin : " : "Go further: "}
              <Link href={pillarPath} className="text-primary font-semibold underline underline-offset-4 hover:text-accent">
                {linkTitleFor(localizePath(pillarPath, language))}
              </Link>
            </p>
          )}

          <aside className="mt-12 flex gap-5 border-t border-border pt-8 items-start">
            <img src={IMAGES.avatarNicolas} alt="Nicolas Milonas" className="h-16 w-16 rounded-full object-cover border border-accent" loading="lazy" />
            <div className="space-y-2">
              <p className="font-serif-classic text-lg text-foreground">Nicolas Milonas</p>
              <p className="font-sans-modern text-sm text-muted-foreground leading-relaxed">
                {fr
                  ? "Président d’Acropolis Group depuis 1999, spécialiste de l’investissement transfrontalier et de l’accompagnement d’investisseurs privés entre l’Europe, l’Asie et le Moyen-Orient."
                  : "President of Acropolis Group since 1999, specialising in cross-border investment and advising private investors between Europe, Asia and the Middle East."}
              </p>
              <p className="font-sans-modern text-xs space-x-4">
                <Link href="/about" className="text-primary hover:text-accent">{fr ? "En savoir plus" : "About us"}</Link>
                <Link href={LINKEDIN_NICOLAS} title={fr ? "Profil LinkedIn de Nicolas Milonas" : "Nicolas Milonas on LinkedIn"} className="text-primary hover:text-accent">LinkedIn</Link>
              </p>
            </div>
          </aside>
        </div>
      </article>

      {others.length > 0 && (
        <section className="py-16 border-t border-border">
          <div className="container space-y-8">
            <h2 className="font-serif-classic text-2xl md:text-3xl tracking-wide font-light text-primary text-center">
              {fr ? "À lire également" : "Further reading"}
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {others.map((post) => (
                <Link key={post.id} href={post.path} className="group block border border-border bg-card">
                  <img src={post.data.cover} alt={post.data.coverAlt ?? ""} loading="lazy" className="aspect-[16/10] w-full object-cover" />
                  <span className="block p-5 font-serif-classic text-lg leading-snug text-foreground group-hover:text-primary">{post.data.h1}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <ContentCta />
    </Layout>
  );
}
