import { ReactNode } from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { IoIosMail, IoLogoInstagram } from "react-icons/io";

interface Contact {
    name: string;
    id?: string;
    url: string;
    icon: ReactNode;
}

const sizenum = 70;

export const Contactstack: Contact[] = [
    {
        name: "X(Twitter)",
        id: "Atui_yaroo",
        url: "https://x.com/Atui_yaroo",
        icon: <FaXTwitter key="twitter" size={sizenum} />,
    },
    {
        name: "Instagram",
        id: "pmrp_29",
        url: "https://www.instagram.com/pmrp_29",
        icon: <IoLogoInstagram key="instagram" size={sizenum} />,
    },
    {
        name: "GitHub",
        id: "mizunoryuki",
        url: "https://github.com/mizunoryuki",
        icon: <FiGithub key="github" size={sizenum} />,
    },
    {
        name: "E-mail",
        url: "mizunoryuki29@gmail.com",
        icon: <IoIosMail key="email" size={sizenum} />,
    },
];
