import React from 'react';
import { Leaf, Heart, Target, Users } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const About = () => {
  const { t } = useLanguage();
  
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <h1 className="heading-1">{t('aboutTitle')}</h1>
          <p className="hero-subtitle" style={{maxWidth: '800px', margin: '1.5rem auto 0'}}>
            {t('aboutSubtitle')}
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="company-story">
        <div className="container">
          <div className="story-grid">
            <div className="story-image">
              <img 
                src="https://images.unsplash.com/photo-1635574901622-8014a3ddead5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODl8MHwxfHNlYXJjaHwxfHxjb3clMjBkdW5nfGVufDB8fHx8MTc2OTQyMzUwNnww&ixlib=rb-4.1.0&q=85" 
                alt="Organic farming process"
                className="story-main-image"
              />
            </div>
            <div className="story-content">
              <h2 className="heading-2">{t('storyTitle')}</h2>
              <p className="body-large" style={{margin: '1.5rem 0'}}>
                {t('storyText')}
              </p>
              <p className="body-medium" style={{color: 'var(--text-secondary)'}}>
                {t('storyText2')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="vision-mission" style={{background: 'var(--bg-section)', padding: '4rem 0'}}>
        <div className="container">
          <div className="ai-grid" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))'}}>
            <div className="product-card">
              <Target className="w-10 h-10" style={{color: 'var(--accent-text)', marginBottom: '1rem'}} />
              <h3 className="product-card-title">{t('ourVision')}</h3>
              <p className="product-card-description">{t('visionText')}</p>
            </div>
            <div className="product-card">
              <Heart className="w-10 h-10" style={{color: 'var(--accent-text)', marginBottom: '1rem'}} />
              <h3 className="product-card-title">{t('ourMission')}</h3>
              <p className="product-card-description">{t('missionText')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Cow Dung Fertilizer */}
      <section className="why-section">
        <div className="container">
          <h2 className="heading-2 text-center" style={{marginBottom: '3rem'}}>{t('whyCowDung')}</h2>
          <div className="why-grid">
            <div className="why-image">
              <img 
                src="https://images.unsplash.com/photo-1549488235-42996ae3b650?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwyfHxjYXR0bGUlMjBmYXJtfGVufDB8fHx8MTc2OTQyMzUxMnww&ixlib=rb-4.1.0&q=85" 
                alt="Cattle farm"
                className="why-main-image"
              />
            </div>
            <div className="why-content">
              <ul className="why-list">
                <li className="why-item">
                  <Leaf className="w-6 h-6" style={{color: 'var(--accent-text)', flexShrink: 0}} />
                  <span className="body-medium">{t('whyPoint1')}</span>
                </li>
                <li className="why-item">
                  <Leaf className="w-6 h-6" style={{color: 'var(--accent-text)', flexShrink: 0}} />
                  <span className="body-medium">{t('whyPoint2')}</span>
                </li>
                <li className="why-item">
                  <Leaf className="w-6 h-6" style={{color: 'var(--accent-text)', flexShrink: 0}} />
                  <span className="body-medium">{t('whyPoint3')}</span>
                </li>
                <li className="why-item">
                  <Leaf className="w-6 h-6" style={{color: 'var(--accent-text)', flexShrink: 0}} />
                  <span className="body-medium">{t('whyPoint4')}</span>
                </li>
                <li className="why-item">
                  <Leaf className="w-6 h-6" style={{color: 'var(--accent-text)', flexShrink: 0}} />
                  <span className="body-medium">{t('whyPoint5')}</span>
                </li>
                <li className="why-item">
                  <Leaf className="w-6 h-6" style={{color: 'var(--accent-text)', flexShrink: 0}} />
                  <span className="body-medium">{t('whyPoint6')}</span>
                </li>
                <li className="why-item">
                  <Leaf className="w-6 h-6" style={{color: 'var(--accent-text)', flexShrink: 0}} />
                  <span className="body-medium">{t('whyPoint7')}</span>
                </li>
                <li className="why-item">
                  <Leaf className="w-6 h-6" style={{color: 'var(--accent-text)', flexShrink: 0}} />
                  <span className="body-medium">{t('whyPoint8')}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="approach-section" style={{background: 'var(--bg-section)', padding: '4rem 0'}}>
        <div className="container">
          <h2 className="heading-2 text-center" style={{marginBottom: '3rem'}}>Hamara Approach</h2>
          <div className="ai-grid">
            <div className="product-card">
              <Leaf className="w-10 h-10" style={{color: 'var(--accent-text)', marginBottom: '1rem'}} />
              <h3 className="product-card-title">Eco-Friendly</h3>
              <p className="product-card-description">100% natural process, zero chemicals, zero pollution - prakriti ke liye safe</p>
            </div>
            <div className="product-card">
              <Heart className="w-10 h-10" style={{color: 'var(--accent-text)', marginBottom: '1rem'}} />
              <h3 className="product-card-title">Soil-Friendly</h3>
              <p className="product-card-description">Mitti ki natural fertility badhata hai, structure improve karta hai</p>
            </div>
            <div className="product-card">
              <Users className="w-10 h-10" style={{color: 'var(--accent-text)', marginBottom: '1rem'}} />
              <h3 className="product-card-title">Farmer-Friendly</h3>
              <p className="product-card-description">Affordable price, better yield, long-term soil health - kisano ke liye profitable</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;