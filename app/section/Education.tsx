'use client';

import { useContext } from 'react';
import { LangContext } from '../layout';

export default function Education() {
  const ctx = useContext(LangContext);

  if (!ctx) return null;

  const { educationData } = ctx.data;
  const { lang } = ctx;

  return (
    <section
      id="education"
      className="flex min-h-screen items-center justify-center px-4 py-20 md:px-8 lg:px-16"
    >
      <div className="w-full max-w-4xl">
        {/* TITLE */}
        <h2 className="mb-16 text-center text-4xl font-bold text-white">
          {lang === 'fr' ? 'Éducation' : 'Education'}
        </h2>

        {/* TIMELINE */}
        <div className="space-y-8">
          {educationData.map((item, index) => (
            <div
              key={index}
              className="relative flex flex-col gap-4 md:flex-row md:items-start md:gap-8"
            >
              {/* DATE */}
              <div className="w-full text-left md:w-1/3 md:pr-6 md:text-right">
                <time className="text-sm font-bold tracking-wide text-red-500 uppercase">
                  {item.date}
                </time>
              </div>

              {/* TIMELINE DOT */}
              <div className="flex items-center md:flex-col md:items-center">
                <div className="z-10 h-4 w-4 shrink-0 rounded-full border-4 border-gray-900 bg-red-500 shadow-lg"></div>

                {index !== educationData.length - 1 && (
                  <div className="mt-2 hidden h-24 w-1 bg-gradient-to-b from-red-500 to-red-600 md:block" />
                )}
              </div>

              {/* CONTENT */}
              <div className="w-full pl-0 md:w-2/3 md:pl-6">
                <h3 className="text-xl font-bold text-white">{item.title}</h3>

                <p className="mt-1 text-red-400">{item.description}</p>

                <p className="mt-2 text-sm text-gray-400 italic">{item.institution}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
