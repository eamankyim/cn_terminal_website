import React from 'react';
import { Ship, Plane, Truck, Package, Shield, FileText } from 'lucide-react';
import './Services.css';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Ship size={64} />,
      title: 'Ocean Freight',
      description: 'Cost-effective sea transportation for large cargo volumes with global port coverage.',
      features: ['FCL & LCL', 'Port to Port', 'Door to Door', 'Customs Clearance']
    },
    {
      icon: <Plane size={64} />,
      title: 'Air Cargo',
      description: 'Express air freight services for time-sensitive shipments worldwide.',
      features: ['Express Delivery', 'Charter Flights', 'Temperature Control', 'Dangerous Goods']
    },
    {
      icon: <Truck size={64} />,
      title: 'Land Transport',
      description: 'Comprehensive ground transportation solutions across continents.',
      features: ['Trucking', 'Rail Freight', 'Intermodal', 'Last Mile Delivery']
    },
    {
      icon: <Package size={64} />,
      title: 'Warehousing',
      description: 'Strategic storage facilities with inventory management and distribution.',
      features: ['Bonded Warehouses', 'Cross-docking', 'Inventory Control', 'Order Fulfillment']
    },
    {
      icon: <Shield size={64} />,
      title: 'Insurance & Claims',
      description: 'Comprehensive cargo insurance and claims management services.',
      features: ['All Risk Coverage', 'Claims Processing', 'Risk Assessment', 'Legal Support']
    },
    {
      icon: <FileText size={64} />,
      title: 'Customs Brokerage',
      description: 'Expert customs clearance and documentation services worldwide.',
      features: ['Import/Export', 'Documentation', 'Compliance', 'Duty Optimization']
    }
  ];

  return (
    <section id="services" className="section services">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">
          Comprehensive logistics solutions tailored to your business needs
        </p>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
