'use client';

import { LucideIcon } from 'lucide-react';
import clsx from 'clsx';

interface IconProps {
  icon: LucideIcon;
  variant?: 'contact' | 'social' | 'default';
  size?: number;
  className?: string;
}

export default function Icon({
  icon: IconComponent,
  variant = 'default',
  size,
  className,
}: IconProps) {
  const variants = {
    default: {
      container: '',
      icon: 'text-white',
      size: size ?? 24,
    },

    contact: {
      container:
        'min-w-[3rem] h-12 rounded-2xl bg-red-500 grid place-items-center',
      icon: 'text-white',
      size: size ?? 24,
    },

    social: {
      container:
        'flex items-center justify-center w-10 h-10 rounded-xl transition-colors duration-300',
      icon: 'text-white',
      size: size ?? 20,
    },
  };

  const current = variants[variant];

  return (
    <div className={clsx(current.container, className)}>
      <IconComponent
        size={current.size}
        strokeWidth={2.2}
        className={current.icon}
      />
    </div>
  );
}