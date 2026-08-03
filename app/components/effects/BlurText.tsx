'use client';

import { createElement, useEffect, useRef, useState } from 'react';
import type { DetailedHTMLProps, HTMLAttributes, JSX } from 'react';
import { gsap } from 'gsap';

interface BlurTextProps {
  text?: string;
  className?: string;
  animateBy?: 'words' | 'chars';
  direction?: 'top' | 'bottom';
  threshold?: number;
  rootMargin?: string;
  delay?: number;
  stepDuration?: number;
  as?: keyof JSX.IntrinsicElements;
}

export default function BlurText({
  text = '',
  className = '',
  animateBy = 'words',
  direction = 'top',
  threshold = 0.1,
  rootMargin = '0px',
  delay = 0.05,
  stepDuration = 0.45,
  as = 'span',
}: BlurTextProps) {
  const containerRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  const elements = animateBy === 'words' ? text.split(' ') : text.split('');

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || !inView) return;

    const targets = el.querySelectorAll<HTMLElement>('.blur-text-part');
    const offset = direction === 'top' ? -24 : 24;

    const tl = gsap.timeline();
    tl.fromTo(
      targets,
      { opacity: 0, y: offset, filter: 'blur(10px)' },
      {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        duration: stepDuration,
        ease: 'power3.out',
        stagger: delay,
        clearProps: 'filter,transform',
      }
    );

    return () => {
      tl.kill();
    };
  }, [inView, direction, delay, stepDuration]);

  const props = {
    ref: containerRef,
    className,
  } as DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;

  /* eslint-disable react-hooks/refs */
  return createElement(
    as,
    props,
    elements.map((segment, index) => (
      <span
        key={index}
        className="blur-text-part inline-block will-change-[transform,filter,opacity]"
        style={{ opacity: 0 }}
      >
        {segment === ' ' ? '\u00A0' : segment}
        {animateBy === 'words' && index < elements.length - 1 && '\u00A0'}
      </span>
    ))
  );
  /* eslint-enable react-hooks/refs */
}
