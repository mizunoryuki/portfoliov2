import Link from "next/link";
import { IoMdArrowRoundForward } from "react-icons/io";

import type { Content } from "@/types/top";

import styles from "./Card.module.scss";

export const Card = ({ text, url, color = "var(--background-2)" }: Content) => {
  return (
    <Link href={`/${url}`} className={styles.cardBox}>
      <div className={styles.image} />
      <div className={styles.textContainer}>
        <p>{text}</p>
        <IoMdArrowRoundForward size={15} />
      </div>
      <div
        className={styles.circle}
        style={{
          backgroundColor: color,
        }}
       />
    </Link>
  );
};
