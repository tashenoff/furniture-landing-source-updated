'use client';

import React from 'react';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope, faClock } from '@fortawesome/free-solid-svg-icons';
import { scrollToSection } from '../utils/scroll';
import { useModal } from '@/context/ModalContext';

const Hero: React.FC = () => {
  const { openModal } = useModal();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="h-[600px] bg-black flex items-center justify-center p-4 mt-16 mb-5">
      <div className="w-full max-w-[95%] h-[550px] rounded-2xl overflow-hidden relative">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')` 
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        
        <div className="relative z-10 h-full flex items-center py-8 md:py-0">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl text-left animate-fade-in">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 relative overflow-hidden">
                <span className="inline-block mr-3 md:mr-5 animate-title-reveal" style={{ animationDelay: '0.1s' }}>Дизайнерская</span>
                <span className="inline-block animate-title-reveal" style={{ animationDelay: '0.3s' }}> мебель</span>
                <span className="inline-block animate-title-reveal" style={{ animationDelay: '0.5s' }}> на заказ</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white mb-8 animate-slide-up" style={{ animationDelay: '0.7s' }}>
                Индивидуальный подход, соблюдение сроков и безупречное качество для вашего идеального интерьера
              </p>
              <div ref={ref} className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: '0.9s' }}>
                <button 
                  onClick={openModal}
                  className="px-6 py-3 sm:px-8 sm:py-4 bg-red-700 text-white rounded-lg hover:bg-red-800 transition-colors duration-300 text-base sm:text-lg font-medium relative overflow-hidden group"
                >
                  <span className="relative z-10">Оставить заявку</span>
                  <div className="absolute inset-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left bg-red-800" />
                </button>
                <button className="px-6 py-3 sm:px-8 sm:py-4 bg-transparent text-white rounded-lg border-2 border-white hover:bg-white hover:text-black transition-all duration-300 text-base sm:text-lg font-medium">
                  Скачать каталог
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-4 md:bottom-8 left-0 right-0 flex justify-center z-20">
          <button 
            onClick={() => scrollToSection('advantages')}
            className="text-white animate-bounce cursor-pointer"
            aria-label="Прокрутить к преимуществам"
          >
            <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
