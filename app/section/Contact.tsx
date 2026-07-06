'use client';

import { useContext } from 'react';
import Button from '../components/Button';
import FormField from '../components/FormField';
import Icon from '../components/Icon';
import { LangContext } from '../layout';

import {
  Mail,
  Phone,
  MapPin,
} from 'lucide-react';

export default function Contact() {
  const ctx = useContext(LangContext);

  if (!ctx) return null;

  const { socialLink } = ctx.data;
  const { lang } = ctx;

  return (
    <section
      id="contact"
      className="min-h-screen py-20 px-4 md:px-8 lg:px-16 text-white flex items-center"
    >
      <div className="max-w-7xl mx-auto">

        {/* TITLE */}
        <h2 className="text-4xl font-bold mb-12 text-center">
          {lang === 'fr' ? 'Contact' : 'Contact'}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">

          {/* CONTACT INFO */}
          <div className="lg:col-span-2">
            <div className="rounded-3xl p-10 shadow-2xl shadow-gray-300/10">

              <h3 className="text-3xl font-semibold mb-8">
                {lang === 'fr' ? 'Contactez-moi' : 'Contact me'}
              </h3>

              <div className="space-y-6">

                {/* EMAIL */}
                <div className="flex items-start gap-5 rounded-3xl p-6 shadow-sm shadow-gray-800/30">
                  <Icon icon={Mail} variant="contact" />

                  <div>
                    <p className="text-sm uppercase tracking-[0.24em] text-red-400">
                      Email
                    </p>
                    <p className="mt-2 text-lg font-semibold text-white">
                      johariniainarakotoson40@gmail.com
                    </p>
                    <p className="text-sm text-gray-400">
                      {lang === 'fr'
                        ? 'Réponse rapide garantie.'
                        : 'Fast response guaranteed.'}
                    </p>
                  </div>
                </div>

                {/* PHONE */}
                <div className="flex items-start gap-5 rounded-3xl p-6 shadow-sm shadow-gray-800/30">
                  <Icon icon={Phone} variant="contact" />

                  <div>
                    <p className="text-sm uppercase tracking-[0.24em] text-red-400">
                      {lang === 'fr' ? 'Contact' : 'Phone'}
                    </p>
                    <p className="mt-2 text-lg font-semibold text-white">
                      +261 34 21 489 76
                    </p>
                    <p className="text-sm text-gray-400">
                      {lang === 'fr'
                        ? 'Disponible pour projets et collaborations.'
                        : 'Available for projects and collaborations.'}
                    </p>
                  </div>
                </div>

                {/* LOCATION */}
                <div className="flex items-start gap-5 rounded-3xl p-6 shadow-sm shadow-gray-800/30">
                  <Icon icon={MapPin} variant="contact" />

                  <div>
                    <p className="text-sm uppercase tracking-[0.24em] text-red-400">
                      {lang === 'fr' ? 'Localisation' : 'Location'}
                    </p>
                    <p className="mt-2 text-lg font-semibold text-white">
                      Antananarivo, Madagascar
                    </p>
                    <p className="text-sm text-gray-400">
                      {lang === 'fr'
                        ? 'Ouvert aux opportunités hybrides, distantes et en présentiel.'
                        : 'Open to hybrid, remote and on-site opportunities.'}
                    </p>
                  </div>
                </div>

              </div>

              {/* SOCIAL */}
              <div className="mt-10 pt-8 border-t border-gray-800">

                <p className="text-sm uppercase tracking-[0.24em] text-red-400 mb-4">
                  {lang === 'fr' ? 'Suivez-moi' : 'Follow me'}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {socialLink.map((item) => (
                    <Button
                      key={item.name}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="social"
                    >
                      <span className="w-6 h-6 flex items-center justify-center rounded-md bg-red-500 text-white text-xs font-bold">
                        {item.icon}
                      </span>

                      <span className="text-sm font-semibold">
                        {item.name}
                      </span>
                    </Button>
                  ))}
                </div>

              </div>
            </div>
          </div>

          {/* FORM */}
          <div className="lg:col-span-1 flex justify-center">
            <div className="w-full max-w-xl rounded-3xl border border-gray-800/60 bg-transparent p-10 flex flex-col items-center">

              <h3 className="text-3xl font-semibold mb-8 w-full">
                {lang === 'fr' ? 'Collaborons ensemble' : 'Let’s work together'}
              </h3>

              <form className="w-full space-y-6">
                <FormField label="Name" name="name" type="text" placeholder="Votre nom" />
                <FormField label="Email" name="email" type="email" placeholder="you@example.com" />
                <FormField label="Subject" name="subject" type="text" placeholder="Sujet du message" />
                <FormField label="Message" name="message" type="textarea" placeholder="Votre message" rows={5} />

                <Button type="submit" variant="primary" className="w-full">
                  {lang === 'fr' ? 'Envoyer' : 'Send'}
                </Button>
              </form>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}