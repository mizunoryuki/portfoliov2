import type { Historyinfo } from "@/types/history";

import styles from "./History.module.scss";

export const History = ({ date, title, content }: Historyinfo) => {
  return (
    <div className={styles.container}>
      <div className={styles.border} />
      <div className={styles.content}>
        <div className={styles.left}>
          <p>
            <span>{date.year}</span>
            {date.month}
            {date.day ? `.${date.day}` : ""}
          </p>
        </div>
        <div className={styles.right}>
          <h2>{title}</h2>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};
