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
  Cpu,
  Globe,
  Layers,
  HelpCircle,
  MessageSquare,
  Check,
  Zap,
  Award,
  Laptop,
  Briefcase,
  Layers3
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

// Global Floating Animation Engine
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
    <div className="bg-[#0B0F19] text-slate-100 min-h-screen font-sans antialiased">
      <HeroSection />

      {/* 🌟 2. Why Choose KIDS? Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative overflow-hidden my-6">
        {/* Saturated Ambient Glow Layer */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-brand-blue/10 to-brand-purple/5 rounded-full blur-3xl pointer-events-none" />
        
        {/* Saturated Floating Vectors */}
        <motion.div custom={{ y: [0, -20, 0], x: [0, 15, 0], duration: 7 }} variants={floatAnimation} initial="initial" animate="animate" className="absolute top-16 right-[12%] text-brand-blue/20 pointer-events-none hidden md:block">
          <Sparkles className="w-16 h-16 stroke-[1.5]" />
        </motion.div>
        <motion.div custom={{ y: [0, 25, 0], x: [0, -20, 0], duration: 9 }} variants={floatAnimation} initial="initial" animate="animate" className="absolute bottom-20 left-[6%] text-brand-purple/20 pointer-events-none hidden md:block">
          <Layers3 className="w-16 h-16 stroke-[1.2]" />
        </motion.div>

        <div className="text-center md:text-left mb-14 relative z-10">
          <span className="text-xs font-normal uppercase tracking-widest text-brand-blue bg-brand-blue/10 px-3 py-1.5 rounded-full border border-brand-blue/20">
            Institutional Value
          </span>
          <h2 className="text-3xl md:text-5xl font-black mt-3 tracking-tight text-white">
            Why Choose KIDS?
          </h2>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10 items-stretch"
        >
          {/* Card 1: Industry Aligned Training */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -6 }}
            className="group relative rounded-[2rem] p-8 border border-brand-blue/30 transition-all duration-300 overflow-hidden bg-slate-900 shadow-xl flex flex-col justify-between"
          >
            <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-blue-500 via-cyan-500 to-indigo-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 border border-slate-700 shadow-xs flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
                  <Cpu className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-black text-white">
                  Industry Aligned
                </h3>
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
            className="group relative rounded-[2rem] p-8 border border-brand-purple/30 transition-all duration-300 overflow-hidden bg-slate-900 shadow-xl flex flex-col justify-between"
          >
            <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-purple-500 via-indigo-500 to-pink-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-400 border border-slate-700 shadow-xs flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-black text-white">
                  Global Pathways
                </h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-sm font-semibold text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 shrink-0 shadow-xs shadow-purple-500/50" />
                  Official Microsoft tracks
                </li>
                <li className="flex items-start gap-2 text-sm font-semibold text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 shrink-0 shadow-xs shadow-purple-500/50" />
                  Cambridge English framework
                </li>
                <li className="flex items-start gap-2 text-sm font-semibold text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 shrink-0 shadow-xs shadow-purple-500/50" />
                  Worldwide career validity
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Card 3: Practical Learning */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -6 }}
            className="group relative rounded-[2rem] p-8 border border-brand-blue/30 transition-all duration-300 overflow-hidden bg-slate-900 shadow-xl flex flex-col justify-between"
          >
            <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 border border-slate-700 shadow-xs flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
                  <Laptop className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-black text-white">
                  Practical Focus
                </h3>
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
            className="group relative rounded-[2rem] p-8 border border-brand-purple/30 transition-all duration-300 overflow-hidden bg-slate-900 shadow-xl flex flex-col justify-between"
          >
            <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-400 border border-slate-700 shadow-xs flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
                  <Briefcase className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-black text-white">
                  Career Blueprint
                </h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-sm font-semibold text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 shrink-0 shadow-xs shadow-purple-500/50" />
                  Seamless corporate transition
                </li>
                <li className="flex items-start gap-2 text-sm font-semibold text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 shrink-0 shadow-xs shadow-purple-500/50" />
                  Workplace readiness focus
                </li>
                <li className="flex items-start gap-2 text-sm font-semibold text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 shrink-0 shadow-xs shadow-purple-500/50" />
                  Higher education scaling
                </li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ── TIMELINE CONTAINER LINK (Microsoft 365 Professional Pathway / Timeline Roadmap) ── */}
      <div className="relative overflow-hidden bg-transparent rounded-[3rem] my-6">
        {/* Saturated Mesh Glow Trackers */}
        <div className="absolute top-1/3 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none animate-pulse" />
        
        {/* Floating Vectors */}
        <motion.div custom={{ y: [0, -25, 0], x: [0, 20, 0], duration: 8 }} variants={floatAnimation} initial="initial" animate="animate" className="absolute top-12 left-[6%] text-brand-blue/20 pointer-events-none hidden lg:block">
          <Terminal className="w-14 h-14 stroke-[1.5]" />
        </motion.div>
        <motion.div custom={{ y: [0, 30, 0], x: [0, -15, 0], duration: 10 }} variants={floatAnimation} initial="initial" animate="animate" className="absolute bottom-8 right-[8%] text-brand-purple/20 pointer-events-none hidden lg:block">
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

        {/* 💼 Highlighted Career Outcome Line (Placed cleanly directly below the Roadmap Endpoint inside section layout) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative rounded-2xl p-6 bg-gradient-to-r from-brand-blue/20 via-brand-purple/20 to-brand-blue/5 border border-brand-purple/30 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4"
          >
            <div className="flex items-center gap-4 text-center sm:text-left">
              <div className="w-12 h-12 rounded-xl bg-brand-blue/20 border border-brand-blue/30 flex items-center justify-center shrink-0 text-2xl">
                💼
              </div>
              <div>
                <div className="text-xs font-black text-cyan-400 uppercase tracking-widest mb-0.5">Career Outcome</div>
                <h4 className="text-xl font-black text-white tracking-tight">Microsoft 365 Administrator</h4>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs font-black text-slate-300 uppercase tracking-widest bg-slate-900/60 border border-slate-800 px-4 py-2.5 rounded-xl shrink-0">
              <span>Verified Endpoint Matrix</span>
              <CheckCircle2 className="w-4 h-4 text-cyan-400 animate-pulse" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* 🇬🇧 3. Programs Ecosystem (Cambridge English Language Center Block) */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-transparent rounded-[3rem] my-6">
        {/* Saturated Ambient Glow Layer */}
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-brand-purple/20 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-4 left-1/3 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none animate-pulse" />

        {/* Floating Vectors */}
        <motion.div custom={{ y: [0, -30, 0], x: [0, 20, 0], rotate: [0, 15, 0], duration: 9 }} variants={floatAnimation} initial="initial" animate="animate" className="absolute top-16 right-[12%] text-brand-purple/20 pointer-events-none hidden md:block">
          <GraduationCap className="w-20 h-20 stroke-[1.5]" />
        </motion.div>
        <motion.div custom={{ y: [0, 25, 0], x: [0, -20, 0], rotate: [0, -10, 0], duration: 11 }} variants={floatAnimation} initial="initial" animate="animate" className="absolute bottom-20 left-[6%] text-brand-blue/20 pointer-events-none hidden md:block">
          <BookOpen className="w-24 h-24 stroke-[1.2]" />
        </motion.div>
        <motion.div custom={{ y: [0, -20, 0], x: [0, 25, 0], duration: 7 }} variants={floatAnimation} initial="initial" animate="animate" className="absolute top-1/2 left-[48%] text-slate-500/15 pointer-events-none hidden xl:block">
          <Globe className="w-28 h-28 stroke-[1]" />
        </motion.div>
        
        <div className="text-center md:text-left mb-14 relative z-10">
          <span className="text-xs font-normal uppercase tracking-widest text-brand-blue bg-brand-blue/10 px-3 py-1.5 rounded-full border border-brand-blue/20">
            Programs Ecosystem
          </span>
          <h2 className="text-3xl md:text-5xl font-black mt-3 tracking-tight text-white">
          Cambridge English Pathway
          </h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10"
        >
          {/* Header Card */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -4 }}
            className="md:col-span-2 group relative rounded-[2rem] p-8 md:p-10 border border-brand-purple/30 transition-all duration-300 overflow-hidden bg-slate-900 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-brand-purple via-blue-500 to-brand-purple" />
            
            <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-slate-800 shadow-inner border border-slate-700 flex items-center justify-center text-4xl shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                🇬🇧
              </div>
              <div>
                <h3 className="text-2xl font-black tracking-tight text-white uppercase">
                  Cambridge English Language Center
                </h3>
                <p 
                  className="text-base text-slate-300 font-semibold mt-1 text-justify"
                  style={{ textJustify: "inter-word" }}
                >
                  International exam tracks building real-world fluency and confidence
                </p>
              </div>
            </div>
            
            <div className="shrink-0 relative z-10">
              <span className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-purple-500 text-white text-xs font-black tracking-wider uppercase shadow-md shadow-purple-500/20">
                CEFR Aligned Matrix <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              </span>
            </div>
          </motion.div>

          {/* Column A Card: Young Learners English (YLE) */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -6 }}
            className="group relative rounded-[2rem] p-8 border border-brand-blue/30 transition-all duration-300 overflow-hidden bg-slate-900 shadow-xl flex flex-col justify-between min-h-[300px]"
          >
            <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-blue-500 to-cyan-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 border border-slate-700 shadow-xs group-hover:scale-110 transition-transform">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-black text-white">
                  Young Learners English (YLE)
                </h3>
              </div>
              
              <ul className="space-y-5">
                {[
                  { title: "Starters", desc: "Early speech confidence" },
                  { title: "Movers", desc: "Everyday active communication" },
                  { title: "Flyers", desc: "Competent baseline navigation" }
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4 group/item">
                    <span className="w-2 h-2 rounded-full bg-blue-400 mt-2 shrink-0 group-hover/item:scale-150 transition-transform duration-300 shadow-xs shadow-blue-500/50" />
                    <div className="text-base text-justify" style={{ textJustify: "inter-word" }}>
                      <span className="font-black text-slate-100">{item.title}</span>
                      <span className="text-blue-500 mx-2 font-bold">•</span>
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
            className="group relative rounded-[2rem] p-8 border border-brand-purple/30 transition-all duration-300 overflow-hidden bg-slate-100/70 dark:bg-slate-900 shadow-xs dark:shadow-xl flex flex-col justify-between min-h-[300px]"
          >
            <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-purple-500 to-indigo-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 border border-slate-700 shadow-xs group-hover:scale-110 transition-transform">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-black text-white">
                  Cambridge Assessments
                </h3>
              </div>
              
              <ul className="space-y-5">
                {[
                  { title: "KET", desc: "Key English Test" },
                  { title: "PET", desc: "Preliminary English" },
                  { title: "FCE", desc: "First Certificate/Upper" }
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4 group/item">
                    <span className="w-2 h-2 rounded-full bg-purple-400 mt-2 shrink-0 group-hover/item:scale-150 transition-transform duration-300 shadow-xs shadow-purple-500/50" />
                    <div className="text-base text-justify" style={{ textJustify: "inter-word" }}>
                      <span className="font-black text-slate-100">{item.title}</span>
                      <span className="text-purple-500 mx-2 font-bold">•</span>
                      <span className="text-slate-300 font-semibold">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* 🍱 4. Core Architecture (Value Propositions) Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Dynamic Light Mesh Overlay */}
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-brand-blue/5 to-purple-500/5 rounded-full blur-3xl pointer-events-none animate-[spin_30s_linear_infinite]" />
        
        {/* Floating Vectors */}
        <motion.div custom={{ y: [0, 25, 0], x: [0, -20, 0], duration: 8 }} variants={floatAnimation} initial="initial" animate="animate" className="absolute top-16 left-6 text-brand-blue/15 pointer-events-none hidden md:block">
          <Cpu className="w-20 h-20 stroke-[1.2]" />
        </motion.div>
        <motion.div custom={{ y: [0, -30, 0], x: [0, 25, 0], duration: 7 }} variants={floatAnimation} initial="initial" animate="animate" className="absolute bottom-14 right-12 text-brand-purple/15 pointer-events-none hidden md:block">
          <ShieldCheck className="w-16 h-16 stroke-[1.5]" />
        </motion.div>
        <motion.div custom={{ y: [0, 20, 0], x: [0, 20, 0], rotate: [0, 360], duration: 25 }} variants={floatAnimation} initial="initial" animate="animate" className="absolute bottom-1/3 left-1/2 text-slate-700/15 pointer-events-none hidden xl:block">
          <Layers className="w-24 h-24 stroke-[1]" />
        </motion.div>

        <div className="text-center md:text-left mb-14 relative z-10">
          <span className="text-xs font-normal uppercase tracking-widest text-brand-blue bg-brand-blue/10 px-3 py-1.5 rounded-full border border-brand-blue/20">
            Core Architecture
          </span>
          <h2 className="text-3xl md:text-5xl font-black mt-3 tracking-tight text-white">
            Our Training Methodology
          </h2>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10"
        >
          {/* Card 1: Hands-on Deployment Infrastructure */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -6 }}
            className="md:col-span-2 group relative rounded-[2rem] p-8 border border-slate-800/80 transition-all duration-300 overflow-hidden bg-slate-900 shadow-xl flex flex-col justify-between"
          >
            <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            <div className="absolute top-0 right-0 p-8 opacity-20 pointer-events-none">
              <Sparkles className="w-36 h-36 text-blue-500" />
            </div>
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform border border-transparent">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-black mb-4 text-white">
                Hands-on Deployment Infrastructure
              </h3>
              <p className="text-base text-slate-300 font-medium leading-relaxed text-justify" style={{ textJustify: "inter-word" }}>
                While we anchor concepts with essential theoretical frameworks, our programs move aggressively beyond the classroom page. We focus heavily on execution—dedicating the core blueprint to active hands-on practice, complex real-world case scenarios, and structured production-ready learning pathways.
              </p>
            </div>
          </motion.div>

          {/* Card 2: Instructor-Led Matrix */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -6 }}
            className="group relative rounded-[2rem] p-8 border border-slate-800/80 transition-all duration-300 overflow-hidden bg-slate-900 shadow-xl flex flex-col justify-between"
          >
            <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-purple-500 to-pink-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            <div>
              <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 transition-transform border border-transparent">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-black mb-4 text-white">
                Instructor-Led Matrix
              </h3>
              <p className="text-base text-slate-300 font-medium leading-relaxed text-justify" style={{ textJustify: "inter-word" }}>
                Led by veteran corporate trainers, we focus on hands-on, outcome-driven learning that turns concepts into real-world skills through practical workshops.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-800 font-bold text-xs text-indigo-400 uppercase tracking-wider">
              100% Verified Response Matrix
            </div>
          </motion.div>

          {/* Card 3: Parent Confidence Node */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -6 }}
            className="md:col-span-3 group relative rounded-[2rem] p-8 border border-brand-purple/40 transition-all duration-300 overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
          >
            <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            
            <div className="flex-1 relative z-10">
              <h3 className="text-xs font-black uppercase tracking-widest text-cyan-400 mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400 inline-block animate-pulse shadow-sm shadow-cyan-400" />
                Parent Confidence Node
              </h3>
              <div className="relative pl-8 border-l-2 border-cyan-500/40 py-1">
                <Quote className="w-5 h-5 text-cyan-400 absolute left-0 top-0 -translate-x-1/2 -mt-2 bg-slate-900 p-0.5 rounded-full" />
                <p className="text-lg md:text-xl text-slate-100 font-semibold italic leading-relaxed text-justify" style={{ textJustify: "inter-word" }}>
                  "We build both technical expertise and professional confidence, ensuring school leavers transition seamlessly into corporate ecosystems."
                </p>
              </div>
            </div>
            
            <div className="shrink-0 w-full md:w-auto relative z-10">
              <span className="w-full md:w-auto text-center px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-black uppercase tracking-wider shadow-md shadow-cyan-500/20 inline-block">
                Instant Access Matrix
              </span>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ⭐ Asymmetrical Student Perspectives Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-brand-blue/5 via-brand-purple/5 to-transparent rounded-full blur-3xl pointer-events-none opacity-40 animate-[spin_30s_linear_infinite]" />

        {/* Floating Vectors around reviews block */}
        <motion.div custom={{ y: [0, -25, 0], x: [0, 20, 0], duration: 8 }} variants={floatAnimation} initial="initial" animate="animate" className="absolute top-8 left-[12%] text-brand-purple/15 pointer-events-none hidden lg:block">
          <HelpCircle className="w-16 h-16 stroke-[1.2]" />
        </motion.div>
        <motion.div custom={{ y: [0, 30, 0], x: [0, -15, 0], duration: 11 }} variants={floatAnimation} initial="initial" animate="animate" className="absolute bottom-12 left-[30%] text-brand-blue/15 pointer-events-none hidden xl:block">
          <MessageSquare className="w-14 h-14 stroke-[1.5]" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10 items-center">
          <div className="lg:col-span-4 lg:sticky lg:top-24 text-center lg:text-left">
            <span className="text-xs font-bold tracking-widest text-brand-purple uppercase bg-brand-purple/10 px-3 py-1.5 rounded-full">
              Ecosystem Reviews
            </span>
            <h2 className="text-3xl md:text-5xl font-black mt-4 mb-6 tracking-tight leading-tight text-white">
              What our students say.
            </h2>
            <p className="text-base text-slate-400 leading-relaxed max-w-md mx-auto lg:mx-0 text-justify" style={{ textJustify: "inter-word" }}>
              Real outcomes from verified learning matrices. See how localized professionals scale up across infrastructure and language benchmarks.
            </p>
            <div className="hidden lg:flex items-center gap-4 mt-8">
              <div className="flex -space-x-3">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="w-9 h-9 rounded-full border-2 border-[#0B0F19] bg-slate-700 flex items-center justify-center text-[10px] font-black">
                    {String.fromCharCode(65 + i)}
                  </div>
                ))}
              </div>
              <span className="text-xs font-bold text-slate-400">Trusted by over 1,200+ graduates</span>
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            {/* Testimonial Card 1 */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.02 }}
              className="md:col-span-2 relative overflow-hidden bg-[#1E293B]/40 border border-slate-800 p-8 md:p-10 rounded-[2.5rem] transition-all duration-300 shadow-none"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-shimmer pointer-events-none" />
              <div className="flex gap-1 mb-6 text-amber-400 relative z-10">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-base md:text-lg text-slate-200 font-medium italic mb-8 leading-relaxed relative z-10 text-justify" style={{ textJustify: "inter-word" }}>
                "{staticTestimonials[0].feedback}"
              </p>
              <div className="flex items-center justify-between pt-6 border-t border-slate-800/60 relative z-10">
                <div>
                  <h4 className="font-black text-base text-slate-100">{staticTestimonials[0].name}</h4>
                  <p className="text-xs font-bold text-brand-blue uppercase tracking-wider mt-0.5">{staticTestimonials[0].track}</p>
                </div>
                <MessageCircle className="w-5 h-5 text-brand-blue/50" />
              </div>
            </motion.div>

            {/* Testimonial Card 2 */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              whileHover={{ scale: 1.02 }}
              className="relative overflow-hidden bg-[#1E293B]/40 border border-slate-800 p-8 rounded-[2.5rem] flex flex-col justify-between min-h-[260px] transition-all duration-300 shadow-none"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-shimmer pointer-events-none [animation-delay:1.5s]" />
              <div className="relative z-10">
                <div className="flex gap-0.5 mb-4 text-amber-400">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}
                </div>
                <p className="text-base text-slate-300 italic mb-6 leading-relaxed text-justify" style={{ textJustify: "inter-word" }}>
                  "{staticTestimonials[1].feedback}"
                </p>
              </div>
              <div className="pt-4 border-t border-slate-800/60 relative z-10">
                <h4 className="font-extrabold text-sm text-slate-100">{staticTestimonials[1].name}</h4>
                <p className="text-[11px] font-bold text-brand-purple uppercase tracking-wider mt-0.5">{staticTestimonials[1].track}</p>
              </div>
            </motion.div>

            {/* Testimonial Card 3 */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
              whileHover={{ scale: 1.02 }}
              className="relative overflow-hidden bg-[#1E293B]/40 border border-slate-800 p-8 rounded-[2.5rem] flex flex-col justify-between min-h-[260px] md:mt-8 transition-all duration-300 shadow-none"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-shimmer pointer-events-none [animation-delay:3s]" />
              <div className="relative z-10">
                <div className="flex gap-0.5 mb-4 text-amber-400">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}
                </div>
                <p className="text-base text-slate-300 italic mb-6 leading-relaxed text-justify" style={{ textJustify: "inter-word" }}>
                  "{staticTestimonials[2].feedback}"
                </p>
              </div>
              <div className="pt-4 border-t border-slate-800/60 relative z-10">
                <h4 className="font-extrabold text-sm text-slate-100">{staticTestimonials[2].name}</h4>
                <p className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mt-0.5">{staticTestimonials[2].track}</p>
              </div>
            </motion.div>
          </div>
        </div>

        <style jsx global>{`
          @keyframes shimmerSweep {
            0% { transform: translateX(-150%) skewX(-25deg); }
            35%, 100% { transform: translateX(150%) skewX(-25deg); }
          }
          .animate-shimmer {
            animation: shimmerSweep 6s cubic-bezier(0.4, 0, 0.2, 1) infinite;
          }
        `}</style>
      </section>

      {/* ── CONVERSION BOTTOM ANCHOR ── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden" id="enrollment-hub">
  {/* The Dotted Mesh Background */}
  <div className="absolute inset-0 z-0 bg-[#0B0F19]">
    <div className="absolute inset-0 opacity-[0.15]" 
         style={{ 
           backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', 
           backgroundSize: '40px 40px' 
         }}>
    </div>
    {/* Ambient Glows to break the uniformity */}
    <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-brand-blue/10 rounded-full blur-[150px]" />
    <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-brand-purple/10 rounded-full blur-[150px]" />
  </div>

  <div className="relative z-10 max-w-5xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
        Accelerate Your Enrollment
      </h2>
      <p className="text-slate-400 text-lg max-w-2xl mx-auto">
        Skip complex registration forms. Provide your details below to securely 
        initiate your admission workflow directly inside WhatsApp.
      </p>
    </div>

    {/* Form Card */}
    <div className="bg-[#0B0F19]/60 backdrop-blur-xl border border-white/10 p-6 md:p-16 rounded-[2.5rem] shadow-2xl">
      <form 
        id="enrollmentForm"
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.currentTarget);
          const data = Object.fromEntries(formData.entries());
          const message = `*New Enrollment Inquiry*%0A%0A*Name:* ${data.fullName}%0A*Phone:* ${data.phone}%0A*Email:* ${data.email}%0A*Occupation:* ${data.occupation}%0A*Program:* ${data.program}%0A*Class:* ${data.class}%0A*Message:* ${data.message}`;
          window.open(`https://wa.me/94710525968?text=${message}`, '_blank');
        }}
        className="space-y-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <input name="fullName" placeholder="Full Name" required className="w-full bg-[#161B29] border border-slate-700 p-5 rounded-2xl text-white focus:ring-2 focus:ring-brand-blue outline-none transition-all" />
          <input name="phone" type="tel" placeholder="Phone Number" required className="w-full bg-[#161B29] border border-slate-700 p-5 rounded-2xl text-white focus:ring-2 focus:ring-brand-blue outline-none transition-all" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <input name="email" type="email" placeholder="Email Address" required className="w-full bg-[#161B29] border border-slate-700 p-5 rounded-2xl text-white focus:ring-2 focus:ring-brand-blue outline-none transition-all" />
          <input name="occupation" placeholder="School / Occupation" required className="w-full bg-[#161B29] border border-slate-700 p-5 rounded-2xl text-white focus:ring-2 focus:ring-brand-blue outline-none transition-all" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <select name="program" required className="w-full bg-[#161B29] border border-slate-700 p-5 rounded-2xl text-slate-400 focus:ring-2 focus:ring-brand-blue outline-none">
            <option value="">Select Interested Program</option>
            <option>Microsoft 365 Professional</option>
            <option>Cambridge YLE Exams</option>
            <option>Cambridge Assessments</option>
          </select>

          <select name="class" required className="w-full bg-[#161B29] border border-slate-700 p-5 rounded-2xl text-slate-400 focus:ring-2 focus:ring-brand-blue outline-none">
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

        <textarea name="message" rows={4} placeholder="Additional details or questions..." className="w-full bg-[#161B29] border border-slate-700 p-5 rounded-2xl text-white focus:ring-2 focus:ring-brand-blue outline-none transition-all" />

        <button 
          type="submit" 
          className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-black py-6 rounded-2xl shadow-xl transition-all flex items-center justify-center gap-3 text-xl"
        >
          <FaWhatsapp className="w-7 h-7" /> 
          <span>Chat via WhatsApp Now</span>
        </button>
      </form>
    </div>
  </div>
</section>
    </div>
  );
}