'use client';

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCertificate, faShieldAlt, faSeedling, faRecycle, faIndustry, faCog } from '@fortawesome/free-solid-svg-icons';
import { useInView } from 'react-intersection-observer';

const Certificates: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const certificates = [
    {
      icon: faCertificate,
      title: 'Сертификат качества',
      description: 'Все наши материалы и комплектующие имеют сертификаты качества и соответствуют международным стандартам'
    },
    {
      icon: faShieldAlt,
      title: 'Гарантия 7 лет',
      description: 'Мы предоставляем 7 лет гарантии на всю мебель и бесплатное постгарантийное обслуживание'
    },
    {
      icon: faShieldAlt,
      title: 'Безопасность',
      description: 'Мы используем только безопасные материалы, которые не выделяют вредных веществ'
    },
    {
      icon: faSeedling,
      title: 'Экологичность',
      description: 'Наши материалы экологически чистые и безопасные для здоровья и окружающей среды'
    },
    {
      icon: faRecycle,
      title: 'Ответственное производство',
      description: 'Мы следуем принципам ответственного производства и минимизируем отходы'
    },
    {
      icon: faCog,
      title: 'Современное оборудование',
      description: 'Используем передовое оборудование для достижения высочайшего качества изделий'
    }
  ];

  return (
    <section id="certificates" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 relative z-10">Гарантии и сертификаты</h2>
        </div>
        
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((certificate, index) => (
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
                  <FontAwesomeIcon icon={certificate.icon} className="text-2xl text-white relative z-10 transition-transform duration-500 group-hover:scale-110" />
                </div>
                <h3 className="text-xl font-bold mb-4">{certificate.title}</h3>
                <p className="text-gray-600">{certificate.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
