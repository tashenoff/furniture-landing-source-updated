'use client';

import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import Image from 'next/image';
import Lightbox from 'yet-another-react-lightbox';
import "yet-another-react-lightbox/styles.css";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';

const Portfolio: React.FC = () => {
  const portfolioItems = [
    { image: '/assets/work/__uxv2krmufrdoclguz8yy_1.png' },
    { image: '/assets/work/________rv50rokluqeuglimjsd1_1.png' },
    { image: '/assets/work/____93canpywultzj1pkaa8g_0.png' },
    { image: '/assets/work/____1eoiq5ddc561uulib2a0_1.png' },
    { image: '/assets/work/____jhpv7e4ru3r9ihivhxfc_1.png' },
    { image: '/assets/work/___yayhfe696vcav3e4agsm_1.png' },
    { image: '/assets/work/___33d9bhfgt2fynx15i0nx_0.png' },
    { image: '/assets/work/___br6klrtutknwhs2icj2p_0.png' },
    { image: '/assets/work/___3p9zk5lq2i6df86aizp6_0.png' },
    { image: '/assets/work/___7kzcwoplqzg2l883z95s_1.png' },
    { image: '/assets/work/_8z1xv7c1eqynkgl72uqk_0.png' },
    { image: '/assets/work/__nass1t64eymh1adhc7ct_0.png' },
    { image: '/assets/work/______noqkjbr8egmkynkb6lfw_0.png' },
    { image: '/assets/work/_r359bxv58n9i737fp9cg_1.png' },
    { image: '/assets/work/___17stdg30ztmyo6c4g2e6_1.png' }
  ];

  // Закомментированные категории
  /*
  const categories = ["Все", "Кухни", "Шкафы-купе", "Гостиные", "Спальни", "Ванные комнаты", "Офисы"];
  const [activeCategory, setActiveCategory] = useState("Все");
  */

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

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
        
        {/* Закомментированные вкладки
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
            breakpoints={{
              320: {
                slidesPerView: 'auto',
                centeredSlides: false,
              },
              768: {
                slidesPerView: 'auto',
                centeredSlides: true,
                initialSlide: 1,
              }
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
        */}
        
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div 
              key={index} 
              className={`group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ${inView ? 'is-visible' : ''}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <button
                type="button"
                className="relative aspect-[4/3] bg-gray-700 overflow-hidden w-full h-full focus:outline-none"
                onClick={() => setLightboxIndex(index)}
                aria-label="Открыть изображение в увеличенном виде"
              >
                <Image
                  src={item.image}
                  alt={`Проект ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </button>
            </div>
          ))}
        </div>
        <Lightbox
          open={lightboxIndex !== null}
          close={() => setLightboxIndex(null)}
          slides={portfolioItems.map(item => ({ src: item.image }))}
          index={lightboxIndex ?? 0}
        />
      </div>
    </section>
  );
};

export default Portfolio;
