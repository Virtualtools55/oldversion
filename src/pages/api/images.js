// pages/api/images.js
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default async function handler(req, res) {
  const { folder } = req.query;

  try {
    const result = await cloudinary.search
      .expression(`folder:${folder}`)
      .sort_by('public_id', 'desc')
      .max_results(30)
      .execute();

    res.status(200).json(result.resources);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch images' });
  }
}
