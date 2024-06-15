import Image from "next/image"

import reviewbywomen1 from "./../../public/reviewbywomen1.png";
import reviewbygirl1 from "./../../public/reviewbygirl1.png";
import reviewbygirl2 from "./../../public/reviewbygirl2.png";
import reviewbyman1 from "./../../public/reviewbyman1.png";
import reviewbyman2 from "./../../public/reviewbyman2.png";
export default function TestiMonials(){

    return(

        <>
        <div  class="relative isolate bg-white  pb-32 pt-24 sm:pt-32">
  <div class="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl" aria-hidden="true">
  </div>
  <div class="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-32 opacity-25 blur-3xl sm:pt-40 xl:justify-end" aria-hidden="true">
  </div>
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto max-w-xl text-center">
   
      <p class="mt-2 leading-8 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-tittle">We solved our problems with you</p>
    </div>
    <div data-aos="zoom-in" data-aos-duration="1500" class=" mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4 ">
      <figure class="rounded-2xl bg-white shadow-2xl ring-1 ring-gray-900/5 sm:col-span-2 xl:col-start-2 xl:row-end-1">
        <blockquote class="p-6 text-lg font-semibold leading-7 tracking-tight text-gray-900 sm:p-12 sm:text-xl sm:leading-8">
          <p className="font-tittle">Meera Foundation Truly impactful work thats making a tangible difference in peoples lives</p>
        </blockquote>
        <figcaption class="flex flex-wrap items-center gap-x-4 gap-y-4 border-t border-gray-900/10 px-6 py-4 sm:flex-nowrap relative">
          <Image class="h-10 w-10 flex-none rounded-full bg-gray-50" src={reviewbyman1} alt="vikram shah"/>
          <div class="flex-auto">
            <div class="font-semibold font-tittle">Vikram Shah</div>
            
          </div>
          
        </figcaption>
      </figure>
      <div class="  space-y-8 xl:contents xl:space-y-0 shadow-2xl">
        <div class="  space-y-8 xl:row-span-2 ">
          <figure class="rounded-2xl bg-white p-6 shadow-2xl  ring-1 ring-gray-900/5">
            <blockquote class="text-gray-900">
              <p className="font-tittle">An exceptional foundation dedicated to empowering communities and changing lives </p>
            </blockquote>
            <figcaption class="mt-6 flex items-center gap-x-4 relative">
            <Image class="h-10 w-10 flex-none rounded-full bg-gray-50" src={reviewbyman2} alt="mohan das"/>

              <div>
                <div class="font-semibold font-tittle">Mohan Das</div>
                
              </div>
            </figcaption>
          </figure>

          {/* <!-- More testimonials... --> */}
        </div>
        <div class="space-y-8 xl:row-start-1 shadow-2xl">
          <figure class="rounded-2xl bg-white p-6  ring-1 ring-gray-900/5">
            <blockquote class="text-gray-900">
              <p className="font-tittle">Consistently demonstrating compassion and effectiveness in helping those facing adversity</p>
            </blockquote>
            <figcaption class="mt-6 flex items-center gap-x-4 relative">
            <Image class="h-10 w-10 flex-none rounded-full bg-gray-50" src={reviewbygirl1} alt="natasha oberoi"/>

              <div>
                <div class="font-semibold font-tittle">Natasha Oberoi</div>
              </div>
            </figcaption>
          </figure>

          {/* <!-- More testimonials... --> */}
        </div>
      </div>
      <div class="space-y-8 xl:contents xl:space-y-0 shadow-2xl">
        <div class="space-y-8 xl:row-start-1 shadow-2xl">
          <figure class="rounded-2xl bg-white p-6  ring-1 ring-gray-900/5 ">
            <blockquote class="text-gray-900">
              <p className="font-tittle"> Meera Foundation Remarkable dedication to addressing societal challenges and fostering positive change </p>
            </blockquote>
            <figcaption class="mt-6 flex items-center gap-x-4 relative">
            <Image class="h-10 w-10 flex-none rounded-full bg-gray-50" src={reviewbywomen1} alt="geeta patel"/>

              <div>
                <div class="font-semibold font-tittle">Geeta Patel</div>
               
              </div>
            </figcaption>
          </figure>

          {/* <!-- More testimonials... --> */}
        </div>
        <div class="space-y-8 xl:row-span-2 ">
          <figure class="rounded-2xl bg-white p-6 shadow-2xl ring-1 ring-gray-900/5 ">
            <blockquote class="text-gray-900">
              <p className="font-tittle"> Your foundation is truly commendable! It goes beyond just beauty and cosmetics it extends its reach to address critical issues faced by our society By aiding people with medical issues financial struggles supporting the elderly and contributing to nature clean programs your foundation stands as a beacon of hope and support</p>
            </blockquote>
            <figcaption class="mt-6 flex items-center gap-x-4 relative">
            <Image class="h-10 w-10 flex-none rounded-full bg-gray-50" src={reviewbygirl2} alt="sarita mishra"/>

              <div>
                <div class="font-semibold font-tittle">Sarita Mishra</div>
              
              </div>
            </figcaption>
          </figure>

          {/* <!-- More testimonials... --> */}
        </div>
      </div>
    </div>
  </div>
</div>
        
        </>
    )
}