// components/theme-toggle.tsx
'use client';

import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Verifică tema salvată sau preferința sistemului
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = saved === 'dark' || (saved === null && prefersDark);
    
    setDark(isDark);
    applyTheme(isDark);
  }, []);

  const applyTheme = (isDark: boolean) => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.setAttribute('data-theme', 'light');
    }
  };

  const onToggle = () => {
    const nextTheme = !dark;
    setDark(nextTheme);
    applyTheme(nextTheme);
    localStorage.setItem('theme', nextTheme ? 'dark' : 'light');
  };

  if (!mounted) {
    return (
      <div className="w-14 h-8 rounded-full bg-slate-200 animate-pulse" />
    );
  }

  return (
    <button
      onClick={onToggle}
      className="group relative w-14 h-8 rounded-full bg-gradient-to-r from-slate-200 to-slate-300 dark:from-indigo-600 dark:to-purple-600 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-110 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
      aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={dark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {/* Track background indicators */}
      <div className="absolute inset-0 rounded-full overflow-hidden">
        <div className={`absolute inset-0 transition-opacity duration-300 ${dark ? 'opacity-100' : 'opacity-0'}`}>
          <div className="w-full h-full bg-gradient-to-r from-indigo-600 to-purple-600" />
        </div>
        <div className={`absolute inset-0 transition-opacity duration-300 ${dark ? 'opacity-0' : 'opacity-100'}`}>
          <div className="w-full h-full bg-gradient-to-r from-amber-200 to-orange-200" />
        </div>
      </div>
      
      {/* Sliding toggle */}
      <div 
        className={`absolute top-1 w-6 h-6 rounded-full bg-white shadow-lg transition-all duration-300 flex items-center justify-center transform ${
          dark ? 'translate-x-6' : 'translate-x-1'
        } group-hover:scale-110`}
      >
        <div className="relative">
          {dark ? (
            <Moon size={14} className="text-indigo-600 transition-colors duration-300" />
          ) : (
            <Sun size={14} className="text-amber-500 transition-colors duration-300" />
          )}
        </div>
      </div>
      
      {/* Theme labels */}
      <div className="absolute inset-0 flex items-center justify-between px-2 text-xs font-medium pointer-events-none">
        <span className={`transition-opacity duration-300 ${dark ? 'opacity-0' : 'opacity-70'} text-amber-700`}>
          ☀️
        </span>
        <span className={`transition-opacity duration-300 ${dark ? 'opacity-70' : 'opacity-0'} text-purple-200`}>
          🌙
        </span>
      </div>
    </button>
  );
}


