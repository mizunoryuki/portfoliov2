import { Title } from "@/components/element/title/Title";
import styles from "./page.module.scss";
export default function Page() {
    return (
        <div className={styles.page}>
            <Title text="Skills" color="#C5BAFF" />
        </div>
    );
}
