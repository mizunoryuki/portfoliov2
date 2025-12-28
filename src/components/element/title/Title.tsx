import type { TitleProps } from "@/types/global";

import styles from "./Title.module.scss";

export const Title = ({ text, color = "gray" }: TitleProps) => {
  return (
    <div className={styles.titleContainer}>
      <h1>{text}</h1>
      <div style={{ backgroundColor: color }} />
    </div>
  );
};
