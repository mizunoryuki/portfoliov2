import type { Article } from '@/types/article';
import Image from 'next/image';
import styles from './ArticleDetailServer.module.scss';
import { convertTime } from './converTime';
import { IoMdTime } from "react-icons/io";

export default function ArticleDetailServer({ article }: { article: Article }) {

	const convertedTime = convertTime(article.publishedAt);

	return (
		<article className={styles.articleBody}>
			{article.eyecatch?.url && (
				<div className={styles.eyecatchWrapper}>
					<Image
						src={article.eyecatch.url}
						alt={article.title}
						width={parseInt(article.eyecatch.width || '800') || 800}
						height={parseInt(article.eyecatch.height || '400') || 400}
						className={styles.eyecatch}
						priority
					/>
				</div>
			)}
			<h2 className={styles.title}>{article.title}</h2>
			<div className={styles.publishedWrapper}>
				<IoMdTime/>
				<p>{convertedTime}</p>
			</div>
			<div dangerouslySetInnerHTML={{ __html: article.contents || '内容の取得に失敗しました' }} className={styles.contents}/>
		</article>
	);
}
