import styles from "./Title.module.scss";

interface Props {
    text: string;
    color?: string;
}

export const Title = ({ text, color = "gray" }: Props) => {
    return (
        <div className={styles.titleContainer}>
            <h1>{text}</h1>
            <div style={{ backgroundColor: color }}></div>
        </div>
    );
};
