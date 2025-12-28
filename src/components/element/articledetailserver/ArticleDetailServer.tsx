import Image from "next/image";
import { IoMdTime } from "react-icons/io";

import type { Article } from "@/types/article";

import { ArticleBackButton } from "../articlebackbutton/ArticleBackButton";
import styles from "./ArticleDetailServer.module.scss";

export default function ArticleDetailServer({ article }: { article: Article }) {
  return (
    <div>
      <ArticleBackButton />
      <article className={styles.articleBody}>
        {article.eyecatch?.url && (
          <div className={styles.eyecatchWrapper}>
            <Image
              src={article.eyecatch.url}
              alt={article.title}
              width={parseInt(article.eyecatch.width || "800") || 800}
              height={parseInt(article.eyecatch.height || "400") || 400}
              className={styles.eyecatch}
              priority
            />
          </div>
        )}
        <h2 className={styles.title}>{article.title}</h2>
        <div className={styles.publishedWrapper}>
          <div className={styles.icon}>
            <IoMdTime size={20} />
          </div>
          <p className={styles.publishedAt}>
            {article.publishedAt.toLocaleDateString("ja-JP")}
          </p>
        </div>
        <div
          dangerouslySetInnerHTML={{
            __html: article.contents || "内容の取得に失敗しました",
          }}
          className={styles.content}
        />
      </article>
    </div>
  );
}
