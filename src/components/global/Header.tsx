import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { IoLogoInstagram } from "react-icons/io";

import { Nav } from "../element/nav/Nav";
import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <div className={styles.headerbox}>
      <h1>mimimimimimi</h1>
      <div className={styles.linkbox}>
        <div className={styles.icon}>
          <Link
            href={"https://x.com/Atui_yaroo"}
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaXTwitter size={20} />
          </Link>
        </div>
        <div className={styles.icon}>
          <Link
            href={"https://www.instagram.com/pmrp_29/"}
            rel="noopener noreferrer"
            target="_blank"
          >
            <IoLogoInstagram size={25} />
          </Link>
        </div>
        <div className={styles.icon}>
          <Link
            href={"https://github.com/mizunoryuki"}
            rel="noopener noreferrer"
            target="_blank"
          >
            <FiGithub size={20} />
          </Link>
        </div>
        <Nav />
      </div>
    </div>
  );
};
