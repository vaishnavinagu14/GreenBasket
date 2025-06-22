import React, { useContext } from 'react';
import { CartContext } from '../Context/CartContext'; // ✅ Import the context

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext); // ✅ Access context function

  return (
    <div style={styles.card}>
      <img src={product.image} alt={product.name} style={styles.image} />
      <h4>{product.name}</h4>
      <p>{product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button> {/* ✅ Hook up button */}
    </div>
  );
}       

const styles = {
  card: {
    border: '1px solid #ccc',
    padding: '16px',
    width: '200px',
    textAlign: 'center',
    borderRadius: '8px',
    margin: '10px',
  },
  image: {
    width: '100%',
    height: '100px',
    objectFit: 'cover',
  },
};

export default ProductCard;



