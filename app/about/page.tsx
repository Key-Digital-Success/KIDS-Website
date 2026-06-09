"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Target, Compass, Users, GraduationCap, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="py-12 md:py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 scroll-smooth min-h-screen">
      
      {/* 🚀 TOP HERO MINI-INTRODUCTION */}
      <section className="relative text-center max-w-3xl mx-auto mb-20 overflow-hidden pt-4">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] glow-gradient opacity-30 pointer-events-none" />
        
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-blue/20 bg-brand-blue/5 text-brand-blue text-xs font-bold uppercase tracking-widest mb-6"
        >
          <ShieldCheck className="w-4 h-4" /> Academic Excellence
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-5xl font-black tracking-tight mb-4"
        >
          About Key Institute
        </motion.h1>
        <p className="text-sm md:text-base font-semibold max-w-xl mx-auto leading-relaxed">
          Discover the strategic operational frameworks driving professional and academic advancement.
        </p>
      </section>

      {/* 🧭 SECTION FLOW ORDER STAGE 01: MISSION & VISION (TOP ROW GRID) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        
        {/* OUR MISSION CARD */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ y: -4 }}
          className="glass-card p-6 md:p-8 rounded-[2rem] relative overflow-hidden"
          style={{ boxShadow: "0 30px 60px -15px rgba(124, 58, 237, 0.08)" }}
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 rounded-xl bg-gradient-to-br from-brand-purple to-pink-500 text-white shadow-md">
              <Target className="w-5 h-5" />
            </div>
            <h2 className="text-xl md:text-2xl font-black tracking-tight">
              Our Mission
            </h2>
          </div>
          <p className="text-sm md:text-base font-medium leading-relaxed">
            To bridge the gap separating theoretical ICT workflows from active enterprise IT infrastructure, equipping students with clear, direct competencies.
          </p>
        </motion.div>

        {/* OUR VISION CARD */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ y: -4 }}
          className="glass-card p-6 md:p-8 rounded-[2rem] relative overflow-hidden"
          style={{ boxShadow: "0 30px 60px -15px rgba(37, 99, 235, 0.08)" }}
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 rounded-xl bg-gradient-to-br from-brand-blue to-cyan-500 text-white shadow-md">
              <Compass className="w-5 h-5" />
            </div>
            <h2 className="text-xl md:text-2xl font-black tracking-tight">
              Our Vision
            </h2>
          </div>
          <p className="text-sm md:text-base font-medium leading-relaxed">
            To scale as a primary, trusted regional learning node for decentralized educational frameworks, accelerating certified global professional milestones.
          </p>
        </motion.div>

      </div>

      {/* 👥 SECTION FLOW ORDER STAGE 02: WHO WE ARE */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        whileHover={{ y: -2 }}
        className="glass-card p-6 md:p-10 rounded-[2.25rem] mb-12"
      >
        <div className="flex flex-col md:flex-row gap-8 items-center">
          
          {/* LOGO CONTAINER */}
          <div className="w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-brand-blue via-brand-purple to-brand-blue p-[2px] rounded-2xl shrink-0 group shadow-md relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/20 to-brand-purple/20 animate-pulse" />
            <div className="w-full h-full bg-slate-50 dark:bg-[#030712] rounded-[14px] flex items-center justify-center relative z-10 transition-colors group-hover:bg-slate-100 dark:group-hover:bg-[#111827] overflow-hidden">
              <Image 
                src="/logo.png" 
                alt="KIDS Logo" 
                width={160} 
                height={160} 
                priority
                className="w-full h-full object-cover rounded-[14px]"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="flex-grow">
            <div className="flex items-center gap-3 mb-4 justify-center md:justify-start">
              <Users className="w-5 h-5 text-brand-blue" />
              <h2 className="text-2xl md:text-3xl font-black tracking-tight">
                Who We Are
              </h2>
            </div>
            <p className="text-sm md:text-base font-medium leading-relaxed text-center md:text-left mb-4">
              Key Institute of Digital Success (KIDS) is an elite modern tech academy acting as a strategic educational avenue. 
            </p>
            <p className="text-sm md:text-base font-medium leading-relaxed text-center md:text-left">
              Through strategic alliance integrations with corporate channel pipelines like Thakral Global Learning (TGL), we bridge the operational gap separating students from live technical environments.
            </p>
          </div>

        </div>
      </motion.div>

      {/* 🎓 SECTION FLOW ORDER STAGE 03: WHAT WE DO */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="glass-card p-6 md:p-8 rounded-[2.25rem] relative overflow-hidden group"
      >
        <div className="absolute inset-0 rounded-[2.25rem] border border-transparent bg-gradient-to-r from-brand-blue to-brand-purple [mask-image:linear-gradient(#fff_0_0)_content-box,#fff] opacity-0 group-hover:opacity-20 transition-opacity duration-500" />

        <div className="flex items-center gap-3 mb-6">
          <GraduationCap className="w-6 h-6 text-brand-purple" />
          <h2 className="text-2xl md:text-3xl font-black tracking-tight">
            What We Do
          </h2>
        </div>

        {/* Short bullet listings */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
          {[
            { title: "Microsoft Cloud Architecture", text: "Deploy and engineer active laboratory frameworks across official tenant structures (MS-900 / MS-102)." },
            { title: "Cambridge Language Training", text: "Deliver structured proficiency bootcamps for Young Learners (YLE) alongside advanced assessment metrics (KET, PET, FCE)." },
            { title: "Admissions Channel Optimization", text: "Replace complex multi-layer web lead forms with immediate single-click secure direct WhatsApp contact routing." }
          ].map((item, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-slate-100/50 dark:bg-[#111827]/30 border border-slate-200/40 dark:border-slate-800/50 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle2 className="w-4 h-4 text-brand-blue dark:text-slate-500 shrink-0" />
                  <h4 className="text-sm font-bold leading-tight">{item.title}</h4>
                </div>
                <p className="text-xs md:text-sm leading-relaxed font-medium">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

    </div>
  );
}