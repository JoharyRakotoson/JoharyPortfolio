'use client';

import { useContext } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { LangContext } from '../AppShell';

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
          description:
            "Diplômé d'un Master MBDS de l'IT University, je conçois des applications web modernes et performantes à Antananarivo, Madagascar.",
          rights: 'Tous droits réservés',
          location: 'Antananarivo, Madagascar',
        }
      : {
          navigation: 'Navigation',
          contact: 'Contact',
          skills: 'Skills',
          about: 'Fullstack Web Developer',
          description:
            "Master's degree in MBDS from IT University. I build modern and performant web applications in Antananarivo, Madagascar.",
          rights: 'All rights reserved',
          location: 'Antananarivo, Madagascar',
        };

  return (
    <footer className="w-full border-t border-white/10 bg-black/40 text-white">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* BRAND */}
          <div>
            <p className="text-lg font-bold">RAKOTOSON Johariniaina Michael</p>
            <p className="mt-1 text-sm font-semibold text-red-400">{labels.about}</p>
            <p className="mt-3 text-sm leading-relaxed text-gray-400">{labels.description}</p>
          </div>

          {/* NAVIGATION */}
          <div>
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
          <div>
            <p className="text-sm font-semibold tracking-[0.25em] text-gray-300 uppercase">
              {labels.contact}
            </p>
            <ul className="mt-4 space-y-3 text-sm text-gray-400">
              {contactMethods.map((method) => (
                <li key={method.label} className="flex items-start gap-2">
                  {method.icon === 'email' && (
                    <Mail size={16} className="mt-0.5 shrink-0 text-red-400" />
                  )}
                  {method.icon === 'phone' && (
                    <Phone size={16} className="mt-0.5 shrink-0 text-red-400" />
                  )}
                  {method.icon === 'location' && (
                    <MapPin size={16} className="mt-0.5 shrink-0 text-red-400" />
                  )}

                  {method.icon === 'email' ? (
                    <a
                      href={`mailto:${method.value}`}
                      className="break-all transition hover:text-red-400"
                    >
                      {method.value}
                    </a>
                  ) : method.icon === 'phone' ? (
                    <a
                      href={`tel:${method.value.replace(/\s/g, '')}`}
                      className="transition hover:text-red-400"
                    >
                      {method.value}
                    </a>
                  ) : (
                    <span>{method.value}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* COMPETENCES + SOCIAL */}
          <div>
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
  );
}
