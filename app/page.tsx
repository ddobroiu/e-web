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
      icon: <GaugeCircle className="text-sky-500" />,
      t: "Performanță Maximă",
      d: "Optimizări avansate pentru un scor de 100 în PageSpeed.",
    },
    {
      icon: <Puzzle className="text-purple-500" />,
      t: "Integrări la Cheie",
      d: "Conectăm orice serviciu extern: plăți, curieri, ERP, CRM.",
    },
    {
      icon: <Paintbrush className="text-pink-500" />,
      t: "Design Pixel-Perfect",
      d: "Interfețe moderne, intuitive și complet responsive.",
    },
    {
      icon: <CodeXml className="text-teal-500" />,
      t: "Cod Curat & Scalabil",
      d: "Construim fundații solide pentru viitorul proiectului tău.",
    },
    {
      icon: <ShoppingCart className="text-orange-500" />,
      t: "E-commerce Avansat",
      d: "De la coșul de cumpărături la management de stocuri.",
    },
    {
      icon: <Wallet className="text-green-500" />,
      t: "Costuri Transparente",
      d: "Fără taxe ascunse. Plătești exact pentru ce ai nevoie.",
    },
  ];

  // mailto pentru butonul "Cere o Ofertă" -> deschide clientul de email către contact@e-web.ro
  const mailtoOffer = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
    "Cerere ofertă"
  )}&body=${encodeURIComponent(
    `Bună,\n\nAș dori o ofertă pentru proiectul meu. Mă puteți contacta la telefon ${PHONE} sau pe email.\n\nMulțumesc,\n`
  )}`;

  return (
    <main className="bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200">
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/70 backdrop-blur-xl dark:border-slate-800/80 dark:bg-slate-950/70">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <Link
            href="/"
            className="font-bold text-2xl tracking-tighter text-slate-900 dark:text-white"
          >
            e-Web
          </Link>
          <nav className="hidden md:flex items-center gap-1 text-sm font-medium text-slate-600 dark:text-slate-300">
            {["servicii", "proces", "avantaje", "contact"].map((link) => (
              <a
                key={link}
                href={`#${link}`}
                className="capitalize px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                {link}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            {/* telefon click-to-call - VIZIBIL pe toate ecranele */}
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center px-3 py-2 rounded-lg text-sm bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 transition"
            >
              <span className="font-medium">0750 47 31 11</span>
            </a>

            {/* mail quick link - VIZIBIL pe toate ecranele */}
            <a
              href={mailtoOffer}
              className="inline-flex items-center px-3 py-2 rounded-lg text-sm bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 transition"
            >
              {CONTACT_EMAIL}
            </a>

            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0,_#e0f2fe_0%,_rgba(255,255,255,0)_25%)] dark:bg-[radial-gradient(circle_at_50%_0,_#0c4a6e_0%,_rgba(0,0,0,0)_35%)]" />
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
          className="mx-auto max-w-7xl px-4 py-24 sm:py-36 text-center"
        >
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-7xl font-extrabold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-slate-900 to-slate-600 dark:from-white dark:to-slate-400"
          >
            Lansăm Afaceri în Digital
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="mt-6 max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-300"
          >
            Creăm aplicații web și magazine online ultra-rapide care convertesc
            vizitatorii în clienți. De la idee la lansare, cu tehnologie de
            ultimă oră.
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-wrap justify-center gap-4"
          >
            <a
              href={mailtoOffer}
              className="inline-flex items-center gap-2.5 rounded-xl bg-sky-500 px-6 py-3 text-white font-semibold shadow-lg shadow-sky-500/20 hover:bg-sky-600 transition-all"
            >
              <span>Cere o Ofertă</span>
              <ArrowRight size={16} />
            </a>
            <a
              href={getWhatsAppUrl(
                "Salut! Aș dori mai multe informații despre serviciile voastre."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-slate-200 dark:border-slate-800 px-6 py-3 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              Discută pe WhatsApp
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* SECTIUNI */}
      <AnimatedSection id="servicii" className="bg-slate-50 dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-4">
          <motion.h2
            variants={itemVariants}
            className="text-4xl font-bold tracking-tighter text-center"
          >
            Servicii complete pentru succesul tău
          </motion.h2>
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {[
              {
                t: "Aplicații Web Custom",
                d: "Arhitectură, API, baze de date, panouri de administrare. Soluții end-to-end, perfect adaptate nevoilor tale.",
              },
              {
                t: "Magazine Online Performante",
                d: "Catalog, stocuri, plăți online, curieri, facturare. Tot ce ai nevoie pentru a vinde eficient online.",
              },
              {
                t: "Mentenanță & Optimizare",
                d: "Securitate, update-uri, optimizare SEO continuă și A/B testing pentru a crește constant.",
              },
            ].map((i) => (
              <motion.div
                key={i.t}
                variants={itemVariants}
                className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 text-center"
              >
                <h3 className="text-xl font-semibold">{i.t}</h3>
                <p className="mt-2 text-slate-600 dark:text-slate-300">
                  {i.d}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection id="proces" className="bg-white dark:bg-slate-900">
        <div className="mx-auto max-w-7xl px-4">
          <motion.h2
            variants={itemVariants}
            className="text-4xl font-bold tracking-tighter text-center"
          >
            Procesul Nostru Clar și Eficient
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="mt-4 text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto text-center"
          >
            Patru pași simpli de la concept la un produs digital de succes.
          </motion.p>
          <div className="mt-16 grid md:grid-cols-4 gap-4 text-center">
            {[
              {
                icon: <Search />,
                title: "1. Descoperire",
                desc: "Analizăm ideea, obiectivele și competiția.",
              },
              {
                icon: <Sparkles />,
                title: "2. Design UI/UX",
                desc: "Creăm interfețe atractive și ușor de folosit.",
              },
              {
                icon: <Layers />,
                title: "3. Dezvoltare",
                desc: "Scriem cod curat și eficient folosind tehnologii de top.",
              },
              {
                icon: <Rocket />,
                title: "4. Lansare",
                desc: "Publicăm proiectul și monitorizăm performanța.",
              },
            ].map((step) => (
              <motion.div
                key={step.title}
                variants={itemVariants}
                className="p-6"
              >
                <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-800 text-sky-500">
                  {React.cloneElement(step.icon, { size: 32 })}
                </div>
                <h3 className="mt-4 font-semibold">{step.title}</h3>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection id="avantaje" className="bg-slate-50 dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-4">
          <motion.h2
            variants={itemVariants}
            className="text-4xl font-bold tracking-tighter text-center"
          >
            De ce să lucrezi cu noi
          </motion.h2>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((i) => (
              <motion.div
                key={i.t}
                variants={itemVariants}
                className="p-6 rounded-2xl border border-transparent hover:border-sky-200 dark:hover:border-sky-900 bg-white dark:bg-slate-900 hover:shadow-2xl hover:shadow-sky-500/10 transition-[box-shadow,_border] duration-300"
              >
                <div className="flex items-center gap-4">
                  {React.cloneElement(i.icon, { size: 28 })}
                  <h3 className="text-lg font-semibold">{i.t}</h3>
                </div>
                <p className="mt-3 text-slate-600 dark:text-slate-300">
                  {i.d}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA */}
      <section className="bg-gradient-to-r from-sky-500 to-indigo-600 text-white">
        <div className="mx-auto max-w-7xl px-4 py-20 flex flex-col items-center text-center">
          <h3 className="text-4xl font-bold tracking-tighter">
            Gata să începi un proiect?
          </h3>
          <p className="mt-4 max-w-xl opacity-80">
            Hai să transformăm ideea ta într-un produs digital excepțional.
            Contactează-ne acum pentru o discuție fără obligații.
          </p>
          <a
            href="#contact"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3 text-sky-600 font-semibold shadow-lg hover:scale-105 transition-transform"
          >
            Contactează-ne
          </a>
        </div>
      </section>

      {/* CONTACT */}
      <AnimatedSection id="contact">
        <div className="mx-auto max-w-7xl px-4">
          <motion.h2
            variants={itemVariants}
            className="text-4xl font-bold tracking-tighter text-center"
          >
            Contact
          </motion.h2>
          <div className="mt-12 max-w-lg mx-auto">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-y-6">
              <motion.input
                required
                variants={itemVariants}
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full rounded-xl border border-slate-300 p-3 bg-white dark:bg-slate-800 dark:border-slate-700 focus:ring-2 focus:ring-sky-500 outline-none transition"
                placeholder="Nume"
              />
              <motion.input
                required
                variants={itemVariants}
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full rounded-xl border border-slate-300 p-3 bg-white dark:bg-slate-800 dark:border-slate-700 focus:ring-2 focus:ring-sky-500 outline-none transition"
                placeholder="Email"
                type="email"
              />
              <motion.input
                required
                variants={itemVariants}
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                className="w-full rounded-xl border border-slate-300 p-3 bg-white dark:bg-slate-800 dark:border-slate-700 focus:ring-2 focus:ring-sky-500 outline-none transition"
                placeholder="Subiect"
              />
              <motion.textarea
                required
                variants={itemVariants}
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full rounded-xl border border-slate-300 p-3 min-h-[140px] bg-white dark:bg-slate-800 dark:border-slate-700 focus:ring-2 focus:ring-sky-500 outline-none transition"
                placeholder="Cum te putem ajuta?"
              />

              <motion.button
                variants={itemVariants}
                type="submit"
                disabled={status.loading}
                className="w-full rounded-xl bg-slate-900 px-6 py-3 text-white font-semibold hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status.loading ? "Se trimite..." : "Trimite Mesajul"}
              </motion.button>

              {status.success && (
                <p className="text-green-600 text-center">{status.message}</p>
              )}
              {status.error && (
                <p className="text-red-600 text-center">{status.message}</p>
              )}
            </form>
          </div>
        </div>
      </AnimatedSection>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 dark:border-slate-800">
        <div className="mx-auto max-w-7xl px-4 py-8 text-sm text-slate-500 dark:text-slate-400 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            © {new Date().getFullYear()} e-Web. Toate drepturile rezervate.
          </div>
          <div className="flex items-center gap-6">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              {CONTACT_EMAIL}
            </a>
            <a
              href={`tel:${PHONE}`}
              className="hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              0750 47 31 11
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}