import React from 'react';
import { Link } from 'react-router-dom';
import { Sprout, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Company Info */}
          <div className="footer-section">
            <div className="footer-logo">
              <Sprout className="w-8 h-8" />
              <span className="logo-text">Malva Organic</span>
            </div>
            <p className="body-small" style={{color: 'var(--text-secondary)', margin: '1rem 0'}}>
              100% natural organic khad - Gae ke gobar se bana, mitti aur fasalon ke liye perfect.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/" className="footer-link">Home</Link></li>
              <li><Link to="/about" className="footer-link">About Us</Link></li>
              <li><Link to="/order" className="footer-link">Order Now</Link></li>
              <li><Link to="/contact" className="footer-link">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h4 className="footer-heading">Contact Us</h4>
            <ul className="footer-contact">
              <li className="footer-contact-item">
                <Phone className="w-4 h-4" />
                <a href="tel:7067553166">7067553166</a>
              </li>
              <li className="footer-contact-item">
                <Mail className="w-4 h-4" />
                <a href="mailto:info@malvaorganic.com">info@malvaorganic.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="caption" style={{color: 'var(--text-muted)', margin: 0}}>
            © {new Date().getFullYear()} Malva Organic. All rights reserved.
          </p>
          <p className="caption" style={{color: 'var(--text-muted)', margin: 0}}>
            Natural Farming for Better Future
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;