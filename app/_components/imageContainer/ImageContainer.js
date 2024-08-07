import styles from "./imageContainer.module.css";

const typeStyles = {
  tutorials: styles.tutorials,
  services: styles.services,
  videos: styles.videos,
  founder: styles.founder,
  home: styles.home,
};

export default function ImageContainer({ children, type }) {
  const className = typeStyles[type] || "";

  return (
    <figure className={`${styles.imageConatiner} ${className}`}>
      {children}
    </figure>
  );
}
