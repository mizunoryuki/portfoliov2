import { client } from '@/libs/client';
import ArticleDetailServer from '@/components/element/articledetailserver/ArticleDetailServer';
import type { Article } from '@/types/article';

type Props = {
    params: { slug: string };
};

export default async function Page({ params }: Props) {
    const { slug } = await params;
    const res = await client.get({ endpoint: 'article', contentId: slug });

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
