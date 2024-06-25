import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { public_id } = req.body;
    if (!public_id) {
      return res.status(400).json({ success: false, error: 'No public_id provided' });
    }

    try {
      const result = await cloudinary.uploader.destroy(public_id);
      if (result.result !== 'ok') {
        throw new Error(result.result);
      }
      res.status(200).json({ success: true });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  } else {
    res.status(405).json({ success: false, error: 'Method not allowed' });
  }
}
