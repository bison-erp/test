import { useLocation } from "wouter";
import { Link } from "./Link";
import { NAVIGATION_LINKS } from "@shared/const";
import { IMAGES } from "@shared/images";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useLanguage } from "../contexts/LanguageContext";

export default function Header() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white border-b border-border/40 py-2 shadow-md"
          : "bg-white/90 backdrop-blur-sm border-b border-border/20 py-3"
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Logo Section - beautifully sized, enlarged and visible */}
        <Link href="/">
          <div className="flex items-center cursor-pointer group shrink-0">
            <div className="relative h-14 w-32 lg:h-16 lg:w-36 transition-transform duration-300 group-hover:scale-105">
              <img
                src={IMAGES.logo}
                alt={language === "en" ? "Acropolis Real Estate Logo" : "Logo Acropolis Real Estate"}
                className="h-full w-full object-contain"
              />
            </div>
          </div>
        </Link>

        {/* Desktop Navigation - Clean, spaced, high contrast - visible from md (tablet/laptop) and up */}
        <nav className="hidden md:flex items-center justify-center space-x-4 lg:space-x-7 flex-1 px-4">
          {NAVIGATION_LINKS.map((link) => {
            const targetHref = link.href;
            const isActive = location === (language === "fr" ? `/fr${link.href}` : link.href);
            const label = language === "fr" && link.labelFr ? link.labelFr : link.label;
            return (
              <Link key={link.href} href={targetHref}>
                <span
                  className={`font-sans-modern text-[10px] lg:text-xs tracking-[0.2em] uppercase cursor-pointer transition-all duration-300 hover:text-accent whitespace-nowrap pb-1 border-b-2 ${
                    isActive
                      ? "text-accent font-bold border-accent"
                      : "text-primary font-medium border-transparent hover:border-accent/40"
                  }`}
                >
                  {label}
                </span>
              </Link>
            );
          })}
        </nav>

        {/* Desktop Language Switcher & Call To Action - visible from md and up */}
        <div className="hidden md:flex items-center space-x-4 shrink-0">
          <div className="flex items-center space-x-2.5 border-r border-border/60 pr-4">
            <button
              onClick={() => setLanguage("en")}
              className={`flex items-center space-x-1 font-sans-modern text-[10px] tracking-widest uppercase transition-all duration-200 cursor-pointer ${
                language === "en"
                  ? "text-accent font-bold scale-105"
                  : "text-primary/60 hover:text-accent font-medium"
              }`}
              title="English"
            >
              <span className="text-xs">🇬🇧</span>
              <span>EN</span>
            </button>
            <span className="text-primary/30 text-[10px]">|</span>
            <button
              onClick={() => setLanguage("fr")}
              className={`flex items-center space-x-1 font-sans-modern text-[10px] tracking-widest uppercase transition-all duration-200 cursor-pointer ${
                language === "fr"
                  ? "text-accent font-bold scale-105"
                  : "text-primary/60 hover:text-accent font-medium"
              }`}
              title="Français"
            >
              <span className="text-xs">🇫🇷</span>
              <span>FR</span>
            </button>
          </div>
          <Link href="/contact-newsletter">
            <Button
              className="font-sans-modern text-[10px] lg:text-xs tracking-[0.2em] uppercase px-4 lg:px-6 py-5 lg:py-6 rounded-none transition-all duration-300 bg-primary text-primary-foreground hover:bg-accent hover:text-primary"
            >
              {language === "en" ? "Private Consultation" : "Consultation Privée"}
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button - visible on screens smaller than md */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden transition-colors focus:outline-none p-2 text-primary"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Dropdown Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-border py-6 px-6 shadow-lg animate-in fade-in slide-in-from-top-5 duration-300 max-h-[80vh] overflow-y-auto">
          <nav className="flex flex-col space-y-3">
            {NAVIGATION_LINKS.map((link) => {
              const targetHref = link.href;
              const isActive = location === (language === "fr" ? `/fr${link.href}` : link.href);
              const label = language === "fr" && link.labelFr ? link.labelFr : link.label;
              return (
                <Link key={link.href} href={targetHref} onClick={() => setIsOpen(false)}>
                  <span
                    className={`font-sans-modern text-sm tracking-widest uppercase cursor-pointer block py-3 border-b border-border/40 ${
                      isActive ? "text-accent font-bold" : "text-primary font-semibold"
                    }`}
                  >
                    {label}
                  </span>
                </Link>
              );
            })}
            {/* Mobile Language Switcher */}
            <div className="flex items-center justify-center space-x-6 py-4 border-t border-b border-border/40">
              <button
                onClick={() => {
                  setLanguage("en");
                  setIsOpen(false);
                }}
                className={`flex items-center space-x-1.5 font-sans-modern text-xs tracking-widest uppercase cursor-pointer ${
                  language === "en" ? "text-accent font-bold" : "text-primary/60 font-semibold"
                }`}
              >
                <span className="text-sm">🇬🇧</span>
                <span>English</span>
              </button>
              <span className="text-primary/30">|</span>
              <button
                onClick={() => {
                  setLanguage("fr");
                  setIsOpen(false);
                }}
                className={`flex items-center space-x-1.5 font-sans-modern text-xs tracking-widest uppercase cursor-pointer ${
                  language === "fr" ? "text-accent font-bold" : "text-primary/60 font-semibold"
                }`}
              >
                <span className="text-sm">🇫🇷</span>
                <span>Français</span>
              </button>
            </div>
            <Link href="/contact-newsletter" onClick={() => setIsOpen(false)}>
              <Button
                className="w-full bg-primary text-primary-foreground hover:bg-accent hover:text-primary font-sans-modern text-xs tracking-widest uppercase py-6 rounded-none transition-all duration-300"
              >
                {language === "en" ? "Private Consultation" : "Consultation Privée"}
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
