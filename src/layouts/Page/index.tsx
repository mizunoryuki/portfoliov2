import type { ReactElement, ReactNode } from "react";

import { Header } from "@/components/global/Header";

import styles from "./index.module.scss";

type Props = {
  children: ReactNode;
};

export default function PageLayout(props: Props): ReactElement {
  const { children } = props;

  return (
    <>
      <Header />
      <main className={styles.main}>{children}</main>
    </>
  );
}
