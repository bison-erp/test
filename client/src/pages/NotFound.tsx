import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { Link } from "@/components/Link";
import { localizePath, shortLabelFor } from "@/content/registry";
import { useLanguage } from "../contexts/LanguageContext";

const LINKS = ["/", "/real-estate-paris", "/real-estate-french-riviera", "/golden-visa-greece", "/blog", "/contact-newsletter"];

export default function NotFound() {
  const { language } = useLanguage();
  const fr = language === "fr";
  return (
    <Layout>
      <SEOHead />
      <section className="py-28">
        <div className="container max-w-2xl text-center space-y-6">
          <p className="font-serif-classic text-6xl text-accent">404</p>
          <h1 className="font-serif-classic text-3xl md:text-4xl tracking-wide font-light text-foreground">
            {fr ? "Cette page est introuvable" : "This page could not be found"}
          </h1>
          <p className="font-sans-modern text-base text-muted-foreground">
            {fr ? "Elle a peut-être été déplacée. Voici les pages les plus consultées :" : "It may have moved. Here are our most visited pages:"}
          </p>
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-3 font-sans-modern text-sm">
            {LINKS.map((href) => (
              <li key={href}>
                <Link href={href} className="text-primary underline underline-offset-4 hover:text-accent">
                  {shortLabelFor(localizePath(href, language))}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </Layout>
  );
}
