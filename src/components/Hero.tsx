import React from 'react';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope, faClock } from '@fortawesome/free-solid-svg-icons';

const Hero: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="h-[800px] bg-black flex items-center justify-center p-4 my-20">
      <div className="w-full max-w-[90%] h-[750px] rounded-2xl overflow-hidden relative">
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
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 relative overflow-hidden">
                <span className="inline-block mr-3 md:mr-5 animate-title-reveal" style={{ animationDelay: '0.1s' }}>Дизайнерская</span>
                <span className="inline-block animate-title-reveal" style={{ animationDelay: '0.3s' }}> мебель</span>
                <span className="inline-block animate-title-reveal" style={{ animationDelay: '0.5s' }}> на заказ</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-white mb-8 animate-slide-up" style={{ animationDelay: '0.7s' }}>
                Индивидуальный подход, соблюдение сроков и безупречное качество для вашего идеального интерьера
              </p>
              <div ref={ref} className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: '0.9s' }}>
                <button className="btn-primary">Оставить заявку</button>
                <button className="btn-secondary">Скачать каталог</button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-4 md:bottom-8 left-0 right-0 flex justify-center">
          <a href="#advantages" className="text-white animate-bounce">
            <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
