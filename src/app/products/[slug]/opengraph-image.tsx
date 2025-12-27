import { ImageResponse } from 'next/og';
import { fetchProductById } from '@/libs/products';

export const runtime = 'edge';
export const revalidate = 300;

export const alt = 'Product cover';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const product = await fetchProductById(slug, { revalidateSeconds: revalidate });

  // Load font (Mochiy Pop One)
  const fontData = await fetch(
    'https://fonts.gstatic.com/s/mochiyonepop/v15/QldNNTtLsx4E__B0XTm6xLKyA6pALbpK.woff2',
  ).then((res) => res.arrayBuffer());

  const title = product.title || 'Product';
  const description = product.description || '';

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
          fontFamily: 'Mochiy Pop One, sans-serif',
        }}
      >
        <div
          style={{
            fontSize: 60,
            fontWeight: '700',
            lineHeight: 1.2,
            maxWidth: '100%',
            wordBreak: 'break-word',
          }}
        >
          {title}
        </div>
        {description ? (
          <div
            style={{
              marginTop: 30,
              fontSize: 28,
              lineHeight: 1.4,
              opacity: 0.9,
              maxHeight: 200,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {description}
          </div>
        ) : null}
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
