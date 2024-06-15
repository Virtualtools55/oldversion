"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';
import upone from "./../../public/upemotionone.jpg";
import uptwo from "./../../public/upemotiontwo.jpg";
import upthree from "./../../public/upemotionthree.jpg";


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// import { imageOptimizer } from 'next/dist/server/image-optimizer';

export default function DownToUp() {
  return (
    <>
      <Swiper
        direction={'vertical'}
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        speed={1100}
        
       
        pagination={{
          clickable: true,
        }}
        
       
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper h-screen w-screen bg-red-5000 max-md:h-[320px] pointer"
        style={{
          '--swiper-navigation-color': '#27AB61', // Replace with your color
        }}
      >
        <SwiperSlide className='h-screen w-screen bg-yellow-500 relative '>
          <Image
          src={upone}
          fill={true}
          alt='emotion1'
          />
        </SwiperSlide>
        <SwiperSlide className='h-screen w-screen bg-blue-500'> 
        <Image
          src={uptwo}
          fill={true}
          alt='emotion2'
          />
        </SwiperSlide>
        <SwiperSlide className='h-screen w-screen bg-green-500'>
        <Image
          src={upthree}
          fill={true}
          alt='emotion3'
          />
        </SwiperSlide>
        
      </Swiper>
    </>
  );
}
