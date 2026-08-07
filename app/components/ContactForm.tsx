'use client';

import Button from './Button';
import FormField from './FormField';
import { useContactForm, type ContactMessages } from '../lib/useContactForm';

type ContactFormProps = {
  formTitle: string;
  submitLabel: string;
  fields: {
    label: string;
    name: string;
    type: 'text' | 'email' | 'textarea';
    placeholder: string;
    rows?: number;
  }[];
  messages: ContactMessages | undefined;
};

const FALLBACK_MESSAGES: ContactMessages = {
  validation: '',
  success: '',
  error: '',
  server: '',
};

export default function ContactForm({ formTitle, submitLabel, fields, messages }: ContactFormProps) {
  const { handleSubmit } = useContactForm(messages ?? FALLBACK_MESSAGES);

  return (
    <div className="flex justify-center">
      <div className="flex w-full max-w-xl flex-col items-center rounded-3xl border border-gray-800/60 bg-transparent p-10">
        <h3 className="mb-8 w-full text-3xl font-semibold">{formTitle}</h3>

        <form onSubmit={handleSubmit} className="w-full space-y-6">
          {fields.map((field) => (
            <FormField key={field.name} {...field} />
          ))}

          <Button type="submit" variant="primary" className="w-full">
            {submitLabel}
          </Button>
        </form>
      </div>
    </div>
  );
}
