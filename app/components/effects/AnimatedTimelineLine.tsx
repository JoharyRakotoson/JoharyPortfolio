'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface AnimatedTimelineLineProps {
  className?: string;
  color?: string;
  height?: string;
}

export default function AnimatedTimelineLine({
  className = '',
  color = '#ef4444',
  height = 'h-24',
}: AnimatedTimelineLineProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = lineRef.current;
    const glow = glowRef.current;
    const container = containerRef.current;
    if (!el || !glow || !container) return;

    const tl = gsap.timeline({ repeat: -1 });

    tl.to(glow, {
      keyframes: [
        { y: 0, opacity: 0.4, duration: 1.8, ease: 'sine.inOut' },
        { y: 40, opacity: 1, duration: 1.8, ease: 'sine.inOut' },
        { y: 0, opacity: 0.4, duration: 1.8, ease: 'sine.inOut' },
      ],
    });

    tl.to(
      el,
      {
        keyframes: [
          { opacity: 0.5, duration: 1.5, ease: 'sine.inOut' },
          { opacity: 1, duration: 1.5, ease: 'sine.inOut' },
          { opacity: 0.5, duration: 1.5, ease: 'sine.inOut' },
        ],
      },
      '<'
    );

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          tl.play();
        } else {
          tl.pause();
        }
      },
      { threshold: 0 }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
      tl.kill();
    };
  }, []);

  return (
    <div ref={containerRef} className={`relative ${height} w-1 ${className}`}>
      <div
        ref={lineRef}
        className="absolute inset-0 rounded-full"
        style={{
          background: `linear-gradient(to bottom, ${color}22, ${color}, ${color}22)`,
          boxShadow: `0 0 6px ${color}88, 0 0 14px ${color}44`,
        }}
      />
      <div
        ref={glowRef}
        className="absolute left-1/2 h-8 w-3 -translate-x-1/2 rounded-full blur-md"
        style={{
          background: `radial-gradient(ellipse at center, ${color}cc 0%, transparent 70%)`,
        }}
      />
    </div>
  );
}
