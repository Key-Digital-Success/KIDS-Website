"use client";

import { useState, useEffect } from "react";
import { X, Expand } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Updated galleryData with all local assets categorized under "Classroom"
const galleryData = [
  { id: 1, category: "Classroom", title: "Modern Computing Lab Layout", url: "/classroom/classroom (1).jpg" },
  { id: 2, category: "Classroom", title: "Interactive Project Lab Group", url: "/classroom/classroom (2).jpg" },
  { id: 3, category: "Classroom", title: "Official Microsoft Path Awarding", url: "/classroom/classroom (3).jpg" },
  { id: 4, category: "Classroom", title: "Strategic Digital Excellence Seminar", url: "/classroom/classroom (4).jpg" },
  { id: 5, category: "Classroom", title: "Cambridge Language Training Workspace", url: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=800&q=80" },
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
    return <div className="min-h-screen bg-transparent" />;
  }

  return (
    <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[85vh]">
      
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-3">
          KIDS Gallery
        </h1>
        <p className="text-sm md:text-base font-medium">
          Visual highlights of cloud labs, enterprise seminars, and student milestones.
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-2.5 mb-14">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2.5 text-xs font-bold rounded-xl border transition-all duration-300 cursor-pointer ${
              activeCategory === cat 
                ? "border-brand-blue bg-brand-blue text-white shadow-lg shadow-brand-blue/20" 
                : "border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 auto-rows-max">
        <AnimatePresence mode="popLayout">
          {filteredImages.map((item) => (
            <motion.div 
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              key={item.id} 
              onClick={() => setLightboxImage(item.url)}
              className="group glass-card rounded-3xl overflow-hidden border border-slate-200/60 dark:border-slate-800/80 cursor-pointer relative shadow-lg bg-white dark:bg-brand-card-dark/20 flex flex-col w-full"
            >
              <div className="aspect-video w-full relative bg-slate-100 dark:bg-slate-900 overflow-hidden shrink-0">
                <img 
                  src={item.url} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-brand-charcoal/40 opacity-0 group-hover:opacity-100 backdrop-blur-xs transition-opacity duration-300 flex items-center justify-center">
                  <div className="p-3 bg-white/25 backdrop-blur-md rounded-full text-white shadow-xl">
                    <Expand className="w-4 h-4" />
                  </div>
                </div>
              </div>
              
              <div className="p-5 flex-grow flex flex-col justify-center border-t border-slate-100/50 dark:border-slate-800/40">
                <span className="text-[10px] font-black text-brand-purple uppercase tracking-widest">
                  {item.category}
                </span>
                <h3 className="text-sm font-bold mt-1 truncate">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {lightboxImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImage(null)}
            className="fixed inset-0 bg-brand-charcoal/90 backdrop-blur-md z-50 flex items-center justify-center p-4 cursor-zoom-out"
          >
            <button 
              onClick={() => setLightboxImage(null)}
              className="absolute top-6 right-6 p-3 bg-white/10 text-white hover:bg-white/20 rounded-full transition-colors active:scale-90"
            >
              <X className="w-5 h-5" />
            </button>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-4xl max-h-[80vh] overflow-hidden rounded-3xl shadow-2xl border border-white/10 select-none" 
              onClick={(e) => e.stopPropagation()}
            >
              <img src={lightboxImage} alt="Expanded snapshot display" className="w-full h-auto max-h-[80vh] object-contain" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}