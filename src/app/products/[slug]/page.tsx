import { client } from "@/libs/client";
import { Description } from "@/types/products";
import Image from "next/image";
import styles from "./page.module.scss";

interface PostInfo {
    post: Description;
    content: string;
    width?: number;
    height?: number;
}

// microCMSから特定の記事を取得
async function getBlogPost(id: string): Promise<PostInfo> {
    const data = await client.get({
        endpoint: `blogs/${id}`,
    });
    const filterdBlog: PostInfo = {
        post: {
            id: data.id,
            imgUrl: data.eyecatch?.url,
            title: data.title,
            tag: data.tag,
            explanation: data.description,
        },
        content: data.content,
        width: data.eyecatch?.width,
        height: data.eyecatch?.height,
    };
    return filterdBlog;
}

// 記事詳細ページの生成
export default async function BlogPostPage({
    params,
}: {
    params: { slug: string };
}) {
    const id = await params;
    const info = await getBlogPost(id.slug);

    return (
        <main className={styles.container}>
            <div className={styles.image}>
                <Image
                    src={info.post.imgUrl || "/preparing.png"}
                    alt="product image"
                    fill
                    sizes="100vw"
                    priority
                />
            </div>
            <h1 className={styles.title}>{info.post.title}</h1>
            <p className={styles.tag}>#{info.post.tag}</p>
            <div
                className={styles.content}
                dangerouslySetInnerHTML={{ __html: info.content }}
            />
        </main>
    );
}

// 静的パスを生成
export async function generateStaticParams() {
    const contentIds = await client.getAllContentIds({ endpoint: "blogs" });

    return contentIds.map((contentId) => ({
        id: contentId, // 各記事のIDをパラメータとして返す
    }));
}
