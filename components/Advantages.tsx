'use client';

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie, faClock, faShieldAlt, faTools, faHandshake } from '@fortawesome/free-solid-svg-icons';
import { useInView } from 'react-intersection-observer';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import '../styles/Advantages.css';

const Advantages: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const advantages = [
    {
      icon: faUserTie,
      title: 'Индивидуальный подход',
      description: 'Каждый проект разрабатывается с учетом ваших пожеланий и особенностей помещения'
    },
    {
      icon: faClock,
      title: 'Соблюдение сроков',
      description: 'Гарантируем точное соблюдение сроков, указанных в договоре'
    },
    {
      icon: faShieldAlt,
      title: 'Гарантия качества',
      description: '7 лет гарантии на все товары и услуги + постгарантийное обслуживание'
    },
    {
      icon: faUserTie,
      title: 'Личный менеджер',
      description: 'С первого дня вас будет сопровождать личный менеджер на всех этапах'
    },
    {
      icon: faTools,
      title: 'Премиальный сервис',
      description: 'Полный цикл услуг от замера до установки мебели «под ключ»'
    },
    {
      icon: faHandshake,
      title: 'Надежное партнерство',
      description: 'Мы работаем только с проверенными поставщиками материалов и фурнитуры'
    }
  ];

  return (
    <section id="advantages" className="pt-20 relative overflow-hidden">
      <div className="mb-16 container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4">
          Почему <span className="text-red-500">выбирают</span> нас
        </h2>
        <p className="text-gray-600 text-center text-base sm:text-lg mb-12 max-w-3xl mx-auto">
          Мы создаем уникальные решения для вашего комфорта, сочетая качество, стиль и функциональность
        </p>
      </div>
      
      <div ref={ref} className="w-full">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={0}
          centeredSlides={true}
          loop={true}
          speed={800}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
          }}
          pagination={{
            clickable: true,
            el: '.swiper-pagination'
          }}
          breakpoints={{
            320: {
              slidesPerView: 1.5,
              centeredSlides: true,
            },
            640: {
              slidesPerView: 2.5,
              centeredSlides: true,
            },
            1024: {
              slidesPerView: 3.5,
              centeredSlides: true,
            },
            1280: {
              slidesPerView: 4.5,
              centeredSlides: true,
            }
          }}
          className="advantages-swiper"
        >
          {advantages.map((advantage, index) => (
            <SwiperSlide key={index} className="swiper-slide-advantages">
              <div 
                className="p-8 flex flex-col items-center text-center bg-white group"
                style={{
                  opacity: inView ? 1 : 0,
                  transform: inView ? 'translateY(0)' : 'translateY(50px)',
                  transition: 'all 0.5s ease-out',
                  transitionDelay: `${index * 100}ms`
                }}
              >
                <div className="relative w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <div className="absolute inset-0 bg-black rounded-lg transform rotate-45"></div>
                  <div className="absolute inset-0 border-2 border-black/30 rounded-lg transform rotate-45 transition-all duration-500 group-hover:scale-125 group-hover:rotate-[225deg]"></div>
                  <FontAwesomeIcon icon={advantage.icon} className="text-2xl text-white relative z-10 transition-transform duration-500 group-hover:scale-110" />
                </div>
                <h3 className="text-xl font-bold mb-4">{advantage.title}</h3>
                <p className="text-gray-600">{advantage.description}</p>
              </div>
            </SwiperSlide>
          ))}
          <div className="swiper-pagination"></div>
        </Swiper>
      </div>
    </section>
  );
};

export default Advantages;
