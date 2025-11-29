"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  CodeXml,
  GaugeCircle,
  Paintbrush,
  Puzzle,
  ShoppingCart,
  Wallet,
  ArrowRight,
  Sparkles,
  Layers,
  Rocket,
  Search,
  Zap,
  Target,
  Gem,
  Phone,
  Mail,
  MessageCircle,
  Send,
  CheckCircle2,
  XCircle,
  Bot,
  Globe,
  Store,
  Smartphone,
} from "lucide-react";

import ThemeToggle from "@/components/theme-toggle";

// Contact constants (nu șterg nimic din conținutul original)
const CONTACT_EMAIL = "contact@e-web.ro";
const PHONE = "0750473111";
// WhatsApp număr în format internațional (Romania: 40 + 750473111)
const WHATSAPP_NUMBER_INT = "40750473111";
// helper pentru a genera URL WhatsApp corect
const getWhatsAppUrl = (text: string) =>
  `https://wa.me/${WHATSAPP_NUMBER_INT}?text=${encodeURIComponent(text)}`;

// cubic-bezier pentru easeOut-like (compatibil cu tipurile Framer Motion)
const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];

const AnimatedSection = ({
  children,
  id,
  className = "",
}: {
  children: React.ReactNode;
  id?: string;
  className?: string;
}) => {
  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        // NU mai folosim string, ci cubic-bezier:
        ease: EASE_OUT,
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <motion.section
      id={id}
      className={`py-24 sm:py-32 ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      {children}
    </motion.section>
  );
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE_OUT },
  },
};

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: false,
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: false, message: "" });

    try {
      const response = await fetch("/api/send-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result: { success: boolean; message?: string } =
        await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "A apărut o eroare.");
      }

      setStatus({
        loading: false,
        success: true,
        error: false,
        message: result.message ?? "Mesaj trimis cu succes!",
      });

      // Construim mesaj WhatsApp cu datele introduse (folosim newline și apoi encode)
      const waText = `Salut!\n\nNume: ${formData.name}\nEmail: ${formData.email}\nSubiect: ${formData.subject}\nMesaj: ${formData.message}\n\nMulțumesc!`;
      const waUrl = getWhatsAppUrl(waText);

      // reset form (după ce construim link-ul ca să nu pierdem datele)
      setFormData({ name: "", email: "", subject: "", message: "" });

      // deschidem WhatsApp într-o filă nouă (utilizatorul va trimite manual în aplicație)
      if (typeof window !== "undefined") {
        window.open(waUrl, "_blank", "noopener,noreferrer");
      }
    } catch (err: unknown) {
      const msg =
        err instanceof Error
          ? err.message
          : typeof err === "string"
          ? err
          : "A apărut o eroare.";
      setStatus({
        loading: false,
        success: false,
        error: true,
        message: msg,
      });
    }
  };

  const advantages = [
    {
      icon: <Sparkles className="text-sky-500" />,
      t: "100% Personalizat",
      d: "Fiecare soluție este construită de la zero, adaptată perfect nevoilor și brandului tău.",
    },
    {
      icon: <Bot className="text-purple-500" />,
      t: "Chatboți Inteligenti",
      d: "Automatizare pe WhatsApp și chat live în site pentru suport clienți non-stop.",
    },
    {
      icon: <GaugeCircle className="text-pink-500" />,
      t: "Performanță Blazing Fast",
      d: "Optimizări avansate pentru viteză maximă și scor perfect în Google PageSpeed.",
    },
    {
      icon: <Puzzle className="text-teal-500" />,
      t: "Integrări Complete",
      d: "Conectăm orice: plăți online, curieri, ERP, CRM, WhatsApp API și alte servicii.",
    },
    {
      icon: <Paintbrush className="text-orange-500" />,
      t: "Design Premium",
      d: "Interfețe moderne, intuitive și pixel-perfect pe toate dispozitivele.",
    },
    {
      icon: <Rocket className="text-green-500" />,
      t: "Suport Continuu",
      d: "Mentenanță, update-uri, optimizare SEO și A/B testing pentru creștere constantă.",
    },
  ];

  // mailto pentru butonul "Cere o Ofertă" -> deschide clientul de email către contact@e-web.ro
  const mailtoOffer = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
    "Cerere ofertă - Soluții digitale personalizate"
  )}&body=${encodeURIComponent(
    `Bună ziua,\n\nSunt interesat(ă) de serviciile e-Web și aș dori o ofertă personalizată pentru:\n\n□ Aplicații web custom\n□ Site web modern\n□ Magazin online\n□ Chatbot inteligent (WhatsApp/Web)\n□ Altceva: ________________\n\nVă rog să mă contactați pentru discuții detaliate.\n\nDate de contact:\nTelefon: ${PHONE}\nEmail: \n\nMulțumesc,\n`
  )}`;

  return (
    <main className="bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200">
      {/* HEADER */}
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
              <a
                key={link}
                href={`#${link}`}
                className="capitalize px-4 py-2.5 rounded-xl hover:bg-gradient-to-r hover:from-sky-50 hover:to-indigo-50 dark:hover:from-sky-950 dark:hover:to-indigo-950 hover:text-sky-600 dark:hover:text-sky-400 transition-all"
              >
                {link}
              </a>
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

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-sky-50 to-indigo-100 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950">
        {/* Animated gradient orbs */}
        <div className="absolute top-0 -left-4 w-96 h-96 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-30 animate-blob" />
        <div className="absolute top-0 -right-4 w-96 h-96 bg-yellow-300 dark:bg-yellow-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-pink-300 dark:bg-pink-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-30 animate-blob animation-delay-4000" />
        
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
          className="relative mx-auto max-w-7xl px-4 py-32 sm:py-40 text-center"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-gradient-to-r from-sky-500/10 to-indigo-500/10 border border-sky-500/20 dark:border-sky-400/20 backdrop-blur-sm"
          >
            <Zap size={16} className="text-sky-600 dark:text-sky-400" />
            <span className="text-sm font-medium text-sky-700 dark:text-sky-300">Tehnologie de Ultimă Generație</span>
          </motion.div>
          
          <motion.h1
            variants={itemVariants}
            className="text-6xl sm:text-8xl font-black tracking-tighter mb-8"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-sky-700 to-indigo-900 dark:from-white dark:via-sky-300 dark:to-indigo-200">
              Soluții Digitale
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-600 to-indigo-600 dark:from-sky-400 dark:to-indigo-400">
              100% Personalizate
            </span>
          </motion.h1>
          
          <motion.p
            variants={itemVariants}
            className="mt-8 max-w-3xl mx-auto text-xl sm:text-2xl text-slate-700 dark:text-slate-300 leading-relaxed font-light"
          >
            Creăm <span className="font-semibold text-sky-600 dark:text-sky-400">aplicații web custom</span>, <span className="font-semibold text-indigo-600 dark:text-indigo-400">site-uri web</span>, <span className="font-semibold text-purple-600 dark:text-purple-400">magazine online</span> și <span className="font-semibold text-pink-600 dark:text-pink-400">chatboți inteligenti</span> (WhatsApp & live chat). Totul personalizat pentru afacerea ta.
          </motion.p>
          
          <motion.div
            variants={itemVariants}
            className="mt-12 flex flex-wrap justify-center gap-4"
          >
            <a
              href={mailtoOffer}
              className="group relative inline-flex items-center gap-2.5 rounded-2xl bg-gradient-to-r from-sky-500 to-indigo-600 px-8 py-4 text-white font-bold text-lg shadow-2xl shadow-sky-500/30 hover:shadow-sky-500/50 hover:scale-105 transition-all duration-300"
            >
              <span>Cere o Ofertă Gratuită</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href={getWhatsAppUrl(
                "Salut! Aș dori mai multe informații despre serviciile voastre."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-2xl border-2 border-slate-300 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm px-8 py-4 font-bold text-lg text-slate-900 dark:text-white hover:bg-white dark:hover:bg-slate-800 hover:scale-105 transition-all duration-300 shadow-xl"
            >
              <MessageCircle size={20} />
              <span>Discută pe WhatsApp</span>
            </a>
          </motion.div>
          
          {/* Trust indicators */}
          <motion.div
            variants={itemVariants}
            className="mt-20 flex flex-wrap justify-center items-center gap-8 text-sm text-slate-600 dark:text-slate-400"
          >
            <div className="flex items-center gap-2">
              <CheckCircle2 size={18} className="text-green-500" />
              <span>Livrare Rapidă</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={18} className="text-green-500" />
              <span>Suport 24/7</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={18} className="text-green-500" />
              <span>Garanție Satisfacție</span>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* SECTIUNI */}
      <AnimatedSection id="servicii" className="bg-white dark:bg-slate-900">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-gradient-to-r from-sky-100 to-indigo-100 dark:from-sky-950 dark:to-indigo-950 border border-sky-200 dark:border-sky-800"
            >
              <Rocket size={16} className="text-sky-600 dark:text-sky-400" />
              <span className="text-sm font-semibold text-sky-700 dark:text-sky-300">SERVICII PREMIUM</span>
            </motion.div>
            <motion.h2
              variants={itemVariants}
              className="text-5xl sm:text-6xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-400"
            >
              Servicii Complete pentru
              <br />
              <span className="text-sky-600 dark:text-sky-400">Succesul Tău</span>
            </motion.h2>
          </div>
          
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <CodeXml size={40} />,
                color: "from-sky-500 to-cyan-500",
                t: "Aplicații Web Custom",
                d: "Platforme complete cu arhitectură robustă, API-uri, baze de date și panouri de administrare. Soluții enterprise adaptate perfect nevoilor tale.",
              },
              {
                icon: <Globe size={40} />,
                color: "from-indigo-500 to-blue-500",
                t: "Site-uri Web Moderne",
                d: "Landing pages, site-uri prezentare și portofolii ultra-rapide, optimizate SEO, cu design responsive și performanță maximă.",
              },
              {
                icon: <Store size={40} />,
                color: "from-purple-500 to-pink-500",
                t: "Magazine Online Complete",
                d: "E-commerce avansat: catalog produse, gestiune stocuri, plăți online, integrare curieri, facturare automată și rapoarte detaliate.",
              },
              {
                icon: <Bot size={40} />,
                color: "from-pink-500 to-rose-500",
                t: "Chatboți Inteligenti",
                d: "Asistenți virtuali pe WhatsApp și chat live integrat în site. Automatizare conversații, suport clienți 24/7 și generare leads.",
              },
            ].map((i) => (
              <Link 
                key={i.t}
                href={
                  i.t === "Aplicații Web Custom" ? "/aplicatii-web" :
                  i.t === "Site-uri Web Moderne" ? "/siteuri-web" :
                  i.t === "Magazine Online Complete" ? "/magazine-online" :
                  i.t === "Chatboți Inteligenti" ? "/chatboti" : "#"
                }
                className="block"
              >
                <motion.div
                  variants={itemVariants}
                  className="group relative rounded-3xl border border-slate-200 dark:border-slate-800 bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-800 p-8 hover:shadow-2xl hover:scale-105 transition-all duration-500 overflow-hidden cursor-pointer"
                >
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${i.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  <div className="relative">
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${i.color} text-white shadow-lg mb-6`}>
                      {i.icon}
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">{i.t}</h3>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                      {i.d}
                    </p>
                    
                    <div className="mt-6 inline-flex items-center text-sm font-semibold text-sky-600 dark:text-sky-400 group-hover:gap-2 transition-all">
                      <span>Află mai mult</span>
                      <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection id="proces" className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-20">
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-950 dark:to-purple-950 border border-indigo-200 dark:border-indigo-800"
            >
              <Zap size={16} className="text-indigo-600 dark:text-indigo-400" />
              <span className="text-sm font-semibold text-indigo-700 dark:text-indigo-300">PROCES EFICIENT</span>
            </motion.div>
            <motion.h2
              variants={itemVariants}
              className="text-5xl sm:text-6xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-400"
            >
              Transformăm Viziunea Ta
              <br />
              <span className="text-indigo-600 dark:text-indigo-400">în Realitate Digitală</span>
            </motion.h2>
          </div>
          
          <div className="mt-16 grid md:grid-cols-4 gap-8">
            {[
              {
                icon: <Search />,
                number: "01",
                title: "Descoperire",
                desc: "Analizăm ideea, obiectivele și competiția.",
                gradient: "from-sky-500 to-cyan-500",
              },
              {
                icon: <Sparkles />,
                number: "02",
                title: "Design UI/UX",
                desc: "Creăm interfețe atractive și ușor de folosit.",
                gradient: "from-indigo-500 to-purple-500",
              },
              {
                icon: <Layers />,
                number: "03",
                title: "Dezvoltare",
                desc: "Scriem cod curat și eficient folosind tehnologii de top.",
                gradient: "from-purple-500 to-pink-500",
              },
              {
                icon: <Rocket />,
                number: "04",
                title: "Lansare",
                desc: "Publicăm proiectul și monitorizăm performanța.",
                gradient: "from-pink-500 to-rose-500",
              },
            ].map((step, idx) => (
              <motion.div
                key={step.title}
                variants={itemVariants}
                className="relative group"
              >
                {/* Connecting line */}
                {idx < 3 && (
                  <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-slate-300 to-transparent dark:from-slate-700 dark:to-transparent" />
                )}
                
                <div className="relative bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-slate-200 dark:border-slate-800 group-hover:scale-105">
                  {/* Number badge */}
                  <div className={`absolute -top-4 -right-4 w-12 h-12 rounded-full bg-gradient-to-br ${step.gradient} text-white font-black text-lg flex items-center justify-center shadow-lg`}>
                    {step.number}
                  </div>
                  
                  <div className={`w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-2xl bg-gradient-to-br ${step.gradient} text-white shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                    {React.cloneElement(step.icon, { size: 36 })}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white text-center">{step.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed text-center">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection id="avantaje" className="bg-white dark:bg-slate-900">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-950 dark:to-pink-950 border border-purple-200 dark:border-purple-800"
            >
              <Gem size={16} className="text-purple-600 dark:text-purple-400" />
              <span className="text-sm font-semibold text-purple-700 dark:text-purple-300">AVANTAJE COMPETITIVE</span>
            </motion.div>
            <motion.h2
              variants={itemVariants}
              className="text-5xl sm:text-6xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-400"
            >
              De ce să Lucrezi
              <br />
              <span className="text-purple-600 dark:text-purple-400">cu Noi</span>
            </motion.h2>
          </div>
          
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((i, idx) => (
              <motion.div
                key={i.t}
                variants={itemVariants}
                className="group relative p-8 rounded-3xl border-2 border-slate-200 dark:border-slate-800 bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-800 hover:border-sky-300 dark:hover:border-sky-700 hover:shadow-2xl hover:scale-105 transition-all duration-500"
              >
                {/* Gradient glow effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-sky-500/0 to-indigo-500/0 group-hover:from-sky-500/10 group-hover:to-indigo-500/10 transition-all duration-500" />
                
                <div className="relative">
                  <div className="mb-6">
                    {React.cloneElement(i.icon, { size: 48, strokeWidth: 1.5 })}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">{i.t}</h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    {i.d}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CHATBOTS HIGHLIGHT SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-600 via-pink-600 to-rose-600 text-white py-24 sm:py-32">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,_transparent_25%,_rgba(255,255,255,0.1)_25%,_rgba(255,255,255,0.1)_50%,_transparent_50%,_transparent_75%,_rgba(255,255,255,0.1)_75%)] bg-[length:60px_60px]" />
        </div>
        
        <div className="relative mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 mb-6 px-5 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
              <Bot size={20} />
              <span className="text-sm font-semibold">AUTOMATIZARE INTELIGENTĂ</span>
            </div>
            
            <h2 className="text-5xl sm:text-6xl font-black tracking-tighter mb-6">
              Chatboți care Lucrează
              <br />
              24/7 pentru Afacerea Ta
            </h2>
            
            <p className="max-w-3xl mx-auto text-xl opacity-90 leading-relaxed">
              Implementăm asistenți virtuali inteligenți pe WhatsApp și chat live direct în site-ul tău.
              Automatizează conversațiile, generează leads și oferă suport clienților non-stop.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20"
            >
              <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mb-6">
                <Smartphone size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">WhatsApp Chatbot</h3>
              <ul className="space-y-3 text-white/90">
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="mt-1 flex-shrink-0" />
                  <span>Răspunsuri automate la întrebări frecvente</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="mt-1 flex-shrink-0" />
                  <span>Preluare comenzi și rezervări automat</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="mt-1 flex-shrink-0" />
                  <span>Notificări și urmărire status comenzi</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="mt-1 flex-shrink-0" />
                  <span>Integrare cu sistemele tale existente</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20"
            >
              <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mb-6">
                <MessageCircle size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Live Chat în Site</h3>
              <ul className="space-y-3 text-white/90">
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="mt-1 flex-shrink-0" />
                  <span>Widget personalizat integrat în design-ul site-ului</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="mt-1 flex-shrink-0" />
                  <span>Colectare leads și informații contact automat</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="mt-1 flex-shrink-0" />
                  <span>Răspunsuri instant bazate pe AI și reguli custom</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="mt-1 flex-shrink-0" />
                  <span>Dashboard pentru gestionare conversații</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-sky-600 via-indigo-600 to-purple-700 text-white">
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,_rgba(255,255,255,0.2)_0%,_transparent_50%)]" />
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_50%,_rgba(255,255,255,0.2)_0%,_transparent_50%)]" />
        </div>
        
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:py-32 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 mb-6 px-5 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
              <Target size={16} />
              <span className="text-sm font-semibold">PREGĂTIT SĂ ÎNCEPEM?</span>
            </div>
            
            <h3 className="text-5xl sm:text-7xl font-black tracking-tighter mb-6">
              Vrei o Soluție
              <br />
              100% Personalizată?
            </h3>
            
            <p className="mt-6 max-w-2xl mx-auto text-xl sm:text-2xl opacity-90 leading-relaxed font-light">
              De la aplicații web complexe la chatboți inteligenti, construim exact ce ai nevoie.
              Contactează-ne pentru o <span className="font-semibold">consultație gratuită</span> și ofertă personalizată.
            </p>
            
            <div className="mt-12 flex flex-wrap justify-center gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 rounded-2xl bg-white px-10 py-5 text-sky-600 font-bold text-lg shadow-2xl hover:shadow-white/20 hover:scale-110 transition-all duration-300"
              >
                <span>Contactează-ne Acum</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href={`tel:${PHONE}`}
                className="inline-flex items-center gap-3 rounded-2xl border-2 border-white/30 bg-white/10 backdrop-blur-sm px-10 py-5 font-bold text-lg hover:bg-white/20 hover:scale-110 transition-all duration-300"
              >
                <Phone size={20} />
                <span>Sună Acum</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PORTOFOLIU */}
      <AnimatedSection id="portofoliu" className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-950 dark:via-purple-950 dark:to-pink-950">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-950 dark:to-purple-950 border border-indigo-200 dark:border-indigo-800"
            >
              <Gem size={16} className="text-indigo-600 dark:text-indigo-400" />
              <span className="text-sm font-semibold text-indigo-700 dark:text-indigo-300">PROIECTE REALIZATE</span>
            </motion.div>
            <motion.h2
              variants={itemVariants}
              className="text-5xl sm:text-6xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-indigo-900 to-purple-900 dark:from-indigo-200 dark:to-purple-200"
            >
              Portofoliu
              <br />
              <span className="text-pink-600 dark:text-pink-400">Premium</span>
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="mt-6 max-w-3xl mx-auto text-xl text-slate-700 dark:text-slate-300 leading-relaxed"
            >
              Proiecte inovatoare care demonstrează expertiza noastră în dezvoltarea soluțiilor digitale de ultimă generație
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              {
                name: "Prynt.ro",
                description: "Platformă completă de tipar digital cu configuratoare interactive, sistem de comenzi și asistent AI integrat",
                url: "https://www.prynt.ro/",
                category: "E-commerce & AI",
                tech: ["Next.js", "AI Assistant", "E-commerce", "Configuratori"],
                color: "from-blue-500 to-cyan-500"
              },
              {
                name: "Randări3D.ro", 
                description: "Studio AI pentru design interior și randări 3D folosind Gemini și Google Veo pentru crearea de conținut vizual",
                url: "https://www.randari3d.ro/",
                category: "AI & Design",
                tech: ["AI Gemini", "Google Veo", "3D Rendering", "Design Tool"],
                color: "from-purple-500 to-pink-500"
              },
              {
                name: "MP5.ro",
                description: "Platformă pentru comanda de muzică personalizată cu generare automată și multiple stiluri muzicale",
                url: "https://www.mp5.ro/",
                category: "Creative & Audio",
                tech: ["Audio Processing", "Custom Music", "Payment System", "Creative AI"],
                color: "from-orange-500 to-red-500"
              },
              {
                name: "AI365.ro",
                description: "Curs complet pentru crearea de video-uri virale cu AI, de la script la montaj automatizat",
                url: "https://www.ai365.ro/",
                category: "Education & AI",
                tech: ["Video AI", "Educational Platform", "Course Management", "Community"],
                color: "from-green-500 to-emerald-500"
              },
              {
                name: "3DView.ai",
                description: "Soluții avansate de vizualizare 3D și realitate augmentată pentru prezentarea produselor",
                url: "https://3dview.ai/",
                category: "3D & AR",
                tech: ["3D Visualization", "AR Technology", "WebGL", "Interactive"],
                color: "from-indigo-500 to-purple-500"
              },
              {
                name: "Anuntul.net",
                description: "Platformă de știri regionale cu 17K+ vizitatori zilnic, organizare pe regiuni și sistem de comunicare automată",
                url: "https://anuntul.net/",
                category: "Media & News",
                tech: ["News Platform", "Regional Content", "SEO Optimized", "Analytics"],
                color: "from-red-500 to-rose-500"
              }
            ].map((project, index) => (
              <motion.div
                key={project.name}
                variants={itemVariants}
                className="group"
              >
                <a 
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="relative rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-500">
                    {/* Project Image Placeholder */}
                    <div className={`relative h-48 bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                      <div className="absolute inset-0 bg-black/10" />
                      <div className="relative text-center text-white">
                        <Globe size={48} className="mx-auto mb-2" />
                        <div className="text-sm font-medium opacity-90">{project.category}</div>
                      </div>
                      {/* Live indicator */}
                      <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                        <span className="text-xs font-medium text-white">LIVE</span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                          {project.name}
                        </h3>
                        <ArrowRight size={20} className="text-slate-400 group-hover:text-indigo-500 group-hover:translate-x-1 transition-all" />
                      </div>
                      
                      <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-medium text-slate-700 dark:text-slate-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            variants={itemVariants}
            className="text-center mt-16"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold shadow-xl hover:shadow-indigo-500/30 hover:scale-105 transition-all">
              <Sparkles size={20} />
              <span>Vezi toate proiectele live</span>
              <ArrowRight size={16} />
            </div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* CONTACT */}
      <AnimatedSection id="contact" className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-gradient-to-r from-sky-100 to-indigo-100 dark:from-sky-950 dark:to-indigo-950 border border-sky-200 dark:border-sky-800"
            >
              <Mail size={16} className="text-sky-600 dark:text-sky-400" />
              <span className="text-sm font-semibold text-sky-700 dark:text-sky-300">HAI SĂ DISCUTĂM</span>
            </motion.div>
            <motion.h2
              variants={itemVariants}
              className="text-5xl sm:text-6xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-400"
            >
              Trimite-ne un
              <br />
              <span className="text-sky-600 dark:text-sky-400">Mesaj</span>
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="mt-4 text-lg text-slate-600 dark:text-slate-400"
            >
              Răspundem în maxim 24 de ore
            </motion.p>
          </div>
          
          <div className="mt-12 max-w-2xl mx-auto">
            <motion.div
              variants={itemVariants}
              className="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border-2 border-slate-200 dark:border-slate-800 p-8 sm:p-12"
            >
              <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
                <motion.div variants={itemVariants}>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Nume Complet</label>
                  <input
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full rounded-xl border-2 border-slate-200 dark:border-slate-700 p-4 bg-slate-50 dark:bg-slate-800 focus:border-sky-500 dark:focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10 outline-none transition text-slate-900 dark:text-white"
                    placeholder="Ion Popescu"
                  />
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Adresa de Email</label>
                  <input
                    required
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full rounded-xl border-2 border-slate-200 dark:border-slate-700 p-4 bg-slate-50 dark:bg-slate-800 focus:border-sky-500 dark:focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10 outline-none transition text-slate-900 dark:text-white"
                    placeholder="ion@exemplu.ro"
                    type="email"
                  />
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Subiect</label>
                  <input
                    required
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full rounded-xl border-2 border-slate-200 dark:border-slate-700 p-4 bg-slate-50 dark:bg-slate-800 focus:border-sky-500 dark:focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10 outline-none transition text-slate-900 dark:text-white"
                    placeholder="Despre ce vrei să discutăm?"
                  />
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Mesaj</label>
                  <textarea
                    required
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full rounded-xl border-2 border-slate-200 dark:border-slate-700 p-4 min-h-[160px] bg-slate-50 dark:bg-slate-800 focus:border-sky-500 dark:focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10 outline-none transition resize-none text-slate-900 dark:text-white"
                    placeholder="Descrie-ne proiectul tău..."
                  />
                </motion.div>

                <motion.button
                  variants={itemVariants}
                  type="submit"
                  disabled={status.loading}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 px-8 py-4 text-white font-bold text-lg shadow-xl shadow-sky-500/20 hover:shadow-2xl hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {status.loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Se trimite...</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Trimite Mesajul</span>
                    </>
                  )}
                </motion.button>

                {status.success && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 p-4 rounded-xl bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-800 text-green-700 dark:text-green-300 font-semibold"
                  >
                    <CheckCircle2 size={20} />
                    <span>{status.message}</span>
                  </motion.div>
                )}
                {status.error && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 p-4 rounded-xl bg-red-100 dark:bg-red-900/30 border border-red-300 dark:border-red-800 text-red-700 dark:text-red-300 font-semibold"
                  >
                    <XCircle size={20} />
                    <span>{status.message}</span>
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* FOOTER */}
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
                    <a
                      href={`#${link}`}
                      className="capitalize text-slate-400 hover:text-sky-400 transition-colors inline-flex items-center gap-2 group"
                    >
                      <span className="text-sky-500 group-hover:translate-x-1 transition-transform">→</span>
                      {link}
                    </a>
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
    </main>
  );
}