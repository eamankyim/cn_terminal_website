import React from 'react';
import { Mail, Phone, Globe } from 'lucide-react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <img src="/images/cn_logo.png" alt="CN Terminal Co. Ltd" className="footer-logo-image" />
              <div className="footer-logo-text">
                <h3>CN Terminal Co. Ltd</h3>
                <span>Logistics</span>
              </div>
            </div>
            <p className="footer-description">
              Connecting continents, delivering excellence. Your trusted partner for 
              international logistics and supply chain solutions.
            </p>
            <div className="social-links">
              <a href="#" className="social-link">LinkedIn</a>
              <a href="#" className="social-link">Twitter</a>
              <a href="#" className="social-link">Facebook</a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Services</h4>
            <ul className="footer-links">
              <li><a href="#services">Ocean Freight</a></li>
              <li><a href="#services">Air Cargo</a></li>
              <li><a href="#services">Land Transport</a></li>
              <li><a href="#services">Warehousing</a></li>
              <li><a href="#services">Customs Brokerage</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Company</h4>
            <ul className="footer-links">
              <li><a href="#about">About Us</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">News & Updates</a></li>
              <li><a href="#">Sustainability</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Support</h4>
            <ul className="footer-links">
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Track Shipment</a></li>
              <li><a href="#">Documentation</a></li>
              <li><a href="#">API Access</a></li>
              <li><a href="#">Emergency Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="contact-info">
              <p><Mail size={16} /> info@cnterminal.com</p>
              <p><Phone size={16} /> +1 (555) 123-4567</p>
              <p><Globe size={16} /> 24/7 Global Support</p>
            </div>
            <div className="newsletter">
              <h5>Stay Updated</h5>
              <p>Get the latest logistics insights</p>
              <div className="newsletter-form">
                <input type="email" placeholder="Enter your email" />
                <button className="btn btn-primary">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2025 CN Terminal Co. Ltd. All rights reserved.</p>
            <div className="footer-bottom-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
