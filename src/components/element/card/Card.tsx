import { IoMdArrowRoundForward } from "react-icons/io";
import styles from "./Card.module.scss";
import Link from "next/link";

interface Props {
    text: string;
    url: string;
    color?: string;
}
export const Card = ({ text, url, color = "var(--background-2)" }: Props) => {
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
