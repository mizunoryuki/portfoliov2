import { Awardstack } from "@/const/award-stack/award-stack";

import { Award } from "../award/award";
import styles from "./award-list.module.scss";

export const Awardlist = () => {
  return (
    <div className={styles.awards}>
      {Awardstack.map((element, index) => {
        return <Award key={index} award={element} />;
      })}
    </div>
  );
};
