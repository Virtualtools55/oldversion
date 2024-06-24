import dbConnect from '@/lib/dbConnect'; // Database connection function
import Post from '@/models/post'; // Post model
import { v2 as cloudinaryV2 } from 'cloudinary'; // Cloudinary API
import multer from 'multer'; // Middleware for handling multipart/form-data
import fs from 'fs'; // File system module
import mongoose from 'mongoose'; // Mongoose library for MongoDB
import { promisify } from 'util';

const unlinkAsync = promisify(fs.unlink); // Convert fs.unlink to promise-based function

const upload = multer({ dest: '/tmp' }); // Multer configuration for temporary file storage

export const config = {
  api: {
    bodyParser: false, // Disable body parsing to handle multipart form data
  },
};

// Helper function to run middleware
const runMiddleware = (req, res, fn) => {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
};

const handler = async (req, res) => {
  await dbConnect(); // Connect to database

  if (req.method === 'POST') {
    // Handle POST request
    await runMiddleware(req, res, upload.single('file'));
    const { title, content } = req.body;

    try {
      const result = await cloudinaryV2.uploader.upload(req.file.path, {
        folder: 'blogpostimages',
      });

      await unlinkAsync(req.file.path); // Remove the file from temporary storage

      const post = new Post({
        title,
        content,
        imageUrl: result.secure_url,
      });

      await post.save(); // Save post to MongoDB
      return res.status(201).json({ post });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  } else if (req.method === 'DELETE') {
    // Handle DELETE request
    const { id } = req.query;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: 'Invalid post ID' });
    }

    try {
      const post = await Post.findById(id);

      if (!post) {
        return res.status(404).json({ error: 'Post not found' });
      }

      const public_id = post.imageUrl.match(/blogpostimages\/([^/]+)\.[a-zA-Z]{3,4}$/)[1];

      await cloudinaryV2.uploader.destroy(`blogpostimages/${public_id}`); // Delete image from Cloudinary

      await Post.findByIdAndDelete(id); // Delete post from MongoDB
      return res.status(200).json({ message: 'Post and image deleted successfully' });
    } catch (error) {
      return res.status(500).json({ error: 'An error occurred', details: error });
    }
  } else {
    res.setHeader('Allow', ['POST', 'DELETE']);
    return res.status(405).json({ error: `Method ${req.method} not allowed` });
  }
};

export default handler;
