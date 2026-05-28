"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useVelocity, useSpring } from "framer-motion";

export function TrustStrip() {
  const containerRef = useRef<HTMLElement>(null);
  
  // Track scroll specifically within this section
  const { scrollYProgress, scrollY } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Calculate scroll velocity for the marquee
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
  const skewVelocity = useTransform(smoothVelocity, [-1000, 1000], [-5, 5]);

  // Parallax effects
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const titleY = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);
  
  const cardY0 = useTransform(scrollYProgress, [0, 1], ["20px", "-20px"]);
  const cardY1 = useTransform(scrollYProgress, [0, 1], ["40px", "-40px"]);
  const cardY2 = useTransform(scrollYProgress, [0, 1], ["60px", "-60px"]);
  const cardY3 = useTransform(scrollYProgress, [0, 1], ["80px", "-80px"]);

  const cardTransforms = [cardY0, cardY1, cardY2, cardY3];
  const sectionOpacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0.35, 1, 1, 0.35]);
  const sectionScale = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0.96, 1, 1, 0.96]);
  const sectionBlur = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], ["blur(12px)", "blur(0px)", "blur(0px)", "blur(12px)"]);
  
  const metrics = [
    { label: "Requests / Sec", value: "10M+" },
    { label: "Uptime", value: "99.99%" },
    { label: "Edge Nodes", value: "250+" },
    { label: "Latency", value: "< 15ms" },
  ];

  const brands = ["Vercel", "Stripe", "Linear", "Supabase", "Retool", "Raycast", "Vercel", "Stripe", "Linear", "Supabase"];

  return (
    <section ref={containerRef} className="relative w-full overflow-hidden border-y border-gray-100 bg-white py-16 sm:py-20 lg:py-24">
      {/* Subtle modern background effect with parallax */}
      <motion.div 
        style={{ y: bgY }}
        className="absolute inset-x-0 -top-1/2 h-[200%] w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px]" 
      />
      <div className="absolute left-1/2 top-1/2 -z-10 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500 opacity-[0.02] blur-[100px]" />

      <motion.div
        style={{ opacity: sectionOpacity, scale: sectionScale, filter: sectionBlur }}
        className="relative z-10 origin-center"
      >
        <div className="mx-auto mb-16 max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <motion.div 
              style={{ y: titleY }}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "0px 0px -50px 0px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-xl"
            >
              <h2 className="font-display text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                Engineered for infinite scale.
              </h2>
            </motion.div>
            
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {metrics.map((metric, i) => {
                return (
                  <motion.div
                    style={{ y: cardTransforms[i] }}
                    initial={{ opacity: 0, scale: 0.8, y: 50 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true, margin: "0px 0px -50px 0px" }}
                    transition={{ duration: 0.6, delay: i * 0.15, ease: "backOut" }}
                    key={metric.label}
                    className="group relative flex flex-col gap-2 rounded-2xl border border-gray-100 bg-white/60 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="font-display text-4xl font-semibold tracking-tight text-gray-900">
                      {metric.value}
                    </div>
                    <div className="text-xs font-semibold uppercase tracking-widest text-gray-500">
                      {metric.label}
                    </div>
                    {/* Moving accent line */}
                    <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-blue-500 transition-all duration-500 group-hover:w-full" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Infinite scrolling marquee strictly affected by scroll velocity */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ skewX: skewVelocity }}
          className="relative flex overflow-x-hidden border-t border-gray-100/50 bg-gray-50/30 py-8"
        >
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-white to-transparent" />
          <motion.div 
            className="flex whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 20, ease: "linear", repeat: Infinity }}
          >
            {brands.map((brand, i) => (
              <div key={i} className="mx-8 flex items-center justify-center text-xl font-display font-bold text-gray-300">
                {brand}
              </div>
            ))}
            {brands.map((brand, i) => (
              <div key={`dup-${i}`} className="mx-8 flex items-center justify-center text-xl font-display font-bold text-gray-300">
                {brand}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
