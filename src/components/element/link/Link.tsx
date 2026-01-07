import Link from "next/link";

import type { ContactProps } from "@/types/contact";

import styles from "./Link.module.scss";

export const ContactLink = ({ contact }: ContactProps) => {
  if (contact.name !== "E-mail") {
    return (
      <Link
        href={`${contact.url}`}
        rel="noopener noreferrer"
        target="_blank"
        className={styles.linkBox}
      >
        <p>{contact.name}</p>
        {contact.icon}
        <p>{contact.id}</p>
      </Link>
    );
  } else {
    return (
      <div className={styles.linkBox}>
        <p>{contact.name}</p>
        {contact.icon}
        <p>{contact.url}</p>
      </div>
    );
  }
};
