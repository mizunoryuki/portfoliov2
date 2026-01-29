import { z } from "zod";

import type { Article } from "@/types/article";

// Qiita APIのレスポンス型
const QiitaArticleSchema = z.object({
  id: z.string(),
  title: z.string(),
  url: z.string(),
  created_at: z.string(),
  tags: z.array(
    z.object({
      name: z.string(),
    }),
  ),
  body: z.string(),
  user: z.object({
    profile_image_url: z.string(),
  }),
});

type QiitaArticle = z.infer<typeof QiitaArticleSchema>;

const QIITA_API_BASE = "https://qiita.com/api/v2";

// Qiitaのユーザー名を環境変数から取得
const getQiitaUsername = (): string | null => {
  return process.env.NEXT_PUBLIC_QIITA_USERNAME || null;
};

// Qiita APIから記事を取得
export const fetchQiitaArticles = async (
  page = 1,
  perPage = 20,
): Promise<Article[]> => {
  const username = getQiitaUsername();

  if (!username) {
    console.warn(
      "NEXT_PUBLIC_QIITA_USERNAME is not set. Skipping Qiita fetch.",
    );
    return [];
  }

  try {
    const url = `${QIITA_API_BASE}/users/${username}/items?page=${page}&per_page=${perPage}`;
    const res = await fetch(url, {
      next: {
        revalidate: 300, // 5分キャッシュ
        tags: ["qiita-articles"],
      },
    });

    if (!res.ok) {
      throw new Error(`Qiita API error: ${res.status} ${res.statusText}`);
    }

    const data = await res.json();
    const qiitaArticles = z.array(QiitaArticleSchema).parse(data);

    // Qiitaの記事を共通のArticle型に変換
    return qiitaArticles.map(
      (article: QiitaArticle): Article => ({
        id: `qiita-${article.id}`,
        title: article.title,
        eyecatch: {
          url: "/qiita_blog.webp",
          height: "",
          width: "",
        },
        tag: article.tags.map((tag) => tag.name),
        contents: article.body,
        publishedAt: new Date(article.created_at),
        source: "qiita" as const,
        url: article.url,
      }),
    );
  } catch (error) {
    console.error("Failed to fetch Qiita articles:", error);
    return [];
  }
};
