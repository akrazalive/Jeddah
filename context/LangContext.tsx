'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Lang, translations, TranslationKey } from '@/lib/i18n';

interface LangContextType {
  lang: Lang;
  dir: 'rtl' | 'ltr';
  t: (key: TranslationKey) => string;
  toggleLang: () => void;
}

const LangContext = createContext<LangContextType | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('ar'); // default Arabic

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  const toggleLang = () => setLang(prev => prev === 'ar' ? 'en' : 'ar');

  const t = (key: TranslationKey): string => translations[lang][key] as string;

  return (
    <LangContext.Provider value={{ lang, dir: lang === 'ar' ? 'rtl' : 'ltr', t, toggleLang }}>
      {children}
    </LangContext.Provider>
  );
}

export const useLang = () => {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error('useLang must be used within LangProvider');
  return ctx;
};
