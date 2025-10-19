import React from 'react';
import { Ship, Plane, Truck, Package, Globe, Shield } from 'lucide-react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero">
      {/* Video Background */}
      <div className="hero-video-container">
        <video 
          className="hero-video" 
          autoPlay 
          muted 
          loop 
          playsInline
          poster="/images/portimage.jpg"
        >
          <source src="/videos/shippingvideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-video-overlay"></div>
      </div>

      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-logo">
              <img src="/images/cn_logo.png" alt="CN Terminal Co. Ltd" className="hero-logo-image" />
              <h2 className="hero-logo-text">CN Terminal Co. Ltd</h2>
            </div>
            <h1 className="hero-title">
              Licensed Customs House
              <span className="highlight"> Agency</span>
            </h1>
            <p className="hero-subtitle">
              Your trusted partner in shipping and logistics. We provide comprehensive customs clearance, 
              freight forwarding, and cargo logistics services with a commitment to speed, reliability, and excellence.
            </p>
            <div className="hero-actions">
              <a href="#contact" className="btn btn-primary">Get Started</a>
              <a href="#services" className="btn btn-secondary">Our Services</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
