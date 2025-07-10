import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import PhonePreview from './components/PhonePreview';
import FarmerImage from './components/FarmerImage';
import RegisterPage from './components/RegisterPage';
import LoginPage from './components/LoginPage';
import WelcomePage from './components/WelcomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function HomePage() {
  return (
    <div className="app-root">
      <Header />
      <main className="homepage-main">
        <HeroSection />
        <PhonePreview />
        <FarmerImage />
      </main>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/welcome" element={<WelcomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
