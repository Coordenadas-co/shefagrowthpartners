import React, { createContext, useContext, useState, useCallback } from "react";

type Lang = "en" | "es";

interface LanguageContextType {
  lang: Lang;
  toggleLang: () => void;
  t: (en: string, es: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  toggleLang: () => {},
  t: (en) => en,
});

const detectLang = (): Lang => {
  if (typeof navigator === "undefined") return "en";
  const candidates = [navigator.language, ...(navigator.languages ?? [])];
  return candidates.some((l) => l?.toLowerCase().startsWith("es")) ? "es" : "en";
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Lang>(() => detectLang());
  const toggleLang = useCallback(() => setLang((l) => (l === "en" ? "es" : "en")), []);
  const t = useCallback((en: string, es: string) => (lang === "en" ? en : es), [lang]);

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLang = () => useContext(LanguageContext);
