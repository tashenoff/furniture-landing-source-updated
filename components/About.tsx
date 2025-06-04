'use client';

import React from 'react';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHistory, faBuilding, faHandshake, faCertificate } from '@fortawesome/free-solid-svg-icons';

const About: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const advantages = [
    {
      icon: faHistory,
      title: '13 лет опыта',
      description: 'Создаем качественную мебель с 2010 года'
    },
    {
      icon: faBuilding,
      title: 'Собственное производство',
      description: 'Полный контроль качества на всех этапах'
    },
    {
      icon: faHandshake,
      title: 'Надежные партнеры',
      description: 'Сотрудничаем с лучшими поставщиками'
    },
    {
      icon: faCertificate,
      title: 'Сертифицированные материалы',
      description: 'Используем только проверенные материалы'
    }
  ];

  return (
    <>
      <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600">
              О компании
            </h2>
            <div className="w-24 h-1 bg-black mx-auto mb-8" />
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-4">
              Мы создаем качественную мебель на заказ с 2010 года. За это время мы реализовали более 1000 проектов 
              и заслужили доверие наших клиентов благодаря нашим ключевым преимуществам:
            </p>
          </div>
          
          <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl shadow-lg p-6 transform transition-all duration-500 hover:shadow-xl hover:-translate-y-1 ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`
                }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-black mb-6 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-red-600 to-red-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <FontAwesomeIcon icon={advantage.icon} className="text-2xl text-white relative z-10 transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{advantage.title}</h3>
                  <p className="text-gray-600">{advantage.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Закомментированная секция "Наши партнеры"
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12 text-white">
            Наши партнеры
          </h3>
          <div className="flex flex-wrap justify-center gap-8">
            {[1, 2, 3, 4, 5].map((item) => (
              <div 
                key={item} 
                className="w-40 h-20 bg-zinc-900 shadow-lg hover:shadow-xl transition-shadow duration-300 
                  rounded-lg flex items-center justify-center transform hover:scale-105 transition-transform
                  border border-zinc-800"
              >
                <span className="text-gray-400 font-medium">Партнер {item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      */}
    </>
  );
};

export default About;
