export const runtime = "edge";

import { client } from '@/libs/client';
import ArticleDetailServer from '@/components/element/articledetailserver/ArticleDetailServer';
import type { Article } from '@/types/article';

export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const  id = await params;
    const res = await client.get({ endpoint: 'article', contentId: id.slug });

    const article: Article = {
        id: res.id,
        eyecatch: res.eyecatch || { url: '', height: '', width: '' },
        title: res.title,
        tag: res.tag?.length ? res.tag : undefined,
        contents: res.contents,
        publishedAt: res.publishedAt,
    };

    return <ArticleDetailServer article={article} />;
}
