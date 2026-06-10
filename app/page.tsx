"use client";

import HeroSection from "@/components/HeroSection";
import TimelineRoadmap from "@/components/TimelineRoadmap";
import { motion, Variants } from "framer-motion";
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
  Laptop
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
    <>
      <HeroSection />
      
      {/* ── TIMELINE CONTAINER LINK WITH ACTIVE BACKGROUND ANCHORS ── */}
      <div className="relative overflow-hidden bg-slate-100/40 dark:bg-transparent rounded-[3rem] my-6">
        {/* Saturated Mesh Glow Trackers */}
        <div className="absolute top-1/3 left-10 w-96 h-96 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl pointer-events-none animate-pulse" />
        
        {/* 30% Saturated Floating Vectors */}
        <motion.div custom={{ y: [0, -25, 0], x: [0, 20, 0], duration: 8 }} variants={floatAnimation} initial="initial" animate="animate" className="absolute top-12 left-[6%] text-brand-blue/30 dark:text-brand-blue/20 pointer-events-none hidden lg:block">
          <Terminal className="w-14 h-14 stroke-[1.5]" />
        </motion.div>
        <motion.div custom={{ y: [0, 30, 0], x: [0, -15, 0], duration: 10 }} variants={floatAnimation} initial="initial" animate="animate" className="absolute bottom-8 right-[8%] text-brand-purple/30 dark:text-brand-purple/20 pointer-events-none hidden lg:block">
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
      </div>

      {/* 🇬🇧 3. Programs Ecosystem (Cambridge English Language Center Block) */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-slate-100/30 dark:bg-transparent rounded-[3rem] my-6 border border-slate-200/40 dark:border-transparent">
        {/* Saturated Ambient Glow Layer */}
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-brand-purple/10 to-brand-blue/5 rounded-full blur-3xl pointer-events-none dark:from-brand-purple/20 dark:to-transparent" />
        <div className="absolute bottom-4 left-1/3 w-80 h-80 bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-3xl pointer-events-none animate-pulse" />

        {/* 30% Saturated Floating Vectors */}
        <motion.div custom={{ y: [0, -30, 0], x: [0, 20, 0], rotate: [0, 15, 0], duration: 9 }} variants={floatAnimation} initial="initial" animate="animate" className="absolute top-16 right-[12%] text-brand-purple/30 dark:text-brand-purple/20 pointer-events-none hidden md:block">
          <GraduationCap className="w-20 h-20 stroke-[1.5]" />
        </motion.div>
        <motion.div custom={{ y: [0, 25, 0], x: [0, -20, 0], rotate: [0, -10, 0], duration: 11 }} variants={floatAnimation} initial="initial" animate="animate" className="absolute bottom-20 left-[6%] text-brand-blue/30 dark:text-brand-blue/20 pointer-events-none hidden md:block">
          <BookOpen className="w-24 h-24 stroke-[1.2]" />
        </motion.div>
        <motion.div custom={{ y: [0, -20, 0], x: [0, 25, 0], duration: 7 }} variants={floatAnimation} initial="initial" animate="animate" className="absolute top-1/2 left-[48%] text-slate-400/30 dark:text-slate-500/15 pointer-events-none hidden xl:block">
          <Globe className="w-28 h-28 stroke-[1]" />
        </motion.div>
        
        <div className="text-center md:text-left mb-14 relative z-10">
          <span className="text-xs font-normal uppercase tracking-widest text-brand-blue bg-brand-blue/10 dark:bg-brand-blue/10 px-3 py-1.5 rounded-full border border-brand-blue/20 dark:border-brand-blue/20">
            Programs Ecosystem
          </span>
          {/* FIXED: Solid black in light theme, Solid white in dark theme */}
          <h2 className="text-3xl md:text-5xl font-black mt-3 tracking-tight !text-black dark:!text-white">
            Global Language Benchmarks
          </h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10"
        >
          {/* Header Card: Spans full width across the dual grid layout */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -4 }}
            className="md:col-span-2 group relative rounded-[2rem] p-8 md:p-10 border border-slate-200/80 dark:border-brand-purple/30 transition-all duration-300 overflow-hidden bg-slate-100/70 dark:bg-slate-900 shadow-xs dark:shadow-xl flex flex-col md:flex-row items-center justify-between gap-6"
          >
            {/* Top Border Glow Tracer */}
            <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-brand-purple via-blue-500 to-brand-purple" />
            
            <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-slate-200/60 dark:bg-slate-800 shadow-inner border border-slate-300/40 dark:border-slate-700 flex items-center justify-center text-4xl shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                🇬🇧
              </div>
              <div>
                {/* FIXED: Solid black in light theme, Solid white in dark theme */}
                <h3 className="text-2xl font-black tracking-tight !text-black dark:!text-white uppercase">
                  Cambridge English Language Center
                </h3>
                <p 
                  className="text-base text-slate-700 dark:text-slate-300 font-semibold mt-1 text-justify"
                  style={{ textJustify: "inter-word" }}
                >
                  International exam tracks building real-world fluency and confidence
                </p>
              </div>
            </div>
            
            <div className="shrink-0 relative z-10">
              <span className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-brand-purple dark:bg-purple-500 text-white text-xs font-black tracking-wider uppercase shadow-md shadow-purple-500/20">
                CEFR Aligned Matrix <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              </span>
            </div>
          </motion.div>

          {/* Column A Card: Young Learners English (YLE) */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -6 }}
            className="group relative rounded-[2rem] p-8 border border-slate-200/80 dark:border-brand-blue/30 transition-all duration-300 overflow-hidden bg-slate-100/70 dark:bg-slate-900 shadow-xs dark:shadow-xl flex flex-col justify-between min-h-[300px]"
          >
            <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-blue-500 to-cyan-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-xl bg-slate-200/80 dark:bg-blue-500/10 text-brand-blue dark:text-blue-400 border border-slate-300/40 shadow-xs group-hover:scale-110 transition-transform">
                  <BookOpen className="w-5 h-5" />
                </div>
                {/* FIXED: Solid black in light theme, Solid white in dark theme */}
                <h3 className="text-2xl font-black !text-black dark:!text-white">
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
                    <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400 mt-2 shrink-0 group-hover/item:scale-150 transition-transform duration-300 shadow-xs shadow-blue-500/50" />
                    <div className="text-base text-justify" style={{ textJustify: "inter-word" }}>
                      <span className="font-black text-slate-900 dark:text-slate-100">{item.title}</span>
                      <span className="text-brand-blue dark:text-blue-500 mx-2 font-bold">•</span>
                      <span className="text-slate-700 dark:text-slate-300 font-semibold">{item.desc}</span>
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
            className="group relative rounded-[2rem] p-8 border border-slate-200/80 dark:border-brand-purple/30 transition-all duration-300 overflow-hidden bg-slate-100/70 dark:bg-slate-900 shadow-xs dark:shadow-xl flex flex-col justify-between min-h-[300px]"
          >
            <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-purple-500 to-indigo-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-xl bg-slate-200/80 dark:bg-purple-500/10 text-brand-purple dark:text-purple-400 border border-slate-300/40 shadow-xs group-hover:scale-110 transition-transform">
                  <GraduationCap className="w-5 h-5" />
                </div>
                {/* FIXED: Solid black in light theme, Solid white in dark theme */}
                <h3 className="text-2xl font-black !text-black dark:!text-white">
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
                    <span className="w-2 h-2 rounded-full bg-brand-purple dark:bg-purple-400 mt-2 shrink-0 group-hover/item:scale-150 transition-transform duration-300 shadow-xs shadow-purple-500/50" />
                    <div className="text-base text-justify" style={{ textJustify: "inter-word" }}>
                      <span className="font-black text-slate-900 dark:text-slate-100">{item.title}</span>
                      <span className="text-brand-purple dark:text-purple-500 mx-2 font-bold">•</span>
                      <span className="text-slate-700 dark:text-slate-300 font-semibold">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* 🍱 4. Core Architecture (Value Propositions) Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-slate-100/30 dark:bg-transparent rounded-[3rem] my-6 border border-slate-200/40 dark:border-transparent">
        {/* Dynamic Light Mesh Overlay */}
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-brand-blue/5 to-purple-500/5 rounded-full blur-3xl pointer-events-none animate-[spin_30s_linear_infinite]" />
        
        {/* 30% Saturated Floating Vectors */}
        <motion.div custom={{ y: [0, 25, 0], x: [0, -20, 0], duration: 8 }} variants={floatAnimation} initial="initial" animate="animate" className="absolute top-16 left-6 text-brand-blue/30 dark:text-brand-blue/15 pointer-events-none hidden md:block">
          <Cpu className="w-20 h-20 stroke-[1.2]" />
        </motion.div>
        <motion.div custom={{ y: [0, -30, 0], x: [0, 25, 0], duration: 7 }} variants={floatAnimation} initial="initial" animate="animate" className="absolute bottom-14 right-12 text-brand-purple/30 dark:text-brand-purple/15 pointer-events-none hidden md:block">
          <ShieldCheck className="w-16 h-16 stroke-[1.5]" />
        </motion.div>
        <motion.div custom={{ y: [0, 20, 0], x: [0, 20, 0], rotate: [0, 360], duration: 25 }} variants={floatAnimation} initial="initial" animate="animate" className="absolute bottom-1/3 left-1/2 text-slate-300/30 dark:text-slate-700/15 pointer-events-none hidden xl:block">
          <Layers className="w-24 h-24 stroke-[1]" />
        </motion.div>

        <div className="text-center md:text-left mb-14 relative z-10">
          <span className="text-xs font-normal uppercase tracking-widest text-brand-blue bg-brand-blue/10 px-3 py-1.5 rounded-full border border-brand-blue/20">
            Core Architecture
          </span>
          {/* FIXED: Solid black in light theme, Solid white in dark theme */}
          <h2 className="text-3xl md:text-5xl font-black mt-3 tracking-tight !text-black dark:!text-white">
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
            className="md:col-span-2 group relative rounded-[2rem] p-8 border border-slate-200/80 dark:border-slate-800/80 transition-all duration-300 overflow-hidden bg-slate-100/70 dark:bg-slate-900 shadow-xs dark:shadow-xl flex flex-col justify-between"
          >
            <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            <div className="absolute top-0 right-0 p-8 opacity-10 dark:opacity-20 pointer-events-none">
              <Sparkles className="w-36 h-36 text-blue-500" />
            </div>
            <div>
              <div className="w-12 h-12 rounded-xl bg-slate-200/80 dark:bg-blue-500/20 flex items-center justify-center text-brand-blue dark:text-blue-400 mb-6 group-hover:scale-110 transition-transform border border-slate-300/40 dark:border-transparent">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-black mb-4 text-slate-900 dark:text-white">
                Hands-on Deployment Infrastructure
              </h3>
              <p className="text-base text-slate-700 dark:text-slate-300 font-medium leading-relaxed text-justify" style={{ textJustify: "inter-word" }}>
                While we anchor concepts with essential theoretical frameworks, our programs move aggressively beyond the classroom page. We focus heavily on execution—dedicating the core blueprint to active hands-on practice, complex real-world case scenarios, and structured production-ready learning pathways.
              </p>
            </div>
          </motion.div>

          {/* Card 2: Instructor-Led Matrix */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -6 }}
            className="group relative rounded-[2rem] p-8 border border-slate-200/80 dark:border-slate-800/80 transition-all duration-300 overflow-hidden bg-slate-100/70 dark:bg-slate-900 shadow-xs dark:shadow-xl flex flex-col justify-between"
          >
            <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-purple-500 to-pink-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            <div>
              <div className="w-12 h-12 rounded-xl bg-slate-200/80 dark:bg-purple-500/20 flex items-center justify-center text-brand-purple dark:text-purple-400 mb-6 group-hover:scale-110 transition-transform border border-slate-300/40 dark:border-transparent">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-black mb-4 text-slate-900 dark:text-white">
                Instructor-Led Matrix
              </h3>
              <p className="text-base text-slate-700 dark:text-slate-300 font-medium leading-relaxed text-justify" style={{ textJustify: "inter-word" }}>
                Led by veteran corporate trainers, we focus on hands-on, outcome-driven learning that turns concepts into real-world skills through practical workshops.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 font-bold text-xs text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
              100% Verified Response Matrix
            </div>
          </motion.div>

          {/* Card 3: Parent Confidence Node */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -6 }}
            className="md:col-span-3 group relative rounded-[2rem] p-8 border border-brand-blue/20 dark:border-brand-purple/40 transition-all duration-300 overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 dark:from-slate-900 dark:via-indigo-950 dark:to-slate-900 text-white shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
          >
            <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            
            <div className="flex-1 relative z-10">
              <h3 className="text-xs font-black uppercase tracking-widest text-cyan-400 mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400 inline-block animate-pulse shadow-sm shadow-cyan-400" />
                Parent Confidence Node
              </h3>
              <div className="relative pl-8 border-l-2 border-cyan-500/40 py-1">
                <Quote className="w-5 h-5 text-cyan-400 absolute left-0 top-0 -translate-x-1/2 -mt-2 bg-slate-900 dark:bg-indigo-950 p-0.5 rounded-full" />
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
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-transparent transition-colors duration-300">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-brand-blue/5 via-brand-purple/5 to-transparent rounded-full blur-3xl pointer-events-none opacity-80 dark:opacity-40 animate-[spin_30s_linear_infinite]" />

        {/* 30% Saturated Floating Vectors around reviews block */}
        <motion.div custom={{ y: [0, -25, 0], x: [0, 20, 0], duration: 8 }} variants={floatAnimation} initial="initial" animate="animate" className="absolute top-8 left-[12%] text-brand-purple/30 dark:text-brand-purple/15 pointer-events-none hidden lg:block">
          <HelpCircle className="w-16 h-16 stroke-[1.2]" />
        </motion.div>
        <motion.div custom={{ y: [0, 30, 0], x: [0, -15, 0], duration: 11 }} variants={floatAnimation} initial="initial" animate="animate" className="absolute bottom-12 left-[30%] text-brand-blue/30 dark:text-brand-blue/15 pointer-events-none hidden xl:block">
          <MessageSquare className="w-14 h-14 stroke-[1.5]" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10 items-center">
          <div className="lg:col-span-4 lg:sticky lg:top-24 text-center lg:text-left">
            <span className="text-xs font-bold tracking-widest text-brand-purple uppercase bg-brand-purple/10 px-3 py-1.5 rounded-full">
              Ecosystem Reviews
            </span>
            {/* FIXED: Solid black in light theme, Solid white in dark theme */}
            <h2 className="text-3xl md:text-5xl font-black mt-4 mb-6 tracking-tight leading-tight !text-black dark:!text-white">
              What our students say.
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed max-w-md mx-auto lg:mx-0 text-justify" style={{ textJustify: "inter-word" }}>
              Real outcomes from verified learning matrices. See how localized professionals scale up across infrastructure and language benchmarks.
            </p>
            <div className="hidden lg:flex items-center gap-4 mt-8">
              <div className="flex -space-x-3">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="w-9 h-9 rounded-full border-2 border-white dark:border-[#0B0F19] bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-[10px] font-black">
                    {String.fromCharCode(65 + i)}
                  </div>
                ))}
              </div>
              <span className="text-xs font-bold text-slate-600 dark:text-slate-400">Trusted by over 1,200+ graduates</span>
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            {/* Testimonial Card 1 */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.02 }}
              className="md:col-span-2 relative overflow-hidden bg-slate-100/70 dark:bg-[#1E293B]/40 border border-slate-200/80 dark:border-slate-800 p-8 md:p-10 rounded-[2.5rem] transition-all duration-300 shadow-xs dark:shadow-none"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-200/30 dark:via-white/5 to-transparent -translate-x-full animate-shimmer pointer-events-none" />
              <div className="flex gap-1 mb-6 text-amber-400 relative z-10">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-base md:text-lg text-slate-700 dark:text-slate-200 font-medium italic mb-8 leading-relaxed relative z-10 text-justify" style={{ textJustify: "inter-word" }}>
                "{staticTestimonials[0].feedback}"
              </p>
              <div className="flex items-center justify-between pt-6 border-t border-slate-200/60 dark:border-slate-800/60 relative z-10">
                <div>
                  <h4 className="font-black text-base text-slate-900 dark:text-slate-100">{staticTestimonials[0].name}</h4>
                  <p className="text-xs font-bold text-brand-blue uppercase tracking-wider mt-0.5">{staticTestimonials[0].track}</p>
                </div>
                <MessageCircle className="w-5 h-5 text-brand-blue/30 dark:text-brand-blue/50" />
              </div>
            </motion.div>

            {/* Testimonial Card 2 */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              whileHover={{ scale: 1.02 }}
              className="relative overflow-hidden bg-slate-100/70 dark:bg-[#1E293B]/40 border border-slate-200/80 dark:border-slate-800 p-8 rounded-[2.5rem] flex flex-col justify-between min-h-[260px] transition-all duration-300 shadow-xs dark:shadow-none"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-200/30 dark:via-white/5 to-transparent -translate-x-full animate-shimmer pointer-events-none [animation-delay:1.5s]" />
              <div className="relative z-10">
                <div className="flex gap-0.5 mb-4 text-amber-400">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}
                </div>
                <p className="text-base text-slate-600 dark:text-slate-300 italic mb-6 leading-relaxed text-justify" style={{ textJustify: "inter-word" }}>
                  "{staticTestimonials[1].feedback}"
                </p>
              </div>
              <div className="pt-4 border-t border-slate-200/60 dark:border-slate-800/60 relative z-10">
                <h4 className="font-extrabold text-sm text-slate-900 dark:text-slate-100">{staticTestimonials[1].name}</h4>
                <p className="text-[11px] font-bold text-brand-purple uppercase tracking-wider mt-0.5">{staticTestimonials[1].track}</p>
              </div>
            </motion.div>

            {/* Testimonial Card 3 */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
              whileHover={{ scale: 1.02 }}
              className="relative overflow-hidden bg-slate-100/70 dark:bg-[#1E293B]/40 border border-slate-200/80 dark:border-slate-800 p-8 rounded-[2.5rem] flex flex-col justify-between min-h-[260px] md:mt-8 transition-all duration-300 shadow-xs dark:shadow-none"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-200/30 dark:via-white/5 to-transparent -translate-x-full animate-shimmer pointer-events-none [animation-delay:3s]" />
              <div className="relative z-10">
                <div className="flex gap-0.5 mb-4 text-amber-400">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}
                </div>
                <p className="text-base text-slate-600 dark:text-slate-300 italic mb-6 leading-relaxed text-justify" style={{ textJustify: "inter-word" }}>
                  "{staticTestimonials[2].feedback}"
                </p>
              </div>
              <div className="pt-4 border-t border-slate-200/60 dark:border-slate-800/60 relative z-10">
                <h4 className="font-extrabold text-sm text-slate-900 dark:text-slate-100">{staticTestimonials[2].name}</h4>
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

      {/* ── CONVERSION BOTTOM ANCHOR (WITH EXTENDED VECTORS) ── */}
      <section className="py-20 max-w-5xl mx-auto px-4 mb-16 relative overflow-hidden">
        {/* 30% Saturated Floating Vectors under final enrollment card layout */}
        <motion.div custom={{ y: [0, -20, 0], x: [0, 20, 0], duration: 7 }} variants={floatAnimation} initial="initial" animate="animate" className="absolute top-4 left-0 text-brand-blue/30 dark:text-brand-blue/20 pointer-events-none hidden lg:block">
          <Check className="w-16 h-16 stroke-[2]" />
        </motion.div>
        <motion.div custom={{ y: [0, 25, 0], x: [0, -25, 0], rotate: [0, 45, 0], duration: 9 }} variants={floatAnimation} initial="initial" animate="animate" className="absolute bottom-4 right-0 text-brand-purple/30 dark:text-brand-purple/20 pointer-events-none hidden lg:block">
          <Zap className="w-14 h-14 stroke-[1.5]" />
        </motion.div>
        <motion.div custom={{ y: [0, -15, 0], x: [0, -15, 0], duration: 8 }} variants={floatAnimation} initial="initial" animate="animate" className="absolute top-1/2 right-[15%] text-slate-400/25 dark:text-slate-600/10 pointer-events-none hidden xl:block">
          <Award className="w-20 h-20 stroke-[1.2]" />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-brand-blue via-brand-purple to-brand-blue bg-[size:150%_auto] p-10 md:p-16 rounded-[2.5rem] text-white text-center shadow-2xl relative overflow-hidden group z-10"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent_50%)]" />
          <h2 className="text-3xl md:text-5xl font-black mb-4 relative z-10 tracking-tight text-white">Accelerate Your Enrollment Pathway</h2>
          <p className="text-slate-100 max-w-2xl mx-auto mb-10 text-base relative z-10 leading-relaxed font-medium text-justify" style={{ textJustify: "inter-word" }}>
            Skip complex multi-layer registration forms. Directly interact with admissions support workflows securely inside WhatsApp.
          </p>
          <motion.a
            whileHover={{ scale: 1.05, boxShadow: "0 20px 30px rgba(0,0,0,0.15)" }}
            whileTap={{ scale: 0.95 }}
            href="https://wa.me/94771234567"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-10 py-5 bg-white text-brand-blue font-extrabold rounded-2xl shadow-xl transition-shadow relative z-10 cursor-pointer"
          >
            <MessageCircle className="w-5 h-5 fill-current" /> Chat via WhatsApp Now
          </motion.a>
        </motion.div>
      </section>
    </>
  );
}