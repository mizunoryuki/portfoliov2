export const runtime = "edge";

import { client } from '@/libs/client';
import ArticleDetailServer from '@/components/element/articledetailserver/ArticleDetailServer';
import { ArticleSchema, type Article } from '@/types/article';

export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const  id = await params;
    const article: Article = ArticleSchema.parse(await client.get({ endpoint: 'article', contentId: id.slug }));

    return <ArticleDetailServer article={article} />;
}
