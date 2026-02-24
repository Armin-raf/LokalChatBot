import React from 'react';
import { LegalType } from './LegalOverlay';

interface FooterProps {
  onOpenLegal: (type: LegalType) => void;
}

const Footer: React.FC<FooterProps> = ({ onOpenLegal }) => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-2 mb-6">
            <span className="material-symbols-outlined text-primary !text-3xl">smart_toy</span>
            <h2 className="text-2xl font-bold tracking-tight text-white">Blue ChatBot</h2>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed">
            Spezialisierte On-Premise KI-Lösungen für regulierte Branchen. Wir ermöglichen modernste Sprachmodelle ohne Cloud-Zwang.
          </p>
        </div>

        {/* Gruppe: Lösungen */}
        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-white uppercase tracking-wider text-xs">Lösungen</h4>
          <button onClick={() => onOpenLegal('wissensdatenbanken')} className="text-left text-sm text-slate-400 hover:text-white transition-colors">Wissensdatenbanken</button>
          <button onClick={() => onOpenLegal('produktion')} className="text-left text-sm text-slate-400 hover:text-white transition-colors">Produktions-Assistenz</button>
          <button onClick={() => onOpenLegal('sensible-daten')} className="text-left text-sm text-slate-400 hover:text-white transition-colors">Sensible Daten</button>
        </div>

        {/* Gruppe: Sicherheit */}
        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-white uppercase tracking-wider text-xs">Sicherheit</h4>
          <button onClick={() => onOpenLegal('air-gapped')} className="text-left text-sm text-slate-400 hover:text-white transition-colors">Air-Gapped Betrieb</button>
          <button onClick={() => onOpenLegal('dsgvo')} className="text-left text-sm text-slate-400 hover:text-white transition-colors">DSGVO-Compliance</button>
          <button onClick={() => onOpenLegal('integration')} className="text-left text-sm text-slate-400 hover:text-white transition-colors">Lokale Integration</button>
        </div>

        {/* Gruppe: Unternehmen */}
        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-white uppercase tracking-wider text-xs">Unternehmen</h4>
          <button onClick={scrollToContact} className="text-left text-sm text-slate-400 hover:text-white transition-colors">Kontakt</button>
          <button onClick={() => onOpenLegal('impressum')} className="text-left text-sm text-slate-400 hover:text-white transition-colors">Impressum</button>
          <button onClick={() => onOpenLegal('agb')} className="text-left text-sm text-slate-400 hover:text-white transition-colors">AGB</button>
          <button onClick={() => onOpenLegal('datenschutz')} className="text-left text-sm text-slate-400 hover:text-white transition-colors">Datenschutz</button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-12 mt-12 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-xs text-slate-500 font-medium">
          © 2026 Blue ChatBot
        </p>
        
        <div className="flex items-center gap-4">
          <a 
            href="https://x.com/aminrafaiai" 
            target="_blank" 
            rel="noopener noreferrer"
            className="size-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all group"
            title="X (Twitter)"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          <a 
            href="https://www.linkedin.com/company/blueprocess/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="size-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all"
            title="LinkedIn"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <a 
            href="https://m.youtube.com/@BlueProcess-i8f#bottom-sheet" 
            target="_blank" 
            rel="noopener noreferrer"
            className="size-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all"
            title="YouTube"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122-2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;