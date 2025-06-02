import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChair, faDoorOpen, faBath, faHome, faBuilding, faCouch } from '@fortawesome/free-solid-svg-icons';
import { useInView } from 'react-intersection-observer';

const Services: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: faChair,
      title: 'Индивидуальный проект мебели',
      description: 'Разработка уникальных проектов мебели с учетом всех ваших пожеланий и особенностей помещения'
    },
    {
      icon: faHome,
      title: 'Кухни на заказ',
      description: 'Изготовление кухонных гарнитуров любой сложности с использованием качественных материалов и фурнитуры'
    },
    {
      icon: faDoorOpen,
      title: 'Шкафы-купе',
      description: 'Проектирование и изготовление шкафов-купе с индивидуальной системой хранения и дизайном'
    },
    {
      icon: faBath,
      title: 'Мебель для ванной',
      description: 'Создание влагостойкой мебели для ванных комнат с учетом особенностей помещения'
    },
    {
      icon: faCouch,
      title: 'Встроенная мебель',
      description: 'Изготовление встроенной мебели, которая максимально эффективно использует пространство'
    },
    {
      icon: faBuilding,
      title: 'Мебель для офиса',
      description: 'Разработка эргономичных и функциональных решений для офисных помещений'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-4 relative z-10">Наши услуги</h2>
        </div>
        
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="premium-block transform transition-all duration-500 group p-6 bg-white rounded-lg shadow-lg"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(50px)',
                transitionDelay: `${index * 100}ms`
              }}
            >
              <div className="flex flex-col items-start">
                <div className="relative w-16 h-16 mb-6 flex items-center justify-center">
                  <div className="absolute inset-0 bg-black rounded-lg transform rotate-45"></div>
                  <div className="absolute inset-0 border-2 border-black/30 rounded-lg transform rotate-45 transition-all duration-500 group-hover:scale-125 group-hover:rotate-[225deg]"></div>
                  <FontAwesomeIcon icon={service.icon} className="text-2xl text-white relative z-10 transition-transform duration-500 group-hover:scale-110" />
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
