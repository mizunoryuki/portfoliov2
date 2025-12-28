import type { ReactElement, ReactNode } from "react";
import styles from "./index.module.scss";
import { Header } from "@/components/global/Header";

interface Props {
  children: ReactNode;
}

export default function PageLayout(props: Props): ReactElement {
  const { children } = props;

  return (
    <>
      <Header />
      <main className={styles.main}>{children}</main>
    </>
  );
}
