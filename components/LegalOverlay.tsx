
import React from 'react';
import { 
  Database, 
  Factory, 
  FileLock, 
  Cpu, 
  Gavel, 
  Blocks, 
  X 
} from 'lucide-react';

export type LegalType = 
  | 'impressum' 
  | 'agb' 
  | 'datenschutz' 
  | 'wissensdatenbanken' 
  | 'produktion' 
  | 'sensible-daten' 
  | 'air-gapped' 
  | 'dsgvo' 
  | 'integration'
  | null;

interface LegalOverlayProps {
  type: LegalType;
  onClose: () => void;
}

const LegalOverlay: React.FC<LegalOverlayProps> = ({ type, onClose }) => {
  if (!type) return null;

  const content: Record<NonNullable<LegalType>, React.ReactNode> = {
    impressum: (
      <div className="space-y-6">
        <h2 className="text-3xl font-extrabold text-slate-900">Impressum</h2>
        <div className="space-y-4 text-slate-600">
          <p className="font-bold text-slate-900 text-lg">nach § 5 TMG</p>
          <p>
            Amin Rafai | Blue Process Annenstraße 29, 31134 Hildesheim, Deutschland
          </p>
          <div className="pt-2">
            <p>Kontakt: Telefon: +49 176 4334 7838 E-Mail: herr.rafai@gmail.com</p>
          </div>
          <div className="pt-2">
            <p>Steuernummer: 43196274049</p>
          </div>
          <div className="pt-2">
            <p>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV: Amin Rafai (Anschrift s.o.)</p>
          </div>
          <p className="text-xs text-slate-400 pt-4">Quelle Impressum: e-recht24.de</p>
        </div>
      </div>
    ),
    agb: (
      <div className="space-y-6">
        <h2 className="text-3xl font-extrabold text-slate-900">Allgemeine Geschäftsbedingungen (AGB)</h2>
        <div className="space-y-4 text-slate-600 text-sm leading-relaxed overflow-y-auto pr-2 max-h-[50vh]">
          <p className="font-bold text-slate-900">Amin Rafai | Blue Process</p>
          
          <p className="font-bold text-slate-900">§ 1 Geltungsbereich</p>
          <p>Diese AGB gelten für alle Verträge über KI-Dienstleistungen, Prozessautomatisierung und Beratung zwischen Amin Rafai | Blue Process (nachfolgend „Auftragnehmer“) und seinen Kunden. Abweichende Bedingungen des Kunden werden nicht anerkannt.</p>
          
          <p className="font-bold text-slate-900">§ 2 Leistungsumfang und Abnahme</p>
          <p>Der konkrete Leistungsumfang ergibt sich aus dem jeweiligen Angebot.</p>
          <p>Der Auftragnehmer schuldet die Einrichtung der Automatisierung nach bestem Wissen und Gewissen. Ein bestimmter wirtschaftlicher Erfolg wird nicht garantiert.</p>
          <p>Nach Fertigstellung der im Angebot beschriebenen Workflows ist der Kunde zur Abnahme verpflichtet. Die Abnahme gilt als erfolgt, wenn der Kunde nicht innerhalb von 7 Werktagen schriftlich Mängel rügt.</p>

          <p className="font-bold text-slate-900">§ 3 Besondere Bedingungen für KI-Leistungen</p>
          <p>Der Kunde ist sich bewusst, dass KI-Modelle (wie z.B. Large Language Models) statistische Ergebnisse liefern. Der Auftragnehmer übernimmt keine Gewähr für die inhaltliche Richtigkeit, Vollständigkeit oder Logik der durch die KI generierten Texte, Daten oder Entscheidungen.</p>
          <p>Der Kunde ist verpflichtet, die durch die Automatisierung erzeugten Ergebnisse vor einer weiteren Verwendung (insbesondere bei Veröffentlichung oder Kundenkontakt) auf Richtigkeit zu prüfen.</p>
          <p>Der Auftragnehmer haftet nicht für Schäden, die durch Fehlentscheidungen einer KI oder durch „Halluzinationen“ des Modells entstehen.</p>

          <p className="font-bold text-slate-900">§ 4 Zahlungsbedingungen</p>
          <p>Sofern im Angebot nicht anders vereinbart, sind Rechnungen sofort nach Erhalt ohne Abzug zahlbar.</p>
          <p>Der Auftragnehmer ist berechtigt, bei Projektstart eine Anzahlung in Höhe von 50 % der Angebotssumme zu verlangen. Die Arbeit beginnt erst nach Eingang einer Anzahlung.</p>

          <p className="font-bold text-slate-900">§ 5 Haftungsbeschränkung</p>
          <p>Der Auftragnehmer haftet nur für Schäden, die auf vorsätzlicher oder grob fahrlässiger Pflichtverletzung beruhen.</p>
          <p>Für leichte Fahrlässigkeit haftet der Auftragnehmer nur bei Verletzung wesentlicher Vertragspflichten. In diesem Fall ist die Haftung auf den bei Vertragsschluss vorhersehbaren, vertragstypischen Schaden begrenzt.</p>
          <p>Die Haftung für entgangenen Gewinn oder indirekte Folgeschäden ist ausgeschlossen.</p>

          <p className="font-bold text-slate-900">§ 6 Urheberrecht und Nutzungsrechte</p>
          <p>An den erstellten KI-Agenten, Automatisierungs-Workflows und Skripten räumt der Auftragnehmer dem Kunden ein einfaches, zeitlich und räumlich unbegrenztes Nutzungsrecht für den eigenen Betrieb ein.</p>
          <p>Die Weitergabe, der Weiterverkauf oder die Unterlizenzierung der Workflows an Dritte ist ohne schriftliche Zustimmung des Auftragnehmers untersagt.</p>
        </div>
      </div>
    ),
    datenschutz: (
      <div className="space-y-6">
        <h2 className="text-3xl font-extrabold text-slate-900">Datenschutzerklärung</h2>
        <div className="space-y-6 text-slate-600 text-sm leading-relaxed overflow-y-auto pr-2 max-h-[50vh]">
          
          <section className="space-y-3">
            <h3 className="font-bold text-slate-900 text-base">1. Datenschutz auf einen Blick</h3>
            <p className="font-bold underline">Allgemeine Hinweise</p>
            <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.</p>
            <p className="font-bold underline">Datenerfassung auf dieser Website</p>
            <p>Verantwortlicher für die Datenerfassung: Amin Rafai | Blue Process, Hildesheim. E-Mail: herr.rafai@gmail.com.</p>
          </section>

          <section className="space-y-3">
            <h3 className="font-bold text-slate-900 text-base">2. Hosting und Infrastruktur</h3>
            <p>Unsere Website und Automatisierungs-Dienste werden bei Hetzner Online GmbH (Deutschland) gehostet. Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO zur Gewährleistung eines sicheren Betriebs.</p>
          </section>

          <section className="space-y-3">
            <h3 className="font-bold text-slate-900 text-base">3. Besonderheiten bei KI-Dienstleistungen</h3>
            <p>Wir setzen auf Wunsch lokale KI-Modelle ein, um maximale Datensouveränität zu gewährleisten. Bei Nutzung externer Modelle erfolgt dies nur nach expliziter Vereinbarung und unter Einhaltung strenger Zero-Retention-Policies.</p>
          </section>

          <section className="space-y-3">
            <h3 className="font-bold text-slate-900 text-base">4. Pflichtinformationen und Rechte</h3>
            <p>Sie haben das Recht auf Auskunft, Löschung, Berichtigung und Einschränkung der Verarbeitung Ihrer Daten gemäß DSGVO.</p>
          </section>

          <section className="space-y-3">
            <h3 className="font-bold text-slate-900 text-base">5. Automatisierungs-Workflows</h3>
            <p>Daten in Workflows werden nur zur Ausführung der jeweiligen Automatisierung verarbeitet und danach gelöscht, sofern keine gesetzlichen Aufbewahrungsfristen bestehen.</p>
          </section>

          <section className="space-y-3">
            <h3 className="font-bold text-slate-900 text-base">6. Terminbuchung</h3>
            <p>Für die Online-Terminbuchung nutzen wir den Dienst <strong>Cal.eu</strong> (Cal.com, Inc., 155 11th Ave, New York, NY 10011, USA). Wenn Sie einen Termin über unsere Website buchen, werden die von Ihnen eingegebenen Daten (z. B. Name, E-Mail-Adresse, Grund des Termins) an Cal.eu übertragen. Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO oder Art. 6 Abs. 1 lit. b DSGVO. Wir haben mit Cal.eu die notwendigen datenschutzrechtlichen Vereinbarungen (DPA/SCCs) getroffen, um ein angemessenes Datenschutzniveau sicherzustellen.</p>
          </section>

        </div>
      </div>
    ),
    wissensdatenbanken: (
      <div className="space-y-6">
        <div className="size-16 rounded-2xl bg-blue-50 text-primary flex items-center justify-center mb-4">
          <Database size={40} />
        </div>
        <h2 className="text-3xl font-extrabold text-slate-900">KI-Wissensdatenbanken</h2>
        <div className="space-y-4 text-slate-600 leading-relaxed">
          <p>Verwandeln Sie Ihre statischen Dokumente in eine interaktive Wissensquelle. Unsere Lösung nutzt <strong>Retrieval Augmented Generation (RAG)</strong>, um Ihre internen Daten lokal zu indizieren.</p>
        </div>
      </div>
    ),
    produktion: (
      <div className="space-y-6">
        <div className="size-16 rounded-2xl bg-blue-50 text-primary flex items-center justify-center mb-4">
          <Factory size={40} />
        </div>
        <h2 className="text-3xl font-extrabold text-slate-900">Produktions-Assistenz</h2>
        <div className="space-y-4 text-slate-600 leading-relaxed">
          <p>Unterstützen Sie Ihre Techniker direkt am Shop-Floor mit einer KI, die alle Maschinenhandbücher und Wartungsprotokolle "kennt".</p>
        </div>
      </div>
    ),
    'sensible-daten': (
      <div className="space-y-6">
        <div className="size-16 rounded-2xl bg-blue-50 text-primary flex items-center justify-center mb-4">
          <FileLock size={40} />
        </div>
        <h2 className="text-3xl font-extrabold text-slate-900">Schutz sensibler Daten</h2>
        <div className="space-y-4 text-slate-600 leading-relaxed">
          <p>Bestimmte Datenkategorien wie Patientenakten oder geheime Patente dürfen niemals das Firmennetzwerk verlassen.</p>
        </div>
      </div>
    ),
    'air-gapped': (
      <div className="space-y-6">
        <div className="size-16 rounded-2xl bg-blue-50 text-primary flex items-center justify-center mb-4">
          <Cpu size={40} />
        </div>
        <h2 className="text-3xl font-extrabold text-slate-900">Air-Gapped Betrieb</h2>
        <div className="space-y-4 text-slate-600 leading-relaxed">
          <p>Für höchste Sicherheitsstufen unterstützen wir den Betrieb in vollständig isolierten Netzwerken ohne Verbindung zum Internet.</p>
        </div>
      </div>
    ),
    dsgvo: (
      <div className="space-y-6">
        <div className="size-16 rounded-2xl bg-blue-50 text-primary flex items-center justify-center mb-4">
          <Gavel size={40} />
        </div>
        <h2 className="text-3xl font-extrabold text-slate-900">DSGVO-Compliance</h2>
        <div className="space-y-4 text-slate-600 leading-relaxed">
          <p>Cloud-basierte KI-Dienste aus den USA sind oft rechtlich problematisch. Mit Blue ChatBot erfüllen Sie die DSGVO-Anforderungen "by Design".</p>
        </div>
      </div>
    ),
    integration: (
      <div className="space-y-6">
        <div className="size-16 rounded-2xl bg-blue-50 text-primary flex items-center justify-center mb-4">
          <Blocks size={40} />
        </div>
        <h2 className="text-3xl font-extrabold text-slate-900">Lokale Integration</h2>
        <div className="space-y-4 text-slate-600 leading-relaxed">
          <p>Ein KI-Agent ist nur so gut wie seine Anbindung. Wir integrieren Blue ChatBot nativ in Ihre SQL-, SAP- oder SharePoint-Umgebungen.</p>
        </div>
      </div>
    )
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-10">
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-300"
        onClick={onClose}
      />
      <div className="relative bg-white w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col rounded-[2rem] shadow-2xl animate-in zoom-in-95 duration-300 border border-slate-200">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 hover:bg-slate-200 transition-all text-slate-600 hover:text-slate-900 z-10 shadow-sm border border-slate-200 flex items-center justify-center"
          aria-label="Schließen"
        >
          <X size={24} />
        </button>
        <div className="flex-1 overflow-y-auto p-8 sm:p-12">
          {content[type]}
        </div>
        <div className="p-6 border-t border-slate-100 flex justify-end bg-slate-50/50">
          <button 
            onClick={onClose}
            className="px-8 py-3 bg-slate-900 text-white font-bold rounded-2xl hover:bg-slate-800 transition-all shadow-lg shadow-slate-200/50 active:scale-95"
          >
            Schließen
          </button>
        </div>
      </div>
    </div>
  );
};

export default LegalOverlay;
