import type { AwardInfo } from "@/types/awards";

import styles from "./award.module.scss";

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
