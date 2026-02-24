import React from 'react';
import HighlightCard from './ui/highlight-card';
import { Database, Factory, FileLock, UserCheck } from 'lucide-react';

const Solutions: React.FC = () => {
  const items = [
    {
      icon: <Database className="w-8 h-8 text-white" />,
      title: 'Wissensdatenbanken',
      description: [
        'Interne KI-Assistenz,',
        'Durchsuchung lokaler Archive,',
        'Zentrale Wissens-Hoheit'
      ],
      link: '#contact'
    },
    {
      icon: <Factory className="w-8 h-8 text-white" />,
      title: 'Produktions-Support',
      description: [
        'Analyse von Handbüchern,',
        'Offline-Hilfe am Shop-Floor,',
        'Fehlerdiagnose in Echtzeit'
      ],
      link: '#contact'
    },
    {
      icon: <FileLock className="w-8 h-8 text-white" />,
      title: 'Sensible Dokumente',
      description: [
        'Verarbeitung von Patientenakten,',
        'Vertrauliche Vertragsprüfung,',
        'Sichere HR-Automatisierung'
      ],
      link: '#contact'
    },
    {
      icon: <UserCheck className="w-8 h-8 text-white" />,
      title: 'Mitarbeiter-Assistenz',
      description: [
        'Schulungs-Unterstützung,',
        'Automatisierte Onboarding-Hilfe,',
        'Individuelle Arbeitserleichterung'
      ],
      link: '#contact'
    },
  ];

  return (
    <section className="py-24 bg-white px-6 border-y border-slate-100" id="solutions">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-blue-50 text-primary mb-6 text-xs font-bold uppercase tracking-wider">Einsatzbereiche</div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">Optimale Lösungen für lokale IT</h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">Hochspezialisierte KI-Modelle für Ihren On-Premise Betrieb.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, i) => (
            <HighlightCard 
              key={i}
              title={item.title}
              description={item.description}
              icon={item.icon}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a href="#contact" className="inline-flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all uppercase tracking-widest text-sm">
            Machbarkeitsanalyse buchen
            <span className="material-symbols-outlined">arrow_forward</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Solutions;