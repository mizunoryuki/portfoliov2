import { Title } from "@/components/element/title/Title";
import styles from "./page.module.scss";
import { Skilllist } from "@/components/element/skilllist/Skilllist";
import { skillData } from "@/const/skillstack/skillstack";
export default function Page() {
    return (
        <div className={styles.page}>
            <Title text="Skills" color="var(--background-3)" />
            {skillData.map((skill, index) => (
                <Skilllist key={index} heading={skill.heading}>
                    {skill.icons}
                </Skilllist>
            ))}
        </div>
    );
}
