import { ReactNode } from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { IoIosMail, IoLogoInstagram } from "react-icons/io";

interface Contact {
    name: string;
    url: string;
    icon: ReactNode;
}

const sizenum = 70;

export const Contactstack: Contact[] = [
    {
        name: "X(Twitter)",
        url: "Atui_yaroo",
        icon: <FaXTwitter key="twitter" size={sizenum} />,
    },
    {
        name: "Instagram",
        url: "pmrp_29",
        icon: <IoLogoInstagram key="instagram" size={sizenum} />,
    },
    {
        name: "GitHub",
        url: "mizunoryuki",
        icon: <FiGithub key="github" size={sizenum} />,
    },
    {
        name: "E-mail",
        url: "mizunoryuki29@gmail.com",
        icon: <IoIosMail key="email" size={sizenum} />,
    },
];
