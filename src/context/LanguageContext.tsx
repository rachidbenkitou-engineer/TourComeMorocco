"use client";
import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import t, { Lang } from "@/translations";

interface LanguageContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  tr: typeof t.EN;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "EN",
  setLang: () => {},
  tr: t.EN,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("EN");

  useEffect(() => {
    const html = document.documentElement;
    html.lang = lang === "AR" ? "ar" : lang === "FR" ? "fr" : "en";
    html.dir = lang === "AR" ? "rtl" : "ltr";
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, tr: t[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
