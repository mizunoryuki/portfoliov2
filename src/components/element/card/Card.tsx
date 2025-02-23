import { IoMdArrowRoundForward } from "react-icons/io";
import styles from "./Card.module.scss";

interface Props {
    text: string;
}
export const Card = ({ text }: Props) => {
    return (
        <div className={styles.cardBox}>
            <div>
                <p>{text}</p>
                <IoMdArrowRoundForward size={15} />
            </div>
        </div>
    );
};
