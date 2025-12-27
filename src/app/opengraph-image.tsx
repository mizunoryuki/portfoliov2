import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const revalidate = 300;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  const title = 'Portfolio';
  const subtitle = 'mimimimimimi';

  const fontData = await fetch(
    new URL('https://github.com/google/fonts/raw/main/ofl/mochiypopone/MochiyPopOne-Regular.ttf'),
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '60px',
          boxSizing: 'border-box',
          fontFamily: '"Mochiy Pop One"',
          background: 'linear-gradient(135deg, #fef8ff 0%, #e8f1ff 50%, #fdf2ff 100%)',
        }}
      >
        <div
          style={{
            position: 'relative',
            zIndex: 1,
            maxWidth: 760,
            width: '100%',
            borderRadius: 32,
            padding: '44px 52px',
            textAlign: 'center',
			      display: 'flex',
            flexDirection: 'column',
            gap: 18,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              fontSize: 70,
              fontWeight: 800,
              lineHeight: 1.3,
              wordBreak: 'break-word',
              color: '#0f172a',
              textShadow: '0 4px 18px rgba(255, 255, 255, 0.6)',
            }}
          >
            {title}
          </div>
          <div
            style={{
              fontSize: 30,
              lineHeight: 1.45,
              color: '#1f2937',
              opacity: 0.95,
            }}
          >
            {subtitle}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: 'Mochiy Pop One',
          data: fontData,
          style: 'normal',
          weight: 400,
        },
      ],
    },
  );
}
