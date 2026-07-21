import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserDoctor, faStar } from '@fortawesome/free-solid-svg-icons';
import MotionCard from './MotionCard';

const TESTIMONIALS = [
  {
    quote: "Petovital has changed our post-op protocol entirely. Animals refusing tablets take this easily, and their recovery markers rebound within 24 hours.",
    author: "Dr. Aris Vance, DVM",
    role: "Chief of Surgical Care, Vexil Surgical",
    accent: "bg-[#0052CC]/20 text-[#0052CC]"
  },
  {
    quote: "The sublingual mucosal bioavailability is real. We observe zero gastric distress even in our most sensitive trauma patients.",
    author: "Dr. Elena Rostova, DVM",
    role: "Emergency Care Lead",
    accent: "bg-[#FF7A00]/20 text-[#FF7A00]"
  },
  {
    quote: "Dosing precision is effortless with the dropper system. It gives us consistent clinical results every single time.",
    author: "Dr. Marcus Sterling, DVM",
    role: "Veterinary Clinical Director",
    accent: "bg-white/10 text-white"
  }
];

export default function VeterinaryValidation() {
  return (
    <section className="relative py-20 sm:py-28 bg-[#121212] z-40 border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-3">
          <span className="text-[#0052CC] font-bold uppercase tracking-widest text-xs sm:text-sm flex items-center justify-center gap-2">
            <FontAwesomeIcon icon={faUserDoctor} />
            Veterinary Validation
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Trusted By Critical Care Specialists</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <MotionCard key={t.author} delay={idx * 0.1}>
              <div className="p-6 sm:p-8 rounded-2xl bg-[#1A1A1A] border border-white/10 space-y-4 h-full flex flex-col justify-between">
                <div>
                  <div className="flex gap-1 text-[#FF7A00] mb-3 sm:mb-4">
                    {[...Array(5)].map((_, i) => (
                      <FontAwesomeIcon key={i} icon={faStar} className="text-xs sm:text-sm" />
                    ))}
                  </div>
                  <p className="text-gray-300 text-xs sm:text-sm italic leading-relaxed">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>
                <div className="pt-4 border-t border-white/10 flex items-center gap-3">
                  <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full ${t.accent} flex items-center justify-center font-bold text-xs sm:text-sm`}>
                    <FontAwesomeIcon icon={faUserDoctor} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xs sm:text-sm text-white">{t.author}</h3>
                    <p className="text-[10px] sm:text-xs text-gray-500">{t.role}</p>
                  </div>
                </div>
              </div>
            </MotionCard>
          ))}
        </div>
      </div>
    </section>
  );
}