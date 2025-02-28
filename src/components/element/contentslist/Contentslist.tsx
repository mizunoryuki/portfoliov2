"use client";
import { FaArrowAltCircleRight } from "react-icons/fa";
import styles from "./Contentslist.module.scss";
import { ContentsList } from "@/types/top";

export const Contentslist: React.FC<ContentsList> = ({
    text,
    more,
    children,
}) => {
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
