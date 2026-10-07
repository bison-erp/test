import { Button } from "@/components/ui/button";
import { Link } from "./Link";
import { useLanguage } from "../contexts/LanguageContext";

/** Closing call-to-action shared by landing pages and articles. */
export default function ContentCta({ title, text }: { title?: string; text?: string }) {
  const { language } = useLanguage();
  const fr = language === "fr";
  return (
    <section className="py-24 text-center bg-gradient-to-b from-card/50 to-background">
      <div className="container max-w-3xl space-y-6">
        <h2 className="font-serif-classic text-3xl tracking-wide font-light text-foreground">
          {title || (fr ? "Parlons de votre projet en toute confidentialité" : "Let's discuss your project in confidence")}
        </h2>
        <p className="font-sans-modern text-base text-muted-foreground font-light leading-relaxed">
          {text ||
            (fr
              ? "Un premier échange, sans engagement, pour définir votre cahier des charges, votre budget et votre calendrier."
              : "A first, no-obligation conversation to define your brief, budget and timeline.")}
        </p>
        <Link href="/contact-newsletter" title={fr ? "Demander une consultation privée" : "Request a private consultation"}>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-sans-modern text-xs tracking-widest uppercase py-6 px-10 rounded-none">
            {fr ? "Demander une consultation privée" : "Request a private consultation"}
          </Button>
        </Link>
      </div>
    </section>
  );
}
