import React, { useState, useEffect, useCallback } from 'react';
import { Globe, Handshake, Star } from 'lucide-react';
import './Stats.css';

const Stats: React.FC = () => {
  const [counts, setCounts] = useState({
    countries: 0,
    clients: 0,
    years: 0
  });

  const targetCounts = {
    countries: 150,
    clients: 10000,
    years: 25
  };

  const animateCounters = useCallback(() => {
    const duration = 2000;
    const steps = 60;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      
      setCounts({
        countries: Math.min(Math.floor((targetCounts.countries / steps) * currentStep), targetCounts.countries),
        clients: Math.min(Math.floor((targetCounts.clients / steps) * currentStep), targetCounts.clients),
        years: Math.min(Math.floor((targetCounts.years / steps) * currentStep), targetCounts.years)
      });

      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, duration / steps);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounters();
        }
      });
    });

    const statsSection = document.querySelector('.stats');
    if (statsSection) {
      observer.observe(statsSection);
    }

    return () => observer.disconnect();
  }, [animateCounters]);

  return (
    <section 
      className="section stats" 
      style={{
        backgroundImage: `linear-gradient(rgba(3, 34, 105, 0.8), rgba(3, 34, 105, 0.8)), url('/images/portimage.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="container">
        <div className="stats-content">
          <h2 className="section-title">Our Impact</h2>
          <p className="section-subtitle">
            With over 25 years of experience in international logistics, CN Terminal Co. Ltd has established itself as a trusted partner for businesses worldwide. We specialize in providing end-to-end supply chain solutions that drive growth and efficiency.
          </p>
          
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">{counts.years}+</div>
              <div className="stat-label">Years Experience</div>
              <div className="stat-icon">
                <Star size={40} />
              </div>
            </div>
            
            <div className="stat-item">
              <div className="stat-number">{counts.countries}+</div>
              <div className="stat-label">Countries Served</div>
              <div className="stat-icon">
                <Globe size={40} />
              </div>
            </div>
            
            <div className="stat-item">
              <div className="stat-number">{counts.clients.toLocaleString()}+</div>
              <div className="stat-label">Happy Clients</div>
              <div className="stat-icon">
                <Handshake size={40} />
              </div>
            </div>
          </div>

          <div className="stats-highlight">
            <div className="highlight-content">
              <h3>Trusted by Industry Leaders</h3>
              <p>
                From Fortune 500 companies to growing startups, we've built lasting partnerships 
                based on reliability, transparency, and exceptional service.
              </p>
              <div className="highlight-stats">
                <div className="highlight-stat">
                  <strong>99.8%</strong>
                  <span>On-time Delivery</span>
                </div>
                <div className="highlight-stat">
                  <strong>24/7</strong>
                  <span>Customer Support</span>
                </div>
                <div className="highlight-stat">
                  <strong>ISO 9001</strong>
                  <span>Certified</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
