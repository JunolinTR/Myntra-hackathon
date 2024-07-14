import React from 'react';
import '../styles/ProductCard.css';

const ProductCard = ({ product, onDragStart }) => {
  return (
    <div 
      className="product-card" 
      draggable 
      onDragStart={onDragStart(product.image, product.type)} // Ensure this is set correctly
    >
      <img src={product.image} alt={product.name} />
      <div className="product-info">
        <h3>{product.name}</h3>
        <p>{product.price}</p>
        <button>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductCard;

