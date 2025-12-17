import { client } from '@/libs/client';
import { Card } from '@/components/element/card/Card';
import Link from 'next/link';
import { Title } from '@/components/element/title/Title';
import type { Article } from '@/types/article';
import styles from './page.module.scss';

type Props = {
    searchParams?: { page?: string };
};

const PAGE_SIZE = 6; // 1ページあたりの表示数（必要に応じて調整）

export default async function Page({ searchParams }: Props) {
	const param = await searchParams;
    const page = Math.max(1, parseInt((param?.page as string) || '1', 10) || 1);
    const offset = (page - 1) * PAGE_SIZE;

    const res = await client.get({ endpoint: 'article', queries: { limit: PAGE_SIZE, offset } });

    const totalCount: number = res.totalCount ?? (res.contents ? res.contents.length : 0);

    const articles: Article[] = (res.contents || []).map((c: Article) => ({
        id: c.id,
        eyecatch: c.eyecatch || { url: '', height: '', width: '' },
        title: c.title,
        tag: c.tag?.length ? c.tag : undefined,
        contents: c.contents,
        publishedAt: c.publishedAt,
    }));

    const totalPages = Math.max(1, Math.ceil(totalCount / PAGE_SIZE));

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <Title text="ブログ" color="#8efe3f" />
            </div>

                <div className={styles.list}>
                    {articles.map((article) => (
                        <Card key={article.id} text={article.title} url={`blog/${article.id}`} />
                    ))}
                </div>

                {/* ページネーション */}
                <nav className={styles.pagination}>
                    <ul className={styles.pageList}>
                        {page > 1 && (
                            <li>
                                <Link href={`/blog?page=${page - 1}`}>
                                    <button className={styles.pageButton}>Prev</button>
                                </Link>
                            </li>
                        )}

                        {Array.from({ length: totalPages }).map((_, i) => {
                            const p = i + 1;
                            return (
                                <li key={p}>
                                    <Link href={`/blog?page=${p}`}>
                                        <button className={`${styles.pageButton} ${p === page ? styles.active : ''}`} aria-current={p === page ? 'page' : undefined}>
                                            {p}
                                        </button>
                                    </Link>
                                </li>
                            );
                        })}

                        {page < totalPages && (
                            <li>
                                <Link href={`/blog?page=${page + 1}`}>
                                    <button className={styles.pageButton}>Next</button>
                                </Link>
                            </li>
                        )}
                    </ul>
                </nav>
        </div>
    );
}
