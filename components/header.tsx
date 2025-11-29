"use client";

import React from "react";
import Link from "next/link";
import { Phone, Mail } from "lucide-react";
import ThemeToggle from "@/components/theme-toggle";

// Contact constants
const CONTACT_EMAIL = "contact@e-web.ro";
const PHONE = "0750473111";

const Header = () => {
  const mailtoOffer = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
    "Cerere ofertă - Soluții digitale personalizate"
  )}&body=${encodeURIComponent(
    `Bună ziua,\n\nSunt interesat(ă) de serviciile e-Web și aș dori o ofertă personalizată pentru:\n\n□ Aplicații web custom\n□ Site web modern\n□ Magazin online\n□ Chatbot inteligent (WhatsApp/Web)\n□ Altceva: ________________\n\nVă rog să mă contactați pentru discuții detaliate.\n\nDate de contact:\nTelefon: ${PHONE}\nEmail: \n\nMulțumesc,\n`
  )}`;

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-xl dark:border-slate-800/80 dark:bg-slate-950/80 shadow-sm">
      <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="group flex items-center gap-2"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500 to-indigo-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
            <span className="font-black text-white text-lg">e</span>
          </div>
          <span className="font-black text-2xl tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-400">
            e-Web
          </span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-1 text-sm font-semibold text-slate-600 dark:text-slate-300">
          {["servicii", "proces", "portofoliu", "contact"].map((link) => (
            <Link
              key={link}
              href={`/#${link}`}
              className="capitalize px-4 py-2.5 rounded-xl hover:bg-gradient-to-r hover:from-sky-50 hover:to-indigo-50 dark:hover:from-sky-950 dark:hover:to-indigo-950 hover:text-sky-600 dark:hover:text-sky-400 transition-all"
            >
              {link}
            </Link>
          ))}
        </nav>
        
        <div className="flex items-center gap-3">
          {/* telefon click-to-call - VIZIBIL pe toate ecranele */}
          <a
            href={`tel:${PHONE}`}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-slate-100 to-slate-50 hover:from-slate-200 hover:to-slate-100 dark:from-slate-800 dark:to-slate-900 dark:hover:from-slate-700 dark:hover:to-slate-800 transition-all shadow-sm hover:shadow-md"
          >
            <Phone size={16} className="text-sky-600 dark:text-sky-400" />
            <span className="font-bold">0750 47 31 11</span>
          </a>

          {/* mail quick link - VIZIBIL pe toate ecranele */}
          <a
            href={mailtoOffer}
            className="hidden lg:inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-sky-500 to-indigo-600 text-white hover:from-sky-600 hover:to-indigo-700 transition-all shadow-md hover:shadow-lg hover:scale-105"
          >
            <Mail size={16} />
            <span>Cere Ofertă</span>
          </a>

          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;