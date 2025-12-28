import { Awardstack } from "@/const/awardstack/Awardstack";

import { Award } from "../award/Award";
import styles from "./Awardlist.module.scss";

export const Awardlist = () => {
  return (
    <div className={styles.awards}>
      {Awardstack.map((element, index) => {
        return <Award key={index} award={element} />;
      })}
    </div>
  );
};
