import { ReactNode } from "react";
import {
    SiC,
    SiCanva,
    SiCloudflarepages,
    SiCss3,
    SiFlask,
    SiHtml5,
    SiJavascript,
    SiNextdotjs,
    SiReact,
    SiStyledcomponents,
    SiTypescript,
} from "react-icons/si";
import {
    FaFigma,
    FaGitAlt,
    FaGithub,
    FaJava,
    FaMarkdown,
    FaNodeJs,
    FaPython,
} from "react-icons/fa6";
import { BsFiletypeScss } from "react-icons/bs";

export interface SkillItem {
    heading: string;
    icons: ReactNode[];
}

const sizenum: number = 70;

export const skillData: SkillItem[] = [
    {
        heading: "Frontend",
        icons: [
            <SiHtml5 key="html5" size={sizenum} />,
            <SiCss3 key="css3" size={sizenum} />,
            <SiJavascript key="javascript" size={sizenum} />,
            <SiTypescript key="typescript" size={sizenum} />,
            <FaNodeJs key="nodejs" size={sizenum} />,
            <SiReact key="react" size={sizenum} />,
            <SiNextdotjs key="nextjs" size={sizenum} />,
            <BsFiletypeScss key="scss" size={sizenum} />,
            <SiStyledcomponents key="styledcomponents" size={sizenum} />,
        ],
    },
    {
        heading: "Backend",
        icons: [
            <FaPython key="python" size={sizenum} />,
            <SiFlask key="flask" size={sizenum} />,
        ],
    },
    {
        heading: "Tools",
        icons: [
            <FaGithub key="github" size={sizenum} />,
            <FaFigma key="figma" size={sizenum} />,
            <SiCanva key="canva" size={sizenum} />,
            <SiCloudflarepages key="cloudflarepages" size={sizenum} />,
        ],
    },
    {
        heading: "Others",
        icons: [
            <FaJava key="java" size={sizenum} />,
            <FaGitAlt key="git" size={sizenum} />,
            <SiC key="c" size={sizenum} />,
            <FaMarkdown key="markdown" size={sizenum} />,
        ],
    },
];
