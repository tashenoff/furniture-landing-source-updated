'use client';

import React from 'react';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

const Reviews: React.FC = () => {
  const reviews = [
    {
      name: "Анна Смирнова",
      position: "Дизайнер интерьера",
      text: "Сотрудничаю с компанией уже более 3 лет. Всегда высокое качество исполнения, точное соблюдение сроков и внимание к деталям. Мои клиенты в восторге от результата!",
      rating: 5
    },
    {
      name: "Михаил Петров",
      position: "Владелец квартиры",
      text: "Заказывал кухню и шкаф-купе. Очень доволен качеством и сервисом. Особенно порадовало, что все было сделано точно в срок, без задержек.",
      rating: 5
    },
    {
      name: "Елена Иванова",
      position: "Архитектор",
      text: "Профессиональный подход на всех этапах работы. Мебель изготовлена из качественных материалов, с учетом всех пожеланий. Рекомендую!",
      rating: 4
    },
    {
      name: "Дмитрий Козлов",
      position: "Владелец офиса",
      text: "Заказывали комплексное оснащение офиса. Результат превзошел ожидания. Сотрудники довольны эргономикой рабочих мест.",
      rating: 5
    }
  ];

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-4 relative z-10" style={{ color: '#333' }}>
            Отзывы клиентов
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Что говорят о нас наши клиенты
          </p>
        </div>
        
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((review, index) => (
            <div 
              key={index} 
              className={`premium-block ${inView ? 'is-visible' : ''}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="text-red-700 mb-4">
                <FontAwesomeIcon icon={faQuoteLeft} size="2x" />
              </div>
              <p className="text-gray-600 mb-6 italic">"{review.text}"</p>
              <div className="flex justify-between items-end">
                <div>
                  <h4 className="font-bold">{review.name}</h4>
                  <p className="text-gray-500 text-sm">{review.position}</p>
                </div>
                <div className="flex text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <FontAwesomeIcon 
                      key={i} 
                      icon={faStar} 
                      className={i < review.rating ? 'text-yellow-500' : 'text-gray-300'} 
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* <div className="text-center mt-12">
          <a href="#" className="text-red-700 font-medium hover:text-red-800 transition-colors">
            Смотреть все отзывы на Яндекс.Картах →
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default Reviews;
