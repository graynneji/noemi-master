import Navigation from "./_components/navigation/Navigation";
import "@/app/_styles/globalStyles.css";
// import { Montserrat } from "next/font/google";
import { Poppins } from "next/font/google";
import { NavMenuProvider, useNavMenu } from "./context/NavMenuContext";
import styles from "./layout.module.css";
import BlurBackground from "./_components/blurBackground/BlurBackground";
const poppins = Poppins({
  //subset if you using english its latin
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  // title: "The Wild Oasis",
  title: {
    template: "%s | A•ccontabilité",
    default: "A•ccontabilité",
  },
  description:
    "We are a boutique accounting firm looking to deliver accounting/bookkeeping on a personable level to small & medium business owners.",
  socialMedia: {
    og: {
      title: "A•ccontabilité",
      description:
        "We are a boutique accounting firm looking to deliver accounting/bookkeeping on a personable level to small & medium business owners.",
      image: "@/public/Financial.jpg",
    },
    twitter: {
      card: "summary_large_image",
      title: "A•ccontabilité",
      description:
        "We are a boutique accounting firm looking to deliver accounting/bookkeeping on a personable level to small & medium business owners.",
      image: "@/public/Financial.jpg",
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <NavMenuProvider>
        <body className={poppins.className}>
          <div className={styles.container}>
            <BlurBackground />
            {/* <div className="container"> */}
            <header>
              <Navigation />
            </header>
            <main>{children}</main>
            {/* <footer>copyright</footer> */}
          </div>
        </body>
      </NavMenuProvider>
    </html>
  );
}
