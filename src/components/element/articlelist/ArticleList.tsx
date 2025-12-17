import { Card } from "../card/Card";
import { Contentslist } from "../contentslist/Contentslist";
import { client } from "@/libs/client";
import { Article } from "@/types/article";

export const ArticleList = async () => {
    const blog = await client.get({ endpoint: "article" });
    
    const articles: Article[] = blog.contents.map(
        ({ id, eyecatch, title, tag,contents,publishedAt  }: Article) => ({
            id,
            imgUrl: eyecatch?.url || '',
            title,
            tag: tag?.[0] ? [tag[0]] : ['未分類'],
			contents,
			publishedAt,
        })
    );

    const articleLength = articles.length;
    const MAX_DISPLAY = 4;
    
    const displayArticles = articles.slice(0, MAX_DISPLAY);
    const hasMore = articleLength > MAX_DISPLAY;
    const emptySlots = MAX_DISPLAY - displayArticles.length;

    return (
        <Contentslist text="ブログ" more={hasMore ? 'blog' : ''}>
	            {displayArticles.map((article) => (
                <Card
                    key={article.id}
                    text={article.title}
                    url={`blog/${article.id}`}
                />
            ))}
			{/* 最大表示数に満たない場合はダミーのカードを表示 */}
            {emptySlots > 0 && Array.from({ length: emptySlots }).map((_, index) => (
                <Card 
                    key={`coming-soon-${index}`} 
                    text="Coming soon..." 
                    url="#"
                />
            ))}
        </Contentslist>
    );
};