"use client"

import Image from "next/image";
import poorfood from "./../../public/poorfood.jpg";
import poordisabled from "./../../public/poordisabled.jpg";
import educationchild from "./../../public/educationchild.jpg";
import problem from "./../../public/problem.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import Ourmissionslider from "@/secondcomponent/ourmissionslider";

export default function OurMissionComponent(){

  useEffect(() => {
    AOS.init();
  }, []);

    return(

        <>
        {/* <!-- component --> */}
<div className="relative m-10 h-auto  pt-10 sm:pt-0 ">
 
<div className="container m-10 mx-auto grid grid-cols-1 md:grid-cols-2 items-center md:gap-20 ">
<div  className="content">
    <div className="flex items-center gap-3 ">
      
      
    </div>
    <p className="text-[40px] lg:text-[45px] xl:text-[40px] font-bold leading-tight mt-5 sm:mt-0 font-tittle">
    No One Sleeps Hungry: Our Mission to Feed Every Soul in Need 
    </p>
    <p className="mt-5 md:text-md font-tittle">
    No One Sleeps Hungry encapsulates our unwavering commitment to eradicating hunger from every corner Our mission is clear to ensure that no soul goes to bed on an empty stomach Through dedicated efforts and community support we strive to provide nourishment and hope to those facing food insecurity one meal at a time Join us in our quest to create a world where hunger is but a distant memory and every individual is afforded the basic right to sustenance and dignity 
    </p>
   

  </div>
  <div className="relative sm:mt-0 mt-10 px-6 sm:px-0 relative">

    <Image className="w-[600px] animate__animated animate__fadeInRight animate__delay-.5s" src={poorfood} alt="food" />
  </div>
</div>


{/* second */}


<div data-aos="zoom-in" data-aos-duration="2000" className="container mt-52 mx-auto grid grid-cols-1 md:grid-cols-2 items-center md:gap-20 ">


<div  className="content">
    <div className="flex items-center gap-3">
      <hr className="w-10 bg-orange-500 border "/>
      {/* <span className="md:text-[18px] font-medium text-gray-800 ">
        UI/UX Designer  Developer 
      </span> */}
    </div>
    <p className="text-[40px] lg:text-[45px] xl:text-[40px] font-bold leading-tight mt-5 sm:mt-0 font-tittle">
    Empowering Every Ability: Lighting the Path for Disabled Lives 
    </p>
    <p className="mt-5 md:text-md font-tittle">
    Empowering Every Ability embodies our dedication to fostering inclusivity and empowerment for individuals of all abilities By lighting the path for disabled lives we aim to break down barriers and create opportunities for growth and fulfillment Through advocacy support and community engagement we strive to build a world where every person regardless of ability is empowered to thrive and contribute their unique gifts to society Join us as we champion equality and celebrate the diversity of human potential
    </p>
    <div className="flex gap-4 mt-10">
   
    {/* <button className="font-medium text-[16px] flex items-center px-5 py-3 md:py-4 md:px-8 rounded-xl capitalize bg-gradient-to-r from-orange-300 to-orange-500 hover:from-pink-500 hover:to-yellow-500  relative gap-2 transition duration-300 hover:scale-105 text-white shadow-glass ">Get In Touch
      <span className="animate-ping absolute right-0 top-0 w-3 h-3  rounded-full bg-gradient-to-r from-orange -400 to-orange-700 "></span>
     </button> */}
     {/* <RiFacebookFill className=""/> */}
     {/* <SiBehance/> */}
    </div>

  </div>
  <div className="relative sm:mt-0 mt-10 px-6 sm:px-0 relative">

<Image className="w-[600px] animate__animated animate__fadeInRight animate__delay-.5s" src={poordisabled} alt="poorpeople" />
</div>
</div>


{/* three */}

<div data-aos="zoom-in" data-aos-duration="2000" className="container mt-52 mx-auto grid grid-cols-1 md:grid-cols-2 items-center md:gap-20 ">
<div
      className="content"
    >
    <div className="flex items-center gap-3">
      <hr className="w-10 bg-orange-500 border "/>
      {/* <span className="md:text-[18px] font-medium text-gray-800 ">
        UI/UX Designer  Developer 
      </span> */}
    </div>
    <p className="text-[40px] lg:text-[45px] xl:text-[40px] font-bold leading-tight mt-5 sm:mt-0 font-tittle">
     Building Brighter Futures: Educating Underprivileged and Orphaned Children with Compassion and Care 
    </p>
    <p className="mt-5 md:text-md font-tittle">
    Building Brighter Futures is our guiding principle as we strive to provide education to underprivileged and orphaned children With compassion and care at the forefront we aim to create a nurturing environment where every child can thrive academically and emotionally Through our dedicated efforts we seek to break the cycle of poverty and empower these children to create a brighter future for themselves and their communities Join us in our mission to unlock the potential of every child one classroom at a time
    </p>
    <div className="flex gap-4 mt-10">
   
    {/* <button className="font-medium text-[16px] flex items-center px-5 py-3 md:py-4 md:px-8 rounded-xl capitalize bg-gradient-to-r from-orange-300 to-orange-500 hover:from-pink-500 hover:to-yellow-500  relative gap-2 transition duration-300 hover:scale-105 text-white shadow-glass ">Get In Touch
      <span className="animate-ping absolute right-0 top-0 w-3 h-3  rounded-full bg-gradient-to-r from-orange -400 to-orange-700 "></span>
     </button> */}
     {/* <RiFacebookFill className=""/> */}
     {/* <SiBehance/> */}
    </div>

  </div>
  <div className="relative sm:mt-0 mt-10 px-6 sm:px-0 relative">

<Image className="w-[600px] animate__animated animate__fadeInRight animate__delay-.5s" src={educationchild} alt="education image" />
</div>
</div>



{/* four */}

<div data-aos="zoom-in" data-aos-duration="2000" className="container mt-52 mx-auto grid grid-cols-1 md:grid-cols-2 items-center md:gap-20 ">


<div
      className="content"
    >
    <div className="flex items-center gap-3">
      <hr className="w-10 bg-orange-500 border "/>
      {/* <span className="md:text-[18px] font-medium text-gray-800 ">
        UI/UX Designer  Developer 
      </span> */}
    </div>
    <p className="text-[40px] lg:text-[45px] xl:text-[40px] font-bold leading-tight mt-5 sm:mt-0 font-tittle">
    Guiding Hope: Advocating for Justice and Solutions in Times of Need 
    </p>
    <p className="mt-5 md:text-md font-tittle">
    Guiding Hope represents our commitment to advocating for justice and providing solutions during times of need With unwavering dedication we stand as a beacon of hope guiding individuals through the complexities of legal challenges and societal issues Through our advocacy efforts and community outreach we strive to bring about positive change and ensure that every voice is heard and every individual is treated with fairness and dignity Join us in our mission to create a more just and equitable world for all
    </p>
    <div className="flex gap-4 mt-10">
   
    {/* <button className="font-medium text-[16px] flex items-center px-5 py-3 md:py-4 md:px-8 rounded-xl capitalize bg-gradient-to-r from-orange-300 to-orange-500 hover:from-pink-500 hover:to-yellow-500  relative gap-2 transition duration-300 hover:scale-105 text-white shadow-glass ">Get In Touch
      <span className="animate-ping absolute right-0 top-0 w-3 h-3  rounded-full bg-gradient-to-r from-orange -400 to-orange-700 "></span>
     </button> */}
     {/* <RiFacebookFill className=""/> */}
     {/* <SiBehance/> */}
    </div>

  </div>
  <div className="relative sm:mt-0 mt-10 px-6 sm:px-0 relative">

<Image className="w-[600px] animate__animated animate__fadeInRight animate__delay-.5s" src={problem} alt="problem image" />
</div>
  
</div>



</div>
<Ourmissionslider/>
        
        </>
    )
}

