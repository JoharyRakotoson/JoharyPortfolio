'use client';

import { useContext } from 'react';
import { LangContext } from '../layout';
import BlurText from '../components/effects/BlurText';
import FadeUp from '../components/effects/FadeUp';
import AnimatedTimelineLine from '../components/effects/AnimatedTimelineLine';

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
        <BlurText
          as="h2"
          text={lang === 'fr' ? 'Éducation' : 'Education'}
          className="mb-16 text-center text-4xl font-bold text-white"
          stepDuration={0.5}
        />

        {/* TIMELINE */}
        <div className="space-y-8">
          {educationData.map((item, index) => (
            <FadeUp
              as="div"
              key={index}
              delay={index * 0.12}
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
                  <AnimatedTimelineLine className="mt-2 hidden md:block" />
                )}
              </div>

              {/* CONTENT */}
              <div className="w-full pl-0 md:w-2/3 md:pl-6">
                <BlurText
                  as="h3"
                  text={item.title}
                  className="text-xl font-bold text-white"
                  stepDuration={0.6}
                />

                <BlurText
                  as="p"
                  text={item.description}
                  className="mt-1 text-red-400"
                  stepDuration={0.6}
                />

                <BlurText
                  as="p"
                  text={item.institution}
                  className="mt-2 text-sm text-gray-400 italic"
                  stepDuration={0.6}
                />
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
