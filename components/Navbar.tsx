"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, ChevronDown, Phone } from "lucide-react";
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
              <span className="font-black text-sm md:text-xl tracking-tight bg-gradient-to-r from-brand-blue via-brand-purple to-brand-blue bg-[size:200%_auto] bg-clip-text text-transparent">
                KEY INSTITUTE
              </span>
              <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] mt-1">
                Digital Success
              </span>
            </div>
          </Link>
          
          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link href="/" className="text-sm font-bold hover:text-brand-blue transition-colors">Home</Link>
            
            {/* Programs Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button className="flex items-center gap-1 text-sm font-bold hover:text-brand-blue transition-colors">
                Programs <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 5 }}
                    className="absolute top-full left-0 w-60 pt-2 z-50"
                  >
                    <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl p-2">
                      <Link href="/programs#m365" className="block px-4 py-3 text-sm font-bold rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800">Microsoft 365 Pro</Link>
                      <Link href="/programs#cambridge" className="block px-4 py-3 text-sm font-bold rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800">Cambridge English</Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            {navLinks.slice(1).map((link) => (
              <Link key={link.name} href={link.href} className="text-sm font-bold hover:text-brand-blue">{link.name}</Link>
            ))}
            
            <div className="flex items-center gap-3 border-l border-slate-200 dark:border-slate-800 pl-6">
              <a href="tel:+94710525968" className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-100 dark:bg-slate-800 hover:bg-green-500 hover:text-white transition-all" aria-label="Call Key Institute">
                <Phone className="w-4 h-4" />
              </a>
              <motion.a whileHover={{ scale: 1.03 }} href="#enrollment-hub" className="inline-flex items-center gap-1.5 px-5 py-2.5 text-sm font-extrabold text-white bg-gradient-to-r from-brand-blue to-brand-purple rounded-xl shadow-md">
                Enroll Now <ArrowUpRight className="w-4 h-4" />
              </motion.a>
            </div>
          </div>

          {/* Mobile Zone Buttons */}
          <div className="flex items-center lg:hidden gap-3">
            {/* Direct Call Button next to the Menu Trigger for quick mobile access */}
            <a href="tel:+94710525968" className="w-10 h-10 rounded-xl flex items-center justify-center bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-green-500 hover:text-white transition-all" aria-label="Call Key Institute">
              <Phone className="w-4.5 h-4.5" />
            </a>
            <button onClick={() => setIsOpen(!isOpen)} className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800">
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="lg:hidden bg-white dark:bg-[#030712] border-t border-slate-200 dark:border-slate-800 px-4 pb-6">
            <div className="py-4 space-y-1">
              <Link href="/" onClick={() => setIsOpen(false)} className="block p-3 font-bold text-sm">Home</Link>
              <div className="px-3 pt-3 pb-1 font-black text-[10px] uppercase tracking-widest opacity-50">Programs</div>
              <Link href="/programs#m365" onClick={() => setIsOpen(false)} className="block px-6 py-2 text-sm font-bold">Microsoft 365 Professional</Link>
              <Link href="/programs#cambridge" onClick={() => setIsOpen(false)} className="block px-6 py-2 text-sm font-bold">Cambridge English</Link>
              {navLinks.slice(1).map((link) => (
                <Link key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="block p-3 font-bold text-sm">{link.name}</Link>
              ))}
              
              {/* Call Action + Enroll Action Grid for Mobile Drawer Layout */}
              <div className="grid grid-cols-5 gap-2 mt-4">
                <a href="tel:+94710525968" className="col-span-2 flex items-center justify-center gap-2 p-4 font-bold text-sm rounded-xl border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 hover:bg-green-500 hover:text-white dark:hover:bg-green-600 transition-colors">
                  <Phone className="w-4 h-4" /> Call Us
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