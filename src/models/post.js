import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
  title: String,
  content: String,
  imageUrl: String,
});

let Post = mongoose.models.posts || mongoose.model('posts', PostSchema);
export default Post;
