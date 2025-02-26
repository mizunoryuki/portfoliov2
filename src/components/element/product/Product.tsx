import styles from "./Product.module.scss";
interface Description {
    title: string;
    explanation: string;
    tag: "ハッカソン" | "個人開発";
}

interface ProductProps {
    description: Description;
}

export const Product = ({ description }: ProductProps) => {
    return (
        <div className={styles.card}>
            <div className={styles.image}></div>
            <div className={styles.product}>
                <div className={styles.titleContainer}>
                    <p>作品名</p>
                    <p>{description.title}</p>
                </div>
                <div className={styles.explanationContainer}>
                    <p>概要</p>
                    <p>{description.explanation}</p>
                </div>
                <div className={styles.tagContainer}>
                    <p>
                        <span>#</span>
                        {description.tag}
                    </p>
                </div>
            </div>
        </div>
    );
};
