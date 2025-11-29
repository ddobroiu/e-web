"use client";

import React from "react";
import Link from "next/link";
import { Phone, Mail, MessageCircle } from "lucide-react";

// Contact constants
const CONTACT_EMAIL = "contact@e-web.ro";
const PHONE = "0750473111";
const WHATSAPP_NUMBER_INT = "40750473111";

const getWhatsAppUrl = (text: string) =>
  `https://wa.me/${WHATSAPP_NUMBER_INT}?text=${encodeURIComponent(text)}`;

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-slate-900 to-slate-800 dark:from-slate-950 dark:to-black text-slate-300 overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent to-sky-900/10" />
      
      <div className="relative mx-auto max-w-7xl px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500 to-indigo-600 flex items-center justify-center shadow-lg">
                <span className="font-black text-white text-lg">e</span>
              </div>
              <span className="font-black text-2xl text-white">e-Web</span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Transformăm idei în produse digitale de succes. Expertiză, pasiune și tehnologie de ultimă oră.
            </p>
          </div>
          
          {/* Quick links */}
          <div>
            <h3 className="font-bold text-white mb-4">Link-uri Rapide</h3>
            <ul className="space-y-2">
              {["servicii", "proces", "portofoliu", "contact"].map((link) => (
                <li key={link}>
                  <Link
                    href={`/#${link}`}
                    className="capitalize text-slate-400 hover:text-sky-400 transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="text-sky-500 group-hover:translate-x-1 transition-transform">→</span>
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact info */}
          <div>
            <h3 className="font-bold text-white mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-slate-400 hover:text-sky-400 transition-colors flex items-center gap-2"
                >
                  <Mail size={18} className="text-sky-500" />
                  <span>{CONTACT_EMAIL}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${PHONE}`}
                  className="text-slate-400 hover:text-sky-400 transition-colors flex items-center gap-2"
                >
                  <Phone size={18} className="text-sky-500" />
                  <span>0750 47 31 11</span>
                </a>
              </li>
              <li>
                <a
                  href={getWhatsAppUrl("Salut! Aș dori să discutăm.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-sky-400 transition-colors flex items-center gap-2"
                >
                  <MessageCircle size={18} className="text-sky-500" />
                  <span>WhatsApp</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
            <div>
              © {new Date().getFullYear()} <span className="text-white font-semibold">e-Web</span>. Toate drepturile rezervate.
            </div>
            <div className="flex items-center gap-6">
              <Link href="/politica-confidentialitate" className="hover:text-sky-400 transition-colors">
                Politică Confidențialitate
              </Link>
              <Link href="/termeni-conditii" className="hover:text-sky-400 transition-colors">
                Termeni & Condiții
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;