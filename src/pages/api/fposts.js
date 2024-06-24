import dbConnect from '@/lib/dbConnect';
import Post from '@/models/post';

export default async (req, res) => {
  await dbConnect();

  if (req.method === 'GET') {
    try {
      const posts = await Post.find({});
      res.status(200).json({ posts });
    } catch (error) {
      res.status(500).json({ error: 'Error fetching posts' });
    }
  } else {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  }
};
