import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import './Contact.css';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          We're here to help with all your shipping and logistics needs
        </p>
        
        <div className="contact-wrapper">
          <div className="contact-cards">
            <div className="contact-card">
              <div className="contact-icon">
                <Mail size={40} />
              </div>
              <h3>Email Us</h3>
              <a href="mailto:info@cnterminal.com">info@cnterminal.com</a>
              <a href="mailto:enquiries@cnterminal.com">enquiries@cnterminal.com</a>
              <p className="contact-note">For enquiries and information</p>
            </div>
            
            <div className="contact-card">
              <div className="contact-icon">
                <Phone size={40} />
              </div>
              <h3>Call Us</h3>
              <a href="tel:+233553799811">+233 553 799 811</a>
              <a href="tel:+233506580292">+233 506 580 292</a>
              <a href="tel:+233555552645">+233 555 552 645</a>
              <p className="contact-note">Available during business hours</p>
            </div>
            
            <div className="contact-card">
              <div className="contact-icon">
                <MapPin size={40} />
              </div>
              <h3>Visit Us</h3>
              <p className="address">
                <strong>CN Terminal Company Limited</strong><br />
                Salifu Dagati Extension<br />
                Tema Community Two<br />
                Opposite Tema Police Station<br />
                P.O. BOX TN 161<br />
                Teshie-Nungua, Accra<br />
                Ghana
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
