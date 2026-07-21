import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faMicroscope, 
  faCapsules, 
  faXmark, 
  faTriangleExclamation, 
  faDroplet, 
  faCheck 
} from '@fortawesome/free-solid-svg-icons';
import MotionCard from './MotionCard';

export default function ComparativePhysiology() {
  return (
    <section className="relative py-20 sm:py-28 z-20 bg-[#121212] border-y border-white/10">
      <div className="container mx-auto px-4 sm:px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <span className="text-[#0052CC] font-bold uppercase tracking-widest text-xs sm:text-sm flex items-center justify-center gap-2">
            <FontAwesomeIcon icon={faMicroscope} />
            Comparative Physiology
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">The Bio-Availability Gap</h2>
          <p className="text-gray-400 text-sm sm:text-base">Why conventional tablet therapies fail during acute recovery phases.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          
          {/* PROBLEM CARD */}
          <MotionCard delay={0.05} className="p-6 sm:p-8 rounded-3xl bg-[#181818] border border-red-500/20 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="px-3 py-1 rounded-full bg-red-500/10 text-red-400 text-xs font-bold uppercase tracking-wider border border-red-500/20">
                  Conventional Tablets
                </span>
                <FontAwesomeIcon icon={faCapsules} className="text-red-400 text-xl sm:text-2xl" />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-white">Traditional Pill Degradation</h3>
              
              <div className="relative w-full h-40 sm:h-48 rounded-2xl overflow-hidden mb-5 border border-red-500/20 bg-black/40">
                <Image 
                  src="/tablet-degradation.webp" 
                  alt="Tablet degradation illustration" 
                  fill 
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-transparent to-transparent" />
              </div>

              <p className="text-gray-400 leading-relaxed text-xs sm:text-sm mb-5">
                Tablets rely on GI tract dissolution. Surgical lethargy and impaired gastric acid production lead to incomplete breakdown.
              </p>

              <div className="space-y-2.5 mb-6">
                <div className="flex items-start gap-2.5 text-gray-300 text-xs sm:text-sm">
                  <FontAwesomeIcon icon={faXmark} className="text-red-500 mt-0.5 flex-shrink-0" />
                  <span>Up to 60% active formula destroyed by GI acids</span>
                </div>
                <div className="flex items-start gap-2.5 text-gray-300 text-xs sm:text-sm">
                  <FontAwesomeIcon icon={faTriangleExclamation} className="text-red-500 mt-0.5 flex-shrink-0" />
                  <span>High refusal rate in nauseous or recovering animals</span>
                </div>
              </div>
            </div>

            <div className="p-3.5 sm:p-4 rounded-xl bg-red-950/20 border border-red-500/20 flex items-center justify-between">
              <span className="text-[11px] sm:text-xs uppercase text-gray-400 font-semibold">Absorption Rate</span>
              <span className="text-lg sm:text-xl font-black text-red-400">~35 - 40%</span>
            </div>
          </MotionCard>

          {/* SOLUTION CARD */}
          <MotionCard delay={0.15} className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#1C2536] to-[#181818] border border-[#0052CC]/40 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="px-3 py-1 rounded-full bg-[#FF7A00]/20 text-[#FF7A00] text-xs font-bold uppercase tracking-wider border border-[#FF7A00]/30">
                  Petovital Lipid Suspension
                </span>
                <FontAwesomeIcon icon={faDroplet} className="text-[#FF7A00] text-xl sm:text-2xl" />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-white">Direct Mucosal Absorption</h3>
              
              <div className="relative w-full h-40 sm:h-48 rounded-2xl overflow-hidden mb-5 border border-[#0052CC]/30 bg-black/40">
                <Image 
                  src="/lipid-droplets.webp" 
                  alt="Lipid suspension micro-droplets" 
                  fill 
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-transparent to-transparent" />
              </div>

              <p className="text-gray-300 leading-relaxed text-xs sm:text-sm mb-5">
                Micro-encapsulated liquid lipid vehicle adheres to mucosal tissues for direct capillary uptake without digestive delay.
              </p>

              <div className="space-y-2.5 mb-6">
                <div className="flex items-start gap-2.5 text-gray-200 text-xs sm:text-sm">
                  <FontAwesomeIcon icon={faCheck} className="text-[#FF7A00] font-bold mt-0.5 flex-shrink-0" />
                  <span>Immediate uptake via oral & esophageal lining</span>
                </div>
                <div className="flex items-start gap-2.5 text-gray-200 text-xs sm:text-sm">
                  <FontAwesomeIcon icon={faCheck} className="text-[#FF7A00] font-bold mt-0.5 flex-shrink-0" />
                  <span>Therapeutic peak reached in under 15 minutes</span>
                </div>
              </div>
            </div>

            <div className="p-3.5 sm:p-4 rounded-xl bg-[#0052CC]/20 border border-[#0052CC]/40 flex items-center justify-between">
              <span className="text-[11px] sm:text-xs uppercase text-gray-300 font-semibold">Verified Bio-Availability</span>
              <span className="text-lg sm:text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-[#FF7A00]">98.4%</span>
            </div>
          </MotionCard>

        </div>
      </div>
    </section>
  );
}