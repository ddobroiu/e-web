"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Shield, Eye, Lock, UserCheck } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function PoliticaConfidentialitatePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 py-16">
          <div className="max-w-4xl mx-auto px-4">
            <Link 
              href="/"
              className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 transition-colors mb-8"
            >
              <ArrowLeft size={20} />
              <span>Înapoi la pagina principală</span>
            </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-gradient-to-r from-sky-500/10 to-indigo-500/10 border border-sky-500/20 dark:border-sky-400/20">
              <Shield size={16} className="text-sky-600 dark:text-sky-400" />
              <span className="text-sm font-medium text-sky-700 dark:text-sky-300">GDPR COMPLIANT</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-black tracking-tighter mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-400">
                Politica de Confidențialitate
              </span>
            </h1>
            
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-4">
              Ultima actualizare: 29 noiembrie 2025
            </p>
            
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Această politică explică cum colectăm, folosim și protejăm informațiile tale personale 
              conform Regulamentului General pentru Protecția Datelor (GDPR) și legislației române.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
        {/* Content */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 prose prose-slate dark:prose-invert prose-lg">
          
          <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-2xl mb-12">
            <div className="flex items-start gap-4">
              <UserCheck className="text-sky-600 dark:text-sky-400 flex-shrink-0 mt-1" size={24} />
              <div>
                <h2 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">Operatorul de Date cu Caracter Personal</h2>
                <p className="text-slate-600 dark:text-slate-400 mb-2">
                  <strong>e-Web</strong><br />
                  Email: contact@e-web.ro<br />
                  Telefon: 0750 47 31 11<br />
                  Website: www.e-web.ro
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">1. Ce date colectăm</h2>
          
          <h3 className="text-xl font-semibold mb-4 text-slate-800 dark:text-slate-200">1.1. Date furnizate direct de tine</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-slate-600 dark:text-slate-400">
            <li><strong>Informații de contact:</strong> nume, prenume, adresa de email, numărul de telefon</li>
            <li><strong>Informații despre proiect:</strong> detaliile proiectului, cerințe specifice, buget estimat</li>
            <li><strong>Comunicări:</strong> mesajele trimise prin formularele de contact sau email</li>
            <li><strong>Informații de facturare:</strong> denumire firmă, CUI/CNP, adresa fiscală (când este cazul)</li>
          </ul>

          <h3 className="text-xl font-semibold mb-4 text-slate-800 dark:text-slate-200">1.2. Date colectate automat</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-slate-600 dark:text-slate-400">
            <li><strong>Date tehnice:</strong> adresa IP, tipul browserului, sistemul de operare</li>
            <li><strong>Date de utilizare:</strong> paginile vizitate, timpul petrecut pe site, sursa traficului</li>
            <li><strong>Cookie-uri:</strong> preferințele de navigare, setările de limba și tema</li>
          </ul>

          <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white mt-12">2. Cum folosim datele tale</h2>
          
          <h3 className="text-xl font-semibold mb-4 text-slate-800 dark:text-slate-200">2.1. Scopuri și temeiuri legale</h3>
          <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6 mb-6">
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Răspunsuri la solicitări (Temei: Consimțământul)</h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm">Pentru a răspunde la întrebările tale și a-ți oferi informații despre serviciile noastre.</p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Executarea contractului (Temei: Contract)</h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm">Pentru a furniza serviciile convenite și a gestiona relația contractuală.</p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Îmbunătățirea serviciilor (Temei: Interesul legitim)</h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm">Pentru a analiza cum este folosit site-ul și a îmbunătăți experiența utilizatorilor.</p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Respectarea obligațiilor legale (Temei: Obligația legală)</h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm">Pentru respectarea legislației fiscale și comerciale române.</p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white mt-12">3. Cât timp păstrăm datele</h2>
          
          <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-2xl mb-6">
            <ul className="space-y-3 text-slate-600 dark:text-slate-400">
              <li><strong>Date de contact și comunicări:</strong> 3 ani de la ultima interacțiune</li>
              <li><strong>Contracte și facturi:</strong> 10 ani conform legislației fiscale române</li>
              <li><strong>Date de navigare:</strong> maxim 2 ani pentru cookie-uri analitice</li>
              <li><strong>Backup-uri de securitate:</strong> maxim 1 an</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white mt-12">4. Cu cine împărtășim datele</h2>
          
          <h3 className="text-xl font-semibold mb-4 text-slate-800 dark:text-slate-200">4.1. Furnizori de servicii</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-slate-600 dark:text-slate-400">
            <li><strong>Servicii de hosting:</strong> Vercel (SUA) - conform măsurilor de protecție GDPR</li>
            <li><strong>Servicii email:</strong> Resend (UE) - pentru trimiterea mesajelor</li>
            <li><strong>Analiză web:</strong> Google Analytics - cu anonimizarea IP-ului activată</li>
            <li><strong>Servicii contabile:</strong> consultant fiscal autorizat (România) - doar pentru facturare</li>
          </ul>

          <h3 className="text-xl font-semibold mb-4 text-slate-800 dark:text-slate-200">4.2. Transferuri internaționale</h3>
          <p className="text-slate-600 dark:text-slate-400 mb-6">
            Când datele sunt transferate în afara UE (ex: Vercel în SUA), ne asigurăm că sunt implementate 
            măsurile de protecție adecvate prin clauzele contractuale standard aprobate de Comisia Europeană.
          </p>

          <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white mt-12">5. Drepturile tale</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-6 rounded-xl">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                <Eye size={20} className="text-sky-600 dark:text-sky-400" />
                Dreptul de acces
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Poți solicita o copie a datelor personale pe care le procesăm despre tine.
              </p>
            </div>
            
            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-6 rounded-xl">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                <Lock size={20} className="text-sky-600 dark:text-sky-400" />
                Dreptul la rectificare
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Poți cere corectarea datelor incorecte sau completarea celor incomplete.
              </p>
            </div>
            
            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-6 rounded-xl">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-3">Dreptul la ștergere</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Poți solicita ștergerea datelor în anumite condiții prevăzute de GDPR.
              </p>
            </div>
            
            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-6 rounded-xl">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-3">Dreptul la portabilitate</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Poți primi datele într-un format structurat pentru a le transfera.
              </p>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 p-6 rounded-xl mb-8">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">Exercitarea drepturilor</h3>
            <p className="text-yellow-700 dark:text-yellow-300 text-sm mb-2">
              Pentru a-ți exercita drepturile, contactează-ne la: <strong>contact@e-web.ro</strong>
            </p>
            <p className="text-yellow-700 dark:text-yellow-300 text-sm">
              Vei primi un răspuns în maxim 30 de zile de la primirea solicitării.
            </p>
          </div>

          <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white mt-12">6. Securitatea datelor</h2>
          
          <ul className="list-disc pl-6 mb-6 space-y-2 text-slate-600 dark:text-slate-400">
            <li><strong>Criptare:</strong> Toate datele sunt transmise prin conexiuni HTTPS securizate</li>
            <li><strong>Acces restricționat:</strong> Doar personalul autorizat are acces la datele personale</li>
            <li><strong>Backup-uri securizate:</strong> Copii de siguranță criptate și stocate separat</li>
            <li><strong>Actualizări regulate:</strong> Sistemele sunt actualizate pentru a preveni vulnerabilitățile</li>
            <li><strong>Monitorizare:</strong> Monitorizarea continuă pentru detectarea încercărilor de acces neautorizat</li>
          </ul>

          <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white mt-12">7. Cookie-uri</h2>
          
          <h3 className="text-xl font-semibold mb-4 text-slate-800 dark:text-slate-200">7.1. Tipuri de cookie-uri folosite</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-slate-600 dark:text-slate-400">
            <li><strong>Cookie-uri esențiale:</strong> Necesare pentru funcționarea site-ului (preferințe tema dark/light)</li>
            <li><strong>Cookie-uri analitice:</strong> Google Analytics pentru înțelegerea utilizării site-ului</li>
            <li><strong>Cookie-uri de performanță:</strong> Pentru optimizarea vitezei și funcționalității</li>
          </ul>

          <p className="text-slate-600 dark:text-slate-400 mb-6">
            Poți gestiona preferințele pentru cookie-uri prin setările browserului tău. 
            Dezactivarea cookie-urilor poate afecta funcționalitatea site-ului.
          </p>

          <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white mt-12">8. Modificări ale politicii</h2>
          
          <p className="text-slate-600 dark:text-slate-400 mb-6">
            Această politică poate fi actualizată periodic pentru a reflecta schimbările în practicile noastre 
            sau în legislația aplicabilă. Te vom informa despre modificările importante prin email sau 
            prin notificări pe site.
          </p>

          <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white mt-12">9. Contact și reclamații</h2>
          
          <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-2xl mb-8">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-4">Pentru orice întrebări despre această politică, contactează-ne:</h3>
            <div className="space-y-2 text-slate-600 dark:text-slate-400">
              <p><strong>Email:</strong> contact@e-web.ro</p>
              <p><strong>Telefon:</strong> 0750 47 31 11</p>
              <p><strong>Website:</strong> www.e-web.ro</p>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 p-6 rounded-xl">
            <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Dreptul de reclamație</h3>
            <p className="text-blue-700 dark:text-blue-300 text-sm">
              Ai dreptul să depui o reclamație la Autoritatea Națională de Supraveghere a Prelucrării 
              Datelor cu Caracter Personal (ANSPDCP) dacă consideri că drepturile tale au fost încălcate.
            </p>
            <p className="text-blue-700 dark:text-blue-300 text-sm mt-2">
              <strong>ANSPDCP:</strong> www.dataprotection.ro | Email: anspdcp@dataprotection.ro
            </p>
          </div>

          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}