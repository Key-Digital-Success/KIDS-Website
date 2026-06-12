"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ShieldCheck,
  Globe,
  ImageIcon,
  MonitorSmartphone,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

const floatingIcons = [
  {
    icon: MonitorSmartphone,
    className: "top-16 left-2 md:left-10",
    outer: "bg-cyan-950/20 border-cyan-500/30",
    inner: "text-cyan-400",
  },
  {
    icon: Sparkles,
    className: "top-[45%] left-4 md:left-24",
    outer: "bg-violet-950/20 border-violet-500/30",
    inner: "text-violet-400",
  },
  {
    icon: ImageIcon,
    className: "top-20 right-2 md:right-16",
    outer: "bg-amber-950/20 border-amber-500/30",
    inner: "text-amber-400",
  },
  {
    icon: Globe,
    className: "bottom-20 right-2 md:right-10",
    outer: "bg-rose-950/20 border-rose-500/30",
    inner: "text-rose-400",
  },
];

export default function HeroSection() {
  return (
    <section
      className="
        relative overflow-hidden
        pt-24 pb-20 md:pt-32 md:pb-28
        flex flex-col items-center justify-center
        min-h-screen
        bg-gradient-to-b from-[#02040a] via-[#030712] to-[#02040a] 
        text-white
      "
    >
      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 opacity-[0.12]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(56,189,248,0.15) 1px, transparent 1px),
                              linear-gradient(to bottom, rgba(56,189,248,0.15) 1px, transparent 1px)`,
            backgroundSize: "55px 55px",
          }}
        />
      </div>

      {/* TOP CENTER GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-cyan-500/5 blur-3xl pointer-events-none" />

      {/* RIGHT SIDE GLOW */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-violet-500/5 blur-3xl pointer-events-none" />

      {/* FLOATING SMALL DOTS */}
      <div className="absolute top-24 left-44 w-4 h-4 rounded-full bg-violet-500/20" />
      <div className="absolute top-[40%] right-44 w-3 h-3 rounded-full bg-yellow-400/20" />
      <div className="absolute bottom-32 right-72 w-5 h-5 rounded-full bg-sky-500/20" />
      <div className="absolute bottom-12 left-8 w-6 h-6 rounded-full bg-pink-500/10" />

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
              ease: "easeInOut",
            }}
            className={`absolute hidden md:block z-20 ${item.className}`}
          >
            {/* OUTER GLOW */}
            <div className="absolute inset-0 scale-125 rounded-full blur-2xl bg-white/[0.02]" />

            {/* MAIN ICON CONTAINER */}
            <div
              className={`
                relative flex items-center justify-center
                w-32 h-32 rounded-full border
                backdrop-blur-2xl
                shadow-[0_25px_100px_rgba(0,0,0,0.8)]
                ${item.outer}
              `}
            >
              {/* INNER RING */}
              <div className="absolute inset-3 rounded-full border border-white/[0.05]" />

              {/* ICON */}
              <Icon
                className={`w-14 h-14 ${item.inner}`}
                strokeWidth={1.8}
              />
            </div>
          </motion.div>
        );
      })}

      {/* MAIN CONTENT */}
      <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
        {/* BADGE */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="
            inline-flex items-center gap-2
            px-5 py-2 rounded-full
            border border-sky-500/20
            backdrop-blur-xl
            text-sky-400
            text-xs font-semibold uppercase tracking-wider
            shadow-lg
            mb-6
            bg-white/[0.03]
          "
        >
          <ShieldCheck className="w-4 h-4" />
          Thakral Global Learning (TGL) Partner
        </motion.div>

        {/* TITLE WITH ACCENT UNDERLINE */}
        <div className="relative mb-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="
              text-4xl sm:text-5xl lg:text-6xl
              font-extrabold tracking-tight
              leading-tight max-w-4xl mx-auto
              bg-clip-text text-transparent
              bg-gradient-to-b from-white via-slate-200 to-slate-500
            "
          >
            Build Future-Ready Skills with Microsoft 365 & Cambridge
          </motion.h1>

          {/* YELLOW UNDERLINE */}
          <motion.svg
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mx-auto mt-4 w-[280px] sm:w-[420px] md:w-[540px]"
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
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="
            text-lg md:text-xl
            max-w-3xl mx-auto
            mb-10
            leading-relaxed
            text-slate-400
          "
        >
          Hands-on IT training, Microsoft 365 Professional Pathways, and Cambridge English qualifications designed for students and future professionals.
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="
            flex flex-col sm:flex-row
            items-center justify-center
            gap-4
            w-full max-w-md mx-auto
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
            "
          >
            Contact Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
}