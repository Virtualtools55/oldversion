// // pages/index.js
// import React from 'react';
// import { Cloudinary } from 'cloudinary-core';

// // Cloudinary configuration
// const cloudinary = new Cloudinary({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET
// });

// export async function getServerSideProps({ res }) {
//   // Add no-cache headers to the response
//   res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
//   res.setHeader('Pragma', 'no-cache');
//   res.setHeader('Expires', '0');
//   res.setHeader('Surrogate-Control', 'no-store');

//   // Cloudinary API endpoint
//   const url = `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/resources/image`;

//   // Fetch images from Cloudinary
//   const response = await fetch(url, {
//     headers: {
//       Authorization: `Basic ${Buffer.from(`${process.env.CLOUDINARY_API_KEY}:${process.env.CLOUDINARY_API_SECRET}`).toString('base64')}`
//     }
//   });

//   const data = await response.json();

//   // Pass data to the page via props
//   return { props: { images: data.resources } };
// }

// const Gallary = ({ images }) => {
//   return (
//     <div>
//       <h1>Cloudinary Images</h1>
//       <div style={{ display: 'flex', flexWrap: 'wrap' }}>
//         {images.map(image => (
//           <div key={image.public_id} style={{ margin: '10px' }}>
//             <img src={image.secure_url} alt={image.public_id} style={{ width: '200px' }} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Gallary;
