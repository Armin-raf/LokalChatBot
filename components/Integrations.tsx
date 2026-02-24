
import React from 'react';
import { ScrollVelocity } from './ui/scroll-velocity';

interface IntegrationLogo {
  name: string;
  slug: string;
  color: string;
}

const Integrations: React.FC = () => {
  const row1: IntegrationLogo[] = [
    { name: 'PostgreSQL', slug: 'postgresql', color: '4169E1' },
    { name: 'MySQL', slug: 'mysql', color: '4479A1' },
    { name: 'MongoDB', slug: 'mongodb', color: '47A248' },
    { name: 'Redis', slug: 'redis', color: 'DC382D' },
    { name: 'Elasticsearch', slug: 'elasticsearch', color: '005571' },
    { name: 'SAP', slug: 'sap', color: '008FD3' },
    { name: 'Docker', slug: 'docker', color: '2496ED' },
    { name: 'Kubernetes', slug: 'kubernetes', color: '326CE5' },
  ];

  const row2: IntegrationLogo[] = [
    { name: 'Windows Server', slug: 'windowsserver', color: '0078D4' },
    { name: 'Linux', slug: 'linux', color: 'FCC624' },
    { name: 'Python', slug: 'python', color: '3776AB' },
    { name: 'Active Directory', slug: 'microsoft', color: '0078D4' },
    { name: 'Confluence', slug: 'confluence', color: '172B4D' },
    { name: 'SharePoint', slug: 'microsoftsharepoint', color: '00A2ED' },
    { name: 'GitLab', slug: 'gitlab', color: 'FC6D26' },
    { name: 'Nginx', slug: 'nginx', color: '009639' },
  ];

  const renderLogos = (logos: IntegrationLogo[]) => (
    logos.map((logo) => (
      <div 
        key={logo.slug} 
        className="flex items-center gap-6 px-12 py-8 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all hover:scale-105 group ring-1 ring-slate-100/50"
      >
        <div className="size-12 flex items-center justify-center">
          <img 
            src={`https://cdn.simpleicons.org/${logo.slug}/${logo.color}`} 
            alt={logo.name} 
            className="w-full h-full object-contain transition-transform group-hover:rotate-6"
            loading="lazy"
          />
        </div>
        <span className="text-xl font-extrabold text-slate-800 whitespace-nowrap">{logo.name}</span>
      </div>
    ))
  );

  return (
    <section className="py-32 bg-slate-50 overflow-hidden" id="integrations">
      <div className="max-w-7xl mx-auto mb-20 px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-blue-100 text-primary mb-6 text-xs font-bold uppercase tracking-widest">System-Integration</div>
        <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-8 tracking-tight">
          Native Integration in Ihre IT
        </h2>
        <p className="text-slate-500 text-xl max-w-3xl mx-auto leading-relaxed">
          Blue ChatBot agiert lokal. Wir binden Ihre bestehenden Datenbanken, ERP-Systeme und Fileserver direkt an, ohne dass Daten Ihre Infrastruktur verlassen.
        </p>
      </div>
      
      <div className="flex flex-col space-y-12">
        <ScrollVelocity velocity={0.6} className="py-4">
          {renderLogos(row1)}
        </ScrollVelocity>
        
        <ScrollVelocity velocity={-0.6} className="py-4">
          {renderLogos(row2)}
        </ScrollVelocity>
      </div>
    </section>
  );
};

export default Integrations;
