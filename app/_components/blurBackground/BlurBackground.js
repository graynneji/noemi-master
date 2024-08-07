"use client";
import { useNavMenu } from "@/app/context/NavMenuContext";
import styles from "./blurBackground.module.css";

export default function BlurBackground() {
  const { open, toggleMenu } = useNavMenu();

  return (
    <div
      onClick={toggleMenu}
      className={`${styles.blur} ${!open && styles.open}`}
    ></div>
  );
}
