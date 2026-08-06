import Image from 'next/image';

type ProjectCardProps = {
  title: string;
  subtitle: string;
  client: string;
  image: string;
  onClick?: () => void;
};

export default function ProjectCard({
  title,
  subtitle,
  client,
  image,
  onClick,
}: ProjectCardProps) {
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick?.();
        }
      }}
      className="cursor-pointer rounded-3xl bg-gradient-to-br from-[#ef4444] via-white/25 to-transparent p-[2px] shadow-[0_16px_36px_rgba(0,0,0,0.28)] transition-shadow duration-300 hover:shadow-[0_16px_36px_rgba(239,68,68,0.4)]">
      <div className="group relative h-[350px] w-[200px] flex-shrink-0 overflow-hidden rounded-[calc(1.5rem-2px)] bg-gray-900 text-white sm:h-[360px] sm:w-[210px] md:h-[400px] md:w-[230px]">
        {/* IMAGE */}
        <Image
          src={image}
          alt={`Aperçu du projet ${title}`}
          fill
          sizes="(max-width: 640px) 180px, (max-width: 768px) 210px, 230px"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/10 to-black/85" />

        {/* CLIENT */}
        <div className="absolute top-3 right-3 rounded-full border border-white/40 bg-black/40 px-3 py-1 text-[10px] text-white/90 backdrop-blur-sm sm:text-xs">
          {client}
        </div>

        {/* TITLE + SUBTITLE */}
        <div className="absolute inset-x-0 bottom-0 p-4">
          <span className="mb-2 block h-1 w-8 rounded-full bg-[#ef4444]" />
          <h3 className="text-base leading-snug font-bold break-words sm:text-lg md:text-xl">
            {title}
          </h3>
          <p className="mt-1 text-xs leading-snug break-words text-white/80 sm:text-sm">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
}
