import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faCheck } from '@fortawesome/free-solid-svg-icons';
import MotionCard from './MotionCard';

const PILLARS = [
  {
    num: 'Pillar 01',
    title: 'Micro-Lipid Uptake',
    color: '#0052CC',
    bgGradient: 'from-[#222] to-[#1A1A1A]',
    border: 'border-white/10 hover:border-[#0052CC]/50',
    img: '/nano-capsule.webp',
    alt: 'Nano particle carrier visual',
    description: 'Engineered with 45nm particle sizing to ensure instant mucosal absorption, bypassing damaged post-surgical gut barriers.',
    checkText: '45nm Nano-particle carrier'
  },
  {
    num: 'Pillar 02',
    title: 'Tissue Regeneration',
    color: '#FF7A00',
    bgGradient: 'from-[#2A2018] to-[#1A1A1A]',
    border: 'border-[#FF7A00]/50 shadow-2xl',
    img: '/mitochondria-energy.webp',
    alt: 'Mitochondria tissue energy visual',
    description: 'Dense complex of L-Carnitine and Omega-3 fatty acids directly fuels mitochondrial ATP generation for tissue repair.',
    checkText: 'Mitochondrial ATP boost'
  },
  {
    num: 'Pillar 03',
    title: 'Zero-Stress Dosing',
    color: '#A0AEC0',
    bgGradient: 'from-[#222] to-[#1A1A1A]',
    border: 'border-white/10 hover:border-white/30',
    img: '/dropper-pipette.webp',
    alt: 'Glass calibrated dropper visual',
    description: 'Palatability-tested lipid base allows trauma-free oral dosing directly from the calibrated glass dropper.',
    checkText: 'Calibrated glass dropper'
  }
];

export default function SystemicPillars() {
  return (
    <section className="relative py-20 sm:py-32 container mx-auto px-4 sm:px-6 z-30">
      <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20 space-y-3">
        <span className="text-[#0052CC] font-bold uppercase tracking-widest text-xs sm:text-sm flex items-center justify-center gap-2">
          <FontAwesomeIcon icon={faBolt} className="text-[#FF7A00]" />
          Systemic Performance
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">Designed For Maximum Efficacy</h2>
        <p className="text-gray-400 text-sm sm:text-base">Three biological pillars engineered for critical post-operative outcomes.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
        {PILLARS.map((p, idx) => (
          <MotionCard key={p.num} delay={idx * 0.1}>
            <div className={`h-full bg-gradient-to-b ${p.bgGradient} p-6 rounded-3xl border ${p.border} transition duration-300 flex flex-col justify-between group`}>
              <div>
                <div className="relative w-full h-40 sm:h-44 rounded-2xl overflow-hidden mb-5 border border-white/10 bg-black">
                  <Image 
                    src={p.img} 
                    alt={p.alt} 
                    fill 
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>
                <span className="text-xs font-mono uppercase tracking-wider font-bold block mb-1" style={{ color: p.color }}>
                  {p.num}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold mb-2">{p.title}</h3>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-5">
                  {p.description}
                </p>
              </div>
              <div className="border-t border-white/10 pt-4 text-xs text-gray-300 flex items-center gap-2">
                <FontAwesomeIcon icon={faCheck} style={{ color: p.color }} /> 
                <span>{p.checkText}</span>
              </div>
            </div>
          </MotionCard>
        ))}
      </div>
    </section>
  );
}