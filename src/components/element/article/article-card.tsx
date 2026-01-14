import Image from "next/image";
import Link from "next/link";

import type { Article } from "@/types/article";

import styles from "./article-card.module.scss";

export const ArticleCard = ({ article }: { article: Article }) => {
  const excerpt = (article.contents || "")
    .replace(/<[^>]*>/g, "")
    .slice(0, 140);
  const isComingSoon = article.id.startsWith("coming-soon-");

  const cardContent = (
    <>
      <div className={styles.imageWrapper}>
        {article.eyecatch?.url ? (
          <Image
            src={article.eyecatch.url}
            alt={article.title}
            fill
            sizes="(max-width: 600px) 100vw, 300px"
            style={{ objectFit: "cover" }}
          />
        ) : (
          <Image
            src="/not.png"
            alt="no image"
            fill
            sizes="(max-width: 600px) 100vw, 300px"
            style={{ objectFit: "cover" }}
          />
        )}
      </div>
      <div className={styles.body}>
        <h3 className={styles.title}>{article.title}</h3>
        <p className={styles.date}>
          {isComingSoon ? "" : article.publishedAt.toLocaleDateString("ja-JP")}
        </p>
        <p className={styles.excerpt}>
          {excerpt}
          {excerpt.length >= 140 ? "…" : ""}
        </p>
      </div>
    </>
  );

  if (isComingSoon) {
    return (
      <div
        className={`${styles.card} ${styles.disabled}`}
        role="link"
        aria-disabled="true"
        aria-label="Coming soonの記事カード"
        tabIndex={-1}
      >
        {cardContent}
      </div>
    );
  }

  return (
    <Link href={`/blog/${article.id}`} className={styles.card}>
      {cardContent}
    </Link>
  );
};
