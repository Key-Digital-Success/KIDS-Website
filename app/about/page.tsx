"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { 
  Target, 
  Compass, 
  Users, 
  GraduationCap, 
  ShieldCheck, 
  CheckCircle2,
  HeartHandshake,
  ArrowUpRight
} from "lucide-react";

// Modern stagger orchestrator
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 }
  }
};

const faderVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } 
  }
};

export default function AboutPage() {
  return (
    /* Global background converted to absolute rich solid black */
    <div className="relative min-h-screen bg-black text-slate-200 overflow-hidden antialiased selection:bg-amber-500/30 selection:text-amber-200">
      
      {/* 🌌 AMBIENT BACKGROUND GLOWS - Adjusted to echo Gold and Deep Blue corporate matrix */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[400px] bg-gradient-to-b from-blue-600/10 via-amber-500/5 to-transparent blur-[100px] pointer-events-none z-0" />
      <div className="absolute top-[40%] right-[-10%] w-[400px] h-[400px] bg-amber-500/5 blur-[150px] pointer-events-none z-0" />
      <div className="absolute bottom-[10%] left-[-10%] w-[400px] h-[400px] bg-blue-600/5 blur-[150px] pointer-events-none z-0" />

      {/* LIGHT GRID UNDERLAY */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e3a8a0a_1px,transparent_1px),linear-gradient(to_bottom,#1e3a8a0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-12 md:space-y-16">
        
        {/* 🚀 1. HERO SECTION */}
        <section className="text-center max-w-4xl mx-auto space-y-4">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0A1428] border border-blue-900/60 backdrop-blur-md shadow-lg shadow-blue-950/20"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-amber-400/90">
              KIDS Core Registry
            </span>
          </motion.div>

          <div className="space-y-2">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mt-3 tracking-tight text-white max-w-5xl mx-auto leading-tight"
            >
              About <br />
              <span className="bg-gradient-to-r from-blue-500 via-amber-400 to-blue-600 bg-clip-text text-transparent drop-shadow-sm">
                Key Institute of Digital Success (KIDS)
              </span>
            </motion.h1>
          </div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed font-normal"
          >
            Empowering students with practical digital skills, globally recognized certifications, and career-focused learning pathways.
          </motion.p>
        </section>

        {/* 🧭 SECTION FLOW ORDER STAGE 01: MISSION & VISION */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {/* OUR MISSION CARD */}
          <motion.div
            variants={faderVariants}
            whileHover={{ y: -4, borderColor: "rgba(245, 158, 11, 0.4)" }}
            className="group relative bg-[#0A1428] border border-blue-950/60 backdrop-blur-xl p-6 md:p-8 rounded-3xl overflow-hidden transition-all duration-300 shadow-xl"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-amber-500/10 to-transparent rounded-bl-full pointer-events-none group-hover:from-amber-500/20 transition-all duration-500" />
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 text-black font-black shadow-lg shadow-amber-950/30">
                <Target className="w-5 h-5" />
              </div>
              <h2 className="text-xl md:text-2xl font-bold tracking-tight text-white">
                Our Mission
              </h2>
            </div>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-normal">
              To bridge the gap separating theoretical ICT workflows from active enterprise IT infrastructure, equipping students with clear, direct competencies.
            </p>
          </motion.div>

          {/* OUR VISION CARD */}
          <motion.div
            variants={faderVariants}
            whileHover={{ y: -4, borderColor: "rgba(59, 130, 246, 0.4)" }}
            className="group relative bg-[#0A1428] border border-blue-950/60 backdrop-blur-xl p-6 md:p-8 rounded-3xl overflow-hidden transition-all duration-300 shadow-xl"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-bl-full pointer-events-none group-hover:from-blue-500/20 transition-all duration-500" />
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-950/30">
                <Compass className="w-5 h-5" />
              </div>
              <h2 className="text-xl md:text-2xl font-bold tracking-tight text-white">
                Our Vision
              </h2>
            </div>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-normal">
              To scale as a primary, trusted regional learning node for decentralized educational frameworks, accelerating certified global professional milestones.
            </p>
          </motion.div>
        </motion.div>

        {/* 👥 SECTION FLOW ORDER STAGE 02: WHO WE ARE */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-[2.5rem] bg-[#0A1428] border border-blue-950/60 backdrop-blur-md p-6 md:p-10 overflow-hidden shadow-2xl shadow-black/40"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
            
            {/* 🎯 BIOMETRIC RADAR LOGO CONTAINER */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="w-56 h-56 md:w-64 md:h-64 relative flex items-center justify-center bg-transparent rounded-full p-1 group">
                <div className="absolute inset-0 border border-amber-500/10 rounded-full animate-ping pointer-events-none" />
                <div className="absolute inset-3 border border-dashed border-blue-900/20 rounded-full animate-[spin_40s_linear_infinite]" />
                <div className="absolute inset-6 border border-blue-950/40 rounded-full" />
                
                <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-amber-400/40" />
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-amber-400/40" />

                {/* Main rounded center container showcasing large logo natively on layout background */}
                <div className="w-44 h-44 md:w-52 md:h-52 bg-transparent rounded-full flex items-center justify-center z-10 overflow-hidden relative">
                  <Image 
                    src="/logo white.png" 
                    alt="KIDS Logo" 
                    width={220} 
                    height={220} 
                    priority
                    className="w-full h-full object-contain grayscale-0 scale-100 group-hover:scale-105 transition-all duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Content block */}
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-black border border-blue-950/60 rounded-xl text-amber-400 shadow-md">
                  <Users className="w-4 h-4" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white uppercase">
                  Who We Are
                </h3>
              </div>

              <div className="h-px bg-gradient-to-r from-blue-950/60 via-blue-950/20 to-transparent" />

              <div className="space-y-3 text-sm sm:text-base text-slate-400 leading-relaxed font-normal">
                <p className="text-justify">
                  Key Institute of Digital Success (KIDS) is a modern learning institute focused on helping students build practical digital, technology, and communication skills for the future.
                </p>
                <p className="text-justify">
                  Through our partnership with Thakral Global Learning (TGL), we provide structured Microsoft 365 training pathways and internationally recognized certification opportunities. We also support English language development through Cambridge English programs designed for young learners and students preparing for global assessments.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* 🤝 OUR LEARNING PARTNERS SECTION */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-[2.5rem] bg-[#0A1428] border border-blue-950/60 backdrop-blur-md p-6 md:p-8 overflow-hidden shadow-2xl shadow-black/40"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-2 flex lg:justify-start justify-center">
              <div className="w-16 h-16 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-amber-400 p-3 shadow-inner shadow-blue-500/5">
                <HeartHandshake className="w-8 h-8" />
              </div>
            </div>
            
            <div className="lg:col-span-10 space-y-2 text-center lg:text-left">
              <span className="text-[10px] font-mono tracking-[0.25em] text-amber-400/90 font-bold uppercase block">
                Alliance Integration
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-white uppercase tracking-tight">
                Our Learning Partners
              </h3>
              <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-normal text-justify">
                <strong className="text-slate-200 font-semibold">Thakral Global Learning (TGL)</strong>: Through our partnership with TGL, students gain access to structured Microsoft 365 learning pathways aligned with current industry practices and certification standards.
              </p>
            </div>
          </div>
        </motion.section>

        {/* 🎓 SECTION FLOW ORDER STAGE 03: WHAT WE DO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative bg-[#0A1428] border border-blue-950/60 backdrop-blur-xl p-6 md:p-8 rounded-[2.5rem] overflow-hidden group shadow-xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-black border border-blue-950/60 rounded-xl text-amber-400 shadow-md">
              <GraduationCap className="w-4 h-4" />
            </div>
            <h2 className="text-xl md:text-2xl font-bold tracking-tight text-white">
              What We Do
            </h2>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative z-10">
            {[
              { title: "Microsoft Cloud Architecture", text: "Deploy and engineer active laboratory frameworks across official tenant structures (MS-900 / MS-102)." },
              { title: "Cambridge Language Training", text: "Deliver structured proficiency bootcamps for Young Learners (YLE) alongside advanced assessment metrics (KET, PET, FCE)." },
              { title: "Admissions Channel Optimization", text: "Replace complex multi-layer web lead forms with immediate single-click secure direct WhatsApp contact routing." }
            ].map((item, idx) => (
              <div 
                key={idx} 
                className="group/card flex flex-col justify-between p-5 rounded-2xl bg-black border border-blue-950/40 hover:border-blue-900/60 transition-all duration-300 relative overflow-hidden hover:shadow-xl hover:shadow-black/50"
              >
                {/* Card glow interaction */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-transparent via-transparent to-transparent rounded-bl-full pointer-events-none group-hover/card:from-amber-500/5 transition-all duration-500" />
                
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <h4 className="text-sm font-bold text-slate-200 leading-tight tracking-tight group-hover/card:text-white transition-colors duration-200">
                        {item.title}
                      </h4>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-600 opacity-0 group-hover/card:opacity-100 group-hover/card:text-slate-400 transition-all duration-300 shrink-0" />
                  </div>
                  <p className="text-xs md:text-sm text-slate-400 leading-relaxed font-normal">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
}