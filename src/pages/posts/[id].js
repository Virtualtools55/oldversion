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

  if (!post) return <div className='ml-4'>Loading...</div>;

// second 

  const content = post.content;
  
  // Split content into lines
  const lines = content.split('\n');

  // Group lines into paragraphs of four lines each
  const paragraphs = [];
  for (let i = 0; i < lines.length; i += 4) {
    paragraphs.push(lines.slice(i, i + 4).join('\n'));
  }

  return (
    <div className="container mx-auto p-4 w-[65%] max-md:w-[90%] ">
      <img src={post.imageUrl} alt={post.title} className="w-full mx-auto h-80 max-md:h-72  mt-6 rounded-lg mb-8 object-cover" />
      <h1 className="text-4xl font-bold max-md:ml-6 ml-10 mt-4 mb-6 w-[70%] ">{post.title}</h1>
      <div className="mt-4 max-md:ml-8  mx-auto ">
      {paragraphs.map((paragraph, index) => (
        <p key={index} className="mb-4 whitespace-pre-line">{paragraph}</p>
      ))}
    </div>
    </div>
  );
}
