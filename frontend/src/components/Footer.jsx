import React from 'react';
import { Link } from 'react-router-dom';
import { Sprout, Phone, Mail, MapPin, Navigation } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const COMPANY_ADDRESS = 'Indore, Madhya Pradesh, India';
const GOOGLE_MAPS_DIRECTION_LINK = 'https://maps.app.goo.gl/8KAcwywnuY6m6T8C6';

const Footer = () => {
  const { t, language } = useLanguage();
  
  const handleLocationClick = () => {
    window.open(GOOGLE_MAPS_DIRECTION_LINK, '_blank');
  };
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Company Info */}
          <div className="footer-section">
            <div className="footer-logo">
              <Sprout className="w-8 h-8" />
              <span className="logo-text">मालवा ऑर्गेनिक</span>
            </div>
            <p className="body-small" style={{color: 'var(--text-secondary)', margin: '1rem 0'}}>
              {t('footerDesc')}
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4 className="footer-heading">{t('quickLinks')}</h4>
            <ul className="footer-links">
              <li><Link to="/" className="footer-link">{t('home')}</Link></li>
              <li><Link to="/about" className="footer-link">{t('about')}</Link></li>
              <li><Link to="/order" className="footer-link">{t('order')}</Link></li>
              <li><Link to="/contact" className="footer-link">{t('contact')}</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h4 className="footer-heading">{t('contactInfo')}</h4>
            <ul className="footer-contact">
              <li className="footer-contact-item">
                <Phone className="w-4 h-4" />
                <a href="tel:9575248908">9575248908</a>
              </li>
              <li className="footer-contact-item">
                <Mail className="w-4 h-4" />
                <a href="mailto:arvindpatidar110@gmail.com">arvindpatidar110@gmail.com</a>
              </li>
              <li 
                className="footer-contact-item footer-location-clickable"
                onClick={handleLocationClick}
                style={{cursor: 'pointer'}}
                title={language === 'hi' ? 'दिशा-निर्देश के लिए क्लिक करें' : 'Click for directions'}
              >
                <MapPin className="w-4 h-4" />
                <span style={{display: 'flex', alignItems: 'center', gap: '0.35rem'}}>
                  {COMPANY_ADDRESS}
                  <Navigation className="w-3 h-3" style={{color: 'var(--accent-text)'}} />
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="caption" style={{color: 'var(--text-muted)', margin: 0}}>
            © {new Date().getFullYear()} मालवा ऑर्गेनिक। {t('rights')}
          </p>
          <p className="caption" style={{color: 'var(--text-muted)', margin: 0}}>
            {t('tagline')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;