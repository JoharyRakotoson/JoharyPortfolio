type ProjectCardProps = {
  title: string;
  tag: string;
  description?: string;
  index: number;
  total: number;
};

export default function ProjectCard({ title, tag, description, index, total }: ProjectCardProps) {
  return (
    <div
      className="flex h-[320px] w-[180px] flex-shrink-0 flex-col justify-between overflow-hidden rounded-3xl border border-white/20 bg-gradient-to-br from-gray-900 to-red-500 p-4 text-white shadow-[0_16px_36px_rgba(0,0,0,0.28)] sm:h-[360px] sm:w-[210px] sm:p-5 md:h-[400px] md:w-[230px] md:p-6"
      style={{
        marginTop:
          index === 0 || index === total - 1
            ? '100px'
            : index === 1 || index === total - 2
              ? '60px'
              : '20px',

        transform: `rotate(${index < 2 ? -8 : index < 4 ? -3 : index < 6 ? 3 : 8}deg)`,

        transformOrigin: 'top center',
        zIndex: total - index,
      }}
    >
      {/* TAG */}
      <div className="text-xs tracking-[0.2em] opacity-80 sm:text-sm">{tag}</div>

      {/* CONTENT */}
      <div>
        <h3 className="text-base font-bold break-words sm:text-lg md:text-xl">{title}</h3>

        <p className="mt-2 text-xs leading-relaxed break-words opacity-90 sm:text-sm md:text-base">
          {description ?? 'Projet visible & moderne'}
        </p>
      </div>
    </div>
  );
}
