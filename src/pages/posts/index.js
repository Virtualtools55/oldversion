import { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';

export default function BlogPosts() {
  const [posts, setPosts] = useState([]);

  // Function to fetch all posts
  const fetchPosts = async () => {
    try {
      const response = await axios.get('/api/fposts');
      setPosts(response.data.posts);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  // Initial fetch when component mounts
  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold m-8 pt-2 pb-2 pl-5 pr-5 rounded-lg bg-gradient-to-br from-white to-[#27AB61] inline-block">Important News</h2>
      <div className="grid grid-cols-1 gap-4 mt-4 ">
        {posts.map((post) => (
          <div key={post._id} className=" border p-4 rounded-lg grid  grid-cols-4 gap-2 ">
            <Link href={`/posts/${post._id}`}>
             
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-48 object-cover rounded-xl bg-gradient-to-br from-white to-[#27AB61] p-1"
                />
                <h3 className="text-xl font-bold ml-4 mt-2 ">{post.title}</h3>
              
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
