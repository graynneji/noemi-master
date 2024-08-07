import Image from "next/image";
import ImageContainer from "../imageContainer/ImageContainer";
import styles from "./tutorialHead.module.css";
import tutorials from "@/public/Bookkeeping-min.webp";

export default function TutorialHead() {
  return (
    <section className={styles.tuthead}>
      {/* <ImageContainer type="tutorials"> */}
      <Image
        src={tutorials}
        placeholder="blur"
        className={styles.secondImage}
        // fill
        // style={{ width: "100%", height: "100%" }}
        // sizes="100vw"
        alt="Book keeping"
        quality={100}
        style={{
          // width: "100px",
          width: "300px",
          height: "450px",
          borderRadius: "200px",
          objectFit: "cover",
          position: "relative",
        }}
      />
      <div className={styles.triangle}></div>
      {/* <Image
          src={tutorials}
          placeholder="blur"
          className={styles.imgs}
          fill
          quality={100}
          alt="img3"
        /> */}

      {/* </ImageContainer> */}
      <div className={styles.flexing}>
        <div className={styles.hOne}>
          <h1>TUTORIALS</h1>
        </div>
        <span className={styles.tutSpan}>
          If you want to give accounting a try on your own or just educate
          yourself on the process, explore our tutorials below.
        </span>
      </div>
    </section>
  );
}
