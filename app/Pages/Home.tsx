/* eslint-disable */
'use client';

import gsap from 'gsap';
import { useEffect, useRef, useContext } from 'react';
import { useGSAP } from '@gsap/react';
import Button from '../components/Button';
import Antigravity from '../components/effects/Antigravity';
import { LangContext } from '../layout';

export default function Home() {
  const scope = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const ctx = useContext(LangContext);

  if (!ctx) return null;

  const { skills } = ctx.data;
  const { lang } = ctx;

  useGSAP(
    () => {
      const tl = gsap.timeline();

      tl.from('.hero-item', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
      });

      tl.from(
        '.hero-image',
        {
          x: 80,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
        },
        '-=0.5'
      );
    },
    { scope }
  );

  useEffect(() => {
    const track = trackRef.current;

    if (!track) return;

    const totalWidth = track.scrollWidth / 2;

    const tween = gsap.to(track, {
      x: -totalWidth,
      duration: 30,
      ease: 'none',
      repeat: -1,
    });

    return () => {
      tween.kill();
    };
  }, []);

  return (
    <section
      ref={scope}
      id="home"
      className="relative flex h-screen items-center overflow-hidden px-4 sm:px-10 md:px-20"
    >
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <Antigravity
          count={100}
          magnetRadius={5}
          ringRadius={5}
          waveSpeed={0.4}
          waveAmplitude={1}
          particleSize={1.5}
          lerpSpeed={0.05}
          color="#ef4444"
          autoAnimate={false}
          particleVariance={1}
          rotationSpeed={0.7}
          depthFactor={1}
          pulseSpeed={3}
          particleShape="capsule"
          fieldStrength={10}
        />
      </div>

      {/* TITLE */}
      <h1 className="pointer-events-none absolute -top-16 z-[10] flex h-2/3 w-full flex-col justify-center gap-y-3 select-none sm:-top-20 sm:gap-y-4 md:-top-10 md:gap-y-6">
        <div className="flex w-full justify-center px-4">
          <span className="hero-item max-w-full text-center text-[6vw] leading-tight text-white sm:text-[5vw] md:text-[5vw]">
            {lang === 'fr' ? 'DÉVELOPPEUR FULLSTACK' : 'FULLSTACK DEVELOPER'}
          </span>
        </div>

        <div className="flex w-full justify-center md:ml-60 md:justify-start">
          <span className="hero-item text-[3.5vw] font-light text-white/50 sm:text-[2vw]">
            MICHAEL RAKOTOSON
          </span>
        </div>
      </h1>

      <div className="hero-image absolute top-[45%] left-1/2 z-[20] -translate-x-1/2 -translate-y-1/2 sm:top-1/2">
        <div className="w-40 sm:w-52 md:w-80 lg:w-[520px]">
          <img
            src="/images/johary3.png"
            alt="profile"
            className="[mask-image:linear-gradient(to_bottom,black_40%,black_65%,transparent_100%),linear-gradient(to_left,black_0%,black_80%,transparent_100%)] [mask-composite:intersect] object-contain [-webkit-mask-composite:destination-in] [-webkit-mask-image:linear-gradient(to_bottom,black_40%,black_65%,transparent_100%),linear-gradient(to_left,black_0%,black_80%,transparent_100%)]"
          />
        </div>
      </div>

      {/* INFO */}
      <div className="absolute bottom-16 left-0 z-[30] flex w-full flex-col items-center justify-between gap-6 px-4 py-6 sm:px-10 md:bottom-20 md:flex-row md:gap-0">
        {/* DESCRIPTION */}
        <div className="flex flex-col text-center md:text-left">
          <p className="hero-item max-w-sm text-sm opacity-70 sm:text-lg md:max-w-md">
            {lang === 'fr'
              ? 'Je crée des applications web modernes et évolutives, pensées pour répondre aux besoins métier tout en offrant une expérience utilisateur fluide et une architecture solide.'
              : 'I build modern and scalable web applications designed to meet business needs while delivering smooth user experience and solid architecture.'}
          </p>
        </div>

        {/* BUTTONS */}
        <div className="flex w-full flex-col items-center gap-3 sm:flex-row md:w-auto md:gap-4">
          <a href="/cv.pdf" download>
            <Button variant="primary">{lang === 'fr' ? 'Télécharger CV' : 'Download CV'}</Button>
          </a>

          <Button href="#projects" variant="secondary">
            {lang === 'fr' ? 'Voir mes projets' : 'View my projects'}
          </Button>
        </div>
      </div>

      {/* STACK */}
      <div className="absolute bottom-0 left-0 z-[40] w-full">
        <div
          ref={trackRef}
          className="flex w-max items-center gap-10 bg-white/10 px-4 py-4 text-sm text-white backdrop-blur-md md:gap-40 md:px-15 md:text-xl"
        >
          {[...skills, ...skills].map((skill, i) => (
            <div key={`${skill.name}-${i}`} className="flex items-center gap-2 whitespace-nowrap">
              <img
                src={skill.image}
                alt={skill.name}
                className="h-6 w-6 object-contain brightness-0 invert md:h-8 md:w-8"
              />

              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
