import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWandSparkles, faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function ClinicalCtaFooter() {
  return (
    <footer className="relative py-16 sm:py-20 z-50 bg-[#0D0D0D] border-t border-white/10 text-center">
      <div className="container mx-auto px-4 sm:px-6 space-y-6 sm:space-y-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0052CC]/20 border border-[#0052CC]/40 text-[#0052CC] text-xs font-bold uppercase tracking-wider">
          <FontAwesomeIcon icon={faWandSparkles} />
          <span>Clinical Partnership Program</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold max-w-2xl mx-auto leading-tight">
          Transform Recovery Outcomes In Your Practice
        </h2>
        
        <p className="text-gray-400 text-xs sm:text-base max-w-md mx-auto leading-relaxed">
          Ready to integrate Petovital into your clinical practice or veterinary supply chain?
        </p>

        <div className="flex justify-center pt-2">
          <Link 
            href="/order-kit"
            className="w-full sm:w-auto px-8 sm:px-10 py-3.5 sm:py-4 rounded-xl bg-[#FF7A00] hover:bg-[#FF7A00]/90 font-bold transition shadow-lg shadow-[#FF7A00]/25 flex items-center justify-center gap-3 text-base sm:text-lg active:scale-95"
          >
            <span>Request Clinical Starter Kit</span>
            <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>

        <div className="pt-10 text-[11px] sm:text-xs text-gray-600 border-t border-white/5">
          © {new Date().getFullYear()} Petovital Inc. All rights reserved. Precision Veterinary Nutrition.
        </div>
      </div>
    </footer>
  );
}