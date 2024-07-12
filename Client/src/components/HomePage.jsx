import React, { useState } from 'react';
import Navbar from './Navbar';
import ProductList from './ProductList';
import Sidebar from './Sidebar';
import { GoChevronLeft } from "react-icons/go";
import { extractDress } from '../utils/removeBg';
import '../styles/HomePage.css';

const HomePage = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showMannequin, setShowMannequin] = useState(false);
  const [dressImage, setDressImage] = useState(null);
  const handleCreate = () => {
    setShowMannequin(!showMannequin);
  };

  const handleToggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const dressOnlyImage = await extractDress(file);
      if (dressOnlyImage) {
        setDressImage(dressOnlyImage);
      }
    }
  };
  const handleDragStart = (image) => (event) => {
    // Handle the drag start event
    console.log('Drag started with image:', image);
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
          dressImage={dressImage} 
          onFileChange={handleFileChange}
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
