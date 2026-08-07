'use client';

import { useContext, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import ContactInfo from '../components/Contact/ContactInfo';
import ContactForm from '../components/Contact/ContactForm';
import { LangContext } from '../AppShell';

export default function Contact() {
  const ctx = useContext(LangContext);
  const contactSection = ctx?.data.contactSection;
  const socialLink = ctx?.data.socialLink ?? [];

  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const info = infoRef.current;
    const form = formRef.current;
    if (!section || !title || !info || !form) return;

    gsap.set(title, { opacity: 0, y: 20 });
    gsap.set([info, form], { opacity: 0 });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        gsap
          .timeline()
          .to(title, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' })
          .fromTo(
            info,
            { x: -140, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.9, ease: 'power3.out' },
            '+=0.25'
          )
          .fromTo(
            form,
            { x: 140, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.9, ease: 'power3.out' },
            '+=0.1'
          );
      },
      { threshold: 0.3 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="flex min-h-screen items-center px-4 py-20 text-white md:px-8 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        <h2 ref={titleRef} className="mb-12 text-center text-4xl font-bold">
          {contactSection?.title ?? ''}
        </h2>

        <p className="sr-only">
          Contacter RAKOTOSON Johariniaina Michael, développeur fullstack web à
          Antananarivo, Madagascar. Disponible pour projets et collaborations.
        </p>

        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-3">
          <div ref={infoRef} className="lg:col-span-2">
            <ContactInfo
              contactMethods={contactSection?.contactMethods ?? []}
              socialTitle={contactSection?.socialTitle ?? ''}
              socialLink={socialLink}
            />
          </div>

          <div ref={formRef} className="lg:col-span-1">
            <ContactForm
              formTitle={contactSection?.formTitle ?? ''}
              submitLabel={contactSection?.submitLabel ?? ''}
              fields={contactSection?.formFields ?? []}
              messages={contactSection?.messages}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
