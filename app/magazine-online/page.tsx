import type { Metadata } from "next";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ArrowLeft, 
  CheckCircle2, 
  Store, 
  ShoppingCart, 
  CreditCard,
  Truck,
  BarChart3,
  Users,
  Smartphone,
  Globe,
  Package,
  TrendingUp,
  FileText,
  Shield
} from "lucide-react";

export const metadata: Metadata = {
  title: "Magazine Online Complete - E-commerce Avansat | e-Web",
  description: "Creăm magazine online performante cu gestiune stocuri, plăți online, integrare curieri și rapoarte detaliate. E-commerce complet pentru afacerea ta.",
};

export default function MagazineOnlinePage() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-purple-50 to-pink-100 dark:from-slate-950 dark:via-purple-950 dark:to-pink-950 py-20">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-30 animate-blob" />
        <div className="absolute top-0 -right-4 w-96 h-96 bg-pink-300 dark:bg-pink-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
        
        <div className="relative max-w-7xl mx-auto px-4">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors mb-8"
          >
            <ArrowLeft size={20} />
            <span>Înapoi la pagina principală</span>
          </Link>
          
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 dark:border-purple-400/20 backdrop-blur-sm"
            >
              <Store size={16} className="text-purple-600 dark:text-purple-400" />
              <span className="text-sm font-medium text-purple-700 dark:text-purple-300">E-COMMERCE AVANSAT</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl sm:text-7xl font-black tracking-tighter mb-6"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-purple-700 to-pink-900 dark:from-white dark:via-purple-300 dark:to-pink-200">
                Magazine Online
              </span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">
                Complete & Performante
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-700 dark:text-slate-300 leading-relaxed mb-8"
            >
              Construim platforme e-commerce complete cu gestiune stocuri, plăți online, integrare curieri și rapoarte avansate. 
              Tot ce ai nevoie pentru a vinde online cu succes.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-2xl font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
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

      {/* Funcționalități E-commerce */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black tracking-tighter mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-400">
                Totul pentru E-commerce
              </span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400">
              Funcționalități complete pentru magazinul tău online
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <ShoppingCart size={32} />,
                title: "Coș de Cumpărături Avansat",
                desc: "Coș persistent, salvare pentru mai târziu, calcul taxe automat și opțiuni de checkout rapide.",
                color: "from-purple-500 to-purple-600"
              },
              {
                icon: <Package size={32} />,
                title: "Gestiune Stocuri",
                desc: "Management complet produse cu variante, stocuri, alerte automate și sincronizare multi-canal.",
                color: "from-pink-500 to-pink-600"
              },
              {
                icon: <CreditCard size={32} />,
                title: "Plăți Online Securizate",
                desc: "Integrare cu toate procesatorii de plăți: card, PayPal, Apple Pay, Google Pay și rate.",
                color: "from-rose-500 to-rose-600"
              },
              {
                icon: <Truck size={32} />,
                title: "Integrare Curieri",
                desc: "Conectare automată cu eMAG, FAN Courier, DPD, Sameday și calculul costurilor de transport.",
                color: "from-orange-500 to-orange-600"
              },
              {
                icon: <FileText size={32} />,
                title: "Facturare Automată",
                desc: "Generare automată facturi, chitanțe și documente fiscale conforme cu legislația română.",
                color: "from-amber-500 to-amber-600"
              },
              {
                icon: <BarChart3 size={32} />,
                title: "Analytics & Rapoarte",
                desc: "Dashboard complet cu vânzări, clienți, produse top, profit și integrare Google Analytics.",
                color: "from-green-500 to-green-600"
              },
              {
                icon: <Users size={32} />,
                title: "Management Clienți",
                desc: "Conturi client cu istoric comenzi, wishlist, puncte de fidelitate și marketing automat.",
                color: "from-blue-500 to-blue-600"
              },
              {
                icon: <Smartphone size={32} />,
                title: "Mobile Optimized",
                desc: "Design complet responsive cu experiență perfectă pe mobile și tablete pentru conversii maxime.",
                color: "from-indigo-500 to-indigo-600"
              },
              {
                icon: <TrendingUp size={32} />,
                title: "SEO & Marketing",
                desc: "Optimizare pentru motoarele de căutare, cupoane, campanii email și integrare cu Facebook Ads.",
                color: "from-violet-500 to-violet-600"
              }
            ].map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group p-8 rounded-3xl border-2 border-slate-200 dark:border-slate-800 bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-800 hover:border-purple-300 dark:hover:border-purple-700 hover:shadow-2xl hover:scale-105 transition-all duration-500"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">{item.title}</h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tipuri de Magazine */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black tracking-tighter mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-400">
                Tipuri de Magazine Online
              </span>
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border-2 border-slate-200 dark:border-slate-800">
                <h3 className="text-2xl font-bold mb-4 text-purple-600 dark:text-purple-400">
                  🏪 Magazine Retail Clasice
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  Perfecte pentru business-uri tradiționale care vor să-și mute vânzările online.
                </p>
                <ul className="space-y-2">
                  {[
                    "Produse fizice cu variante (mărime, culoare)",
                    "Gestiune stocuri în timp real", 
                    "Integrare cu furnizorii",
                    "Sistem de reduceri și cupoane"
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-green-500 flex-shrink-0" />
                      <span className="text-sm text-slate-600 dark:text-slate-400">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border-2 border-slate-200 dark:border-slate-800">
                <h3 className="text-2xl font-bold mb-4 text-pink-600 dark:text-pink-400">
                  📱 Marketplace Multi-Vendor
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  Platforme unde mai mulți vendori pot vinde produsele lor cu comisioane.
                </p>
                <ul className="space-y-2">
                  {[
                    "Dashboarduri separate pentru fiecare vendor",
                    "Sistem de comisioane automatizat",
                    "Review-uri și rating-uri",
                    "Chat între cumpărător și vânzător"
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-green-500 flex-shrink-0" />
                      <span className="text-sm text-slate-600 dark:text-slate-400">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border-2 border-slate-200 dark:border-slate-800">
                <h3 className="text-2xl font-bold mb-4 text-rose-600 dark:text-rose-400">
                  💎 Magazine Premium/Luxury
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  Design exclusivist pentru branduri de lux cu experiență premium.
                </p>
                <ul className="space-y-2">
                  {[
                    "Design custom ultra-premium",
                    "Experiență de unboxing digitală",
                    "Servicii concierge integrate",
                    "Certificări de autenticitate"
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-green-500 flex-shrink-0" />
                      <span className="text-sm text-slate-600 dark:text-slate-400">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border-2 border-slate-200 dark:border-slate-800">
                <h3 className="text-2xl font-bold mb-4 text-orange-600 dark:text-orange-400">
                  🔔 Abonamente & Subscripții
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  Pentru business-uri cu model de abonament sau livrări recurente.
                </p>
                <ul className="space-y-2">
                  {[
                    "Billing recurent automatizat",
                    "Management abonamente flexibile",
                    "Trial gratuit și upgrade/downgrade",
                    "Reținere clienți prin gamification"
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-green-500 flex-shrink-0" />
                      <span className="text-sm text-slate-600 dark:text-slate-400">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integrări */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black tracking-tighter mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-400">
                Integrări & Conectivitate
              </span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center">
                <CreditCard size={32} className="text-white" />
              </div>
              <h3 className="font-bold mb-2">Plăți Online</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">PayU, Payme, Stripe, PayPal, mobilPay</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center">
                <Truck size={32} className="text-white" />
              </div>
              <h3 className="font-bold mb-2">Servicii Curierat</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">eMAG, FAN, DPD, Sameday, GLS</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center">
                <FileText size={32} className="text-white" />
              </div>
              <h3 className="font-bold mb-2">Facturare</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">SmartBill, Zulu, Invoice24, SAGA</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center">
                <BarChart3 size={32} className="text-white" />
              </div>
              <h3 className="font-bold mb-2">Marketing</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">Google Ads, Facebook, MailChimp</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-br from-purple-600 via-pink-600 to-rose-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-6xl font-black tracking-tighter mb-6">
              Gata să Lansezi
              <br />
              Magazinul Online?
            </h2>
            <p className="text-xl opacity-90 mb-8 leading-relaxed">
              De la primul produs la primele vânzări - construim împreună succesul tău online.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 bg-white text-purple-600 px-8 py-4 rounded-2xl font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Începe Magazinul
              </Link>
              <Link
                href="tel:0750473111"
                className="inline-flex items-center gap-2 border-2 border-white/30 bg-white/10 backdrop-blur-sm px-8 py-4 rounded-2xl font-bold hover:bg-white/20 transition-colors"
              >
                Discută Detaliile
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}