'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import {
  FAN_SPREAD,
  FAN_RADIUS_RATIO,
  SIDE_STRETCH,
  CARD_HEIGHT,
  Y_OFFSET,
  EXIT_DURATION,
  MOVE_DURATION,
  STEP,
  CYCLE_DELAY,
  EXIT_OFFSET,
} from './projects.constants';

export function useProjectCarousel(projects: readonly unknown[]) {
  const stageRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stage = stageRef.current;
    const cardsContainer = cardsRef.current;
    if (!stage || !cardsContainer || cardsContainer.children.length === 0) return;

    const count = projects.length;
    const halfSpan = (FAN_SPREAD * Math.PI) / 180;
    const slotPositions: { x: number; y: number }[] = [];
    const slotCards = Array.from(cardsContainer.children) as HTMLElement[];
    let tl: gsap.core.Timeline | null = null;

    const computeSlots = () => {
      const W = stage.offsetWidth;
      const R = W * FAN_RADIUS_RATIO;
      stage.style.height = `${R + CARD_HEIGHT - Y_OFFSET}px`;
      for (let i = 0; i < count; i++) {
        const t = count > 1 ? i / (count - 1) : 0.5;
        const angle = Math.PI / 2 + (0.5 - t) * 2 * halfSpan;
        slotPositions[i] = {
          x: R * Math.cos(angle) * SIDE_STRETCH,
          y: -R * Math.sin(angle) + Y_OFFSET,
        };
      }
    };

    const snapCards = () => {
      slotCards.forEach((card, k) => {
        gsap.set(card, {
          xPercent: -50,
          yPercent: -100,
          x: slotPositions[k].x,
          y: slotPositions[k].y,
          opacity: 1,
          transformOrigin: '50% 100%',
        });
      });
    };

    const startCycle = () => {
      if (tl) {
        tl.kill();
        tl = null;
      }

      const leaving = slotCards[0];

      tl = gsap.timeline({ delay: CYCLE_DELAY, onComplete: startCycle });

      tl.to(
        leaving,
        {
          x: slotPositions[0].x - EXIT_OFFSET,
          y: slotPositions[0].y + 40,
          opacity: 0,
          duration: EXIT_DURATION,
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
            duration: MOVE_DURATION,
            ease: 'power2.inOut',
          },
          STEP * k
        );
      }

      const tIn = STEP * (count - 1) + MOVE_DURATION + 0.15;
      tl.set(
        leaving,
        {
          x: slotPositions[count - 1].x + EXIT_OFFSET,
          y: slotPositions[count - 1].y,
          opacity: 1,
        },
        tIn
      );
      tl.to(
        leaving,
        { x: slotPositions[count - 1].x, duration: MOVE_DURATION + 0.1, ease: 'power2.out' },
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
