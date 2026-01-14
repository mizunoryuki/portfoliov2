import { Contactstack } from "@/const/contact-stack/contact-stack";

import { ContactLink } from "../link/link";
import styles from "./link-list.module.scss";

export const Linklist = () => {
  return (
    <div className={styles.container}>
      {Contactstack.map((element) => {
        return (
          <ContactLink
            key={`${element.name}-${element.id}`}
            contact={element}
          />
        );
      })}
    </div>
  );
};
