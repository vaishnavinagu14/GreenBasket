

import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <img src="/logo1.png"  alt="logopicture"
          className='hero-logo'/>
          <h1>Welcome to GreenBasket</h1>
          <p>Your trusted online grocery partner. Freshness delivered daily right to your doorstep.</p>
          <a href="/Shop" className="shop-btn">Shop Now</a>

          

        
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="feature-card">
          <img src="https://t3.ftcdn.net/jpg/03/11/87/52/360_F_311875255_d57wDCwlZxdtOEwsnmXLHkV1r29i1R2U.jpg" alt="Produce" />
          <h3>Fresh Produce</h3>
          <p>Handpicked fruits and vegetables delivered fresh.</p>
        </div>
        <div className="feature-card">
          <img src="https://cdn-icons-png.flaticon.com/512/3827/3827365.png" alt="Delivery" />
          <h3>Fast Delivery</h3>
          <p>We bring your groceries to your door in no time.</p>
        </div>
        <div className="feature-card">
          <img src="https://cdn.vectorstock.com/i/500p/33/79/100-secure-grunge-badge-with-a-check-mark-label-vector-51493379.jpg" alt="Payment" />
          <h3>Secure Payment</h3>
          <p>Pay safely with multiple payment options.</p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="categories-section">
        <h2>Popular Categories</h2>
        <div className="category-grid">
          {['Fruits', 'Vegetables', 'Dairy', 'Bakery', 'Beverages'].map((cat, index) => (
            <div className="category-card" key={index}>{cat}</div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <h2>What Our Customers Say</h2>
        <div className="testimonial-cards">
          <div className="testimonial">
            <p>"GreenBasket saved my weekends! Fresh veggies always on time."</p>
            <span>- Priya, Dallas</span>
          </div>
          <div className="testimonial">
            <p>"Very convenient and affordable prices. Highly recommend!"</p>
            <span>- Arjun, Austin</span>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="newsletter-section">
        <h2>📬 Stay Updated</h2>
        <p>Get weekly deals & seasonal updates straight to your inbox.</p>
        <form className="newsletter-form">
          <input type="email" placeholder="Your Email" required />
          <button type="submit">Subscribe</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 GreenBasket. All rights reserved.</p>
        <div className="footer-links">
          <a href="contact">Contact</a>
          <a href="contact">Privacy</a>
          <a href="contact">Terms</a>
        </div>
      </footer>
    </div>
  );
};

export default Home;


