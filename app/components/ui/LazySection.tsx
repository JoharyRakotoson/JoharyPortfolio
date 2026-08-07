'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';

type LazySectionProps = {
  id: string;
  children: ReactNode;
  placeholderClassName?: string;
};

export default function LazySection({
  id,
  children,
  placeholderClassName = '',
}: LazySectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '600px 0px' }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className={placeholderClassName}>
      {inView ? (
        children
      ) : (
        <section id={id} aria-hidden="true" className="min-h-screen" />
      )}
    </div>
  );
}
