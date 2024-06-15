"use client"
import Image from "next/image";
import farmer from "./../../../public/farmer.jpg";
import financial from "./../../../public/financialhelp.jpg";



import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function FourBoxSection(){

  useEffect(() => {
    AOS.init();
  }, []);

return(

    <>
    <section className="w-full mx-auto py-10 bg-gray-50  ">
    {/* <div className="w-fit pb-1 px-2 mx-4 rounded-md text-2xl font-semibold border-b-2 border-blue-600 dark:border-b-2 dark:border-yellow-600">Services</div> */}

    <div className="xl:w-[65%] sm:w-[80%] xs:w-[90%] mx-auto flex max-md:flex-col  lg:flex-row max-sm:flex-col lg:gap-4 xs:gap-2 justify-center lg:items-stretch md:items-center mt-4">
      <div data-aos="fade-right" data-aos-duration="1500" className="lg:w-[50%] xs:w-full relative">
        <Image 
        className="lg:rounded-t-lg sm:rounded-sm xs:rounded-sm" 
        src={farmer}
        fill={true}
        alt="farmer image" />
      </div>
      <div data-aos="fade-right" data-aos-duration="1500" className="lg:w-[50%] sm:w-full xs:w-full bg-gray-100  md:p-4 xs:p-0 rounded-md">
        <h2 className="text-3xl font-semibold text-gray-900 max-lg:m-4 font-tittle">Empowering Farmers through Meera Foundation</h2>
        <p className="text-md mt-4 max-lg:m-4 font-tittle">Meera Foundation stands by the side of struggling farmers providing essential resources agricultural training and financial support to help them overcome challenges and thrive With our commitment to sustainable farming practices and community empowerment we aim to uplift rural communities and ensure a brighter future for farmers and their families Together we sow the seeds of hope and resilience cultivating a stronger agricultural landscape for generations to come</p>
      </div>
    </div>
    {/* <!-- col-2 --> */}
    <div className="xl:w-[65%] sm:w-[80%] xs:w-[90%] mx-auto flex max-md:flex-col max-sm:flex-col lg:flex-row lg:gap-4 xs:gap-2 justify-center lg:items-stretch md:items-center mt-6">
      
      <div data-aos="fade-left" data-aos-duration="1500" className="md:block sm:block lg:hidden xs:w-full relative">
      <Image 
        className="lg:rounded-t-lg sm:rounded-sm xs:rounded-sm" 
        src={financial}
        fill={true}
        alt="financial help image" />
      
      </div>
  
      <div data-aos="fade-left" data-aos-duration="1500" className="lg:w-[50%] xs:w-full bg-gray-100   md:p-4 xs:p-0 rounded-md">
        <h2 className="text-3xl font-semibold text-gray-900 max-lg:m-4 font-tittle">Alleviating Financial Struggles: Meera Foundations Commitment to the Poor</h2>

        <p className="text-md mt-4 max-lg:m-4 font-tittle">Meera Foundation extends a compassionate hand to those grappling with financial hardships offering support resources and guidance to uplift them from the depths of poverty Through our various programs and initiatives we strive to provide a lifeline to individuals and families facing economic challenges empowering them to break free from the cycle of poverty and build a brighter future With empathy and determination we stand as a beacon of hope illuminating the path towards economic stability and self-reliance</p>
      </div>

      <div data-aos="fade-left" data-aos-duration="1500" className="md:hidden max-sm:hidden lg:block  lg:w-[50%] xs:w-full relative">
      <Image 
        className="lg:rounded-t-lg sm:rounded-sm xs:rounded-sm " 
        src={financial}
        fill={true}
        alt="financial help image" />
      </div>
    </div>
  </section>


    
    </>
)
}