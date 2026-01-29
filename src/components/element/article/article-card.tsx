import Image from "next/image";
import Link from "next/link";

import type { Article } from "@/types/article";

import styles from "./article-card.module.scss";

export const ArticleCard = ({ article }: { article: Article }) => {
  const excerpt = (article.contents || "")
    .replace(/<[^>]*>/g, "")
    .slice(0, 140);
  const isComingSoon = article.id.startsWith("coming-soon-");
  const isQiita = article.source === "qiita";
  const href = isQiita ? article.url || "#" : `/blog/${article.id}`;
  const linkTarget = isQiita ? "_blank" : undefined;
  const linkRel = isQiita ? "noopener noreferrer" : undefined;

  const cardContent = (
    <>
      <div className={styles.imageWrapper}>
        {isQiita && (
          <div className={styles.externalIcon} aria-label="外部サイトへ遷移">
            ↗
          </div>
        )}
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
            src="/not.webp"
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
    <Link href={href} className={styles.card} target={linkTarget} rel={linkRel}>
      {cardContent}
    </Link>
  );
};
