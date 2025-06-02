import React from 'react';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPhone, faEnvelope, faMessage, faCheck } from '@fortawesome/free-solid-svg-icons';

const ContactForm: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section 
      id="contact-form" 
      className="py-20 bg-black relative overflow-hidden"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/assets/bg.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black opacity-95 z-[1]"></div>
      <div className="container mx-auto px-4 relative z-[2]">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-8">Связаться с нами</h2>
          <div ref={ref} className={`border border-white/20 rounded-xl p-8 backdrop-blur-sm bg-white/5 animate-on-scroll ${inView ? 'is-visible' : ''}`}>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <label htmlFor="name" className="block text-sm text-gray-300 mb-1 text-left">Ваше имя</label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FontAwesomeIcon icon={faUser} className="text-gray-400" />
                    </div>
                  <input 
                    type="text" 
                    id="name" 
                      className="block w-full pl-10 pr-3 py-2.5 bg-transparent border-b-2 border-gray-600 focus:outline-none relative text-white placeholder-gray-500"
                    placeholder="Иван Иванов"
                  />
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-focus-within:w-full transition-all duration-500 ease-in-out"></div>
                  </div>
                </div>

                <div className="relative">
                  <label htmlFor="phone" className="block text-sm text-gray-300 mb-1 text-left">Телефон</label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FontAwesomeIcon icon={faPhone} className="text-gray-400" />
                    </div>
                  <input 
                    type="tel" 
                    id="phone" 
                      className="block w-full pl-10 pr-3 py-2.5 bg-transparent border-b-2 border-gray-600 focus:outline-none relative text-white placeholder-gray-500"
                    placeholder="+7 (___) ___-__-__"
                  />
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-focus-within:w-full transition-all duration-500 ease-in-out"></div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <label htmlFor="email" className="block text-sm text-gray-300 mb-1 text-left">Email</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FontAwesomeIcon icon={faEnvelope} className="text-gray-400" />
                  </div>
                <input 
                  type="email" 
                  id="email" 
                    className="block w-full pl-10 pr-3 py-2.5 bg-transparent border-b-2 border-gray-600 focus:outline-none relative text-white placeholder-gray-500"
                  placeholder="example@mail.ru"
                />
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-focus-within:w-full transition-all duration-500 ease-in-out"></div>
                </div>
              </div>
              
              <div className="relative">
                <label htmlFor="message" className="block text-sm text-gray-300 mb-1 text-left">Сообщение</label>
                <div className="relative group">
                  <div className="absolute top-3 left-0 pl-3 flex items-start pointer-events-none">
                    <FontAwesomeIcon icon={faMessage} className="text-gray-400" />
                  </div>
                <textarea 
                  id="message" 
                  rows={4} 
                    className="block w-full pl-10 pr-3 py-2.5 bg-transparent border-b-2 border-gray-600 focus:outline-none relative text-white placeholder-gray-500 resize-none"
                  placeholder="Опишите ваш проект или задайте вопрос"
                ></textarea>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-focus-within:w-full transition-all duration-500 ease-in-out"></div>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <div className="relative">
                <input 
                  type="checkbox" 
                  id="privacy" 
                    className="sr-only peer"
                  />
                  <div className="w-5 h-5 border-2 border-gray-600 rounded peer-checked:bg-white peer-checked:border-white transition-colors cursor-pointer">
                    <FontAwesomeIcon icon={faCheck} className="text-black text-xs absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 peer-checked:opacity-100 transition-opacity" />
                  </div>
                </div>
                <label htmlFor="privacy" className="text-sm text-gray-300 cursor-pointer">
                  Я согласен с <a href="/privacy-policy" className="text-white hover:underline">политикой конфиденциальности</a>
                </label>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-white text-black py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all"
              >
                Отправить заявку
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
