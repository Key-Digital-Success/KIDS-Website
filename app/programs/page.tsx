"use client";

import React, { useState, useRef, useEffect, ChangeEvent, FormEvent } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { 
  Layers, 
  Terminal, 
  Globe, 
  ShieldCheck, 
  UserCheck, 
  ChevronRight, 
  CheckCircle2, 
  ArrowRight,
  HelpCircle,
  ChevronDown,
  Send,
  Laptop,
  BookOpen,
  Sparkles,
  Award,
  Cpu,
  GraduationCap,
  FileCheck,
  ShieldAlert
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

// --- CORE DATA CONFIGURATIONS ---
interface Course {
  stage: string;
  title: string;
  duration: string;
  tagline: string;
  description: string;
  topics: string[];
  certHighlight: string;
  isOfficialBadge: boolean;
}

const m365Courses: Course[] = [
  {
    stage: "Stage 01",
    title: "Introduction to Microsoft 365 Certification",
    duration: "60 Hours",
    tagline: "Build foundational digital workplace competence and essential computing layers.",
    description: "Master everyday application orchestration, structured cloud workspaces, dynamic file security directories, and general operational cloud paradigms.",
    topics: [
      "Microsoft Word", "Excel Dashboards", "PowerPoint Layouts", "Outlook Logic", 
      "Teams Integration", "OneDrive Structure", "SharePoint Core", "Computer basics", 
      "File management", "Cloud storage", "Digital safety"
    ],
    certHighlight: "Certificate given by Thakral Global Learning with Microsoft Logo",
    isOfficialBadge: false
  },
  {
    stage: "Stage 02",
    title: "Advanced Microsoft 365 Certification",
    duration: "80 Hours",
    tagline: "Architect, administer, and secure complex enterprise cloud environments.",
    description: "Transition into high-level organizational cloud engineering. Manage custom enterprise licensing models, system integrations, and advanced governance rules.",
    topics: [
      "M365 Licensing Models", "Excel Pivot-Table Automation", "Power BI Data Engineering Overview", 
      "SharePoint Security Governance", "MFA Authentication Layers", "Data Loss Prevention (DLP) Policies", 
      "Teams Infrastructure Administration"
    ],
    certHighlight: "Certificate given by Thakral Global Learning with Microsoft Logo",
    isOfficialBadge: false
  }
];

const milestoneCourses: Course[] = [
  {
    stage: "Stage 03",
    title: "Microsoft 365 Fundamental Certification",
    duration: "1 Day",
    tagline: "Validate core structural paradigms across fundamental cloud tenant capabilities.",
    description: "Entry-level certification covering cloud concepts, Microsoft 365 services, security, and compliance",
    topics: [
      "Cloud Concepts", "Core M365 Services", "Security & Compliance Specs", "M365 Pricing Metrics",
      "Tenant Lifecycles", "Support Models"
    ],
    certHighlight: "Official Certificate from Microsoft & Verified Digital Badge",
    isOfficialBadge: true
  },
  {
    stage: "Stage 04",
    title: "Microsoft 365 Administrator Certification",
    duration: "4 Days",
    tagline: "The absolute pinnacle capstone achievement for modern cloud enterprise engineers.",
    description: "Associate-level certification focused on Microsoft 365 administration, identity management, and security",
    topics: [
      "M365 Tenant Deployment", "Identity Synchronization", "Microsoft Entra ID Rules", "Access Management",
      "Advanced Security Layouts", "Compliance Infrastructure"
    ],
    certHighlight: "Official Certificate from Microsoft & Verified Digital Badge",
    isOfficialBadge: true
  }
];

const targetDemographics = [
  { label: "School Students", description: "Cultivate high-end technical credentials early." },
  { label: "School Leavers", description: "Accelerate your path into technical industries." },
  { label: "Absolute Beginners", description: "No prior IT experience required. We guide you from step zero." },
  { label: "University Students", description: "Bridge the gap between theoretical models and live workflows." },
  { label: "Working Professionals", description: "Upskill to modern cloud-native administration environments." }
];

const careerPaths = [
  { role: "M365 Enterprise Administrator", requirement: "MS-102 Certified" },
  { role: "Cloud Support Analyst", requirement: "MS-900 Certified" },
  { role: "IT Systems Engineer", requirement: "Advanced Stage 2" },
  { role: "Modern Workspace Specialist", requirement: "Stage 1 + 2 Complete" }
];

// --- FRAMER MOTION ORCHESTRATION ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
  }
};

const floatAnimation: Variants = {
  initial: { y: 0, x: 0, rotate: 0 },
  animate: (custom: { y: number[]; x: number[]; rotate?: number[]; duration: number }) => ({
    y: custom.y,
    x: custom.x,
    rotate: custom.rotate || 0,
    transition: {
      duration: custom.duration,
      repeat: Infinity,
      repeatType: "reverse" as const,
      ease: "easeInOut"
    }
  })
};

// --- CUSTOM DROPDOWN COMPONENT ---
function FormDropdown({
  placeholder,
  options,
  value,
  onChange,
}: {
  placeholder: string;
  options: { value: string; label: string }[];
  value: string;
  onChange: (val: string) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const activeOption = options.find(o => o.value === value);

  return (
    <div ref={dropdownRef} className="relative w-full">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-black border border-blue-900/40 p-4 sm:p-5 rounded-2xl text-left text-sm sm:text-base flex justify-between items-center focus:ring-2 focus:ring-amber-400 outline-none transition-all duration-300 font-semibold"
      >
        <span className={activeOption ? "text-white" : "text-slate-400"}>
          {activeOption ? activeOption.label : placeholder}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-slate-400 shrink-0"
        >
          <ChevronDown className="w-4 h-4 sm:w-5 h-5" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute z-50 w-full mt-2 bg-[#060D1A] border border-blue-900/60 rounded-2xl overflow-hidden shadow-2xl max-h-60 overflow-y-auto"
          >
            {options.map((option) => (
              <li key={option.value}>
                <button
                  type="button"
                  onClick={() => {
                    onChange(option.value);
                    setIsOpen(false);
                  }}
                  className="w-full text-left px-5 py-3.5 text-sm sm:text-base text-slate-300 hover:bg-blue-600/20 hover:text-white transition-colors duration-150 font-semibold"
                >
                  {option.label}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function App() {
  const [activeTab, setActiveTab] = useState<"m365" | "cambridge">("m365");
  const [selectedYleStep, setSelectedYleStep] = useState<number>(0);
  const [selectedMainStep, setSelectedMainStep] = useState<number>(0);

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    occupation: "",
    program: "", 
    classOption: "",
    message: ""
  });

  const handleInquirySubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const message = `*New Enrollment Inquiry*%0A%0A*Name:* ${formData.fullName}%0A*Phone:* ${formData.phone}%0A*Email:* ${formData.email}%0A*Occupation:* ${formData.occupation}%0A*Program:* ${formData.program || "None Picked"}%0A*Class:* ${formData.classOption || "None Picked"}%0A*Message:* ${formData.message}`;
    window.open(`https://wa.me/94710525968?text=${message}`, '_blank');
  };

  const handleProgramSwitch = (prog: string) => {
    let defaultOption = "Stage 01";
    if (prog === "Cambridge YLE Exams") defaultOption = "Starters";
    if (prog === "Cambridge English Assessments") defaultOption = "KET";
    setFormData(prev => ({ ...prev, program: prog, classOption: defaultOption }));
  };

  const programOptions = [
    { value: "Microsoft 365 Professional", label: "Microsoft 365 Professional" },
    { value: "Cambridge YLE Exams", label: "Cambridge YLE Exams" },
    { value: "Cambridge English Assessments", label: "Cambridge English Assessments" }
  ];

  const getClassOptions = () => {
    switch (formData.program) {
      case "Microsoft 365 Professional":
        return [
          { value: "Stage 01", label: "Stage 01: Introductory Foundation" },
          { value: "Stage 02", label: "Stage 02: Advanced Corporate Engineering" },
          { value: "Stage 03", label: "Stage 03: MS-900 Fundamentals Blueprint" },
          { value: "Stage 04", label: "Stage 04: MS-102 Enterprise Capstone" },
        ];
      case "Cambridge YLE Exams":
        return [
          { value: "Starters", label: "Starters Level" },
          { value: "Movers", label: "Movers Level" },
          { value: "Flyers", label: "Flyers Level" }
        ];
      case "Cambridge English Assessments":
        return [
          { value: "KET", label: "KET (A2 Key)" },
          { value: "PET", label: "PET (B1 Preliminary)" },
          { value: "FCE", label: "FCE (B2 First)" }
        ];
      default:
        return [];
    }
  };

  return (
    <div className="bg-black text-slate-200 min-h-screen font-sans antialiased overflow-x-hidden relative">
      
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-amber-500/5 to-blue-600/5 rounded-full blur-3xl pointer-events-none" />
      
      <motion.div custom={{ y: [0, -20, 0], x: [0, 15, 0], duration: 7 }} variants={floatAnimation} initial="initial" animate="animate" className="absolute top-16 right-[12%] text-amber-500/20 pointer-events-none hidden lg:block">
        <Sparkles className="w-16 h-16 stroke-[1.5]" />
      </motion.div>
      <motion.div custom={{ y: [0, 25, 0], x: [0, -20, 0], duration: 9 }} variants={floatAnimation} initial="initial" animate="animate" className="absolute top-[45%] left-[6%] text-blue-400/20 pointer-events-none hidden lg:block">
        <Terminal className="w-14 h-14 stroke-[1.5]" />
      </motion.div>

      {/* 🚀 HEADER SECTION */}
      <header className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-24 text-center">
        <motion.span 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-black uppercase tracking-[0.18em] text-amber-400 bg-amber-400/10 px-3 py-1.5 rounded-full border border-amber-400/20 mb-6"
        >
          <Award className="w-3.5 h-3.5" /> Educational Programs Ecosystem
        </motion.span>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mt-3 tracking-tight text-white max-w-5xl mx-auto leading-tight"
        >
          Certification Pipelines <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-blue-500 via-amber-400 to-blue-600 bg-clip-text text-transparent">
            For Modern Milestones
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 text-sm sm:text-base text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed"
        >
          Professional cloud alignment and global language frameworks structured to maximize industry utility and placement outcomes.
        </motion.p>

        <div className="mt-12 max-w-md mx-auto p-1.5 rounded-2xl bg-[#0A1428] border border-blue-950 backdrop-blur-md flex relative z-10">
          <button
            onClick={() => setActiveTab("m365")}
            className={`flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold tracking-wider transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer relative z-10 ${
              activeTab === "m365" 
                ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg" 
                : "text-slate-400 hover:text-slate-100"
            }`}
          >
            <Laptop className="w-4 h-4" /> Microsoft 365
          </button>
          <button
            onClick={() => setActiveTab("cambridge")}
            className={`flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold tracking-wider transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer relative z-10 ${
              activeTab === "cambridge" 
                ? "bg-gradient-to-r from-blue-600 to-amber-500 text-black font-black" 
                : "text-slate-400 hover:text-slate-100"
            }`}
          >
            <Globe className="w-4 h-4" /> Cambridge English
          </button>
        </div>
      </header>

      {/* 💻 MAIN CONTENT LAYOUTS */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <AnimatePresence mode="wait">
          {activeTab === "m365" ? (
            <motion.section
              key="m365-track"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="space-y-16 md:space-y-24"
            >
              {/* TGL ACADEMIC PLATFORM HEADER */}
              <motion.div 
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className="group relative rounded-[2rem] p-6 sm:p-8 border border-blue-500/20 bg-[#0A1428] shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-blue-500 via-amber-400 to-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                <div className="space-y-4 max-w-3xl">
                  <div className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-black uppercase tracking-[0.18em] text-blue-400 bg-blue-500/10 px-3 py-1.5 rounded-full border border-blue-500/20">
                    <ShieldCheck className="w-3.5 h-3.5" /> Thakral Global Learning (TGL) Partnership
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black tracking-tight text-white uppercase">
                    Microsoft 365 Professional Program Pipeline
                  </h2>
                  <p className="text-sm sm:text-base text-slate-300 font-semibold leading-relaxed">
                    Our Microsoft 365 pathway targets direct cloud environment operational experience. Powered through enterprise alignment models with TGL, students gain continuous tactical access to official labs, diagnostic tool suites, and live deployment scenarios.
                  </p>
                </div>
                
                <div className="w-full md:w-auto shrink-0 relative z-10">
                  <div className="bg-black p-6 rounded-[1.5rem] border border-blue-950/60 text-center w-full sm:w-60 shadow-inner">
                    <div className="text-2xl sm:text-3xl font-black text-amber-400">140+ Hours</div>
                    <div className="text-[10px] uppercase tracking-widest text-slate-500 font-black mt-1">Full Delivery Matrix</div>
                    <div className="h-px bg-blue-950/60 my-4" />
                    <div className="text-xs sm:text-sm font-semibold text-slate-300">Stages 01 - 04 Comprehensive</div>
                  </div>
                </div>
              </motion.div>

              {/* CURRICULUM PIPELINE STAGES 01 & 02 */}
              <div className="space-y-8">
                <div className="text-center md:text-left">
                  <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-black uppercase tracking-[0.18em] text-amber-400 bg-amber-400/10 px-3 py-1.5 rounded-full border border-amber-400/20">Modular Architecture</span>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mt-3 tracking-tight">Academic Learning Pipeline</h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
                  {m365Courses.map((course, idx) => (
                    <motion.div
                      key={idx}
                      variants={itemVariants}
                      whileHover={{ y: -6 }}
                      className="group relative rounded-[2rem] p-6 sm:p-8 border border-blue-500/20 transition-all duration-300 overflow-hidden bg-[#0A1428] shadow-xl flex flex-col justify-between"
                    >
                      <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-blue-500 via-amber-400 to-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                      <div>
                        <div className="flex items-center justify-between mb-6">
                          <span className="text-xs font-black text-amber-400 bg-amber-400/10 px-3 py-1.5 rounded-full border border-amber-400/20">
                            {course.stage}
                          </span>
                          <span className="text-xs font-bold text-slate-400 bg-black px-3 py-1.5 rounded-xl border border-blue-950/60">
                            {course.duration}
                          </span>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                          <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-950/60 shadow-xs flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
                              <Cpu className="w-5 h-5" />
                            </div>
                            <h3 className="text-xl font-black text-white group-hover:text-amber-400 transition-colors duration-200">
                              {course.title}
                            </h3>
                          </div>
                        </div>

                        <p className="text-xs font-semibold text-slate-500 mt-1 mb-4 italic">{course.tagline}</p>
                        <p className="text-sm sm:text-base text-slate-300 font-medium leading-relaxed mb-6">
                          {course.description}
                        </p>
                        
                        <div className="mb-6 p-4 rounded-xl bg-black/60 border border-amber-400/20 flex items-start gap-3">
                          <div className="p-1 rounded-lg bg-blue-500/10 text-blue-400 shrink-0 border border-blue-500/30 mt-0.5">
                            <FileCheck className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-[10px] uppercase font-black tracking-widest text-slate-500">Tier Credential Recognition</div>
                            <div className="text-xs sm:text-sm font-bold mt-0.5 text-white">
                              {course.certHighlight}
                            </div>
                          </div>
                        </div>

                        <div className="w-full h-px bg-blue-950/40 mb-6" />
                        <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.18em] text-slate-400 block mb-3">
                          Pipeline Covered Competencies
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {course.topics.map((topic, index) => (
                            <span 
                              key={index} 
                              className="text-xs bg-black text-slate-300 px-3 py-1.5 rounded-xl font-semibold border border-blue-950/60 hover:border-blue-900 hover:text-white transition-colors cursor-default"
                            >
                              {topic}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* OFFICIAL MICROSOFT CERTIFICATION MILESTONES (STAGES 03 & 04) */}
              <div className="space-y-8">
                <div className="text-center md:text-left">
                  <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-black uppercase tracking-[0.18em] text-amber-400 bg-amber-400/10 px-3 py-1.5 rounded-full border border-amber-400/20">
                    Official Examination Map
                  </span>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mt-3 tracking-tight">
                    Official Microsoft Certification Milestones
                  </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
                  {milestoneCourses.map((course, idx) => (
                    <motion.div
                      key={idx}
                      variants={itemVariants}
                      whileHover={{ y: -6 }}
                      className="group relative rounded-[2rem] p-6 sm:p-8 border border-amber-500/20 transition-all duration-300 overflow-hidden bg-[#0A1428] shadow-xl flex flex-col justify-between"
                    >
                      <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-amber-500 to-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                      <div>
                        <div className="flex items-center justify-between mb-6">
                          <span className="text-xs font-black text-amber-400 bg-amber-400/10 px-3 py-1.5 rounded-full border border-amber-400/20">
                            {course.stage}
                          </span>
                          <span className="text-xs font-bold text-slate-400 bg-black px-3 py-1.5 rounded-xl border border-blue-950/60">
                            {course.duration}
                          </span>
                        </div>
                        
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 border border-blue-950/60 shadow-xs flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
                            <Award className="w-5 h-5" />
                          </div>
                          <h3 className="text-xl font-black text-white group-hover:text-amber-400 transition-colors duration-200">
                            {course.title}
                          </h3>
                        </div>

                        <p className="text-xs font-semibold text-slate-500 mt-1 mb-4 italic">{course.tagline}</p>
                        <p className="text-sm sm:text-base text-slate-300 font-medium leading-relaxed mb-6">
                          {course.description}
                        </p>
                        
                        <div className="mb-6 p-4 rounded-xl bg-black/60 border border-amber-400/20 flex items-start gap-3">
                          <div className="p-1 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 shrink-0 text-black mt-0.5">
                            <Award className="w-4 h-4 font-black" />
                          </div>
                          <div>
                            <div className="text-[10px] uppercase font-black tracking-widest text-slate-500">Tier Credential Recognition</div>
                            <div className="text-xs sm:text-sm font-bold mt-0.5 text-amber-400">
                              {course.certHighlight}
                            </div>
                          </div>
                        </div>

                        <div className="w-full h-px bg-blue-950/40 mb-6" />
                        <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.18em] text-slate-400 block mb-3">
                          Pipeline Covered Competencies
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {course.topics.map((topic, index) => (
                            <span 
                              key={index} 
                              className="text-xs bg-black text-slate-300 px-3 py-1.5 rounded-xl font-semibold border border-blue-950/60 hover:border-blue-900 hover:text-white transition-colors cursor-default"
                            >
                              {topic}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* TARGET ALIGNMENT & DEMOGRAPHICS */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <motion.div variants={itemVariants} className="relative rounded-[2rem] p-6 sm:p-8 border border-blue-500/20 bg-[#0A1428] shadow-xl">
                  <h3 className="text-xl font-black text-white mb-6 flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-amber-400" /> Ideal Target Demographics
                  </h3>
                  <div className="space-y-4">
                    {targetDemographics.map((aud, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 bg-black rounded-2xl border border-blue-950/60 hover:border-blue-900 transition-colors">
                        <span className="w-6 h-6 bg-amber-400/10 text-amber-400 rounded-lg text-xs font-black shrink-0 flex items-center justify-center border border-amber-400/20">0{index + 1}</span>
                        <div>
                          <div className="text-sm font-extrabold text-white">{aud.label}</div>
                          <div className="text-xs font-semibold text-slate-400 mt-0.5">{aud.description}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                <motion.div variants={itemVariants} className="relative rounded-[2rem] p-6 sm:p-8 border border-blue-500/20 bg-[#0A1428] shadow-xl flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-black text-white mb-6 flex items-center gap-2">
                      <UserCheck className="w-5 h-5 text-blue-400" /> Target Industry Alignment
                    </h3>
                    <div className="space-y-3">
                      {careerPaths.map((career, index) => (
                        <div key={index} className="flex items-center justify-between p-3.5 bg-black rounded-2xl border border-blue-950/60 hover:border-blue-900 transition-colors">
                          <span className="text-sm font-semibold text-slate-200">{career.role}</span>
                          <span className="text-[10px] font-black uppercase tracking-widest text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded-full border border-amber-400/20">
                            {career.requirement}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-8 p-4 bg-black border border-blue-950/60 rounded-2xl text-xs font-semibold text-slate-400 leading-relaxed">
                    Completing all designated phases directly prepares prospective candidates for advanced technical vetting matching the requirements for a standard <strong>Microsoft 365 Enterprise Administrator</strong> role footprint.
                  </div>
                </motion.div>
              </div>

            </motion.section>
          ) : (
            <motion.section
              key="cambridge-track"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="space-y-16 md:space-y-24"
            >
              {/* CAMBRIDGE STRUCTURAL HEADER */}
              <motion.div 
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className="group relative rounded-[2rem] p-6 sm:p-8 border border-amber-500/20 bg-[#0A1428] shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-blue-500 via-amber-400 to-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                <div className="space-y-4 max-w-4xl relative z-10">
                  <div className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-black uppercase tracking-[0.18em] text-amber-400 bg-amber-400/10 px-3 py-1.5 rounded-full border border-amber-400/20">
                    <Globe className="w-3.5 h-3.5" /> Standardized Linguistic Frameworks
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black tracking-tight text-white uppercase">
                    Cambridge English Programs
                  </h2>
                  <p className="text-sm sm:text-base text-slate-300 font-semibold leading-relaxed">
                    Harness globally recognized assessment methodologies designed to establish early communication trust and complex language proficiency. Ensure your students navigate phonetic spelling patterns, structure accurate writing formats, and practice native listening.
                  </p>
                </div>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* INTERACTIVE YOUNG LEARNERS (YLE) PATHWAY */}
                <motion.div 
                  variants={itemVariants}
                  whileHover={{ y: -4 }}
                  className="group relative rounded-[2rem] p-6 sm:p-8 border border-blue-500/20 bg-[#0A1428] shadow-xl flex flex-col justify-between overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-blue-500 to-amber-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  <div>
                    <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.18em] text-amber-400 block mb-2">Ages 6 to 12</span>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-950/60 shadow-xs group-hover:scale-110 transition-transform shrink-0">
                        <BookOpen className="w-5 h-5" />
                      </div>
                      <h3 className="text-xl sm:text-2xl font-black text-white">Young Learners English (YLE)</h3>
                    </div>
                    <p className="text-sm sm:text-base text-slate-300 font-semibold mt-2 mb-8 leading-relaxed">
                      Focuses heavily on constructing a robust, native basic English foundation for young learners across structural primary development layers.
                    </p>

                    <div className="space-y-4 mb-8">
                      <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.18em] text-slate-500">Select Exam Milestone to Inspect</span>
                      <div className="grid grid-cols-3 gap-2">
                        {["Starters", "Movers", "Flyers"].map((stepName, idx) => (
                          <motion.button
                            key={idx}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => setSelectedYleStep(idx)}
                            className={`py-3 px-1 rounded-xl text-xs font-black tracking-wider transition-all duration-300 border cursor-pointer ${
                              selectedYleStep === idx 
                                ? "bg-amber-400/10 border-amber-400 text-amber-400 shadow-md" 
                                : "bg-black border-blue-950/60 text-slate-400 hover:border-blue-900"
                            }`}
                          >
                            {stepName}
                          </motion.button>
                        ))}
                      </div>

                      <AnimatePresence mode="wait">
                        <motion.div 
                          key={selectedYleStep}
                          initial={{ opacity: 0, y: 12 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -12 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                          className="bg-black p-5 rounded-2xl border border-blue-950/60 shadow-inner"
                        >
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-[10px] font-black tracking-widest uppercase text-amber-400 bg-amber-400/10 px-2.5 py-0.5 rounded border border-amber-400/20">
                              CEFR Step 0{selectedYleStep + 1}
                            </span>
                            <span className="text-[11px] font-bold text-slate-500">Core Primary Track</span>
                          </div>
                          <h4 className="font-black text-white text-base">
                            {["Starters Framework", "Movers Framework", "Flyers Framework"][selectedYleStep]}
                          </h4>
                          <p className="text-xs sm:text-sm text-slate-400 font-semibold leading-relaxed mt-1">
                            {[
                              "Designed for children beginning their language learning path. Evaluates daily noun naming, introductory conversational directives, and basic phonetics with absolute speaking comfort.",
                              "Encourages active sentence structure formulation. Prepares young learners to explain simple scenarios, follow sequential story threads, and formulate everyday questions.",
                              "Confirms operational basic autonomy. Equips children to access complex primary texts, write letters of brief introduction, and easily interface with native speakers."
                            ][selectedYleStep]}
                          </p>
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </div>

                  <motion.a 
                    whileTap={{ scale: 0.99 }}
                    href="https://wa.me/94710525968?text=Cambridge%20YLE%20Admissions"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-center py-4 bg-blue-600 hover:bg-blue-500 text-white font-black text-sm rounded-xl transition-all shadow-md block cursor-pointer uppercase tracking-wider"
                  >
                    Inquire About YLE Batches
                  </motion.a>
                </motion.div>

                {/* INTERACTIVE ENGLISH ASSESSMENTS */}
                <motion.div 
                  variants={itemVariants}
                  whileHover={{ y: -4 }}
                  className="group relative rounded-[2rem] p-6 sm:p-8 border border-blue-500/20 bg-[#0A1428] shadow-xl flex flex-col justify-between overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-blue-500 to-amber-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  <div>
                    <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.18em] text-blue-400 block mb-2">Advanced Standardizations</span>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-950/60 shadow-xs group-hover:scale-110 transition-transform shrink-0">
                        <GraduationCap className="w-5 h-5" />
                      </div>
                      <h3 className="text-xl sm:text-2xl font-black text-white">Cambridge English Assessments</h3>
                    </div>
                    <p className="text-sm sm:text-base text-slate-300 font-semibold mt-2 mb-8 leading-relaxed">
                      Rigorous preparation modules engineered explicitly for high-level academic development, checking and validating compliance with global benchmarks.
                    </p>

                    <div className="space-y-4 mb-8">
                      <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.18em] text-slate-500">Select Qualification Suite</span>
                      <div className="grid grid-cols-3 gap-2">
                        {["KET", "PET", "FCE"].map((stepName, idx) => (
                          <motion.button
                            key={idx}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => setSelectedMainStep(idx)}
                            className={`py-3 px-1 rounded-xl text-xs font-black tracking-wider transition-all duration-300 border cursor-pointer ${
                              selectedMainStep === idx 
                                ? "bg-blue-500/10 border-blue-400 text-blue-400 shadow-md" 
                                : "bg-black border-blue-950/60 text-slate-400 hover:border-blue-900"
                            }`}
                          >
                            {stepName}
                          </motion.button>
                        ))}
                      </div>

                      <AnimatePresence mode="wait">
                        <motion.div 
                          key={selectedMainStep}
                          initial={{ opacity: 0, y: 12 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -12 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                          className="bg-black p-5 rounded-2xl border border-blue-950/60 shadow-inner"
                        >
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-[10px] font-black tracking-widest uppercase text-amber-400 bg-amber-400/10 px-2.5 py-0.5 rounded border border-amber-400/20">
                              {["CEFR A2 Standard", "CEFR B1 Standard", "CEFR B2 Standard"][selectedMainStep]}
                            </span>
                            <span className="text-[11px] font-bold text-slate-500">Main Suite Node</span>
                          </div>
                          <h4 className="font-black text-white text-base">
                            {["KET (Key English Test)", "PET (Preliminary English Test)", "FCE (First Certificate)"][selectedMainStep]}
                          </h4>
                          <p className="text-xs sm:text-sm text-slate-400 font-semibold leading-relaxed mt-1">
                            {[
                              "Validates the absolute basics of daily communication capability. Covers introductory structural reading formats, short notification alerts, and simple social expressions.",
                              "Validates general intermediate verbal independence. Ensures students communicate with security during travels, express opinions, and compose structured emails.",
                              "A prestigious upper-intermediate qualification. Validates capabilities required to study in English-medium settings and operate independently across multinational professional pipelines."
                            ][selectedMainStep]}
                          </p>
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </div>

                  <motion.a 
                    whileTap={{ scale: 0.99 }}
                    href="https://wa.me/94710525968?text=Cambridge%20Assessments%20Admissions"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-center py-4 bg-blue-600 hover:bg-blue-500 text-white font-black text-sm rounded-xl transition-all shadow-md block cursor-pointer uppercase tracking-wider"
                  >
                    Inquire About Assessments
                  </motion.a>
                </motion.div>
              </div>
            </motion.section>
          )}
        </AnimatePresence>

        {/* ECO-GRID BENCHMARKS */}
        <div className="my-24 py-12 px-6 rounded-[2.5rem] bg-[#0A1428] border border-blue-500/10 text-center relative overflow-hidden shadow-2xl">
          <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-black uppercase tracking-[0.18em] text-amber-400 bg-amber-400/10 px-3 py-1.5 rounded-full border border-amber-400/20">System Benchmarks</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mt-3 mb-8 tracking-tight">What Makes This Program Hub Unique?</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left relative z-10">
            {[
              { 
                icon: <GraduationCap className="w-5 h-5" />, 
                title: "Official Syllabi Only", 
                desc: "No generic copy-paste lessons. Completely aligned with global curricula benchmarks.",
                colorClass: "text-blue-400 bg-blue-500/10 border-blue-500/20"
              },
              { 
                icon: <Terminal className="w-5 h-5" />, 
                title: "Sandbox Access", 
                desc: "Continuous diagnostic training structures inside live, production-grade environments.",
                colorClass: "text-amber-400 bg-amber-400/10 border-amber-400/20"
              },
              { 
                icon: <UserCheck className="w-5 h-5" />, 
                title: "Target Alignments", 
                desc: "Direct target checkpoints mapped out to land specialized system administrator roles.",
                colorClass: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20"
              },
              { 
                icon: <Globe className="w-5 h-5" />, 
                title: "Worldwide Recognition", 
                desc: "Prepare for globally unified assessments respected by thousands of enterprises.",
                colorClass: "text-purple-400 bg-purple-500/10 border-purple-500/20"
              }
            ].map((item, idx) => (
              <div key={idx} className="p-6 bg-black rounded-2xl border border-blue-950/60 shadow-inner hover:border-blue-900 transition-colors duration-300">
                <div className={`w-10 h-10 rounded-xl border flex items-center justify-center mb-4 shrink-0 shadow-xs ${item.colorClass}`}>
                  {item.icon}
                </div>
                <h4 className="text-base font-black text-white mt-3">{item.title}</h4>
                <p className="text-xs sm:text-sm font-semibold text-slate-400 mt-1.5 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 📬 INTEGRATED INSTANT ADMISSIONS PORTAL */}
        <motion.section 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-5xl mx-auto"
          id="enrollment-hub"
        >
          <div className="bg-[#0A1428]/90 backdrop-blur-xl border border-blue-900/40 p-6 sm:p-10 md:p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
            <div className="text-center mb-10">
              <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-black uppercase tracking-[0.18em] text-amber-400 bg-amber-400/10 px-3 py-1.5 rounded-full border border-amber-400/20 mb-3">
                <Sparkles className="w-3.5 h-3.5" /> Instant Placement Node
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-white mb-4 tracking-tight">Secure Your Program Seat</h2>
              <p className="text-slate-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
                Configure your target parameters below to route your enrollment inquiry directly to our Admissions Desk via WhatsApp.
              </p>
            </div>

            <form onSubmit={handleInquirySubmit} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <input 
                  type="text" 
                  required 
                  placeholder="Full Name" 
                  className="w-full bg-black border border-blue-900/40 p-4 sm:p-5 rounded-2xl text-white focus:ring-2 focus:ring-amber-400 outline-none transition-all text-sm sm:text-base font-semibold"
                  value={formData.fullName}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, fullName: e.target.value })}
                />
                <input 
                  type="tel" 
                  required 
                  placeholder="Phone Number" 
                  className="w-full bg-black border border-blue-900/40 p-4 sm:p-5 rounded-2xl text-white focus:ring-2 focus:ring-amber-400 outline-none transition-all text-sm sm:text-base font-semibold"
                  value={formData.phone}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <input 
                  type="email" 
                  required 
                  placeholder="Email Address" 
                  className="w-full bg-black border border-blue-900/40 p-4 sm:p-5 rounded-2xl text-white focus:ring-2 focus:ring-amber-400 outline-none transition-all text-sm sm:text-base font-semibold"
                  value={formData.email}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, email: e.target.value })}
                />
                <input 
                  type="text" 
                  required 
                  placeholder="School / Occupation" 
                  className="w-full bg-black border border-blue-900/40 p-4 sm:p-5 rounded-2xl text-white focus:ring-2 focus:ring-amber-400 outline-none transition-all text-sm sm:text-base font-semibold"
                  value={formData.occupation}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, occupation: e.target.value })}
                />
              </div>

              {/* Smooth Custom Dropdowns Layout */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-30">
                <FormDropdown
                  placeholder="Select Interested Program"
                  options={programOptions}
                  value={formData.program}
                  onChange={handleProgramSwitch}
                />

                <FormDropdown
                  placeholder="Preferred Class"
                  options={getClassOptions()}
                  value={formData.classOption}
                  onChange={(val) => setFormData(prev => ({ ...prev, classOption: val }))}
                />
              </div>

              <textarea 
                required
                rows={4} 
                placeholder="Additional details or questions..." 
                className="w-full bg-black border border-blue-900/40 p-4 sm:p-5 rounded-2xl text-white focus:ring-2 focus:ring-amber-400 outline-none transition-all text-sm sm:text-base font-semibold"
                value={formData.message}
                onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setFormData({ ...formData, message: e.target.value })}
              />

              <motion.button 
                whileTap={{ scale: 0.99 }}
                type="submit" 
                className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-black py-4 sm:py-5 rounded-2xl shadow-xl transition-all flex items-center justify-center gap-3 text-lg sm:text-xl cursor-pointer"
              >
                <FaWhatsapp className="w-6 h-6 sm:w-7 h-7" /> 
                <span>Submit via WhatsApp</span>
              </motion.button>
            </form>
          </div>
        </motion.section>
      </main>
    </div>
  );
}