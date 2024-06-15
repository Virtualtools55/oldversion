import Image from "next/image";
import { Inter } from "next/font/google";
import IntroContainer from "@/components/introContainer";
import App from "@/components/Swiper";
import IntroBigBanner from "@/components/introBigBanner";
import FourBoxSection from "@/components/fourBoxSection";
import DownToUp from "@/components/downtoup";
import HeroWithImage from "@/components/heroWithImage";
import TestiMonials from "@/components/testimonials";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`${inter.className}`} >
        <App/>
     <IntroContainer/>
     <IntroBigBanner/>
     <FourBoxSection/>
     <DownToUp/>
     <HeroWithImage/>
     <TestiMonials/>
    </main>
  );
}
