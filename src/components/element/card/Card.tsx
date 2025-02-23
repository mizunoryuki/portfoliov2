import { IoMdArrowRoundForward } from "react-icons/io";
import styles from "./Card.module.scss";
import Link from "next/link";

interface Props {
    text: string;
    url: string;
}
export const Card = ({ text, url }: Props) => {
    return (
        <div className={styles.cardBox}>
            <Link href={`/${url}`}>
                <div>
                    <p>{text}</p>
                    <IoMdArrowRoundForward size={15} />
                </div>
            </Link>
        </div>
    );
};
