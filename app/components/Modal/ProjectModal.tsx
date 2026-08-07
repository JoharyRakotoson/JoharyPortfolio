'use client';

import { useEffect } from 'react';
import ModalHeader from './ModalHeader';
import ModalBody from './ModalBody';
import ModalMeta from './ModalMeta';
import Button from '../ui/Button';
import { projectLabel } from '../../lib/projectLabels';
import type { ProjectItem } from '../../data/index';

type ProjectModalProps = {
  project: ProjectItem | null;
  lang: string;
  onClose: () => void;
};

export default function ProjectModal({ project, lang, onClose }: ProjectModalProps) {
  useEffect(() => {
    document.body.style.overflow = project ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [project]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="animate-modal-fade fixed inset-0 z-[1500] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />

      <div className="animate-modal-pop relative flex max-h-[calc(100vh-2rem)] w-full max-w-6xl flex-col overflow-y-auto rounded-3xl border border-white/15 bg-[#171717] text-white shadow-[0_24px_60px_rgba(0,0,0,0.6)] md:flex-row md:overflow-hidden">
        <ModalHeader project={project} />

        {/* RIGHT CONTENT */}
        <div className="relative flex min-w-0 flex-1 flex-col md:overflow-hidden">
          <Button
            type="button"
            variant="icon"
            onClick={onClose}
            ariaLabel={projectLabel(lang, 'close')}
            className="absolute top-4 right-4 z-10"
          >
            ✕
          </Button>

          <div className="hidden pr-14 p-5 pb-2 md:block">
            <span className="mb-2 inline-block rounded-full bg-[#ef4444] px-3 py-0.5 text-[10px] font-semibold tracking-wider uppercase">
              {project.tag}
            </span>
            <h3 className="text-xl leading-snug font-bold lg:text-2xl">
              {project.title}
            </h3>
            <p className="mt-0.5 text-sm text-white/80">{project.subtitle}</p>
          </div>

          <ModalMeta project={project} lang={lang} />
          <ModalBody project={project} lang={lang} />
        </div>
      </div>
    </div>
  );
}
