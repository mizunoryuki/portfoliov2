import { RiExternalLinkFill } from "react-icons/ri";
import styles from "./Product.module.scss";
import Image from "next/image";
import { ProductProps } from "@/types/products";

export const Product = ({ description }: ProductProps) => {
    const { imgUrl = "/preparing.png", title, explanation, tag } = description; // デフォルト値を設定

    return (
        <div className={styles.card}>
            <div className={styles.image}>
                <Image
                    src={imgUrl}
                    alt="product image"
                    fill
                    quality={1}
                    sizes="calc(100% / 2)"
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
                        <p className={styles.desc}>{explanation}</p>
                    </div>
                </div>
                <div className={styles.tagContainer}>
                    <p>
                        <span>#</span>
                        {tag}
                    </p>
                </div>
            </div>
        </div>
    );
};
