import { BsGear } from "react-icons/bs";
import styles from "./Top.module.scss";
export const Top = () => {
    return (
        <div className={styles.container}>
            <BsGear size={70} className={styles.centerImage} />
            <h2 className={styles.textleft}>mimimimimimi</h2>
            <h2 className={styles.textright}>portfolio</h2>
        </div>
    );
};
