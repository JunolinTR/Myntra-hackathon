import React from 'react';
import '../styles/Sidebar.css';

const Sidebar = ({ onCreate, onClose, showMannequin, dressImage, onFileChange }) => {
  return (
    <div className="sidebar">
      <button className="close-button" onClick={onClose}>×</button>
      <button className="create-button" onClick={onCreate}>Create +</button>
      {showMannequin && (
        <div className="mannequin">
          <img src="https://via.placeholder.com/150" alt="Mannequin" />
          {dressImage && <img src={dressImage} alt="Dress" className="dress-overlay" />}
          
        </div>
      )}
    </div>
  );
}

export default Sidebar;
