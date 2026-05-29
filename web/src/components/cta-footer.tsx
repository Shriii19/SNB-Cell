"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

export function CtaFooter() {
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["20%", "-10%"]);

  return (
    <footer ref={containerRef} className="relative isolate mt-20 overflow-hidden bg-black pt-24 sm:pt-32 lg:pt-40">
      {/* Deep parallax background */}
      <motion.div 
        style={{ y: bgY }}
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.15),transparent_60%)]" 
      />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
      
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <motion.div 
          style={{ y: textY }}
          className="relative z-10 mx-auto max-w-4xl text-center"
        >
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-white/70 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_0_4px_rgba(59,130,246,0.15)]" />
            Ready for production
          </div>
          
          <h2 className="font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Scale to millions without a sweat.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/60">
            Deploy your services on a resilient, high-performance edge network in minutes. Stop worrying about infrastructure and start shipping features.
          </p>
          
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/wip"
              className="inline-flex h-14 w-full items-center justify-center rounded-md bg-black px-8 text-sm font-semibold text-white transition-all duration-300  sm:w-auto"
            >
              Start Deploying Now
            </Link>
            <Link
              href="/wip"
              className="inline-flex h-14 w-full items-center justify-center rounded-md border border-white/15 bg-white/5 px-8 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:scale-105 sm:w-auto"
            >
              View Documentation
            </Link>
          </div>
        </motion.div>

        <div className="mx-auto mt-24 flex max-w-7xl flex-col items-center justify-between gap-6 border-t border-white/10 py-10 sm:flex-row sm:py-12">
          <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-white/90">
            <span className="flex h-8 w-8 items-center justify-center rounded bg-white text-[10px] text-black">
              SYS
            </span>
            Platform
          </div>
          <p className="text-sm font-medium text-white/40">
            © {new Date().getFullYear()} System Platform. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm font-medium text-white/40">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
