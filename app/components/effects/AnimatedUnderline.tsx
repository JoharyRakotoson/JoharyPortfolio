'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface AnimatedUnderlineProps {
  className?: string;
  color?: string;
  thickness?: number;
  delay?: number;
  duration?: number;
  once?: boolean;
  threshold?: number;
  waveSpeed?: number;
}

export default function AnimatedUnderline({
  className = '',
  color = '#ef4444',
  thickness = 2,
  delay = 0,
  duration = 1.2,
  once = true,
  threshold = 0.15,
  waveSpeed = 1.2,
}: AnimatedUnderlineProps) {
  const lineRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = lineRef.current;
    const glow = glowRef.current;
    if (!el || !glow) return;

    gsap.set(el, { scaleX: 0 });
    gsap.set(glow, { opacity: 0 });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          if (!once) {
            gsap.set(el, { scaleX: 0 });
            gsap.set(glow, { opacity: 0 });
          }
          return;
        }

        const tl = gsap.timeline({ delay });

        tl.to(el, {
          scaleX: 1,
          duration,
          ease: 'power3.inOut',
        });

        tl.to(glow, { opacity: 1, duration: 0.6, ease: 'power2.out' }, '-=0.4');

        tl.to(
          el,
          {
            keyframes: [
              { scaleX: 1.1, xPercent: -6, duration: waveSpeed, ease: 'sine.inOut' },
              { scaleX: 0.95, xPercent: 2, duration: waveSpeed * 0.5, ease: 'sine.inOut' },
              { scaleX: 1.1, xPercent: 6, duration: waveSpeed, ease: 'sine.inOut' },
              { scaleX: 0.95, xPercent: -2, duration: waveSpeed * 0.5, ease: 'sine.inOut' },
            ],
            repeat: -1,
          },
          '-=0.2'
        );

        tl.to(
          glow,
          {
            keyframes: [
              { opacity: 0.5, duration: waveSpeed, ease: 'sine.inOut' },
              { opacity: 1, duration: waveSpeed, ease: 'sine.inOut' },
              { opacity: 0.5, duration: waveSpeed, ease: 'sine.inOut' },
              { opacity: 1, duration: waveSpeed, ease: 'sine.inOut' },
            ],
            repeat: -1,
          },
          '<'
        );

        observer.unobserve(entry.target);
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, duration, once, threshold, waveSpeed]);

  return (
    <div className={`relative mt-6 flex w-full justify-center ${className}`}>
      <div
        ref={glowRef}
        className="absolute inset-x-0 top-1/2 h-3 -translate-y-1/2 rounded-full blur-md opacity-0"
        style={{ background: `radial-gradient(ellipse at center, ${color}88 0%, transparent 70%)` }}
      />
      <div
        ref={lineRef}
        className="h-px w-4/5 origin-center"
        style={{
          background: `linear-gradient(90deg, transparent 0%, ${color} 15%, ${color} 50%, ${color} 85%, transparent 100%)`,
          height: `${thickness}px`,
          boxShadow: `0 0 8px ${color}aa, 0 0 20px ${color}44`,
        }}
      />
    </div>
  );
}
