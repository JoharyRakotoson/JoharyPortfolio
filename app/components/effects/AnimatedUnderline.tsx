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

    let entrance: gsap.core.Timeline | null = null;
    let waveTween: gsap.core.Tween | null = null;
    let glowTween: gsap.core.Tween | null = null;
    let wavesStarted = false;

    const startWaves = () => {
      waveTween = gsap.to(
        el,
        {
          keyframes: [
            { scaleX: 1.1, xPercent: -6, duration: waveSpeed, ease: 'sine.inOut' },
            { scaleX: 0.95, xPercent: 2, duration: waveSpeed * 0.5, ease: 'sine.inOut' },
            { scaleX: 1.1, xPercent: 6, duration: waveSpeed, ease: 'sine.inOut' },
            { scaleX: 0.95, xPercent: -2, duration: waveSpeed * 0.5, ease: 'sine.inOut' },
          ],
          repeat: -1,
          paused: true,
        }
      );
      glowTween = gsap.to(
        glow,
        {
          keyframes: [
            { opacity: 0.5, duration: waveSpeed, ease: 'sine.inOut' },
            { opacity: 1, duration: waveSpeed, ease: 'sine.inOut' },
            { opacity: 0.5, duration: waveSpeed, ease: 'sine.inOut' },
            { opacity: 1, duration: waveSpeed, ease: 'sine.inOut' },
          ],
          repeat: -1,
          paused: true,
        }
      );
      wavesStarted = true;
      waveTween.play();
      glowTween.play();
    };

    const startEntrance = () => {
      entrance = gsap.timeline({ delay });
      entrance.to(el, {
        scaleX: 1,
        duration,
        ease: 'power3.inOut',
      });
      entrance.to(glow, { opacity: 1, duration: 0.6, ease: 'power2.out' }, '-=0.4');
      entrance.eventCallback('onComplete', startWaves);
      entrance.play();
    };

    const play = () => {
      if (!entrance && !wavesStarted) {
        startEntrance();
      } else if (wavesStarted) {
        waveTween?.play();
        glowTween?.play();
      } else {
        entrance?.play();
      }
    };

    const pause = () => {
      if (once) {
        entrance?.pause();
        waveTween?.pause();
        glowTween?.pause();
      } else {
        gsap.set(el, { scaleX: 0 });
        gsap.set(glow, { opacity: 0 });
        entrance?.kill();
        waveTween?.kill();
        glowTween?.kill();
        entrance = null;
        waveTween = null;
        glowTween = null;
        wavesStarted = false;
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          play();
        } else {
          pause();
        }
      },
      { threshold }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      entrance?.kill();
      waveTween?.kill();
      glowTween?.kill();
    };
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
