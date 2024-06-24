// pages/api/deletePost.js

import connectDB from '../../utils/connectDB'; // Assuming you have a utility for MongoDB connection
import Post from '@/models/post'; // Assuming Post is your Mongoose model

connectDB(); // Connect to MongoDB

export default async function handler(req, res) {
  if (req.method !== 'DELETE') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const postId = req.query.id;

  try {
    // Find post by ID and delete it
    const deletedPost = await Post.findByIdAndDelete(postId);

    if (!deletedPost) {
      return res.status(404).json({ message: 'Post not found' });
    }

    res.status(200).json({ message: 'Post deleted successfully', deletedPost });
  } catch (error) {
    console.error('Error deleting post:', error);
    res.status(500).json({ message: 'Server Error' });
  }
}
