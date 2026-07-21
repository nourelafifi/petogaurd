'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAtom, faCrosshairs } from '@fortawesome/free-solid-svg-icons';

const NODES_DATA = [
  {
    id: 'b12',
    title: 'Vitamin B12 & B-Complex',
    tag: 'NERVOUS SYSTEM RECOVERY',
    description: 'Bypasses digestive breakdown to restore neuromuscular signaling and rapidly reverse lethargy.',
    image: '/node-b12-blue.webp',
    color: '#0052CC',
    gridArea: 'lg:col-start-1 lg:row-start-1',
    lineCoords: { x1: '25%', y1: '25%', x2: '45%', y2: '42%' }
  },
  {
    id: 'zinc',
    title: 'Zinc Glycinate & L-Carnitine',
    tag: 'CELLULAR ATP FUELS',
    description: 'Powers mitochondrial ATP energy production and fortifies systemic immune cell defenses.',
    image: '/node-zinc-molecule.webp',
    color: '#FF7A00',
    gridArea: 'lg:col-start-3 lg:row-start-1',
    lineCoords: { x1: '75%', y1: '25%', x2: '55%', y2: '42%' }
  },
  {
    id: 'omega3',
    title: 'Pure Omega-3 (EPA/DHA)',
    tag: 'ANTI-INFLAMMATORY LIPID',
    description: 'Reduces systemic post-op joint inflammation and accelerates clinical surgical wound closure.',
    image: '/node-omega3-amber.webp',
    color: '#FF7A00',
    gridArea: 'lg:col-start-1 lg:row-start-2',
    lineCoords: { x1: '25%', y1: '75%', x2: '45%', y2: '58%' }
  },
  {
    id: 'carrier',
    title: 'Bio-Lipid Carrier Vehicle',
    tag: '45NM NANO DELIVERY',
    description: 'Standardized 45nm micro-particle sizing engineered for 98.4% direct sublingual mucosal uptake.',
    image: '/node-lipid-particle.webp',
    color: '#0052CC',
    gridArea: 'lg:col-start-3 lg:row-start-2',
    lineCoords: { x1: '75%', y1: '75%', x2: '55%', y2: '58%' }
  }
];

export default function BiochemicalArchitecture() {
  const [activeNode, setActiveNode] = useState(null);

  return (
    <section id="biochemical-section" className="relative py-20 sm:py-32 bg-[#0C0D0E] text-white overflow-hidden border-t border-white/10 select-none">
      
      {/* HUD Lightweight Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0052CC]/20 border border-[#0052CC]/40 text-[#0052CC] text-xs font-mono font-bold uppercase tracking-widest">
            <FontAwesomeIcon icon={faAtom} className="animate-spin text-xs" style={{ animationDuration: '10s' }} />
            <span>Biochemical Blueprint</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Molecular Precision Architecture
          </h2>
          <p className="text-gray-400 text-xs sm:text-base">
            Deconstructed active compound matrix engineered for instant absorption.
          </p>
        </div>

        {/* HUD Box Frame */}
        <div className="relative p-4 sm:p-8 lg:p-12 rounded-3xl bg-[#121417]/95 border border-white/10 md:backdrop-blur-xl shadow-2xl">
          
          {/* Telemetry Accents */}
          <div className="flex flex-wrap items-center justify-between text-[10px] sm:text-xs font-mono text-gray-500 mb-6 gap-2 border-b border-white/5 pb-3">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faCrosshairs} className="text-[#0052CC]" />
              <span>LATITUDE: 45nm_VEHICLE</span>
            </div>
            <div className="text-[#FF7A00] bg-[#FF7A00]/10 px-2.5 py-0.5 rounded border border-[#FF7A00]/30 font-semibold">
              PURITY: 99.8% USP
            </div>
          </div>

          {/* HUD Grid Layout */}
          <div className="relative grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-2 gap-4 sm:gap-8 items-center min-h-[auto] lg:min-h-[560px]">
            
            {/* Vector Connector Lines Layer (Desktop Only) */}
            <svg className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none z-10">
              <defs>
                <linearGradient id="lineGradBlue" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0052CC" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#0052CC" stopOpacity="0.2" />
                </linearGradient>
                <linearGradient id="lineGradOrange" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FF7A00" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#FF7A00" stopOpacity="0.2" />
                </linearGradient>
              </defs>

              {NODES_DATA.map((node) => {
                const isActive = activeNode === node.id;
                return (
                  <g key={`line-${node.id}`}>
                    <line
                      x1={node.lineCoords.x1}
                      y1={node.lineCoords.y1}
                      x2={node.lineCoords.x2}
                      y2={node.lineCoords.y2}
                      stroke={node.color === '#FF7A00' ? 'url(#lineGradOrange)' : 'url(#lineGradBlue)'}
                      strokeWidth={isActive ? '3' : '1.5'}
                      strokeDasharray={isActive ? 'none' : '4 4'}
                      className="transition-all duration-300"
                    />
                    <circle 
                      cx={node.lineCoords.x2} 
                      cy={node.lineCoords.y2} 
                      r={isActive ? "6" : "3"} 
                      fill={node.color} 
                      className="transition-all duration-300"
                    />
                  </g>
                );
              })}
            </svg>

            {/* CENTER COMPONENT: GLOWING LIQUID DROP (Top on Mobile, Center on Desktop) */}
            <div className="lg:col-start-2 lg:row-span-2 relative flex flex-col items-center justify-center py-6 lg:py-0 z-20 order-first lg:order-none">
              
              {/* Outer Animated Ring (Hardware Accelerated) */}
              <div className="absolute w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full border border-dashed border-[#0052CC]/40 pointer-events-none animate-[spin_25s_linear_infinite]" />
              <div className="absolute w-48 h-48 sm:w-60 sm:h-60 lg:w-64 lg:h-64 rounded-full border border-dashed border-[#FF7A00]/40 pointer-events-none animate-[spin_35s_linear_infinite_reverse]" />

              {/* Glowing Orb Image Wrapper */}
              <div className="relative w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 rounded-full border-2 border-white/20 p-2 bg-gradient-to-b from-white/10 to-black/80 backdrop-blur-md shadow-[0_0_40px_rgba(255,122,0,0.2)] flex items-center justify-center">
                <div className="relative w-full h-full rounded-full overflow-hidden">
                  <Image 
                    src="/core-lipid-drop.webp" 
                    alt="Petovital Encapsulated Lipid Droplet Core" 
                    fill 
                    sizes="224px"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>
              </div>

              <div className="mt-3 text-center">
                <span className="text-[10px] sm:text-xs font-mono text-[#FF7A00] uppercase tracking-widest font-bold block">
                  CORE VEHICLE
                </span>
                <span className="text-xs sm:text-sm font-semibold text-gray-300">
                  Sublingual Encapsulated Lipid
                </span>
              </div>
            </div>

            {/* 4 PERIPHERAL COMPONENT NODES */}
            {NODES_DATA.map((node, idx) => {
              const isHovered = activeNode === node.id;

              return (
                <motion.div
                  key={node.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  onMouseEnter={() => setActiveNode(node.id)}
                  onMouseLeave={() => setActiveNode(null)}
                  onClick={() => setActiveNode(activeNode === node.id ? null : node.id)}
                  className={`relative z-20 ${node.gridArea} p-4 sm:p-5 rounded-2xl bg-[#181B20] border transition-all duration-300 cursor-pointer ${
                    isHovered 
                      ? 'border-[#FF7A00] shadow-[0_0_20px_rgba(255,122,0,0.15)] bg-[#1F232B]' 
                      : 'border-white/10 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    
                    {/* Node Image Badge */}
                    <div className="relative flex-shrink-0">
                      <div 
                        className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border p-0.5 sm:p-1 bg-black relative overflow-hidden transition-all duration-300"
                        style={{ borderColor: isHovered ? node.color : 'rgba(255,255,255,0.2)' }}
                      >
                        <Image 
                          src={node.image} 
                          alt={node.title} 
                          fill 
                          sizes="64px"
                          className="object-cover rounded-full"
                        />
                      </div>
                      <span 
                        className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full border border-black"
                        style={{ backgroundColor: node.color }}
                      />
                    </div>

                    {/* Node Content */}
                    <div className="space-y-0.5 sm:space-y-1">
                      <span 
                        className="text-[9px] sm:text-[10px] font-mono font-bold tracking-widest uppercase block"
                        style={{ color: node.color }}
                      >
                        {node.tag}
                      </span>
                      <h3 className="text-sm sm:text-base font-bold text-white leading-tight">
                        {node.title}
                      </h3>
                      <p className="text-[11px] sm:text-xs text-gray-400 leading-relaxed pt-0.5">
                        {node.description}
                      </p>
                    </div>

                  </div>
                </motion.div>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
}