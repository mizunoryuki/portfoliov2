import styles from "./Award.module.scss";
import { AwardInfo } from "@/types/awards";

export const Award = ({ award }: AwardInfo) => {
  const { prize, tournament, date, name } = award;
  return (
    <div className={styles.awardContainer}>
      <div className={styles.borderBox}>
        <p>{prize}</p>
        <div>
          <p>{tournament}</p>
          <p>{date}</p>
        </div>
        <p>{name}</p>
      </div>
    </div>
  );
};
