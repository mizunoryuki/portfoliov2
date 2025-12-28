"use client";
import { useRouter } from "next/navigation";
import { IoArrowBack } from "react-icons/io5";
import styles from "./ArticleBackButton.module.scss";
export function ArticleBackButton() {
  const router = useRouter();
  return (
    <button
      type="button"
      onClick={() => router.push("/blog")}
      className={styles.button}
    >
      <div className={styles.icon}>
        <IoArrowBack size={20} />
      </div>
      記事一覧に戻る
    </button>
  );
}
