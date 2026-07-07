/* eslint-disable */
'use client';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef, useContext } from 'react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { LangContext } from '../layout';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const scope = useRef<HTMLDivElement>(null);

  const ctx = useContext(LangContext);

  if (!ctx) return null;

  const { aboutParagraphs, qualities } = ctx.data;

  useGSAP(
    () => {
      gsap.from('.about-item', {
        y: -60,
        opacity: 0,
        duration: 0.9,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: scope.current,
          start: 'top 80%',
        },
      });
    },
    { scope }
  );

  return (
    <section
      ref={scope}
      id="about"
      className="about"
      aria-labelledby="about-heading"
      style={{
        minHeight: '100vh',
        padding: '5rem 1rem 4rem',
        background: 'transparent',
        color: '#f8fafc',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div className="flex w-full flex-col items-center text-center">
          <p
            className="about-item"
            style={{
              color: '#f87171',
              textTransform: 'uppercase',
              letterSpacing: '0.3em',
              fontSize: '0.8rem',
              marginBottom: '0.75rem',
            }}
          >
            {ctx.lang === 'fr' ? 'À propos' : 'About'}
          </p>

          <h2
            className="about-item"
            id="about-heading"
            style={{
              fontSize: '2.2rem',
              fontWeight: 700,
              marginBottom: '1rem',
              maxWidth: '800px',
            }}
          >
            {ctx.lang === 'fr'
              ? 'Développeur web orienté produit et expérience'
              : 'Product-oriented web developer focused on user experience'}
          </h2>
        </div>

        <div className="mt-8 grid grid-cols-1 items-start gap-10 md:grid-cols-2">
          {/* LEFT */}
          <div className="flex justify-center md:justify-start">
            <p className="about-item max-w-xl text-center text-[1.05rem] leading-8 text-slate-300 md:text-left">
              {aboutParagraphs.map((text, i) => (
                <span key={i}>
                  {text}
                  {i !== aboutParagraphs.length - 1 && (
                    <>
                      <br />
                      <br />
                    </>
                  )}
                </span>
              ))}
            </p>
          </div>

          {/* RIGHT */}
          <div className="grid gap-4">
            {qualities.map((quality, i) => (
              <div
                key={i}
                className="about-item"
                style={{
                  color: '#ffffff',
                  background: 'rgba(10, 10, 10, 0.6)',
                  border: '1px solid rgba(248, 113, 113, 0.35)',
                  padding: '0.95rem 1rem',
                  borderRadius: 14,
                }}
              >
                {quality}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
