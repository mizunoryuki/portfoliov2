import ArticleCard from "@/components/element/article/ArticleCard";
import { Contentslist } from "../contentslist/Contentslist";
import { fetchArticles } from "@/libs/articles";

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

  return (
    <Contentslist text="ブログ" more={hasMore ? "blog" : ""}>
      {displayArticles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
      {/* 最大表示数に満たない場合はダミーのカードを表示 */}
      {emptySlots > 0 &&
        Array.from({ length: emptySlots }).map((_, index) => (
          <ArticleCard
            key={`coming-soon-${index}`}
            article={{
              id: `coming-soon-${index}`,
              eyecatch: { url: "/not.png", height: "", width: "" },
              title: "Coming soon...",
              tag: undefined,
              contents: "",
              publishedAt: new Date(),
            }}
          />
        ))}
    </Contentslist>
  );
};
