import { Skilllist } from "@/components/element/skill-list/skill-list";
import { Title } from "@/components/element/title/title";
import { skillData } from "@/const/skill-stack/skill-stack";

import styles from "./page.module.scss";

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
