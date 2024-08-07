"use client";
import Link from "next/link";
import styles from "./mobileNavMenu.module.css";
import { useNavMenu, NavMenuProvider } from "@/app/context/NavMenuContext";
import { useEffect } from "react";

function MobileNavMenu() {
  const { open, toggleMenu } = useNavMenu();
  //   const handleClick = () => {
  //     setOpen(false);
  //     console.log(open);
  //   };
  //   useEffect(() => {
  //     console.log(open);
  //   }, [open]);
  //   console.log(open);
  return (
    <nav className={styles.mobileNav}>
      <ul className={styles.links}>
        <Link onClick={toggleMenu} href="#">
          <li className={styles.liLi}>HOME</li>
        </Link>
        <Link onClick={toggleMenu} href="#about">
          <li className={styles.liLi}>ABOUT</li>
        </Link>
        <Link onClick={toggleMenu} href="#services">
          <li className={styles.liLi}>SERVICES</li>
        </Link>
        <Link onClick={toggleMenu} href="#contact">
          <li className={styles.liLi}>CONTACT</li>
        </Link>
      </ul>
    </nav>
  );
}

export default MobileNavMenu;
