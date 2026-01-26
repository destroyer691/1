import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Sprout, Leaf, Heart, TrendingUp, Star } from 'lucide-react';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

// Static data for benefits and product
const productData = {
  name: 'Malva Organic Khad',
  quantity: '50kg Bag',
  price: 599,
  description: 'Gae ke gobar se bana 100% natural organic fertilizer. Chemical-free, soil-friendly, aur fasalon ke liye perfect nutrition.',
  features: [
    'Gae ke gobar se bana 100% organic',
    'Chemical aur pesticide free',
    'Mitti ki fertility naturally badhata hai',
    'Long-lasting soil health improvement',
    'Sabhi prakar ki fasalon ke liye suitable',
    'Eco-friendly aur sustainable'
  ]
};

const benefits = [
  {
    icon: 'leaf',
    title: 'Mitti Ki Upjaau Shakti Badhaye',
    description: 'Natural organic matter se mitti ki structure improve hoti hai aur water retention capacity badhti hai'
  },
  {
    icon: 'heart',
    title: 'Chemical-Free Kheti',
    description: 'Harmful chemicals se mukt, aapki aur aapki family ki health ke liye safe'
  },
  {
    icon: 'trending',
    title: 'Fasalon Ki Quality Badhe',
    description: 'Natural nutrients se plants healthy aur strong bante hain, yield aur quality dono badhti hai'
  },
  {
    icon: 'sprout',
    title: 'Long-term Soil Health',
    description: 'Baar baar use karne se mitti ki natural fertility permanently improve hoti hai'
  }
];

const Home = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const response = await axios.get(`${API}/reviews`);
      setReviews(response.data);
    } catch (error) {
      console.error('Error fetching reviews:', error);
    } finally {
      setLoading(false);
    }
  };

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
              Order Now - ₹{productData.price}
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
            {benefits.map((benefit, index) => (
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
          <div className="product-showcase-home">
            <div className="product-bag-container">
              <div className="product-bag-card">
                <div className="bag-image-wrapper">
                  <img 
                    src="https://images.pexels.com/photos/5503338/pexels-photo-5503338.jpeg" 
                    alt="50kg Organic Khad Bag"
                    className="bag-image"
                  />
                </div>
                <div className="bag-details">
                  <h3 className="heading-3">{productData.name}</h3>
                  <div className="bag-quantity">
                    <Leaf className="w-5 h-5" style={{color: 'var(--accent-text)'}} />
                    <span className="body-medium">{productData.quantity}</span>
                  </div>
                  <div className="bag-price-box">
                    <div className="bag-price-row">
                      <span className="price-label">Price per bag:</span>
                      <span className="price-amount">₹{productData.price}</span>
                    </div>
                    <p className="caption" style={{margin: '0.5rem 0 0', textAlign: 'center'}}>100% Natural & Chemical-Free</p>
                  </div>
                  <Link to="/order" className="btn-primary" style={{width: '100%'}}>
                    Order Now
                  </Link>
                </div>
              </div>
            </div>
            <div className="product-info-container">
              <p className="body-large" style={{marginBottom: '1.5rem'}}>{productData.description}</p>
              <h4 className="product-card-title" style={{marginBottom: '1rem'}}>Key Features:</h4>
              <ul className="product-features-list">
                {productData.features.map((feature, index) => (
                  <li key={index} className="feature-list-item">
                    <Leaf className="w-5 h-5" style={{color: 'var(--accent-text)', flexShrink: 0}} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="reviews-section">
        <div className="container">
          <h2 className="heading-2 text-center" style={{marginBottom: '3rem'}}>Kisan Bhai Ka Vishwas</h2>
          {loading ? (
            <p className="text-center body-medium">Loading reviews...</p>
          ) : reviews.length === 0 ? (
            <p className="text-center body-medium">No reviews yet.</p>
          ) : (
            <div className="ai-grid">
              {reviews.map((review) => (
                <div key={review.id} className="product-card review-card">
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
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-card">
            <h2 className="heading-2">Aaj Hi Order Karein</h2>
            <p className="body-large" style={{margin: '1rem 0', color: 'var(--text-secondary)'}}>Natural organic khad se apni kheti ko banayein chemical-free aur profitable</p>
            <Link to="/order" className="btn-primary">
              Order Now - ₹{productData.price}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;