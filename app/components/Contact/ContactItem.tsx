'use client';

import Icon from '../ui/Icon';
import Eyebrow from '../ui/Eyebrow';
import type { LucideIcon } from 'lucide-react';

type ContactItemProps = {
  icon: LucideIcon;
  label: string;
  value: string;
  hint: string;
};

export default function ContactItem({ icon, label, value, hint }: ContactItemProps) {
  return (
    <div className="flex min-w-0 items-start gap-3 rounded-3xl p-4 shadow-sm shadow-gray-800/30 sm:gap-5 sm:p-6">
      <Icon icon={icon} variant="contact" />

      <div className="min-w-0">
        <Eyebrow>{label}</Eyebrow>
        <p className="mt-2 text-base font-semibold break-all text-white sm:text-lg">
          {value}
        </p>
        <p className="text-sm text-gray-400">{hint}</p>
      </div>
    </div>
  );
}
