"use client";
import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import { useRouter, usePathname } from "next/navigation";
import { type Locale, type T, TRANSLATIONS } from "./translations";

type I18nCtx = { locale: Locale; t: T; setLocale: (l: Locale) => void };

const Ctx = createContext<I18nCtx>({
  locale: "fr",
  t: TRANSLATIONS.fr,
  setLocale: () => {},
});

export function I18nProvider({
  initialLocale,
  children,
}: {
  initialLocale: Locale;
  children: ReactNode;
}) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale);
  const router   = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    document.documentElement.dir  = TRANSLATIONS[initialLocale].dir;
    document.documentElement.lang = initialLocale;
  }, [initialLocale]);

  function setLocale(l: Locale) {
    setLocaleState(l);
    localStorage.setItem("tcm_locale", l);
    document.cookie = `tcm_locale=${l};path=/;max-age=31536000`;
    document.documentElement.dir  = TRANSLATIONS[l].dir;
    document.documentElement.lang = l;
    const newPath = pathname.replace(/^\/(fr|en|ar|it)/, `/${l}`);
    router.push(newPath);
  }

  const t = TRANSLATIONS[locale] ?? TRANSLATIONS.fr;

  return (
    <Ctx.Provider value={{ locale, t, setLocale }}>
      {children}
    </Ctx.Provider>
  );
}

export function useI18n() {
  return useContext(Ctx);
}
