import React from 'react';
import { Zap, Globe, Shield, Award, TrendingUp, Users, BadgeCheck, Leaf } from 'lucide-react';
import './About.css';

const About: React.FC = () => {
  const values = [
    {
      icon: <Award size={48} />,
      title: 'Honour and Integrity',
      description: 'We uphold the highest ethical standards in all our dealings'
    },
    {
      icon: <TrendingUp size={48} />,
      title: 'Forward Thinking',
      description: 'Innovation and adaptability drive our continuous growth'
    },
    {
      icon: <Zap size={48} />,
      title: 'Quality and Efficiency',
      description: 'Excellence in service delivery with optimized processes'
    },
    {
      icon: <Users size={48} />,
      title: 'Customer-Focused',
      description: 'Your needs and satisfaction are at the heart of everything we do'
    },
    {
      icon: <BadgeCheck size={48} />,
      title: 'Professionalism',
      description: 'Maintaining the highest standards of service and conduct'
    },
    {
      icon: <Leaf size={48} />,
      title: 'Employee Development',
      description: 'Investing in our people to build a stronger future'
    }
  ];

  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">About CN Terminal Company Limited</h2>
            <p className="about-description">
              CN Terminal Company Limited is a licensed Customs House Agency that plays a significant role in multiple sectors of the shipping industry. The company has demonstrated consistent growth in its operations, revenue, and workforce. Additionally, it has developed global partnerships and broadened its international clientele, enhancing its presence in the global market.
            </p>
            
            <div className="about-stats">
              <div className="stat">
                <div className="stat-number">Licensed</div>
                <div className="stat-label">Customs House Agency</div>
              </div>
              <div className="stat">
                <div className="stat-number">Global</div>
                <div className="stat-label">Partnerships</div>
              </div>
              <div className="stat">
                <div className="stat-number">Growing</div>
                <div className="stat-label">International Clientele</div>
              </div>
            </div>

            <div className="about-features">
              <h3 style={{ marginBottom: '1.5rem', color: '#1a365d' }}>Why Choose Us</h3>
              <div className="feature-item">
                <div className="feature-icon">
                  <Zap size={24} />
                </div>
                <div className="feature-content">
                  <h4>Speed & Convenience</h4>
                  <p>We align latest developments with our values to provide best tailored services</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">
                  <Shield size={24} />
                </div>
                <div className="feature-content">
                  <h4>Trustworthy & Proactive</h4>
                  <p>Transparent and consistent with our deliverables</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">
                  <Globe size={24} />
                </div>
                <div className="feature-content">
                  <h4>Global Network</h4>
                  <p>Strategic partnerships with leading carriers and agents worldwide</p>
                </div>
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
