import { Contentslist } from "@/components/element/contentslist/Contentslist";
import styles from "./page.module.css";
import { Card } from "@/components/element/card/Card";

export default function Home() {
    return (
        <div className={styles.page}>
            <div>
                <Contentslist text="自己紹介" more={false}>
                    <Card text="About me" url="aboutme" />
                    <Card text="Skills" url="skills" />
                    <Card
                        text="Products"
                        url="products"
                        color="var(--color-product-green)"
                    />
                    <Card
                        text="Awards"
                        url="awards"
                        color="var(--color-award)"
                    />
                </Contentslist>
                <Contentslist text="ブログ" more={true}>
                    <Card text="About me" url="aboutme" />
                    <Card text="About me" url="aboutme" />
                    <Card text="About me" url="aboutme" />
                    <Card text="About me" url="aboutme" />
                </Contentslist>
            </div>
        </div>
    );
}
