'use client';

import Image from 'next/image';
import type { ProjectItem } from '../../data/index';

export default function ModalHeader({ project }: { project: ProjectItem }) {
  return (
    <div className="relative h-40 flex-shrink-0 sm:h-48 md:h-auto md:w-[40%] lg:w-[38%]">
      <Image
        src={project.image}
        alt={project.title}
        fill
        sizes="(max-width: 768px) 100vw, 40vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent md:bg-gradient-to-r md:from-transparent md:via-black/20 md:to-black/60" />

      <div className="absolute inset-x-0 bottom-0 p-5 md:hidden">
        <span className="mb-2 inline-block rounded-full bg-[#ef4444] px-3 py-1 text-[10px] font-semibold tracking-wider uppercase">
          {project.tag}
        </span>
        <h3 className="text-lg leading-snug font-bold">{project.title}</h3>
        <p className="mt-0.5 text-xs text-white/80">{project.subtitle}</p>
      </div>
    </div>
  );
}
