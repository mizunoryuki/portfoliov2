import { IoMdArrowRoundForward } from "react-icons/io";
import styles from "./Card.module.scss";
import Link from "next/link";
import { Content } from "@/types/top";

export const Card = ({ text, url, color = "var(--background-2)" }: Content) => {
    return (
        <Link href={`/${url}`} className={styles.cardBox}>
            <div className={styles.image}></div>
            <div className={styles.textContainer}>
                <p>{text}</p>
                <IoMdArrowRoundForward size={15} />
            </div>
            <div
                className={styles.circle}
                style={{
                    backgroundColor: color,
                }}
            ></div>
        </Link>
    );
};
