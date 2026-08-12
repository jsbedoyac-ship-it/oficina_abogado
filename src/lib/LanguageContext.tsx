"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { content, type Lang } from "./content";

type LanguageContextValue = {
  lang: Lang;
  toggle: () => void;
  t: (typeof content)["es"];
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "bedoya-legal-lang";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("es");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "es" || stored === "en") {
      setLang(stored);
    } else if (navigator.language?.toLowerCase().startsWith("en")) {
      setLang("en");
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    window.localStorage.setItem(STORAGE_KEY, lang);
  }, [lang]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      lang,
      toggle: () => setLang((prev) => (prev === "es" ? "en" : "es")),
      t: content[lang],
    }),
    [lang],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
