import React from 'react';

type CardProps = {
  title?: string;
  subtitle?: string;
  badge?: string;
  image?: React.ReactNode;
  href?: string;
  className?: string;
  children?: React.ReactNode;
};

export default function Card({
  title,
  subtitle,
  badge,
  image,
  href,
  className = '',
  children,
}: CardProps) {
  const content = (
    <div
      className={`group relative overflow-hidden rounded-3xl bg-neutral-950/60 p-6 text-white shadow-[0_20px_60px_rgba(0,0,0,0.25)] transition hover:-translate-y-1 hover:border-red-500/70 ${className}`}
    >
      {image && <div className="mb-4">{image}</div>}
      {badge && (
        <span className="inline-flex rounded-full border border-red-500/40 bg-red-500/10 px-3 py-1 text-xs tracking-[0.24em] text-red-300 uppercase">
          {badge}
        </span>
      )}
      {title && <h3 className="mt-4 text-xl font-semibold text-white">{title}</h3>}
      {subtitle && <p className="mt-2 text-sm text-gray-400">{subtitle}</p>}
      {children && <div className="mt-4 text-gray-300">{children}</div>}
    </div>
  );

  if (href) {
    return (
      <a href={href} className="block">
        {content}
      </a>
    );
  }

  return content;
}
