import { ReactNode } from "react";
import styles from "./Link.module.scss";
import Link from "next/link";
interface Contact {
    name: string;
    id: string;
    url: string;
    icon: ReactNode;
}

interface Props {
    contact: Contact;
}
export const ContactLink = ({ contact }: Props) => {
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
