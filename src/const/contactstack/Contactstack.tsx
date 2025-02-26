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
        url: "https://x.com/Atui_yaroo",
        icon: <FaXTwitter key="twitter" size={sizenum} />,
    },
    {
        name: "Instagram",
        url: "https://instagram.com/pmrp_29/",
        icon: <IoLogoInstagram key="instagram" size={sizenum} />,
    },
    {
        name: "GitHub",
        url: "https://github.com/mizunoryuki",
        icon: <FiGithub key="github" size={sizenum} />,
    },
    {
        name: "E-mail",
        url: "mizunoryuki29@gmail.com",
        icon: <IoIosMail key="email" size={sizenum} />,
    },
];
