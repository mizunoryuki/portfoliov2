import { History } from "../history/History";
import { Historystack } from "@/const/historystack/Historystack";
import styles from "./History.module.scss";
export const Historylist = () => {
  return (
    <>
      <div className={styles.container}>
        {Historystack.map((value, index) => {
          return (
            <History
              key={index}
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
