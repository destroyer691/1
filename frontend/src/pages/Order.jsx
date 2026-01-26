import React, { useState } from 'react';
import { ShoppingBag, Package, IndianRupee, Phone, MapPin, User } from 'lucide-react';
import { mockData } from '../mock';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { toast } from 'sonner';

const Order = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    address: '',
    quantity: 1,
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
    if (!formData.name || !formData.mobile || !formData.address || !formData.quantity) {
      toast.error('Please fill all required fields');
      return;
    }

    if (formData.mobile.length !== 10) {
      toast.error('Mobile number should be 10 digits');
      return;
    }

    // Mock submission
    console.log('Order submitted:', formData);
    toast.success('Order placed successfully! We will contact you soon.');
    
    // Reset form
    setFormData({
      name: '',
      mobile: '',
      address: '',
      quantity: 1,
      message: ''
    });
  };

  const totalPrice = mockData.product.price * formData.quantity;

  return (
    <div className="order-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <ShoppingBag className="w-12 h-12" style={{color: 'var(--accent-text)', margin: '0 auto 1rem'}} />
          <h1 className="heading-1">Order Karein</h1>
          <p className="hero-subtitle" style={{maxWidth: '600px', margin: '1.5rem auto 0'}}>
            Apna order place karein - hum jaldi se aapko contact karenge
          </p>
        </div>
      </section>

      {/* Order Form Section */}
      <section className="order-form-section">
        <div className="container">
          <div className="order-grid">
            {/* Product Summary */}
            <div className="product-summary-card">
              <h3 className="heading-3" style={{marginBottom: '1.5rem'}}>Product Details</h3>
              <div className="product-summary-content">
                <img 
                  src="https://images.unsplash.com/photo-1492496913980-501348b61469?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NzR8MHwxfHNlYXJjaHwyfHxjb21wb3N0fGVufDB8fHx8MTc2OTQyMzQ5OXww&ixlib=rb-4.1.0&q=85" 
                  alt="Product"
                  className="summary-product-image"
                />
                <div>
                  <h4 className="product-card-title">{mockData.product.name}</h4>
                  <div className="summary-detail">
                    <Package className="w-5 h-5" />
                    <span>{mockData.product.quantity}</span>
                  </div>
                  <div className="summary-detail">
                    <IndianRupee className="w-5 h-5" />
                    <span>₹{mockData.product.price} per bag</span>
                  </div>
                </div>
              </div>

              {/* Price Calculation */}
              <div className="price-summary">
                <div className="price-row">
                  <span>Quantity:</span>
                  <span>{formData.quantity} bag(s)</span>
                </div>
                <div className="price-row">
                  <span>Price per bag:</span>
                  <span>₹{mockData.product.price}</span>
                </div>
                <div className="price-row price-total">
                  <span>Total Amount:</span>
                  <span>₹{totalPrice}</span>
                </div>
              </div>
            </div>

            {/* Order Form */}
            <div className="order-form-card">
              <h3 className="heading-3" style={{marginBottom: '1.5rem'}}>Apni Details Bharein</h3>
              <form onSubmit={handleSubmit} className="order-form">
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
                  />
                </div>

                <Button type="submit" className="btn-primary" style={{width: '100%', marginTop: '1rem'}}>
                  Place Order - ₹{totalPrice}
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