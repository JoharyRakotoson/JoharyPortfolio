'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';
import type { SkillItem } from '../data/index';

export default function SkillsMarquee({ skills }: { skills: SkillItem[] }) {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const tween = gsap.to(track, {
      xPercent: -50,
      duration: 30,
      ease: 'none',
      repeat: -1,
    });

    return () => {
      tween.kill();
    };
  }, []);

  return (
    <div
      ref={trackRef}
      className="flex w-max items-center gap-10 bg-white/10 px-4 py-4 text-sm text-white backdrop-blur-md md:gap-40 md:px-15 md:text-xl"
    >
      {[...skills, ...skills].map((skill, i) => (
        <div key={`${skill.name}-${i}`} className="flex items-center gap-2 whitespace-nowrap">
          <Image
            src={skill.image}
            alt={`${skill.name} logo`}
            width={32}
            height={32}
            className="h-6 w-6 object-contain brightness-0 invert md:h-8 md:w-8"
          />
          <span>{skill.name}</span>
        </div>
      ))}
    </div>
  );
}
