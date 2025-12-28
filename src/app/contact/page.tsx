import { Linklist } from "@/components/element/linklist/Linklist";
import { Title } from "@/components/element/title/Title";

import styles from "./page.module.scss";

export default function Page() {
  return (
    <div>
      <Title text="Contact" color="var(--color-contact)" />
      <div className={styles.linkBox}>
        <Linklist />
      </div>
    </div>
  );
}
