import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch, Router as WouterRouter } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import type { PageKey } from "./content/registry";

import Home from "./pages/Home";
import ResidentialOffices from "./pages/ResidentialOffices";
import HotelsResorts from "./pages/HotelsResorts";
import ResidencyVisas from "./pages/ResidencyVisas";
import About from "./pages/About";
import ContactNewsletter from "./pages/ContactNewsletter";
import LandingPage from "./pages/LandingPage";
import BlogIndex from "./pages/BlogIndex";
import BlogPost from "./pages/BlogPost";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import LegalNotice from "./pages/LegalNotice";
import RegulatoryDisclosures from "./pages/RegulatoryDisclosures";
import NotFound from "./pages/NotFound";

const landing = (pageKey: PageKey) => () => <LandingPage pageKey={pageKey} />;

/** English path → component. Every route also exists under /fr. */
const PAGES: [string, () => React.JSX.Element][] = [
  ["/", Home],
  ["/residential-offices", ResidentialOffices],
  ["/hotels-resorts", HotelsResorts],
  ["/residency-visas", ResidencyVisas],
  ["/about", About],
  ["/contact-newsletter", ContactNewsletter],
  ["/real-estate-paris", landing("paris")],
  ["/off-market-paris", landing("offMarketParis")],
  ["/real-estate-french-riviera", landing("riviera")],
  ["/real-estate-luxembourg", landing("luxembourg")],
  ["/golden-visa-greece", landing("goldenVisa")],
  ["/hotel-investment-greece", landing("hotelInvestment")],
  ["/blog", BlogIndex],
  ["/blog/:slug", BlogPost],
  ["/privacy-policy", PrivacyPolicy],
  ["/legal-notice", LegalNotice],
  ["/regulatory-disclosures", RegulatoryDisclosures],
];

function Router() {
  return (
    <Switch>
      {PAGES.flatMap(([path, component]) => [
        <Route key={path} path={path} component={component} />,
        <Route key={`fr${path}`} path={path === "/" ? "/fr" : `/fr${path}`} component={component} />,
      ])}
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
