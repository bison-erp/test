import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import Breadcrumbs from "@/components/Breadcrumbs";
import Markdown from "@/components/Markdown";
import { Link } from "@/components/Link";
import { getPage, getPosts } from "@/content/registry";
import { formatDate } from "@/content/format";
import { useLanguage } from "../contexts/LanguageContext";

export default function BlogIndex() {
  const { language } = useLanguage();
  const { data, body } = getPage("blog", language);
  const posts = getPosts(language);

  return (
    <Layout>
      <SEOHead />
      <section className="py-20 bg-card/50 border-b border-border/10">
        <div className="container text-center space-y-5">
          <Breadcrumbs items={[{ label: data.breadcrumb || "Blog" }]} />
          {data.eyebrow && <span className="font-serif-classic text-xs tracking-[0.3em] text-primary uppercase block font-semibold">{data.eyebrow}</span>}
          <h1 className="font-serif-classic text-4xl md:text-5xl tracking-wide font-light text-foreground">{data.h1}</h1>
          {data.intro && <p className="font-sans-modern text-base md:text-lg text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">{data.intro}</p>}
        </div>
      </section>

      <section className="py-16">
        <div className="container grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="group border border-border bg-card flex flex-col">
              <Link href={post.path} className="block overflow-hidden aspect-[16/10]">
                <img
                  src={post.data.cover}
                  alt={post.data.coverAlt ?? ""}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </Link>
              <div className="p-6 space-y-3 flex-1 flex flex-col">
                <p className="font-sans-modern text-[11px] tracking-widest uppercase text-accent font-semibold">
                  {post.data.category} · <time dateTime={post.data.date}>{formatDate(post.data.date, language)}</time>
                </p>
                <h2 className="font-serif-classic text-xl leading-snug text-foreground">
                  <Link href={post.path} className="hover:text-primary">{post.data.h1}</Link>
                </h2>
                <p className="font-sans-modern text-sm text-muted-foreground leading-relaxed flex-1">{post.data.excerpt || post.data.description}</p>
                <Link href={post.path} className="font-sans-modern text-xs tracking-widest uppercase text-primary font-semibold hover:text-accent">
                  {language === "fr" ? "Lire l’article" : "Read the article"}
                </Link>
              </div>
            </article>
          ))}
        </div>
        {body && (
          <div className="container max-w-3xl pt-16">
            <Markdown source={body} />
          </div>
        )}
      </section>
    </Layout>
  );
}
