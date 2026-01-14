import Image from "next/image";
import { IoMdTime } from "react-icons/io";
import sanitizeHtml, { type IOptions } from "sanitize-html";

import type { Article } from "@/types/article";

import { ArticleBackButton } from "../article-back-button/article-back-button";
import styles from "./article-detail-server.module.scss";

const SANITIZE_OPTIONS: IOptions = {
  allowedTags: [
    ...sanitizeHtml.defaults.allowedTags,
    "img",
    "figure",
    "figcaption",
    "pre",
    "code",
    "iframe",
  ],
  allowedAttributes: {
    ...sanitizeHtml.defaults.allowedAttributes,
    "*": ["style"],
    a: ["href", "name", "target", "rel"],
    img: ["src", "alt", "width", "height", "loading", "decoding"],
    iframe: [
      "src",
      "width",
      "height",
      "style",
      "allowfullscreen",
      "allow",
      "frameborder",
    ],
  },

  allowedIframeHostnames: ["www.canva.com"],
  allowedSchemes: ["http", "https", "mailto"],
  allowedSchemesByTag: {
    img: ["http", "https", "data"],
  },
};

export default function ArticleDetailServer({ article }: { article: Article }) {
  // sanitize処理
  const sanitizedHTML = sanitizeHtml(article.contents || "", SANITIZE_OPTIONS);

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
            __html: sanitizedHTML || "内容の取得に失敗しました",
          }}
          className={styles.content}
        />
      </article>
    </div>
  );
}
