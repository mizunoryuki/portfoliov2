import { IoMdArrowRoundForward } from "react-icons/io";
import styles from "./Card.module.scss";
import Link from "next/link";

interface Props {
    text: string;
    url: string;
}
export const Card = ({ text, url }: Props) => {
    return (
        <Link href={`/${url}`} className={styles.cardBox}>
            <div>
                <p>{text}</p>
                <IoMdArrowRoundForward size={15} />
            </div>
        </Link>
    );
};
