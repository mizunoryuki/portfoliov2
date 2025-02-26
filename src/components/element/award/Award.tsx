import styles from "./Award.module.scss";

interface Props {
    prize: string;
    tournament: string;
    date: string;
    name: string;
}

interface Prop {
    award: Props;
}

export const Award = ({ award }: Prop) => {
    const { prize, tournament, date, name } = award;
    return (
        <div className={styles.awardContainer}>
            <div className={styles.borderBox}>
                <p>{prize}</p>
                <div>
                    <p>{tournament}</p>
                    <p>{date}</p>
                </div>
                <p>{name}</p>
            </div>
        </div>
    );
};
