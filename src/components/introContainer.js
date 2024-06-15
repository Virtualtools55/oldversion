"use client";
import Image from "next/image";
import Medicalhelp from "./../../public/medicalhelp2.jpg";
import Educationalhelp from "./../../public/educationalhelp.jpg";
import Cleannature from "./../../public/cleanenvironment.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function IntroContainer({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <section className="text-gray-800 bg-white body-font overflod-x-hidden">
        <div className=" px-5 max-lg:py-12 py-24 mx-auto">
          <div className="flex flex-col">
            {/* line start */}

            {/* <div className="h-1 bg-gray-800 rounded overflow-hidden">
        <div className="w-24 h-96 bg-indigo-500"></div>
      </div> */}

            {/* line end */}

            {/* <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
        <h1 className="sm:w-2/5 text-white font-medium title-font text-2xl mb-2 sm:mb-0">Space The Final Frontier</h1>
        <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">Street art subway tile salvia four dollar toast bitters selfies quinoa yuccie synth meditation iPhone intelligentsia prism tofu. Viral gochujang bitters dreamcatcher.</p>
      </div> */}
          </div>
          <div className=" flex flex-wrap sm:-m-4 -mx-5 -mb-10 -mt-4">
            <div
              data-aos="zoom-in"
              data-aos-duration="1500"
              className="p-4 md:w-1/3 sm:mb-0 mb-6"
            >
              <div className="rounded-lg h-64 overflow-hidden relative">
                <Image src={Educationalhelp} fill={true} alt="educationimage" />
              </div>
              <h2 className="text-xl font-medium  text-black mt-5 font-tittle">
                Educational empowerment
              </h2>
              <p className="text-base leading-relaxed mt-2 font-tittle font-normal">
                Our mission focuses on empowering impoverished children through
                education breaking barriers and providing quality learning
                opportunities Together we aim to break the cycle of poverty
                and create a more equitable society where every child has the
                opportunity to learn and thrive
              </p>
              {/* <a className="text-indigo-400 inline-flex items-center mt-3">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a> */}
            </div>
            <div
              data-aos="zoom-in"
              data-aos-duration="1500"
              className="p-4 md:w-1/3 sm:mb-0 mb-6 "
            >
              <div className="rounded-lg h-64 max-lg:mt-6 overflow-hidden relative">
                <Image src={Cleannature} fill={true} alt="nature" />{" "}
              </div>
              <h2 className="text-xl font-medium  text-black mt-5 font-tittle">
                Preserving Tomorrow
              </h2>
              <p className="text-base leading-relaxed mt-2 font-tittle font-normal">
                Our foundation is dedicated to fostering a clean environment and
                striving for a pollution-free world Through collaborative
                efforts and sustainable initiatives, we aim to preserve our
                planet for future generations write a beautifull heading for
                this paragraph{" "}
              </p>
              {/* <a className="text-indigo-400 inline-flex items-center mt-3">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a> */}
            </div>
            <div
              data-aos="zoom-in"
              data-aos-duration="1500"
              className="p-4 md:w-1/3 sm:mb-0 mb-6"
            >
              <div className="rounded-lg h-64 max-lg:mt-6 overflow-hidden relative ">
                <Image src={Medicalhelp} fill={true} alt="medical image" />
              </div>
              <h2 className="text-xl font-medium  text-black mt-5 font-tittle">
                Medical helps
              </h2>
              <p className="text-base leading-relaxed mt-2 font-tittle font-normal">
                Meera Foundation Bridging gaps in healthcare access providing
                medical assistance with care and compassion Empowering lives
                through vital support ensuring no one faces medical challenges
                alone
              </p>
              {/* <a className="text-indigo-400 inline-flex items-center mt-3">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
