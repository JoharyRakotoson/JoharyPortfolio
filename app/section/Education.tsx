"use client";

import { useContext } from "react";
import { LangContext } from "../layout";

export default function Education() {
  const ctx = useContext(LangContext);

  if (!ctx) return null;

  const { educationData } = ctx.data;
  const { lang } = ctx;

  return (
    <section
      id="education"
      className="min-h-screen flex items-center justify-center py-20 px-4 md:px-8 lg:px-16"
    >
      <div className="w-full max-w-4xl">

        {/* TITLE */}
        <h2 className="text-4xl font-bold mb-16 text-center text-white">
          {lang === "fr" ? "Éducation" : "Education"}
        </h2>

        {/* TIMELINE */}
        <div className="space-y-8">
          {educationData.map((item, index) => (
            <div key={index} className="relative flex items-start gap-8">

              {/* DATE */}
              <div className="w-1/3 text-right pr-6">
                <time className="text-sm font-bold text-red-500 uppercase tracking-wide">
                  {item.date}
                </time>
              </div>

              {/* TIMELINE DOT */}
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 bg-red-500 rounded-full border-4 border-gray-900 shadow-lg z-10"></div>

                {index !== educationData.length - 1 && (
                  <div className="w-1 h-24 bg-gradient-to-b from-red-500 to-red-600 mt-2"></div>
                )}
              </div>

              {/* CONTENT */}
              <div className="w-2/3 pl-6">
                <h3 className="text-xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="text-red-400 mt-1">
                  {item.description}
                </p>

                <p className="text-sm text-gray-400 mt-2 italic">
                  {item.institution}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}