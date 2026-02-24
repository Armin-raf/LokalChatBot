import BpWidgets from "./components/BpWidgets";
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Integrations from './components/Integrations';
import Solutions from './components/Services';
import Security from './components/Security';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import { FlippingCard } from './components/ui/flipping-card';
import LegalOverlay, { LegalType } from './components/LegalOverlay';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLegalType, setActiveLegalType] = useState<LegalType>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const processSteps = [
    { 
      step: '01', 
      title: 'Anforderungsanalyse', 
      desc: 'Detaillierte Prüfung Ihrer IT-Vorgaben.',
      details: 'Wir analysieren Ihre bestehende Hardware, Sicherheitsrichtlinien und die zu verarbeitenden Datenmengen.'
    },
    { 
      step: '02', 
      title: 'Architektur-Konzept', 
      desc: 'Entwurf der isolierten KI-Umgebung.',
      details: 'Wahl des passenden Open-Source Modells und Definition der On-Premise Infrastruktur (Docker/Kubernetes).'
    },
    { 
      step: '03', 
      title: 'Implementierung', 
      desc: 'Integration in Ihre lokale Infrastruktur.',
      details: 'Anbindung an lokale Filesysteme, Datenbanken und Ihr Intranet – ohne jeglichen Zugriff von außen.'
    },
    { 
      step: '04', 
      title: 'Abnahme & Betrieb', 
      desc: 'Validierung der Compliance & Performance.',
      details: 'Gemeinsame Sicherheits-Audits und Übergabe in den regulären IT-Betrieb inklusive Wartungskonzept.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header isScrolled={isScrolled} />
      
      <main>
        <Hero />
        
        {/* Why Local? (Risks of Cloud) */}
        <section className="py-24 bg-white px-6" id="mission">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-red-50 text-red-600 mb-6 text-xs font-bold uppercase tracking-wider">Risiko-Management</div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-8 leading-tight">
                Warum Cloud-KI für regulierte Branchen ein Risiko ist.
              </h2>
              <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                Unternehmen in der Industrie, dem Gesundheitswesen oder dem öffentlichen Sektor können es sich nicht leisten, sensible Daten an externe Cloud-Anbieter zu übertragen.
              </p>
              <div className="space-y-4">
                {[
                  { title: 'Datenschutzrisiken', desc: 'Ungewisser Verbleib und Training von Modellen mit Ihren Geschäftsgeheimnissen.' },
                  { title: 'Compliance-Hürden', desc: 'Strikte regulatorische Anforderungen verbieten oft die Nutzung von US-Cloud-Diensten.' },
                  { title: 'Abhängigkeit', desc: 'Vendor-Lock-in und Performance-Schwankungen durch externe API-Verfügbarkeit.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <span className="material-symbols-outlined text-red-500">warning</span>
                    <div>
                      <h4 className="font-bold text-slate-900">{item.title}</h4>
                      <p className="text-sm text-slate-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { label: 'Air-Gapped Support', desc: 'Betrieb in physisch isolierten Netzwerken.' },
                { label: 'Volle Kontrolle', desc: 'Sie besitzen das Modell und die Infrastruktur.' },
                { label: 'Predictable Costs', desc: 'Keine variablen Token-Kosten durch lokale Hardware.' },
                { label: 'Kein Datenabfluss', desc: 'Daten verlassen niemals Ihr Rechenzentrum.' }
              ].map((card, i) => (
                <div key={i} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-lg transition-all group">
                  <div className="size-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined !text-sm">verified_user</span>
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">{card.label}</h4>
                  <p className="text-xs text-slate-500 leading-normal">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Solutions />
        <Security />
        <Integrations />

        {/* Ablauf / Process Section */}
        <section className="py-24 bg-white px-6" id="process">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">Methodik für Ihren Erfolg</h2>
              <p className="text-slate-500 text-lg">Vom Sicherheitskonzept bis zur produktiven On-Premise KI.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((item, i) => (
                <FlippingCard
                  key={i}
                  height={220}
                  frontContent={
                    <div className="flex flex-col h-full w-full p-8 relative overflow-hidden">
                      <span className="text-6xl font-black text-primary/10 absolute top-4 right-6 select-none leading-none">
                        {item.step}
                      </span>
                      <h3 className="text-2xl font-bold mb-3 text-slate-900 relative z-10">{item.title}</h3>
                      <p className="text-slate-600 text-sm leading-relaxed relative z-10">{item.desc}</p>
                      <div className="mt-auto flex items-center gap-1.5 text-[10px] font-bold text-primary uppercase tracking-widest">
                        Details ansehen <span className="material-symbols-outlined !text-[12px]">flip</span>
                      </div>
                    </div>
                  }
                  backContent={
                    <div className="flex flex-col h-full w-full p-8 bg-primary justify-center">
                      <p className="text-sm font-medium leading-relaxed text-white text-center">
                        {item.details}
                      </p>
                      <div className="mt-6 flex justify-center">
                        <div className="px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-widest text-white border border-white/10">
                          Phase {item.step}
                        </div>
                      </div>
                    </div>
                  }
                />
              ))}
            </div>
          </div>
        </section>

        <FAQ />
        <Contact />
      </main>

      <Footer onOpenLegal={setActiveLegalType} />
      <LegalOverlay type={activeLegalType} onClose={() => setActiveLegalType(null)} />
      <BpWidgets />
    </div>
  );
};

export default App;
