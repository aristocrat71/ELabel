import React from 'react';
import './RegisterPage.css';
import RegisterIllustration from './RegisterIllustration';
import RegisterForm from './RegisterForm';

const RegisterPage: React.FC = () => {
  return (
    <div className="register-page">
      <div className="register-page__left">
        <RegisterIllustration />
      </div>
      <div className="register-page__right">
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterPage; 