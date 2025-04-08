import React from 'react';
import HeroSection from './HeroSection';
import Header from './Header';
import ContactForm from './ContactForm';
import Footer from './Footer';
import './Layout.css';

const Layout = () => {
  return (
    <div className="layout">
      <Header />
      <div className="main-content">
        <HeroSection />
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;

