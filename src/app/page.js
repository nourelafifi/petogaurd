import React from 'react';
import HeroSection from '@/components/HeroSection';
import ComparativePhysiology from '@/components/ComparativePhysiology';
import SystemicPillars from '@/components/SystemicPillars';
import BiochemicalArchitecture from '@/components/BiochemicalArchitecture';
import VeterinaryValidation from '@/components/VeterinaryValidation';
import ClinicalCtaFooter from '@/components/ClinicalCtaFooter';

export default function PetovitalPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProduct',
    name: 'Petovital Recovery Lipid Suspension',
    description: 'Sublingual micro-encapsulated liquid lipid formulation for rapid post-operative veterinary care.',
    manufacturer: {
      '@type': 'Organization',
      name: 'Petovital Inc.',
    }
  };

  return (
    <main className="relative bg-[#1A1A1A] text-white selection:bg-[#FF7A00] selection:text-white overflow-x-hidden font-sans">
      {/* JSON-LD for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Global Background Grid Pattern */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(#0052CC_1px,transparent_1px)] [background-size:32px_32px]" />
      </div>

      <HeroSection />
      <ComparativePhysiology />
      <SystemicPillars />
      <BiochemicalArchitecture />
      <VeterinaryValidation />
      <ClinicalCtaFooter />
    </main>
  );
}