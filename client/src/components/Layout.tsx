import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

export default function Layout({ children, title, description }: LayoutProps) {
  useEffect(() => {
    // Scroll to top on page transition
    window.scrollTo({ top: 0, behavior: "instant" });

    // Dynamic Title Update for SEO (Only fallback if SEOHead is not used)
    if (!title && !document.title) {
      document.title = "Acropolis Real Estate | Exclusive European Property Portfolio";
    }

    // Dynamic Meta Description Update (Only fallback if SEOHead is not used)
    const metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription && !description) {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = "Exclusive luxury real estate agent offering off-market residential, office, and hotel investments in Paris, Côte d'Azur, Luxembourg, and Greece.";
      document.head.appendChild(meta);
    }
  }, [title, description]);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Navigation Header */}
      <Header />

      {/* Main Content Area */}
      <main className="flex-grow pt-24">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
