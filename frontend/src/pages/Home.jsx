import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Sprout, Leaf, Heart, TrendingUp, Star } from 'lucide-react';
import axios from 'axios';
import { useLanguage } from '../LanguageContext';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const productData = {
  name: { hi: 'मालवा ऑर्गेनिक खाद', en: 'Malva Organic Manure' },
  quantity: { hi: '40kg बैग', en: '40kg Bag' },
  price: 500
};

const Home = () => {
  const { t } = useLanguage();
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
            <span>{t('badge')}</span>
          </div>
          <h1 className="hero-title">{t('heroTitle')}</h1>
          <p className="hero-subtitle">{t('heroSubtitle')}</p>
          <div className="hero-buttons">
            <Link to="/order" className="btn-primary">
              {t('orderNow')} - ₹{productData.price}
            </Link>
            <Link to="/contact" className="btn-secondary">
              {t('contactUs')}
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
          <h2 className="heading-2">{t('benefitsTitle')}</h2>
          <div className="ai-grid" style={{marginTop: '3rem'}}>
            <div className="product-card benefit-card">
              <div className="benefit-icon">
                <Leaf className="w-8 h-8" style={{color: 'var(--accent-text)'}} />
              </div>
              <h3 className="product-card-title">{t('benefit1Title')}</h3>
              <p className="product-card-description">{t('benefit1Desc')}</p>
            </div>
            <div className="product-card benefit-card">
              <div className="benefit-icon">
                <Heart className="w-8 h-8" style={{color: 'var(--accent-text)'}} />
              </div>
              <h3 className="product-card-title">{t('benefit2Title')}</h3>
              <p className="product-card-description">{t('benefit2Desc')}</p>
            </div>
            <div className="product-card benefit-card">
              <div className="benefit-icon">
                <TrendingUp className="w-8 h-8" style={{color: 'var(--accent-text)'}} />
              </div>
              <h3 className="product-card-title">{t('benefit3Title')}</h3>
              <p className="product-card-description">{t('benefit3Desc')}</p>
            </div>
            <div className="product-card benefit-card">
              <div className="benefit-icon">
                <Sprout className="w-8 h-8" style={{color: 'var(--accent-text)'}} />
              </div>
              <h3 className="product-card-title">{t('benefit4Title')}</h3>
              <p className="product-card-description">{t('benefit4Desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section className="product-section" style={{padding: '5rem 0'}}>
        <div className="container">
          <h2 className="heading-2">{t('productTitle')}</h2>
          <div className="product-showcase-home" style={{marginTop: '3rem'}}>
            <div className="product-bag-container">
              <div className="product-bag-card">
                <div className="bag-image-wrapper">
                  <img 
                    src="https://images.pexels.com/photos/5503338/pexels-photo-5503338.jpeg" 
                    alt="40kg Organic Khad Bag"
                    className="bag-image"
                  />
                </div>
                <div className="bag-details">
                  <h3 className="heading-3">{t('productName')}</h3>
                  <div className="bag-quantity">
                    <Leaf className="w-5 h-5" style={{color: 'var(--accent-text)'}} />
                    <span className="body-medium">40kg {t('bags')}</span>
                  </div>
                  <div className="bag-price-box">
                    <div className="bag-price-row">
                      <span className="price-label">{t('pricePerBag')}:</span>
                      <span className="price-amount">₹{productData.price}</span>
                    </div>
                    <p className="caption" style={{margin: '0.5rem 0 0', textAlign: 'center'}}>{t('naturalChemFree')}</p>
                  </div>
                  <Link to="/order" className="btn-primary" style={{width: '100%'}}>
                    {t('orderNow')}
                  </Link>
                </div>
              </div>
            </div>
            <div className="product-info-container">
              <p className="body-large" style={{marginBottom: '1.5rem'}}>{t('productDesc')}</p>
              <h4 className="product-card-title" style={{marginBottom: '1rem'}}>{t('keyFeatures')}</h4>
              <ul className="product-features-list">
                <li className="feature-list-item">
                  <Leaf className="w-5 h-5" style={{color: 'var(--accent-text)', flexShrink: 0}} />
                  <span>{t('feature1')}</span>
                </li>
                <li className="feature-list-item">
                  <Leaf className="w-5 h-5" style={{color: 'var(--accent-text)', flexShrink: 0}} />
                  <span>{t('feature2')}</span>
                </li>
                <li className="feature-list-item">
                  <Leaf className="w-5 h-5" style={{color: 'var(--accent-text)', flexShrink: 0}} />
                  <span>{t('feature3')}</span>
                </li>
                <li className="feature-list-item">
                  <Leaf className="w-5 h-5" style={{color: 'var(--accent-text)', flexShrink: 0}} />
                  <span>{t('feature4')}</span>
                </li>
                <li className="feature-list-item">
                  <Leaf className="w-5 h-5" style={{color: 'var(--accent-text)', flexShrink: 0}} />
                  <span>{t('feature5')}</span>
                </li>
                <li className="feature-list-item">
                  <Leaf className="w-5 h-5" style={{color: 'var(--accent-text)', flexShrink: 0}} />
                  <span>{t('feature6')}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="reviews-section">
        <div className="container">
          <h2 className="heading-2">{t('reviewsTitle')}</h2>
          {loading ? (
            <p className="text-center body-medium" style={{marginTop: '2rem'}}>{t('loadingReviews')}</p>
          ) : reviews.length === 0 ? (
            <p className="text-center body-medium" style={{marginTop: '2rem'}}>{t('noReviews')}</p>
          ) : (
            <div className="ai-grid" style={{marginTop: '3rem'}}>
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
            <h2 className="heading-2">{t('ctaTitle')}</h2>
            <p className="body-large" style={{margin: '1rem 0', color: 'var(--text-secondary)'}}>{t('ctaDesc')}</p>
            <Link to="/order" className="btn-primary">
              {t('orderNow')} - ₹{productData.price}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
