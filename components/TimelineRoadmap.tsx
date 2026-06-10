"use client";

import { motion } from "framer-motion";
import { Layers, Network, Terminal, Award, Clock, LucideIcon } from "lucide-react";

interface Stage {
  icon: LucideIcon;
  stage: string;
  title: string;
  duration: string;
  description: string;
  highlights: string[];
  color: string;
  glow: string;
}

const STAGES: Stage[] = [
  {
    icon: Layers,
    stage: "Stage 01",
    title: "Introduction to Microsoft 365 Certification",
    duration: "60 Hours",
    description: "Learn essential Microsoft 365 workplace skills including Word, Excel, PowerPoint, Outlook, Teams, OneDrive, and SharePoint. The stage concludes with a practical mini-project to demonstrate real-world productivity skills.",
    highlights: ["essential Microsoft 365", "Word", "Excel", "PowerPoint", "Outlook", "Teams", "OneDrive", "SharePoint", "mini-project", "real-world productivity skills"],
    color: "from-blue-500 to-cyan-500",
    glow: "rgba(37, 99, 235, 0.15)"
  },
  {
    icon: Network,
    stage: "Stage 02",
    title: "Advanced Microsoft 365 Certification",
    duration: "80 Hours",
    description: "Master advanced Excel, workflow automation, productivity tools, and Microsoft 365 business solutions. Students also gain practical knowledge in MFA, DLP, and modern security awareness practices.",
    highlights: ["advanced Excel", "workflow automation", "productivity tools", "Microsoft 365 business solutions", "MFA", "DLP", "modern security awareness practices"],
    color: "from-indigo-500 to-purple-500",
    glow: "rgba(124, 58, 237, 0.15)"
  },
  {
    icon: Terminal,
    stage: "Stage 03",
    title: "Microsoft 365 Fundamentals (MS-900)",
    duration: "1 Day Prep",
    description: "Prepare for the globally recognized MS-900 certification covering Microsoft 365 cloud concepts, services, security, compliance, and licensing fundamentals.",
    highlights: ["globally recognized MS-900 certification", "Microsoft 365 cloud concepts", "services", "security", "compliance", "licensing fundamentals"],
    color: "from-purple-500 to-pink-500",
    glow: "rgba(219, 39, 119, 0.15)"
  },
  {
    icon: Award,
    stage: "Stage 04",
    title: "Microsoft 365 Administrator (MS-102)",
    duration: "4 Days Bootcamp",
    description: "Build enterprise-level Microsoft 365 administration skills including identity management, tenant operations, and cloud security. This stage prepares learners for Microsoft 365 Administrator career roles.",
    highlights: ["enterprise-level Microsoft 365 administration skills", "identity management", "tenant operations", "cloud security", "Microsoft 365 Administrator career roles"],
    color: "from-pink-500 to-rose-500",
    glow: "rgba(244, 63, 94, 0.15)"
  }
];

export default function TimelineRoadmap() {
  // Parsing engine using sorted lengths to highlight exact phrases first
  const renderHighlightedText = (text: string, highlights: string[]) => {
    if (!highlights.length) return text;

    const sortedHighlights = [...highlights].sort((a, b) => b.length - a.length);
    const regexPattern = new RegExp(`\\b(${sortedHighlights.map(h => h.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')).join('|')})\\b`, 'gi');
    
    const parts = text.split(regexPattern);

    return parts.map((part, index) => {
      const isMatch = sortedHighlights.some(h => h.toLowerCase() === part.toLowerCase());
      
      if (isMatch) {
        return (
          <strong 
            key={index} 
            // Cards are dark now, so text remains white across both dark/light viewports
            className="font-bold text-white"
          >
            {part}
          </strong>
        );
      }
      return <span key={index} className="text-slate-300">{part}</span>;
    });
  };

  return (
    <section className="py-16 relative overflow-hidden bg-slate-50 dark:bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-brand-blue bg-brand-blue/10 px-2.5 py-1 rounded-full border border-brand-blue/20">
              Career Pipeline
            </span>
            <h2 className="text-2xl md:text-4xl font-black tracking-tight mt-2 text-slate-900 dark:text-white">
              Microsoft 365 Professional Pathway
            </h2>
          </div>
          <p className="text-xs md:text-sm font-medium text-slate-500 dark:text-slate-400 max-w-md md:text-right">
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
                  <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 relative z-20 mb-4 shadow-xs mx-auto">
                    <Icon className="w-5 h-5 text-slate-700 dark:text-slate-300" />
                  </div>

                  {/* Gradient Card Body: Always Dark slate in light theme, adapts dynamically in dark theme */}
                  <div 
                    className="p-5 rounded-2xl relative group min-h-[260px] flex flex-col justify-between border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 dark:from-slate-900/90 dark:to-slate-950/90 backdrop-blur-md"
                    style={{ boxShadow: `0 20px 40px -15px ${item.glow}` }}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className={`text-[9px] font-black px-2 py-0.5 rounded bg-linear-to-r ${item.color} text-white uppercase tracking-wider`}>
                          {item.stage}
                        </span>
                        <div className="flex items-center gap-1 text-[10px] font-bold text-slate-400">
                          <Clock className="w-3 h-3" />
                          {item.duration}
                        </div>
                      </div>

                      <h3 className="text-base font-bold leading-tight mb-3 text-white">
                        {item.title}
                      </h3>
                      
                      <p className="text-xs font-medium leading-relaxed">
                        {renderHighlightedText(item.description, item.highlights)}
                      </p>
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