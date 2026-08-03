'use client';

import { useEffect, useMemo, useRef } from 'react';

interface VariableProximityProps {
  label: string;
  className?: string;
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

export default function VariableProximity({
  label,
  className = '',
  radius = 70,
  maxScale = 0.3,
  baseColor = '#cbd5e1',
  activeColor = '#ef4444',
}: VariableProximityProps) {
  const containerRef = useRef<HTMLSpanElement>(null);
  const letterRefs = useRef<(HTMLElement | null)[]>([]);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const lastMouseRef = useRef({ x: -9999, y: -9999 });

  const baseRgb = useMemo(() => hexToRgb(baseColor), [baseColor]);
  const activeRgb = useMemo(() => hexToRgb(activeColor), [activeColor]);

  useEffect(() => {
    const handleMove = (e: PointerEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('pointermove', handleMove);
    return () => window.removeEventListener('pointermove', handleMove);
  }, []);

  useEffect(() => {
    let rafId = 0;

    const loop = () => {
      rafId = requestAnimationFrame(loop);
      const container = containerRef.current;
      const { x, y } = mouseRef.current;
      if (!container || (x === lastMouseRef.current.x && y === lastMouseRef.current.y)) return;
      lastMouseRef.current = { x, y };

      letterRefs.current.forEach((letter) => {
        if (!letter) return;
        const rect = letter.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
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

    rafId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafId);
  }, [radius, maxScale, baseRgb, activeRgb]);

  const lines = label.split('\n');
  let letterIndex = 0;

  return (
    <span ref={containerRef} className={className} style={{ whiteSpace: 'pre-line' }}>
      {lines.map((line, li) => {
        const words = line.split(' ');
        return (
          <span key={li} style={{ display: 'block' }}>
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
