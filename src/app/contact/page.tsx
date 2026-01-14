import { Linklist } from "@/components/element/link-list/link-list";
import { Title } from "@/components/element/title/title";

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
