import { useState, useEffect } from 'react';
import axios from 'axios';
import { parseCookies } from 'nookies';
import jwt from 'jsonwebtoken';
import CloudinaryRoot from '@/components/cloudinaryroot';
// import { useRouter } from 'next/navigation';
// import cookie from 'cookie';




export default function Home() {

  
  // const router = useRouter();
  

  // useEffect(() => {
  //   const cookies = cookie.parse(document.cookie || '');
  //   if (cookies.token) {
  //     try {
  //       jwt.verify(cookies.token, 'YOUR_SECRET_KEY');
  //       setIsAuthenticated(true);
  //     } catch (error) {
  //       router.push('/login');
  //     }
  //   } else {
  //     router.push('/login');
  //   }
  // }, []);

  




  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [file, setFile] = useState(null);
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const response = await axios.get('/api/fposts');
    setPosts(response.data.posts);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    formData.append('title', title);
    formData.append('content', content);

    try {
      const response = await axios.post('/api/posts', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setPosts([...posts, response.data.post]);
      alert("Post uploaded successfully")
    } catch (error) {
      // console.error('Error uploading post:', error);
      alert("Some error for uploading post")
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/posts?id=${id}`);
      setPosts(posts.filter(post => post._id !== id));
      alert("Post deleted successfully")
    } catch (error) {
      // console.error('Error deleting post:', error);
      alert("Some error for deleting post")
    }
  };

  return (

    <>

    <CloudinaryRoot/>
    <div className="container mx-auto p-4 w-[60%] mt-6 bg-[#27AB61] rounded-lg">
      <h1 className="text-4xl font-bold mb-6">Create a New Blog Post</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium ">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 block w-full "
          />
        </div>
        <div>
      <label className="block text-sm font-medium">Content</label>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="mt-1 block w-full whitespace-pre-wrap border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
      />
    </div>
        <div>
          <label className="block text-sm font-medium">Image</label>
          <input type="file" onChange={(e) => setFile(e.target.files[0])} className="mt-1 block w-full" />
        </div>
        <button type="submit" className=" my-4 text-black bg-gradient-to-br from-white to-[#27AB61] px-4 py-2 rounded-lg mr-4 transition-transform  hover:scale-105 font-[420]">Create Post</button>
      </form>

      <h2 className="text-2xl font-bold mt-8">Blog Posts</h2>
      <div className='h-[500px] mt-6 overflow-y-scroll bg-white'>
      <div className="grid grid-cols-1 gap-4 mt-4 overflow-y-auto  ">
        {posts.map((post) => (
          <div key={post._id} className="border p-4 rounded">
            <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover" />
            <h3 className="text-xl font-bold mt-2">{post.title}</h3>
            <p className="mt-2">{post.content}</p>
            <button onClick={() => handleDelete(post._id)} className="m-8 text-black bg-gradient-to-br from-white to-[#27AB61] px-4 py-2 rounded-lg mr-4 transition-transform  hover:scale-105 font-[420]">Delete Post</button>
          </div>
        ))}
      </div>
    </div>
    </div>
    </>
  );
}
