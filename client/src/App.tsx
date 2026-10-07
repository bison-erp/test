import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, Router as WouterRouter } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";

// Import all developed pages
import Home from "./pages/Home";
import ResidentialOffices from "./pages/ResidentialOffices";
import HotelsResorts from "./pages/HotelsResorts";
import ResidencyVisas from "./pages/ResidencyVisas";
import About from "./pages/About";
import ContactNewsletter from "./pages/ContactNewsletter";

// Import SEO landing pages
import LuxuryRealEstateParis from "./pages/RealEstateParis";
import LuxuryRealEstateFrenchRiviera from "./pages/RealEstateFrenchRiviera";
import LuxuryRealEstateLuxembourg from "./pages/RealEstateLuxembourg";
import GoldenVisaGreece from "./pages/GoldenVisaGreece";
import HotelInvestmentGreece from "./pages/HotelInvestmentGreece";

// Import Legal Pages
import PrivacyPolicy from "./pages/PrivacyPolicy";
import LegalNotice from "./pages/LegalNotice";
import RegulatoryDisclosures from "./pages/RegulatoryDisclosures";

function Router() {
  return (
    <Switch>
      {/* Primary Navigation Routes (English) */}
      <Route path="/" component={Home} />
      <Route path="/residential-offices" component={ResidentialOffices} />
      <Route path="/hotels-resorts" component={HotelsResorts} />
      <Route path="/residency-visas" component={ResidencyVisas} />
      <Route path="/about" component={About} />
      <Route path="/contact-newsletter" component={ContactNewsletter} />

      {/* Advanced SEO Landing Routes (English) */}
      <Route path="/real-estate-paris" component={LuxuryRealEstateParis} />
      <Route path="/real-estate-french-riviera" component={LuxuryRealEstateFrenchRiviera} />
      <Route path="/real-estate-luxembourg" component={LuxuryRealEstateLuxembourg} />
      <Route path="/golden-visa-greece" component={GoldenVisaGreece} />
      <Route path="/hotel-investment-greece" component={HotelInvestmentGreece} />

      {/* Legal Routes (English) */}
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/legal-notice" component={LegalNotice} />
      <Route path="/regulatory-disclosures" component={RegulatoryDisclosures} />

      {/* Primary Navigation Routes (French /fr/*) */}
      <Route path="/fr" component={Home} />
      <Route path="/fr/residential-offices" component={ResidentialOffices} />
      <Route path="/fr/hotels-resorts" component={HotelsResorts} />
      <Route path="/fr/residency-visas" component={ResidencyVisas} />
      <Route path="/fr/about" component={About} />
      <Route path="/fr/contact-newsletter" component={ContactNewsletter} />

      {/* Advanced SEO Landing Routes (French /fr/*) */}
      <Route path="/fr/real-estate-paris" component={LuxuryRealEstateParis} />
      <Route path="/fr/real-estate-french-riviera" component={LuxuryRealEstateFrenchRiviera} />
      <Route path="/fr/real-estate-luxembourg" component={LuxuryRealEstateLuxembourg} />
      <Route path="/fr/golden-visa-greece" component={GoldenVisaGreece} />
      <Route path="/fr/hotel-investment-greece" component={HotelInvestmentGreece} />

      {/* Legal Routes (French /fr/*) */}
      <Route path="/fr/privacy-policy" component={PrivacyPolicy} />
      <Route path="/fr/legal-notice" component={LegalNotice} />
      <Route path="/fr/regulatory-disclosures" component={RegulatoryDisclosures} />

      {/* Fallbacks */}
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App({ ssrPath }: { ssrPath?: string } = {}) {
  return (
    <ErrorBoundary>
      <LanguageProvider initialPath={ssrPath}>
        <ThemeProvider defaultTheme="light">
          <TooltipProvider>
            <Toaster />
            <WouterRouter ssrPath={ssrPath}><Router /></WouterRouter>
          </TooltipProvider>
        </ThemeProvider>
      </LanguageProvider>
    </ErrorBoundary>
  );
}

export default App;
