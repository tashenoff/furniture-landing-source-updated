'use client';

import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faUser, faPhone, faEnvelope, faMessage, faCheck } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/navigation';
import { useModal } from '@/context/ModalContext';

const Modal: React.FC = () => {
  const { isOpen, closeModal } = useModal();
  const router = useRouter();
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [isPrivacyAccepted, setIsPrivacyAccepted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      setTimeout(() => setIsVisible(false), 300);
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNavigate = (path: string) => {
    closeModal();
    router.push(path);
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
        setTimeout(() => {
          closeModal();
          setSubmitStatus('idle');
        }, 2000);
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

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 ${
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      } transition-opacity duration-300`}
    >
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={closeModal}
      ></div>
      
      <div 
        className={`relative w-full max-w-lg bg-black border border-white/20 rounded-xl backdrop-blur-sm transform overflow-hidden ${
          isOpen ? 'scale-100' : 'scale-95'
        } transition-transform duration-300`}
      >
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>

        <button
          onClick={closeModal}
          className="absolute right-4 top-4 text-gray-400 hover:text-white transition-colors z-50"
          aria-label="Закрыть"
        >
          <FontAwesomeIcon icon={faTimes} className="w-5 h-5" />
        </button>

        <div className="p-8 relative z-10">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            Заказать звонок
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div className="relative">
                <label htmlFor="modal-name" className="block text-sm text-gray-300 mb-1">
                  Ваше имя *
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FontAwesomeIcon icon={faUser} className="text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="modal-name"
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
                <label htmlFor="modal-phone" className="block text-sm text-gray-300 mb-1">
                  Телефон *
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FontAwesomeIcon icon={faPhone} className="text-gray-400" />
                  </div>
                  <input
                    type="tel"
                    id="modal-phone"
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

              <div className="relative">
                <label htmlFor="modal-email" className="block text-sm text-gray-300 mb-1">
                  Email
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FontAwesomeIcon icon={faEnvelope} className="text-gray-400" />
                  </div>
                  <input
                    type="email"
                    id="modal-email"
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
                <label htmlFor="modal-message" className="block text-sm text-gray-300 mb-1">
                  Сообщение
                </label>
                <div className="relative group">
                  <div className="absolute top-3 left-0 pl-3 flex items-start pointer-events-none">
                    <FontAwesomeIcon icon={faMessage} className="text-gray-400" />
                  </div>
                  <textarea
                    id="modal-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="block w-full pl-10 pr-3 py-2.5 bg-transparent border-b-2 border-gray-600 focus:outline-none relative text-white placeholder-gray-500 resize-none"
                    placeholder="Ваше сообщение..."
                  ></textarea>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-focus-within:w-full transition-all duration-500 ease-in-out"></div>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <label className="relative flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  id="modal-privacy"
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
                  Я согласен с{' '}
                  <button
                    type="button"
                    onClick={() => handleNavigate('/privacy-policy')}
                    className="text-white hover:underline transition-colors"
                  >
                    политикой конфиденциальности
                  </button>
                  {' '}и{' '}
                  <button
                    type="button"
                    onClick={() => handleNavigate('/terms')}
                    className="text-white hover:underline transition-colors"
                  >
                    пользовательским соглашением
                  </button>
                </span>
              </label>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 px-4 bg-red-700 text-white rounded-lg transition-all duration-300 relative overflow-hidden group ${
                isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-red-800'
              }`}
            >
              <span className="relative z-10">
                {isSubmitting ? 'Отправка...' : submitStatus === 'success' ? 'Отправлено!' : 'Отправить'}
              </span>
              <div className="absolute inset-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left bg-red-800" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal; 