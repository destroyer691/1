import React from 'react';
import { Link } from 'react-router-dom';
import { Sprout, Leaf, Heart, TrendingUp, Star } from 'lucide-react';
import { mockData } from '../mock';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-badge">
            <Sprout className="w-5 h-5" />
            <span>100% Natural & Chemical-Free</span>
          </div>
          <h1 className="hero-title">
            Natural Fertilizer for Healthy Soil & Better Crops
          </h1>
          <p className="hero-subtitle">
            Gae ke gobar se bana 100% organic khad - Apni mitti ko den natural shakti,
            <br />paaye behtar fasalein bina chemical ke
          </p>
          <div className="hero-buttons">
            <Link to="/order" className="btn-primary">
              Order Now - ₹{mockData.product.price}
            </Link>
            <Link to="/contact" className="btn-secondary">
              Contact Us
            </Link>
          </div>
        </div>
        <div className="hero-image-grid">
          <img 
            src="https://images.unsplash.com/photo-1529313780224-1a12b68bed16?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA4Mzl8MHwxfHNlYXJjaHwyfHxvcmdhbmljJTIwZmFybWluZ3xlbnwwfHx8fDE3Njk0MjM0ODN8MA&ixlib=rb-4.1.0&q=85" 
            alt="Organic farming" 
            className="hero-main-image"
          />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <div className="container">
          <h2 className="heading-2 text-center" style={{marginBottom: '3rem'}}>Organic Khad Ke Fayde</h2>
          <div className="ai-grid">
            {mockData.benefits.map((benefit, index) => (
              <div key={index} className="product-card benefit-card">
                <div className="benefit-icon">
                  {benefit.icon === 'leaf' && <Leaf className="w-8 h-8" style={{color: 'var(--accent-text)'}} />}
                  {benefit.icon === 'heart' && <Heart className="w-8 h-8" style={{color: 'var(--accent-text)'}} />}
                  {benefit.icon === 'trending' && <TrendingUp className="w-8 h-8" style={{color: 'var(--accent-text)'}} />}
                  {benefit.icon === 'sprout' && <Sprout className="w-8 h-8" style={{color: 'var(--accent-text)'}} />}
                </div>
                <h3 className="product-card-title">{benefit.title}</h3>
                <p className="product-card-description">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section className="product-section" style={{background: 'var(--bg-section)', padding: '4rem 0'}}>
        <div className="container">
          <h2 className="heading-2 text-center" style={{marginBottom: '3rem'}}>Hamara Product</h2>
          <div className="product-showcase">
            <div className="product-image-container">
              <img 
                src="https://images.unsplash.com/photo-1587733761376-3f26fc81d17f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NzR8MHwxfHNlYXJjaHwxfHxjb21wb3N0fGVufDB8fHx8MTc2OTQyMzQ5OXww&ixlib=rb-4.1.0&q=85" 
                alt="Organic fertilizer"
                className="product-showcase-image"
              />
            </div>
            <div className="product-details-container">
              <h3 className="heading-2">{mockData.product.name}</h3>
              <div className="product-price">
                <span className="price-label">Price:</span>
                <span className="price-value">₹{mockData.product.price}</span>
                <span className="price-unit">per {mockData.product.quantity}</span>
              </div>
              <p className="body-large" style={{margin: '1.5rem 0'}}>{mockData.product.description}</p>
              <ul className="product-features">
                {mockData.product.features.map((feature, index) => (
                  <li key={index} className="feature-item">
                    <Leaf className="w-5 h-5" style={{color: 'var(--accent-text)', flexShrink: 0}} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link to="/order" className="btn-primary" style={{marginTop: '2rem'}}>
                Order Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="reviews-section">
        <div className="container">
          <h2 className="heading-2 text-center" style={{marginBottom: '3rem'}}>Kisan Bhai Ka Vishwas</h2>
          <div className="ai-grid">
            {mockData.reviews.map((review, index) => (
              <div key={index} className="product-card review-card">
                <div className="review-stars">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5" style={{fill: 'var(--accent-primary)', color: 'var(--accent-primary)'}} />
                  ))}
                </div>
                <p className="body-medium" style={{margin: '1rem 0', fontStyle: 'italic', color: 'var(--text-body)'}}>
                  "{review.comment}"
                </p>
                <div className="review-author">
                  <p className="body-small" style={{fontWeight: 600, color: 'var(--text-primary)', margin: 0}}>{review.name}</p>
                  <p className="caption" style={{margin: 0}}>{review.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-card">
            <h2 className="heading-2">Aaj Hi Order Karein</h2>
            <p className="body-large" style={{margin: '1rem 0', color: 'var(--text-secondary)'}}>Natural organic khad se apni kheti ko banayein chemical-free aur profitable</p>
            <Link to="/order" className="btn-primary">
              Order Now - ₹{mockData.product.price}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;