
import React, { useContext, useState } from 'react';
import { CartContext } from '../Context/CartContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import '../Checkout.css';

function Checkout() {
  const { cartItems, clearCart } = useContext(CartContext);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const navigate = useNavigate();

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);

  const handlePlaceOrder = () => {
    if (!name.trim() || !address.trim()) {
      toast.error('Please fill in all details.');
      return;
    }

    toast.success(`Thank you for your order, ${name}!`);
    clearCart();
    navigate('/');
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <div className="checkout-form">
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          placeholder="Delivery Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>

      <div className="order-summary">
        <h3>Order Summary</h3>
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.name} × {item.quantity} = ${(item.price * item.quantity).toFixed(2)}
            </li>
          ))}
        </ul>
        <p><strong>Total:</strong> ${total}</p>
        <button onClick={handlePlaceOrder}>Place Order</button>
      </div>
    </div>
  );
}

export default Checkout;
