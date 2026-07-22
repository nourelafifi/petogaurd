'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDroplet, faArrowRight, faFlask } from '@fortawesome/free-solid-svg-icons';

export default function HeroSection() {
  const heroRef = useRef(null);

  // 1. Target scroll progress specifically for the Hero section container
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'], // From top of section to top of viewport
  });

  // 2. Add spring physics to smooth out wheel & trackpad jitter
  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 22,
    restDelta: 0.001,
  });

  // 3. Map scroll progress (0 to 1) to transform values
  const imageY = useTransform(smoothScroll, [0, 1], [0, 130]);        // Vertical parallax offset
  const imageRotate = useTransform(smoothScroll, [0, 1], [0, -12]);   // Slight counter-clockwise tilt
  const imageScale = useTransform(smoothScroll, [0, 1], [1, 0.88]);    // Smooth zoom out as it leaves view
  const glowScale = useTransform(smoothScroll, [0, 1], [1, 1.35]);    // Ambient light expands
  const glowOpacity = useTransform(smoothScroll, [0, 1], [0.5, 0.15]); // Ambient light fades out

  return (
    <section 
      ref={heroRef}
      className="relative min-h-[90vh] lg:min-h-screen flex items-center justify-center overflow-hidden z-10 pt-5 md:pt-24 pb-16"
    >
      {/* Scroll-Reactive Ambient Glow (Hardware Accelerated) */}
      <motion.div 
        style={{
          scale: glowScale,
          opacity: glowOpacity,
        }}
        className="absolute w-[320px] sm:w-[500px] lg:w-[650px] h-[320px] sm:h-[500px] lg:h-[650px] rounded-full bg-gradient-to-tr from-[#0052CC]/30 to-[#FF7A00]/20 blur-[100px] sm:blur-[140px] pointer-events-none transform-gpu translate-z-0" 
      />

      <div className="container mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
        
        {/* Left Copy Column */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-5 sm:space-y-6 text-center lg:text-left"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF7A00]/10 border border-[#FF7A00]/30 text-[#FF7A00] text-xs sm:text-sm font-semibold tracking-wider uppercase">
            <FontAwesomeIcon icon={faDroplet} className="animate-pulse text-xs" />
            <span>Clinical Grade Liquid Lipid Tonic</span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]">
            Rapid Cellular <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0052CC] via-white to-[#FF7A00]">
              Recovery & Vitality
            </span>
          </h1>
          
          <p className="text-sm sm:text-lg text-gray-300 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Engineered for post-op and critical veterinary care. Delivering 98.4% bio-availability directly into the mucosal lining without digestive delay.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
            <Link 
              href="/order-kit"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#FF7A00] hover:bg-[#FF7A00]/90 font-bold transition shadow-lg shadow-[#FF7A00]/25 flex items-center justify-center gap-3 text-base active:scale-95"
            >
              <span>Order Clinical Sample</span>
              <FontAwesomeIcon icon={faArrowRight} className="text-sm" />
            </Link>
            <a 
              href="#biochemical-section"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl border border-white/20 hover:border-white/50 font-semibold backdrop-blur-md transition flex items-center justify-center gap-3 text-base active:scale-95"
            >
              <FontAwesomeIcon icon={faFlask} className="text-[#0052CC]" />
              <span>View Bio-Data Matrix</span>
            </a>
          </div>
        </motion.div>

        {/* Right Hero Product Image (Scroll Animated) */}
        <div className="relative flex justify-center mt-4 lg:mt-0">
          <motion.div 
            style={{
              y: imageY,
              rotate: imageRotate,
              scale: imageScale,
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative w-full max-w-[320px] sm:max-w-md lg:max-w-lg aspect-square drop-shadow-[0_20px_40px_rgba(0,82,204,0.35)] transform-gpuWillChange"
          >
            <Image 
              src="/hero-product.webp" 
              alt="Petovital Advanced Recovery Tonic Hero Render" 
              fill
              sizes="(max-width: 768px) 320px, (max-width: 1200px) 450px, 600px"
              className="object-contain"
              priority
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
}