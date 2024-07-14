import React, { useState } from 'react';
import '../styles/Sidebar.css';

const Sidebar = ({ onCreate, onClose, showMannequin, dressImages, onDropImage, onRemoveImage, loading }) => {
  const [selection, setSelection] = useState('');
  const [topImage, setTopImage] = useState(null);
  const [bottomImage, setBottomImage] = useState(null);
  const [hatImage, setHatImage] = useState(null);
  const [shoeImage, setShoeImage] = useState(null);

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = async (event) => {
    event.preventDefault();
    const image = event.dataTransfer.getData('image');
    const type = event.dataTransfer.getData('type');

    if (!image || !type) {
      console.error('Missing image or type data in handleDrop');
      return;
    }
    onDropImage(image, type);
    try {
      const response = await fetch('http://127.0.0.1:5000/segment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ image_url: image, cloth_type: type })
      });

      const result = await response.json();
      const segmentedImageUrl = `http://127.0.0.1:5000/${result.segmented_image_url}`;

      switch (type) {
        case 'Upper-clothes':
        case 'Dress':
          setTopImage(segmentedImageUrl);
          break;
        case 'Pants':
        case 'Skirt':
          setBottomImage(segmentedImageUrl);
          break;
        case 'Hat':
          setHatImage(segmentedImageUrl);
          break;
        case 'Shoe':
          setShoeImage(segmentedImageUrl);
          break;
        default:
          console.error(`Unknown type: ${type}`);
      }

    } catch (error) {
      console.error('Error processing image:', error);
    }
  };

  const handleSelectionChange = (event) => {
    setSelection(event.target.value);
  };

  return (
    <div className="sidebar" onDragOver={handleDragOver} onDrop={handleDrop}>
      <button className="close-button" onClick={onClose}>×</button>
      
      <button className="create-button" onClick={onCreate}>Create +</button>
      {loading && <div className="loading-spinner">Loading...</div>}
      
      {showMannequin && (
        <div className="mannequin">
          {/* <select onChange={handleSelectionChange} value={selection}>
        <option value="">Select Option</option>
        <option value="Top and Bottom">Top and Bottom</option>
        <option value="Dress">Dress</option>
      </select> */}
            {hatImage && (
            <div className="dress-container">
              <img src={hatImage} alt="Hat" className="dress-overlay" />
              <button className="remove-button" onClick={() => setHatImage(null)}>Remove</button>
            </div>
          )}

          {topImage && (
            <div className="dress-container">
              <img src={topImage} alt="Top" className="dress-overlay" />
              <button className="remove-button" onClick={() => setTopImage(null)}>Remove</button>
            </div>
          )}
          {bottomImage && (
            <div className="dress-container">
              <img src={bottomImage} alt="Bottom" className="dress-overlay" />
              <button className="remove-button" onClick={() => setBottomImage(null)}>Remove</button>
            </div>
          )}
          {shoeImage && (
            <div className="dress-container">
              <img src={shoeImage} alt="Shoes" className="dress-overlay" />
              <button className="remove-button" onClick={() => setShoeImage(null)}>Remove</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Sidebar;
