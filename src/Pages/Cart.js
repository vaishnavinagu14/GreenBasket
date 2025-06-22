
import React, { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import { useNavigate } from 'react-router-dom';
import '../Cart.css';

const Cart = () => {
  const {
    cartItems,
    increaseQty,
    decreaseQty,
    removeFromCart,
    clearCart,
  } = useContext(CartContext);

  const navigate = useNavigate();

  const total = cartItems
    .reduce((sum, item) => sum + item.price * item.quantity, 0)
    .toFixed(2);

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.name} className="cart-image" />
              <div className="cart-details">
                <h4>{item.name} - ${item.price} × {item.quantity}</h4>
                <div className="qty-buttons">
                  <button onClick={() => decreaseQty(item.id)}>-</button>
                  <button onClick={() => increaseQty(item.id)}>+</button>
                  <button onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
              </div>
            </div>
          ))}

          <h3>Total: ${total}</h3>

          <div className="cart-actions">
            <button onClick={clearCart} className="clear-btn">Clear Cart</button>
            <button onClick={() => navigate('/checkout')} className="checkout-btn">
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
