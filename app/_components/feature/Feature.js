import styles from "./feature.module.css";

const typeStyles = {
  about: styles.about,
  home: styles.home,
};
export default function Feature({ children, type }) {
  const className = typeStyles[type] || "";
  return (
    <section className={`${styles.feature} ${className}`}>{children}</section>
  );
}
