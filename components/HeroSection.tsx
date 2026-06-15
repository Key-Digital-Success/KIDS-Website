"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Globe,
  ImageIcon,
  MonitorSmartphone,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

const floatingIcons = [
  {
    icon: MonitorSmartphone,
    className: "top-4 left-4 md:left-6 lg:left-12 xl:left-20",
    outer: "bg-cyan-950/20 border-cyan-500/30",
    inner: "text-cyan-400",
  },
  {
    icon: Sparkles,
    className: "top-[45%] left-4 md:left-12 lg:left-24",
    outer: "bg-violet-950/20 border-violet-500/30",
    inner: "text-violet-400",
  },
  {
    icon: ImageIcon,
    className: "top-6 right-4 md:right-10 lg:right-20 xl:right-32",
    outer: "bg-amber-950/20 border-amber-500/30",
    inner: "text-amber-400",
  },
  {
    icon: Globe,
    className: "bottom-16 right-4 md:right-6 lg:right-16 xl:right-24",
    outer: "bg-rose-950/20 border-rose-500/30",
    inner: "text-rose-400",
  },
];

export default function HeroSection() {
  return (
    <section
      className="
        relative overflow-hidden
        pt-8 pb-12 sm:pt-12 sm:pb-16 md:pt-16 md:pb-20 lg:pt-24 lg:pb-24
        flex flex-col items-center justify-center
        min-h-0 lg:min-h-screen
        bg-gradient-to-b from-[#02040a] via-[#030712] to-[#02040a] 
        text-white
      "
    >
      {/* GRID BACKGROUND - Replaced inline style with optimized Tailwind CSS rules */}
      <div 
        className="absolute inset-0 opacity-[0.12] pointer-events-none bg-[linear-gradient(to_right,rgba(56,189,248,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(56,189,248,0.15)_1px,transparent_1px)] bg-[size:55px_55px]" 
      />

      {/* GLOW EFFECTS - Added will-change-transform to trigger GPU acceleration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full bg-cyan-500/5 blur-3xl pointer-events-none will-change-transform" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-violet-500/5 blur-3xl pointer-events-none will-change-transform" />

      {/* FLOATING SMALL DOTS */}
      <div className="absolute top-8 left-[10%] w-4 h-4 rounded-full bg-violet-500/20 hidden sm:block" />
      <div className="absolute top-[40%] right-[10%] w-3 h-3 rounded-full bg-yellow-400/20 hidden sm:block" />
      <div className="absolute bottom-24 right-[20%] w-5 h-5 rounded-full bg-sky-500/20 hidden lg:block" />
      <div className="absolute bottom-12 left-8 w-6 h-6 rounded-full bg-pink-500/10 hidden sm:block" />

      {/* FLOATING ICONS */}
      {floatingIcons.map((item, i) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={i}
            initial={{ y: 0 }}
            animate={{ y: [0, -16, 0] }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            // Added transform-gpu to offload the animation handling from CPU to GPU
            className={`absolute hidden md:block z-20 transform-gpu ${item.className}`}
          >
            {/* OUTER GLOW */}
            <div className="absolute inset-0 scale-125 rounded-full blur-2xl bg-white/[0.02]" />

            {/* MAIN ICON CONTAINER */}
            <div
              className={`
                relative flex items-center justify-center
                w-20 h-20 lg:w-28 lg:h-28 xl:w-32 xl:h-32 rounded-full border
                backdrop-blur-2xl
                shadow-[0_25px_100px_rgba(0,0,0,0.8)]
                transition-all duration-300
                ${item.outer}
              `}
            >
              <div className="absolute inset-2 lg:inset-3 rounded-full border border-white/[0.05]" />
              <Icon
                className={`w-8 h-8 lg:w-12 lg:h-12 xl:w-14 xl:h-14 ${item.inner}`}
                strokeWidth={1.8}
              />
            </div>
          </motion.div>
        );
      })}

      {/* MAIN CONTENT */}
      <div className="max-w-4xl mx-auto px-6 sm:px-12 md:px-16 text-center relative z-30 flex flex-col items-center justify-center h-full my-auto">

        {/* TITLE WITH ACCENT UNDERLINE */}
        <div className="relative mb-4 sm:mb-6 w-full">
          <motion.h1
            initial={{ opacity: 0, y: 15 }} // Reduced from 20 to prevent excessive layout micro-shifts
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }} // Snappier execution timings
            className="
              text-4xl sm:text-5xl md:text-5xl lg:text-6xl
              font-extrabold tracking-tight
              leading-[1.15] max-w-3xl mx-auto
              bg-clip-text text-transparent
              bg-gradient-to-b from-white via-slate-200 to-slate-500
            "
          >
            Build Future-Ready Skills with <span className="bg-gradient-to-r from-blue-500 via-amber-400 to-blue-600 bg-clip-text text-transparent">Microsoft 365 & Cambridge</span>
          </motion.h1>

          {/* YELLOW UNDERLINE */}
          <motion.svg
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mt-4 w-[260px] sm:w-[380px] md:w-[460px] lg:w-[520px] origin-center"
            viewBox="0 0 420 30"
            fill="none"
          >
            <path
              d="M10 20C90 5 200 5 410 20"
              stroke="#F4B400"
              strokeWidth="6"
              strokeLinecap="round"
            />
          </motion.svg>
        </div>

        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="
            text-base sm:text-lg md:text-xl
            max-w-2xl mx-auto
            mb-6 sm:mb-8
            leading-relaxed
            text-slate-400
          "
        >
          Hands-on IT training, Microsoft 365 Professional Pathways, and Cambridge English qualifications designed for students and future professionals.
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="
            flex flex-col sm:flex-row
            items-center justify-center
            gap-4
            w-full sm:w-auto mx-auto
          "
        >
          <Link
            href="/programs"
            className="
              w-full sm:w-auto
              text-center
              px-8 py-4
              bg-gradient-to-r from-sky-500 to-indigo-600
              text-white
              font-semibold
              rounded-2xl
              shadow-2xl shadow-sky-500/20
              hover:scale-[1.03]
              active:scale-95
              transition-all duration-300
              flex items-center justify-center gap-2
              text-sm sm:text-base
            "
          >
            Explore Programs
            <ArrowUpRight className="w-5 h-5" />
          </Link>

          <Link
            href="/contact"
            className="
              w-full sm:w-auto
              text-center
              px-8 py-4
              backdrop-blur-xl
              border border-slate-800/80 
              bg-slate-950/40 
              text-slate-300 
              hover:bg-slate-900
              font-semibold
              rounded-2xl
              shadow-lg
              transition-all duration-300
              text-sm sm:text-base
            "
          >
            Contact Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
}