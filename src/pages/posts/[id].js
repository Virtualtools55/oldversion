import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Post() {
  const router = useRouter();
  const { id } = router.query;
  const [post, setPost] = useState(null);

  useEffect(() => {
    if (id) {
      axios.get(`/api/posts/${id}`).then((response) => {
        setPost(response.data);
      });
    }
  }, [id]);

  if (!post) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <img src={post.imageUrl} alt={post.title} className="w-full h-64 object-cover" />
      <h1 className="text-4xl font-bold mt-4">{post.title}</h1>
      <p className="mt-4">{post.content}</p>
    </div>
  );
}
