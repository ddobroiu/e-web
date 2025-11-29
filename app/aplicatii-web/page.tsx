"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ArrowLeft, 
  CheckCircle2, 
  Code, 
  Database, 
  Shield, 
  Zap,
  Users,
  BarChart3,
  Settings,
  Cloud,
  Smartphone,
  Globe
} from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function AplicatiiWebPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <Header />
      
      <main>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-sky-50 to-indigo-100 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950 py-20">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-30 animate-blob" />
        <div className="absolute top-0 -right-4 w-96 h-96 bg-yellow-300 dark:bg-yellow-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
        
        <div className="relative max-w-7xl mx-auto px-4">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 transition-colors mb-8"
          >
            <ArrowLeft size={20} />
            <span>Înapoi la pagina principală</span>
          </Link>
          
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-gradient-to-r from-sky-500/10 to-indigo-500/10 border border-sky-500/20 dark:border-sky-400/20 backdrop-blur-sm"
            >
              <Code size={16} className="text-sky-600 dark:text-sky-400" />
              <span className="text-sm font-medium text-sky-700 dark:text-sky-300">DEZVOLTARE CUSTOM</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl sm:text-7xl font-black tracking-tighter mb-6"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-sky-700 to-indigo-900 dark:from-white dark:via-sky-300 dark:to-indigo-200">
                Aplicații Web
              </span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-600 to-indigo-600 dark:from-sky-400 dark:to-indigo-400">
                100% Personalizate
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-700 dark:text-slate-300 leading-relaxed mb-8"
            >
              Construim platforme web enterprise cu arhitectură robustă, API-uri moderne și interfețe intuitive. 
              De la sisteme de management la platforme de e-learning, creăm exact ce ai nevoie.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-500 to-indigo-600 text-white px-8 py-4 rounded-2xl font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
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

      {/* Tipuri de Aplicații */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black tracking-tighter mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-400">
                Tipuri de Aplicații
              </span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400">
              Soluții personalizate pentru orice industrie și necesitate
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Users size={32} />,
                title: "Sisteme CRM/ERP",
                desc: "Platforme de management clienți, vânzări și resurse enterprise cu dashboard-uri avansate și rapoarte detaliate."
              },
              {
                icon: <BarChart3 size={32} />,
                title: "Platforme Analytics",
                desc: "Sisteme de analiză date cu vizualizări interactive, rapoarte automate și integrări cu multiple surse de date."
              },
              {
                icon: <Settings size={32} />,
                title: "Panouri Administrare",
                desc: "Interface-uri de control complete pentru gestionarea utilizatorilor, conținutului și configurărilor sistemului."
              },
              {
                icon: <Cloud size={32} />,
                title: "SaaS Applications",
                desc: "Aplicații software-as-a-service cu arhitectură multi-tenant, billing automat și scalabilitate în cloud."
              },
              {
                icon: <Smartphone size={32} />,
                title: "PWA (Progressive Web Apps)",
                desc: "Aplicații web care funcționează ca aplicații native mobile cu suport offline și notificări push."
              },
              {
                icon: <Globe size={32} />,
                title: "Platforme Colaborare",
                desc: "Sisteme de lucru în echipă cu chat în timp real, partajare fișiere și management proiecte."
              }
            ].map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group p-8 rounded-3xl border-2 border-slate-200 dark:border-slate-800 bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-800 hover:border-sky-300 dark:hover:border-sky-700 hover:shadow-2xl hover:scale-105 transition-all duration-500"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-sky-500 to-indigo-600 text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">{item.title}</h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tehnologii */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black tracking-tighter mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-400">
                Stack Tehnologic Modern
              </span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
              <h3 className="font-bold mb-4 text-sky-600 dark:text-sky-400">Frontend</h3>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <li>• React / Next.js</li>
                <li>• TypeScript</li>
                <li>• Tailwind CSS</li>
                <li>• Framer Motion</li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
              <h3 className="font-bold mb-4 text-indigo-600 dark:text-indigo-400">Backend</h3>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <li>• Node.js / Express</li>
                <li>• Python / Django</li>
                <li>• API REST / GraphQL</li>
                <li>• Microservices</li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
              <h3 className="font-bold mb-4 text-purple-600 dark:text-purple-400">Database</h3>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <li>• PostgreSQL</li>
                <li>• MongoDB</li>
                <li>• Redis Cache</li>
                <li>• Elasticsearch</li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
              <h3 className="font-bold mb-4 text-pink-600 dark:text-pink-400">DevOps</h3>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <li>• Docker / Kubernetes</li>
                <li>• AWS / Vercel</li>
                <li>• CI/CD Pipelines</li>
                <li>• Monitoring</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Proces de Dezvoltare */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black tracking-tighter mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-400">
                Procesul Nostru de Dezvoltare
              </span>
            </h2>
          </div>
          
          <div className="space-y-12">
            {[
              {
                step: "01",
                title: "Analiză & Planning",
                desc: "Înțelegem cerințele, definim arhitectura și creăm roadmap-ul proiectului cu milestone-uri clare.",
                features: ["Documentație tehnică detaliată", "Wireframes și mockup-uri", "Estimări timp și cost", "Plan de testare"]
              },
              {
                step: "02", 
                title: "Design & Prototipare",
                desc: "Creăm interfețe moderne și intuitive cu focus pe experiența utilizatorului și branding-ul tău.",
                features: ["UI/UX design personalizat", "Prototipuri interactive", "Design system scalabil", "Optimizare mobile-first"]
              },
              {
                step: "03",
                title: "Dezvoltare & Integrări", 
                desc: "Construim aplicația cu cod curat, arhitectură scalabilă și integrări cu serviciile necesare.",
                features: ["Arhitectură modulară", "API-uri RESTful/GraphQL", "Integrări third-party", "Optimizări performanță"]
              },
              {
                step: "04",
                title: "Testing & Deployment",
                desc: "Testăm exhaustiv aplicația și o lansăm în producție cu monitorizare și suport continuu.",
                features: ["Testing automat și manual", "Deployment în cloud", "Monitoring și alerting", "Documentație completă"]
              }
            ].map((item, idx) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="flex flex-col lg:flex-row gap-8 items-center"
              >
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-sky-500 to-indigo-600 text-white font-black text-2xl flex items-center justify-center">
                    {item.step}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">{item.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-4">{item.desc}</p>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {item.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-green-500 flex-shrink-0" />
                        <span className="text-sm text-slate-600 dark:text-slate-400">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-br from-sky-600 via-indigo-600 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-6xl font-black tracking-tighter mb-6">
              Gata să Construim
              <br />
              Aplicația Ta Perfectă?
            </h2>
            <p className="text-xl opacity-90 mb-8 leading-relaxed">
              Hai să discutăm despre proiectul tău și să creăm împreună o soluție digitală excepțională.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 bg-white text-sky-600 px-8 py-4 rounded-2xl font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Discută Proiectul
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