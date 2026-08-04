'use client';

import { useEffect, useMemo, useRef } from 'react';

interface VariableProximityProps {
  label: string;
  className?: string;
  lineClassName?: string;
  radius?: number;
  maxScale?: number;
  baseColor?: string;
  activeColor?: string;
}

function hexToRgb(hex: string): [number, number, number] {
  const normalized = hex.replace('#', '');
  const int = parseInt(normalized, 16);
  return [(int >> 16) & 255, (int >> 8) & 255, int & 255];
}

const IDLE_TIMEOUT = 150;

export default function VariableProximity({
  label,
  className = '',
  lineClassName = '',
  radius = 70,
  maxScale = 0.3,
  baseColor = '#cbd5e1',
  activeColor = '#ef4444',
}: VariableProximityProps) {
  const containerRef = useRef<HTMLSpanElement>(null);
  const letterRefs = useRef<(HTMLElement | null)[]>([]);
  const mouseRef = useRef({ x: -9999, y: -9999 });

  const baseRgb = useMemo(() => hexToRgb(baseColor), [baseColor]);
  const activeRgb = useMemo(() => hexToRgb(activeColor), [activeColor]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let positions: { cx: number; cy: number }[] = [];
    let needsRecompute = true;
    let rafId = 0;
    let running = false;
    let lastX = -9999;
    let lastY = -9999;
    let lastMoveAt = 0;

    const recomputePositions = () => {
      positions = letterRefs.current.map((el) => {
        const r = el?.getBoundingClientRect();
        return r ? { cx: r.left + r.width / 2, cy: r.top + r.height / 2 } : { cx: 0, cy: 0 };
      });
      needsRecompute = false;
    };

    const loop = () => {
      rafId = requestAnimationFrame(loop);

      const { x, y } = mouseRef.current;
      if (x === lastX && y === lastY) {
        if (performance.now() - lastMoveAt > IDLE_TIMEOUT) running = false;
        return;
      }

      lastX = x;
      lastY = y;
      lastMoveAt = performance.now();

      if (needsRecompute) recomputePositions();

      const cRect = container.getBoundingClientRect();
      const inZone =
        x >= cRect.left - radius &&
        x <= cRect.right + radius &&
        y >= cRect.top - radius &&
        y <= cRect.bottom + radius;

      letterRefs.current.forEach((letter, i) => {
        if (!letter) return;

        if (!inZone) {
          letter.style.transform = '';
          letter.style.color = '';
          return;
        }

        const { cx, cy } = positions[i];
        const dist = Math.hypot(x - cx, y - cy);
        const f = Math.max(0, Math.min(1, 1 - dist / radius));

        const scale = 1 + f * maxScale;
        const r = Math.round(baseRgb[0] + (activeRgb[0] - baseRgb[0]) * f);
        const g = Math.round(baseRgb[1] + (activeRgb[1] - baseRgb[1]) * f);
        const b = Math.round(baseRgb[2] + (activeRgb[2] - baseRgb[2]) * f);

        letter.style.transform = `scale(${scale})`;
        letter.style.color = `rgb(${r}, ${g}, ${b})`;
      });
    };

    const start = () => {
      lastMoveAt = performance.now();
      if (!running) {
        running = true;
        rafId = requestAnimationFrame(loop);
      }
    };

    const handlePointerMove = () => {
      start();
    };

    const handleViewportChange = () => {
      needsRecompute = true;
      start();
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('scroll', handleViewportChange, { passive: true });
    window.addEventListener('resize', handleViewportChange);

    return () => {
      running = false;
      cancelAnimationFrame(rafId);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('scroll', handleViewportChange);
      window.removeEventListener('resize', handleViewportChange);
    };
  }, [radius, maxScale, baseRgb, activeRgb]);

  const lines = label.split('\n');
  let letterIndex = 0;

  return (
    <span ref={containerRef} className={className} style={{ whiteSpace: 'pre-line' }}>
      {lines.map((line, li) => {
        const words = line.split(' ');
        return (
          <span key={li} className={lineClassName} style={{ display: 'block' }}>
            {words.map((word, wi) => (
              <span key={wi} style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
                {word.split('').map((ch, ci) => {
                  const currentIndex = letterIndex++;
                  return (
                    <span
                      key={ci}
                      ref={(el) => {
                        letterRefs.current[currentIndex] = el;
                      }}
                      style={{ display: 'inline-block', willChange: 'transform, color' }}
                    >
                      {ch}
                    </span>
                  );
                })}
                {wi < words.length - 1 && '\u00A0'}
              </span>
            ))}
          </span>
        );
      })}
    </span>
  );
}
