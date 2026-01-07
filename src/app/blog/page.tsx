import Link from "next/link";

import ArticleCard from "@/components/element/article/ArticleCard";
import { Title } from "@/components/element/title/Title";
import { fetchArticles } from "@/libs/articles";

import styles from "./page.module.scss";

export const runtime = "edge";

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

const PAGE_SIZE = 6; // 1ページあたりの表示数（必要に応じて調整）

export default async function Page({ searchParams }: Props) {
  const param = await searchParams;
  const page = Math.max(1, parseInt((param?.page as string) || "1", 10) || 1);
  const offset = (page - 1) * PAGE_SIZE;

  const { contents: articles, totalCount } = await fetchArticles({
    limit: PAGE_SIZE,
    offset,
    fields: "id,title,eyecatch,publishedAt,tag,contents",
  });

  const totalPages = Math.max(1, Math.ceil(totalCount / PAGE_SIZE));

  return (
    <div>
      <Title text="Blog" color="var(--color-blog)" />
      <div className={styles.container}>
        <div className={styles.list}>
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
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
                    <button
                      className={`${styles.pageButton} ${p === page ? styles.active : ""}`}
                      aria-current={p === page ? "page" : undefined}
                    >
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
    </div>
  );
}
