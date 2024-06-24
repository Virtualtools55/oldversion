import nc from 'next-connect';
import multer from 'multer';
import cloudinary from '@/lib/cloudinary';

const upload = multer({ dest: '/tmp' });

const handler = nc({
  onError(error, req, res) {
    res.status(501).json({ error: `Sorry something happened! ${error.message}` });
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

handler.use(upload.single('file'));

handler.post(async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.file.path);
    res.status(200).json({ imageUrl: result.secure_url });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default handler;

export const config = {
  api: {
    bodyParser: false,
  },
};
