"use client";

import "./globals.css";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import * as fr from "./data/index";
import * as en from "./data/index.en";
import { useState, createContext } from "react";
import { LangData } from "./types";

type Lang = "fr" | "en";

type LangContextType = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  data: LangData;
};

export const LangContext = createContext<LangContextType | null>(null);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [lang, setLang] = useState<Lang>("fr");

  const data = lang === "fr" ? (fr as LangData) : (en as LangData);

  return (
    <LangContext.Provider value={{ lang, setLang, data }}>
      <html lang={lang}>
        <body>
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </LangContext.Provider>
  );
}