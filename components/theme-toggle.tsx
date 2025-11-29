// components/theme-toggle.tsx
'use client';

import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const saved = localStorage.getItem('theme');
    const isDark = saved ? saved === 'dark' : prefersDark;
    setDark(isDark);
    
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const onToggle = () => {
    const next = !dark;
    setDark(next);
    
    if (next) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    localStorage.setItem('theme', next ? 'dark' : 'light');
  };

  if (!mounted) {
    return (
      <div className="w-14 h-8 rounded-full bg-slate-200 dark:bg-slate-700 animate-pulse" />
    );
  }

  return (
    <button
      onClick={onToggle}
      className="relative w-14 h-8 rounded-full bg-gradient-to-r from-slate-200 to-slate-300 dark:from-indigo-600 dark:to-purple-600 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-110"
      aria-label="Toggle theme"
    >
      <div 
        className={`absolute top-1 w-6 h-6 rounded-full bg-white shadow-lg transition-all duration-300 flex items-center justify-center ${
          dark ? 'left-7' : 'left-1'
        }`}
      >
        {dark ? (
          <Moon size={14} className="text-indigo-600" />
        ) : (
          <Sun size={14} className="text-amber-500" />
        )}
      </div>
    </button>
  );
}


