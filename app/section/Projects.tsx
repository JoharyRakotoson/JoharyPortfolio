/* eslint-disable react-hooks/rules-of-hooks */
'use client';

import { useEffect, useRef, useContext } from 'react';
import { gsap } from 'gsap';

import ProjectCard from '../components/ProjectCard';
import { LangContext } from '../layout';

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);

  const ctx = useContext(LangContext);

  if (!ctx) return null;

  const { projects } = ctx.data;
  const { lang } = ctx;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const move = () => {
      const cards = container.children;
      if (cards.length === 0) return;

      const first = cards[0] as HTMLElement;

      gsap.to(first, {
        x: -250,
        opacity: 0,
        duration: 1.2,
        ease: 'power2.inOut',
        onComplete: () => {
          gsap.set(first, { x: 0, opacity: 1 });

          container.appendChild(first);

          gsap.fromTo(
            first,
            {
              x: 80,
              opacity: 0,
              scale: 0.95,
            },
            {
              x: 0,
              opacity: 1,
              scale: 1,
              duration: 1.5,
              ease: 'power3.out',
            }
          );
        },
      });
    };

    const interval = setInterval(move, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="projects" style={{ padding: '2rem 1rem', overflow: 'hidden' }}>
      {/* TITLE */}
      <h2 style={{ textAlign: 'center', fontSize: '2.2rem' }}>
        {lang === 'fr' ? 'Projets réalisés' : 'Featured projects'}
      </h2>

      {/* CAROUSEL */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          overflow: 'visible',
          minHeight: '440px',
        }}
      >
        <div
          ref={containerRef}
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
          }}
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              tag={project.tag}
              description={project.description}
              index={0}
              total={projects.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
