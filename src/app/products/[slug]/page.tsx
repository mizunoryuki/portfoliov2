export const runtime = "edge";

import Image from "next/image";
import styles from "./page.module.scss";
import { fetchProductById } from "@/libs/products";
import { Metadata } from "next";

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const info = await fetchProductById(slug);

    if (!info) {
        return { title: "Product Not Found" };
    }

    return {
        title: info.title,
        description: `${info.title}の詳細ページです。`, // または info.description があればそれを使う
        openGraph: {
            title: info.title,
            description: `${info.title}の詳細ページです。`,
        },
        twitter: {
            card: "summary_large_image",
            title: info.title,
            description: `${info.title}の詳細ページです。`,
        },
    };
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params; 
    const info = await fetchProductById(slug);

    return (
        <main className={styles.container}>
            <div className={styles.image}>
                <Image
                    src={info.eyecatch?.url || "/preparing.png"}
                    alt="product image"
                    fill
                    sizes="100vw"
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