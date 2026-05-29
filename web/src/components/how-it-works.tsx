"use client";

import { motion } from "framer-motion";

export function HowItWorks() {
  return (
    <section className="relative isolate px-6 py-24 sm:px-8 lg:px-12 max-w-7xl mx-auto overflow-hidden">
      {/* Huge top typography, matching the "PLAN YOUR ESCAPE" aesthetic */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-6 relative z-20"
      >
        <h2 className="font-display text-6xl sm:text-8xl lg:text-9xl font-black uppercase tracking-tighter text-gray-900 leading-[0.9]">
          SHIP YOUR <br/>
          <span className="italic text-gray-700 font-serif font-medium tracking-normal">PROJECT</span>
        </h2>
      </motion.div>

      {/* The main colored card */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative rounded-[2.5rem] bg-indigo-50 p-8 sm:p-12 lg:p-16 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center border border-indigo-100"
      >
        
        {/* Background decorative swirl matching the image */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.05] overflow-hidden rounded-[2.5rem]">
          <svg className="absolute w-[150%] h-[150%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" viewBox="0 0 200 200" preserveAspectRatio="none">
             <path d="M-50,100 C20,150 80,50 150,100 C220,150 280,50 350,100" stroke="#000" strokeWidth="4" fill="none" />
             <path d="M-50,120 C20,170 80,70 150,120 C220,170 280,70 350,120" stroke="#000" strokeWidth="2" fill="none" />
          </svg>
        </div>

        {/* Left column content */}
        <div className="relative z-10 flex flex-col items-start max-w-lg lg:mt-12">
          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed font-medium">
            We provide the most robust infrastructure for your applications. Try our seamless deployment workflow for any project size. Our global edge network is always ready to scale with your needs.
          </p>
          
          <button className="mt-10 rounded-full bg-[#1c1917] px-8 py-4 text-base font-semibold text-white transition-transform hover:scale-105 shadow-[0_8px_20px_rgba(28,25,23,0.3)]">
            Get Started
          </button>
        </div>

        {/* Right column - "How it works in a few steps" instead of the mobile mockup */}
        <div className="relative z-10 flex flex-col w-full max-w-md bg-white rounded-3xl p-8 shadow-2xl shadow-indigo-900/5 border border-white/50 lg:ml-auto lg:-mt-24">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-semibold text-lg text-gray-900">Deployment Flow</h3>
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-500 bg-indigo-50 px-2 py-1 rounded-full">Automated</span>
          </div>
          
          <div className="flex gap-4 mt-2">
            <div className="flex flex-col items-center">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-100 text-indigo-700 font-bold text-sm">1</div>
              <div className="w-0.5 h-full bg-gray-100 my-2 rounded-full"></div>
            </div>
            <div className="pb-8 pt-1">
              <h4 className="font-semibold text-gray-900">Connect Repository</h4>
              <p className="text-sm text-gray-500 mt-1 leading-relaxed">Link your GitHub, GitLab, or Bitbucket repo in just one click.</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-100 text-indigo-700 font-bold text-sm">2</div>
              <div className="w-0.5 h-full bg-gray-100 my-2 rounded-full"></div>
            </div>
            <div className="pb-8 pt-1">
              <h4 className="font-semibold text-gray-900">Configure Build</h4>
              <p className="text-sm text-gray-500 mt-1 leading-relaxed">We automatically detect your framework settings and install dependencies.</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 text-white font-bold text-sm shadow-md shadow-indigo-200">3</div>
            </div>
            <div className="pt-1">
              <h4 className="font-semibold text-gray-900">Deploy Globally</h4>
              <p className="text-sm text-gray-500 mt-1 leading-relaxed">Your site goes live on our edge network instantly, ready for traffic.</p>
            </div>
          </div>
        </div>

      </motion.div>
    </section>
  );
}
