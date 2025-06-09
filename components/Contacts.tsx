'use client';

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope, faClock } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { useInView } from 'react-intersection-observer';

const Contacts: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="contacts" className="lg:py-20 py-10 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="lg:text-4xl text-2xl font-bold lg:mb-16 mb-8 text-center">Наши контакты</h2>
        
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
                {/* <div className="flex items-start">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-black text-white mr-4 relative">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="w-4 h-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1 text-left">Адрес</h4>
                    <p className="text-gray-600 text-left">Москва, ул. Автозаводская, 23Ак2</p>
                  </div>
                </div> */}
                
                <div className="flex items-start">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-black text-white mr-4 relative">
                    <FontAwesomeIcon icon={faPhone} className="w-4 h-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1 text-left">Телефон</h4>
                    <div className="flex items-center space-x-4">
                      <a
                        href="tel:+74993256717"
                        className="text-gray-600 hover:text-black transition-colors"
                      >
                        +7 (499) 325-67-17
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-black text-white mr-4 relative">
                    <FontAwesomeIcon icon={faEnvelope} className="w-4 h-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1 text-left">Email</h4>
                    <div className="flex items-center space-x-4">
                      <a
                        href="mailto:miart-mebel@yandex.ru"
                        className="text-gray-600 hover:text-black transition-colors"
                      >
                        miart-mebel@yandex.ru
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-black text-white mr-4 relative">
                    <FontAwesomeIcon icon={faClock} className="w-4 h-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1 text-left">Время работы</h4>
                    <p className="text-gray-600 text-left">с 9:00 до 20:00</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-black text-white mr-4 relative">
                    <FontAwesomeIcon icon={faWhatsapp} className="w-4 h-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1 text-left">Мессенджеры</h4>
                    <div className="flex space-x-2">
                      <a href="https://wa.me/89891071959" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black transition-colors">
                        <FontAwesomeIcon icon={faWhatsapp} className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
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
