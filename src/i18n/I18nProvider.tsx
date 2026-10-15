"use client";
import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import { type Locale, type T, TRANSLATIONS } from "./translations";

type I18nCtx = { locale: Locale; t: T; setLocale: (l: Locale) => void };

const Ctx = createContext<I18nCtx>({
  locale: "fr",
  t: TRANSLATIONS.fr,
  setLocale: () => {},
});

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("fr");

  useEffect(() => {
    const saved = localStorage.getItem("tcm_locale") as Locale | null;
    if (saved && (["fr", "en", "ar"] as Locale[]).includes(saved)) {
      applyLocale(saved);
    }
  }, []);

  function applyLocale(l: Locale) {
    setLocaleState(l);
    localStorage.setItem("tcm_locale", l);
    document.documentElement.dir = TRANSLATIONS[l].dir;
    document.documentElement.lang = l;
  }

  return (
    <Ctx.Provider value={{ locale, t: TRANSLATIONS[locale], setLocale: applyLocale }}>
      {children}
    </Ctx.Provider>
  );
}

export function useI18n() {
  return useContext(Ctx);
}
