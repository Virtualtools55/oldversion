import dbConnect from '@/lib/dbConnect';
import Post from '@/models/post';

export default async (req, res) => {
  await dbConnect();

  const { id } = req.query;

  if (req.method === 'GET') {
    try {
      const post = await Post.findById(id);
      if (!post) {
        return res.status(404).json({ error: 'Post not found' });
      }
      res.status(200).json(post);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching post' });
    }
  } else {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  }
};
