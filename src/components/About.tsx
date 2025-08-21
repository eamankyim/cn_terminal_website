import React from 'react';
import { Target, Zap, Handshake, Leaf, Globe, Smartphone, Shield, Ship } from 'lucide-react';
import './About.css';

const About: React.FC = () => {
  const values = [
    {
      icon: <Target size={48} />,
      title: 'Reliability',
      description: 'Consistent delivery performance and transparent communication'
    },
    {
      icon: <Zap size={48} />,
      title: 'Efficiency',
      description: 'Optimized routes and processes to reduce costs and time'
    },
    {
      icon: <Handshake size={48} />,
      title: 'Partnership',
      description: 'Long-term relationships built on trust and mutual success'
    },
    {
      icon: <Leaf size={48} />,
      title: 'Sustainability',
      description: 'Eco-friendly practices and carbon footprint reduction'
    }
  ];

  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">About CN Terminal Co. Ltd</h2>
            <p className="about-description">
              With over 25 years of experience in international logistics, CN Terminal Co. Ltd has established 
              itself as a trusted partner for businesses worldwide. We specialize in providing 
              end-to-end supply chain solutions that drive growth and efficiency.
            </p>
            
            <div className="about-stats">
              <div className="stat">
                <div className="stat-number">25+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat">
                <div className="stat-number">150+</div>
                <div className="stat-label">Countries Served</div>
              </div>
              <div className="stat">
                <div className="stat-number">10,000+</div>
                <div className="stat-label">Happy Clients</div>
              </div>
            </div>

            <div className="about-features">
              <div className="feature-item">
                <div className="feature-icon">
                  <Globe size={24} />
                </div>
                <div className="feature-content">
                  <h4>Global Network</h4>
                  <p>Strategic partnerships with leading carriers and agents worldwide</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">
                  <Smartphone size={24} />
                </div>
                <div className="feature-content">
                  <h4>Real-time Tracking</h4>
                  <p>Advanced technology for complete shipment visibility</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">
                  <Shield size={24} />
                </div>
                <div className="feature-content">
                  <h4>Risk Management</h4>
                  <p>Comprehensive insurance and compliance solutions</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="about-visual">
            <div className="about-image">
              <div className="image-placeholder">
                <div className="placeholder-icon">
                  <Ship size={64} />
                </div>
                <div className="placeholder-text">Global Logistics Excellence</div>
              </div>
            </div>
          </div>
        </div>

        <div className="values-section">
          <h3 className="values-title">Our Core Values</h3>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h4 className="value-title">{value.title}</h4>
                <p className="value-description">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
