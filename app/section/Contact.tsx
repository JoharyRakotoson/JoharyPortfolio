'use client';

import { useContext } from 'react';
import ContactInfo from '../components/ContactInfo';
import ContactForm from '../components/ContactForm';
import { LangContext } from '../AppShell';

export default function Contact() {
  const ctx = useContext(LangContext);
  const contactSection = ctx?.data.contactSection;
  const socialLink = ctx?.data.socialLink ?? [];

  return (
    <section
      id="contact"
      className="flex min-h-screen items-center px-4 py-20 text-white md:px-8 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-12 text-center text-4xl font-bold">
          {contactSection?.title ?? ''}
        </h2>

        <p className="sr-only">
          Contacter RAKOTOSON Johariniaina Michael, développeur fullstack web à
          Antananarivo, Madagascar. Disponible pour projets et collaborations.
        </p>

        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-3">
          <ContactInfo
            contactMethods={contactSection?.contactMethods ?? []}
            socialTitle={contactSection?.socialTitle ?? ''}
            socialLink={socialLink}
          />

          <ContactForm
            formTitle={contactSection?.formTitle ?? ''}
            submitLabel={contactSection?.submitLabel ?? ''}
            fields={contactSection?.formFields ?? []}
            messages={contactSection?.messages}
          />
        </div>
      </div>
    </section>
  );
}
