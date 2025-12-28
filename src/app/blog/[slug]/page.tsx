import ArticleDetailServer from "@/components/element/articledetailserver/ArticleDetailServer";
import { fetchAllArticleIds, fetchArticleById } from "@/libs/articles";
import type { Article } from "@/types/article";
import { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article: Article = await fetchArticleById(slug);

  if (!article) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: article.title,
    openGraph: {
      title: article.title,
    },
    twitter: {
      title: article.title,
    },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const article: Article = await fetchArticleById(slug);

  return <ArticleDetailServer article={article} />;
}

export async function generateStaticParams() {
  const ids = await fetchAllArticleIds();
  return ids.map((slug) => ({ slug }));
}
