// components/theme-toggle.tsx
"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  // O verificare suplimentară: asigură-te că 'theme' nu este 'undefined'
  // Acest lucru se poate întâmpla dacă provider-ul nu este configurat corect
  if (!theme) {
    return null; // Sau un placeholder
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative w-9 h-9 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 hover:ring-2 hover:ring-sky-500 transition-shadow"
      aria-label="Toggle theme"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={theme === "dark" ? "moon" : "sun"}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {theme === "dark" ? <Moon size={16} /> : <Sun size={16} />}
        </motion.div>
      </AnimatePresence>
    </button>
  );
}