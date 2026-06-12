"use client";

import { motion } from "framer-motion";
import { Layers, Network, Terminal, Award, Clock, LucideIcon, TrendingUp } from "lucide-react";

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
    duration: "1 Day",
    description: "Fast-track prep for MS-900 covering cloud basics, Microsoft 365 services, security, compliance, and licensing essentials.",
    highlights: ["Fast-track prep for MS-900", "cloud basics", "Microsoft 365 services", "security", "compliance", "licensing essentials"],
    color: "from-purple-500 to-pink-500",
    glow: "rgba(219, 39, 119, 0.15)"
  },
  {
    icon: Award,
    stage: "Stage 04",
    title: "Microsoft 365 Administrator (MS-102)",
    duration: "4 Days",
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
    <section className="py-16 md:py-20 relative overflow-hidden bg-slate-50 dark:bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading: Centered on Mobile & Tablet, Left-aligned on Desktop */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 items-center text-center lg:text-left lg:items-start">
          <div className="flex flex-col items-center lg:items-start">
            <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-black uppercase tracking-[0.18em] text-brand-blue bg-brand-blue/10 px-3 py-1.5 rounded-full border border-brand-blue/20">
              <TrendingUp className="w-3.5 h-3.5" /> Career Pipeline
            </span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mt-3 text-slate-900 dark:text-white">
              Microsoft 365 Professional Pathway
            </h2>
          </div>
        </div>

        {/* Responsive Timeline Container Wrapper */}
        <div className="relative pl-2 lg:pl-0">
          
          {/* Vertical Track Line: Set to perfectly slice down the center of the 48px box nodes */}
          <div className="absolute left-[23px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-blue-500 via-purple-500 to-rose-500 opacity-20 lg:hidden" />
          
          {/* Horizontal Track Line: Formatted along the middle desktop axis of the blocks */}
          <div className="absolute top-[25px] left-12 right-12 h-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-rose-500 opacity-20 hidden lg:block" />

          {/* Dynamic Flex/Grid Control Matrix */}
          <div className="flex flex-col gap-10 lg:grid lg:grid-cols-4 lg:gap-6 lg:items-stretch">
            {STAGES.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative flex flex-col pl-16 lg:pl-0 group"
                >
                  {/* Premium Box Icon Indicator Asset Node */}
                  <div className="absolute left-0 top-1 lg:relative lg:top-0 lg:left-0 flex-shrink-0 flex items-center justify-center p-3 rounded-xl bg-slate-950 border border-slate-800 z-20 shadow-sm lg:mx-auto mb-5 transition-transform duration-300 group-hover:scale-110 w-12 h-12">
                    <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${item.color} opacity-10`} />
                    <Icon className="w-5 h-5 text-slate-200 relative z-10" />
                  </div>

                  {/* Premium Dark Card Matrix */}
                  <div 
                    className="w-full h-full p-5 sm:p-6 rounded-[1.5rem] sm:rounded-[2rem] border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 dark:from-slate-900/90 dark:to-slate-950/90 backdrop-blur-md transition-all duration-300 hover:-translate-y-1"
                    style={{ boxShadow: `0 20px 40px -15px ${item.glow}` }}
                  >
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className={`text-[10px] font-black px-2.5 py-1 rounded bg-gradient-to-r ${item.color} text-white uppercase tracking-wider`}>
                        {item.stage}
                      </span>
                      <div className="flex items-center gap-1.5 text-xs font-bold text-slate-400">
                        <Clock className="w-3.5 h-3.5" />
                        {item.duration}
                      </div>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold leading-snug mb-3 text-white">
                      {item.title}
                    </h3>
                    
                    <p className="text-xs sm:text-sm font-medium leading-relaxed text-slate-300 text-left lg:text-justify">
                      {renderHighlightedText(item.description, item.highlights)}
                    </p>
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