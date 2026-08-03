'use client';

import { createElement, useEffect, useRef } from 'react';
import type { DetailedHTMLProps, HTMLAttributes, JSX, ReactNode } from 'react';
import { gsap } from 'gsap';

interface FadeUpProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  duration?: number;
  once?: boolean;
  threshold?: number;
  as?: keyof JSX.IntrinsicElements;
}

export default function FadeUp({
  children,
  className = '',
  delay = 0,
  y = 28,
  duration = 0.9,
  once = true,
  threshold = 0.15,
  as = 'div',
}: FadeUpProps) {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    gsap.set(el, { opacity: 0, y });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          if (!once) gsap.set(el, { opacity: 0, y });
          return;
        }

        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration,
          delay,
          ease: 'power3.out',
          clearProps: 'transform',
        });
        observer.unobserve(entry.target);
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, y, duration, once, threshold]);

  const props = {
    ref: containerRef,
    className,
  } as DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;

  /* eslint-disable react-hooks/refs */
  return createElement(as, props, children);
  /* eslint-enable react-hooks/refs */
}
