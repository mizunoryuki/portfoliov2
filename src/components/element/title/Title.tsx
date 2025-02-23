import styles from "./Title.module.scss";

interface Props {
    text: string;
    color: string;
}

export const Title = ({ text, color }: Props) => {
    return (
        <div className={styles.titleContainer}>
            <h1>{text}</h1>
            <div style={{ backgroundColor: color }}></div>
        </div>
    );
};
