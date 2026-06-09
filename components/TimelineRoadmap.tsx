"use client";

import { motion } from "framer-motion";
import { Terminal, Milestone, Layers, Network, Award } from "lucide-react";

const stages = [
  {
    icon: Layers,
    title: "Stage 01: Basics Architecture",
    duration: "60 Hours",
    desc: "Foundational Microsoft 365 workflow automation and cloud architecture interfaces."
  },
  {
    icon: Network,
    title: "Stage 02: Enterprise Operation",
    duration: "80 Hours",
    desc: "Analytical complex frameworks, data orchestration dashboards, and tenant security structures."
  },
  {
    icon: Terminal,
    title: "MS-900 Core",
    duration: "1 Day Exam Preparation",
    desc: "Official Microsoft 365 Fundamental validation architecture review."
  },
  {
    icon: Award,
    title: "MS-102 Cloud Admin",
    duration: "4 Days Intensive Bootcamp",
    desc: "Enterprise Tenant level Endpoint, Identity deployment, and strategic administrative integration."
  }
];

export default function TimelineRoadmap() {
  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Microsoft 365 Professional Pathway</h2>
          <p className="mt-4 text-slate-500 dark:text-slate-400">The clear operational pipeline engineered to transition students directly into strategic cloud administrators.</p>
        </div>

        {/* Stack Vertical / Adaptive Layout Frame */}
        <div className="relative border-l-2 border-brand-blue/30 dark:border-brand-blue/10 ml-4 md:ml-6 space-y-12 max-w-4xl mx-auto">
          {stages.map((stage, idx) => {
            const Icon = stage.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative pl-8 sm:pl-10 group"
              >
                {/* Timeline Connector Bulb */}
                <div className="absolute -left-[13px] top-1 bg-white dark:bg-brand-charcoal border-2 border-brand-blue w-6 h-6 rounded-full flex items-center justify-center shadow-md group-hover:bg-brand-blue transition-colors duration-300">
                  <div className="w-1.5 h-1.5 bg-brand-blue group-hover:bg-white rounded-full" />
                </div>

                <div className="glass-card p-6 rounded-2xl hover:border-brand-blue/40 transition-all duration-300 relative group-hover:-translate-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-brand-blue/10 text-brand-blue">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">{stage.title}</h3>
                    </div>
                    <span className="inline-block text-xs font-semibold px-2.5 py-1 rounded-full bg-brand-purple/10 text-brand-purple w-max">
                      {stage.duration}
                    </span>
                  </div>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{stage.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}