"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { 
  Menu, 
  X, 
  ArrowUpRight, 
  ChevronDown, 
  Phone,
  Home,
  BookOpen,
  Info,
  Image as ImageIcon,
  Mail,
  FileCode,
  GraduationCap
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "/about", icon: Info },
  { name: "Gallery", href: "/gallery", icon: ImageIcon },
  { name: "Contact", href: "/contact", icon: Mail },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Convert Lucide Phone icon to an animated Framer Motion component
  const AnimatedPhone = motion.create(Phone);

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-[#030712]/80 backdrop-blur-xl transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Frame */}
          <Link href="/" className="flex items-center gap-3 md:gap-4 group">
            <div className="relative w-12 h-12 md:w-14 md:h-14 shrink-0">
              <Image 
                src="/KIDS Logo.png" 
                alt="KEY INSTITUTE Logo" 
                fill 
                className="object-contain" 
                priority
              />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-black text-sm md:text-xl tracking-tight bg-gradient-to-r from-blue-500 via-amber-400 to-blue-600 bg-[size:200%_auto] bg-clip-text text-transparent group-hover:bg-[100%_auto] transition-all duration-500">
                KEY INSTITUTE
              </span>
              <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] mt-1">
                Digital Success
              </span>
            </div>
          </Link>
          
          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link href="/" className="flex items-center gap-1.5 text-sm font-bold hover:text-brand-blue transition-colors">
              <Home className="w-4 h-4 opacity-70" />
              Home
            </Link>
            
            {/* Programs Dropdown */}
            <div className="relative group/dropdown py-2">
              <Link 
                href="/programs" 
                className="flex items-center gap-1.5 text-sm font-bold hover:text-brand-blue transition-colors"
              >
                <BookOpen className="w-4 h-4 opacity-70" />
                Programs 
                <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover/dropdown:rotate-180" />
              </Link>
              
              <div className="absolute top-full left-0 w-64 pt-2 z-50 opacity-0 pointer-events-none scale-95 origin-top-left group-hover/dropdown:opacity-100 group-hover/dropdown:pointer-events-auto group-hover/dropdown:scale-100 transition-all duration-200">
                <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl p-2">
                  <Link href="/programs#m365" className="flex items-center gap-2.5 px-4 py-3 text-sm font-bold rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                    <FileCode className="w-4 h-4 text-blue-500" />
                    MS 365 Certification
                  </Link>
                  
                  {/* Updated Target Link */}
                  <Link href="/programs#m365#cambridge" className="flex items-center gap-2.5 px-4 py-3 text-sm font-bold rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                    <GraduationCap className="w-4 h-4 text-amber-500" />
                    Cambridge English
                  </Link>
                </div>
              </div>
            </div>
            
            {navLinks.slice(1).map((link) => {
              const LinkIcon = link.icon;
              return (
                <Link key={link.name} href={link.href} className="flex items-center gap-1.5 text-sm font-bold hover:text-brand-blue transition-colors">
                  <LinkIcon className="w-4 h-4 opacity-70" />
                  {link.name}
                </Link>
              );
            })}
            
            <div className="flex items-center gap-3 border-l border-slate-200 dark:border-slate-800 pl-6">
              <a href="tel:+94710525968" className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-100 dark:bg-slate-800 hover:bg-green-500 hover:text-white transition-all" aria-label="Call Key Institute">
                <AnimatedPhone 
                  className="w-4 h-4" 
                  animate={{ rotate: [0, -12, 10, -10, 8, -4, 4, 0] }}
                  transition={{
                    duration: 0.7,
                    repeat: Infinity,
                    repeatDelay: 1.5,
                    ease: "easeInOut" as const
                  }}
                />
              </a>
              <motion.a whileHover={{ scale: 1.03 }} href="#enrollment-hub" className="inline-flex items-center gap-1.5 px-5 py-2.5 text-sm font-extrabold text-white bg-gradient-to-r from-brand-blue to-brand-purple rounded-xl shadow-md">
                Enroll Now <ArrowUpRight className="w-4 h-4" />
              </motion.a>
            </div>
          </div>

          {/* Mobile Zone Buttons */}
          <div className="flex items-center lg:hidden gap-3">
            <a href="tel:+94710525968" className="w-10 h-10 rounded-xl flex items-center justify-center bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-green-500 hover:text-white transition-all" aria-label="Call Key Institute">
              <AnimatedPhone 
                className="w-4.5 h-4.5" 
                animate={{ rotate: [0, -12, 10, -10, 8, -4, 4, 0] }}
                transition={{
                  duration: 0.7,
                  repeat: Infinity,
                  repeatDelay: 1.5,
                  ease: "easeInOut" as const
                }}
              />
            </a>
            <button onClick={() => setIsOpen(!isOpen)} className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200">
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer with Smooth Timing and Layout Adjustments */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }} 
            animate={{ opacity: 1, height: "auto" }} 
            exit={{ opacity: 0, height: 0 }} 
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden bg-white dark:bg-[#030712] border-t border-slate-200 dark:border-slate-800 overflow-hidden"
          >
            <div className="px-4 pb-6 py-4 space-y-1">
              <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-2.5 p-3 font-bold text-sm">
                <Home className="w-4 h-4 opacity-70" /> Home
              </Link>
              
              <Link href="/programs" onClick={() => setIsOpen(false)} className="flex items-center gap-2.5 p-3 font-bold text-sm">
                <BookOpen className="w-4 h-4 opacity-70" /> Programs
              </Link>
              
              <Link href="/programs#m365" onClick={() => setIsOpen(false)} className="flex items-center gap-2.5 pl-9 pr-3 py-2 font-bold text-sm text-slate-600 dark:text-slate-400 hover:text-brand-blue">
                <FileCode className="w-4 h-4 text-blue-500 shrink-0" /> MS 365 Certification
              </Link>
              
              {/* Updated Target Link (Mobile) */}
              <Link href="/programs#m365#cambridge" onClick={() => setIsOpen(false)} className="flex items-center gap-2.5 pl-9 pr-3 py-2 font-bold text-sm text-slate-600 dark:text-slate-400 hover:text-brand-blue">
                <GraduationCap className="w-4 h-4 text-amber-500 shrink-0" /> Cambridge English
              </Link>
              
              {navLinks.slice(1).map((link) => {
                const LinkIcon = link.icon;
                return (
                  <Link key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="flex items-center gap-2.5 p-3 font-bold text-sm">
                    <LinkIcon className="w-4 h-4 opacity-70" />
                    {link.name}
                  </Link>
                );
              })}
              
              {/* Call Action + Enroll Action Grid */}
              <div className="grid grid-cols-5 gap-2 mt-4">
                <a href="tel:+94710525968" className="col-span-2 flex items-center justify-center gap-2 p-4 font-bold text-sm rounded-xl border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 hover:bg-green-500 hover:text-white dark:hover:bg-green-600 transition-colors">
                  <AnimatedPhone 
                    className="w-4 h-4" 
                    animate={{ rotate: [0, -12, 10, -10, 8, -4, 4, 0] }}
                    transition={{
                      duration: 0.7,
                      repeat: Infinity,
                      repeatDelay: 1.5,
                      ease: "easeInOut" as const
                    }}
                  /> Call Us
                </a>
                <Link href="#enrollment-hub" onClick={() => setIsOpen(false)} className="col-span-3 block text-center p-4 font-black text-sm text-white bg-brand-blue rounded-xl">
                  Enroll Now
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}