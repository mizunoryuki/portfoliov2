"use client";
import { FaArrowAltCircleRight } from "react-icons/fa";
import styles from "./Contentslist.module.scss";

interface Props {
    text: string;
    more: boolean;
    children: React.ReactNode;
}
export const Contentslist: React.FC<Props> = ({ text, more, children }) => {
    return (
        <div className={styles.box}>
            <h2
                style={{
                    marginBottom: more === false ? "30px" : "",
                }}
            >
                {text}
            </h2>
            {more === true ? (
                <button
                    className={styles.more}
                    onClick={() => console.log("click")}
                >
                    <p>more</p>
                    <FaArrowAltCircleRight size={15} />
                </button>
            ) : (
                <></>
            )}
            <div className={styles.boxCards}>{children}</div>
        </div>
    );
};
