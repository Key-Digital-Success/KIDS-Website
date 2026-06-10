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
    description: "Learn core Microsoft 365 skills like Word, Excel, PowerPoint, Outlook, Teams, OneDrive, and SharePoint. Wrap it up with a hands-on mini project built for real-world productivity.",
    highlights: ["core Microsoft 365 skills", "Word", "Excel", "PowerPoint", "Outlook", "Teams", "OneDrive", "SharePoint", "hands-on mini project", "real-world productivity"],
    color: "from-blue-500 to-cyan-500",
    glow: "rgba(37, 99, 235, 0.15)"
  },
  {
    icon: Network,
    stage: "Stage 02",
    title: "Advanced Microsoft 365 Certification",
    duration: "80 Hours",
    description: "Upgrade your skills with advanced Excel, automation, and Microsoft 365 tools. Also learn MFA, DLP, and modern security basics used in real workplaces.",
    highlights: ["advanced Excel", "automation", "Microsoft 365 tools", "MFA", "DLP", "modern security basics", "real workplaces"],
    color: "from-indigo-500 to-purple-500",
    glow: "rgba(124, 58, 237, 0.15)"
  },
  {
    icon: Terminal,
    stage: "Stage 03",
    title: "Microsoft 365 Fundamentals (MS-900)",
    duration: "1 Day Prep",
    description: "Fast-track prep for MS-900 covering cloud basics, Microsoft 365 services, security, compliance, and licensing essentials.",
    highlights: ["Fast-track prep for MS-900", "cloud basics", "Microsoft 365 services", "security", "compliance", "licensing essentials"],
    color: "from-purple-500 to-pink-500",
    glow: "rgba(219, 39, 119, 0.15)"
  },
  {
    icon: Award,
    stage: "Stage 04",
    title: "Microsoft 365 Administrator (MS-102)",
    duration: "4 Days Bootcamp",
    description: "Hands-on admin training for Microsoft 365 including identity management, tenant setup, and cloud security—built for real enterprise roles.",
    highlights: ["Hands-on admin training", "Microsoft 365", "identity management", "tenant setup", "cloud security", "real enterprise roles"],
    color: "from-pink-500 to-rose-500",
    glow: "rgba(244, 63, 94, 0.15)"
  }
];

export default function TimelineRoadmap() {
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
    <section className="py-20 relative overflow-hidden bg-slate-50 dark:bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-normal uppercase tracking-widest text-brand-blue bg-brand-blue/10 px-3 py-1.5 rounded-full border border-brand-blue/20">
              Career Pipeline
            </span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mt-3 text-slate-900 dark:text-white">
              Microsoft 365 Professional Pathway
            </h2>
          </div>
          <p 
            className="text-base font-medium text-slate-600 dark:text-slate-400 max-w-lg md:text-right text-justify"
            style={{ textJustify: "inter-word" }}
          >
            The clean, high-impact pipeline designed to transition students directly into industry-ready cloud administrators.
          </p>
        </div>

        {/* 4-Stage Grid Area */}
        <div className="relative">
          <div className="absolute top-[28px] left-4 right-4 h-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-rose-500 opacity-20 hidden md:block" />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {STAGES.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="w-full flex flex-col justify-between"
                >
                  {/* Icon Indicator */}
                  <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 relative z-20 mb-6 shadow-sm mx-auto transition-transform">
                    <Icon className="w-5 h-5 text-slate-700 dark:text-slate-300" />
                  </div>

                  {/* Premium Dark Card Matrix */}
                  <div 
                    className="p-6 rounded-[2rem] relative group min-h-[300px] flex flex-col justify-between border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 dark:from-slate-900/90 dark:to-slate-950/90 backdrop-blur-md transition-transform duration-300 hover:-translate-y-1"
                    style={{ boxShadow: `0 20px 40px -15px ${item.glow}` }}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-4">
                        <span className={`text-[10px] font-black px-2.5 py-1 rounded bg-gradient-to-r ${item.color} text-white uppercase tracking-wider`}>
                          {item.stage}
                        </span>
                        <div className="flex items-center gap-1.5 text-xs font-bold text-slate-400">
                          <Clock className="w-3.5 h-3.5" />
                          {item.duration}
                        </div>
                      </div>

                      <h3 className="text-lg font-bold leading-snug mb-3 text-white">
                        {item.title}
                      </h3>
                      
                      <p 
                        className="text-sm font-medium leading-relaxed text-slate-300 text-justify"
                        style={{ textJustify: "inter-word" }}
                      >
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