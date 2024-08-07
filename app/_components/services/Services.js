import Image from "next/image";
import styles from "./services.module.css";
import consulting from "@/public/ConsultingServices.jpg";
import financing from "@/public/Financial-min.webp";
import bookkeeping from "@/public/Bookkeepingservice.jpg";
import ImageContainer from "../imageContainer/ImageContainer";
import Button from "../button/Button";
export default function Services() {
  return (
    <section className={styles.servicesContainer}>
      {/* <div className={styles.hOneContainer}>
        <h1 className={styles.hOne}>Leave the numbers to us</h1>
      </div> */}
      {/* <div className={styles.hOneContainer}>
        <div className={styles.hhOne}>
          <h1 className={styles.hOne}>Leave the numbers to us</h1>
        </div>
        <div className={styles.hhThree}>
          <h3 className={styles.hThree}>
            Explore our different service options
          </h3>
        </div>
      </div> */}

      <p className={styles.servicesParah}>
        Big or small, we are ready to keep your accounting transition seamless.
        We offer a range of accounting services that are adaptable to your
        business needs. Our services include, and are not limited to:
      </p>
      <div className={styles.colImage}>
        <div className={styles.servicesBtn}>
          {/* <ImageContainer type="services"> */}
          <Image
            src={consulting}
            // placeholder="blur"
            className={styles.imgs}
            alt="img1"
            style={{
              // width: "100px",
              width: "290px",
              height: "420px",
              borderRadius: "200px",
              objectFit: "cover",
            }}
          />
          {/* </ImageContainer> */}
          {/* <ImageContainer type="services"> */}
          {/* <Image
            src={consulting}
            placeholder="blur"
            className={styles.imgs}
      
            quality={100}
            alt="img1"
            style={{ width: "54px", height: "300px" }}
          /> */}
          {/* </ImageContainer> */}
          <Button type="services">BOOKEEPING</Button>
        </div>
        <div className={styles.servicesBtn}>
          {/* <ImageContainer type="services"> */}
          <Image
            src={financing}
            placeholder="blur"
            className={styles.imgs}
            // fill
            quality={100}
            alt="img2"
            style={{
              // width: "100px",
              width: "300px",
              height: "400px",
              borderRadius: "200px",
              objectFit: "cover",
            }}
          />
          {/* </ImageContainer> */}
          <Button type="services">CONSULTING</Button>
        </div>
        <div className={styles.servicesBtn}>
          {/* <ImageContainer type="services"> */}
          <Image
            src={bookkeeping}
            placeholder="blur"
            className={styles.imgs}
            // fill
            quality={100}
            alt="img3"
            style={{
              // width: "100px",
              maxWidth: "100%",
              width: "300px",
              height: "400px",
              borderRadius: "200px",
              objectFit: "cover",
            }}
          />
          {/* </ImageContainer> */}
          <Button type="services">FINANCIAL</Button>
        </div>
      </div>
    </section>
  );
}
