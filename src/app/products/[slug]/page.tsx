export const runtime = "edge";

import Image from "next/image";
import styles from "./page.module.scss";
import { fetchProductById } from "@/libs/products";

// 記事詳細ページの生成
export default async function BlogPostPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const id = await params;
    const info = await fetchProductById(id.slug);

    return (
        <main className={styles.container}>
            <div className={styles.image}>
                <Image
                    src={info.eyecatch?.url || "/preparing.png"}
                    alt="product image"
                    fill
                    sizes="100"
                    priority
                />
            </div>
            <h1 className={styles.title}>{info.title}</h1>
            <p className={styles.tag}>#{info.tag}</p>
            <div
                className={styles.content}
                dangerouslySetInnerHTML={{ __html: info.content }}
            />
        </main>
    );
}
