"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "./navigation.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import {
  NavMenuProvider,
  useNav,
  useNavMenu,
} from "@/app/context/NavMenuContext";
import MobileNavMenu from "../mobileNavMenu/MobileNavMenu";

export default function Navigation() {
  const { open, toggleMenu } = useNavMenu();
  console.log(open);

  return (
    <>
      {open && <MobileNavMenu />}
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <Image
            src="/logoAC.png"
            height={23}
            width={15.7}
            quality={100}
            className={styles.imges}
            alt="Logo Accountibility"
          />
          <Image
            src="/logoTEXTnew_bleu.png"
            height={12}
            width={100}
            alt="logo text"
            className={styles.imges}
            quality={100}
            // style={{ width: "100%" }}
          />
        </div>
        <ul className={styles.links}>
          <Link href="#">
            <li>HOME</li>
          </Link>
          <Link href="#about">
            <li>ABOUT</li>
          </Link>
          <Link href="#services">
            <li>SERVICES</li>
          </Link>
          <Link href="#contact">
            <li>CONTACT</li>
          </Link>
        </ul>

        {!open ? (
          <GiHamburgerMenu
            className={styles.mobileMenu}
            // onClick={() => setOpen(!open)}
            onClick={toggleMenu}
          />
        ) : (
          <GrClose
            className={styles.mobileMenu}
            // onClick={() => setOpen(!open)}
            onClick={toggleMenu}
          />
        )}
      </nav>
    </>
  );
}
