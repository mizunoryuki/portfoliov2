import { FaXTwitter } from "react-icons/fa6";
import styles from "./Header.module.scss";
import { IoLogoInstagram } from "react-icons/io";
import { FiGithub } from "react-icons/fi";
import { BsList } from "react-icons/bs";
import { RiCloseFill } from "react-icons/ri";
import Link from "next/link";

export const Header = () => {
    return (
        <div className={styles.headerbox}>
            <h1>mimimimimimi</h1>
            <div className={styles.linkbox}>
                <div className={styles.icon}>
                    <FaXTwitter size={20} />
                </div>
                <div className={styles.icon}>
                    <IoLogoInstagram size={25} />
                </div>
                <div className={styles.icon}>
                    <FiGithub size={20} />
                </div>
                <div className={styles.menu}>
                    <input
                        id="input"
                        className={styles.checkbox}
                        type="checkbox"
                    />
                    <label htmlFor="input" className={styles.logo}>
                        <BsList size={25} className={styles.logoOpen} />
                        <RiCloseFill size={25} className={styles.logoClose} />
                    </label>
                    <nav className={styles.nav}>
                        <ul className={styles.ul}>
                            <li>
                                <Link href={"/"}>Top</Link>
                            </li>
                            <li>
                                <Link href={"/"}>Aboutme</Link>
                            </li>
                            <li>
                                <Link href={"/skills"}>Skills</Link>
                            </li>
                            <li>
                                <Link href={"/"}>Products</Link>
                            </li>
                            <li>
                                <Link href={"/"}>Awards</Link>
                            </li>
                            <li>
                                <Link href={"/"}>Hobby</Link>
                            </li>
                            <li>
                                <Link href={"/"}>Contact</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};
