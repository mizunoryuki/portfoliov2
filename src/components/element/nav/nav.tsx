"use client";
import Link from "next/link";
import { useState } from "react";
import { BsList } from "react-icons/bs";
import { RiCloseFill } from "react-icons/ri";

import styles from "./nav.module.scss";

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
          <li>
            <Link href={"/"} onClick={handleOpenNav}>
              Top
            </Link>
          </li>
          <li>
            <Link href={"/aboutme"} onClick={handleOpenNav}>
              Aboutme
            </Link>
          </li>
          <li>
            <Link href={"/skills"} onClick={handleOpenNav}>
              Skills
            </Link>
          </li>
          <li>
            <Link href={"/blog"} onClick={handleOpenNav}>
              Blog
            </Link>
          </li>
          <li>
            <Link href={"/products"} onClick={handleOpenNav}>
              Products
            </Link>
          </li>
          <li>
            <Link href={"/awards"} onClick={handleOpenNav}>
              Awards
            </Link>
          </li>
          <li>
            <Link href={"/hobby"} onClick={handleOpenNav}>
              Hobby
            </Link>
          </li>
          <li>
            <Link href={"/contact"} onClick={handleOpenNav}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
