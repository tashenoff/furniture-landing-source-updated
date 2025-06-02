import React from 'react';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faCircle } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/logos.png';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black bg-opacity-80 backdrop-blur-sm py-2' : 'bg-black py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img src={logo} alt="Мебель Home" className="h-12" />
            <span className="text-white text-xl font-bold ml-3">Мебель Home</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="text-white hover:text-red-700 transition-colors">О компании</a>
            <a href="#services" className="text-white hover:text-red-700 transition-colors">Услуги</a>
            <a href="#portfolio" className="text-white hover:text-red-700 transition-colors">Портфолио</a>
            <a href="#reviews" className="text-white hover:text-red-700 transition-colors">Отзывы</a>
            <a href="#certificates" className="text-white hover:text-red-700 transition-colors">Гарантии</a>
            <a href="#contacts" className="text-white hover:text-red-700 transition-colors">Контакты</a>
          </nav>
          
          <div className="flex items-center space-x-6">
            <div className="hidden md:flex items-center">
              <span className="text-green-500 mr-2 relative">
                <FontAwesomeIcon icon={faCircle} className="text-xs blink-dot" />
              </span>
              <span className="text-white text-sm">Сейчас работаем</span>
            </div>
            
            <a href="tel:+74951234567" className="flex items-center text-white hover:text-red-700 transition-colors">
              <FontAwesomeIcon icon={faPhone} className="mr-2" />
              <span className="hidden md:inline">+7 (495) 123-45-67</span>
            </a>
            
            <button className="hidden md:block bg-red-700 text-white px-4 py-2 rounded transition-colors relative overflow-hidden group">
              <span className="relative z-10">Заказать звонок</span>
              <div 
                className="absolute top-0 right-0 w-[80%] h-[300%] bg-gradient-to-r from-transparent via-white/10 to-transparent transform -rotate-45 group-hover:translate-x-[-150%] transition-transform duration-1000 ease-in-out"
              />
            </button>
            
            <button className="md:hidden text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
