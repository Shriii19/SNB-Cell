"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function FeaturesBento() {
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const titleY = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);
  
  const cardY0 = useTransform(scrollYProgress, [0, 1], ["30px", "-30px"]);
  const cardY1 = useTransform(scrollYProgress, [0, 1], ["60px", "-60px"]);
  const cardY2 = useTransform(scrollYProgress, [0, 1], ["90px", "-90px"]);
  const cardY3 = useTransform(scrollYProgress, [0, 1], ["120px", "-120px"]);

  // 3D Tilt perspective mapping directly onto the scroll curve
  const perspectiveRotateX = useTransform(scrollYProgress, [0, 0.5, 1], ["10deg", "0deg", "-10deg"]);

  const cardTransforms = [cardY0, cardY1, cardY2, cardY3];

  const features = [
    {
      title: "Global State Sync",
      copy: "Instant data replication across 250+ edge nodes without usual cross-region latency.",
      colSpan: "col-span-1 md:col-span-2",
      visual: (
        <div className="absolute inset-0 right-0 top-0 overflow-hidden mix-blend-multiply opacity-60">
          <div className="absolute -right-[10%] -top-[20%] h-[140%] w-3/4 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.15),transparent_60%)] blur-xl" />
          
          <motion.div 
            className="absolute bottom-10 right-4 flex gap-4"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.2 }}
          >
            {[1, 2, 3].map((i) => (
              <motion.div key={i} className="flex flex-col gap-2 items-center"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.3, ease: "easeInOut" }}
              >
                <div className="h-16 w-3 rounded-full bg-blue-100 overflow-hidden relative">
                  <motion.div 
                    className="absolute bottom-0 w-full bg-blue-500 rounded-full"
                    animate={{ height: ["20%", "80%", "30%"] }}
                    transition={{ duration: 3, repeat: Infinity, delay: i * 0.4 }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      ),
    },
    {
      title: "Zero-latency Edge",
      copy: "Bare-metal performance right at the edge. Responses are practically instant.",
      colSpan: "col-span-1",
      visual: (
        <div className="absolute inset-0 overflow-hidden mix-blend-multiply opacity-60">
          <div className="absolute -left-10 bottom-0 h-40 w-40 rounded-full border border-blue-100 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.05),transparent_70%)]" />
          <motion.div 
            className="absolute -left-4 bottom-6 h-32 w-32 rounded-full border border-blue-300 border-dashed"
            animate={{ rotate: 360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          />
        </div>
      ),
    },
    {
      title: "Fault Tolerant",
      copy: "Automatic intelligent rerouting. Zero dropped connections or degraded performance.",
      colSpan: "col-span-1",
      visual: (
        <div className="absolute inset-0 overflow-hidden mix-blend-multiply opacity-60">
          <motion.div 
            className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.15),transparent_70%)] blur-xl"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div 
            className="absolute right-4 top-8 h-8 w-8 border-2 border-emerald-400 opacity-20"
            animate={{ rotate: [0, 90, 180] }}
            transition={{ duration: 4, repeat: Infinity, ease: "anticipate" }}
          />
        </div>
      ),
    },
    {
      title: "Auto-Scaling",
      copy: "Continuous load metric analysis proactively provisions your compute resources before spikes happen.",
      colSpan: "col-span-1 md:col-span-2",
      visual: (
        <div className="absolute inset-0 overflow-hidden mix-blend-multiply opacity-60">
          <motion.div 
            className="absolute inset-0"
            style={{
              backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(59, 130, 246, 0.05) 10px, rgba(59, 130, 246, 0.05) 20px)'
            }}
            animate={{ backgroundPosition: ["0px 0px", "40px 40px"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
        </div>
      ),
    },
  ];

  return (
    <section ref={containerRef} className="relative w-full py-20 sm:py-28 lg:py-32 bg-gray-50 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <motion.div 
          style={{ y: titleY }}
          className="mb-14 max-w-2xl md:mb-20 relative z-10"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "0px 0px -50px 0px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="font-display text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Smarter infrastructure.
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            A reliable architecture is built on speed and fault tolerance. Minimize friction and elevate the quality of every deployment instantly.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3 md:grid-rows-2">
          {features.map((feature, i) => {
            return (
              <motion.div
                key={i}
                style={{ y: cardTransforms[i], rotateX: perspectiveRotateX, transformPerspective: 1000 }}
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -50px 0px" }}
                transition={{ duration: 0.6, delay: i * 0.15, ease: "backOut" }}
                className={`group relative isolate flex min-h-[20rem] flex-col justify-end overflow-hidden rounded-[2rem] border border-gray-200 bg-white p-8 shadow-sm transition-shadow duration-500 hover:shadow-xl sm:p-10 hover:-translate-y-2 ${feature.colSpan}`}
              >
                <div className="absolute inset-0 bg-blue-50/0 transition-colors duration-500 group-hover:bg-blue-50/50" />
                
                {feature.visual}
                
                <div className="relative z-10 w-full max-w-md">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-gray-100 bg-gray-50 shadow-sm transition-colors duration-500 group-hover:border-blue-200 group-hover:bg-blue-50">
                    <motion.div 
                      className="h-2 w-2 rounded-sm bg-blue-500/50 group-hover:bg-blue-500"
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </div>
                  <h3 className="font-display text-xl font-semibold tracking-tight text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-500">
                    {feature.copy}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
