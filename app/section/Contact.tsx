'use client';

import { useContext } from 'react';
import Button from '../components/Button';
import FormField from '../components/FormField';
import Icon from '../components/Icon';
import { LangContext } from '../layout';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  const ctx = useContext(LangContext);
  if (!ctx) return null;

  const { socialLink } = ctx.data;
  const { lang } = ctx;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formElement = e.currentTarget;
    const form = new FormData(formElement);

    const data = {
      name: form.get("name"),
      email: form.get("email"),
      subject: form.get("subject"),
      message: form.get("message"),
    };

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      alert("Message envoyé !");
      formElement.reset();
    } else {
      alert("Erreur lors de l'envoi");
    }
  };



  return (
    <section
      id="contact"
      className="flex min-h-screen items-center px-4 py-20 text-white md:px-8 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        {/* TITLE */}
        <h2 className="mb-12 text-center text-4xl font-bold">
          {lang === 'fr' ? 'Contact' : 'Contact'}
        </h2>

        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-3">
          {/* CONTACT INFO */}
          <div className="lg:col-span-2">
            <div className="overflow-hidden rounded-3xl p-4 shadow-2xl shadow-gray-300/10 sm:p-6 lg:p-10">
              <h3 className="mb-8 text-3xl font-semibold">
                {lang === 'fr' ? 'Contactez-moi' : 'Contact me'}
              </h3>

              <div className="space-y-6">
                {/* EMAIL */}
                <div className="flex min-w-0 items-start gap-3 rounded-3xl p-4 shadow-sm shadow-gray-800/30 sm:gap-5 sm:p-6">
                  <Icon icon={Mail} variant="contact" />

                  <div className="min-w-0">
                    <p className="text-sm tracking-[0.24em] text-red-400 uppercase">Email</p>
                    <p className="mt-2 text-base font-semibold break-all text-white sm:text-lg">
                      johariniainarakotoson40@gmail.com
                    </p>
                    <p className="text-sm text-gray-400">
                      {lang === 'fr' ? 'Réponse rapide garantie.' : 'Fast response guaranteed.'}
                    </p>
                  </div>
                </div>

                {/* PHONE */}
                <div className="flex items-start gap-5 rounded-3xl p-6 shadow-sm shadow-gray-800/30">
                  <Icon icon={Phone} variant="contact" />

                  <div>
                    <p className="text-sm tracking-[0.24em] text-red-400 uppercase">
                      {lang === 'fr' ? 'Contact' : 'Phone'}
                    </p>
                    <p className="mt-2 text-lg font-semibold text-white">+261 34 21 489 76</p>
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
                    <p className="text-sm tracking-[0.24em] text-red-400 uppercase">
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
              <div className="mt-10 border-t border-gray-800 pt-8">
                <p className="mb-4 text-sm tracking-[0.24em] text-red-400 uppercase">
                  {lang === 'fr' ? 'Suivez-moi' : 'Follow me'}
                </p>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                  {socialLink.map((item) => (
                    <Button
                      key={item.name}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="social"
                    >
                      <span className="flex h-6 w-6 items-center justify-center rounded-md bg-red-500 text-xs font-bold text-white">
                        {item.icon}
                      </span>

                      <span className="text-sm font-semibold">{item.name}</span>
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* FORM */}
          <div className="flex justify-center lg:col-span-1">
            <div className="flex w-full max-w-xl flex-col items-center rounded-3xl border border-gray-800/60 bg-transparent p-10">
              <h3 className="mb-8 w-full text-3xl font-semibold">
                {lang === 'fr' ? 'Collaborons ensemble' : 'Let’s work together'}
              </h3>

              <form onSubmit={handleSubmit} className="w-full space-y-6">
                <FormField
                  label="Name"
                  name="name"
                  type="text"
                  placeholder="Votre nom"
                />

                <FormField
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="email@gmail.com"
                />

                <FormField
                  label="Subject"
                  name="subject"
                  type="text"
                  placeholder="Sujet du message"
                />

                <FormField
                  label="Message"
                  name="message"
                  type="textarea"
                  placeholder="Votre message"
                  rows={5}
                />

                <Button type="submit" variant="primary" className="w-full">
                  {lang === "fr" ? "Envoyer" : "Send"}
                </Button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
