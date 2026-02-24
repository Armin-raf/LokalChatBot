
import React, { useEffect, useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  useEffect(() => {
    // Cal.eu embed initialization
    (function (C, A, L) {
      let p = function (a: any, ar: any) { a.q.push(ar); };
      let d = C.document;
      (C as any).Cal = (C as any).Cal || function () {
        let cal = (C as any).Cal;
        let ar = arguments;
        if (!cal.loaded) {
          cal.ns = {};
          cal.q = cal.q || [];
          d.head.appendChild(d.createElement("script")).src = A;
          cal.loaded = true;
        }
        if (ar[0] === L) {
          const api: any = function () { p(api, arguments); };
          const namespace = ar[1];
          api.q = api.q || [];
          if (typeof namespace === "string") {
            cal.ns[namespace] = cal.ns[namespace] || api;
            p(cal.ns[namespace], ar);
            p(cal, ["initNamespace", namespace]);
          } else p(cal, ar);
          return;
        }
        p(cal, ar);
      };
    })(window, "https://app.cal.eu/embed/embed.js", "init");

    const Cal = (window as any).Cal;
    if (Cal) {
      Cal("init", "30min", { origin: "https://app.cal.eu" });
      Cal.ns["30min"]("inline", {
        elementOrSelector: "#my-cal-inline-30min",
        config: { 
          "layout": "month_view", 
          "useSlotsViewOnSmallScreen": "true",
          "theme": "light"
        },
        calLink: "amin-rafai-rmrhre/30min",
      });
      Cal.ns["30min"]("ui", { "hideEventTypeDetails": false, "layout": "month_view" });
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('loading');
    
    try {
      const webhookUrl = 'https://hypobranchial-inez-nonmonogamous.ngrok-free.dev/webhook/a02a2d3c-7327-4845-a0ec-f649db17a272';
      
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          subject: 'Neue Nachricht vom Blue ChatBot Nachrichtenformular',
          name: formData.name,
          email: formData.email,
          message: formData.message,
          source: 'Blue ChatBot Website',
          timestamp: new Date().toISOString(),
          userAgent: navigator.userAgent
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        throw new Error('Server-Antwort war nicht erfolgreich');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section className="py-24 px-6 bg-slate-50 border-t border-slate-100" id="contact">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        {/* Intro Section */}
        <div className="text-center space-y-6">
          <div className="flex flex-col items-center gap-4">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">Sichern Sie Ihre Datenhoheit</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Wählen Sie direkt einen passenden Termin für eine 30-minütige Potenzialanalyse oder senden Sie uns eine Nachricht über das Kontaktformular.
            </p>
          </div>
        </div>
        
        {/* Calendar Block (First, Wide, Horizontal format) */}
        <div className="w-full bg-white p-4 md:p-8 rounded-[2.5rem] shadow-xl border border-slate-100 ring-1 ring-primary/5">
          <div className="flex items-center justify-between mb-8 px-4">
            <div>
              <h3 className="text-2xl font-bold text-slate-900">Terminbuchung</h3>
              <p className="text-sm text-slate-500">Amin Rafai • 30 Min. Erstberatung</p>
            </div>
            <div className="hidden sm:flex items-center gap-2 px-3 py-1 bg-green-50 text-green-600 rounded-full border border-green-100">
              <span className="size-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-[10px] font-bold uppercase tracking-widest">Live-Kalender aktiv</span>
            </div>
          </div>
          
          <div className="w-full overflow-hidden rounded-2xl border border-slate-100 shadow-inner bg-slate-50 min-h-[600px] relative">
             <div style={{ width: '100%', height: '100%', overflow: 'hidden' }} id="my-cal-inline-30min"></div>
          </div>
          <p className="text-center mt-6 text-xs text-slate-400 font-medium tracking-wide">DSGVO-konforme Terminbuchung via Cal.eu</p>
        </div>

        {/* Info & Form Container (Stacked below) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Contact Info */}
          <div className="lg:col-span-4 space-y-8">
            <h3 className="text-2xl font-bold text-slate-900">Weitere Kontaktmöglichkeiten</h3>
            
            <div className="space-y-6">
              <div className="flex items-center gap-5 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm transition-transform hover:translate-x-2">
                <div className="size-12 rounded-xl bg-blue-50 text-primary flex items-center justify-center shadow-inner">
                  <span className="material-symbols-outlined">mail</span>
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1">E-Mail</p>
                  <a href="mailto:herr.rafai@gmail.com" className="text-sm font-bold text-slate-900 hover:text-primary transition-colors">herr.rafai@gmail.com</a>
                </div>
              </div>

              <div className="flex items-center gap-5 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm transition-transform hover:translate-x-2">
                <div className="size-12 rounded-xl bg-blue-50 text-primary flex items-center justify-center shadow-inner">
                  <span className="material-symbols-outlined">call</span>
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1">Telefon</p>
                  <a href="tel:+4917643347838" className="text-sm font-bold text-slate-900 hover:text-primary transition-colors">+49 176 4334 7838</a>
                </div>
              </div>

              <div className="flex items-center gap-5 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm transition-transform hover:translate-x-2">
                <div className="size-12 rounded-xl bg-blue-50 text-primary flex items-center justify-center shadow-inner">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1">Anschrift</p>
                  <p className="text-sm font-bold text-slate-900">Annenstraße 29, 31134 Hildesheim</p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-slate-900 rounded-[2rem] text-white shadow-xl shadow-slate-200 relative overflow-hidden group">
              <div className="relative z-10">
                <h4 className="font-bold mb-3">Bereit für die Zukunft?</h4>
                <p className="text-xs text-slate-400 leading-relaxed mb-6">Wir analysieren Ihre Prozesse und zeigen Ihnen, wo KI-Agenten den größten Hebel für Ihre Effizienz haben.</p>
                <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest">
                  <span className="flex items-center gap-1.5"><span className="size-1.5 bg-blue-400 rounded-full"></span> Kostenlos</span>
                  <span className="flex items-center gap-1.5"><span className="size-1.5 bg-blue-400 rounded-full"></span> Unverbindlich</span>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 size-24 bg-primary/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-8 bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-slate-100">
            <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
              Schreiben Sie uns
            </h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-1">Name</label>
                  <input 
                    required
                    type="text" 
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({...prev, name: e.target.value}))}
                    className="w-full px-5 py-4 rounded-xl border border-slate-100 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none bg-slate-50/50 text-slate-900 placeholder:text-slate-300" 
                    placeholder="Max Mustermann"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-1">E-Mail</label>
                  <input 
                    required
                    type="email" 
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({...prev, email: e.target.value}))}
                    className="w-full px-5 py-4 rounded-xl border border-slate-100 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none bg-slate-50/50 text-slate-900 placeholder:text-slate-300" 
                    placeholder="name@firma.de"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-1">Anliegen</label>
                <textarea 
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({...prev, message: e.target.value}))}
                  className="w-full px-5 py-4 rounded-xl border border-slate-100 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none bg-slate-50/50 text-slate-900 placeholder:text-slate-300 resize-none" 
                  placeholder="Wie können wir Ihnen helfen?"
                ></textarea>
              </div>
              
              <div className="pt-2">
                <button 
                  type="submit"
                  disabled={status === 'loading' || status === 'success'}
                  className={`w-full py-5 rounded-2xl font-bold text-lg transition-all shadow-xl flex items-center justify-center gap-3 ${
                    status === 'loading' ? 'bg-slate-400 cursor-wait' :
                    status === 'success' ? 'bg-green-600' :
                    status === 'error' ? 'bg-red-500 hover:bg-red-600' :
                    'bg-primary hover:bg-blue-600 text-white shadow-primary/25 active:scale-[0.98]'
                  } text-white`}
                >
                  {status === 'loading' ? (
                    <>
                      <div className="size-6 border-3 border-white/20 border-t-white rounded-full animate-spin"></div>
                      Wird gesendet...
                    </>
                  ) : status === 'success' ? (
                    <>
                      <span className="material-symbols-outlined !text-2xl">check_circle</span>
                      Anfrage erfolgreich
                    </>
                  ) : (
                    <>
                      Anfrage absenden
                      <span className="material-symbols-outlined !text-xl">send</span>
                    </>
                  )}
                </button>
                <p className="text-center mt-6 text-[10px] text-slate-400 uppercase tracking-widest font-black">
                  DSGVO Konform • 100% Sicher
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
