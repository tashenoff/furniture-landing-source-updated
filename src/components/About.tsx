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
            <h2 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600">
            О компании
            </h2>
            <div className="w-24 h-1 bg-black mx-auto mb-8" />
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              Мы создаем качественную мебель на заказ с 2010 года. За это время мы реализовали более 1000 проектов 
              и заслужили доверие наших клиентов благодаря нашим ключевым преимуществам:
            </p>
          </div>

          <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {advantages.map((item, index) => (
              <div 
                key={item.title}
                className={`transform hover:-translate-y-2 transition-all duration-300 
                  bg-white rounded-xl p-6 shadow-lg hover:shadow-xl h-full
                  animate-on-scroll ${inView ? 'is-visible' : ''}`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="relative w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <div className="absolute inset-0 bg-red-700/10 rounded-xl transform rotate-45"></div>
                  <div className="w-14 h-14 bg-red-700 rounded-xl flex items-center justify-center transform -rotate-45">
                    <FontAwesomeIcon icon={item.icon} className="text-2xl text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center mb-2">{item.title}</h3>
                <p className="text-gray-600 text-center text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
    </>
  );
};

export default About;
