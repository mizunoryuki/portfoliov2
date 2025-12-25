import Link from 'next/link';
import Image from 'next/image';
import styles from './ArticleCard.module.scss';
import type { Article } from '@/types/article';

export const ArticleCard = ({ article }: { article: Article }) => {
    const excerpt = (article.contents || '').replace(/<[^>]*>/g, '').slice(0, 140);

    return (
        <Link href={`/blog/${article.id}`} className={styles.card}>
            <div className={styles.imageWrapper}>
                {article.eyecatch?.url ? (
                    <Image
                        src={article.eyecatch.url}
                        alt={article.title}
                        fill
                        sizes="(max-width: 600px) 100vw, 300px"
                        style={{ objectFit: 'cover' }}
                    />
                ) : (
                    <Image
						src="/not.png"
						alt="no image"
						fill
						sizes="(max-width: 600px) 100vw, 300px"
						style={{ objectFit: 'cover' }}
                    />
                )}
            </div>
            <div className={styles.body}>
                <h3 className={styles.title}>{article.title}</h3>
                <p className={styles.date}>{article.id.startsWith('coming-soon-') ? '' : article.publishedAt.toLocaleDateString('ja-JP')}</p>
                <p className={styles.excerpt}>{excerpt}{excerpt.length >= 140 ? '…' : ''}</p>
            </div>
        </Link>
    );
};

export default ArticleCard;
