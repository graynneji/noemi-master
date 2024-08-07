import EducationText from "../_components/educationText/EducationText";
import Faq from "../_components/faq/Faq";
import Hero from "../_components/hero/Hero";
import educationImage from "@/public/2ND PICTURE HOME PAGE.jpg";
import { FaqProvider } from "../context/FaqContext";

export default function Page() {
  return (
    <>
      <Hero src={educationImage} guide={true} name="FAQ & EDUCATIONAL" />
      <EducationText />
      <FaqProvider>
        <Faq />
      </FaqProvider>
    </>
  );
}
