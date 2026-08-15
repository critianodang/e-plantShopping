import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import CartItem from './CartItem';
import './ProductList.css';

function ProductList() {
  const [showCart, setShowCart] = useState(false);
  const [addedToCart, setAddedToCart] = useState({});
  const dispatch = useDispatch();

  const cartItems = useSelector(state => state.cart.items);
  const totalCartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const plantsArray = [
    {
      category: "Air Purifying Plants",
      plants: [
        { name: "Snake Plant", image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg", description: "Produces oxygen at night, purifying indoor air.", cost: "$15" },
        { name: "Spider Plant", image: "https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg", description: "Filters formaldehyde and xylene from the air.", cost: "$12" },
        { name: "Peace Lily", image: "https://cdn.pixabay.com/photo/2019/06/12/14/14/peace-lilies-4269365_1280.jpg", description: "Removes mold spores and harmful toxins.", cost: "$18" },
        { name: "Boston Fern", image: "https://cdn.pixabay.com/photo/2020/04/30/19/52/boston-fern-5114414_1280.jpg", description: "Adds humidity and purifies indoor pollutants.", cost: "$14" },
        { name: "Rubber Plant", image: "https://cdn.pixabay.com/photo/2020/02/15/11/49/flower-4850729_1280.jpg", description: "Glossy leaves that effectively clean indoor air.", cost: "$20" },
        { name: "Aloe Vera", image: "https://cdn.pixabay.com/photo/2018/04/02/07/42/leaf-3283175_1280.jpg", description: "Purifies air and soothes skin burns.", cost: "$10" }
      ]
    },
    {
      category: "Aromatic Fragrant Plants",
      plants: [
        { name: "Lavender", image: "https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?auto=format&fit=crop&w=600&q=80", description: "Calming aroma that promotes restful sleep.", cost: "$16" },
        { name: "Jasmine", image: "https://images.unsplash.com/photo-1592729961255-cc3a44699780?auto=format&fit=crop&w=600&q=80", description: "Sweet floral scent that uplifts the mood.", cost: "$22" },
        { name: "Rosemary", image: "https://cdn.pixabay.com/photo/2019/10/11/07/12/rosemary-4541241_1280.jpg", description: "Invigorating herb with culinary and aromatherapy uses.", cost: "$11" },
        { name: "Mint", image: "https://cdn.pixabay.com/photo/2016/01/07/18/12/mint-1126282_1280.jpg", description: "Fresh, refreshing minty scent for home & drinks.", cost: "$9" },
        { name: "Lemon Balm", image: "https://cdn.pixabay.com/photo/2015/07/17/13/44/lemon-balm-849089_1280.jpg", description: "Pleasant citrus aroma that relieves stress.", cost: "$13" },
        { name: "Eucalyptus", image: "https://cdn.pixabay.com/photo/2016/11/29/05/07/eucalyptus-1867469_1280.jpg", description: "Crisp scent that clears breathing passages.", cost: "$19" }
      ]
    },
    {
      category: "Low Maintenance Plants",
      plants: [
        { name: "ZZ Plant", image: "https://images.unsplash.com/photo-1632207691143-643e2a9a9361?auto=format&fit=crop&w=600&q=80", description: "Thrives in low light with very little water.", cost: "$25" },
        { name: "Pothos", image: "https://cdn.pixabay.com/photo/2018/11/15/10/32/plants-3816945_1280.jpg", description: "Hardy trailing vine that tolerates neglect.", cost: "$13" },
        { name: "Cast Iron Plant", image: "https://images.unsplash.com/photo-1596724817752-94429e345e6f?auto=format&fit=crop&w=600&q=80", description: "Virtually indestructible in dark indoor spaces.", cost: "$28" },
        { name: "Jade Plant", image: "https://cdn.pixabay.com/photo/2019/02/18/07/58/money-tree-4003884_1280.jpg", description: "Classic succulent that requires minimal watering.", cost: "$15" },
        { name: "Succulent Trio", image: "https://cdn.pixabay.com/photo/2016/11/21/16/08/succulents-1846147_1280.jpg", description: "Drought-resistant mini plants for desks.", cost: "$14" },
        { name: "Ponytail Palm", image: "https://images.unsplash.com/photo-1512428813834-c702c7702b78?auto=format&fit=crop&w=600&q=80", description: "Stores water in its trunk, forgiving irregular care.", cost: "$21" }
      ]
    }
  ];

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedToCart((prevState) => ({
      ...prevState,
      [plant.name]: true,
    }));
  };

  const handleCartClick = (e) => {
    e.preventDefault();
    setShowCart(true);
  };

  const handlePlantsClick = (e) => {
    e.preventDefault();
    setShowCart(false);
  };

  const handleContinueShopping = (e) => {
    e.preventDefault();
    setShowCart(false);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="nav-brand">
          <a href="/" onClick={(e) => { e.preventDefault(); window.location.reload(); }}>
            <h3>Paradise Nursery</h3>
            <i>Where Greenery Meets Serenity</i>
          </a>
        </div>
        <div className="nav-links">
          <a href="#plants" onClick={handlePlantsClick}>Plants</a>
          <a href="#cart" onClick={handleCartClick} className="cart-icon-container">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            <span className="cart-count">{totalCartCount}</span>
          </a>
        </div>
      </nav>

      {!showCart ? (
        <div className="product-grid">
          {plantsArray.map((categoryObj, index) => (
            <div key={index} className="category-section">
              <h2 className="category-title">{categoryObj.category}</h2>
              <div className="plants-list">
                {categoryObj.plants.map((plant, pIndex) => (
                  <div key={pIndex} className="product-card">
                    <img src={plant.image} alt={plant.name} className="product-image" />
                    <h3 className="product-name">{plant.name}</h3>
                    <p className="product-description">{plant.description}</p>
                    <p className="product-cost">{plant.cost}</p>
                    <button
                      className={`product-button ${addedToCart[plant.name] ? 'disabled' : ''}`}
                      disabled={addedToCart[plant.name]}
                      onClick={() => handleAddToCart(plant)}
                    >
                      {addedToCart[plant.name] ? 'Added to Cart' : 'Add to Cart'}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <CartItem onContinueShopping={handleContinueShopping} />
      )}
    </div>
  );
}

export default ProductList;
