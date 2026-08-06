'use client';

import Image from 'next/image';
import gsap from 'gsap';
import { useRef, useContext } from 'react';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Card from '../components/Card';
import { LangContext } from '../AppShell';

gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
  const scope = useRef<HTMLElement>(null);

  const ctx = useContext(LangContext);
  const skills = ctx?.data.skills ?? [];
  const skillsSection = ctx?.data.skillsSection;

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
      className="flex min-h-screen flex-col justify-center px-4 pt-20 pb-16"
    >
      {/* TITLE */}
      <p className="mb-3 text-center text-[0.8rem] tracking-[0.3em] text-[#f87171] uppercase">
        {skillsSection?.eyebrow ?? ''}
      </p>

      <h2 id="skills-heading" className="mb-6 text-center text-[2.2rem] font-bold">
        {skillsSection?.title ?? ''}
      </h2>

      <p className="sr-only">
        Stack technique du développeur fullstack web RAKOTOSON Johariniaina
        Michael : React, Angular, Node.js, Spring, Tailwind CSS, PostgreSQL,
        MongoDB, MySQL, Phoenix.
      </p>

      {/* GRID */}
      <div className="mx-auto grid max-w-4xl grid-cols-2 gap-4 lg:grid-cols-4">
        {skills.map((stack) => (
          <Card
            key={stack.name}
            className="skill-card text-center"
            title={stack.name}
            image={
              <div className="mx-auto h-14 w-14 rounded-2xl p-3">
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
