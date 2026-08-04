'use client';

import { useContext } from 'react';
import { LangContext } from '../layout';
import SplitText from '../components/effects/SplitText';
import FadeUp from '../components/effects/FadeUp';
import AnimatedUnderline from '../components/effects/AnimatedUnderline';

export default function Experience() {
  const ctx = useContext(LangContext);

  if (!ctx) return null;

  const { experiences } = ctx.data;
  const { lang } = ctx;

  return (
    <section
      id="experience"
      className="flex min-h-screen items-center bg-transparent px-4 py-20 text-white md:px-8 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        {/* TITLE */}
        <div className="mb-12 text-center">
          <p className="text-sm tracking-[0.3em] text-red-400 uppercase">
            {lang === 'fr' ? 'Expérience' : 'Experience'}
          </p>

          <SplitText
            tag="h2"
            text={lang === 'fr' ? 'Mon parcours professionnel' : 'My professional journey'}
            className="mt-3 text-4xl font-bold"
            splitType="lines"
            delay={0.08}
            textAlign="center"
          />
        </div>

        {/* CONTENT */}
        <div className="space-y-6">
          {experiences.map((item, index) => (
            <FadeUp
              as="div"
              key={item.role}
              delay={index * 0.08}
              className="rounded-3xl border border-gray-800/60 bg-transparent p-8 shadow-none"
            >
              <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                {/* LEFT */}
                <div className="flex items-start gap-4">
                  <div className="mt-1 h-3.5 w-3.5 rounded-full bg-red-500 shadow-[0_0_0_6px_rgba(239,68,68,0.15)]" />

                  <div>
                    <p className="text-sm font-semibold tracking-[0.25em] text-red-400 uppercase">
                      {item.period}
                    </p>

                    <h3 className="mt-2 text-2xl font-semibold text-white">{item.role}</h3>

                    <p className="mt-1 text-lg text-gray-400">{item.company}</p>
                  </div>
                </div>

                {/* RIGHT */}
                <div className="md:max-w-xl">
                  <p className="leading-relaxed text-gray-300">{item.description}</p>
                </div>
              </div>

              {index < experiences.length - 1 && <AnimatedUnderline delay={index * 0.08} />}
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
