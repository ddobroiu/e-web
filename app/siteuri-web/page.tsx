"use client";

import type { Metadata } from "next";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ArrowLeft, 
  CheckCircle2, 
  Globe, 
  Search, 
  Zap,
  Smartphone,
  Palette,
  BarChart3,
  Users,
  Shield,
  Rocket,
  Eye
} from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function SiteuriWebPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <Header />
      
      <main>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-100 dark:from-slate-950 dark:via-indigo-950 dark:to-purple-950 py-20">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-indigo-300 dark:bg-indigo-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-30 animate-blob" />
        <div className="absolute top-0 -right-4 w-96 h-96 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
        
        <div className="relative max-w-7xl mx-auto px-4">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors mb-8"
          >
            <ArrowLeft size={20} />
            <span>Înapoi la pagina principală</span>
          </Link>
          
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 dark:border-indigo-400/20 backdrop-blur-sm"
            >
              <Globe size={16} className="text-indigo-600 dark:text-indigo-400" />
              <span className="text-sm font-medium text-indigo-700 dark:text-indigo-300">WEB DESIGN & DEVELOPMENT</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl sm:text-7xl font-black tracking-tighter mb-6"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-indigo-700 to-purple-900 dark:from-white dark:via-indigo-300 dark:to-purple-200">
                Site-uri Web
              </span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
                Moderne & Rapide
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-700 dark:text-slate-300 leading-relaxed mb-8"
            >
              Construim site-uri web ultra-rapide, optimizate SEO și complet responsive. 
              De la landing pages pentru conversii maxime la site-uri corporate impresionante.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-4 rounded-2xl font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <span>Cere o Ofertă</span>
              </Link>
              <Link
                href="tel:0750473111"
                className="inline-flex items-center gap-2 border-2 border-slate-300 dark:border-slate-700 px-8 py-4 rounded-2xl font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
              >
                <span>Sună Acum</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tipuri de Site-uri */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black tracking-tighter mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-400">
                Tipuri de Site-uri Web
              </span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400">
              Soluții adaptate pentru orice tip de business
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Rocket size={32} />,
                title: "Landing Pages",
                desc: "Pagini optimizate pentru conversii cu design persuasiv, call-to-action strategice și A/B testing pentru rezultate maxime.",
                features: ["Optimizare conversii", "A/B Testing", "Analytics avansate", "Lead generation"]
              },
              {
                icon: <Users size={32} />,
                title: "Site-uri Corporate",
                desc: "Prezență online profesională pentru companii cu secțiuni despre noi, servicii, echipă și contact.",
                features: ["Design corporate", "Multi-language", "Blog integrat", "SEO optimizat"]
              },
              {
                icon: <Eye size={32} />,
                title: "Portofolii Creative", 
                desc: "Showcase impresionant pentru artiști, designeri și freelanceri cu galerii și prezentare lucrări.",
                features: ["Galerii interactive", "Design unic", "Responsive perfect", "Loading ultra-rapid"]
              },
              {
                icon: <BarChart3 size={32} />,
                title: "Site-uri SaaS",
                desc: "Pagini de prezentare pentru aplicații software cu pricing, features și demo-uri interactive.",
                features: ["Pricing tables", "Demo interactiv", "User testimonials", "Integration showcase"]
              },
              {
                icon: <Palette size={32} />,
                title: "Site-uri Creative",
                desc: "Design custom pentru agenții creative, studiouri și brand-uri care vor să iasă în evidență.",
                features: ["Design la comandă", "Animații complexe", "Interacțiuni unice", "Branding integrat"]
              },
              {
                icon: <Shield size={32} />,
                title: "Site-uri Medicale/Juridice",
                desc: "Site-uri conforme cu standardele din domenii reglementate cu focus pe încredere și profesionalism.",
                features: ["GDPR compliant", "Formă profesională", "Certificări vizibile", "Contact rapid"]
              }
            ].map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group p-8 rounded-3xl border-2 border-slate-200 dark:border-slate-800 bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-800 hover:border-indigo-300 dark:hover:border-indigo-700 hover:shadow-2xl hover:scale-105 transition-all duration-500"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">{item.title}</h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">{item.desc}</p>
                <div className="grid grid-cols-2 gap-2">
                  {item.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-1">
                      <CheckCircle2 size={14} className="text-green-500 flex-shrink-0" />
                      <span className="text-xs text-slate-500 dark:text-slate-400">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Performanță & SEO */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black tracking-tighter mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-400">
                Performanță & Optimizare
              </span>
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white">
                🚀 Viteza de Încărcare Extremă
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                Site-urile noastre se încarcă în mai puțin de 2 secunde și obțin scoruri perfecte în Google PageSpeed. 
                Folosim tehnologii moderne și optimizări avansate pentru performanță maximă.
              </p>
              <div className="space-y-4">
                {[
                  "PageSpeed Score 95-100 garantat",
                  "Core Web Vitals optimizate",
                  "CDN global pentru viteza maximă", 
                  "Imagini comprimate automat",
                  "Lazy loading și caching inteligent"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 size={20} className="text-green-500 flex-shrink-0" />
                    <span className="text-slate-600 dark:text-slate-400">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white">
                🎯 SEO & Marketing Digital
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                Optimizăm fiecare pagină pentru motoarele de căutare și implementăm strategii de marketing digital 
                pentru a atrage trafic calificat și a crește conversiile.
              </p>
              <div className="space-y-4">
                {[
                  "Research și optimizare cuvinte cheie",
                  "Meta tags și structured data",
                  "Google Analytics & Search Console",
                  "Integrare rețele sociale",
                  "Schema markup pentru rich snippets"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 size={20} className="text-green-500 flex-shrink-0" />
                    <span className="text-slate-600 dark:text-slate-400">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black tracking-tighter mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-400">
                De la Concept la Lansare
              </span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Strategie & Concept",
                desc: "Definim obiectivele, analizăm audiența țintă și creăm strategia de design și conținut.",
                color: "from-sky-500 to-cyan-500"
              },
              {
                step: "02", 
                title: "Design & Prototip",
                desc: "Creăm wireframe-uri, mockup-uri și prototipuri interactive pentru validare.",
                color: "from-indigo-500 to-blue-500"
              },
              {
                step: "03",
                title: "Dezvoltare & Testing", 
                desc: "Construim site-ul cu cod curat, testăm pe toate dispozitivele și optimizăm performanța.",
                color: "from-purple-500 to-pink-500"
              },
              {
                step: "04",
                title: "Lansare & Suport",
                desc: "Lansăm site-ul în producție și oferim suport continuu pentru mentenanță și actualizări.",
                color: "from-pink-500 to-rose-500"
              }
            ].map((item, idx) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center relative"
              >
                {idx < 3 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-slate-300 to-transparent dark:from-slate-700 dark:to-transparent" />
                )}
                <div className={`relative w-20 h-20 mx-auto rounded-full bg-gradient-to-br ${item.color} text-white font-black text-xl flex items-center justify-center mb-6 shadow-lg`}>
                  {item.step}
                </div>
                <h3 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">{item.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-6xl font-black tracking-tighter mb-6">
              Gata să Creăm
              <br />
              Site-ul Tău Perfect?
            </h2>
            <p className="text-xl opacity-90 mb-8 leading-relaxed">
              De la concept la lansare, construim site-uri web care impresionează și convertesc.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 bg-white text-indigo-600 px-8 py-4 rounded-2xl font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Începe Proiectul
              </Link>
              <Link
                href="tel:0750473111"
                className="inline-flex items-center gap-2 border-2 border-white/30 bg-white/10 backdrop-blur-sm px-8 py-4 rounded-2xl font-bold hover:bg-white/20 transition-colors"
              >
                Sună Direct
              </Link>
            </div>
          </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}