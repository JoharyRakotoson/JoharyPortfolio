'use client';

import { useState, createContext, useEffect } from 'react';
import Header from './layout/Header';
import Footer from './layout/Footer';
import * as fr from './data/index';
import * as en from './data/index.en';
import type { LangData } from './types';

export type Lang = 'fr' | 'en';

type LangContextType = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  data: LangData;
};

export const LangContext = createContext<LangContextType | null>(null);

export default function AppShell({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>('fr');

  const data = lang === 'fr' ? (fr as LangData) : (en as LangData);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <LangContext.Provider value={{ lang, setLang, data }}>
      <Header />
      {children}
      <Footer />
    </LangContext.Provider>
  );
}
