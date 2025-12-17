import type { Article } from '@/types/article';
import Image from 'next/image';

export default function ArticleDetailServer({ article }: { article: Article }) {
	return (
		<article>
			<h1>{article.title}</h1>
			<p>{article.publishedAt}</p>
			{article.eyecatch?.url && (
				<div style={{ maxWidth: 800, marginBottom: 16 }}>
					<Image
						src={article.eyecatch.url}
						alt={article.title}
						width={parseInt(article.eyecatch.width || '800') || 800}
						height={parseInt(article.eyecatch.height || '400') || 400}
						style={{ width: '100%', height: 'auto' }}
					/>
				</div>
			)}
			<div dangerouslySetInnerHTML={{ __html: article.contents || '' }} />
		</article>
	);
}
