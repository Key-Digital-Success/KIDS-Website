"use client";

import { useState, useEffect } from "react";
import { X, Expand, ShieldCheck, Grid } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Updated galleryData with all local assets categorized under "Classroom"
const galleryData = [
  { id: 1, category: "Classroom", title: "Our KIDS Digital Classroom", url: "/classroom/classroom (1).jpg" },
  { id: 2, category: "Classroom", title: "Our KIDS Digital Classroom", url: "/classroom/classroom (2).jpg" },
  { id: 3, category: "Classroom", title: "Our KIDS Digital Classroom", url: "/classroom/classroom (3).jpg" },
  { id: 4, category: "Classroom", title: "Our KIDS Digital Classroom", url: "/classroom/classroom (4).jpg" },
  { id: 6, category: "Students", title: "M365 Identity Management Lab Practice", url: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80" },
];

const categories = ["All", "Classroom", "Students", "Certificates", "Events"];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const filteredImages = activeCategory === "All" 
    ? galleryData 
    : galleryData.filter(img => img.category === activeCategory);

  if (!mounted) {
    return <div className="min-h-screen bg-black" />;
  }

  return (
    /* Global background matches Code 2's rich solid black, selection accent color, and text defaults */
    <div className="relative min-h-screen bg-black text-slate-200 overflow-hidden antialiased selection:bg-amber-500/30 selection:text-amber-200">
      
      {/* 🌌 AMBIENT BACKGROUND GLOWS - Identical matrix behavior to Code 2 */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[400px] bg-gradient-to-b from-blue-600/10 via-amber-500/5 to-transparent blur-[100px] pointer-events-none z-0" />
      <div className="absolute bottom-[20%] right-[-10%] w-[400px] h-[400px] bg-blue-600/5 blur-[150px] pointer-events-none z-0" />

      {/* LIGHT GRID UNDERLAY */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e3a8a0a_1px,transparent_1px),linear-gradient(to_bottom,#1e3a8a0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-12">
        
        {/* 🚀 HERO HEADER */}
        <section className="text-center max-w-2xl mx-auto space-y-4">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0A1428] border border-blue-900/60 backdrop-blur-md shadow-lg shadow-blue-950/20"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-amber-400/90">
              KIDS Showcase
            </span>
          </motion.div>

          <div className="space-y-2">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white"
            >
              KIDS <span className="bg-gradient-to-r from-blue-500 via-amber-400 to-blue-600 bg-clip-text text-transparent drop-shadow-sm">Gallery</span>
            </motion.h1>
          </div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-sm md:text-base text-slate-400 leading-relaxed font-normal"
          >
            Visual highlights of cloud labs, enterprise seminars, and student milestones.
          </motion.p>
        </section>

        {/* 🧭 FILTER BUTTONS CONTROL MODULE */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 max-w-3xl mx-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 text-xs font-bold rounded-xl border transition-all duration-300 cursor-pointer ${
                activeCategory === cat 
                  ? "border-blue-500 bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-950/40" 
                  : "border-blue-950/60 bg-[#0A1428]/40 text-slate-400 hover:bg-[#0A1428] hover:text-white hover:border-blue-900/60"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 📸 RESPONSIVE GRID LAYOUT */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 auto-rows-max">
          <AnimatePresence mode="popLayout">
            {filteredImages.map((item) => (
              <motion.div 
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4, borderColor: "rgba(245, 158, 11, 0.3)" }}
                key={item.id} 
                onClick={() => setLightboxImage(item.url)}
                className="group relative bg-[#0A1428] border border-blue-950/60 backdrop-blur-xl rounded-3xl overflow-hidden cursor-pointer shadow-xl flex flex-col w-full transition-all duration-300"
              >
                {/* Image Wrap & Hover Lightbox Mask */}
                <div className="aspect-video w-full relative bg-black overflow-hidden shrink-0">
                  <img 
                    src={item.url} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Backdrop overlay shifted to brand-matched deep blue mask instead of stark white */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 backdrop-blur-[2px] transition-opacity duration-300 flex items-center justify-center">
                    <div className="p-3 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full text-black shadow-xl shadow-amber-950/30 transform scale-90 group-hover:scale-100 transition-transform duration-300">
                      <Expand className="w-4 h-4 stroke-[2.5]" />
                    </div>
                  </div>
                </div>
                
                {/* Content Block */}
                <div className="p-5 flex-grow flex flex-col justify-center bg-black/40 border-t border-blue-950/40 relative">
                  {/* Subtle contextual card corner glow accent mapping */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-transparent via-transparent to-transparent rounded-bl-full pointer-events-none group-hover:from-amber-500/5 transition-all duration-500" />
                  
                  <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest block">
                    {item.category}
                  </span>
                  <h3 className="text-sm font-bold mt-1 text-slate-200 group-hover:text-white truncate transition-colors duration-200">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* 🌌 FULL SCREEN MODAL LIGHTBOX VIEW */}
        <AnimatePresence>
          {lightboxImage && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightboxImage(null)}
              className="fixed inset-0 bg-black/95 backdrop-blur-md z-50 flex items-center justify-center p-4 cursor-zoom-out"
            >
              {/* Close Button UI optimized to coordinate with gold matrix markers */}
              <button 
                onClick={() => setLightboxImage(null)}
                className="absolute top-6 right-6 p-3 bg-blue-950/40 border border-blue-900/40 text-slate-300 hover:text-amber-400 hover:bg-blue-950/80 rounded-full transition-all active:scale-90"
              >
                <X className="w-5 h-5" />
              </button>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 10 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-4xl max-h-[80vh] overflow-hidden rounded-3xl shadow-2xl border border-blue-950/60 bg-black select-none" 
                onClick={(e) => e.stopPropagation()}
              >
                <img src={lightboxImage} alt="Expanded snapshot display" className="w-full h-auto max-h-[80vh] object-contain" />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}