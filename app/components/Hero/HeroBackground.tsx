'use client';

import dynamic from 'next/dynamic';
import { PARTICLE_CONFIG } from '../../lib/heroConfig';

const Antigravity = dynamic(() => import('../effects/Antigravity'), {
  ssr: false,
  loading: () => null,
});

export default function HeroBackground() {
  return <Antigravity {...PARTICLE_CONFIG} />;
}
