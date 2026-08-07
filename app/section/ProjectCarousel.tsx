'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Button from '../components/ui/Button';
import ProjectCard from '../components/Project/ProjectCard';
import type { ProjectItem } from '../data/index';

type ProjectCarouselProps = {
  projects: ProjectItem[];
  onSelect: (project: ProjectItem) => void;
};

const SPACING = 270;
const SPIN_STEP = 60;
const SPIN_TOTAL = 1500;

export default function ProjectCarousel({ projects, onSelect }: ProjectCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [spinning, setSpinning] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const startedRef = useRef(false);
  const count = projects.length;

  const goTo = useCallback(
    (index: number) => {
      setActiveIndex(((index % count) + count) % count);
    },
    [count]
  );

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !startedRef.current) {
          startedRef.current = true;
          setSpinning(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!spinning) return;
    const id = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % count);
    }, SPIN_STEP);
    const stop = setTimeout(() => {
      clearInterval(id);
      setActiveIndex(0);
      setSpinning(false);
    }, SPIN_TOTAL);
    return () => {
      clearInterval(id);
      clearTimeout(stop);
    };
  }, [spinning, count]);

  return (
    <div ref={containerRef} className="relative mx-auto w-full max-w-5xl px-4">
      {/* STAGE */}
      <div
        className={`relative h-[460px] overflow-hidden transition-[filter] duration-300 ${
          spinning ? 'blur-sm' : ''
        }`}
      >
        {projects.map((project, i) => {
          const wrapped = ((i - activeIndex) % count + count) % count;
          const offset = wrapped > count / 2 ? wrapped - count : wrapped;
          const abs = Math.abs(offset);
          const isActive = abs === 0;

          const scale = 1 - abs * 0.16;
          const opacity = isActive ? 1 : abs <= 1 ? 0.55 : 0;
          const zIndex = count - abs;

          return (
            <div
              key={`${project.title}-${i}`}
              className={`absolute top-1/2 left-1/2 transition-all ${
                spinning ? 'duration-100' : 'duration-700'
              }`}
              style={{
                transform: `translate(-50%, -50%) translateX(${offset * SPACING}px) scale(${scale})`,
                opacity,
                zIndex,
                pointerEvents: isActive || abs === 1 ? 'auto' : 'none',
              }}
            >
              <ProjectCard
                title={project.title}
                subtitle={project.subtitle}
                client={project.client}
                image={project.image}
                onClick={() => (isActive ? onSelect(project) : goTo(i))}
              />
            </div>
          );
        })}
      </div>

      {/* ARROWS */}
      <Button
        type="button"
        variant="iconOutline"
        ariaLabel="Projet précédent"
        onClick={() => goTo(activeIndex - 1)}
        className="absolute top-1/2 left-0 -translate-y-1/2"
      >
        <ChevronLeft size={22} />
      </Button>
      <Button
        type="button"
        variant="iconOutline"
        ariaLabel="Projet suivant"
        onClick={() => goTo(activeIndex + 1)}
        className="absolute top-1/2 right-0 -translate-y-1/2"
      >
        <ChevronRight size={22} />
      </Button>
    </div>
  );
}
