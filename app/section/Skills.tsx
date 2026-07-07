/* eslint-disable */
'use client';

import Image from 'next/image';
import gsap from 'gsap';
import { useRef, useContext } from 'react';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Card from '../components/Card';
import { LangContext } from '../layout';

gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
  const scope = useRef<HTMLDivElement>(null);

  const ctx = useContext(LangContext);

  if (!ctx) return null;

  const { skills } = ctx.data;
  const { lang } = ctx;

  useGSAP(
    () => {
      gsap.fromTo(
        '.skill-card',
        {
          opacity: 0,
          y: 60,
          rotate: -180,
        },
        {
          opacity: 1,
          y: 0,
          rotate: 0,
          duration: 1.5,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: scope.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );

      const cards = gsap.utils.toArray<HTMLElement>('.skill-card');

      cards.forEach((card) => {
        const enter = () => {
          gsap.killTweensOf(card);

          gsap
            .timeline()
            .to(card, {
              rotation: 360,
              scale: 1.05,
              duration: 0.35,
              ease: 'power2.inOut',
            })
            .set(card, {
              rotation: 0,
              scale: 1,
            });
        };

        card.addEventListener('mouseenter', enter);
      });
    },
    { scope }
  );

  return (
    <section
      ref={scope}
      id="skills"
      aria-labelledby="skills-heading"
      style={{
        minHeight: '100vh',
        padding: '5rem 1rem 4rem',
        background: 'transparent',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      {/* TITLE */}
      <p
        style={{
          color: '#f87171',
          textTransform: 'uppercase',
          letterSpacing: '0.3em',
          fontSize: '0.8rem',
          marginBottom: '0.75rem',
          textAlign: 'center',
        }}
      >
        {lang === 'fr' ? 'Compétences' : 'Skills'}
      </p>

      <h2
        id="skills-heading"
        style={{
          fontSize: '2.2rem',
          fontWeight: 700,
          marginBottom: '1.5rem',
          textAlign: 'center',
        }}
      >
        {lang === 'fr' ? 'Technologies maîtrisées' : 'Technologies I work with'}
      </h2>

      {/* GRID */}
      <div className="mx-auto grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((stack) => (
          <Card
            key={stack.name}
            className="skill-card text-center"
            title={stack.name}
            image={
              <div className="mx-auto h-14 w-14 rounded-2xl bg-transparent p-3">
                <Image
                  src={stack.image}
                  alt={`${stack.name} logo`}
                  width={60}
                  height={60}
                  style={{ objectFit: 'contain' }}
                />
              </div>
            }
          />
        ))}
      </div>
    </section>
  );
}
