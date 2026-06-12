"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MessageSquare, MapPin, ShieldCheck, ArrowUpRight } from "lucide-react";

export default function ContactPage() {
  return (
    /* Global background matches Code 2's rich solid black, selection accent color, and text defaults */
    <div className="relative min-h-screen bg-black text-slate-200 overflow-hidden antialiased selection:bg-amber-500/30 selection:text-amber-200">
      
      {/* 🌌 AMBIENT BACKGROUND GLOWS - Identical matrix behavior to Code 2 */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[400px] bg-gradient-to-b from-blue-600/10 via-amber-500/5 to-transparent blur-[100px] pointer-events-none z-0" />
      <div className="absolute bottom-[10%] left-[-10%] w-[400px] h-[400px] bg-blue-600/5 blur-[150px] pointer-events-none z-0" />

      {/* LIGHT GRID UNDERLAY */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e3a8a0a_1px,transparent_1px),linear-gradient(to_bottom,#1e3a8a0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-12">
        
        {/* 🚀 HERO HEADER */}
        <section className="text-center max-w-2xl mx-auto space-y-4">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0A1428] border border-blue-900/60 backdrop-blur-md shadow-lg shadow-blue-950/20"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-amber-400/90">
              Inquiries & Gateways
            </span>
          </motion.div>

          <div className="space-y-2">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white"
            >
              Contact <span className="bg-gradient-to-r from-blue-500 via-amber-400 to-blue-600 bg-clip-text text-transparent drop-shadow-sm">Us</span>
            </motion.h1>
          </div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-sm md:text-base text-slate-400 leading-relaxed font-normal"
          >
            Get in touch with our team for course details, admissions, and support.
          </motion.p>
        </section>

        {/* CONTROLS LAYOUT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 items-stretch">
          
          {/* 📞 INTERACTIVE CONTACT COMMUNICATIONS BLOCK */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-1 space-y-4 flex flex-col justify-between"
          >
            {/* Phone Communication Panel */}
            <motion.div
              whileHover={{ y: -3, borderColor: "rgba(59, 130, 246, 0.4)" }}
              className="group relative bg-[#0A1428] border border-blue-950/60 backdrop-blur-xl p-5 rounded-2xl flex items-center gap-4 transition-all duration-300 shadow-xl"
            >
              <div className="p-3 bg-black border border-blue-950/60 rounded-xl text-amber-400 shadow-md">
                <Phone className="w-5 h-5" />
              </div>
              <div className="flex-grow min-w-0">
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Call Us
                </p>
                <p className="text-sm font-semibold text-white mt-0.5 tracking-tight truncate">
                  +94 71 052 5968
                </p>
              </div>
            </motion.div>

            {/* Email Communications Panel */}
            <motion.div
              whileHover={{ y: -3, borderColor: "rgba(59, 130, 246, 0.4)" }}
              className="group relative bg-[#0A1428] border border-blue-950/60 backdrop-blur-xl p-5 rounded-2xl flex items-center gap-4 transition-all duration-300 shadow-xl"
            >
              <div className="p-3 bg-black border border-blue-950/60 rounded-xl text-amber-400 shadow-md">
                <Mail className="w-5 h-5" />
              </div>
              <div className="flex-grow min-w-0">
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Email Us
                </p>
                <p className="text-sm font-semibold text-white mt-0.5 tracking-tight truncate">
                  keydigitalleraning@gmail.com
                </p>
              </div>
            </motion.div>

            {/* Optimized Secure Instant Messaging Path (WhatsApp Single-Click Route) */}
            <motion.a
              href="https://wa.me/94710525968"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3, borderColor: "rgba(16, 185, 129, 0.4)" }}
              className="group relative bg-[#0A1428] border border-emerald-950/60 bg-emerald-500/[0.02] p-5 rounded-2xl flex items-center gap-4 transition-all duration-300 shadow-xl cursor-pointer block"
            >
              {/* Corner Interactive Glow Pattern Mapping */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-transparent via-transparent to-transparent rounded-bl-full pointer-events-none group-hover:from-emerald-500/5 transition-all duration-500" />
              
              <div className="p-3 bg-black border border-emerald-950/40 rounded-xl text-emerald-400 shadow-md">
                <MessageSquare className="w-5 h-5 fill-current" />
              </div>
              <div className="flex-grow min-w-0">
                <p className="text-[10px] font-bold uppercase tracking-wider text-emerald-400">
                  WhatsApp Support
                </p>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <p className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors duration-200">
                    Start a Conversation
                  </p>
                  <ArrowUpRight className="w-3.5 h-3.5 text-emerald-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                </div>
              </div>
            </motion.a>
          </motion.div>

          {/* 📍 PREMIUM CORE REGISTRY LOCATION HUB CONTAINER */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 relative bg-[#0A1428] border border-blue-950/60 backdrop-blur-xl p-6 md:p-8 rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col justify-center min-h-[320px]"
          >
            {/* Top Right Corner Background Gradient Glow interaction mapping */}
            <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl from-blue-500/5 to-transparent rounded-bl-full pointer-events-none" />
            
            {/* Radar concentric circular aesthetic context underlay overlaying map section */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e3a8a05_1px,transparent_1px),linear-gradient(to_bottom,#1e3a8a05_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none [mask-image:radial-gradient(circle_at_center,white,transparent_80%)]" />

            <div className="relative z-10 flex flex-col items-center justify-center text-center space-y-4 max-w-md mx-auto">
              <div className="w-16 h-16 bg-black border border-blue-950/60 rounded-full flex items-center justify-center text-amber-400 shadow-xl relative group">
                <div className="absolute inset-0 border border-amber-500/10 rounded-full animate-ping pointer-events-none" />
                <MapPin className="w-6 h-6 animate-[bounce_2.5s_infinite]" />
              </div>
              
              <div className="space-y-1">
                <h4 className="text-lg font-bold tracking-tight text-white uppercase">
                  Key Institute of Digital Success
                </h4>
                <p className="text-xs text-amber-400/90 font-medium tracking-wide">
                  KIDS, Fair Road, Diyathalawa, Sri Lanka
                </p>
              </div>

              <div className="h-px w-24 bg-gradient-to-r from-transparent via-blue-900/40 to-transparent" />

              <p className="text-xs md:text-sm text-slate-400 leading-relaxed font-normal">
                Training future-ready professionals in Microsoft 365, enterprise cloud architecture nodes, and advanced decentralized digital productivity networks.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}