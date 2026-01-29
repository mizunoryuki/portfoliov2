import { ArticleCard } from "@/components/element/article/article-card";
import { fetchArticles } from "@/libs/articles";

import { Contentslist } from "../contents-list/contents-list";

export const ArticleList = async () => {
  const { contents: articles } = await fetchArticles({
    limit: 4,
    fields: "id,title,eyecatch,publishedAt,tag,contents",
  });

  const articleLength = articles.length;
  const MAX_DISPLAY = 4;

  const displayArticles = articles.slice(0, MAX_DISPLAY);
  const hasMore = articleLength > MAX_DISPLAY;
  const emptySlots = MAX_DISPLAY - displayArticles.length;
  const placeholderArticles = Array.from({ length: emptySlots }, (_, idx) => ({
    id: `coming-soon-${displayArticles.length + idx}`,
    eyecatch: { url: "/not.webp", height: "", width: "" },
    title: "Coming soon...",
    tag: undefined,
    source: "microcms" as const,
    contents: "",
    publishedAt: new Date(),
  }));

  return (
    <Contentslist text="ブログ" more={hasMore ? "blog" : ""}>
      {displayArticles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
      {/* 最大表示数に満たない場合はダミーのカードを表示 */}
      {placeholderArticles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </Contentslist>
  );
};
