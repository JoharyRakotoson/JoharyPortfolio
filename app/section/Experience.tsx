'use client';

import { useContext } from "react";
import { LangContext } from "../layout";

export default function Experience() {
  const ctx = useContext(LangContext);

  if (!ctx) return null;
  
  const { experiences } = ctx.data;
  const { lang } = ctx;

  return (
    <section
      id="experience"
      className="min-h-screen py-20 px-4 md:px-8 lg:px-16 bg-transparent text-white flex items-center"
    >
      <div className="max-w-7xl mx-auto">

        {/* TITLE */}
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-red-400">
            {lang === "fr" ? "Expérience" : "Experience"}
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            {lang === "fr"
              ? "Mon parcours professionnel"
              : "My professional journey"}
          </h2>
        </div>

        {/* CONTENT */}
        <div className="space-y-6">
          {experiences.map((item, index) => (
            <div
              key={item.role}
              className="rounded-3xl border border-gray-800/60 bg-transparent p-8 shadow-none"
            >
              <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">

                {/* LEFT */}
                <div className="flex items-start gap-4">
                  <div className="mt-1 h-3.5 w-3.5 rounded-full bg-red-500 shadow-[0_0_0_6px_rgba(239,68,68,0.15)]" />

                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-red-400">
                      {item.period}
                    </p>

                    <h3 className="mt-2 text-2xl font-semibold text-white">
                      {item.role}
                    </h3>

                    <p className="mt-1 text-lg text-gray-400">
                      {item.company}
                    </p>
                  </div>
                </div>

                {/* RIGHT */}
                <div className="md:max-w-xl">
                  <p className="text-gray-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

              </div>

              {index < experiences.length - 1 && (
                <div className="mt-6 h-px w-full bg-gradient-to-r from-red-500/0 via-red-500/60 to-red-500/0" />
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}