'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { getCarouselConfig } from './projects.constants';

export function useProjectCarousel(projects: readonly unknown[]) {
  const stageRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stage = stageRef.current;
    const cardsContainer = cardsRef.current;
    if (!stage || !cardsContainer || cardsContainer.children.length === 0) return;

    const count = projects.length;
    const slotPositions: { x: number; y: number }[] = [];
    const slotCards = Array.from(cardsContainer.children) as HTMLElement[];
    let tl: gsap.core.Timeline | null = null;

    const computeSlots = () => {
      const cfg = getCarouselConfig(stage.offsetWidth);
      const R = Math.max(stage.offsetWidth * cfg.fanRadiusRatio, cfg.minRadius);
      const halfSpan = (cfg.fanSpread * Math.PI) / 180;

      if (cfg.mode === 'pile') {
        const topGap = 70;
        stage.style.height = `${cfg.cardHeight + topGap * 2}px`;
        for (let i = 0; i < count; i++) {
          slotPositions[i] = { x: 0, y: -topGap };
        }
        return;
      }

      const yOffset =
        cfg.edgeGap !== undefined ? R * Math.cos(halfSpan) - cfg.edgeGap : cfg.yOffset;

      stage.style.height = `${R + cfg.cardHeight - yOffset}px`;

      for (let i = 0; i < count; i++) {
        const t = count > 1 ? i / (count - 1) : 0.5;
        const angle = Math.PI / 2 + (0.5 - t) * 2 * halfSpan;
        slotPositions[i] = {
          x: R * Math.cos(angle) * cfg.sideStretch,
          y: -R * Math.sin(angle) + yOffset,
        };
      }
    };

    const syncZIndexes = () => {
      slotCards.forEach((card, k) => {
        gsap.set(card, { zIndex: count - k });
      });
    };

    const snapCards = () => {
      slotCards.forEach((card, k) => {
        gsap.set(card, {
          xPercent: -50,
          yPercent: -100,
          x: slotPositions[k].x,
          y: slotPositions[k].y,
          opacity: 1,
          scale: 1,
          transformOrigin: '50% 100%',
        });
      });
      syncZIndexes();
    };

    const startCycle = () => {
      if (tl) {
        tl.kill();
        tl = null;
      }

      const cfg = getCarouselConfig(stage.offsetWidth);
      const leaving = slotCards[0];

      if (cfg.mode === 'pile') {
        tl = gsap.timeline({ delay: cfg.cycleDelay, onComplete: startCycle });

        tl.to(
          leaving,
          {
            y: slotPositions[0].y + 90,
            scale: 0.92,
            opacity: 0,
            duration: cfg.exitDuration,
            ease: 'power2.inOut',
          },
          0
        );

        tl.add(() => {
          const first = slotCards.shift();
          if (first) slotCards.push(first);
          slotCards.forEach((card, k) => {
            gsap.set(card, { zIndex: count - k });
          });
          gsap.set(leaving, {
            x: slotPositions[count - 1].x,
            y: slotPositions[count - 1].y,
            scale: 1,
            opacity: 1,
          });
        });
        return;
      }

      tl = gsap.timeline({ delay: cfg.cycleDelay, onComplete: startCycle });

      tl.to(
        leaving,
        {
          x: slotPositions[0].x - cfg.exitOffset,
          y: slotPositions[0].y + 40,
          opacity: 0,
          duration: cfg.exitDuration,
          ease: 'power2.in',
        },
        0
      );

      for (let k = 1; k < count; k++) {
        tl.to(
          slotCards[k],
          {
            x: slotPositions[k - 1].x,
            y: slotPositions[k - 1].y,
            duration: cfg.moveDuration,
            ease: 'power2.inOut',
          },
          cfg.step * k
        );
      }

      const tIn = cfg.step * (count - 1) + cfg.moveDuration + 0.15;
      tl.set(
        leaving,
        {
          x: slotPositions[count - 1].x + cfg.exitOffset,
          y: slotPositions[count - 1].y,
          opacity: 1,
        },
        tIn
      );
      tl.to(
        leaving,
        { x: slotPositions[count - 1].x, duration: cfg.moveDuration + 0.1, ease: 'power2.out' },
        tIn + 0.05
      );

      tl.add(() => {
        const first = slotCards.shift();
        if (first) slotCards.push(first);
      });
    };

    computeSlots();
    snapCards();
    startCycle();

    const onResize = () => {
      if (tl) {
        tl.kill();
        tl = null;
      }
      computeSlots();
      snapCards();
      startCycle();
    };
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
      if (tl) tl.kill();
    };
  }, [projects]);

  return { stageRef, cardsRef };
}
