"use client"
import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css/bundle';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


import boyreview1 from "./../../public/boyreview1.png"
import boyreview2 from "./../../public/boyreview2.png"
import boyreview3 from "./../../public/boyreview3.png"
import boyreview4 from "./../../public/boyreview4.png"
import boyreview5 from "./../../public/boyreview5.png"
import boyreview6 from "./../../public/boyreview6.png"

import girlreview1 from "./../../public/girlreview1.png"
import girlreview2 from "./../../public/girlreview2.png"
import laddyreview1 from "./../../public/laddyreview1.png"


// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination,Autoplay } from 'swiper/modules';

export default function Ourmissionslider() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        centeredSlides={false}
        slidesPerGroupSkip={1}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          769: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
        }}

        autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          loop={true}
          speed={1050}
        navigation={true}
       
        modules={[Keyboard, Scrollbar, Navigation, Pagination,Autoplay]}
        className="mySwiper"
        style={{
            '--swiper-navigation-color': '#27AB61', // Replace with your color
          }}
      >
        <SwiperSlide>
        <div class="min-w-screen  bg-gray-200 m-auto flex max items-center justify-center px-5 py-5">
    <div class="w-full mx-auto rounded-lg bg-white shadow-lg px-5 pt-5 pb-10 text-gray-800" >
        <div class="w-auto pt-1 pb-5">
            <div class="overflow-hidden rounded-full w-20  h-20  mx-auto shadow-lg relative">
                <Image src={boyreview1} alt="rahul dubay" fill={true}/>
            </div>
        </div>
        <div class="w-full mb-10">
            <div class="text-3xl text-[#27AB61] text-left leading-tight h-3"></div>
            <p class="text-sm text-gray-600 text-center px-5">यह संस्था हमेशा हमारे समुदाय की मदद के लिए आगे आती है। गरीबों को आर्थिक सहारा विकलांग लोगों को साथ देने के साथ-साथ बच्चों को शिक्षा प्रदान करने में भी योगदान करती है।</p>
            <div class="text-3xl text-[#27AB61] text-right leading-tight h-3 -mt-3"></div>
        </div>
        <div class="w-full ">
            <p class="text-md text-[#27AB61] font-bold text-center">rahul dubay</p>
        </div>
    </div>
</div>

        </SwiperSlide>
        <SwiperSlide>
        <div class="min-w-screen  bg-gray-200 m-auto flex max items-center justify-center px-5 py-5">
    <div class="w-full mx-auto rounded-lg bg-white shadow-lg px-5 pt-5 pb-10 text-gray-800" >
        <div class="w-auto pt-1 pb-5">
            <div class="overflow-hidden rounded-full w-20 h-20  mx-auto shadow-lg relative">
            <Image src={boyreview2} alt="rajiv malik" fill={true}/>
            </div>
        </div>
        <div class="w-full mb-10">
            <div class="text-3xl text-[#27AB61] text-left leading-tight h-3"></div>
            <p class="text-sm text-gray-600 text-center px-5">मुझे इस संस्था के जरिए कानूनी समस्याओं के समाधान में मदद मिली। उनकी टीम ने मुझे अपनी सहायता से बहुत संतुष्ट किया।</p>
            <div class="text-3xl text-[#27AB61] text-right leading-tight h-3 -mt-3"></div>
        </div>
        <div class="w-full">
            <p class="text-md text-[#27AB61] font-bold text-center">rajiv malik</p>
        </div>
    </div>
</div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="min-w-screen  bg-gray-200 m-auto flex max items-center justify-center px-5 py-5">
    <div class="w-full mx-auto rounded-lg bg-white shadow-lg px-5 pt-5 pb-10 text-gray-800" >
        <div class="w-auto pt-1 pb-5">
            <div class="overflow-hidden rounded-full w-20 h-20  mx-auto shadow-lg relative">
            <Image src={girlreview1} alt="peoplebtrust3" fill={true}/>
            </div>
        </div>
        <div class="w-full mb-10">
            <div class="text-3xl text-[#27AB61] text-left leading-tight h-3"></div>
            <p class="text-sm text-gray-600 text-center px-5">वास्तव में प्राकृतिक सफाई में इनका योगदान अद्भुत है। वे पेड़-पौधों के प्रति जागरूकता फैलाते हैं और हमें प्रकृति की रक्षा के महत्व को समझाते हैं।</p>
            <div class="text-3xl text-[#27AB61] text-right leading-tight h-3 -mt-3"></div>
        </div>
        <div class="w-full">
            <p class="text-md text-[#27AB61] font-bold text-center">sanskriti mishra</p>
        </div>
    </div>
</div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="min-w-screen  bg-gray-200 m-auto flex max items-center justify-center px-5 py-5">
    <div class="w-full mx-auto rounded-lg bg-white shadow-lg px-5 pt-5 pb-10 text-gray-800" >
        <div class="w-auto pt-1 pb-5">
            <div class="overflow-hidden rounded-full w-20 h-20  mx-auto shadow-lg relative">
            <Image src={boyreview3} alt="mohan singh" fill={true}/>
            </div>
        </div>
        <div class="w-full mb-10">
            <div class="text-3xl text-[#27AB61] text-left leading-tight h-3"></div>
            <p class="text-sm text-gray-600 text-center px-5">इस संस्था ने अनगिनत गरीबों की ज़िन्दगी में रोशनी डाली है। उनका काम समाज के निराश लोगों को आशा की किरण देने में मदद करता है।</p>
            <div class="text-3xl text-[#27AB61] text-right leading-tight h-3 -mt-3"></div>
        </div>
        <div class="w-full">
            <p class="text-md text-[#27AB61] font-bold text-center">Mohan Singh</p>
        </div>
    </div>
</div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="min-w-screen  bg-gray-200 m-auto flex max items-center justify-center px-5 py-5">
    <div class="w-full mx-auto rounded-lg bg-white shadow-lg px-5 pt-5 pb-10 text-gray-800" >
        <div class="w-auto pt-1 pb-5">
            <div class="overflow-hidden rounded-full w-20 h-20  mx-auto shadow-lg relative">
                <Image src={girlreview2} alt="anita choudhaury" fill={true}/>
            </div>
        </div>
        <div class="w-full mb-10">
            <div class="text-3xl text-[#27AB61] text-left leading-tight h-3"></div>
            <p class="text-sm text-gray-600 text-center px-5">उनके बच्चों के शिक्षा कार्यक्रम बहुत प्रेरणादायक हैं। वे बच्चों को एक सशक्त भविष्य की ओर ले जाने में मदद करते हैं।</p>
            <div class="text-3xl text-[#27AB61] text-right leading-tight h-3 -mt-3"></div>
        </div>
        <div class="w-full">
            <p class="text-md text-[#27AB61] font-bold text-center">Anita Choudhury</p>
        </div>
    </div>
</div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="min-w-screen  bg-gray-200 m-auto flex max items-center justify-center px-5 py-5">
    <div class="w-full mx-auto rounded-lg bg-white shadow-lg px-5 pt-5 pb-10 text-gray-800" >
        <div class="w-auto pt-1 pb-5">
            <div class="overflow-hidden rounded-full w-20 h-20  mx-auto shadow-lg relative">
            <Image src={boyreview4} alt="govind tiwari" fill={true}/>
            </div>
        </div>
        <div class="w-full mb-10">
            <div class="text-3xl text-[#27AB61] text-left leading-tight h-3"></div>
            <p class="text-sm text-gray-600 text-center px-5">यह संस्था समुदाय की सेवा में वास्तव में अनूठी है। उनके संघर्ष के पीछे की भावना को समझना बेहद प्रेरणादायक है।</p>
            <div class="text-3xl text-[#27AB61] text-right leading-tight h-3 -mt-3"></div>
        </div>
        <div class="w-full">
            <p class="text-md text-[#27AB61] font-bold text-center">Govind Tiwari</p>
        </div>
    </div>
</div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="min-w-screen  bg-gray-200 m-auto flex max items-center justify-center px-5 py-5">
    <div class="w-full mx-auto rounded-lg bg-white shadow-lg px-5 pt-5 pb-10 text-gray-800" >
        <div class="w-auto pt-1 pb-5">
            <div class="overflow-hidden rounded-full w-20 h-20  mx-auto shadow-lg relative">
            <Image src={boyreview5} alt="santosh kumar" fill={true}/>
            </div>
        </div>
        <div class="w-full mb-10">
            <div class="text-3xl text-[#27AB61] text-left leading-tight h-3"></div>
            <p class="text-sm text-gray-600 text-center px-5">मैंने उनकी विकलांगों के लिए आयोजित की गई कार्यक्रमों में भाग लिया और वहाँ मुझे बहुत समानता और स्नेह मिला।</p>
            <div class="text-3xl text-[#27AB61] text-right leading-tight h-3 -mt-3"></div>
        </div>
        <div class="w-full">
            <p class="text-md text-[#27AB61] font-bold text-center">Santosh Kumar</p>
        </div>
    </div>
</div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="min-w-screen  bg-gray-200 m-auto flex max items-center justify-center px-5 py-5">
    <div class="w-full mx-auto rounded-lg bg-white shadow-lg px-5 pt-5 pb-10 text-gray-800" >
        <div class="w-auto pt-1 pb-5">
            <div class="overflow-hidden rounded-full w-20 h-20  mx-auto shadow-lg relative">
                <Image src={laddyreview1} alt="sunita das" fill={true}/>
            </div>
        </div>
        <div class="w-full mb-10">
            <div class="text-3xl text-[#27AB61] text-left leading-tight h-3"></div>
            <p class="text-sm text-gray-600 text-center px-5">यह संस्था न केवल स्थानीय समुदाय के लिए बल्कि पर्यावरण के प्रति भी जवाबदेही से काम करती है।</p>
            <div class="text-3xl text-[#27AB61] text-right leading-tight h-3 -mt-3"></div>
        </div>
        <div class="w-full">
            <p class="text-md text-[#27AB61] font-bold text-center">Sunita Das</p>
        </div>
    </div>
</div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="min-w-screen  bg-gray-200 m-auto flex max items-center justify-center px-5 py-5">
    <div class="w-full mx-auto rounded-lg bg-white shadow-lg px-5 pt-5 pb-10 text-gray-800" >
        <div class="w-auto pt-1 pb-5">
            <div class="overflow-hidden rounded-full w-20 h-20  mx-auto shadow-lg relative">
            <Image src={boyreview6} alt="vivek pillai" fill={true}/>
            </div>
        </div>
        <div class="w-full mb-10">
            <div class="text-3xl text-[#27AB61] text-left leading-tight h-3"></div>
            <p class="text-sm text-gray-600 text-center px-5">यह संस्था न केवल सामाजिक रूप से उपयोगी है बल्कि यह एक परिवार की तरह भी है जो आपकी मदद के लिए हमेशा तैयार है।</p>
            <div class="text-3xl text-[#27AB61] text-right leading-tight h-3 -mt-3"></div>
        </div>
        <div class="w-full">
            <p class="text-md text-[#27AB61] font-bold text-center">Vivek Pillai</p>
        </div>
    </div>
</div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
