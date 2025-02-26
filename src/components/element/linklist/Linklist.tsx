import { ContactLink } from "../link/Link";
import { Contactstack } from "@/const/contactstack/Contactstack";
import styles from "./Linklist.module.scss";
export const Linklist = () => {
    return (
        <div className={styles.container}>
            {Contactstack.map((element, index) => {
                return <ContactLink key={index} contact={element} />;
            })}
        </div>
    );
};
