import Feature from "./_components/feature/Feature";
import Hero from "./_components/hero/Hero";
import Offer from "./_components/offer/Offer";
import image from "@/public/Landing page picture-min.webp";
import heroImage from "@/public/logoAC_colorblocknew.png";
import AboutUs from "./_components/aboutus/AboutUs";
import Founder from "./_components/founder/Founder";
import aboutImage from "@/public/About US-min.webp";
import Trapezium from "./_components/trapezium/Trapezium";
import Services from "./_components/services/Services";
import leaveImage from "@/public/leaves the number to us-min.webp";
import image2 from "@/public/logoAC_colorOfficielgrey.png";
import ContactForm from "./_components/contactForm/ContactForm";
import contact from "@/public/Contact us-min.webp";

const text = {
  head: "Leave the Numbers to us",
  sub: "Explore different service options",
};

export default function Page() {
  return (
    <>
      <section id="#" style={{ marginBottom: "9rem" }}>
        <Hero src={image} image={heroImage} />
        <Feature type="home">Where expertise meets empathy</Feature>
        <Offer />
      </section>

      <section id="about" style={{ marginBottom: "9rem" }}>
        <Hero src={aboutImage} name="ABOUT US" />
        <Feature type="about">
          <AboutUs />
        </Feature>
        <Founder />
      </section>

      <section id="services" style={{ marginBottom: "9rem" }}>
        <Hero src={leaveImage} image={image2} text={text} />
        <Trapezium />
        <Services />
      </section>

      <section id="contact" style={{ marginBottom: "9rem" }}>
        <Hero src={contact} name="CONTACT" />
        <ContactForm />
      </section>
    </>
  );
}
