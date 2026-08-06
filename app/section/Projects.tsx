'use client';

import { useContext, useMemo, useState } from 'react';

import ProjectCarousel from './ProjectCarousel';
import ProjectModal from '../components/ProjectModal';
import { LangContext } from '../AppShell';
import type { ProjectItem } from '../data/index';

export default function Projects() {
  const ctx = useContext(LangContext);
  const projects = useMemo(() => ctx?.data?.projects ?? [], [ctx]);
  const lang = ctx?.lang ?? 'fr';

  const [selected, setSelected] = useState<ProjectItem | null>(null);

  return (
    <section id="projects" style={{ padding: '2rem 1rem 5rem', overflow: 'hidden' }}>
      <h2 style={{ textAlign: 'center', fontSize: '2.2rem', marginBottom: '2rem' }}>
        {lang === 'fr' ? 'Projets réalisés' : 'Featured projects'}
      </h2>

      <p className="sr-only">
        Projets web de RAKOTOSON Johariniaina Michael : applications web
        fullstack développées pour l&apos;IT University, le MEF, Tag-lp, BioTrans et
        BioCanada (gestion universitaire, e-commerce Shopify, génération
        d&apos;interfaces Angular par IA).
      </p>

      <ProjectCarousel projects={projects} onSelect={setSelected} />

      <ProjectModal project={selected} lang={lang} onClose={() => setSelected(null)} />
    </section>
  );
}
