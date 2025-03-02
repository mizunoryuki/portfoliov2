import { Contentslist } from "@/components/element/contentslist/Contentslist";
import styles from "./page.module.css";
import { Card } from "@/components/element/card/Card";
import { Top } from "@/components/element/top/Top";

export default function Home() {
    return (
        <div className={styles.page}>
            <Top />
            <div>
                <Contentslist text="自己紹介" more={false}>
                    <Card
                        text="About me"
                        url="aboutme"
                        color="var(--color-aboutme)"
                    />
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
                    <Card text="coming soon" url="" />
                    <Card text="coming soon" url="" />
                    <Card text="coming soon" url="" />
                    <Card text="coming soon" url="" />
                </Contentslist>
            </div>
        </div>
    );
}
