'use client';

import { Mail, Phone, MapPin } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import Button from './Button';
import ContactItem from './ContactItem';
import Eyebrow from './Eyebrow';

const CONTACT_ICONS: Record<string, LucideIcon> = {
  email: Mail,
  phone: Phone,
  location: MapPin,
};

type ContactMethod = {
  icon: string;
  label: string;
  value: string;
  hint: string;
};

type ContactInfoProps = {
  contactMethods: ContactMethod[];
  socialTitle: string;
  socialLink: { name: string; url: string; icon: string }[];
};

export default function ContactInfo({ contactMethods, socialTitle, socialLink }: ContactInfoProps) {
  return (
    <div className="lg:col-span-2">
      <div className="overflow-hidden rounded-3xl p-4 shadow-2xl shadow-gray-300/10 sm:p-6 lg:p-10">
        <div className="space-y-6">
          {contactMethods.map((method) => (
            <ContactItem
              key={method.label}
              icon={CONTACT_ICONS[method.icon] ?? Mail}
              label={method.label}
              value={method.value}
              hint={method.hint}
            />
          ))}
        </div>

        {/* SOCIAL */}
        <div className="mt-10 border-t border-gray-800 pt-8">
          <Eyebrow className="mb-4">{socialTitle}</Eyebrow>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {socialLink.map((item) => (
              <Button
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                variant="social"
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-md bg-red-500 text-xs font-bold text-white">
                  {item.icon}
                </span>

                <span className="text-sm font-semibold">{item.name}</span>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
