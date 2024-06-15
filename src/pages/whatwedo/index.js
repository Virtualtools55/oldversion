import Image from "next/image";
import React from 'react';
import { Cloudinary } from 'cloudinary-core';
import poor from "./../../../public/poorblackwhite.jpg"


// Cloudinary configuration
const cloudinary = new Cloudinary({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

export async function getServerSideProps({ res }) {
  // Add no-cache headers to the response
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  res.setHeader('Surrogate-Control', 'no-store');

  // Cloudinary API endpoint
  const url = `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/resources/image`;

  // Fetch images from Cloudinary
  const response = await fetch(url, {
    headers: {
      Authorization: `Basic ${Buffer.from(`${process.env.CLOUDINARY_API_KEY}:${process.env.CLOUDINARY_API_SECRET}`).toString('base64')}`
    }
  });

  const data = await response.json();

  // Pass data to the page via props
  return { props: { images: data.resources } };
}

const Whatwedo = ({ images }) => {
  return (
    <>
      <div className="max-w-screen-3xl mx-auto p-2 sm:p-10 md:p-16">
        <div className="rounded overflow-hidden flex flex-col max-w-3xl mx-auto">
          <a href="#">
            <Image className="w-full" src={poor} alt="Sunset in the mountains" width={500} height={300} />
          </a>
          <div className="relative -mt-16 px-10 pt-5 pb-16 bg-white m-auto max-lg:w-[90%]">
            <a href="#"
              className="font-semibold text-lg inline-block text-[#27AB61] transition duration-500 ease-in-out inline-block mb-2 font-title text-[22px]">
              The Empowering Humanity Preserving Nature: A Beacon of Hope and Assistance for the Vulnerable
            </a>
            <p className="text-gray-500 font-normal font-title">
              In the tender embrace of our foundation, we weave threads of compassion to uplift the downtrodden, restore dignity to the marginalized, and nurture the fragile harmony between humanity and nature. With every act of support, we paint a tapestry of hope where the whispers of gratitude echo in the hearts of those we serve, forging a brighter tomorrow for all.
            </p>
          </div>
        </div>
      </div>

      {/* Cloudinary Images */}
      <div>
        
      <div className="container mx-auto p-4">
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 m-10">
    {images.map(image => (
      <div key={image.public_id} className="overflow-hidden rounded-lg">
        <img src={image.secure_url} alt={image.public_id} className="object-cover w-full h-full rounded-lg" style={{ maxHeight: '300px' }} />
      </div>
    ))}
  </div>
</div>

      </div>
    </>
  );
}

export default Whatwedo;
