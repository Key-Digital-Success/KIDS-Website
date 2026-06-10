"use client";

import { motion } from "framer-motion";
import { Layers, Network, Terminal, Award, Clock, CheckCircle2, LucideIcon } from "lucide-react";

interface Stage {
  icon: LucideIcon;
  stage: string;
  title: string;
  duration: string;
  points: string[];
  color: string;
  glow: string;
}

const STAGES: Stage[] = [
  {
    icon: Layers,
    stage: "Stage 01",
    title: "Basics Architecture",
    duration: "60 Hours",
    points: ["M365 workflow automation foundations", "Computer file architecture interfaces", "Core cloud security protocols"],
    color: "from-blue-500 to-cyan-500",
    glow: "rgba(37, 99, 235, 0.12)"
  },
  {
    icon: Network,
    stage: "Stage 02",
    title: "Enterprise Operation",
    duration: "80 Hours",
    points: ["Advanced data orchestration via Power BI", "Tenant compliance configurations", "Complex analytic infrastructure frameworks"],
    color: "from-indigo-500 to-purple-500",
    glow: "rgba(124, 58, 237, 0.12)"
  },
  {
    icon: Terminal,
    stage: "MS-900",
    title: "Fundamentals Validation",
    duration: "1 Day Prep",
    points: ["Official cloud metrics review", "Core licensing models evaluation", "Basic tenant security architectures"],
    color: "from-purple-500 to-pink-500",
    glow: "rgba(219, 39, 119, 0.12)"
  },
  {
    icon: Award,
    stage: "MS-102",
    title: "Cloud Administrator",
    duration: "4 Days Bootcamp",
    points: ["Tenant-level endpoint deployments", "Infrastructure threat mitigation setup", "Global access identity governance"],
    color: "from-pink-500 to-rose-500",
    glow: "rgba(244, 63, 94, 0.12)"
  }
];

export default function TimelineRoadmap() {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading - Compressed padding/margins */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-brand-blue bg-brand-blue/10 px-2.5 py-1 rounded-full border border-brand-blue/20">
              Career Pipeline
            </span>
            <h2 className="text-2xl md:text-4xl font-black tracking-tight mt-2">
              Microsoft 365 Professional Pathway
            </h2>
          </div>
          <p className="text-xs md:text-sm font-medium text-slate-500 max-w-md md:text-right">
            The clean, high-impact pipeline designed to transition students directly into industry-ready cloud administrators.
          </p>
        </div>

        {/* Horizontal Container for Desktop / Condensed Grid for Mobile */}
        <div className="relative">
          {/* Subtle connecting background line on desktop */}
          <div className="absolute top-[26px] left-0 right-0 h-[2px] bg-linear-to-r from-blue-500 via-purple-500 to-rose-500 opacity-20 hidden md:block" />

          <div className="flex flex-col md:flex-row gap-6 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-slate-200 dark:scrollbar-thumb-slate-800 snap-x">
            {STAGES.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="w-full md:w-[280px] shrink-0 snap-start"
                >
                  {/* Icon Node Indicator */}
                  <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 relative z-20 mb-4 shadow-xs mx-auto">
                    <Icon className="w-5 h-5 text-slate-700 dark:text-slate-300" />
                  </div>

                  <div 
                    className="glass-card p-5 rounded-2xl relative group min-h-[220px] flex flex-col justify-between border border-slate-200/50 dark:border-slate-800/50"
                    style={{ boxShadow: `0 20px 40px -15px ${item.glow}` }}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className={`text-[9px] font-black px-2 py-0.5 rounded bg-linear-to-r ${item.color} text-white uppercase tracking-wider`}>
                          {item.stage}
                        </span>
                        <div className="flex items-center gap-1 text-[10px] font-bold text-slate-500 dark:text-slate-400">
                          <Clock className="w-3 h-3" />
                          {item.duration}
                        </div>
                      </div>

                      <h3 className="text-base font-bold leading-tight mb-3 text-slate-900 dark:text-white">
                        {item.title}
                      </h3>
                      
                      <ul className="space-y-1.5">
                        {item.points.map((point, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-1.5 text-xs font-medium text-slate-600 dark:text-slate-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}