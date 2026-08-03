'use client';

import { useCallback, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProjectCard from '../components/ProjectCard';
import type { ProjectItem } from '../data/index';

type ProjectCarouselProps = {
  projects: ProjectItem[];
  onSelect: (project: ProjectItem) => void;
};

const SPACING = 270;
const AUTO_DURATION = 3500;

export default function ProjectCarousel({ projects, onSelect }: ProjectCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = projects.length;

  const goTo = useCallback(
    (index: number) => {
      setActiveIndex(((index % count) + count) % count);
    },
    [count]
  );

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % count);
    }, AUTO_DURATION);
    return () => clearInterval(id);
  }, [paused, count]);

  return (
    <div
      className="relative mx-auto w-full max-w-5xl px-4"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* STAGE */}
      <div className="relative h-[460px] overflow-hidden">
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
              className="absolute top-1/2 left-1/2 transition-all duration-700"
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
      <button
        type="button"
        aria-label="Projet précédent"
        onClick={() => goTo(activeIndex - 1)}
        className="absolute top-1/2 left-0 -translate-y-1/2 rounded-full border border-white/15 bg-black/40 p-3 text-white/80 backdrop-blur-sm transition-colors hover:border-[#ef4444]/60 hover:text-white"
      >
        <ChevronLeft size={22} />
      </button>
      <button
        type="button"
        aria-label="Projet suivant"
        onClick={() => goTo(activeIndex + 1)}
        className="absolute top-1/2 right-0 -translate-y-1/2 rounded-full border border-white/15 bg-black/40 p-3 text-white/80 backdrop-blur-sm transition-colors hover:border-[#ef4444]/60 hover:text-white"
      >
        <ChevronRight size={22} />
      </button>
    </div>
  );
}
