import styles from "./Title.module.scss";
import { TitleProps } from "@/types/global";

export const Title = ({ text, color = "gray" }: TitleProps) => {
  return (
    <div className={styles.titleContainer}>
      <h1>{text}</h1>
      <div style={{ backgroundColor: color }}></div>
    </div>
  );
};
