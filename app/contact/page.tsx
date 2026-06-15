"use client";

import { motion } from "framer-motion";
import { Phone, Mail, ShieldCheck, ArrowUpRight } from "lucide-react";
import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa6";
import React from "react";

// Define the interface to fix the 'any' type errors
interface SocialButtonProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

// Helper component with typed props
function SocialButton({ href, icon, label }: SocialButtonProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      className="p-4 bg-[#0A1428] border border-blue-950/60 rounded-2xl text-slate-300 hover:text-white hover:border-blue-500/40 hover:bg-blue-950/20 transition-all duration-300 shadow-xl"
      aria-label={label}
    >
      {icon}
    </motion.a>
  );
}

export default function ContactPage() {
  return (
    <div className="relative min-h-screen bg-black text-slate-200 overflow-hidden antialiased selection:bg-amber-500/30 selection:text-amber-200">
      
      {/* 🌌 AMBIENT BACKGROUND GLOWS */}
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

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
            Contact <span className="bg-gradient-to-r from-blue-500 via-amber-400 to-blue-600 bg-clip-text text-transparent drop-shadow-sm">Us</span>
          </h1>

          <p className="text-sm md:text-base text-slate-400 leading-relaxed font-normal">
            Get in touch with our team for course details, admissions, and support.
          </p>
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
            <motion.a href="tel:+94710525968" whileHover={{ y: -3, borderColor: "rgba(59, 130, 246, 0.4)" }} className="group relative bg-[#0A1428] border border-blue-950/60 backdrop-blur-xl p-5 rounded-2xl flex items-center gap-4 transition-all duration-300 shadow-xl block">
              <div className="p-3 bg-black border border-blue-950/60 rounded-xl text-amber-400 shadow-md"><Phone className="w-5 h-5" /></div>
              <div className="flex-grow min-w-0">
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Call Us</p>
                <p className="text-sm font-semibold text-white mt-0.5 truncate group-hover:text-blue-400 transition-colors">+94 71 052 5968</p>
              </div>
            </motion.a>

            <motion.a href="mailto:keydigitalsuccess@gmail.com" whileHover={{ y: -3, borderColor: "rgba(59, 130, 246, 0.4)" }} className="group relative bg-[#0A1428] border border-blue-950/60 backdrop-blur-xl p-5 rounded-2xl flex items-center gap-4 transition-all duration-300 shadow-xl block">
              <div className="p-3 bg-black border border-blue-950/60 rounded-xl text-amber-400 shadow-md"><Mail className="w-5 h-5" /></div>
              <div className="flex-grow min-w-0">
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Email Us</p>
                <p className="text-sm font-semibold text-white mt-0.5 truncate group-hover:text-blue-400 transition-colors">keydigitalsuccess@gmail.com</p>
              </div>
            </motion.a>

            <motion.a 
              href="https://wa.me/94710525968" 
              target="_blank" 
              rel="noopener noreferrer" 
              whileHover={{ y: -3, borderColor: "rgba(16, 185, 129, 0.4)" }} 
              className="group relative bg-[#0A1428] border border-emerald-950/60 bg-emerald-500/[0.02] p-5 rounded-2xl flex items-center gap-4 transition-all duration-300 shadow-xl block"
            >
              <div className="p-3 bg-black border border-emerald-950/40 rounded-xl text-emerald-500 shadow-md">
                <FaWhatsapp className="w-5 h-5" />
              </div>
              <div className="flex-grow min-w-0">
                <p className="text-[10px] font-bold uppercase tracking-wider text-emerald-400">WhatsApp Support</p>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <p className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors">Start a Conversation</p>
                  <ArrowUpRight className="w-3.5 h-3.5 text-emerald-600" />
                </div>
              </div>
            </motion.a>
          </motion.div>

          {/* 📍 PREMIUM CORE REGISTRY LOCATION HUB CONTAINER (MAP) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.6, delay: 0.2 }} 
            className="lg:col-span-2 relative bg-[#0A1428] border border-blue-950/60 backdrop-blur-xl p-4 md:p-6 rounded-[2.5rem] overflow-hidden shadow-2xl min-h-[320px]"
          >
            <div className="w-full h-full rounded-2xl overflow-hidden grayscale-[50%] hover:grayscale-0 transition-all duration-500">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.6952040852084!2d80.95298267448212!3d6.806882019806403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae4714d03c180c9%3A0xfd8c57ae9a49cdc5!2sKey%20Institute%20of%20Digital%20Success!5e0!3m2!1sen!2slk!4v1781492553551!5m2!1sen!2slk" 
                width="100%" 
                height="100%" 
                style={{ border: 0, minHeight: '300px' }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>

        {/* 🌐 SOCIAL PRESENCE - NAVIGATION NODES */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-8 border-t border-blue-900/30 flex flex-col items-center space-y-6"
        >
          <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500">
            Join Our Community
          </h3>
          <div className="flex items-center gap-4">
            <SocialButton href="https://www.facebook.com/profile.php?id=61590797219908" icon={<FaFacebookF size={18} />} label="Facebook" />
            <SocialButton href="https://www.tiktok.com/@key_digital_success" icon={<FaTiktok size={18} />} label="TikTok" />
            <SocialButton href="https://www.instagram.com/keydigitalsucess/" icon={<FaInstagram size={18} />} label="Instagram" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}