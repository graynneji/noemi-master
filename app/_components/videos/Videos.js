import Image from "next/image";
import styles from "./videos.module.css";
import video from "@/public/Contact us-min.webp";
import ImageContainer from "../imageContainer/ImageContainer";
export default function Videos() {
  return (
    <section>
      <div className={styles.videoTop} />
      <div className={styles.videoBottom}>
        <h1 className={styles.hOneV}>VIDEOS</h1>
        <div className={styles.videoGroup}>
          <ImageContainer type="videos">
            <Image src={video} className={styles.videoImage} fill alt="video" />
          </ImageContainer>
          <ImageContainer type="videos">
            <Image src={video} className={styles.videoImage} fill alt="video" />
          </ImageContainer>
        </div>
      </div>
    </section>
  );
}
