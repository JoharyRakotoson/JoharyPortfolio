import { ImageResponse } from 'next/og';

export const alt = 'RAKOTOSON Johariniaina Michael — Développeur Fullstack Web';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default function og() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '16px',
          background: '#0f0f0f',
          color: '#ffffff',
          fontFamily: 'sans-serif',
          padding: '60px',
        }}
      >
        <div style={{ fontSize: 64, fontWeight: 700, textAlign: 'center' }}>
          RAKOTOSON Johariniaina Michael
        </div>
        <div style={{ fontSize: 40, color: '#ef4444', fontWeight: 600 }}>
          Développeur Fullstack Web
        </div>
        <div
          style={{
            fontSize: 26,
            color: '#94a3b8',
            textAlign: 'center',
            marginTop: '12px',
          }}
        >
          Master MBDS — IT University · React · Angular · Node.js · Spring Boot
        </div>
      </div>
    ),
    size
  );
}
