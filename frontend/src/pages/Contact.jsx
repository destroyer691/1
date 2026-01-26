import React, { useState } from 'react';
import { Mail, Phone, MessageSquare, User } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.mobile || !formData.message) {
      toast.error('Please fill all required fields');
      return;
    }

    if (formData.mobile.length !== 10) {
      toast.error('Mobile number should be 10 digits');
      return;
    }

    // Mock submission
    console.log('Contact form submitted:', formData);
    toast.success('Message sent successfully! We will contact you soon.');
    
    // Reset form
    setFormData({
      name: '',
      mobile: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <MessageSquare className="w-12 h-12" style={{color: 'var(--accent-text)', margin: '0 auto 1rem'}} />
          <h1 className="heading-1">Humse Sampark Karein</h1>
          <p className="hero-subtitle" style={{maxWidth: '600px', margin: '1.5rem auto 0'}}>
            Koi bhi sawal ya query ho, hume zaroor batayein
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Info */}
            <div className="contact-info-card">
              <h3 className="heading-3" style={{marginBottom: '1.5rem'}}>Get in Touch</h3>
              <p className="body-medium" style={{color: 'var(--text-secondary)', marginBottom: '2rem'}}>
                Hum hamesha aapki madad ke liye ready hain. Apne sawaal puchein ya order place karein.
              </p>

              <div className="contact-details">
                <div className="contact-detail-item">
                  <div className="contact-icon">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="body-small" style={{fontWeight: 600, marginBottom: '0.25rem'}}>Phone / WhatsApp</h4>
                    <a href="tel:7067553166" className="link-text">7067553166</a>
                  </div>
                </div>

                <div className="contact-detail-item">
                  <div className="contact-icon">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="body-small" style={{fontWeight: 600, marginBottom: '0.25rem'}}>Email</h4>
                    <a href="mailto:info@malvaorganic.com" className="link-text">info@malvaorganic.com</a>
                  </div>
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="why-choose-box">
                <h4 className="product-card-title" style={{marginBottom: '1rem'}}>Kyun Chunein Malva Organic?</h4>
                <ul className="choose-list">
                  <li className="body-small">100% Natural & Chemical-Free</li>
                  <li className="body-small">Direct from Farm</li>
                  <li className="body-small">Affordable Pricing</li>
                  <li className="body-small">Fast Delivery</li>
                  <li className="body-small">Quality Guaranteed</li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-card">
              <h3 className="heading-3" style={{marginBottom: '1.5rem'}}>Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label className="form-label">
                    <User className="w-4 h-4" />
                    <span>Name *</span>
                  </label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Apna naam enter karein"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">
                    <Phone className="w-4 h-4" />
                    <span>Mobile Number *</span>
                  </label>
                  <Input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="10 digit mobile number"
                    maxLength={10}
                    pattern="[0-9]{10}"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">
                    <Mail className="w-4 h-4" />
                    <span>Email (Optional)</span>
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">
                    <MessageSquare className="w-4 h-4" />
                    <span>Message *</span>
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Apna message yahan likhein..."
                    rows={5}
                    required
                  />
                </div>

                <Button type="submit" className="btn-primary" style={{width: '100%', marginTop: '1rem'}}>
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;