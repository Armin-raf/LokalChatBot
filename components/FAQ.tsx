
import React from 'react';
import { FAQItem } from '../types';

const FAQ: React.FC = () => {
  const faqs: FAQItem[] = [
    {
      q: 'Benötigt der ChatBot eine Internetverbindung?',
      a: 'Nein. Blue ChatBot ist für den vollständigen Offline-Betrieb konzipiert. Alle Berechnungen und Datenverarbeitungen finden lokal in Ihrem Rechenzentrum statt.',
    },
    {
      q: 'Welche Hardware-Voraussetzungen gibt es?',
      a: 'Die Anforderungen hängen von der gewünschten Modellgröße und Nutzeranzahl ab. Wir unterstützen alles von Standard-Workstations bis hin zu dedizierten GPU-Clustern in Ihrem Serverraum.',
    },
    {
      q: 'Wie wird das Modell ohne Cloud aktualisiert?',
      a: 'Updates erfolgen über gesicherte lokale Deployment-Prozesse. Wir liefern regelmäßig verbesserte Modell-Stände, die Sie manuell oder automatisiert in Ihrer isolierten Umgebung einspielen können.',
    },
    {
      q: 'Ist das System DSGVO-konform?',
      a: 'Ja, per Design. Da keine Daten an Drittanbieter übertragen werden und Sie die volle Kontrolle über die Logs und Speicherorte haben, erfüllt Blue ChatBot höchste Datenschutz-Anforderungen.',
    },
  ];

  return (
    <section className="py-24 bg-white px-6" id="faq">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">Häufig gestellte Fragen</h2>
          <p className="text-slate-500 text-lg">Technische Details für Entscheider und IT-Abteilungen.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <details key={i} className="group bg-slate-50 rounded-2xl border border-slate-100 overflow-hidden" open={i === 0}>
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                <h3 className="text-lg font-bold text-slate-900">{faq.q}</h3>
                <span className="material-symbols-outlined text-primary transition-transform duration-300 group-open:rotate-180">expand_more</span>
              </summary>
              <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
