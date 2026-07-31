'use client';

import gsap from 'gsap';
import { useRef, useContext } from 'react';
import { useGSAP } from '@gsap/react';
import Image from 'next/image';
import Button from '../components/Button';
import Antigravity from '../components/effects/Antigravity';
import SkillsMarquee from '../components/SkillsMarquee';
import { LangContext } from '../layout';

const PARTICLE_CONFIG = {
  count: 100,
  magnetRadius: 5,
  ringRadius: 5,
  waveSpeed: 0.4,
  waveAmplitude: 1,
  particleSize: 1.5,
  lerpSpeed: 0.05,
  color: '#ef4444',
  autoAnimate: false,
  particleVariance: 1,
  rotationSpeed: 0.7,
  depthFactor: 1,
  pulseSpeed: 3,
  particleShape: 'capsule',
  fieldStrength: 10,
} as const;

const Z_TITLE = 'z-10';
const Z_PORTRAIT = 'z-20';
const Z_INFO = 'z-30';
const Z_STACK = 'z-40';

export default function Home() {
  const scope = useRef<HTMLElement>(null);

  const ctx = useContext(LangContext);
  const home = ctx?.data.home;
  const skills = ctx?.data.skills ?? [];

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

  return (
    <section
      ref={scope}
      id="home"
      className="relative flex h-screen items-center overflow-hidden px-4 sm:px-10 md:px-20"
    >
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <Antigravity {...PARTICLE_CONFIG} />
      </div>

      {/* TITLE */}
      <h1
        className={`pointer-events-none absolute -top-16 ${Z_TITLE} flex h-2/3 w-full flex-col justify-center gap-y-3 select-none sm:-top-20 sm:gap-y-4 md:-top-10 md:gap-y-6`}
      >
        <div className="flex w-full justify-center px-4">
          <span className="hero-item max-w-full text-center text-[6vw] leading-tight text-white sm:text-[5vw] md:text-[5vw]">
            {home?.title ?? ''}
          </span>
        </div>

        <div className="flex w-full justify-center md:ml-60 md:justify-start">
          <span className="hero-item text-[3.5vw] font-light text-white/50 sm:text-[2vw]">
            {home?.name ?? ''}
          </span>
        </div>
      </h1>

      <div className={`hero-image absolute top-[45%] left-1/2 ${Z_PORTRAIT} -translate-x-1/2 -translate-y-1/2 sm:top-1/2`}>
        <div className="w-40 sm:w-52 md:w-80 lg:w-[520px]">
          <Image
            src="/images/johary3.webp"
            alt="profile"
            width={520}
            height={520}
            className="hero-portrait-mask object-contain"
          />
        </div>
      </div>

      {/* INFO */}
      <div className={`absolute bottom-16 left-0 ${Z_INFO} flex w-full flex-col items-center justify-between gap-6 px-4 py-6 sm:px-10 md:bottom-20 md:flex-row md:gap-0`}>
        {/* DESCRIPTION */}
        <div className="flex flex-col text-center md:text-left">
          <p className="hero-item max-w-sm text-sm opacity-70 sm:text-lg md:max-w-md">
            {home?.description ?? ''}
          </p>
        </div>

        {/* BUTTONS */}
        <div className="flex w-full flex-col items-center gap-3 sm:flex-row md:w-auto md:gap-4">
          <a href="/cv.pdf" download>
            <Button variant="primary">{home?.cvLabel ?? ''}</Button>
          </a>

          <Button href="#projects" variant="secondary">
            {home?.projectsLabel ?? ''}
          </Button>
        </div>
      </div>

      {/* STACK */}
      <div className={`absolute bottom-0 left-0 ${Z_STACK} w-full`}>
        <SkillsMarquee skills={skills} />
      </div>
    </section>
  );
}
