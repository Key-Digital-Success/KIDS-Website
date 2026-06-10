"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Defer mounting to guarantee clean theme selection on client load
  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className="w-10 h-10 rounded-xl bg-slate-200/20 animate-pulse" />;

  const isDark = resolvedTheme === "dark";

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200/80 dark:bg-slate-800/80 dark:hover:bg-slate-700/80 transition-colors border border-slate-200/40 dark:border-slate-700/30 focus:outline-none relative overflow-hidden cursor-pointer"
      aria-label="Toggle Website Color Theme"
    >
      <motion.div
        key={isDark ? "dark" : "light"}
        initial={{ y: 15, opacity: 0, rotate: -45 }}
        animate={{ y: 0, opacity: 1, rotate: 0 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      >
        {isDark ? (
          <Sun className="w-4 h-4 text-amber-400 fill-amber-400/20" />
        ) : (
          <Moon className="w-4 h-4 text-brand-blue fill-brand-blue/10" />
        )}
      </motion.div>
    </motion.button>
  );
}