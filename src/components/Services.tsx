import React from 'react';
import Slider from 'react-slick';
import { Ship, Plane, Truck, Package, Shield, FileText, ArrowLeftRight, MapPin, Container, ChevronLeft, ChevronRight } from 'lucide-react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Services.css';

interface ArrowProps {
  onClick?: () => void;
}

const NextArrow: React.FC<ArrowProps> = ({ onClick }) => {
  return (
    <button className="slider-arrow slider-arrow-next" onClick={onClick}>
      <ChevronRight size={32} />
    </button>
  );
};

const PrevArrow: React.FC<ArrowProps> = ({ onClick }) => {
  return (
    <button className="slider-arrow slider-arrow-prev" onClick={onClick}>
      <ChevronLeft size={32} />
    </button>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      icon: <Ship size={64} />,
      title: 'Freight Forwarding',
      description: 'Comprehensive freight forwarding services for seamless international shipping solutions.',
      features: ['Sea Freight', 'Multi-modal Transport', 'Documentation', 'Route Optimization'],
      image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=80'
    },
    {
      icon: <ArrowLeftRight size={64} />,
      title: 'Transit',
      description: 'Efficient transit services ensuring smooth cargo movement across borders.',
      features: ['Cross-border Transit', 'Transit Documentation', 'Route Planning', 'Time-sensitive Delivery'],
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80'
    },
    {
      icon: <Plane size={64} />,
      title: 'Air Cargo',
      description: 'Fast and reliable air cargo services for time-sensitive shipments worldwide.',
      features: ['Express Delivery', 'Charter Services', 'Priority Handling', 'Global Coverage'],
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80'
    },
    {
      icon: <Container size={64} />,
      title: 'Imports and Export',
      description: 'Complete import and export handling with full regulatory compliance.',
      features: ['Import Processing', 'Export Services', 'Trade Compliance', 'Documentation'],
      image: 'https://images.unsplash.com/photo-1494412519320-aa613dfb7738?w=800&q=80'
    },
    {
      icon: <FileText size={64} />,
      title: 'Custom Clearance',
      description: 'Expert customs clearance services ensuring smooth and compliant cargo processing.',
      features: ['Licensed Agency', 'Fast Processing', 'Compliance Management', 'Duty Calculation'],
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80'
    },
    {
      icon: <Package size={64} />,
      title: 'Cargo Logistics',
      description: 'End-to-end cargo logistics management for all your supply chain needs.',
      features: ['Supply Chain Management', 'Tracking', 'Coordination', 'Delivery Management'],
      image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80'
    },
    {
      icon: <Shield size={64} />,
      title: 'Warehousing',
      description: 'Secure warehousing facilities with modern storage and inventory management.',
      features: ['Secure Storage', 'Inventory Management', 'Distribution', 'Climate Control'],
      image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80'
    },
    {
      icon: <MapPin size={64} />,
      title: 'Destination Management',
      description: 'Complete destination management services ensuring smooth final delivery.',
      features: ['Last-mile Delivery', 'Local Coordination', 'Receipt Management', 'Customer Support'],
      image: 'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=800&q=80'
    },
    {
      icon: <Truck size={64} />,
      title: 'Haulage',
      description: 'Reliable haulage services for ground transportation of all cargo types.',
      features: ['Local Transport', 'Long-distance Haulage', 'Fleet Management', 'Timely Delivery'],
      image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80'
    }
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  return (
    <section id="services" className="section services">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">
          Comprehensive logistics solutions tailored to your business needs
        </p>
        
        <div className="services-slider-wrapper">
          <Slider {...sliderSettings}>
            {services.map((service, index) => (
              <div key={index} className="service-slide">
                <div className="service-slide-content">
                  <div className="service-image-container">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="service-image"
                    />
                    <div className="service-image-overlay">
                      <div className="service-icon-large">{service.icon}</div>
                    </div>
                  </div>
                  
                  <div className="service-details">
                    <div className="service-icon-small">{service.icon}</div>
                    <h3 className="service-title">{service.title}</h3>
                    <p className="service-description">{service.description}</p>
                    <ul className="service-features">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex}>
                          <span className="feature-bullet">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Services;
