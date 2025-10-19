import React from 'react';
import { TrendingUp, Users, Leaf, Award } from 'lucide-react';
import './Stats.css';

const Stats: React.FC = () => {
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
            At CN Terminal, our impact goes beyond services; it reflects our commitment to progress, reliability, and community growth.
          </p>
          
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-icon">
                <TrendingUp size={48} />
              </div>
              <h3 className="stat-title">Driving Economic Growth</h3>
              <p className="stat-description">
                We enable our clients business scale up and strengthen their supply chains.
              </p>
            </div>
            
            <div className="stat-item">
              <div className="stat-icon">
                <Users size={48} />
              </div>
              <h3 className="stat-title">Empowering Communities</h3>
              <p className="stat-description">
                We create jobs and foster inclusive growth in our operational areas.
              </p>
            </div>
            
            <div className="stat-item">
              <div className="stat-icon">
                <Leaf size={48} />
              </div>
              <h3 className="stat-title">Sustaining the Environment</h3>
              <p className="stat-description">
                Our operations prioritise sustainability and responsible resource use.
              </p>
            </div>

            <div className="stat-item">
              <div className="stat-icon">
                <Award size={48} />
              </div>
              <h3 className="stat-title">Setting New Standards</h3>
              <p className="stat-description">
                We lead in terminal management with a focus on innovation, safety, and integrity.
              </p>
            </div>
          </div>

          <div className="stats-highlight">
            <div className="highlight-content">
              <p className="impact-closing">
                Every milestone achieved connects businesses, supports development, and builds a more efficient future for all.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
