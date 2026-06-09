"use client";

import { motion } from "framer-motion";
import { Layers, Terminal, Globe, ShieldCheck, UserCheck } from "lucide-react";

const m365Courses = [
  {
    stage: "Stage 01",
    title: "Introduction to Microsoft 365 Architecture",
    duration: "60 Hours",
    topics: ["Microsoft Word", "Excel Dashboards", "PowerPoint Layouts", "Outlook Logic", "Teams Integration", "OneDrive Structure", "SharePoint Core", "Computer basics", "File management", "Cloud storage", "Digital safety"]
  },
  {
    stage: "Stage 02",
    title: "Advanced Enterprise Microsoft 365 Administration",
    duration: "80 Hours",
    topics: ["M365 Licensing Models", "Excel Pivot-Table Automation", "Power BI Data Engineering Overview", "SharePoint Security Governance", "MFA Authentication Layers", "Data Loss Prevention (DLP) Policies", "Teams Infrastructure Administration"]
  }
];

const certifications = [
  { code: "MS-900", title: "Microsoft 365 Fundamentals Certification", duration: "1 Day Prep", desc: "Entry-level certification covering foundational cloud concepts, Microsoft 365 services, core security, compliance options, and identity pricing matrices." },
  { code: "MS-102", title: "Microsoft 365 Administrator Certification", duration: "4 Days Bootcamp", desc: "Associate-level expert certification focused explicitly on enterprise tenant deployment, managing identities, security configurations, and application compliance synchronization." }
];

export default function ProgramsPage() {
  return (
    <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-smooth">
      
      {/* Title Header */}
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-slate-950 dark:text-white">
          Educational Programs Ecosystem
        </h1>
        <p className="text-base font-bold text-slate-700 dark:text-slate-300 max-w-xl mx-auto">
          Professional cloud alignment and global language frameworks certified for modern milestones.
        </p>
      </div>

      {/* 🟦 SECTION: MICROSOFT 365 PROFESSIONAL PROGRAM */}
      <div id="m365" className="mb-28 scroll-mt-24">
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-6 md:p-8 rounded-3xl bg-blue-100/40 dark:bg-brand-card-dark/20 border border-blue-200/60 dark:border-slate-800 mb-12 backdrop-blur-xs"
        >
          <div className="flex items-center gap-2 text-xs font-black text-brand-blue uppercase tracking-widest mb-3">
            <ShieldCheck className="w-4 h-4" /> Thakral Global Learning (TGL) Curriculums
          </div>
          <p className="text-sm md:text-base font-bold text-slate-800 dark:text-slate-300 leading-relaxed">
            Our Microsoft 365 pathway targets direct cloud environment operational experience. Powered through enterprise alignment models with TGL, students gain continuous tactical access to official labs and live deployment scenarios.
          </p>
        </motion.div>

        <div className="mb-10">
          <div className="flex items-center gap-3 mb-2">
            <Layers className="w-6 h-6 text-brand-blue" />
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-950 dark:text-white">Microsoft 365 Professional Program Pipeline</h2>
          </div>
          <div className="w-28 h-1 bg-brand-blue rounded-full" />
        </div>

        {/* Optimized Contrast Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {m365Courses.map((course, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, scale: 0.98, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6, boxShadow: "0 30px 60px -15px rgba(29,78,216,0.1)" }}
              className="glass-card p-8 rounded-3xl flex flex-col justify-between transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-black text-brand-blue uppercase tracking-widest bg-blue-100 dark:bg-brand-blue/20 px-3 py-1.5 rounded-xl border border-blue-300/80 dark:border-brand-blue/30">
                    {course.stage}
                  </span>
                  <span className="text-xs font-black text-slate-700 dark:text-slate-300 bg-slate-200/60 dark:bg-slate-800 px-3 py-1.5 rounded-xl border border-slate-300/40 dark:border-slate-700/40">
                    {course.duration}
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-black mb-4 text-slate-950 dark:text-white leading-snug">{course.title}</h3>
                
                {/* Contrast tags utilizing concrete slate borders instead of transparent bleed */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {course.topics.map((topic, i) => (
                    <span key={i} className="text-xs bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 px-3 py-2 rounded-xl font-bold border border-slate-300 dark:border-slate-700/50 shadow-xs">
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
              <motion.a
                whileHover={{ scale: 1.02, backgroundColor: "#1e40af", color: "#ffffff" }}
                whileTap={{ scale: 0.98 }}
                href={`https://wa.me/94771234567?text=M365%20Info%3A%20${encodeURIComponent(course.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-4 bg-brand-blue text-white text-sm font-extrabold rounded-2xl transition-all block shadow-md shadow-brand-blue/10"
              >
                Get Syllabus Details via WhatsApp
              </motion.a>
            </motion.div>
          ))}
        </div>

        {/* Certifications Subsections Layer */}
        <h3 className="text-xs font-black mb-6 text-slate-500 dark:text-slate-400 uppercase tracking-widest flex items-center gap-2">
          <Terminal className="w-4 h-4 text-brand-purple" /> Certification Pathways
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {certifications.map((cert, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-6 rounded-3xl border-l-4 border-l-brand-purple"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-black text-brand-purple tracking-widest bg-purple-100 dark:bg-brand-purple/20 px-3 py-1 rounded-xl border border-purple-300 dark:border-brand-purple/30">{cert.code}</span>
                <span className="text-xs font-bold text-slate-800 dark:text-slate-400 bg-slate-200/60 dark:bg-slate-800 px-2.5 py-1 rounded-md">{cert.duration}</span>
              </div>
              <h4 className="font-extrabold mb-2 text-base text-slate-950 dark:text-slate-100">{cert.title}</h4>
              <p className="text-sm font-medium text-slate-700 dark:text-slate-300 leading-relaxed">{cert.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="p-6 rounded-3xl border border-dashed border-brand-blue/40 bg-blue-50/40 dark:bg-brand-blue/5 flex items-center gap-4">
          <UserCheck className="w-6 h-6 text-brand-blue shrink-0" />
          <div>
            <h4 className="text-sm font-bold text-slate-950 dark:text-slate-200">Target Industry Alignment Blueprint</h4>
            <p className="text-xs font-bold text-slate-700 dark:text-slate-400 mt-0.5">Completing all phases directly prepares candidates for technical vetting as a **Microsoft 365 Enterprise Administrator** role layout.</p>
          </div>
        </motion.div>
      </div>

      {/* 🟨 SECTION: CAMBRIDGE ENGLISH PROGRAMS */}
      <div id="cambridge" className="scroll-mt-24 pt-12 border-t border-slate-200 dark:border-slate-800">
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-2">
            <Globe className="w-6 h-6 text-emerald-600" />
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-950 dark:text-white">Cambridge English Programs</h2>
          </div>
          <div className="w-28 h-1 bg-emerald-600 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Cambridge YLE Block */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 rounded-3xl flex flex-col justify-between"
          >
            <div>
              <div className="mb-4">
                <span className="px-3 py-1.5 rounded-xl text-xs font-black bg-emerald-100 dark:bg-emerald-500/20 text-emerald-800 dark:text-emerald-400 uppercase tracking-widest border border-emerald-300 dark:border-emerald-500/30">Cambridge YLE</span>
              </div>
              <h3 className="text-2xl font-black mb-3 text-slate-950 dark:text-white">Young Learners English (YLE)</h3>
              <p className="text-sm font-bold text-slate-700 dark:text-slate-300 mb-8 leading-relaxed">
                Focuses heavily on constructing a robust, native basic English foundation for young learners across structural primary development layers.
              </p>
              
              <div className="border-t border-slate-200 dark:border-slate-800/80 pt-6 mb-8">
                <h4 className="text-xs font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-4">Included Exam Tracks</h4>
                <div className="grid grid-cols-3 gap-3 text-center text-xs font-black mb-6">
                  {["Starters", "Movers", "Flyers"].map((lvl) => (
                    <div key={lvl} className="bg-slate-100 dark:bg-slate-800/60 p-3 rounded-xl border border-slate-300 dark:border-slate-700/40 text-slate-900 dark:text-slate-200 font-extrabold shadow-xs">
                      {lvl}
                    </div>
                  ))}
                </div>
                <h4 className="text-xs font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-2">Core Proficiency Focus</h4>
                <p className="text-sm font-bold text-slate-700 dark:text-slate-400 leading-relaxed">Reading, writing, speaking, and immersive interactive listening skill methodologies.</p>
              </div>
            </div>

            <motion.a 
              whileHover={{ scale: 1.02, backgroundColor: "#046648" }}
              whileTap={{ scale: 0.98 }}
              href="https://wa.me/94771234567?text=Cambridge%20YLE%20Admissions"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-4 bg-emerald-600 text-white text-sm font-extrabold rounded-2xl shadow-lg shadow-emerald-600/10 transition-all cursor-pointer"
            >
              Inquire About YLE Batches
            </motion.a>
          </motion.div>

          {/* Cambridge Assessments Block */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 rounded-3xl flex flex-col justify-between"
          >
            <div>
              <div className="mb-4">
                <span className="px-3 py-1.5 rounded-xl text-xs font-black bg-purple-100 dark:bg-brand-purple/20 text-brand-purple dark:text-purple-400 uppercase tracking-widest border border-purple-300 dark:border-brand-purple/30">Assessments Node</span>
              </div>
              <h3 className="text-2xl font-black mb-3 text-slate-950 dark:text-white">Cambridge English Assessments</h3>
              <p className="text-sm font-bold text-slate-700 dark:text-slate-300 mb-8 leading-relaxed">
                Rigorous preparation modules engineered explicitly for high-level academic development, checking and validating compliance with global benchmarks.
              </p>

              <div className="border-t border-slate-200 dark:border-slate-800/80 pt-6 mb-8">
                <h4 className="text-xs font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-4">Included Advanced Qualifications</h4>
                <div className="grid grid-cols-3 gap-3 text-center text-xs font-black mb-6">
                  {["KET", "PET", "FCE"].map((lvl) => (
                    <div key={lvl} className="bg-slate-100 dark:bg-slate-800/60 p-3 rounded-xl border border-slate-300 dark:border-slate-700/40 text-slate-900 dark:text-slate-200 font-extrabold shadow-xs">
                      {lvl}
                    </div>
                  ))}
                </div>
                <h4 className="text-xs font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-2">Core Proficiency Focus</h4>
                <p className="text-sm font-bold text-slate-700 dark:text-slate-400 leading-relaxed">Academic language structuring, advanced syntactic flow, and official international test metrics.</p>
              </div>
            </div>

            <motion.a 
              whileHover={{ scale: 1.02, backgroundColor: "#5b21b6" }}
              whileTap={{ scale: 0.98 }}
              href="https://wa.me/94771234567?text=Cambridge%20Assessments%20Admissions"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-4 bg-brand-purple text-white text-sm font-extrabold rounded-2xl shadow-lg shadow-brand-purple/10 transition-all cursor-pointer"
            >
              Inquire About Assessment Frameworks
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}