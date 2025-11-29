import type { Metadata } from "next";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ArrowLeft, 
  CheckCircle2, 
  Bot, 
  MessageCircle, 
  Smartphone,
  Zap,
  Users,
  Clock,
  TrendingUp,
  Globe,
  Settings,
  BarChart3,
  Shield,
  Headphones
} from "lucide-react";

export const metadata: Metadata = {
  title: "Chatboți Inteligenti - WhatsApp & Live Chat | e-Web",
  description: "Dezvoltăm chatboți inteligenti pentru WhatsApp și live chat integrat în site. Automatizare conversații, suport 24/7 și generare leads pentru afacerea ta.",
};

export default function ChatbotiPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-pink-50 to-rose-100 dark:from-slate-950 dark:via-pink-950 dark:to-rose-950 py-20">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-pink-300 dark:bg-pink-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-30 animate-blob" />
        <div className="absolute top-0 -right-4 w-96 h-96 bg-rose-300 dark:bg-rose-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
        
        <div className="relative max-w-7xl mx-auto px-4">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-pink-600 dark:hover:text-pink-400 transition-colors mb-8"
          >
            <ArrowLeft size={20} />
            <span>Înapoi la pagina principală</span>
          </Link>
          
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-gradient-to-r from-pink-500/10 to-rose-500/10 border border-pink-500/20 dark:border-pink-400/20 backdrop-blur-sm"
            >
              <Bot size={16} className="text-pink-600 dark:text-pink-400" />
              <span className="text-sm font-medium text-pink-700 dark:text-pink-300">AI & AUTOMATIZARE</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl sm:text-7xl font-black tracking-tighter mb-6"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-pink-700 to-rose-900 dark:from-white dark:via-pink-300 dark:to-rose-200">
                Chatboți
              </span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-rose-600 dark:from-pink-400 dark:to-rose-400">
                Inteligenți 24/7
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-700 dark:text-slate-300 leading-relaxed mb-8"
            >
              Dezvoltăm asistenți virtuali inteligenti pentru WhatsApp și chat live integrat în site. 
              Automatizează conversațiile, oferă suport 24/7 și generează leads în timp ce dormi.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-rose-600 text-white px-8 py-4 rounded-2xl font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
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

      {/* Tipuri de Chatboți */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black tracking-tighter mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-400">
                Soluții Complete de Chatboți
              </span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400">
              De la WhatsApp la chat live - automatizăm toată comunicarea
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950 p-8 rounded-3xl border-2 border-green-200 dark:border-green-800"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 text-white flex items-center justify-center">
                  <Smartphone size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-green-800 dark:text-green-200">WhatsApp Business Bot</h3>
                  <p className="text-green-600 dark:text-green-400">Automatizare completă pe WhatsApp</p>
                </div>
              </div>
              
              <div className="space-y-4">
                {[
                  {
                    title: "Răspunsuri Automate Inteligente",
                    desc: "AI avansat pentru înțelegerea și răspunsuri naturale la întrebări"
                  },
                  {
                    title: "Preluare Comenzi Automat",
                    desc: "Procesare comenzi, calculul prețurilor și confirmare automată"
                  },
                  {
                    title: "Notificări & Updates",
                    desc: "Alerte pentru stoc, status comenzi și promoții personalizate"
                  },
                  {
                    title: "Integrare CRM/ERP",
                    desc: "Sincronizare cu sistemele existente pentru date actualizate"
                  }
                ].map((item) => (
                  <div key={item.title} className="bg-white dark:bg-green-900/20 p-4 rounded-xl">
                    <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">{item.title}</h4>
                    <p className="text-sm text-green-600 dark:text-green-400">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 p-8 rounded-3xl border-2 border-blue-200 dark:border-blue-800"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white flex items-center justify-center">
                  <MessageCircle size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-blue-800 dark:text-blue-200">Live Chat în Site</h3>
                  <p className="text-blue-600 dark:text-blue-400">Chat integrat direct în website</p>
                </div>
              </div>
              
              <div className="space-y-4">
                {[
                  {
                    title: "Widget Personalizat",
                    desc: "Design adaptat brandului tău cu poziționare optimă pentru conversii"
                  },
                  {
                    title: "Lead Generation Automat",
                    desc: "Colectare informații contact și calificarea potențialilor clienți"
                  },
                  {
                    title: "Răspunsuri Instant AI",
                    desc: "Bot inteligent cu escalation către operatori umani când e necesar"
                  },
                  {
                    title: "Dashboard Management",
                    desc: "Panou control pentru monitorizare conversații și statistici"
                  }
                ].map((item) => (
                  <div key={item.title} className="bg-white dark:bg-blue-900/20 p-4 rounded-xl">
                    <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">{item.title}</h4>
                    <p className="text-sm text-blue-600 dark:text-blue-400">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cazuri de Utilizare */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black tracking-tighter mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-400">
                Cazuri de Utilizare
              </span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Users size={32} />,
                title: "Suport Clienți 24/7",
                desc: "Răspunsuri instant la întrebări frecvente, escalation către echipa ta când e necesar.",
                color: "from-purple-500 to-purple-600",
                benefits: ["Reducere timp răspuns cu 90%", "Satisfacție clienți crescută", "Costuri support reduse"]
              },
              {
                icon: <TrendingUp size={32} />,
                title: "Generare Leads",
                desc: "Colectarea automată de contacte și calificarea potențialilor clienți prin conversații.",
                color: "from-pink-500 to-rose-600",
                benefits: ["Creștere leads cu 300%", "Calificare automată", "Followup personalizat"]
              },
              {
                icon: <Clock size={32} />,
                title: "Programări & Rezervări",
                desc: "Automatizarea procesului de programări pentru servicii, consultații sau evenimente.",
                color: "from-orange-500 to-amber-600",
                benefits: ["Zero conflict programări", "Reminder automat", "Sincronizare calendar"]
              },
              {
                icon: <BarChart3 size={32} />,
                title: "Vânzări & Comenzi",
                desc: "Preluarea și procesarea comenzilor direct prin chat, cu calculul prețurilor automat.",
                color: "from-green-500 to-emerald-600", 
                benefits: ["Procesare comenzi 24/7", "Cross-selling automat", "Confirmare instant"]
              },
              {
                icon: <Headphones size={32} />,
                title: "Customer Onboarding",
                desc: "Ghidarea noilor clienți prin procesul de înregistrare și primii pași.",
                color: "from-blue-500 to-cyan-600",
                benefits: ["Onboarding mai rapid", "Dropout rate redus", "Experiență îmbunătățită"]
              },
              {
                icon: <Shield size={32} />,
                title: "Servicii Financiare",
                desc: "Asistență pentru bănci, asigurări sau servicii financiare cu securitate maximă.",
                color: "from-indigo-500 to-purple-600",
                benefits: ["Conformitate reglementări", "Securitate avansată", "Verificări automate"]
              }
            ].map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group p-8 rounded-3xl border-2 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:shadow-2xl hover:scale-105 transition-all duration-500"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">{item.title}</h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">{item.desc}</p>
                <div className="space-y-2">
                  {item.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-green-500 flex-shrink-0" />
                      <span className="text-xs text-slate-500 dark:text-slate-400">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tehnologii & Capabilități */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black tracking-tighter mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-400">
                Tehnologii Avansate
              </span>
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white">
                🤖 Inteligență Artificială Avansată
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                Folosim cele mai noi tehnologii AI pentru procesarea limbajului natural, 
                machine learning și deep learning pentru chatboți cu adevărat inteligenți.
              </p>
              <div className="space-y-4">
                {[
                  "Natural Language Processing (NLP) în română",
                  "Machine Learning pentru îmbunătățire continuă", 
                  "Sentiment Analysis pentru tonul conversației",
                  "Context Awareness pentru conversații fluide",
                  "Integration cu GPT și modele AI moderne"
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
                🔗 Integrări & Conectivitate
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                Conectăm chatboții cu toate sistemele tale existente pentru o experiență 
                unificată și date sincronizate în timp real.
              </p>
              <div className="space-y-4">
                {[
                  "WhatsApp Business API oficial",
                  "CRM/ERP integration (Salesforce, HubSpot)",
                  "E-commerce platforms (WooCommerce, Shopify)", 
                  "Payment gateways pentru tranzacții",
                  "Calendar & scheduling systems",
                  "Analytics și reporting în timp real"
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

      {/* ROI & Beneficii */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black tracking-tighter mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-400">
                Rezultate Măsurabile
              </span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                number: "90%",
                label: "Reducere Timp Răspuns",
                desc: "De la ore la secunde"
              },
              {
                number: "300%",
                label: "Creștere Leads",
                desc: "Mai mulți clienți potențiali"
              },
              {
                number: "24/7",
                label: "Disponibilitate",
                desc: "Nu mai pierzi niciun client"
              },
              {
                number: "60%",
                label: "Reducere Costuri",
                desc: "Support mai eficient"
              }
            ].map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center p-8 bg-white dark:bg-slate-900 rounded-3xl border-2 border-slate-200 dark:border-slate-800"
              >
                <div className="text-4xl font-black bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white mb-2">{stat.label}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">{stat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-br from-pink-600 via-rose-600 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-6xl font-black tracking-tighter mb-6">
              Gata să Automatizezi
              <br />
              Comunicarea?
            </h2>
            <p className="text-xl opacity-90 mb-8 leading-relaxed">
              Hai să construim împreună asistentul virtual perfect pentru afacerea ta.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 bg-white text-pink-600 px-8 py-4 rounded-2xl font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Începe Automatizarea
              </Link>
              <Link
                href="tel:0750473111"
                className="inline-flex items-center gap-2 border-2 border-white/30 bg-white/10 backdrop-blur-sm px-8 py-4 rounded-2xl font-bold hover:bg-white/20 transition-colors"
              >
                Discută Proiectul
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}