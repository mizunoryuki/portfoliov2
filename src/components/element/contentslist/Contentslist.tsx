"use client";
import { FaArrowAltCircleRight } from "react-icons/fa";
import styles from "./Contentslist.module.scss";
import { ContentsList } from "@/types/top";
import { useRouter } from "next/navigation";

export const Contentslist: React.FC<ContentsList> = ({
  text,
  more = "",
  children,
}) => {
  const router = useRouter();
  return (
    <div className={styles.box}>
      <h2
        style={{
          marginBottom: more === "" ? "30px" : "",
        }}
      >
        {text}
      </h2>
      {more !== "" ? (
        <button
          className={styles.more}
          onClick={() => router.push(`/${more.toLowerCase()}`)}
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
