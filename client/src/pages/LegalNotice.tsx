import Layout from "@/components/Layout";
import { getPage } from "@/content/registry";
import { SITE_URL } from "@shared/const";
import React from "react";
import SEOHead from "@/components/SEOHead";
import { useTranslation } from "@/hooks/useTranslation";
import { useLanguage } from "@/contexts/LanguageContext";

export default function LegalNotice() {
  const { t } = useTranslation("LegalNotice");
  const { language } = useLanguage();
  return (
    <Layout>
    <div className="bg-[#F4F6F8] pt-12 pb-24">
      <SEOHead />
      
      <div className="max-w-4xl mx-auto px-6">
        <span className="text-[#005CB8] font-semibold tracking-widest text-xs uppercase block mb-3">
          {t("content.subtitle", "Regulatory Compliance")}
        </span>
        <h1 className="font-serif text-4xl md:text-5xl text-[#0A1118] mb-8 leading-tight">
              {getPage("legal", language).data.h1}
            </h1>
        
        <div className="bg-white p-8 md:p-12 rounded-xl shadow-sm border border-[#E5E7EB] prose prose-slate max-w-none text-[#374151]">
          <p className="text-sm text-[#6B7280] mb-8">
            {t("content.lastUpdated", "Last updated: May 30, 2026")}
          </p>

          <section className="mb-8">
            <h2 className="font-serif text-2xl text-[#0A1118] mb-4">{t("sections.presentation.title", "1. Website Presentation")}</h2>
            <p className="leading-relaxed mb-4">
              {t("sections.presentation.p1", "Under Article 6 of Law No. 2004-575 of June 21, 2004, on confidence in the digital economy, users of the website acropolis-real-estate.com are informed of the identity of the various parties involved in its creation and monitoring:")}
            </p>
            <p className="leading-relaxed mb-4">
              <strong>{t("sections.presentation.owner", "Owner: Nicolas MILONAS, agent commercial immobilier (Acropolis Real Estate). Registre Spécial des Agents Commerciaux (RSAC), Code APE : 4619B, SIRET : 44073282400030, SIRENE : 440 732 824.")}</strong><br />
              <strong>{t("sections.presentation.parisOffice", "Paris Registered Office")}:</strong> {t("sections.presentation.parisOfficeValue", "231, Rue Saint Honoré, 75001 – Paris (By Appointment Only)")}<br />
              <strong>{t("sections.presentation.luxOffice", "Luxembourg Office")}:</strong> {t("sections.presentation.luxOfficeValue", "54, rue Charles Darwin, L-1433 – Luxembourg (By Appointment Only)")}<br />
              <strong>{t("sections.presentation.contact", "Contact")}:</strong> <img src="/manus-storage/pasted_file_Hs1mMd_image_2cd2c6f6.png" alt={language === "fr" ? "Adresse e-mail de contact confidentiel" : "Confidential contact email address"} className="inline-block h-6 sm:h-7 align-middle" /> | +33 7 68 39 96 13
            </p>
            <p className="text-xs text-[#6B7280] italic leading-relaxed mt-2">
              {t("sections.presentation.cpi", "France: Licensed under CPI No. 7501 2026 000 000 123 issued by the Chamber of Commerce and Industry (CCI Paris Île-de-France). Subject to the Hoguet Law (Loi n° 70-9 du 2 janvier 1970) regulating real estate transactions.")}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-2xl text-[#0A1118] mb-4">{t("sections.hosting.title", "2. Website Hosting")}</h2>
            <p className="leading-relaxed mb-4">
              <strong>{t("sections.hosting.host", "Host")}:</strong> Novatis Agency SAS<br />
              <strong>{t("sections.hosting.registeredOffice", "Registered Office")}:</strong> Paris, France<br />
              <strong>{t("sections.hosting.website", "Website")}:</strong> <a href="https://novatis.agency" title="Novatis Agency" target="_blank" rel="noopener noreferrer" className="text-[#005CB8] hover:underline">https://novatis.agency</a>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-2xl text-[#0A1118] mb-4">{t("sections.intellectual.title", "3. Intellectual Property")}</h2>
            <p className="leading-relaxed mb-4">
              {t("sections.intellectual.p1", "Acropolis Real Estate is the owner of the intellectual property rights or holds the rights of use on all elements accessible on the website, including texts, images, graphics, logos, icons, sounds, and software.")}
            </p>
            <p className="leading-relaxed mb-4">
              {t("sections.intellectual.p2", "Any reproduction, representation, modification, publication, adaptation of all or part of the elements of the website, by whatever means or process, is prohibited, except with prior written authorization.")}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-2xl text-[#0A1118] mb-4">{t("sections.liability.title", "4. Limitations of Liability")}</h2>
            <p className="leading-relaxed mb-4">
              {t("sections.liability.p1", "Acropolis Real Estate acts as a publisher of the site and is responsible for the quality and truthfulness of the content it publishes.")}
            </p>
            <p className="leading-relaxed mb-4">
              {t("sections.liability.p2", "Acropolis Real Estate cannot be held liable for direct or indirect damage caused to the user's equipment when accessing the website, resulting either from the use of equipment that does not meet the specified requirements, or from the appearance of a bug or incompatibility.")}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-2xl text-[#0A1118] mb-4">5. Professional Regulations</h2>
            <p className="leading-relaxed mb-4">
              Acropolis Real Estate is a registered real estate broker subject to professional regulations in France.
            </p>
            <p className="leading-relaxed">
              <strong>Professional Card:</strong> CPI No. 7501 2026 000 000 123 issued by the Chamber of Commerce and Industry (CCI Paris Île-de-France). Subject to the Hoguet Law (Loi n° 70-9 du 2 janvier 1970) regulating real estate transactions.
            </p>
          </section>
        </div>
      </div>
    </div>
    </Layout>
  );
}
