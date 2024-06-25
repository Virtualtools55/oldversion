import { useState, useEffect } from 'react';

export default function CloudinaryRoot() {
  const [file, setFile] = useState(null);
  // const [message, setMessage] = useState('');
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const response = await fetch('/api/listimages');
      const data = await response.json();
      if (data.success) {
        setImages(data.images);
      } else {
        // setMessage(`Error fetching images: ${data.error}`);
      }
    };

    fetchImages();
  }, []);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      // setMessage('Please select a file');
      alert("Plese select a file")
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = async () => {
      const base64data = reader.result;

      const response = await fetch('/api/rootupload', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ file: base64data }),
      });

      const data = await response.json();
      if (data.success) {
        // setMessage(`File uploaded successfully: ${data.url}`);
        alert("File uploaded successfully!")
        setImages([...images, { url: data.url, public_id: data.public_id }]);
      } else {
        // setMessage(`Error: ${data.error}`);
        alert("Some error for file uploading!")
      }
    };
  };

  const handleDelete = async (public_id) => {
    const response = await fetch('/api/rootdelete', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ public_id }),
    });

    const data = await response.json();
    if (data.success) {
      // setMessage('Image deleted successfully');
      alert("File deleted successfully!")
      setImages(images.filter((image) => image.public_id !== public_id));
    } else {
      // setMessage(`Error: ${data.error}`);
      alert("Some error for file deleting!");
    }
  };

  return (
    <>
    <div className='bg-[#27AB61]  w-[35%] h-[150px] m-auto mx-auto m-10 rounded-lg max-md:mx-auto max-md:w-[95%] max-md:h-[200px] '>
  <h1 className='m-6 pt-2 font-bold text-xl'>Upload to What We Do gallary</h1>
  <input className='ml-10 m-auto' type="file" onChange={handleFileChange} />
  <button onClick={handleUpload} className='text-black bg-gradient-to-br from-white to-[#27AB61] px-4 py-2 rounded-lg mr-4 transition-transform  hover:scale-105 font-[420] max-md:ml-10 max-md:mt-5 '>Upload</button>
  {/* <p>{message}</p> */}
</div>

      <div className='w-96 mx-auto h-[500px] mt-10 mb-6 bg-[#27AB61] overflow-y-scroll rounded-lg'>
  {images.map((image) => (
    <div key={image.public_id} className='overflow-hidden relative w-80 bg-white m-6 rounded-lg mx-auto  h-96'>
      <img src={image.url} alt="Uploaded" className='mt-2 mx-auto h-52 rounded-lg w-72' />
      <button className='m-8 text-black bg-gradient-to-br from-white to-[#27AB61] px-4 py-2 rounded-lg mr-4 transition-transform  hover:scale-105 font-[420]' onClick={() => handleDelete(image.public_id)}>Delete</button>
    </div>
  ))}
</div>

      </>
  );
}
