import React from 'react';
import '../styles/Sidebar.css';

const Sidebar = ({ onCreate, onClose, showMannequin, dressImages, onFileChange, onDropImage, onRemoveImage }) => {
  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const image = event.dataTransfer.getData('image');
    onDropImage(image);
  };

  return (
    <div className="sidebar" onDragOver={handleDragOver} onDrop={handleDrop}>
      <button className="close-button" onClick={onClose}>×</button>
      <button className="create-button" onClick={onCreate}>Create +</button>
      {showMannequin && (
        <div className="mannequin">
          {/* <img src="https://via.placeholder.com/150" alt="Mannequin" /> */}
          {dressImages.map((image, index) => (
            <div key={index} className="dress-container">
              <img src={image} alt={`Dress ${index}`} className="dress-overlay" />
              <button className="remove-button" onClick={() => onRemoveImage(index)}>Remove</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Sidebar;
