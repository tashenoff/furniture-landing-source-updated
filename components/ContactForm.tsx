'use client';

import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPhone, faEnvelope, faMessage, faCheck } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const ContactForm: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [isPrivacyAccepted, setIsPrivacyAccepted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isPrivacyAccepted) {
      alert('Пожалуйста, примите политику конфиденциальности');
      return;
    }

    if (!formData.name || !formData.phone) {
      alert('Пожалуйста, заполните обязательные поля');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', phone: '', email: '', message: '' });
        setIsPrivacyAccepted(false);
      } else {
        setSubmitStatus('error');
        console.error('Error:', data.error);
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

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
          <h2 className="lg:text-4xl text-2xl font-bold text-white text-center mb-8">Связаться с нами</h2>
          <div ref={ref} className={`border border-white/20 rounded-xl p-8 backdrop-blur-sm bg-white/5 animate-on-scroll ${inView ? 'is-visible' : ''}`}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <label htmlFor="name" className="block text-sm text-gray-300 mb-1 text-left">Ваше имя *</label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FontAwesomeIcon icon={faUser} className="text-gray-400" />
                    </div>
                    <input 
                      type="text" 
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="block w-full pl-10 pr-3 py-2.5 bg-transparent border-b-2 border-gray-600 focus:outline-none relative text-white placeholder-gray-500"
                      placeholder="Иван Иванов"
                    />
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-focus-within:w-full transition-all duration-500 ease-in-out"></div>
                  </div>
                </div>

                <div className="relative">
                  <label htmlFor="phone" className="block text-sm text-gray-300 mb-1 text-left">Телефон *</label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FontAwesomeIcon icon={faPhone} className="text-gray-400" />
                    </div>
                    <input 
                      type="tel" 
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
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
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
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
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4} 
                    className="block w-full pl-10 pr-3 py-2.5 bg-transparent border-b-2 border-gray-600 focus:outline-none relative text-white placeholder-gray-500 resize-none"
                    placeholder="Опишите ваш проект или задайте вопрос"
                  ></textarea>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-focus-within:w-full transition-all duration-500 ease-in-out"></div>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <label className="relative flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    id="privacy"
                    checked={isPrivacyAccepted}
                    onChange={(e) => setIsPrivacyAccepted(e.target.checked)}
                    className="sr-only peer"
                    required
                  />
                  <div className="w-5 h-5 border-2 border-gray-600 rounded transition-colors relative">
                    <FontAwesomeIcon 
                      icon={faCheck} 
                      className={`text-white text-sm absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-opacity ${
                        isPrivacyAccepted ? 'opacity-100' : 'opacity-0'
                      }`}
                    />
                  </div>
                  <span className="text-sm text-gray-300 ml-2">
                    Я согласен с <Link href="/privacy-policy" className="text-white hover:underline">политикой конфиденциальности</Link> и <Link href="/terms" className="text-white hover:underline">пользовательским соглашением</Link>
                  </span>
                </label>
              </div>
              
              <button 
                type="submit"
                disabled={isSubmitting || !isPrivacyAccepted}
                className={`w-full py-3 px-6 rounded-lg transition-all transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 shadow-lg hover:shadow-xl ${
                  isSubmitting || !isPrivacyAccepted
                    ? 'bg-gray-500 cursor-not-allowed'
                    : 'bg-white text-black hover:bg-gray-100'
                }`}
              >
                {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
              </button>

              {submitStatus === 'success' && (
                <p className="text-green-400 text-center mt-2">
                  Спасибо! Мы свяжемся с вами в ближайшее время.
                </p>
              )}

              {submitStatus === 'error' && (
                <p className="text-red-400 text-center mt-2">
                  Произошла ошибка. Пожалуйста, попробуйте позже.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
