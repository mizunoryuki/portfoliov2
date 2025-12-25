import { z } from "zod";

const EyecatchSchema = z
  .object({
    url: z.string().optional(),
    height: z.union([z.string(), z.number()]).optional(),
    width: z.union([z.string(), z.number()]).optional(),
  })
  .nullish()
  .transform((value) => {
    const { url, height, width } = value ?? {};
    return {
      url: url ?? "",
      height: `${height ?? ""}`,
      width: `${width ?? ""}`,
    };
  });

export const ArticleSchema = z.object({
  id: z.string(),
  eyecatch: EyecatchSchema,
  title: z.string(),
  tag: z.array(z.string()).optional(),
  contents: z.string().optional(),
  publishedAt: z.coerce.date(), // 文字列をDateオブジェクトに変換
});

export const ArticleListResponseSchema = z.object({
  contents: z.array(ArticleSchema).default([]),
  totalCount: z.number().optional().default(0),
});

export const ArticleIdSchema = z.object({ id: z.string() });

export const ArticleIdListResponseSchema = z.object({
  contents: z.array(ArticleIdSchema).default([]),
  totalCount: z.number().optional().default(0),
});

export type Article = z.infer<typeof ArticleSchema>;
export type Articles = Article[];
export type ArticleListResponse = z.infer<typeof ArticleListResponseSchema>;
export type ArticleIdListResponse = z.infer<typeof ArticleIdListResponseSchema>;