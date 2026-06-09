"use client";

import { motion } from "framer-motion";
import { Layers, Network, Terminal, Award, Clock, CheckCircle2 } from "lucide-react";

const stages = [
  {
    icon: Layers,
    stage: "Stage 01",
    title: "Basics Architecture",
    duration: "60 Hours",
    points: [
      "M365 workflow automation foundations",
      "Computer file architecture interfaces",
      "Core cloud security protocols"
    ],
    color: "from-blue-500 to-cyan-500",
    glow: "rgba(37, 99, 235, 0.12)"
  },
  {
    icon: Network,
    stage: "Stage 02",
    title: "Enterprise Operation",
    duration: "80 Hours",
    points: [
      "Advanced data orchestration via Power BI",
      "Tenant compliance configurations",
      "Complex analytic infrastructure frameworks"
    ],
    color: "from-indigo-500 to-purple-500",
    glow: "rgba(124, 58, 237, 0.12)"
  },
  {
    icon: Terminal,
    stage: "MS-900",
    title: "Fundamentals Validation",
    duration: "1 Day Preparation",
    points: [
      "Official cloud metrics review",
      "Core licensing models evaluation",
      "Basic tenant security architectures"
    ],
    color: "from-purple-500 to-pink-500",
    glow: "rgba(219, 39, 119, 0.12)"
  },
  {
    icon: Award,
    stage: "MS-102",
    title: "Cloud Administrator",
    duration: "4 Days Bootcamp",
    points: [
      "Tenant-level endpoint deployments",
      "Infrastructure threat mitigation setup",
      "Global access identity governance"
    ],
    color: "from-pink-500 to-rose-500",
    glow: "rgba(244, 63, 94, 0.12)"
  }
];

export default function TimelineRoadmap() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] glow-gradient opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-widest text-brand-blue bg-brand-blue/10 dark:bg-brand-blue/20 px-3 py-1.5 rounded-full border border-brand-blue/20"
          >
            Career Pipeline
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black tracking-tight mt-4"
          >
            Microsoft 365 Professional Pathway
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-4 text-sm md:text-base font-medium"
          >
            The clean, high-impact pipeline designed to transition students directly into industry-ready cloud administrators.
          </motion.p>
        </div>

        {/* Timeline Structural Track Container */}
        <div className="relative max-w-5xl mx-auto">
          
          {/* Central Connecting Track (Desktop) */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-[2px] h-full bg-gradient-to-b from-brand-blue via-brand-purple to-rose-500 hidden md:block opacity-20" />
          
          {/* Side Connecting Track (Mobile) */}
          <div className="absolute left-6 top-2 bottom-2 w-[2px] bg-gradient-to-b from-brand-blue via-brand-purple to-rose-500 md:hidden opacity-30" />

          <div className="space-y-16 md:space-y-20">
            {stages.map((stage, idx) => {
              const Icon = stage.icon;
              const isEven = idx % 2 === 0;

              return (
                <div key={idx} className={`flex flex-col md:flex-row items-center relative ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Outer Spacer Node for Alignment Layout */}
                  <div className="w-full md:w-1/2 hidden md:block" />

                  {/* Node Badges Centered over Desktop Central Line */}
                  <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 z-20 flex items-center justify-center">
                    <motion.div 
                      /* FIXED: Removed heavy spring stiffness and artificial index delays */
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="w-12 h-12 rounded-2xl bg-slate-100/80 dark:bg-[#111827] border border-slate-200 dark:border-slate-800/80 flex items-center justify-center shadow-lg group-hover:border-transparent transition-all duration-300"
                    >
                      <Icon className="w-5 h-5 text-slate-800 dark:text-slate-200" />
                    </motion.div>
                  </div>

                  {/* Balanced Spacious Content Cards */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? -80 : 80, y: 10 }}
                    whileInView={{ opacity: 1, x: isEven ? -24 : 24, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full md:w-1/2 pl-16 pr-2 md:px-8"
                  >
                    <div 
                      className="glass-card p-6 md:p-8 rounded-[2.25rem] relative group min-h-[290px] flex flex-col justify-between"
                      style={{ boxShadow: `0 35px 70px -15px ${stage.glow}` }}
                    >
                      {/* Gradient Hover Border Effect */}
                      <div className={`absolute inset-0 rounded-[2.25rem] border border-transparent bg-gradient-to-br ${stage.color} [mask-image:linear-gradient(#fff_0_0)_content-box,#fff] opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />

                      {/* Header Segment */}
                      <div>
                        <div className="flex items-center justify-between gap-3 mb-5">
                          <span className={`text-[10px] font-black px-3 py-1 rounded-lg uppercase tracking-widest bg-gradient-to-r ${stage.color} text-white shadow-xs`}>
                            {stage.stage}
                          </span>
                          
                          <div className="flex items-center gap-1 text-xs font-bold text-slate-500 dark:text-slate-400 bg-slate-200/60 dark:bg-slate-800/60 px-2.5 py-1 rounded-lg border border-slate-300/40 dark:border-slate-700/40">
                            <Clock className="w-3.5 h-3.5" />
                            {stage.duration}
                          </div>
                        </div>

                        <h3 className="text-xl font-extrabold leading-tight mb-5">
                          {stage.title}
                        </h3>
                        
                        {/* Short Scan-Friendly Bullet Points */}
                        <ul className="space-y-2.5">
                          {stage.points.map((point, pIdx) => (
                            <li key={pIdx} className="flex items-start gap-2 text-sm font-semibold leading-snug">
                              <CheckCircle2 className="w-4 h-4 text-brand-blue dark:text-slate-500 shrink-0 mt-0.5" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                    </div>
                  </motion.div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}