'use client';

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope, faClock } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { useInView } from 'react-intersection-observer';

const Contacts: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="contacts" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-left mb-16">Наши контакты</h2>
        
        <div className="flex flex-col lg:flex-row gap-8">
          <div ref={ref} className="w-full lg:w-1/2 bg-white rounded-lg shadow-lg p-8">
            <div 
              className="transform transition-all duration-500"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(50px)'
              }}
            >
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-black text-white mr-4">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1 text-left">Адрес</h4>
                    <p className="text-gray-600 text-left">Москва, ул. Автозаводская, 23Ак2</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-black text-white mr-4">
                    <FontAwesomeIcon icon={faPhone} className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1 text-left">Телефон</h4>
                    <div className="flex items-center space-x-4">
                      <a
                        href="tel:+77777777777"
                        className="text-white hover:text-red-500 transition-colors"
                      >
                        <FontAwesomeIcon icon={faPhone} className="w-6 h-6" />
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-black text-white mr-4">
                    <FontAwesomeIcon icon={faEnvelope} className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1 text-left">Email</h4>
                    <div className="flex items-center space-x-4">
                      <a
                        href="mailto:info@example.com"
                        className="text-white hover:text-red-500 transition-colors"
                      >
                        <FontAwesomeIcon icon={faEnvelope} className="w-6 h-6" />
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-black text-white mr-4">
                    <FontAwesomeIcon icon={faClock} className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1 text-left">Время работы</h4>
                    <p className="text-gray-600 text-left">Круглосуточно</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-black text-white mr-4">
                    <FontAwesomeIcon icon={faWhatsapp} className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1 text-left">Мессенджеры</h4>
                    <div className="flex space-x-2">
                      <a href="#" className="text-gray-600 hover:text-black transition-colors">
                        <FontAwesomeIcon icon={faWhatsapp} className="text-xl" />
                      </a>
                      <a href="#" className="text-gray-600 hover:text-black transition-colors">
                        <FontAwesomeIcon icon={faTelegram} className="text-xl" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <button className="mt-8 bg-black text-white px-6 py-3 rounded hover:bg-gray-900 transition-colors">
                Заказать звонок
              </button>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 h-[500px] rounded-lg overflow-hidden shadow-lg">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2246.6873645734!2d37.65622!3d55.704868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54b1f25b7d95d%3A0x9a49b34e97c7b3a6!2z0YPQuy4g0JDQstGC0L7Qt9Cw0LLQvtC00YHQutCw0Y8sIDIz0JAsINCc0L7RgdC60LLQsCwg0KDQvtGB0YHQuNGP!5e0!3m2!1sru!2sru!4v1621436789012!5m2!1sru!2sru" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
              title="Карта"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
