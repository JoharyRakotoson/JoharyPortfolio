'use client';

import { useContext } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { LangContext } from '../AppShell';
import GlareSweep from '../components/effects/GlareSweep';

export default function Footer() {
  const ctx = useContext(LangContext);

  const lang = ctx?.lang ?? 'fr';
  const navItems = ctx?.data.navItems ?? [];
  const contactMethods = ctx?.data.contactSection?.contactMethods ?? [];
  const socialTitle = ctx?.data.contactSection?.socialTitle ?? 'Suivez-moi';
  const socialLink = ctx?.data.socialLink ?? [];
  const skills = ctx?.data.skills ?? [];
  const year = new Date().getFullYear();

  const labels =
    lang === 'fr'
      ? {
          navigation: 'Navigation',
          contact: 'Contact',
          skills: 'Compétences',
          about: 'Développeur Fullstack Web',
          tagline: 'Créons ensemble des expériences web mémorables.',
          rights: 'Tous droits réservés',
          location: 'Antananarivo, Madagascar',
        }
      : {
          navigation: 'Navigation',
          contact: 'Contact',
          skills: 'Skills',
          about: 'Fullstack Web Developer',
          tagline: "Let's build memorable web experiences together.",
          rights: 'All rights reserved',
          location: 'Antananarivo, Madagascar',
        };

  return (
    <GlareSweep className="w-full">
      <footer className="border-t border-white/10 bg-black/40 text-white">
        <div className="mx-auto max-w-7xl px-4 py-12 lg:px-6">
        <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:grid-cols-4">
          {/* BRAND */}
          <div className="flex flex-col">
            <p className="text-base font-bold whitespace-nowrap lg:text-xs xl:text-base">
              RAKOTOSON Johariniaina Michael
            </p>
            <p className="mt-1 text-sm font-semibold text-red-400">{labels.about}</p>
            <p className="mt-3 text-sm leading-relaxed text-gray-400">{labels.tagline}</p>
          </div>

          {/* NAVIGATION */}
          <div className="flex flex-col">
            <p className="text-sm font-semibold tracking-[0.25em] text-gray-300 uppercase">
              {labels.navigation}
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-gray-400 transition hover:text-red-400"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="#contact" className="text-gray-400 transition hover:text-red-400">
                  {ctx?.data.contactSection?.title}
                </a>
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div className="flex flex-col">
            <p className="text-sm font-semibold tracking-[0.25em] text-gray-300 uppercase">
              {labels.contact}
            </p>
            <ul className="mt-4 space-y-4 text-sm text-gray-400">
              {contactMethods.map((method) => (
                <li key={method.label}>
                  <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-gray-300 uppercase">
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
                    <a
                      href={`mailto:${method.value}`}
                      className="mt-1 block whitespace-nowrap text-sm transition hover:text-red-400 lg:text-xs xl:text-sm"
                    >
                      {method.value}
                    </a>
                  ) : method.icon === 'phone' ? (
                    <a
                      href={`tel:${method.value.replace(/\s/g, '')}`}
                      className="mt-1 block whitespace-nowrap text-sm transition hover:text-red-400 lg:text-xs xl:text-sm"
                    >
                      {method.value}
                    </a>
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
          <div className="flex flex-col">
            <p className="text-sm font-semibold tracking-[0.25em] text-gray-300 uppercase">
              {labels.skills}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
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
            <div className="mt-3 flex gap-3">
              {socialLink.map((item) => (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.name}
                  className="flex h-8 w-8 items-center justify-center rounded-md bg-red-500 text-xs font-bold text-white transition hover:bg-red-600"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-gray-500 md:flex-row">
          <p>
            © {year} RAKOTOSON Johariniaina Michael — {labels.about}. {labels.rights}.
          </p>
          <p>{labels.location}</p>
        </div>
      </div>
      </footer>
    </GlareSweep>
  );
}
