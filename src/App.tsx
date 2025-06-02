import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Advantages from './components/Advantages';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Reviews from './components/Reviews';
import Certificates from './components/Certificates';
import ContactForm from './components/ContactForm';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Advantages />
        <About />
        <Services />
        <Portfolio />
        <Reviews />
        <Certificates />
        <ContactForm />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
}

export default App;
