import React, { useState } from 'react';
import { ShoppingBag, Package, IndianRupee, Phone, MapPin, User } from 'lucide-react';
import axios from 'axios';
import { useLanguage } from '../LanguageContext';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { toast } from 'sonner';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const PRICE_PER_BAG = 500;

const Order = () => {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    address: '',
    quantity: 1,
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.mobile || !formData.address || !formData.quantity) {
      toast.error(language === 'hi' ? 'कृपया सभी आवश्यक फील्ड भरें' : 'Please fill all required fields');
      return;
    }

    if (formData.mobile.length !== 10 || !formData.mobile.match(/^[0-9]+$/)) {
      toast.error(language === 'hi' ? 'मोबाइल नंबर 10 अंकों का होना चाहिए' : 'Mobile number must be 10 digits');
      return;
    }

    if (formData.quantity < 1 || formData.quantity > 100) {
      toast.error(language === 'hi' ? 'मात्रा 1 से 100 के बीच होनी चाहिए' : 'Quantity must be between 1 and 100');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await axios.post(`${API}/orders`, formData);
      
      if (response.data.success) {
        toast.success(response.data.message);
        
        // Reset form
        setFormData({
          name: '',
          mobile: '',
          address: '',
          quantity: 1,
          message: ''
        });
      }
    } catch (error) {
      console.error('Error submitting order:', error);
      const errorMsg = language === 'hi' 
        ? 'ऑर्डर करने में त्रुटि। कृपया पुनः प्रयास करें।'
        : 'Failed to place order. Please try again.';
      toast.error(error.response?.data?.detail || errorMsg);
    } finally {
      setIsSubmitting(false);
    }
  };

  const totalPrice = PRICE_PER_BAG * formData.quantity;

  return (
    <div className="order-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <ShoppingBag className="w-12 h-12" style={{color: 'var(--accent-text)', margin: '0 auto 1rem'}} />
          <h1 className="heading-1">{t('orderPageTitle')}</h1>
          <p className="hero-subtitle" style={{maxWidth: '600px', margin: '1.5rem auto 0'}}>
            {t('orderPageSubtitle')}
          </p>
        </div>
      </section>

      {/* Order Form Section */}
      <section className="order-form-section">
        <div className="container">
          <div className="order-grid">
            {/* Product Summary */}
            <div className="product-summary-card">
              <h3 className="heading-3" style={{marginBottom: '1.5rem'}}>{t('productDetails')}</h3>
              <div className="product-summary-content">
                <img 
                  src="https://images.pexels.com/photos/5503338/pexels-photo-5503338.jpeg" 
                  alt="Product"
                  className="summary-product-image"
                />
                <div>
                  <h4 className="product-card-title">{t('productName')}</h4>
                  <div className="summary-detail">
                    <Package className="w-5 h-5" />
                    <span>40kg {t('bags')}</span>
                  </div>
                  <div className="summary-detail">
                    <IndianRupee className="w-5 h-5" />
                    <span>₹{PRICE_PER_BAG} {t('pricePerBag2')}</span>
                  </div>
                </div>
              </div>

              {/* Price Calculation */}
              <div className="price-summary">
                <div className="price-row">
                  <span>{t('quantity')}</span>
                  <span>{formData.quantity} {t('bags')}</span>
                </div>
                <div className="price-row">
                  <span>{t('pricePerBag2')}</span>
                  <span>₹{PRICE_PER_BAG}</span>
                </div>
                <div className="price-row price-total">
                  <span>{t('totalAmount')}:</span>
                  <span>₹{totalPrice}</span>
                </div>
              </div>
            </div>

            {/* Order Form */}
            <div className="order-form-card">
              <h3 className="heading-3" style={{marginBottom: '1.5rem'}}>{t('yourDetails')}</h3>
              <form onSubmit={handleSubmit} className="order-form">
                <div className="form-group">
                  <label className="form-label">
                    <User className="w-4 h-4" />
                    <span>{t('name')} *</span>
                  </label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t('namePlaceholder')}
                    required
                    disabled={isSubmitting}
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
                    disabled={isSubmitting}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">
                    <MapPin className="w-4 h-4" />
                    <span>Delivery Address *</span>
                  </label>
                  <Textarea
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Complete address with pincode"
                    rows={3}
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">
                    <Package className="w-4 h-4" />
                    <span>Quantity (Number of 50kg Bags) *</span>
                  </label>
                  <Input
                    type="number"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    min="1"
                    max="100"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">
                    <span>Additional Message (Optional)</span>
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Koi special instructions ya queries"
                    rows={3}
                    disabled={isSubmitting}
                  />
                </div>

                <Button 
                  type="submit" 
                  className="btn-primary" 
                  style={{width: '100%', marginTop: '1rem'}}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Placing Order...' : `Place Order - ₹${totalPrice}`}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Order;