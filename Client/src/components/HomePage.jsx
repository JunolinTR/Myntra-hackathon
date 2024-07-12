import React, { useState } from 'react';
import Navbar from './Navbar';
import ProductList from './ProductList';
import Sidebar from './Sidebar';
import { GoChevronLeft } from "react-icons/go";
import '../styles/HomePage.css';

const HomePage = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showMannequin, setShowMannequin] = useState(false);
  const [dressImages, setDressImages] = useState([]);
  
  const handleCreate = () => {
    setShowMannequin(!showMannequin);
  };

  const handleToggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const handleDropImage = (image) => {
    let updatedImages = [...dressImages];
    if (updatedImages.length >= 2) {
      updatedImages[0] = updatedImages[1];
      updatedImages[1] = image;
    } else {
      updatedImages.push(image);
    }
    setDressImages(updatedImages);
  };

  const handleRemoveImage = (index) => {
    const updatedImages = dressImages.filter((_, i) => i !== index);
    setDressImages(updatedImages);
  };

  const handleDragStart = (image) => (event) => {
    event.dataTransfer.setData('image', image);
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
