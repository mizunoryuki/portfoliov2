"use client";
import Link from "next/link";
import { BsList } from "react-icons/bs";
import { RiCloseFill } from "react-icons/ri";
import styles from "./Nav.module.scss";
import { useState } from "react";

export const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    //Navの開閉
    const handleOpenNav = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className={styles.menu}>
            <input
                id="input"
                className={styles.checkbox}
                type="checkbox"
                checked={isOpen}
                onChange={handleOpenNav}
            />
            <label htmlFor="input" className={styles.logo}>
                <BsList size={25} className={styles.logoOpen} />
                <RiCloseFill size={25} className={styles.logoClose} />
            </label>
            <nav className={styles.nav}>
                <ul className={styles.ul}>
                    <li onClick={handleOpenNav}>
                        <Link href={"/"}>Top</Link>
                    </li>
                    <li onClick={handleOpenNav}>
                        <Link href={"/aboutme"}>Aboutme</Link>
                    </li>
                    <li onClick={handleOpenNav}>
                        <Link href={"/skills"}>Skills</Link>
                    </li>
                    <li onClick={handleOpenNav}>
                        <Link href={"/blog"}>Blog</Link>
                    </li>
                    <li onClick={handleOpenNav}>
                        <Link href={"/products"}>Products</Link>
                    </li>
                    <li onClick={handleOpenNav}>
                        <Link href={"/awards"}>Awards</Link>
                    </li>
                    <li onClick={handleOpenNav}>
                        <Link href={"/hobby"}>Hobby</Link>
                    </li>
                    <li onClick={handleOpenNav}>
                        <Link href={"/contact"}>Contact</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};
