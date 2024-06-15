"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import firstslide1 from "./../../../public/frontslide1.jpg";
import firstslide2 from "./../../../public/frontslide2.png";
// import firstslide3 from "./../../../public/frontslide3.png";
import firstslide4 from "./../../../public/frontslide4.png";
import firstslide5 from "./../../../public/frontslide5.png";
import firstslide6 from "./../../../public/frontslide6.png";
// import firstslide7 from "./../../../public/frontslide7.png";
import firstslide8 from "./../../../public/frontslide8.png";
import firstslide9 from "./../../../public/frontslide9.png";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        slidesPerGroupSkip={1}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper h-[500px] w-screen max-md:h-[245px]"
        style={{
          '--swiper-navigation-color': '#27AB61', // Replace with your color
        }}
      >
        <SwiperSlide className="h-[500px] w-screen max-md:h-[240px]  ">
        <Image src={firstslide1} alt="slideimg1" fill={true} />
        </SwiperSlide>
        <SwiperSlide className="h-[500px] w-screen max-md:h-[240px] ">
          
          <Image src={firstslide2} alt="slideimg2" fill={true} />
        </SwiperSlide>
        {/* <SwiperSlide className="h-[450px] w-screen max-md:h-[240px] bg-yellow-500">
          {" "}
          <Image src={firstslide3} fill={true} />
        </SwiperSlide> */}
        <SwiperSlide className="h-[500px] w-screen max-md:h-[240px] ">
          <Image src={firstslide4} fill={true} alt="slideimg3"/>
        </SwiperSlide>
        <SwiperSlide className="h-[500px] w-screen max-md:h-[240px] ">
          <Image src={firstslide5} fill={true} alt="slideimg5"/>
        </SwiperSlide>
        <SwiperSlide className="h-[500px] w-screen max-md:h-[240px] ">
          <Image src={firstslide6} fill={true} alt="slideimg6"/>
        </SwiperSlide>
        {/* <SwiperSlide className="h-[450px] w-screen max-md:h-[240px] bg-pink-500">
          <Image src={firstslide7} fill={true} />
        </SwiperSlide> */}
        <SwiperSlide className="h-[500px] w-screen max-md:h-[240px] ">
          <Image src={firstslide8} fill={true} alt="slideimg7"/>
        </SwiperSlide>
        <SwiperSlide className="h-[500px] w-screen max-md:h-[240px] ">
          <Image src={firstslide9} fill={true} alt="slideimg8"/>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
