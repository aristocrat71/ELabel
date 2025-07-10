import React from 'react';
import './PhonePreview.css';
import phoneImg from '../assets/phone.webp';

const PhonePreview: React.FC = () => {
  return (
    <section className="full-image-section">
      <img src={phoneImg} alt="Phone mockup" className="full-image" />
    </section>
  );
};

export default PhonePreview;
