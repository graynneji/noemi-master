import Image from "next/image";
import second from "@/public/2ND PICTURE HOME PAGE-min.webp";
import styles from "./offer.module.css";
import ImageContainer from "../imageContainer/ImageContainer";
import Button from "../button/Button";

export default function Offer() {
  return (
    <section className={styles.offerSection}>
      <div className={styles.offerText}>
        <p>
          We are a boutique accounting firm looking to deliver
          accounting/bookkeeping on a personable level to small & medium
          business owners. Our goal is to empower owners to achieve financial
          clarity, growth, and peace of mind.
        </p>
        <Button type="offer"></Button>
      </div>
      {/* <div className={styles.imaageContainer}> */}
      {/* <ImageContainer type="home"> */}
      {/* <div
        style={{
          width: "460px",
          height: "480px",
          maxWidth: "100%",
          alignSelf: "center",
          justifySelf: "center",
        }}
      > */}
      <Image
        src={second}
        placeholder="blur"
        className={styles.secondImage}
        // fill
        // style={{ width: "100%", height: "100%" }}
        // sizes="100vw"
        alt="Book keeping"
        quality={100}
        style={{
          width: "460px",
          height: "480px",
          maxWidth: "100%",
          alignSelf: "center",
          justifySelf: "center",
          // width: "100%",
          // height: "100%",
          borderRadius: "170px",
          objectFit: "cover",
        }}
      />
      {/* </div> */}
      {/* </ImageContainer> */}
      {/* </div> */}
    </section>
  );
}
