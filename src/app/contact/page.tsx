import { Title } from "@/components/element/title/Title";
import styles from "./page.module.scss";
import { Linklist } from "@/components/element/linklist/Linklist";
export default function Page() {
    return (
        <div>
            <Title text="Contact" color="#2CD2BB" />
            <div className={styles.linkBox}>
                <Linklist />
            </div>
        </div>
    );
}
