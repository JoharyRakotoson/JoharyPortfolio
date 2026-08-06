/* eslint-disable @next/next/no-img-element */
'use client';

import { useState, useEffect, useContext } from 'react';
import Button from '../components/Button';
import { LangContext } from '../AppShell';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const ctx = useContext(LangContext);

  const navItems = ctx?.data.navItems ?? [];
  const lang = ctx?.lang ?? 'fr';
  const setLang = ctx?.setLang;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* HEADER */}
      <header
        className={`fixed top-0 left-0 z-100 w-full transition-all duration-300 ${
          isScrolled ? 'bg-black/60 backdrop-blur-md' : 'bg-transparent'
        } `}
      >
        <nav className="flex items-center justify-between px-4 py-4 text-white sm:px-6 md:px-8">
          {/* LOGO */}
          <a href="#home" className="flex items-center gap-2 md:gap-3">
            <img
              src="/logo/mylogo.png"
              alt="Portfolio RAKOTOSON Johariniaina Michael"
              className="h-7 w-7 object-contain md:h-10 md:w-10"
            />

            <span className="font-inter text-base md:text-2xl">Johary</span>
          </a>

          {/* DESKTOP NAV */}
          <ul className="hidden gap-6 text-sm font-medium md:flex lg:gap-8">
            {navItems.map((item) => (
              <li key={item.href} className="transition hover:text-gray-300">
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-3 md:gap-4">
            {/* LANGUAGE */}
            <button
              type="button"
              onClick={() => setLang?.(lang === 'fr' ? 'en' : 'fr')}
              className="mr-10 text-xs font-medium transition hover:text-gray-300 md:mr-0 md:text-sm"
            >
              {lang.toUpperCase()}
            </button>

            {/* CONTACT DESKTOP */}
            <div className="hidden md:block">
              <Button href="#contact" variant="outline" className="rounded-full text-sm">
                Contact
              </Button>
            </div>
          </div>
        </nav>
      </header>

      {/* MOBILE BUTTON */}
      <button
        type="button"
        className="fixed top-4 right-4 z-2000 flex h-8 w-8 items-center justify-center md:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? (
          <>
            {/* CLOSE X */}
            <span className="absolute h-0.5 w-6 rotate-45 bg-white" />

            <span className="absolute h-0.5 w-6 -rotate-45 bg-white" />
          </>
        ) : (
          <>
            {/* HAMBURGER */}
            <span className="h-0.5 w-6 bg-white"></span>
            <span className="h-0.5 w-6 bg-white"></span>
            <span className="h-0.5 w-6 bg-white"></span>
          </>
        )}
      </button>

      {/* MOBILE MENU OVERLAY */}
      <div
        className={`fixed inset-0 z-900 flex h-screen w-screen flex-col items-center justify-start gap-6 bg-black/95 pt-32 text-center backdrop-blur-xl transition-all duration-300 md:hidden ${
          menuOpen ? 'visible opacity-100' : 'pointer-events-none invisible opacity-0'
        } `}
      >
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={() => setMenuOpen(false)}
            className="text-2xl text-white transition hover:text-gray-300"
          >
            {item.label}
          </a>
        ))}

        <Button
          href="#contact"
          variant="outline"
          className="mt-6 rounded-full text-sm"
          onClick={() => setMenuOpen(false)}
        >
          Contact
        </Button>
      </div>
    </>
  );
}
