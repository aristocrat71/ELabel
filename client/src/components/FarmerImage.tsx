import React from 'react';
import './FarmerImage.css';
import farmerImg from '../assets/grapeman.webp';

const FarmerImage: React.FC = () => {
  return (
    <section className="full-image-section">
      <img src={farmerImg} alt="Farmer holding grapes" className="full-image" />
    </section>
  );
};

export default FarmerImage;
