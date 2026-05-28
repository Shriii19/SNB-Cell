"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { HeroScene } from "@/components/hero-scene";
import { TrustStrip } from "@/components/trust-strip";
import { FeaturesBento } from "@/components/features-bento";
import { CtaFooter } from "@/components/cta-footer";

const heroTags = [
  "Real-time latency",
  "Edge network deployment",
  "High availability",
];

const featureCards = [
  {
    title: "Enterprise-grade infrastructure",
    copy: "Built on a resilient edge network to ensure zero-latency interactions and 99.99% uptime globally.",
  },
  {
    title: "Precision engineering",
    copy: "Clean architecture and strictly typed APIs provide a robust foundation for scaling your applications.",
  },
  {
    title: "Developer first",
    copy: "Comprehensive documentation, deterministic behavior, and powerful debugging tools at your fingertips.",
  },
];

export default function Home() {
  const { scrollYProgress } = useScroll();
  
  // High-end parallax calculations
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 0.5], ["0%", "100%"]); // Reduced travel so it doesn't leave screen instantly
  const textOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const textScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.85]);
  const textBlur = useTransform(scrollYProgress, [0, 0.3], ["blur(0px)", "blur(12px)"]);
  
  // Synchronize the globe's visual departure with the text
  const sceneY = useTransform(scrollYProgress, [0, 0.5], ["0%", "100%"]);
  const sceneOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const sceneScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.85]);
  const sceneBlur = useTransform(scrollYProgress, [0, 0.3], ["blur(0px)", "blur(20px)"]);

  return (
    <main className="relative flex-1 overflow-x-hidden text-[var(--foreground)] bg-[white]">
      {/* Global Scroll Progress Bar matching the blue branding */}
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed top-0 left-0 right-0 h-1 bg-blue-500 origin-left z-50"
      />

      <section className="relative isolate min-h-screen px-6 pb-18 pt-6 sm:px-8 lg:px-12">
        {/* Subtle geometric grid background with Parallax motion */}
        <motion.div 
          style={{ y: backgroundY }}
          className="absolute inset-0 max-w-full h-[150%] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" 
        />

        <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-10">
          <div id="hero-scene" className="absolute -top-24" />
          <div className="relative grid flex-1 items-center gap-16 py-8 md:min-h-[calc(100vh-8rem)] lg:grid-cols-[1.02fr_0.98fr] lg:py-10">
            {/* Mobile: keep the globe inside hero only, behind text content */}
            <motion.div
              style={{ y: sceneY, opacity: sceneOpacity, scale: sceneScale, filter: sceneBlur }}
              className="pointer-events-none absolute inset-x-0 top-0 z-0 flex h-[24rem] items-start justify-center sm:h-[30rem] lg:hidden"
            >
              <div className="w-[115%] max-w-[34rem] opacity-70">
                <HeroScene showHud={false} />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/70 to-white" />
            </motion.div>
            
            {/* Left Column Texts scrolling independent of the 3D scene */}
            <motion.div 
              style={{ y: textY, opacity: textOpacity, scale: textScale, filter: textBlur }}
              className="max-w-2xl relative z-10 origin-top-left"
            >
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="mb-6 inline-flex items-center gap-2 rounded border border-gray-200 bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-widest text-gray-500 shadow-sm"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                System Operational
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                className="max-w-3xl font-display text-5xl font-semibold leading-[1.05] tracking-tight text-gray-900 sm:text-6xl lg:text-7xl"
              >
                The infrastructure for modern applications
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                className="mt-6 max-w-xl text-base leading-7 text-gray-600 sm:text-lg"
              >
                Engineer your next breakthrough with our high-performance, edge-optimized toolkit. Designed strictly for developers who demand control, speed, and precision.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                className="mt-8 flex flex-col gap-3 sm:flex-row"
              >
                <a
                  href="#hero-scene"
                  className="inline-flex h-12 items-center justify-center rounded-md bg-black px-8 text-sm font-semibold text-white transition-all hover:bg-gray-800 hover:scale-105 hover:shadow-lg"
                >
                  Start Building
                </a>
                <a
                  href="#hero-notes"
                  className="inline-flex h-12 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-semibold text-gray-900 shadow-sm transition-all hover:scale-105 hover:border-gray-300 hover:bg-gray-50"
                >
                  Read Documentation
                </a>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                className="mt-8 flex flex-wrap gap-2"
              >
                {heroTags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded bg-gray-50 border border-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600 transition-colors hover:bg-gray-100"
                  >
                    {tag}
                  </span>
                ))}
              </motion.div>

              <div
                id="hero-notes"
                className="mt-12 grid gap-6 sm:grid-cols-3"
              >
                {featureCards.map((card, i) => (
                  <motion.article
                    key={card.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + (i * 0.1), ease: "easeOut" }}
                    className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
                  >
                    <div className="mb-3 h-8 w-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center">
                      <div className="h-3 w-3 rounded-sm bg-blue-500" />
                    </div>
                    <h2 className="font-display text-base font-semibold tracking-tight text-gray-900">
                      {card.title}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-gray-500">
                      {card.copy}
                    </p>
                  </motion.article>
                ))}
              </div>
            </motion.div>

            {/* Desktop: keep dedicated right-column 3D scene */}
            <motion.div 
              style={{ y: sceneY, opacity: sceneOpacity, scale: sceneScale, filter: sceneBlur }}
              className="relative hidden w-full items-center justify-center origin-center pointer-events-auto lg:flex lg:h-[800px]"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                className="w-full h-full flex items-center justify-center"
              >
                <HeroScene />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <TrustStrip />
      <FeaturesBento />
      <CtaFooter />
    </main>
  );
}
