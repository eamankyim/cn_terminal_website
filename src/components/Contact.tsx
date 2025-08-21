import React, { useState } from 'react';
import { Mail, Phone, MessageCircle, MapPin } from 'lucide-react';
import './Contact.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      company: '',
      service: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          Ready to optimize your logistics? Let's discuss your shipping needs
        </p>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Start a Conversation</h3>
            <p>
              Whether you're looking for a quote, have questions about our services, 
              or want to discuss a partnership, we're here to help.
            </p>
            
            <div className="contact-methods">
              <div className="contact-method">
                <div className="method-icon">
                  <Mail size={24} />
                </div>
                <div className="method-content">
                  <h4>Email Us</h4>
                  <p>info@globalship.com</p>
                  <span>Response within 2 hours</span>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="method-icon">
                  <Phone size={24} />
                </div>
                <div className="method-content">
                  <h4>Call Us</h4>
                  <p>+1 (555) 123-4567</p>
                  <span>24/7 support available</span>
                </div>
              </div>
              
             
            </div>

            <div className="office-locations">
              <h4>Our Offices</h4>
              <div className="office-locations-grid">
                <div className="location">
                  <strong>Tema</strong>
                  <p>Sika avenue, Community 2<br />Tema, Ghana</p>
                </div>
                <div className="location">
                  <strong>London</strong>
                  <p>456 Commerce St, Floor 3<br />London, UK EC1A 1BB</p>
                </div>
                
              </div>
            </div>
          </div>
          
          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email address"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="company">Company</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Enter your company name"
                />
              </div>
              
             
              
              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell us about your shipping needs..."
                />
              </div>
              
              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
