import { ImageResponse } from 'next/og';
import { fetchArticleById } from '@/libs/articles';

export const runtime = 'edge';
export const revalidate = 300;

export const alt = 'Article cover';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const article = await fetchArticleById(slug, { revalidateSeconds: revalidate });

  // 1. フォントデータの取得
  const fontData = await fetch(
    new URL('https://github.com/google/fonts/raw/main/ofl/mochiypopone/MochiyPopOne-Regular.ttf')
  ).then((res) => res.arrayBuffer());

  const author = 'mimimimimimi';
  const title = article.title || 'Article';

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
						padding: '48px 56px',
						textAlign: 'center',
						backdropFilter: 'blur(6px)',
						display: 'flex',
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
				</div>

				<div
					style={{
						position: 'absolute',
						top: 40,
						left: 0,
						right: 0,
						justifyContent: 'center',
						display: 'flex',
						alignItems: 'center',
						gap: 12,
					}}
				>
					<div
						style={{
							padding: '8px 20px',
							background: '#3D8D7A',
							color: 'white',
							fontSize: 26,
							fontWeight: 700,
						}}
					>
						BLOG
					</div>
				</div>

				<div
					style={{
						position: 'absolute',
						bottom: 40,
						right: 60,
						padding: '10px 18px',
						color: '#0f172a',
						fontSize: 28,
						fontWeight: 700,
					}}
				>
					{author}
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