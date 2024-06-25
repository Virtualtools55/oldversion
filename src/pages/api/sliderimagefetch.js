export default async function handler(req, res) {
    const cloudinary = require('cloudinary').v2;
  
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    });
  
    const folderPath = 'sliderimages'; // यहां अपने फ़ोल्डर का नाम डालें
  
    try {
      const result = await cloudinary.search
        .expression(`folder:${folderPath}`)
        .sort_by('public_id', 'desc')
        .max_results(30)
        .execute();
  
      res.status(200).json(result.resources);
    } catch (error) {
      console.error("Error fetching images from Cloudinary:", error);
      res.status(500).json({ error: 'Error fetching images from Cloudinary' });
    }
  }
  