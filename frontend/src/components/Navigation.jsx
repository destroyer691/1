import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sprout, Menu, X, Languages } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: t('home') },
    { path: '/about', label: t('about') },
    { path: '/order', label: t('order') },
    { path: '/contact', label: t('contact') }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <nav className={`nav-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          {/* Logo */}
          <Link to="/" className="nav-logo-large">
            <Sprout className="w-8 h-8" />
            <span className="logo-text-large">मालवा ऑर्गेनिक</span>
            <span className="logo-subtext">Malva Organic</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="nav-links-desktop">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link ${isActive(link.path) ? 'active' : ''}`}
              >
                {link.label}
              </Link>
            ))}
            
            {/* Language Toggle */}
            <button 
              onClick={toggleLanguage} 
              className="language-toggle"
              title={language === 'hi' ? 'Switch to English' : 'हिंदी में बदलें'}
            >
              <Languages className="w-5 h-5" />
              <span>{language === 'hi' ? 'EN' : 'हिं'}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="mobile-menu">
          <div className="mobile-menu-content">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`mobile-nav-link ${isActive(link.path) ? 'active' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <button 
              onClick={() => {
                toggleLanguage();
                setIsMobileMenuOpen(false);
              }} 
              className="mobile-language-toggle"
            >
              <Languages className="w-5 h-5" />
              <span>{language === 'hi' ? 'English' : 'हिंदी'}</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;