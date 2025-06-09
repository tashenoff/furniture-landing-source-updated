'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faPhone } from '@fortawesome/free-solid-svg-icons';
import MobileMenu from './MobileMenu';
import logo from '../public/assets/logos.png';
import { scrollToSection } from '../utils/scroll';
import { useModal } from '@/context/ModalContext';
import { useRouter, usePathname } from 'next/navigation';

const Header: React.FC = () => {
  const { openModal } = useModal();
  const router = useRouter();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = async (e: React.MouseEvent<HTMLAnchorElement>, section: string) => {
    e.preventDefault();
    if (pathname !== '/') {
      await router.push('/');
      // Даем время для загрузки главной страницы
      setTimeout(() => {
        scrollToSection(section);
      }, 100);
    } else {
      scrollToSection(section);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black bg-opacity-80 backdrop-blur-sm py-2' : 'bg-black py-4'}`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Image src={logo} alt="Мебель Home" width={28} height={32} priority />
              <span className="text-white text-sm lg:text-xs xl:text-sm font-bold ml-2 lg:ml-0.5 md:ml-2">Мебель Home</span>
            </div>
            
            <nav className="hidden md:flex space-x-4 lg:space-x-3">
              <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="text-white text-sm lg:text-xs xl:text-sm hover:text-red-700 transition-colors">О компании</a>
              <a href="#services" onClick={(e) => handleNavClick(e, 'services')} className="text-white text-sm lg:text-xs xl:text-sm hover:text-red-700 transition-colors">Услуги</a>
              <a href="#portfolio" onClick={(e) => handleNavClick(e, 'portfolio')} className="text-white text-sm lg:text-xs xl:text-sm hover:text-red-700 transition-colors">Портфолио</a>
              <a href="#reviews" onClick={(e) => handleNavClick(e, 'reviews')} className="text-white text-sm lg:text-xs xl:text-sm hover:text-red-700 transition-colors">Отзывы</a>
              <a href="#certificates" onClick={(e) => handleNavClick(e, 'certificates')} className="text-white text-sm lg:text-xs xl:text-sm hover:text-red-700 transition-colors">Гарантии</a>
              <a href="#contacts" onClick={(e) => handleNavClick(e, 'contacts')} className="text-white text-sm lg:text-xs xl:text-sm hover:text-red-700 transition-colors">Контакты</a>
            </nav>
            
            <div className="flex items-center space-x-6">
              <div className="hidden md:flex items-center">
                <span className="text-green-500 mr-2 relative">
                  <FontAwesomeIcon icon={faCircle} className="text-xs animate-pulse" />
                </span>
                <span className="text-white text-xs lg:text-[10px] xl:text-xs">Сейчас работаем</span>
              </div>
              
              <a href="tel:+74993256717" className="flex items-center text-white hover:text-red-700 transition-colors">
                <FontAwesomeIcon icon={faPhone} className="mr-2" />
                <span className="hidden md:inline text-sm lg:text-xs xl:text-sm whitespace-nowrap">+7 (499) 325-67-17</span>
              </a>
              
              <button 
                onClick={openModal}
                className="hidden md:block bg-red-700 text-white px-3 py-1.5 lg:px-2 lg:py-1 rounded transition-colors relative overflow-hidden group"
              >
                <span className="relative z-10 text-sm lg:text-xs xl:text-sm">Заказать звонок</span>
                <div 
                  className="absolute top-0 right-0 w-[80%] h-[300%] bg-gradient-to-r from-transparent via-white/10 to-transparent transform -rotate-45 group-hover:translate-x-[-150%] transition-transform duration-1000 ease-in-out"
                />
              </button>
              
              <button 
                onClick={toggleMobileMenu}
                className="md:hidden text-white"
                aria-label="Открыть меню"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
    </>
  );
};

export default Header;
