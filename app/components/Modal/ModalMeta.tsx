'use client';

import { projectLabel } from '../../lib/projectLabels';
import type { ProjectItem } from '../../data/index';

const META_KEYS = ['date', 'client', 'role', 'duration'] as const;

export default function ModalMeta({
  project,
  lang,
}: {
  project: ProjectItem;
  lang: string;
}) {
  return (
    <div className="flex flex-wrap gap-2 border-y border-white/10 px-5 py-3">
      {META_KEYS.map((key) => (
        <span
          key={key}
          className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/90"
        >
          <span className="font-semibold text-white">
            {projectLabel(lang, key)} :
          </span>{' '}
          {project[key]}
        </span>
      ))}
    </div>
  );
}
