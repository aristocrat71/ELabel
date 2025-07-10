import React from 'react';
import './LoginPage.css';
import RegisterIllustration from './RegisterIllustration';
import LoginForm from './LoginForm';

const LoginPage: React.FC = () => {
  return (
    <div className="login-page">
      <div className="login-page__left">
        <RegisterIllustration />
      </div>
      <div className="login-page__right">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage; 