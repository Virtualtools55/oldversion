import dbConnect from '@/lib/dbConnect';
import User from '@/models/heros';
import jwt from 'jsonwebtoken';

export default async function handler(req, res) {
  await dbConnect();

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ success: false, error: 'Email and password are required' });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ success: false, error: 'Invalid email or password' });
    }

    // Directly compare passwords without hashing
    if (password !== user.password) {
      return res.status(401).json({ success: false, error: 'Invalid email or password' });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    return res.status(200).json({ success: true, token });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
}
