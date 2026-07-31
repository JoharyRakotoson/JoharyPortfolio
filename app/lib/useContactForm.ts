'use client';

import { useCallback } from 'react';

export type ContactMessages = {
  validation: string;
  success: string;
  error: string;
  server: string;
};

export function useContactForm(messages: ContactMessages) {
  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const formElement = e.currentTarget;
      const form = new FormData(formElement);

      const data = {
        name: form.get('name')?.toString(),
        email: form.get('email')?.toString(),
        subject: form.get('subject')?.toString(),
        message: form.get('message')?.toString(),
      };

      if (!data.name || !data.email || !data.subject || !data.message) {
        alert(messages.validation);
        return;
      }

      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });

        const result = await response.json();

        if (response.ok && result.success) {
          alert(messages.success);
          formElement.reset();
        } else {
          console.error('Erreur API :', result);

          alert(result.message || messages.error);
        }
      } catch (error) {
        console.error('Erreur fetch :', error);

        alert(messages.server);
      }
    },
    [messages]
  );

  return { handleSubmit };
}
