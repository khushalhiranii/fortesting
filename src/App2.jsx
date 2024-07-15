import React, { useState } from 'react';
import axios from 'axios';


const getToken = async () => {
  const refreshToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Njc5Nzg4OGZjZWViZTE1NWY4ZTEwYzgiLCJpYXQiOjE3MTkyOTkzMTksImV4cCI6MTcxOTM4NTcxOX0.jln5__AnkH1gvX0vfNtQWoTZSpp1C0NqDJOk6VSQHSQ';
  try {
    const response = await axios.post('https://sn-backend.vercel.app/api/v1/user/refreshtoken', {
      refreshtoken: refreshToken
    });
    console.log(response.data);
  } catch (error) {
    console.error('Error fetching token:', error);
  }
};

const UploadImage = () => {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [imageUrl, setImageUrl] = useState('');

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) return;
    setUploading(true);

    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await axios.post('https://sn-backend.vercel.app/api/v1/user/testing', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response)
      //setImageUrl(response.data.url); // Assuming the backend returns the Cloudinary URL
    } catch (error) {
		console.error('Error uploading file:', error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload} disabled={uploading}>
        {uploading ? 'Uploading...' : 'Upload'}
      </button>
      {imageUrl && <div>
        <p>Image uploaded successfully:</p>
        <img src={imageUrl} alt="Uploaded" />
      </div>}
      <button onClick={getToken}>Send</button>
    </div>
  );
};

export default UploadImage;