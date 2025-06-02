'use client';

import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faImages } from '@fortawesome/free-solid-svg-icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';

const Portfolio: React.FC = () => {
  const portfolioItems = [
    {
      category: "Кухни",
      title: "Современная кухня в скандинавском стиле",
      description: "Проект кухни с островом, выполненный в светлых тонах с акцентами из натурального дерева"
    },
    {
      category: "Шкафы-купе",
      title: "Встроенный шкаф в спальню",
      description: "Шкаф-купе с зеркальными дверями и индивидуальной системой хранения"
    },
    {
      category: "Гостиные",
      title: "Мебель для гостиной в стиле лофт",
      description: "Комплект мебели для гостиной с использованием металла и натурального дерева"
    },
    {
      category: "Спальни",
      title: "Спальня в современном стиле",
      description: "Полный комплект мебели для спальни, включая кровать, тумбы и шкаф"
    },
    {
      category: "Ванные комнаты",
      title: "Мебель для ванной комнаты",
      description: "Влагостойкая мебель для ванной комнаты с подсветкой и системой хранения"
    },
    {
      category: "Офисы",
      title: "Офисная мебель для IT-компании",
      description: "Эргономичные рабочие места и мебель для переговорных комнат"
    }
  ];

  const categories = ["Все", "Кухни", "Шкафы-купе", "Гостиные", "Спальни", "Ванные комнаты", "Офисы"];
  const [activeCategory, setActiveCategory] = useState("Все");

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const filteredItems = activeCategory === "Все" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-4 relative z-10 text-white">
            Наши работы
          </h2>
          <p className="text-center text-gray-300 mb-8 max-w-3xl mx-auto">
            Примеры реализованных проектов для наших клиентов
          </p>
        </div>
        
        <div className="mb-12 relative">
          <Swiper
            modules={[FreeMode]}
            spaceBetween={12}
            slidesPerView="auto"
            freeMode={true}
            className="categories-swiper"
            centeredSlides={false}
            slideToClickedSlide={true}
            style={{
              padding: '0 15% 0 0'
            }}
          >
            {categories.map((category, index) => (
              <SwiperSlide key={index} style={{ width: 'auto' }}>
                <button 
                  className={`px-6 py-2 rounded-full whitespace-nowrap ${
                    category === activeCategory 
                      ? 'bg-red-700 text-white' 
                      : 'bg-gray-700 text-white hover:bg-gray-600'
                  } transition-colors`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="absolute right-0 top-0 bottom-0 w-[15%] bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>
        </div>
        
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div 
              key={index} 
              className={`group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ${inView ? 'is-visible' : ''}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="relative aspect-[4/3] bg-gray-700 overflow-hidden">
                <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                  <FontAwesomeIcon icon={index % 2 === 0 ? faImage : faImages} className="text-5xl text-gray-400" />
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 flex items-center justify-center transition-all duration-300">
                  <button className="px-4 py-2 bg-red-700 text-white rounded opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    Подробнее
                  </button>
                </div>
              </div>
              <div className="p-6 bg-white">
                <span className="text-sm text-red-700 font-medium">{item.category}</span>
                <h3 className="text-xl font-bold mt-1 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-300">В данной категории пока нет проектов</p>
          </div>
        )}
        
        <div className="text-center mt-12">
          <button className="btn-primary">Смотреть все работы</button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
