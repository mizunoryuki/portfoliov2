import { ArticleList } from "@/components/element/article-list/article-list";
import { Card } from "@/components/element/card/card";
import { Contentslist } from "@/components/element/contents-list/contents-list";
import { Top } from "@/components/element/top/top";

import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Top />
      <div>
        <Contentslist text="自己紹介">
          <Card text="About me" url="aboutme" color="var(--color-aboutme)" />
          <Card text="Skills" url="skills" color="var(--background-3)" />
          <Card
            text="Products"
            url="products"
            color="var(--color-product-green)"
          />
          <Card text="Awards" url="awards" color="var(--color-award)" />
        </Contentslist>
        <ArticleList />
      </div>
    </div>
  );
}
