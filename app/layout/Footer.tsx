'use client';

import { useContext } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { LangContext } from '../AppShell';
import GlareSweep from '../components/effects/GlareSweep';
import Button from '../components/ui/Button';
import { footerLabel } from '../lib/footerLabels';

export default function Footer() {
  const ctx = useContext(LangContext);

  const lang = ctx?.lang ?? 'fr';
  const navItems = ctx?.data.navItems ?? [];
  const contactMethods = ctx?.data.contactSection?.contactMethods ?? [];
  const socialTitle = ctx?.data.contactSection?.socialTitle ?? 'Suivez-moi';
  const socialLink = ctx?.data.socialLink ?? [];
  const skills = ctx?.data.skills ?? [];
  const year = new Date().getFullYear();

  return (
    <GlareSweep className="w-full">
      <footer className="border-t border-white/10 bg-black/40 text-white">
        <div className="mx-auto max-w-7xl px-4 py-12 lg:px-6">
        <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:grid-cols-4">
          {/* BRAND */}
          <div className="flex flex-col text-center lg:text-left">
            <p className="text-base font-bold whitespace-nowrap lg:text-xs xl:text-base">
              RAKOTOSON Johariniaina Michael
            </p>
            <p className="mt-1 text-sm font-semibold text-red-400">
              {footerLabel(lang, 'about')}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-gray-400">
              {footerLabel(lang, 'tagline')}
            </p>
          </div>

          {/* NAVIGATION */}
          <div className="flex flex-col text-center lg:text-left">
            <p className="text-sm font-semibold tracking-[0.25em] text-gray-300 uppercase">
              {footerLabel(lang, 'navigation')}
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Button href={item.href} variant="link">
                    {item.label}
                  </Button>
                </li>
              ))}
              <li>
                <Button href="#contact" variant="link">
                  {ctx?.data.contactSection?.title}
                </Button>
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div className="flex flex-col text-center lg:text-left">
            <p className="text-sm font-semibold tracking-[0.25em] text-gray-300 uppercase">
              {footerLabel(lang, 'contact')}
            </p>
            <ul className="mt-4 space-y-4 text-sm text-gray-400">
              {contactMethods.map((method) => (
                <li key={method.label}>
                  <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-[0.2em] text-gray-300 uppercase lg:justify-start">
                    {method.icon === 'email' && (
                      <Mail size={14} className="shrink-0 text-red-400" />
                    )}
                    {method.icon === 'phone' && (
                      <Phone size={14} className="shrink-0 text-red-400" />
                    )}
                    {method.icon === 'location' && (
                      <MapPin size={14} className="shrink-0 text-red-400" />
                    )}
                    {method.label}
                  </div>

                  {method.icon === 'email' ? (
                    <Button
                      href={`mailto:${method.value}`}
                      variant="link"
                      className="mt-1 block whitespace-nowrap text-sm lg:text-xs xl:text-sm"
                    >
                      {method.value}
                    </Button>
                  ) : method.icon === 'phone' ? (
                    <Button
                      href={`tel:${method.value.replace(/\s/g, '')}`}
                      variant="link"
                      className="mt-1 block whitespace-nowrap text-sm lg:text-xs xl:text-sm"
                    >
                      {method.value}
                    </Button>
                  ) : (
                    <span className="mt-1 block whitespace-nowrap text-sm lg:text-xs xl:text-sm">
                      {method.value}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* COMPETENCES + SOCIAL */}
          <div className="flex flex-col text-center lg:text-left">
            <p className="text-sm font-semibold tracking-[0.25em] text-gray-300 uppercase">
              {footerLabel(lang, 'skills')}
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-2 lg:justify-start">
              {skills.map((skill) => (
                <span
                  key={skill.name}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300"
                >
                  {skill.name}
                </span>
              ))}
            </div>

            <p className="mt-6 text-sm font-semibold tracking-[0.25em] text-gray-300 uppercase">
              {socialTitle}
            </p>
            <div className="mt-3 flex justify-center gap-3 lg:justify-start">
              {socialLink.map((item) => (
                <Button
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="socialIcon"
                  ariaLabel={item.name}
                >
                  {item.icon}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-gray-500 md:flex-row">
          <p>
            © {year} RAKOTOSON Johariniaina Michael — {footerLabel(lang, 'about')}.{' '}
            {footerLabel(lang, 'rights')}.
          </p>
          <p>{footerLabel(lang, 'location')}</p>
        </div>
      </div>
      </footer>
    </GlareSweep>
  );
}
