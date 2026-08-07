'use client';

import React from 'react';

type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'ghost'
  | 'outline'
  | 'social'
  | 'icon'
  | 'iconOutline'
  | 'socialIcon'
  | 'lang'
  | 'menu'
  | 'link';

type ButtonProps = {
  children: React.ReactNode;
  variant?: ButtonVariant;
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
  target?: string;
  rel?: string;
  ariaLabel?: string;
  download?: boolean;
};

const baseClasses = 'transition duration-200';

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'inline-flex items-center justify-center rounded-xl px-6 py-3 text-base font-semibold bg-red-500 text-white border border-red-500 hover:bg-red-600',
  secondary:
    'inline-flex items-center justify-center rounded-xl px-6 py-3 text-base font-semibold border border-white/20 bg-transparent text-white hover:border-red-500 hover:text-red-300',
  ghost:
    'inline-flex items-center justify-center rounded-xl px-6 py-3 text-base font-semibold bg-white/10 text-white hover:bg-white/20 border border-white/10',
  outline:
    'inline-flex items-center justify-center rounded-xl px-6 py-3 text-base font-semibold border border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.05)] backdrop-blur-md bg-black-500/80 text-white hover:border-red-500',
  social:
    'w-full flex items-center justify-start gap-3 px-4 py-3 rounded-xl font-semibold border border-gray-800 bg-gray-900/90 text-white hover:border-red-500 hover:bg-gray-800/60 hover:text-red-300 transition-all duration-200',
  icon: 'inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-sm hover:bg-[#ef4444]',
  iconOutline:
    'inline-flex items-center justify-center rounded-full border border-white/15 bg-black/40 p-3 text-white/80 backdrop-blur-sm hover:border-[#ef4444]/60 hover:text-white',
  socialIcon:
    'inline-flex h-8 w-8 items-center justify-center rounded-md bg-red-500 text-xs font-bold text-white hover:bg-red-600',
  lang: 'text-xs font-medium hover:text-gray-300',
  menu: 'flex h-8 w-8 items-center justify-center',
  link: 'text-gray-400 hover:text-red-400',
};

export default function Button({
  children,
  variant = 'primary',
  href,
  type = 'button',
  className = '',
  onClick,
  target,
  rel,
  ariaLabel,
  download,
}: ButtonProps) {
  const sharedClasses = `${baseClasses} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={sharedClasses}
        target={target}
        rel={rel}
        aria-label={ariaLabel}
        download={download}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={sharedClasses} onClick={onClick} aria-label={ariaLabel}>
      {children}
    </button>
  );
}
