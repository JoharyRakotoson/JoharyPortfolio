'use client';

import Section from './Section';
import List from './List';
import { projectLabel } from '../../lib/projectLabels';
import type { ProjectItem } from '../../data/index';

export default function ModalBody({
  project,
  lang,
}: {
  project: ProjectItem;
  lang: string;
}) {
  return (
    <div className="flex-1 overflow-hidden p-5">
      <p className="text-sm leading-relaxed text-white/80">{project.description}</p>

      <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
        <Section title={projectLabel(lang, 'objectives')}>
          <List items={project.objectives} />
        </Section>

        <Section title={projectLabel(lang, 'technologies')}>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, i) => (
              <span
                key={i}
                className="rounded-full bg-[#ef4444]/15 px-3 py-1 text-xs font-medium text-[#ef4444]"
              >
                {tech}
              </span>
            ))}
          </div>
        </Section>

        <Section title={projectLabel(lang, 'features')}>
          <List items={project.features} />
        </Section>

        <Section title={projectLabel(lang, 'challenges')}>
          <List items={project.challenges} />
        </Section>

        <Section title={projectLabel(lang, 'results')}>
          <List items={project.results} />
        </Section>
      </div>
    </div>
  );
}
