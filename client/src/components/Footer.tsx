import { Link } from "./Link";
import { NAVIGATION_LINKS, SEO_PAGES, AGENCY_ADDRESS, AGENCY_PHONE, AGENCY_EMAIL } from "@shared/const";
import { IMAGES } from "@shared/images";
import { Mail, Phone, MapPin } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export default function Footer() {
  const { language } = useLanguage();
  return (
    <footer className="bg-card border-t border-border pt-20 pb-10 text-foreground">
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
        {/* Brand & Mission Column - Logo Only, Text Removed */}
        <div className="flex flex-col space-y-6">
          <div className="flex items-center group">
            <div className="relative h-14 w-32 overflow-hidden">
              <img
                src={IMAGES.logo}
                alt={language === "en" ? "Acropolis Real Estate Logo" : "Logo Acropolis Real Estate"}
                className="h-full w-full object-contain filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.05)]"
              />
            </div>
          </div>
          <p className="font-sans-modern text-sm text-foreground/80 leading-relaxed font-light">
            {language === "en" 
              ? "Providing discerning global investors with seamless access to Europe's most prestigious, off-market residential and commercial properties. Built on absolute trust, classic architectural legacy, and contemporary financial excellence."
              : "Offrir aux investisseurs internationaux un accès privilégié aux propriétés résidentielles et commerciales off-market les plus prestigieuses d'Europe. Fondé sur la confiance absolue, l'héritage classique et l'excellence financière."}
          </p>
        </div>

        {/* Navigation Links Column */}
        <div className="flex flex-col space-y-6">
          <h4 className="font-serif-classic text-sm tracking-wider text-primary uppercase font-bold">
            {language === "en" ? "Navigation" : "Navigation"}
          </h4>
          <nav className="flex flex-col space-y-3">
            {NAVIGATION_LINKS.map((link) => {
              const targetHref = link.href;
              const label = language === "fr" && link.labelFr ? link.labelFr : link.label;
              return (
                <Link key={link.href} href={targetHref}>
                  <span className="font-sans-modern text-sm text-foreground/80 hover:text-primary cursor-pointer transition-colors duration-200 font-semibold">
                    {label}
                  </span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Private Portfolios (SEO Pages) Column */}
        <div className="flex flex-col space-y-6">
          <h4 className="font-serif-classic text-sm tracking-wider text-primary uppercase font-bold">
            {language === "en" ? "Exclusive Portfolios" : "Portefeuilles Exclusifs"}
          </h4>
          <nav className="flex flex-col space-y-3">
            {SEO_PAGES.map((page) => {
              const targetHref = page.href;
              const label = language === "fr" && page.labelFr ? page.labelFr : page.label;
              return (
                <Link key={page.href} href={targetHref}>
                  <span className="font-sans-modern text-sm text-foreground/80 hover:text-primary cursor-pointer transition-colors duration-200 font-semibold">
                    {label}
                  </span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Direct Contact Column */}
        <div className="flex flex-col space-y-6">
          <h4 className="font-serif-classic text-sm tracking-wider text-primary uppercase font-bold">
            Offices
          </h4>
          <div className="flex flex-col space-y-4">
            <div className="flex items-start space-x-3 text-foreground/80">
              <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <div className="font-sans-modern text-sm font-semibold leading-relaxed">
                <span className="text-primary block font-bold text-xs uppercase tracking-wider mb-0.5">Paris</span>
                231, Rue Saint Honoré, 75001 – Paris
                <span className="text-[10px] text-primary block font-light mt-0.5">
                  {language === "en" ? "(By Appointment Only)" : "(Sur Rendez-vous Uniquement)"}
                </span>
              </div>
            </div>
            <div className="flex items-start space-x-3 text-foreground/80">
              <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <div className="font-sans-modern text-sm font-semibold leading-relaxed">
                <span className="text-primary block font-bold text-xs uppercase tracking-wider mb-0.5">Luxembourg</span>
                54, rue Charles Darwin, L-1433 – Luxembourg
                <span className="text-[10px] text-primary block font-light mt-0.5">
                  {language === "en" ? "(By Appointment Only)" : "(Sur Rendez-vous Uniquement)"}
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-3 text-foreground/80">
              <Phone className="h-5 w-5 text-primary shrink-0" />
              <a
                href={`tel:${AGENCY_PHONE.replace(/\s+/g, '')}`}
                className="font-sans-modern text-sm font-semibold hover:text-primary transition-colors"
              >
                {AGENCY_PHONE}
              </a>
            </div>
            <div className="flex items-center space-x-3 text-foreground/80">
              <Mail className="h-5 w-5 text-primary shrink-0" />
              <div className="font-sans-modern text-sm font-semibold mt-0.5">
                <img
                  src="/manus-storage/pasted_file_Hs1mMd_image_2cd2c6f6.png"
                  alt={language === "en" ? "Confidential Contact Email" : "E-mail de Contact Confidentiel"}
                  className="h-5 object-contain align-middle"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Divider */}
      <div className="container mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="font-sans-modern text-xs text-foreground/70 font-semibold text-center md:text-left order-2 md:order-1">
          &copy; {new Date().getFullYear()} Acropolis Real Estate. All rights reserved.
        </p>

        {/* Novatis Agency Signature - Centered in bottom bar */}
        <div className="flex flex-col items-center justify-center order-1 md:order-2">
          <a
            href="https://novatis.agency"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center space-y-1.5"
            title="Novatis - Agence web innovatrice"
          >
            <span className="font-sans-modern text-[9px] tracking-widest text-foreground/50 uppercase font-semibold transition-colors group-hover:text-primary">
              Conçu par
            </span>
            <div className="h-12 w-32 overflow-hidden rounded-lg border border-border/40 bg-white p-1.5 transition-all duration-300 group-hover:shadow-md group-hover:border-primary/40">
              <img
                src="/manus-storage/PRESTA_5f062c33.jpg"
                alt={language === "en" ? "Novatis Agency Logo" : "Logo Agence Novatis"}
                className="h-full w-full object-contain"
              />
            </div>
          </a>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center md:justify-end order-3">
          <Link href="/privacy-policy">
            <span className="font-sans-modern text-xs text-foreground/70 hover:text-primary cursor-pointer transition-colors font-semibold">
              {language === "en" ? "Privacy Policy" : "Charte de Confidentialité"}
            </span>
          </Link>
          <Link href="/legal-notice">
            <span className="font-sans-modern text-xs text-foreground/70 hover:text-primary cursor-pointer transition-colors font-semibold">
              {language === "en" ? "Legal Notice" : "Mentions Légales"}
            </span>
          </Link>
          <Link href="/regulatory-disclosures">
            <span className="font-sans-modern text-xs text-foreground/70 hover:text-primary cursor-pointer transition-colors font-semibold">
              {language === "en" ? "Regulatory Disclosures" : "Divulgations Réglementaires"}
            </span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
