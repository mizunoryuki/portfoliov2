import { ReactNode } from "react";
import styles from "./Skilllist.module.scss";

interface Props {
    heading: string; //スキルの分類を書くテキスト
    children: ReactNode; //
}

export const Skilllist: React.FC<Props> = ({ heading, children }) => {
    return (
        <div className={styles.listContainer}>
            <h2>{heading}</h2>
            <div className={styles.skillBox}>{children}</div>
        </div>
    );
};
