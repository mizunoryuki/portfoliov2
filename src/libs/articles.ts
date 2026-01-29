import {
  type Article,
  type ArticleIdListResponse,
  ArticleIdListResponseSchema,
  type ArticleListResponse,
  ArticleListResponseSchema,
  ArticleSchema,
} from "@/types/article";

import { fetchQiitaArticles } from "./qiita";
import type { FetchOptions, ListParams } from "./types";

const serviceDomain = process.env.NEXT_PUBLIC_SERVICE_DOMAIN || "";
const apiKey = process.env.NEXT_PUBLIC_API_KEY || "";

const BASE_URL = `https://${serviceDomain}.microcms.io/api/v1/article`;

const ensureEnv = () => {
  if (!serviceDomain || !apiKey) {
    throw new Error("Missing microCMS credentials");
  }
};

const fetchJson = async <T>(url: URL, options?: FetchOptions): Promise<T> => {
  ensureEnv();
  const res = await fetch(url.toString(), {
    headers: {
      "X-MICROCMS-API-KEY": apiKey,
    },
    next: {
      revalidate: options?.revalidateSeconds ?? 300,
      tags: ["articles"],
    },
  });

  if (!res.ok) {
    throw new Error(`microCMS request failed: ${res.status} ${res.statusText}`);
  }

  return res.json() as Promise<T>;
};

export const fetchArticles = async (
  params: ListParams = {},
  options?: FetchOptions,
): Promise<ArticleListResponse> => {
  const url = new URL(BASE_URL);
  if (params.limit !== undefined)
    url.searchParams.set("limit", String(params.limit));
  if (params.offset !== undefined)
    url.searchParams.set("offset", String(params.offset));
  if (params.fields) url.searchParams.set("fields", params.fields);

  const data = await fetchJson<ArticleListResponse>(url, options);
  return ArticleListResponseSchema.parse(data);
};

export const fetchArticleById = async (
  id: string,
  options?: FetchOptions,
): Promise<Article> => {
  const url = new URL(`${BASE_URL}/${id}`);
  const data = await fetchJson<Article>(url, options);
  return ArticleSchema.parse(data);
};

export const fetchAllArticleIds = async (): Promise<string[]> => {
  const limit = 100;
  let offset = 0;
  const ids: string[] = [];

  while (true) {
    const url = new URL(BASE_URL);
    url.searchParams.set("limit", String(limit));
    url.searchParams.set("offset", String(offset));
    url.searchParams.set("fields", "id");

    const data = await fetchJson<ArticleIdListResponse>(url, {
      revalidateSeconds: 300,
    });
    const parsed = ArticleIdListResponseSchema.parse(data);

    ids.push(...parsed.contents.map((c) => c.id));
    offset += limit;
    if (ids.length >= parsed.totalCount || parsed.contents.length === 0) break;
  }

  return ids;
};

// microCMSとQiitaの記事を統合して取得
export const fetchAllArticles = async (
  params: ListParams = {},
  options?: FetchOptions,
): Promise<ArticleListResponse> => {
  // microCMSとQiitaの記事を並行取得
  const [microCmsData, qiitaArticles] = await Promise.all([
    fetchArticles(params, options),
    fetchQiitaArticles(),
  ]);

  // 記事を統合して日付順にソート
  const allArticles = [...microCmsData.contents, ...qiitaArticles].sort(
    (a, b) => b.publishedAt.getTime() - a.publishedAt.getTime(),
  );

  // ページネーション処理
  const limit = params.limit || allArticles.length;
  const offset = params.offset || 0;
  const paginatedArticles = allArticles.slice(offset, offset + limit);

  return {
    contents: paginatedArticles,
    totalCount: allArticles.length,
  };
};
