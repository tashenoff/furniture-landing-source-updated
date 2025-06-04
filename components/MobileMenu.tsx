'use client';

import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faPhone, faCircle } from '@fortawesome/free-solid-svg-icons';
import { useModal } from '@/context/ModalContext';
import { useRouter, usePathname } from 'next/navigation';
import { scrollToSection } from '../utils/scroll';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const { openModal } = useModal();
  const router = useRouter();
  const pathname = usePathname();

  const menuItems = [
    { href: '#hero', label: 'Главная' },
    { href: '#advantages', label: 'Преимущества' },
    { href: '#catalog', label: 'Каталог' },
    { href: '#portfolio', label: 'Портфолио' },
    { href: '#reviews', label: 'Отзывы' },
    { href: '#contacts', label: 'Контакты' },
  ];

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleClick = async (href: string) => {
    onClose();
    const section = href.replace('#', '');
    if (pathname !== '/') {
      await router.push('/');
      // Даем время для загрузки главной страницы
      setTimeout(() => {
        scrollToSection(section);
      }, 100);
    } else {
      scrollToSection(section);
    }
  };

  return (
    <div 
      className={`fixed inset-0 z-50 transition-all duration-500 ${!isOpen && 'invisible'}`}
      onClick={onClose}
      style={{
        opacity: isOpen ? 1 : 0,
        visibility: isOpen ? 'visible' : 'hidden',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        backdropFilter: 'blur(5px)',
      }}
    >
      <div 
        className="fixed inset-x-0 top-0 h-screen bg-gradient-to-b from-black to-gray-900 shadow-2xl overflow-hidden transition-transform duration-500 ease-in-out"
        onClick={e => e.stopPropagation()}
        style={{
          transform: `translateY(${isOpen ? '0' : '-100%'})`,
        }}
      >
        <div className="flex flex-col h-full max-w-lg mx-auto">
          <div className="flex justify-between items-center p-4 border-b border-white/10">
            <div className="flex items-center space-x-1.5">
              <span className="text-green-500 relative">
                <FontAwesomeIcon icon={faCircle} className="text-[10px] animate-pulse" />
              </span>
              <span className="text-white text-xs">Сейчас работаем</span>
            </div>
            <button
              onClick={onClose}
              className="w-6 h-6 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Закрыть меню"
            >
              <FontAwesomeIcon icon={faTimes} className="text-white text-sm" />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto py-4">
            <ul className="space-y-0.5 px-3">
              {menuItems.map((item, index) => (
                <li key={item.href}>
                  <button
                    onClick={() => handleClick(item.href)}
                    className="w-full text-left px-3 py-2 text-white rounded-lg hover:bg-white/10 transition-all duration-300 transform hover:translate-x-2 text-sm"
                    style={{
                      opacity: isOpen ? 1 : 0,
                      transform: `translateY(${isOpen ? '0' : '-20px'})`,
                      transition: `all 0.5s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1}s`
                    }}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div className="p-4 border-t border-white/10 space-y-3">
            <a 
              href="tel:+74993256717" 
              className="flex items-center text-white group"
            >
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-red-500 transition-colors mr-2">
                <FontAwesomeIcon icon={faPhone} className="text-white text-sm" />
              </div>
              <span className="text-sm">+7 (499) 325-67-17</span>
            </a>
            
            <button
              onClick={() => {
                onClose();
                openModal();
              }}
              className="w-full py-2 px-3 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors duration-300 relative overflow-hidden group text-sm"
            >
              <span className="relative z-10">Заказать звонок</span>
              <div className="absolute inset-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left bg-red-600" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu; 