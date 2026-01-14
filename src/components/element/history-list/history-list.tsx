import { Historystack } from "@/const/history-stack/history-stack";

import { History } from "../history/history";
import styles from "./history-list.module.scss";

export const Historylist = () => {
  return (
    <>
      <div className={styles.container}>
        {Historystack.map((value) => {
          const year = value.date.year;
          const month = value.date.month ?? 0;
          const day = value.date.day ?? 0;
          const key = `${year}-${month}-${day}-${value.title}`;
          return (
            <History
              key={key}
              date={value.date}
              title={value.title}
              content={value.content}
            />
          );
        })}
      </div>
      <div className={styles.messageContainer}>
        <h2 className={styles.message}>日々頑張って生きています</h2>
        <p className={styles.hide}>頑張っててえらい👏</p>
      </div>
    </>
  );
};
