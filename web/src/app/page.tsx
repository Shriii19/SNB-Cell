"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { HeroScene } from "@/components/hero-scene";
import { TrustStrip } from "@/components/trust-strip";
import { FeaturesBento } from "@/components/features-bento";
import { CtaFooter } from "@/components/cta-footer";



export default function Home() {
  const { scrollYProgress } = useScroll();

  return (
    <main className="relative flex-1 overflow-x-hidden text-white bg-[#030712]">
      {/* Global Scroll Progress Bar matching the blue branding */}
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed top-0 left-0 right-0 h-1 bg-blue-500 origin-left z-50"
      />

      {/* NEW HERO SECTION (Based on the requested design) */}
      <section className="relative isolate px-6 pt-32 pb-24 sm:px-8 lg:px-12 max-w-7xl mx-auto overflow-hidden">
        {/* Huge top typography */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 relative z-20"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-400 shadow-sm backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            System Operational
          </div>
          <h2 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter text-white leading-[0.9]">
            MODERN <br/>
            <span className="italic text-gray-500 font-serif font-medium tracking-normal">INFRASTRUCTURE</span>
          </h2>
        </motion.div>

        {/* The main colored card */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative rounded-[2rem] sm:rounded-[2.5rem] bg-white/[0.02] p-6 sm:p-10 lg:p-16 flex flex-col-reverse lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center border border-white/10 backdrop-blur-xl"
        >
          
          {/* Background decorative swirl */}
          <div className="absolute inset-0 pointer-events-none opacity-20 overflow-hidden rounded-[2rem] sm:rounded-[2.5rem]">
            <svg className="absolute w-[150%] h-[150%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" viewBox="0 0 200 200" preserveAspectRatio="none">
               <path d="M-50,100 C20,150 80,50 150,100 C220,150 280,50 350,100" stroke="#3b82f6" strokeWidth="4" fill="none" />
               <path d="M-50,120 C20,170 80,70 150,120 C220,170 280,70 350,120" stroke="#3b82f6" strokeWidth="2" fill="none" opacity="0.5" />
            </svg>
          </div>

          {/* Left column content */}
          <div className="relative z-10 flex flex-col items-start w-full max-w-lg lg:mt-12">
            <p className="text-base sm:text-lg lg:text-xl text-gray-400 leading-relaxed font-medium">
              Engineer your next breakthrough with our high-performance, edge-optimized toolkit. Designed strictly for developers who demand control, speed, and precision.
            </p>
            
            <div className="mt-8 lg:mt-10 flex flex-col sm:flex-row w-full sm:w-auto gap-4">
              <Link href="/wip" className="flex items-center justify-center w-full sm:w-auto rounded-full  px-8 py-4 text-sm sm:text-base font-semibold text-zinc-900 transition-transform hover:scale-105 shadow-[0_8px_20px_rgba(255,255,255,0.1)]">
                Start Building
              </Link>
              <Link href="/wip" className="flex items-center justify-center w-full sm:w-auto rounded-full bg-white/5 border border-white/10 px-8 py-4 text-sm sm:text-base font-semibold text-white transition-all hover:scale-105 hover:bg-white/10 hover:border-white/20">
                Read Docs
              </Link>
            </div>
          </div>

          {/* Right column - 3D Space Mascot Scene */}
          <div className="relative z-10 flex flex-col w-full h-[320px] sm:h-[400px] lg:min-h-[500px] justify-center items-center lg:ml-auto lg:-mt-12 pointer-events-auto">
            <HeroScene />
          </div>
        </motion.div>
      </section>

      <TrustStrip />
      <FeaturesBento />
      <CtaFooter />
    </main>
  );
}
