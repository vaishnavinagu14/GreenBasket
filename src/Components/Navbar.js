import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../Navbar.css'; 
import { CartContext } from '../Context/CartContext'; 

function Navbar() {
  const { cartItems } = useContext(CartContext);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/logo1.png" alt="GreenBasket" />
        <span>GreenBasket</span>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Shop">Shop</Link></li>
        <li>
          <Link to="/cart">
            Cart 🛒 <span className="cart-badge">({cartItems.length})</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;


