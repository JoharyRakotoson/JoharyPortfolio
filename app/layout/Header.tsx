/* eslint-disable @next/next/no-img-element */
'use client';

import { useState, useEffect, useContext } from 'react';
import Button from '../components/Button';
import { LangContext } from '../layout';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  const ctx = useContext(LangContext);

  const navItems = ctx?.data.navItems ?? [];
  const lang = ctx?.lang ?? "fr";
  const setLang = ctx?.setLang;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black-950/50 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav className="flex items-center justify-between px-8 py-5 text-white">
        
        {/* LOGO */}
        <div className="flex items-center gap-3">
          <a href="#home" className="flex items-center gap-3">
            <img
              src="/logo/mylogo.png"
              alt="Logo"
              className="w-10 h-10 object-contain"
            />

            <span className="font-inter text-2xl leading-none">
              Johary
            </span>
          </a>
        </div>

        {/* NAV */}
        <ul className="hidden md:flex gap-8 text-sm font-medium">
          {navItems.map((item) => (
            <li key={item.href} className="hover:text-gray-300 cursor-pointer">
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">

          {/* SWITCH LANG */}
          <button
            onClick={() => setLang?.(lang === "fr" ? "en" : "fr")}
            className="text-sm font-medium hover:text-gray-300 transition"
          >
            {lang.toUpperCase()}
          </button>

          {/* CONTACT */}
          <Button
            href="#contact"
            variant="outline"
            className="rounded-full text-sm"
          >
            Contact
          </Button>

        </div>

      </nav>
    </header>
  );
}