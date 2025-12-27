import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const revalidate = 300;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  const title = 'Portfolio';
  const subtitle = 'Engineer / Creator';

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background: 'linear-gradient(135deg, #0f172a, #1e293b)',
          color: 'white',
        }}
      >
        <div
          style={{
            fontSize: 60,
            fontWeight: 700,
            lineHeight: 1.2,
          }}
        >
          {title}
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 28,
            opacity: 0.9,
          }}
        >
          {subtitle}
        </div>
      </div>
    ),
    { ...size },
  );
}
