import React from "react";
import { useState,useEffect } from "react";
import '../styles/Homestyles.css'
import Sidebar from './Sidebar.jsx'

const Home =() =>{
    const [products, setProducts] = useState([]);
  const [sortOption, setSortOption] = useState('popularity');

  useEffect(() => {
    // Fetch products from an API or use dummy data
    fetchProducts();
  }, [sortOption]);

  const fetchProducts = () => {
    const dummyProducts = [
      { id: 1, name: 'Product 1', price: 100, discount: 50, imageUrl: 'https://via.placeholder.com/150' },
      { id: 2, name: 'Product 2', price: 200, discount: 60, imageUrl: 'https://via.placeholder.com/150' },
      { id: 3, name: 'Product 3', price: 300, discount: 70, imageUrl: 'https://via.placeholder.com/150' },
      { id: 3, name: 'Product 4', price: 300, discount: 70, imageUrl: 'https://via.placeholder.com/150' },
      { id: 3, name: 'Product 5', price: 300, discount: 70, imageUrl: 'https://via.placeholder.com/150' },
      { id: 3, name: 'Product 6', price: 300, discount: 70, imageUrl: 'https://via.placeholder.com/150' },
      { id: 3, name: 'Product 7', price: 300, discount: 70, imageUrl: 'https://via.placeholder.com/150' },
      { id: 3, name: 'Product 8', price: 300, discount: 70, imageUrl: 'https://via.placeholder.com/150' },
      { id: 3, name: 'Product 9', price: 300, discount: 70, imageUrl: 'https://via.placeholder.com/150' },
      { id: 3, name: 'Product 10', price: 300, discount: 70, imageUrl: 'https://via.placeholder.com/150' },

    ];
    setProducts(dummyProducts);
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
    return (
        <div>
            <nav class="menu" id="nav">
	<span class="nav-item active">
		<span class="icon">
			<i data-feather="home"></i>
		</span>
		<a href="#">Home</a>
	</span>
	<span class="nav-item">
		<span class="icon">
			<i data-feather="search"></i>
		</span>
		<a href="#">Search</a>
	</span>
	<span class="nav-item">
		<span class="icon">
			<span class="subicon">13</span>
			<i data-feather="bell"></i>
		</span>
		<a href="#">Notifications</a>
	</span>
	<span class="nav-item">
		<span class="icon">
			<i data-feather="star"></i>
		</span>
		<a href="#">Favorites</a>
	</span>
	<span class="nav-item">
		<span class="icon">
			<span class="subicon">1</span>
			<i data-feather="bell"></i>
		</span>
		<a href="#">Your Profile</a>
	</span>
</nav>
<header>
        <h1>Fusion Wear</h1>
        <div className="filters">
          <label>
            Sort by:
            <select value={sortOption} onChange={handleSortChange}>
              <option value="popularity">Popularity</option>
              <option value="price-low-to-high">Price: Low to High</option>
              <option value="price-high-to-low">Price: High to Low</option>
            </select>
          </label>
        </div>
      </header>
      <div className="product-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.imageUrl} alt={product.name} />
            <h2>{product.name}</h2>
            <p>Price: ${product.price}</p>
            <p>Discount: {product.discount}%</p>
          </div>
        ))}
      </div>
      <button className="toggle-button" onClick={toggleSidebar}>
        {isOpen ? 'Close' : 'Open'} Sidebar
      </button>
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <button className="close-button" onClick={toggleSidebar}>
          &times;
        </button>
        <Sidebar/>
      </div>
      <div className={`overlay ${isOpen ? 'active' : ''}`} onClick={toggleSidebar}></div>
         </div>
    )
}
export default Home;



