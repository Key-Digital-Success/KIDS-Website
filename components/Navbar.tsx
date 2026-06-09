"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
import { Menu, X, ArrowUpRight, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const pathname = usePathname();

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800/60 bg-white/80 dark:bg-brand-charcoal/75 backdrop-blur-xl transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Brand Frame */}
          <Link href="/" className="flex flex-col group relative overflow-hidden">
            <span className="font-black text-xl tracking-tight bg-gradient-to-r from-brand-blue via-brand-purple to-brand-blue bg-[size:200%_auto] hover:bg-right transition-all duration-1000 bg-clip-text text-transparent">
              KEY INSTITUTE
            </span>
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 dark:text-slate-400 transition-colors group-hover:text-brand-blue">
              Digital Success
            </span>
          </Link>
          
          {/* Desktop Links Matrix */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-6">
              <Link href="/" className="text-sm font-bold relative py-2 text-slate-700 dark:text-slate-300 hover:text-brand-blue dark:hover:text-white transition-colors group">
                Home
                <span className={`absolute bottom-0 left-0 h-[2px] bg-brand-blue transition-all duration-300 ${pathname === "/" ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              </Link>

              {/* Programs Premium Interactive Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <button className="flex items-center gap-1 text-sm font-bold text-slate-700 dark:text-slate-300 hover:text-brand-blue py-2 transition-colors focus:outline-none cursor-pointer">
                  Programs 
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                
                <AnimatePresence>
                  {isDropdownOpen && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.95 }}
                      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute top-full left-0 w-64 bg-white/95 dark:bg-brand-card-dark/95 backdrop-blur-xl border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl p-2 z-50 origin-top-left"
                    >
                      <Link href="/programs#m365" className="block px-4 py-3 text-sm rounded-xl text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-brand-blue dark:hover:text-brand-blue font-bold transition-all duration-200">
                        Microsoft 365 Professional
                      </Link>
                      <Link href="/programs#cambridge" className="block px-4 py-3 text-sm rounded-xl text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-brand-purple dark:hover:text-brand-purple font-bold transition-all duration-200">
                        Cambridge Programs
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {navLinks.slice(1).map((link) => (
                <Link key={link.name} href={link.href} className="text-sm font-bold relative py-2 text-slate-700 dark:text-slate-300 hover:text-brand-blue dark:hover:text-white transition-colors group">
                  {link.name}
                  <span className={`absolute bottom-0 left-0 h-[2px] bg-brand-blue transition-all duration-300 ${pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                </Link>
              ))}
            </div>

            <div className="flex items-center space-x-4 border-l border-slate-200 dark:border-slate-800 pl-6">
              <ThemeToggle />
              <motion.a
                whileHover={{ scale: 1.03, boxShadow: "0 10px 25px -5px rgba(29,78,216,0.35)" }}
                whileTap={{ scale: 0.98 }}
                href="https://wa.me/94771234567"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 text-sm font-extrabold text-white bg-gradient-to-r from-brand-blue to-brand-purple rounded-xl transition-shadow shadow-md"
              >
                Enroll Now <ArrowUpRight className="w-4 h-4" />
              </motion.a>
            </div>
          </div>

          {/* Mobile Hamburg Trigger Toggle Control */}
          <div className="flex items-center space-x-4 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-xl text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 active:scale-95 transition-transform"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Slide Container overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-brand-charcoal overflow-hidden px-4 pb-6 space-y-2"
          >
            <Link href="/" onClick={() => setIsOpen(false)} className="block px-4 py-3 rounded-xl text-base font-bold text-slate-800 dark:text-slate-300 bg-slate-50 dark:bg-slate-900/60">
              Home
            </Link>
            <div className="px-4 pt-2 pb-1 font-black text-xs uppercase text-slate-400 tracking-wider">Programs</div>
            <Link href="/programs#m365" onClick={() => setIsOpen(false)} className="block px-6 py-2 text-sm text-slate-700 dark:text-slate-400 font-bold hover:text-brand-blue">
              • Microsoft 365 Professional
            </Link>
            <Link href="/programs#cambridge" onClick={() => setIsOpen(false)} className="block px-6 py-2 text-sm text-slate-700 dark:text-slate-400 font-bold hover:text-brand-purple mb-2">
              • Cambridge Programs
            </Link>
            {navLinks.slice(1).map((link) => (
              <Link key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="block px-4 py-3 rounded-xl text-base font-bold text-slate-800 dark:text-slate-300 bg-slate-50 dark:bg-slate-900/60">
                {link.name}
              </Link>
            ))}
            <a href="https://wa.me/94771234567" target="_blank" rel="noopener noreferrer" className="block text-center w-full mt-4 px-5 py-3.5 font-black text-white bg-brand-blue rounded-xl shadow-lg">
              Enroll via WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}