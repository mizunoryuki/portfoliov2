import type { Metadata } from "next";
import Image from "next/image";
import sanitizeHtml, { type IOptions } from "sanitize-html";

import { fetchProductById } from "@/libs/products";

import styles from "./page.module.scss";

export const runtime = "edge";

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

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const info = await fetchProductById(slug);

  if (!info) {
    return { title: "Product Not Found" };
  }

  return {
    title: info.title,
    description: `${info.title}の詳細ページです。`,
    openGraph: {
      description: `${info.title}の詳細ページです。`,
    },
    twitter: {
      card: "summary_large_image",
      description: `${info.title}の詳細ページです。`,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const info = await fetchProductById(slug);

  if (!info) {
    return <div className={styles.container}>Product Not Found</div>;
  }

  const sanitizedHTML = sanitizeHtml(info.content || "", SANITIZE_OPTIONS);

  return (
    <main className={styles.container}>
      <div className={styles.image}>
        <Image
          src={info.eyecatch?.url || "/preparing.webp"}
          alt="product image"
          fill
          sizes="(max-width: 768px) 92vw, 50vw"
          priority
        />
      </div>
      <h1 className={styles.title}>{info.title}</h1>
      <p className={styles.tag}>#{info.tag}</p>
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{
          __html: sanitizedHTML || "内容の取得に失敗しました",
        }}
      />
    </main>
  );
}
