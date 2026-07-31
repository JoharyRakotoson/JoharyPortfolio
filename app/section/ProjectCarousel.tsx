'use client';

import ProjectCard from '../components/ProjectCard';
import { useProjectCarousel } from './useProjectCarousel';
import { PLACE_CARDS } from './projects.constants';
import type { ProjectItem } from '../data/index';

type ProjectCarouselProps = {
  projects: ProjectItem[];
  onSelect: (project: ProjectItem) => void;
};

export default function ProjectCarousel({ projects, onSelect }: ProjectCarouselProps) {
  const { stageRef, cardsRef } = useProjectCarousel(projects);

  return (
    <div ref={stageRef} style={{ position: 'relative', height: 700 }}>
      <div
        ref={cardsRef}
        style={{ position: 'absolute', left: '50%', bottom: '0', width: 0, height: 0 }}
      >
        {PLACE_CARDS &&
          projects.map((project, i) => (
            <div key={`${project.title}-${i}`} style={{ position: 'absolute', left: 0, top: 0 }}>
              <ProjectCard
                title={project.title}
                subtitle={project.subtitle}
                client={project.client}
                image={project.image}
                onClick={() => onSelect(project)}
              />
            </div>
          ))}
      </div>
    </div>
  );
}
