import React from 'react';
import './RegisterIllustration.css';
import vineyardImg from '../assets/vineyard.jpg'; // Replace with your actual image path

const RegisterIllustration: React.FC = () => {
  return (
    <div className="register-illustration-container">
      <img src={vineyardImg} alt="Vineyard landscape" className="register-illustration-img" />
    </div>
  );
};

export default RegisterIllustration; 