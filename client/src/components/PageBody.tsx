import Markdown from "./Markdown";
import { getPage, type PageKey } from "@/content/registry";
import { useLanguage } from "../contexts/LanguageContext";

/** Long-form SEO text + FAQ from content/pages/<key>.<lang>.md, appended to designed pages. */
export default function PageBody({ pageKey }: { pageKey: PageKey }) {
  const { language } = useLanguage();
  const { body } = getPage(pageKey, language);
  if (!body) return null;
  return (
    <section className="py-20 border-t border-border/40">
      <div className="container max-w-4xl">
        <Markdown source={body} faqTitle={language === "fr" ? "Questions fréquentes" : "Frequently asked questions"} />
      </div>
    </section>
  );
}
