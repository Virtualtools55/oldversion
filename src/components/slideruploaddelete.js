import { useState, useEffect } from 'react';

export default function CloudinaryManager() {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch('/api/sliderimagefetch');
        const data = await response.json();
        if (Array.isArray(data)) { // Check if data is an array
          setImages(data);
        } else {
          console.error('Data fetched is not an array:', data);
        }
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };
  
    fetchImages();
  }, []);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      setMessage('Please select a file');
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = async () => {
      const base64data = reader.result;

      const response = await fetch('/api/sliderupload', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ file: base64data, folder: 'sliderimages' }),
      });

      const data = await response.json();
      if (data.success) {
        // setMessage(`File uploaded successfully: ${data.url}`);
        alert("Image uploaded successfully");
        setImages([...images, { url: data.url, public_id: data.public_id }]);
      } else {
        // setMessage(`Error: ${data.error}`);
        alert("Some error for deleting image");
      }
    };
  };

  const handleDelete = async (public_id) => {
    const response = await fetch('/api/sliderdelete', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ public_id }),
    });

    const data = await response.json();
    if (data.success) {
    //   setMessage('Image deleted successfully');
    alert("Image deleted successfully")
      setImages(images.filter((image) => image.public_id !== public_id));
    } else {
    //   setMessage(`Error: ${data.error}`);
    alert("Some error for deleting image");

    }
  };

  return (
    <div className="bg-[#27AB61] mt-8 w-[90%]  rounded-lg mx-auto p-2 sm:p-10 md:p-16 max-md:m-auto max-md:w-[98%] ">
      <div className="rounded overflow-hidden flex flex-col max-w-3xl mx-auto">
        <div className="p-4 bg-white shadow-md rounded-lg">
          <h1 className='font-bold m-2'>Upload to Home page Slider</h1>
          <input type="file" onChange={handleFileChange} />
          <button onClick={handleUpload} className='text-black bg-gradient-to-br from-white to-[#27AB61] px-4 py-2 rounded-lg mr-4 transition-transform  hover:scale-105 font-[420] max-md:mt-2'>Upload</button>
          {/* <p>{message}</p> */}
        </div>

        <div className="overflow-y-scroll grid p-2 h-[500px] grid-cols-2  w-full sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-2 gap-4 mt-10">
  {images.map((image) => (
    <div key={image.public_id} className="relative bg-gray-100 p-4  rounded-lg shadow-md">
      <img src={image.url} alt="Uploaded" className="w-full h-56 object-cover rounded-lg" />
      <button 
        onClick={() => handleDelete(image.public_id)}
        className="absolute top-2 text-2xl font-bold bg-[#27AB61] right-2  text-white px-3 py-2 text-xs rounded-lg"
      >
        Delete
      </button>
    </div>
  ))}
</div>

      </div>
    </div>
  );
}
