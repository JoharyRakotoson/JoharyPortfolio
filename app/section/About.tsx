/* eslint-disable */
'use client';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef, useContext } from 'react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { LangContext } from '../AppShell';
import VariableProximity from '../components/effects/VariableProximity';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const scope = useRef<HTMLDivElement>(null);
  const hoverRaf = useRef(0);

  const ctx = useContext(LangContext);

  if (!ctx) return null;

  const { aboutParagraphs, qualities } = ctx.data;

  const handleHoverMove = (e: React.MouseEvent<HTMLElement>) => {
    if (hoverRaf.current) return;
    const el = e.currentTarget;
    const clientX = e.clientX;
    const clientY = e.clientY;
    hoverRaf.current = requestAnimationFrame(() => {
      hoverRaf.current = 0;
      const rect = el.getBoundingClientRect();
      el.style.setProperty('--x', `${clientX - rect.left}px`);
      el.style.setProperty('--y', `${clientY - rect.top}px`);
    });
  };

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

      gsap.from('.about-proximity-line', {
        y: 24,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        clearProps: 'transform,opacity',
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
              ? 'Développeur Fullstack Web orienté produit et expérience'
              : 'Product-oriented web developer focused on user experience'}
          </h2>

          <p className="sr-only">
            RAKOTOSON Johariniaina Michael, développeur fullstack web,
            titulaire d'un Master MBDS de l'IT University. Création d'applications
            web modernes avec React, Angular, Node.js, Spring Boot, PostgreSQL
            et MongoDB.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 items-start gap-10 md:grid-cols-2">
          {/* LEFT */}
          <div className="flex justify-center md:justify-start">
            <div className="about-proximity-wrap" onMouseMove={handleHoverMove}>
              <VariableProximity
                className="max-w-xl text-center text-[1.05rem] leading-8 text-slate-300 md:text-left"
                lineClassName="about-proximity-line"
                label={aboutParagraphs.join('\n\n')}
                baseColor="#cbd5e1"
                activeColor="#ef4444"
              />
            </div>
          </div>

          {/* RIGHT */}
          <div className="grid gap-4">
            {qualities.map((quality, i) => (
              <div
                key={i}
                className="about-item quality-item"
                onMouseMove={handleHoverMove}
              >
                <span className="quality-text">{quality}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
