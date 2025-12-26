import { RiExternalLinkFill } from "react-icons/ri";
import styles from "./Product.module.scss";
import Image from "next/image";
import { ProductInfo } from "@/types/products";
import Link from "next/link";
const defaultImgUrl = "/preparing.png";

export const ProductCard = (productDetail: {product: ProductInfo}) => {
    const { id, eyecatch, title, description, tag } = productDetail.product; // デフォルト値を設定

    return (
        <Link className={styles.card} href={`/products/${id}`}>
            <div className={styles.image}>
                <Image
                    src={eyecatch?.url || defaultImgUrl}
                    alt="product image"
                    quality={1}
                    fill
                    priority
                />
            </div>
            <div className={styles.product}>
                <div className={styles.titleContainer}>
                    <p>作品名</p>
                    <div className={styles.title}>
                        <p>{title}</p>
                        <RiExternalLinkFill size={16} />
                    </div>
                </div>
                <div className={styles.explanationContainer}>
                    <p>概要</p>
                    <div className={styles.descContainer}>
                        <p className={styles.desc}>{description}</p>
                    </div>
                </div>
                <div className={styles.tagContainer}>
                    <p>
                        <span>#</span>
                        {tag}
                    </p>
                </div>
            </div>
        </Link>
    );
};
