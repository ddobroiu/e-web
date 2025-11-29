"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, FileText, Scale, AlertTriangle, CheckCircle2 } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function TermeniCondițiiPage() {
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
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 dark:border-indigo-400/20">
              <Scale size={16} className="text-indigo-600 dark:text-indigo-400" />
              <span className="text-sm font-medium text-indigo-700 dark:text-indigo-300">LEGISLAȚIE ROMÂNĂ</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-black tracking-tighter mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-400">
                Termeni și Condiții
              </span>
            </h1>
            
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-4">
              Ultima actualizare: 29 noiembrie 2025
            </p>
            
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Acești termeni guvernează utilizarea serviciilor e-Web conform legislației române 
              și reglementărilor Uniunii Europene.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 prose prose-slate dark:prose-invert prose-lg">
          
          <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-2xl mb-12">
            <div className="flex items-start gap-4">
              <FileText className="text-indigo-600 dark:text-indigo-400 flex-shrink-0 mt-1" size={24} />
              <div>
                <h2 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">Furnizorul de Servicii</h2>
                <p className="text-slate-600 dark:text-slate-400 mb-2">
                  <strong>e-Web</strong><br />
                  Email: contact@e-web.ro<br />
                  Telefon: 0750 47 31 11<br />
                  Website: www.e-web.ro<br />
                  <em>Prestator servicii IT conform legislației române</em>
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">1. Definiții și Domeniul de Aplicare</h2>
          
          <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6 mb-8">
            <h3 className="text-xl font-semibold mb-4 text-slate-800 dark:text-slate-200">1.1. Definiții</h3>
            <ul className="space-y-3 text-slate-600 dark:text-slate-400">
              <li><strong>„Serviciile"</strong> - toate serviciile oferite de e-Web: dezvoltare aplicații web, site-uri web, magazine online, chatboți, consultanță IT</li>
              <li><strong>„Clientul"</strong> - persoana fizică sau juridică care utilizează serviciile e-Web</li>
              <li><strong>„Contractul"</strong> - acordul între e-Web și Client pentru prestarea serviciilor</li>
              <li><strong>„Livrabilele"</strong> - produsele finale rezultate din prestarea serviciilor</li>
              <li><strong>„Proprietatea Intelectuală"</strong> - toate drepturile de autor, brevete, mărci comerciale și alte drepturi</li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold mb-4 text-slate-800 dark:text-slate-200">1.2. Domeniul de aplicare</h3>
          <p className="text-slate-600 dark:text-slate-400 mb-6">
            Acești termeni se aplică tuturor serviciilor furnizate de e-Web și constituie baza legală 
            pentru toate relațiile contractuale, conform Codului Civil român (Legea nr. 287/2009) 
            și legislației UE aplicabile serviciilor digitale.
          </p>

          <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white mt-12">2. Serviciile Oferite</h2>
          
          <h3 className="text-xl font-semibold mb-4 text-slate-800 dark:text-slate-200">2.1. Categorii de servicii</h3>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl">
              <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Dezvoltare Software</h4>
              <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                <li>• Aplicații web personalizate</li>
                <li>• Site-uri web responsive</li>
                <li>• Platforme e-commerce</li>
                <li>• Sisteme de management (CRM/ERP)</li>
              </ul>
            </div>
            
            <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl">
              <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Servicii Complementare</h4>
              <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                <li>• Chatboți inteligenti (WhatsApp/Web)</li>
                <li>• Consultanță tehnică IT</li>
                <li>• Mentenanță și suport</li>
                <li>• Optimizare performanță</li>
              </ul>
            </div>
          </div>

          <h3 className="text-xl font-semibold mb-4 text-slate-800 dark:text-slate-200">2.2. Standardele de calitate</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-slate-600 dark:text-slate-400">
            <li>Respectarea standardelor internaționale de dezvoltare web (W3C, WCAG 2.1)</li>
            <li>Conformitatea cu regulamentele GDPR pentru protecția datelor</li>
            <li>Optimizare pentru performanță și SEO conform ghidurilor Google</li>
            <li>Cod sursă curat și documentat conform best practices industriei</li>
          </ul>

          <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white mt-12">3. Procesul Contractual</h2>
          
          <h3 className="text-xl font-semibold mb-4 text-slate-800 dark:text-slate-200">3.1. Încheierea contractului</h3>
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 p-6 rounded-xl mb-6">
            <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-3">Etapele procesului:</h4>
            <ol className="list-decimal pl-6 space-y-2 text-blue-700 dark:text-blue-300 text-sm">
              <li>Solicitarea inițială prin formular de contact sau telefonic</li>
              <li>Consultația gratuită pentru analiza cerințelor</li>
              <li>Elaborarea ofertei comerciale cu specificații tehnice detaliate</li>
              <li>Acceptarea ofertei de către Client (email/semnătură)</li>
              <li>Semnarea contractului și plata avansului (30-50%)</li>
              <li>Începerea lucrărilor conform planificării stabilite</li>
            </ol>
          </div>

          <h3 className="text-xl font-semibold mb-4 text-slate-800 dark:text-slate-200">3.2. Modificări ale contractului</h3>
          <p className="text-slate-600 dark:text-slate-400 mb-6">
            Orice modificări ale specificațiilor inițiale vor fi documentate prin act adițional, 
            cu ajustarea corespunzătoare a prețului și termenelor, conform art. 1271 Cod Civil.
          </p>

          <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white mt-12">4. Prețuri și Plăți</h2>
          
          <h3 className="text-xl font-semibold mb-4 text-slate-800 dark:text-slate-200">4.1. Structura prețurilor</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-slate-600 dark:text-slate-400">
            <li><strong>Prețuri fixe:</strong> Pentru proiecte cu specificații clare și delimitate</li>
            <li><strong>Tarif orar:</strong> Pentru consultanță, mentenanță sau modificări adhoc</li>
            <li><strong>Abonamente:</strong> Pentru servicii recurente de mentenanță și suport</li>
            <li><strong>TVA:</strong> Se aplică conform legislației fiscale române (19%)</li>
          </ul>

          <h3 className="text-xl font-semibold mb-4 text-slate-800 dark:text-slate-200">4.2. Modalități de plată</h3>
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-4 rounded-xl text-center">
              <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Transfer Bancar</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">Plată în lei (RON) sau EUR</p>
            </div>
            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-4 rounded-xl text-center">
              <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Plăți Online</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">Card bancar securizat</p>
            </div>
            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-4 rounded-xl text-center">
              <h4 className="font-semibold text-slate-900 dark:text-white mb-2">PayPal/Wise</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">Pentru clienți internaționali</p>
            </div>
          </div>

          <h3 className="text-xl font-semibold mb-4 text-slate-800 dark:text-slate-200">4.3. Termene de plată</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-slate-600 dark:text-slate-400">
            <li><strong>Avans:</strong> 30-50% la semnarea contractului</li>
            <li><strong>Milestone-uri:</strong> Plăți eșalonate conform progresului proiectului</li>
            <li><strong>Sold final:</strong> La livrarea și acceptarea finală a proiectului</li>
            <li><strong>Facturi servicii recurente:</strong> Plătibile în 15 zile de la emitere</li>
          </ul>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 p-6 rounded-xl mb-8">
            <div className="flex items-start gap-3">
              <AlertTriangle className="text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-1" size={20} />
              <div>
                <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">Întârzierea plăților</h4>
                <p className="text-yellow-700 dark:text-yellow-300 text-sm">
                  Pentru plățile întârziate se percep dobânzi conform Legii nr. 72/2013 (0,03% pe zi). 
                  După 30 zile întârziere, e-Web poate suspenda serviciile până la regularizarea situației.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white mt-12">5. Obligațiile Părților</h2>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-800">
              <h3 className="font-semibold text-green-800 dark:text-green-200 mb-4 flex items-center gap-2">
                <CheckCircle2 size={20} />
                Obligațiile e-Web
              </h3>
              <ul className="space-y-2 text-green-700 dark:text-green-300 text-sm">
                <li>• Furnizarea serviciilor conform specificațiilor convenite</li>
                <li>• Respectarea termenelor de livrare stabilite</li>
                <li>• Menținerea confidențialității datelor Clientului</li>
                <li>• Oferirea suportului tehnic conform contractului</li>
                <li>• Respectarea standardelor de calitate și securitate</li>
                <li>• Informarea promptă despre orice probleme sau întârzieri</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
              <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-4 flex items-center gap-2">
                <CheckCircle2 size={20} />
                Obligațiile Clientului
              </h3>
              <ul className="space-y-2 text-blue-700 dark:text-blue-300 text-sm">
                <li>• Furnizarea informațiilor și materialelor necesare</li>
                <li>• Plata la termenele stabilite în contract</li>
                <li>• Feedback prompt pentru revizuirile solicitate</li>
                <li>• Respectarea drepturilor de proprietate intelectuală</li>
                <li>• Utilizarea conformă a serviciilor livrate</li>
                <li>• Comunicarea constructivă pe toată durata colaborării</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white mt-12">6. Proprietatea Intelectuală</h2>
          
          <h3 className="text-xl font-semibold mb-4 text-slate-800 dark:text-slate-200">6.1. Drepturile asupra codului sursă</h3>
          <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl mb-6">
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              <strong>După plata integrală:</strong> Clientul dobândește drepturi de utilizare nelimitate 
              asupra codului sursă custom dezvoltat specific pentru proiectul său.
            </p>
            <p className="text-slate-600 dark:text-slate-400">
              <strong>Componente reutilizabile:</strong> e-Web își rezervă drepturile asupra framework-urilor, 
              bibliotecilor și componentelor generice dezvoltate intern, care pot fi reutilizate în alte proiecte.
            </p>
          </div>

          <h3 className="text-xl font-semibold mb-4 text-slate-800 dark:text-slate-200">6.2. Conținutul și designul</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-slate-600 dark:text-slate-400">
            <li>Clientul deține drepturile asupra conținutului furnizat (texte, imagini, logo-uri)</li>
            <li>Designul personalizat aparține Clientului după finalizarea proiectului</li>
            <li>Componentele de design generice rămân proprietatea e-Web</li>
            <li>Clientul garantează că are drepturile asupra materialelor furnizate</li>
          </ul>

          <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white mt-12">7. Garanții și Răspunderi</h2>
          
          <h3 className="text-xl font-semibold mb-4 text-slate-800 dark:text-slate-200">7.1. Garanția serviciilor</h3>
          <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-6 rounded-xl mb-6">
            <ul className="space-y-3 text-slate-600 dark:text-slate-400">
              <li><strong>Perioada de garanție:</strong> 12 luni pentru defecte în codul dezvoltat</li>
              <li><strong>Acoperire:</strong> Corectarea erorilor de funcționare și bug-urilor</li>
              <li><strong>Excluderi:</strong> Modificări efectuate de terți, probleme de hosting, schimbări tehnologice majore</li>
              <li><strong>Timp de răspuns:</strong> Maxim 48h pentru probleme critice, 5 zile lucrătoare pentru altele</li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold mb-4 text-slate-800 dark:text-slate-200">7.2. Limitări de răspundere</h3>
          <p className="text-slate-600 dark:text-slate-400 mb-6">
            Răspunderea e-Web este limitată la valoarea contractului. Nu ne asumăm răspunderea pentru 
            pierderi indirecte, profit nerealizat sau daune consecutive, conform art. 1373-1374 Cod Civil.
          </p>

          <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white mt-12">8. Forța Majoră și Circumstanțe Neprevăzute</h2>
          
          <p className="text-slate-600 dark:text-slate-400 mb-6">
            Partea afectată de forța majoră (pandemii, dezastre naturale, schimbări legislative majore, 
            atacuri cibernetice la nivel național) va notifica cealaltă parte în 48h. Obligațiile se suspendă 
            pe perioada respectivă, fără penalități pentru întârziere.
          </p>

          <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white mt-12">9. Rezilierea Contractului</h2>
          
          <h3 className="text-xl font-semibold mb-4 text-slate-800 dark:text-slate-200">9.1. Reziliere de comun acord</h3>
          <p className="text-slate-600 dark:text-slate-400 mb-4">
            Contractul poate fi reziliat oricând prin acordul ambelor părți, cu regularizarea 
            obligațiilor până la momentul rezilierii.
          </p>

          <h3 className="text-xl font-semibold mb-4 text-slate-800 dark:text-slate-200">9.2. Reziliere pentru neexecutare</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-slate-600 dark:text-slate-400">
            <li>Notificare scrisă cu termen de remediere (15 zile calendaristice)</li>
            <li>Dacă neexecutarea persistă, contractul se consideră reziliat de drept</li>
            <li>Partea nevinovată poate solicita daune-interese conform legislației</li>
          </ul>

          <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white mt-12">10. Protecția Datelor și Confidențialitatea</h2>
          
          <p className="text-slate-600 dark:text-slate-400 mb-4">
            Ambele părți se obligă să păstreze confidențialitatea informațiilor primite în cadrul colaborării, 
            conform <Link href="/politica-confidentialitate" className="text-sky-600 hover:text-sky-700 dark:text-sky-400 dark:hover:text-sky-300 underline">
            Politicii de Confidențialitate
            </Link> și reglementărilor GDPR.
          </p>

          <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white mt-12">11. Soluționarea Litigiilor</h2>
          
          <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl mb-8">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-4">Procedura de soluționare:</h3>
            <ol className="list-decimal pl-6 space-y-2 text-slate-600 dark:text-slate-400">
              <li><strong>Negociere directă:</strong> Încercarea rezolvării pe cale amiabilă (30 zile)</li>
              <li><strong>Mediere:</strong> Prin instituții autorizate de mediere din România</li>
              <li><strong>Arbitraj comercial:</strong> Curtea de Arbitraj Comercial de pe lângă CCIR</li>
              <li><strong>Instanța competentă:</strong> Judecătoriile/Tribunalele din România, conform competenței</li>
            </ol>
          </div>

          <p className="text-slate-600 dark:text-slate-400 mb-6">
            <strong>Legea aplicabilă:</strong> Prezentul contract este guvernat de legea română. 
            Pentru aspectele privind serviciile digitale, se aplică și Directiva UE 2019/770.
          </p>

          <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white mt-12">12. Dispoziții Finale</h2>
          
          <ul className="list-disc pl-6 mb-8 space-y-2 text-slate-600 dark:text-slate-400">
            <li>Termenii intră în vigoare la prima utilizare a serviciilor e-Web</li>
            <li>Modificările vor fi comunicate cu 30 zile înnainte prin email</li>
            <li>Continuarea utilizării serviciilor implică acceptarea noilor termeni</li>
            <li>Dacă o prevedere devine nulă, restul contractului rămâne valabil</li>
            <li>Comunicările oficiale se fac la adresele din contract</li>
          </ul>

          <div className="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800 p-6 rounded-xl">
            <h3 className="font-semibold text-indigo-800 dark:text-indigo-200 mb-3">Contact pentru clarificări legale</h3>
            <div className="text-indigo-700 dark:text-indigo-300 text-sm space-y-1">
              <p><strong>Email:</strong> contact@e-web.ro</p>
              <p><strong>Telefon:</strong> 0750 47 31 11</p>
              <p><strong>Ore de program:</strong> Luni-Vineri, 09:00-18:00</p>
            </div>
          </div>

          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}