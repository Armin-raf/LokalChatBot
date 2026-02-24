import React, { useState } from 'react';

interface HeaderProps {
  isScrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  const [lang, setLang] = useState('DE');
  const [isLangOpen, setIsLangOpen] = useState(false);

  const navItems = [
    { name: 'Lösungen', id: 'solutions' },
    { name: 'Sicherheit', id: 'security' },
    { name: 'Integration', id: 'integrations' },
    { name: 'Methodik', id: 'process' },
    { name: 'FAQ', id: 'faq' }
  ];

  const languages = [
    { code: 'DE', name: 'Deutsch' },
    { code: 'EN', name: 'English' }
  ];

  return (
    <header className={`fixed top-0 z-50 w-full transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm py-3' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <span className={`material-symbols-outlined !text-3xl text-primary`}>smart_toy</span>
          <h2 className={`text-2xl font-extrabold tracking-tight ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
            Blue ChatBot
          </h2>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a 
              key={item.id}
              href={`#${item.id}`}
              className={`text-sm font-semibold transition-colors ${
                isScrolled 
                  ? 'text-slate-600 hover:text-primary' 
                  : 'text-slate-200 hover:text-white'
              }`}
            >
              {item.name}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4 sm:gap-6">
          {/* Language Selector */}
          <div className="relative">
            <button 
              onClick={() => setIsLangOpen(!isLangOpen)}
              className={`flex items-center gap-1.5 text-sm font-bold px-3 py-2 rounded-xl transition-all ${
                isScrolled 
                  ? 'text-slate-700 hover:bg-slate-100' 
                  : 'text-white hover:bg-white/10'
              }`}
            >
              <span className="material-symbols-outlined !text-lg">language</span>
              <span>{lang}</span>
              <span className={`material-symbols-outlined !text-sm transition-transform ${isLangOpen ? 'rotate-180' : ''}`}>expand_more</span>
            </button>

            {isLangOpen && (
              <div className="absolute top-full right-0 mt-2 w-32 bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden animate-in fade-in zoom-in duration-200">
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => {
                      setLang(l.code);
                      setIsLangOpen(false);
                    }}
                    className={`w-full text-left px-4 py-3 text-sm font-medium hover:bg-slate-50 transition-colors ${
                      lang === l.code ? 'text-primary bg-blue-50/50' : 'text-slate-600'
                    }`}
                  >
                    {l.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          <a 
            href="#contact" 
            className={`hidden sm:block bg-primary text-white text-sm font-bold px-6 py-2.5 rounded-full hover:bg-blue-600 transition-all shadow-lg ${
              isScrolled ? 'shadow-primary/20' : 'shadow-none'
            }`}
          >
            kostenlose Beratung
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;