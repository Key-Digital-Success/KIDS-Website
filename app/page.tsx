"use client";

import HeroSection from "@/components/HeroSection";
import TimelineRoadmap from "@/components/TimelineRoadmap";
import { motion, Variants } from "framer-motion";
import { CheckCircle2, MessageCircle, Star, ArrowUpRight, ShieldCheck, Sparkles } from "lucide-react";

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

export default function HomePage() {
  return (
    <>
      <HeroSection />
      
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

      {/* 🍱 Modern Bento Box Grid Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center md:text-left mb-14">
          <span className="text-xs font-bold tracking-widest text-brand-blue uppercase bg-brand-blue/10 px-3 py-1.5 rounded-full">
            Core Architecture
          </span>
          <h2 className="text-3xl md:text-5xl font-black mt-3 text-slate-900 dark:text-white tracking-tight">
            Engineered for active execution.
          </h2>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* Card 1: Main Feature Block */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -6, boxShadow: "0 20px 40px -15px rgba(0,0,0,0.05)" }}
            className="md:col-span-2 group relative rounded-3xl p-8 md:p-10 border border-slate-200/60 dark:border-slate-800/80 transition-all duration-300 relative overflow-hidden glass-card bg-white/50 dark:bg-[#1E293B]/30 flex flex-col justify-between min-h-[300px]"
          >
            <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-brand-blue to-brand-purple scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
              <Sparkles className="w-36 h-36 text-brand-blue" />
            </div>
            <div>
              <CheckCircle2 className="w-6 h-6 text-brand-blue mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-extrabold mb-3 text-slate-900 dark:text-slate-100">
                Hands-on Deployment Infrastructure
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 max-w-xl leading-relaxed">
                No pure memorization structures. Students orchestrate and deploy active configuration frameworks across segregated, custom cloud sandbox environments safely isolated for experimentation.
              </p>
            </div>
            <div className="mt-6 flex items-center gap-2 text-sm font-bold text-brand-blue group-hover:gap-3 transition-all cursor-pointer">
              Explore dynamic labs <ArrowUpRight className="w-4 h-4" />
            </div>
          </motion.div>

          {/* Card 2: Support Block */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -6, boxShadow: "0 20px 40px -15px rgba(0,0,0,0.05)" }}
            className="glass-card p-8 rounded-3xl border border-slate-200/60 dark:border-slate-800/80 transition-all duration-300 relative overflow-hidden group bg-white/50 dark:bg-[#1E293B]/30 flex flex-col justify-between"
          >
            <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-brand-blue to-brand-purple scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            <div>
              <ShieldCheck className="w-6 h-6 text-brand-purple mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-extrabold mb-2 text-slate-900 dark:text-slate-100">
                Instructor-Led Matrix
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                Direct instructional feedback channels managed continuously by certified cloud infrastructure specialists.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800/40 text-xs text-slate-400 font-medium">
              100% Verified Response Matrix
            </div>
          </motion.div>

          {/* Card 3: Row Span Optimization Banner */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -6, boxShadow: "0 20px 40px -15px rgba(0,0,0,0.05)" }}
            className="md:col-span-3 glass-card p-8 rounded-3xl border border-slate-200/60 dark:border-slate-800/80 transition-all duration-300 relative overflow-hidden group bg-white/50 dark:bg-[#1E293B]/30 flex flex-col sm:flex-row sm:items-center justify-between gap-6"
          >
            <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-brand-blue to-brand-purple scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            <div className="max-w-2xl">
              <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse" />
                Lead Optimization Flow
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                No complex enterprise onboarding funnels. Instant single click enrollment routing pathways tied directly to localization structures.
              </p>
            </div>
            <div className="shrink-0">
              <span className="px-5 py-3 rounded-2xl bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 text-xs font-bold tracking-wide shadow-sm inline-block">
                Instant Processing Setup
              </span>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ⭐ Asymmetrical Student Perspectives Section with Jumping, Shining Cards */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-transparent transition-colors duration-300">
        
        {/* Colorful deep ambient backgrounds */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-brand-blue/10 via-brand-purple/10 to-transparent rounded-full blur-3xl pointer-events-none opacity-80 dark:opacity-40 animate-[spin_30s_linear_infinite]" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10 items-center">
          
          {/* Left Side Content Context Header */}
          <div className="lg:col-span-4 lg:sticky lg:top-24 text-center lg:text-left">
            <span className="text-xs font-bold tracking-widest text-brand-purple uppercase bg-brand-purple/10 px-3 py-1.5 rounded-full">
              Ecosystem Reviews
            </span>
            <h2 className="text-3xl md:text-5xl font-black mt-4 mb-6 text-slate-900 dark:text-white tracking-tight leading-tight">
              What our students say.
            </h2>
            <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 leading-relaxed max-w-md mx-auto lg:mx-0">
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

          {/* Right Layout Grid: Animated Auto Jumping and Light Shimmering Shines */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            
            {/* Testimonial Card 1 (Main Big Card - Jumps up and down slower) */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.02 }}
              className="md:col-span-2 relative overflow-hidden glass-card p-8 md:p-10 rounded-3xl border border-slate-200/60 dark:border-slate-800 bg-white dark:bg-[#1E293B]/40 backdrop-blur-xl transition-all duration-300 shadow-md dark:shadow-none"
            >
              {/* Continuous Auto Shining Laser Sweep Layer */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 dark:via-white/5 to-transparent -translate-x-full animate-shimmer pointer-events-none" />
              
              <div className="flex gap-1 mb-6 text-amber-400 relative z-10">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-base md:text-lg text-slate-700 dark:text-slate-200 font-medium italic mb-8 leading-relaxed relative z-10">
                "{staticTestimonials[0].feedback}"
              </p>
              <div className="flex items-center justify-between pt-6 border-t border-slate-100 dark:border-slate-800/60 relative z-10">
                <div>
                  <h4 className="font-black text-base text-slate-900 dark:text-slate-100">{staticTestimonials[0].name}</h4>
                  <p className="text-xs font-bold text-brand-blue uppercase tracking-wider mt-0.5">{staticTestimonials[0].track}</p>
                </div>
                <MessageCircle className="w-5 h-5 text-brand-blue/30 dark:text-brand-blue/50" />
              </div>
            </motion.div>

            {/* Testimonial Card 2 (Left Column Offset Card - Jumps faster with negative delay offset) */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              whileHover={{ scale: 1.02 }}
              className="relative overflow-hidden glass-card p-8 rounded-3xl border border-slate-200/60 dark:border-slate-800 bg-white dark:bg-[#1E293B]/40 backdrop-blur-xl flex flex-col justify-between min-h-[260px] transition-all duration-300 shadow-md dark:shadow-none"
            >
              {/* Continuous Auto Shining Laser Sweep Layer */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 dark:via-white/5 to-transparent -translate-x-full animate-shimmer pointer-events-none [animation-delay:1.5s]" />
              
              <div className="relative z-10">
                <div className="flex gap-0.5 mb-4 text-amber-400">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300 italic mb-6 leading-relaxed">
                  "{staticTestimonials[1].feedback}"
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800/60 relative z-10">
                <h4 className="font-extrabold text-sm text-slate-900 dark:text-slate-100">{staticTestimonials[1].name}</h4>
                <p className="text-[11px] font-bold text-brand-purple uppercase tracking-wider mt-0.5">{staticTestimonials[1].track}</p>
              </div>
            </motion.div>

            {/* Testimonial Card 3 (Right Column Offset Card - Jumps dynamically out of sync) */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
              whileHover={{ scale: 1.02 }}
              className="relative overflow-hidden glass-card p-8 rounded-3xl border border-slate-200/60 dark:border-slate-800 bg-white dark:bg-[#1E293B]/40 backdrop-blur-xl flex flex-col justify-between min-h-[260px] md:mt-8 transition-all duration-300 shadow-md dark:shadow-none"
            >
              {/* Continuous Auto Shining Laser Sweep Layer */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 dark:via-white/5 to-transparent -translate-x-full animate-shimmer pointer-events-none [animation-delay:3s]" />
              
              <div className="relative z-10">
                <div className="flex gap-0.5 mb-4 text-amber-400">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300 italic mb-6 leading-relaxed">
                  "{staticTestimonials[2].feedback}"
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800/60 relative z-10">
                <h4 className="font-extrabold text-sm text-slate-900 dark:text-slate-100">{staticTestimonials[2].name}</h4>
                <p className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mt-0.5">{staticTestimonials[2].track}</p>
              </div>
            </motion.div>

          </div>
        </div>

        {/* Shimmer laser beam stylesheet rule injection */}
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

      {/* Conversion Core Block Section */}
      <section className="py-20 max-w-5xl mx-auto px-4 mb-16">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-brand-blue via-brand-purple to-brand-blue bg-[size:150%_auto] p-10 md:p-16 rounded-[2.5rem] text-white text-center shadow-2xl relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent_50%)]" />
          <h2 className="text-3xl md:text-5xl font-black mb-4 relative z-10 tracking-tight">Accelerate Enrollment Framework</h2>
          <p className="text-slate-100 max-w-2xl mx-auto mb-10 text-base relative z-10 leading-relaxed font-medium">
            Skip complex multi-layer web forms. Directly interact with admissions support workflows securely inside WhatsApp.
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