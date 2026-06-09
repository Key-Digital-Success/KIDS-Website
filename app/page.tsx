"use client";

import HeroSection from "@/components/HeroSection";
import TimelineRoadmap from "@/components/TimelineRoadmap";
import { motion, Variants } from "framer-motion";
import { CheckCircle2, MessageCircle, Star } from "lucide-react";

const staticTestimonials = [
  { name: "Amali Perera", track: "Microsoft 365 Graduate", feedback: "The MS-102 track setup here completely saved my cloud administration concepts. Highly practical lab sessions!" },
  { name: "Devinda Silva", track: "Cambridge FCE Candidate", feedback: "Excellent language frameworks. The mock tests mirror real Cambridge parameters perfectly." },
  { name: "Zaid Rahman", track: "M365 & MS-900 Certified", feedback: "Fast tracking into corporate cloud deployments became easy thanks to Key Institute guides." }
];

const revealVariants: Variants = {
  hidden: { opacity: 0, y: 35 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } 
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
        variants={revealVariants}
      >
        <TimelineRoadmap />
      </motion.div>

      {/* Structured Value Props Block Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Hands-on Deployment", desc: "No pure memorization. Students deploy active configuration frameworks across custom real labs." },
            { title: "Instructor-Led Matrix", desc: "Direct instructional feedback channels managed by certified cloud infrastructure specialists." },
            { title: "Lead Optimization Flow", desc: "No complex enterprise onboarding funnels. Instant single click enrollment routing pathways." }
          ].map((item, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              whileHover={{ y: -6, boxShadow: "0 20px 40px -15px rgba(0,0,0,0.05)" }}
              className="glass-card p-8 rounded-3xl border border-slate-200/60 dark:border-slate-800/80 transition-all duration-300 relative overflow-hidden group bg-white/50 dark:bg-[#1E293B]/30"
            >
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-brand-blue to-brand-purple scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              <CheckCircle2 className="w-6 h-6 text-brand-blue mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-slate-100">{item.title}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ⭐ Interactive Testimonials Panel Wrapper Section Container */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-slate-50/50 dark:bg-[#1E293B]/10 border-y border-slate-200/40 dark:border-slate-800/40 rounded-3xl">
        <div className="mb-14 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-2 text-slate-900 dark:text-white">Student Perspectives</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-blue to-brand-purple mx-auto rounded-full" />
        </div>
        
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10"
        >
          {staticTestimonials.map((t, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -8, boxShadow: "0 25px 50px -12px rgba(37,99,235,0.12)" }}
              animate={{ y: [0, idx % 2 === 0 ? -6 : 6, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: idx * 0.5 }}
              className="glass-card p-8 rounded-3xl border border-slate-200/60 dark:border-slate-800 bg-white dark:bg-[#1E293B]/40 backdrop-blur-xl flex flex-col justify-between transition-shadow duration-300"
            >
              <div>
                <div className="flex gap-1 mb-5 text-amber-400">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300 italic mb-8 leading-relaxed">"{t.feedback}"</p>
              </div>
              <div className="border-t border-slate-100 dark:border-slate-800/60 pt-4">
                <h4 className="font-extrabold text-sm text-slate-900 dark:text-slate-100">{t.name}</h4>
                <p className="text-xs font-bold text-brand-blue uppercase tracking-wider mt-0.5">{t.track}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Conversion Core Block Section */}
      <section className="py-20 max-w-5xl mx-auto px-4 mb-16">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-brand-blue via-brand-purple to-brand-blue bg-[size:150%_auto] p-10 md:p-16 rounded-[2rem] text-white text-center shadow-2xl relative overflow-hidden group"
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