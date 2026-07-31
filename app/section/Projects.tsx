'use client';

import { useContext, useMemo, useState } from 'react';

import ProjectCarousel from './ProjectCarousel';
import ProjectModal from '../components/ProjectModal';
import { LangContext } from '../layout';
import type { ProjectItem } from '../data/index';

export default function Projects() {
  const ctx = useContext(LangContext);
  const projects = useMemo(() => ctx?.data?.projects ?? [], [ctx]);
  const lang = ctx?.lang ?? 'fr';

  const [selected, setSelected] = useState<ProjectItem | null>(null);

  return (
    <section id="projects" style={{ padding: '2rem 1rem', overflow: 'hidden' }}>
      <h2 style={{ textAlign: 'center', fontSize: '2.2rem', marginBottom: '2rem' }}>
        {lang === 'fr' ? 'Projets réalisés' : 'Featured projects'}
      </h2>

      <ProjectCarousel projects={projects} onSelect={setSelected} />

      <ProjectModal project={selected} lang={lang} onClose={() => setSelected(null)} />
    </section>
  );
}
