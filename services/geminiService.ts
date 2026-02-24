
import { GoogleGenAI } from "@google/genai";

export const getGeminiResponse = async (userMessage: string): Promise<string> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: `SYSTEM PRIORITÄT: Du bist der professionelle Berater der KI-Agentur 'Blue ChatBot'.
        
        DEIN KONTEXT:
        - Blue ChatBot ist spezialisiert auf 100% lokale, offline lauffähige KI-Systeme (On-Premise).
        - Deine Zielgruppe sind IT-Leiter, Compliance-Beauftragte und Geschäftsführer.
        
        DEINE REGELN:
        1. Antworte ruhig, souverän und technisch präzise.
        2. Betone immer die Vorteile der Datensouveränität und des On-Premise-Betriebs.
        3. Erkläre bei Bedarf, dass wir keine Cloud-Dienste für die Kernfunktionalität nutzen.
        4. Bleibe immer sachlich und professionell.
        5. Wenn Nutzer tiefgehende technische Fragen zur Implementierung haben, schlage ein technisches Erstgespräch vor.
        6. Antworte immer auf Deutsch.`,
        temperature: 0.3,
      },
    });

    return response.text || "Ich konnte leider keine Antwort generieren. Bitte versuchen Sie es erneut.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Technischer Fehler in der Verbindung. Bitte versuchen Sie es später erneut.";
  }
};
