'use client';

import { useEffect, useRef, type ReactNode } from 'react';
import { gsap } from 'gsap';

interface GlareSweepProps {
  children: ReactNode;
  className?: string;
  color?: string;
  bandWidth?: number;
  duration?: number;
}

export default function GlareSweep({
  children,
  className = '',
  color = 'rgba(255, 255, 255, 0.18)',
  bandWidth = 25,
  duration = 2.4,
}: GlareSweepProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const glare = glareRef.current;
    if (!container || !glare) return;

    const sweep = 10000 / bandWidth;

    let done = false;

    const tween = gsap.fromTo(
      glare,
      { xPercent: -sweep },
      {
        xPercent: sweep,
        duration,
        ease: 'sine.inOut',
        repeat: 1,
        yoyo: true,
        paused: true,
        onComplete: () => {
          done = true;
        },
      }
    );

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (done) {
            done = false;
            tween.restart();
          } else if (tween.paused()) {
            tween.play();
          }
        } else {
          tween.pause();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
      tween.kill();
    };
  }, [bandWidth, duration]);

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      <div
        ref={glareRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 -skew-x-12"
        style={{
          width: `${bandWidth}%`,
          background: `linear-gradient(105deg, transparent 0%, ${color} 50%, transparent 100%)`,
          willChange: 'transform',
        }}
      />
      <div className="relative">{children}</div>
    </div>
  );
}
