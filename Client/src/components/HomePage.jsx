import React, { useState } from 'react';
import Navbar from './Navbar';
import ProductList from './ProductList';
import Sidebar from './Sidebar';
import { GoChevronLeft } from "react-icons/go";
import '../styles/HomePage.css';
import images from '../images';

const HomePage = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showMannequin, setShowMannequin] = useState(false);
  const [dressImages, setDressImages] = useState([]);
  const [loading, setLoading] = useState(false);
  // const [topImage, setTopImage] = useState(null);
  // const [bottomImage, setBottomImage] = useState(null);

  const imageUrls = {
    Dress: images.Dress,
    Pants: images.pants,
    Skirt: images.Skirt,
    'Upper-clothes': images.Uppercloth,
  };


  
  const handleCreate = () => {
    setShowMannequin(!showMannequin);
  };

  const handleToggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const handleDropImage = async (image, type) => {
    setLoading(true); // Start loading
    try {
      const response = await fetch('http://localhost:5000/segment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ image_url: image, cloth_type: type }),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      const imageUrl = imageUrls[type] || '';
      // console.log(imageUrl) // Get the image URL based on type
      if (type === 'Upper-clothes' || type === 'Dress') {
        setDressImages((prevImages) => [...prevImages, imageUrl]);
      } else {
        setDressImages((prevImages) => [...prevImages, imageUrl]);
      }
    }  catch (error) {
      console.error('Error during segmentation:', error);
    } finally {
      setLoading(false); // End loading
    }
  };

  const handleRemoveImage = (index) => {
    const updatedImages = dressImages.filter((_, i) => i !== index);
    setDressImages(updatedImages);
  };

  const handleDragStart = (image, type) => (event) => {
   
    event.dataTransfer.setData('image', image);
    event.dataTransfer.setData('type', type);
  };
  return (
    <div>
      <Navbar />
      {!showSidebar && (
        <button className="open-button" onClick={handleToggleSidebar}>
          <GoChevronLeft />
        </button>
      )}
      <div className="main-content">
        {showSidebar && (
          <Sidebar 
          onCreate={handleCreate} 
          onClose={handleToggleSidebar} 
          showMannequin={showMannequin} 
          dressImages={dressImages} 
          onDropImage={handleDropImage} 
          onRemoveImage={handleRemoveImage}
          loading={loading}
          />
        )}
        <div className={`content ${showSidebar ? 'content-shift' : ''}`}>
          <ProductList onDragStart={handleDragStart} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
