import React from 'react';
import { Link } from 'react-router-dom';
import { Sprout, Phone, Mail, MapPin } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const COMPANY_LOCATION = 'इंदौर, मध्य प्रदेश'; // Indore, Madhya Pradesh

const Footer = () => {
  const { t } = useLanguage();
  
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
              <li className="footer-contact-item">
                <MapPin className="w-4 h-4" />
                <span>{COMPANY_LOCATION}</span>
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