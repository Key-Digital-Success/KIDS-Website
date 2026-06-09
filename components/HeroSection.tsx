"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] glow-gradient opacity-70 pointer-events-none" />
      
      <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-blue/30 bg-brand-blue/5 text-brand-blue text-xs font-semibold uppercase tracking-wider mb-6"
        >
          <ShieldCheck className="w-3.5 h-3.5" /> Thakral Global Learning (TGL) Partner
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6 bg-gradient-to-b from-slate-900 to-slate-600 dark:from-white dark:to-slate-400 bg-clip-text text-transparent"
        >
          Key Institute of Digital Success (KIDS)
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          Empowering learners with globally recognized Microsoft 365 certifications and Cambridge English qualifications.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mx-auto"
        >
          <Link
            href="/programs"
            className="w-full sm:w-auto text-center px-8 py-4 bg-gradient-to-r from-brand-blue to-brand-purple text-white font-semibold rounded-xl shadow-xl shadow-brand-blue/20 hover:scale-[1.02] active:scale-98 transition-transform flex items-center justify-center gap-2"
          >
            Explore Programs <ArrowUpRight className="w-5 h-5" />
          </Link>
          <Link
            href="/contact"
            className="w-full sm:w-auto text-center px-8 py-4 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 font-semibold rounded-xl transition-colors"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
}