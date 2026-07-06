/* eslint-disable*/
"use client";

import gsap from "gsap";
import { useEffect, useRef, useContext } from "react";
import { useGSAP } from "@gsap/react";
import Button from "../components/Button";
import FloatingLines from "../components/effects/FloatingLines";
import Antigravity from "../components/effects/Antigravity";
import { LangContext } from "../layout";

export default function Home() {
  const scope = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const ctx = useContext(LangContext);

  if (!ctx) return null;

  const { skills } = ctx.data;
  const { lang } = ctx;

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(".hero-item", {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out",
    });

    tl.from(
      ".hero-image",
      {
        x: 80,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      },
      "-=0.5"
    );
  }, { scope });

  useEffect(() => {
    const track = trackRef.current;

    if (!track) return;

    const totalWidth = track.scrollWidth / 2;

    const tween = gsap.to(track, {
      x: -totalWidth,
      duration: 30,
      ease: "none",
      repeat: -1,
    });

    return () => {
      tween.kill();
    };
  }, []);

  return (
    <section
      ref={scope}
      id="home"
      className="h-screen flex items-center px-10 md:px-20 relative overflow-hidden"
    >

      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <Antigravity
          count={100}
          magnetRadius={5}
          ringRadius={5}
          waveSpeed={0.4}
          waveAmplitude={1}
          particleSize={1.5}
          lerpSpeed={0.05}
          color="#ef4444"
          autoAnimate={false}
          particleVariance={1}
          rotationSpeed={0.7}
          depthFactor={1}
          pulseSpeed={3}
          particleShape="capsule"
          fieldStrength={10}
        />

        <FloatingLines
          enabledWaves={["bottom"]}
          lineCount={3}
          lineDistance={58.5}
          bendRadius={8.5}
          bendStrength={-0.5}
          interactive={false}
          parallax={true}
          animationSpeed={0.8}
          gradientStart="#ef4444"
          gradientMid="#ef4444"
          gradientEnd="#ef4444"
        />
      </div>

      {/* TITLE */}
      <h1 className="absolute -top-10 w-full h-2/3 flex flex-col justify-center select-none pointer-events-none -z-10 gap-y-6">

        <div className="flex justify-center w-full">
          <span className="text-[5vw] text-white text-center hero-item">
            {lang === "fr"
              ? "DÉVELOPPEUR FULLSTACK"
              : "FULLSTACK DEVELOPER"}
          </span>
        </div>

        <div className="w-full ml-60">
          <span className="text-[2vw] text-white/50 font-light hero-item">
            MICHAEL RAKOTOSON
          </span>
        </div>

      </h1>

      {/* INFO */}
      <div className="absolute bottom-20 left-0 w-full flex justify-between items-center px-10 py-6">

        {/* LEFT */}
        <div className="flex flex-col">
          <p className="hero-item text-lg opacity-70 max-w-md">
            {lang === "fr"
              ? "Je crée des applications web modernes et évolutives, pensées pour répondre aux besoins métier tout en offrant une expérience utilisateur fluide et une architecture solide."
              : "I build modern and scalable web applications designed to meet business needs while delivering smooth user experience and solid architecture."}
          </p>
        </div>

        {/* RIGHT */}
        <div className="flex flex-row gap-4">
          <a href="/cv.pdf" download>
            <Button variant="primary">
              {lang === "fr" ? "Télécharger CV" : "Download CV"}
            </Button>
          </a>

          <Button href="#projects" variant="secondary">
            {lang === "fr" ? "Voir mes projets" : "View my projects"}
          </Button>
        </div>

      </div>

      {/* IMAGE */}
      <div className="hero-image absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="w-130 h-160">
          <img
            src="/images/johary3.png"
            alt="profile"
            className="
             object-contain
              [mask-image:linear-gradient(to_bottom,black_40%,black_65%,transparent_100%),linear-gradient(to_left,black_0%,black_80%,transparent_100%)]
              [-webkit-mask-image:linear-gradient(to_bottom,black_40%,black_65%,transparent_100%),linear-gradient(to_left,black_0%,black_80%,transparent_100%)]
              [mask-composite:intersect]
              [-webkit-mask-composite:destination-in]
            "
          />
        </div>
      </div>

      {/* STACK */}
      <div className="absolute bottom-0 left-0 w-full">
        <div
          ref={trackRef}
          className="
            relative z-10
            flex items-center gap-40
            w-max
            py-4 px-15
            text-white text-xl
            bg-white/10
            backdrop-blur-md
          "
        >
          {[...skills, ...skills].map((skill, i) => (
            <div
              key={`${skill.name}-${i}`}
              className="flex items-center gap-2 whitespace-nowrap"
            >
              <img
                src={skill.image}
                alt={skill.name}
                className="w-8 h-8 object-contain brightness-0 invert"
              />
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}