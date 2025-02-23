import { Contentslist } from "@/components/element/contentslist/Contentslist";
import styles from "./page.module.css";
import { Card } from "@/components/element/card/Card";

export default function Home() {
    return (
        <div className={styles.page}>
            <div>
                <Contentslist text="自己紹介" more={false}>
                    <Card text="About me" />
                    <Card text="Skills" />
                    <Card text="Products" />
                    <Card text="Awards" />
                </Contentslist>
                <Contentslist text="ブログ" more={true}>
                    <Card text="About me" />
                    <Card text="About me" />
                    <Card text="About me" />
                    <Card text="About me" />
                </Contentslist>
            </div>
        </div>
    );
}
