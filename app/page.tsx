"use client";

import HeroSection from "@/components/HeroSection";
import TimelineRoadmap from "@/components/TimelineRoadmap";
import { motion, Variants } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { 
  CheckCircle2, 
  MessageCircle, 
  Star, 
  ShieldCheck, 
  Sparkles, 
  BookOpen, 
  GraduationCap, 
  Quote,
  Terminal,
  Laptop,
  Briefcase,
  Layers3,
  Cpu,
  Award
} from "lucide-react";

const staticTestimonials = [
  { name: "Amali Perera", track: "Microsoft 365 Graduate", feedback: "The MS-102 track setup here completely saved my cloud administration concepts. Highly practical lab sessions!" },
  { name: "Devinda Silva", track: "Cambridge FCE Candidate", feedback: "Excellent language frameworks. The mock tests mirror real Cambridge parameters perfectly." },
  { name: "Zaid Rahman", track: "M365 & MS-900 Certified", feedback: "Fast tracking into corporate cloud deployments became easy thanks to Key Institute guides." }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
  }
};

const floatAnimation: Variants = {
  initial: { y: 0, x: 0, rotate: 0 },
  animate: (custom: { y: number[]; x: number[]; rotate?: number[]; duration: number }) => ({
    y: custom.y,
    x: custom.x,
    rotate: custom.rotate || 0,
    transition: {
      duration: custom.duration,
      repeat: Infinity,
      repeatType: "reverse" as const,
      ease: "easeInOut"
    }
  })
};

export default function HomePage() {
  return (
    /* Global backdrop configured to pure rich black */
    <div className="bg-black text-slate-200 min-h-screen font-sans antialiased overflow-x-hidden">
      <HeroSection />

      {/* 🌟 2. Why Choose KIDS? Section */}
      <section className="py-12 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Ambient Glow Layer - Enhanced for pure black contrast */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-amber-500/10 to-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        
        {/* Floating Vectors */}
        <motion.div custom={{ y: [0, -20, 0], x: [0, 15, 0], duration: 7 }} variants={floatAnimation} initial="initial" animate="animate" className="absolute top-16 right-[12%] text-amber-500/20 pointer-events-none hidden lg:block">
          <Sparkles className="w-16 h-16 stroke-[1.5]" />
        </motion.div>
        <motion.div custom={{ y: [0, 25, 0], x: [0, -20, 0], duration: 9 }} variants={floatAnimation} initial="initial" animate="animate" className="absolute bottom-20 left-[6%] text-blue-400/20 pointer-events-none hidden lg:block">
          <Layers3 className="w-16 h-16 stroke-[1.2]" />
        </motion.div>

        <div className="text-center md:text-left mb-10 relative z-10">
          <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.18em] text-amber-400 bg-amber-400/10 px-3 py-1.5 rounded-full border border-amber-400/20">
            Institutional Value
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mt-3 tracking-tight text-white">
            Why Choose KIDS?
          </h2>
        </div>

        {/* Responsive Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 relative z-10 items-stretch"
        >
          {/* Card 1: Industry Aligned Training */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -6 }}
            className="group relative rounded-[2rem] p-6 sm:p-8 border border-blue-500/20 transition-all duration-300 overflow-hidden bg-[#0A1428] shadow-xl flex flex-col justify-between"
          >
            <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-blue-500 via-amber-400 to-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-900/50 shadow-xs flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
                  <Cpu className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-black text-white">Industry Aligned</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-sm font-semibold text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0 shadow-xs shadow-blue-500/50" />
                  Real Microsoft 365 tenants
                </li>
                <li className="flex items-start gap-2 text-sm font-semibold text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0 shadow-xs shadow-blue-500/50" />
                  Active production tools
                </li>
                <li className="flex items-start gap-2 text-sm font-semibold text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0 shadow-xs shadow-blue-500/50" />
                  Zero textbook simulations
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Card 2: Globally Recognized Certifications */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -6 }}
            className="group relative rounded-[2rem] p-6 sm:p-8 border border-amber-500/20 transition-all duration-300 overflow-hidden bg-[#0A1428] shadow-xl flex flex-col justify-between"
          >
            <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-amber-400 via-amber-500 to-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-900/30 shadow-xs flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-black text-white">Global Pathways</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-sm font-semibold text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0 shadow-xs shadow-amber-500/50" />
                  Official Microsoft tracks
                </li>
                <li className="flex items-start gap-2 text-sm font-semibold text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0 shadow-xs shadow-amber-500/50" />
                  Cambridge English framework
                </li>
                <li className="flex items-start gap-2 text-sm font-semibold text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0 shadow-xs shadow-amber-500/50" />
                  Worldwide career validity
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Card 3: Practical Learning */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -6 }}
            className="group relative rounded-[2rem] p-6 sm:p-8 border border-blue-500/20 transition-all duration-300 overflow-hidden bg-[#0A1428] shadow-xl flex flex-col justify-between"
          >
            <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-blue-500 via-cyan-500 to-amber-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-900/50 shadow-xs flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
                  <Laptop className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-black text-white">Practical Focus</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-sm font-semibold text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0 shadow-xs shadow-blue-500/50" />
                  100% Live lab architecture
                </li>
                <li className="flex items-start gap-2 text-sm font-semibold text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0 shadow-xs shadow-blue-500/50" />
                  Real deployment scenarios
                </li>
                <li className="flex items-start gap-2 text-sm font-semibold text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0 shadow-xs shadow-blue-500/50" />
                  Execution-based outcomes
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Card 4: Career Focused */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -6 }}
            className="group relative rounded-[2rem] p-6 sm:p-8 border border-amber-500/20 transition-all duration-300 overflow-hidden bg-[#0A1428] shadow-xl flex flex-col justify-between sm:col-span-2 md:col-span-3 lg:col-span-1"
          >
            <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-amber-400 via-orange-500 to-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-900/30 shadow-xs flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
                  <Briefcase className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-black text-white">Career Blueprint</h3>
              </div>
              <ul className="space-y-3 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-3 sm:space-y-0 lg:space-y-3">
                <li className="flex items-start gap-2 text-sm font-semibold text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0 shadow-xs shadow-amber-500/50" />
                  Seamless corporate transition
                </li>
                <li className="flex items-start gap-2 text-sm font-semibold text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0 shadow-xs shadow-amber-500/50" />
                  Workplace readiness focus
                </li>
                <li className="flex items-start gap-2 text-sm font-semibold text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0 shadow-xs shadow-amber-500/50" />
                  Higher education scaling
                </li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ── TIMELINE CONTAINER LINK ── */}
      <div className="relative overflow-hidden bg-transparent rounded-[3rem]">
        <div className="absolute top-1/3 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none animate-pulse" />
        
        <motion.div custom={{ y: [0, -25, 0], x: [0, 20, 0], duration: 8 }} variants={floatAnimation} initial="initial" animate="animate" className="absolute top-12 left-[6%] text-blue-400/20 pointer-events-none hidden lg:block">
          <Terminal className="w-14 h-14 stroke-[1.5]" />
        </motion.div>
        <motion.div custom={{ y: [0, 30, 0], x: [0, -15, 0], duration: 10 }} variants={floatAnimation} initial="initial" animate="animate" className="absolute bottom-8 right-[8%] text-amber-500/10 pointer-events-none hidden lg:block">
          <Laptop className="w-16 h-16 stroke-[1.2]" />
        </motion.div>

        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0, y: 35 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
          }}
        >
          <TimelineRoadmap />
        </motion.div>

        {/* Highlighted Career Outcome Line */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative rounded-2xl p-6 bg-gradient-to-r from-blue-950/30 via-amber-950/10 to-transparent border border-amber-500/20 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left"
          >
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0 text-xl text-amber-400 font-bold">
                💼
              </div>
              <div>
                <div className="text-[10px] sm:text-xs font-black uppercase tracking-[0.18em] text-amber-400 mb-1">Career Pipeline</div>
                <h4 className="text-xl font-black text-white tracking-tight">Microsoft 365 Administrator</h4>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs font-black text-slate-300 uppercase tracking-widest bg-black border border-blue-900/60 px-4 py-2.5 rounded-xl shrink-0">
              <span>Verified Endpoint Matrix</span>
              <CheckCircle2 className="w-4 h-4 text-amber-400 animate-pulse" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* 🇬🇧 3. Programs Ecosystem */}
      <section className="py-12 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-transparent rounded-[3rem]">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-amber-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-4 left-1/3 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none animate-pulse" />

        <motion.div custom={{ y: [0, -30, 0], x: [0, 20, 0], rotate: [0, 15, 0], duration: 9 }} variants={floatAnimation} initial="initial" animate="animate" className="absolute top-16 right-[12%] text-amber-500/20 pointer-events-none hidden lg:block">
          <GraduationCap className="w-20 h-20 stroke-[1.5]" />
        </motion.div>
        <motion.div custom={{ y: [0, 25, 0], x: [0, -20, 0], rotate: [0, -10, 0], duration: 11 }} variants={floatAnimation} initial="initial" animate="animate" className="absolute bottom-20 left-[6%] text-blue-400/20 pointer-events-none hidden lg:block">
          <BookOpen className="w-24 h-24 stroke-[1.2]" />
        </motion.div>

        <div className="text-center md:text-left mb-10 relative z-10">
          <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.18em] text-blue-400 bg-blue-500/10 px-3 py-1.5 rounded-full border border-blue-500/20">
            Programs Ecosystem
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mt-3 tracking-tight text-white">
            Cambridge English Pathway
          </h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10"
        >
          {/* Header Card */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -4 }}
            className="md:col-span-2 group relative rounded-[2rem] p-6 sm:p-8 md:p-10 border border-amber-500/20 transition-all duration-300 overflow-hidden bg-[#0A1428] shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6"
          >
            <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-blue-600 via-amber-400 to-blue-600" />
            <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-black shadow-inner border border-blue-900/60 flex items-center justify-center text-4xl shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                🇬🇧
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white uppercase">
                  Cambridge English Language Center
                </h3>
                <p className="text-base text-slate-300 font-semibold mt-1 sm:text-left">
                  International exam tracks building real-world fluency and confidence
                </p>
              </div>
            </div>
            <div className="shrink-0 relative z-10 w-full sm:w-auto text-center">
              <span className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-amber-500 text-black text-xs font-black tracking-wider uppercase shadow-md shadow-amber-500/20 w-full sm:w-auto">
                CEFR Aligned Matrix <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              </span>
            </div>
          </motion.div>

          {/* Column A Card: YLE */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -6 }}
            className="group relative rounded-[2rem] p-6 sm:p-8 border border-blue-500/20 transition-all duration-300 overflow-hidden bg-[#0A1428] shadow-xl flex flex-col justify-between min-h-fit"
          >
            <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-blue-500 to-cyan-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            <div>
              <div className="flex items-center gap-4 mb-6 sm:mb-8">
                <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-900/40 group-hover:scale-110 transition-transform">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white">Young Learners English (YLE)</h3>
              </div>
              <ul className="space-y-4 sm:space-y-5">
                {[
                  { title: "Starters", desc: "Early speech confidence" },
                  { title: "Movers", desc: "Everyday active communication" },
                  { title: "Flyers", desc: "Competent baseline navigation" }
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4 group/item">
                    <span className="w-2 h-2 rounded-full bg-blue-400 mt-2 shrink-0 group-hover/item:scale-150 transition-transform duration-300 shadow-xs shadow-blue-500/50" />
                    <div className="text-base">
                      <span className="font-black text-slate-100">{item.title}</span>
                      <span className="text-amber-400 mx-2 font-bold">•</span>
                      <span className="text-slate-300 font-semibold">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Column B Card: Cambridge Assessments */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -6 }}
            className="group relative rounded-[2rem] p-6 sm:p-8 border border-amber-500/20 transition-all duration-300 overflow-hidden bg-[#0A1428] shadow-xl flex flex-col justify-between min-h-fit"
          >
            <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-amber-400 to-amber-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            <div>
              <div className="flex items-center gap-4 mb-6 sm:mb-8">
                <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-900/40 group-hover:scale-110 transition-transform">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white">Cambridge Assessments</h3>
              </div>
              <ul className="space-y-4 sm:space-y-5">
                {[
                  { title: "KET", desc: "Key English Test" },
                  { title: "PET", desc: "Preliminary English" },
                  { title: "FCE", desc: "First Certificate/Upper" }
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4 group/item">
                    <span className="w-2 h-2 rounded-full bg-amber-400 mt-2 shrink-0 group-hover/item:scale-150 transition-transform duration-300 shadow-xs shadow-amber-500/50" />
                    <div className="text-base">
                      <span className="font-black text-slate-100">{item.title}</span>
                      <span className="text-blue-400 mx-2 font-bold">•</span>
                      <span className="text-slate-300 font-semibold">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* 🍱 4. Core Architecture */}
      <section className="py-12 md:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-blue-500/5 to-amber-500/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="text-center md:text-left mb-10 relative z-10">
          <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.18em] text-amber-400 bg-amber-400/10 px-3 py-1.5 rounded-full border border-amber-400/20">
            Core Architecture
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mt-3 tracking-tight text-white">
            Our Training Methodology
          </h2>
        </div>

        {/* Content Layout Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10"
        >
          {/* Card 1: Hands-on Deployment Infrastructure */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -6 }}
            className="md:col-span-2 group relative rounded-[2rem] p-6 sm:p-8 border border-blue-900/30 transition-all duration-300 overflow-hidden bg-[#0A1428] shadow-xl flex flex-col justify-between"
          >
            <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-blue-500 via-blue-600 to-amber-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform border border-transparent">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-black mb-4 text-white">
                Hands-on Deployment Infrastructure
              </h3>
              <p className="text-sm sm:text-base text-slate-300 font-medium leading-relaxed">
                While we anchor concepts with essential theoretical frameworks, our programs move aggressively beyond the classroom page. We focus heavily on execution—dedicating the core blueprint to active hands-on practice, complex real-world case scenarios, and structured production-ready learning pathways.
              </p>
            </div>
          </motion.div>

          {/* Card 2: Instructor-Led Matrix */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -6 }}
            className="group relative rounded-[2rem] p-6 sm:p-8 border border-blue-900/30 transition-all duration-300 overflow-hidden bg-[#0A1428] shadow-xl flex flex-col justify-between gap-6"
          >
            <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-amber-400 to-amber-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400 mb-6 group-hover:scale-110 transition-transform border border-transparent">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-black mb-4 text-white">Instructor-Led Matrix</h3>
              <p className="text-sm sm:text-base text-slate-300 font-medium leading-relaxed">
                Led by veteran corporate trainers, we focus on hands-on, outcome-driven learning that turns concepts into real-world skills through practical workshops.
              </p>
            </div>
            <div className="pt-4 border-t border-blue-900/40 font-bold text-xs text-amber-400 uppercase tracking-wider">
              100% Verified Response Matrix
            </div>
          </motion.div>

          {/* Card 3: Parent Confidence Node */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -6 }}
            className="md:col-span-3 group relative rounded-[2rem] p-6 sm:p-8 border border-amber-500/20 transition-all duration-300 overflow-hidden bg-gradient-to-br from-[#0A1428] via-[#0D1B33] to-[#0A1428] text-white shadow-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
          >
            <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-blue-400 via-blue-600 to-amber-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            
            <div className="flex-1 relative z-10">
              <h3 className="text-[10px] sm:text-xs font-black uppercase tracking-[0.18em] text-amber-400 mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-400 inline-block animate-pulse shadow-sm shadow-amber-400" />
                Parent Confidence Node
              </h3>
              <div className="relative pl-6 border-l-2 border-amber-500/40 py-1">
                <Quote className="w-4 h-4 text-amber-400 absolute left-0 top-0 -translate-x-1/2 -mt-1 bg-[#0A1428] p-0.5 rounded-full" />
                <p className="text-base sm:text-lg md:text-xl text-slate-100 font-semibold italic leading-relaxed">
                  "We build both technical expertise and professional confidence, ensuring school leavers transition seamlessly into corporate ecosystems."
                </p>
              </div>
            </div>
            
            <div className="shrink-0 w-full sm:w-auto relative z-10 text-center sm:text-right">
              <span className="w-full sm:w-auto text-center px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-black text-xs font-black uppercase tracking-wider shadow-md shadow-amber-500/20 inline-block">
                Instant Access Matrix
              </span>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ⭐ Asymmetrical Student Perspectives Section */}
      <section className="py-12 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-blue-500/5 via-amber-500/5 to-transparent rounded-full blur-3xl pointer-events-none opacity-40" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 relative z-10 items-start">
          
          {/* Header text container block */}
          <div className="lg:col-span-4 lg:sticky lg:top-24 text-center lg:text-left">
            <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.18em] text-amber-400 bg-amber-400/10 px-3 py-1.5 rounded-full">
              Ecosystem Reviews
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mt-4 mb-4 tracking-tight leading-tight text-white">
              What our students say.
            </h2>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Real outcomes from verified learning matrices. See how localized professionals scale up across infrastructure and language benchmarks.
            </p>
            <div className="flex items-center justify-center lg:justify-start gap-4 mt-6">
              <div className="flex -space-x-3">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="w-9 h-9 rounded-full border-2 border-black bg-blue-950 flex items-center justify-center text-[10px] font-black text-amber-400">
                    {String.fromCharCode(65 + i)}
                  </div>
                ))}
              </div>
              <span className="text-xs font-bold text-slate-400">Trusted by over 1,200+ graduates</span>
            </div>
          </div>

          {/* Testimonial grid setup */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">
            {/* Testimonial Card 1 */}
            <motion.div
              className="sm:col-span-2 relative overflow-hidden bg-[#0A1428]/80 border border-blue-900/30 p-6 sm:p-8 md:p-10 rounded-[2.5rem] transition-all duration-300"
            >
              <div className="flex gap-1 mb-4 text-amber-400 relative z-10">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-base sm:text-lg text-slate-200 font-medium italic mb-6 sm:mb-8 leading-relaxed relative z-10">
                "{staticTestimonials[0].feedback}"
              </p>
              <div className="flex items-center justify-between pt-6 border-t border-blue-900/30 relative z-10">
                <div>
                  <h4 className="font-black text-base text-slate-100">{staticTestimonials[0].name}</h4>
                  <p className="text-xs font-bold text-blue-400 uppercase tracking-wider mt-0.5">{staticTestimonials[0].track}</p>
                </div>
                <MessageCircle className="w-5 h-5 text-blue-400/50" />
              </div>
            </motion.div>

            {/* Testimonial Card 2 */}
            <motion.div
              className="relative overflow-hidden bg-[#0A1428]/80 border border-blue-900/30 p-6 sm:p-8 rounded-[2.5rem] flex flex-col justify-between min-h-[220px] sm:min-h-[260px] transition-all duration-300"
            >
              <div className="relative z-10">
                <div className="flex gap-0.5 mb-4 text-amber-400">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}
                </div>
                <p className="text-sm sm:text-base text-slate-300 italic mb-6 leading-relaxed">
                  "{staticTestimonials[1].feedback}"
                </p>
              </div>
              <div className="pt-4 border-t border-blue-900/30 relative z-10">
                <h4 className="font-extrabold text-sm text-slate-100">{staticTestimonials[1].name}</h4>
                <p className="text-[11px] font-bold text-amber-400 uppercase tracking-wider mt-0.5">{staticTestimonials[1].track}</p>
              </div>
            </motion.div>

            {/* Testimonial Card 3 */}
            <motion.div
              className="relative overflow-hidden bg-[#0A1428]/80 border border-blue-900/30 p-6 sm:p-8 rounded-[2.5rem] flex flex-col justify-between min-h-[220px] sm:min-h-[260px] transition-all duration-300"
            >
              <div className="relative z-10">
                <div className="flex gap-0.5 mb-4 text-amber-400">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}
                </div>
                <p className="text-sm sm:text-base text-slate-300 italic mb-6 leading-relaxed">
                  "{staticTestimonials[2].feedback}"
                </p>
              </div>
              <div className="pt-4 border-t border-blue-900/30 relative z-10">
                <h4 className="font-extrabold text-sm text-slate-100">{staticTestimonials[2].name}</h4>
                <p className="text-[11px] font-bold text-blue-400 uppercase tracking-wider mt-0.5">{staticTestimonials[2].track}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CONVERSION BOTTOM ANCHOR ── */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden" id="enrollment-hub">
        <div className="absolute inset-0 z-0 bg-black">
          <div className="absolute inset-0 opacity-[0.04]" 
               style={{ 
                 backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', 
                 backgroundSize: '40px 40px' 
               }}>
          </div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-white mb-4 tracking-tight">
              Accelerate Your Enrollment
            </h2>
            <p className="text-slate-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
              Skip complex registration forms. Provide your details below to securely initiate your admission workflow directly inside WhatsApp.
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-[#0A1428]/90 backdrop-blur-xl border border-blue-900/40 p-6 sm:p-10 md:p-12 rounded-[2.5rem] shadow-2xl">
            <form 
              id="enrollmentForm"
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const data = Object.fromEntries(formData.entries());
                const message = `*New Enrollment Inquiry*%0A%0A*Name:* ${data.fullName}%0A*Phone:* ${data.phone}%0A*Email:* ${data.email}%0A*Occupation:* ${data.occupation}%0A*Program:* ${data.program}%0A*Class:* ${data.class}%0A*Message:* ${data.message}`;
                window.open(`https://wa.me/94710525968?text=${message}`, '_blank');
              }}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <input name="fullName" placeholder="Full Name" required className="w-full bg-black border border-blue-900/40 p-4 sm:p-5 rounded-2xl text-white focus:ring-2 focus:ring-amber-400 outline-none transition-all text-sm sm:text-base" />
                <input name="phone" type="tel" placeholder="Phone Number" required className="w-full bg-black border border-blue-900/40 p-4 sm:p-5 rounded-2xl text-white focus:ring-2 focus:ring-amber-400 outline-none transition-all text-sm sm:text-base" />
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <input name="email" type="email" placeholder="Email Address" required className="w-full bg-black border border-blue-900/40 p-4 sm:p-5 rounded-2xl text-white focus:ring-2 focus:ring-amber-400 outline-none transition-all text-sm sm:text-base" />
                <input name="occupation" placeholder="School / Occupation" required className="w-full bg-black border border-blue-900/40 p-4 sm:p-5 rounded-2xl text-white focus:ring-2 focus:ring-amber-400 outline-none transition-all text-sm sm:text-base" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <select name="program" required className="w-full bg-black border border-blue-900/40 p-4 sm:p-5 rounded-2xl text-slate-400 focus:ring-2 focus:ring-amber-400 outline-none text-sm sm:text-base">
                  <option value="">Select Interested Program</option>
                  <option>Microsoft 365 Professional</option>
                  <option>Cambridge YLE Exams</option>
                  <option>Cambridge Assessments</option>
                </select>

                <select name="class" required className="w-full bg-black border border-blue-900/40 p-4 sm:p-5 rounded-2xl text-slate-400 focus:ring-2 focus:ring-amber-400 outline-none text-sm sm:text-base">
                  <option value="">Preferred Class</option>
                  <option>Microsoft 365 Professional Certification</option>
                  <option>Starters</option>
                  <option>Movers</option>
                  <option>Flyers</option>
                  <option>KET</option>
                  <option>PET</option>
                  <option>FCE</option>
                </select>
              </div>

              <textarea name="message" rows={4} placeholder="Additional details or questions..." className="w-full bg-black border border-blue-900/40 p-4 sm:p-5 rounded-2xl text-white focus:ring-2 focus:ring-amber-400 outline-none transition-all text-sm sm:text-base" />

              <button 
                type="submit" 
                className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-black py-4 sm:py-5 rounded-2xl shadow-xl transition-all flex items-center justify-center gap-3 text-lg sm:text-xl"
              >
                <FaWhatsapp className="w-6 h-6 sm:w-7 h-7" /> 
                <span>Chat via WhatsApp Now</span>
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}