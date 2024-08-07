import Image from "next/image";
import styles from "./founder.module.css";
import profileImage from "@/public/Bookkeeping-min.webp";
import ImageContainer from "../imageContainer/ImageContainer";

export default function Founder() {
  return (
    <section className={styles.founderSection}>
      <figure className={styles.founderGroup}>
        <div className={styles.turn}>
          <span className={styles.founder}>FOUNDER</span>
        </div>

        <ImageContainer type="founder">
          <Image
            className={styles.founderImage}
            src={profileImage}
            fill
            layout="fill"
            placeholder="blur"
            alt="founder"
            quality={100}
          />
        </ImageContainer>
      </figure>
      <p className={styles.foundersText}>
        [PLACEHOLDER TEXT] This area is set for a quick bio about yourself. This
        could include your education, experience, skills, etc. This section can
        also be an introduction into how the business came to be, a quick
        synopsis/summary of your journey instead or all of these suggestions
        combined.
      </p>
    </section>
  );
}
