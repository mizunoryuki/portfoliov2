export const runtime = "edge";

import ArticleDetailServer from '@/components/element/articledetailserver/ArticleDetailServer';
import { fetchArticleById } from '@/libs/articles';
import type { Article } from '@/types/article';

export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const  id = await params;
    const article: Article = await fetchArticleById(id.slug);

    return <ArticleDetailServer article={article} />;
}
