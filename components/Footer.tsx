import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope, faClock } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faTelegram } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';
import Link from 'next/link';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-black text-white pt-16 pb-8 bg-cover bg-center" style={{ backgroundImage: 'url(/assets/bg.jpg)' }}>
      <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="text-left">
            <div className="flex items-center mb-6">
              <Image src="/assets/logos.png" alt="Мебель Home" width={48} height={48} />
              <span className="text-white text-xl font-bold ml-3">Мебель Home</span>
            </div>
            <p className="text-gray-400 mb-6">
              Индивидуальный подход, соблюдение сроков и безупречное качество для вашего идеального интерьера
            </p>
            {/* <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FontAwesomeIcon icon={faWhatsapp} size="lg" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FontAwesomeIcon icon={faTelegram} size="lg" />
              </a>
            </div> */}
          </div>
          
          <div className="text-left hidden md:block">
            <h3 className="text-lg font-bold mb-6">Навигация</h3>
            <ul className="space-y-3">
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors block">О компании</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors block">Услуги</a></li>
              <li><a href="#portfolio" className="text-gray-400 hover:text-white transition-colors block">Портфолио</a></li>
              <li><a href="#reviews" className="text-gray-400 hover:text-white transition-colors block">Отзывы</a></li>
              <li><a href="#certificates" className="text-gray-400 hover:text-white transition-colors block">Гарантии</a></li>
              <li><a href="#contacts" className="text-gray-400 hover:text-white transition-colors block">Контакты</a></li>
            </ul>
          </div>
          
          <div className="text-left">
            <h3 className="text-lg font-bold mb-6">Контакты</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-white mr-3 mt-1">
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                </span>
                <span className="text-gray-400">Москва, ул. Автозаводская, 23Ак2</span>
              </li>
              <li className="flex items-start">
                <span className="text-white mr-3 mt-1">
                  <FontAwesomeIcon icon={faPhone} />
                </span>
                <span className="text-gray-400">+7 (499) 325-67-17</span>
              </li>
              <li className="flex items-start">
                <span className="text-white mr-3 mt-1">
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>
                <span className="text-gray-400">info@mebel-home.ru</span>
              </li>
              <li className="flex items-start">
                <span className="text-white mr-3 mt-1">
                  <FontAwesomeIcon icon={faClock} />
                </span>
                <span className="text-gray-400">Круглосуточно</span>
              </li>
            </ul>
          </div>
          
          <div className="text-left">
            <h3 className="text-lg font-bold mb-6">Реквизиты</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2 text-gray-400 text-sm">
                <p className="font-semibold text-white">Получатель:</p>
                <p>ИП КОНДРАТЧЕВ МИХАИЛ НИКОЛАЕВИЧ</p>
                <p>ИНН: 772473751900</p>
                <p>ОГРНИП: 318502700001322</p>
                <p>Р/с: 40802 810 8 4000 0053949</p>
                <p>Адрес: Автозаводская 23А корпус 2</p>
              </div>
              <div className="space-y-2 text-gray-400 text-sm">
                <p className="font-semibold text-white">Банк получателя:</p>
                <p>ПАО Сбербанк</p>
                <p>БИК: 044525225</p>
                <p>К/с: 30101 810 4 0000 0000225</p>
                <p>ИНН: 7707083893</p>
                <p>КПП: 773643002</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between">
            <p className="text-gray-500 text-sm mb-4 md:mb-0 text-left">
              © {new Date().getFullYear()} Мебель Home. Все права защищены.
            </p>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 text-left">
              <Link href="/privacy-policy" className="text-gray-500 text-sm hover:text-white transition-colors">
                Политика конфиденциальности
              </Link>
              <Link href="/terms" className="text-gray-500 text-sm hover:text-white transition-colors">
                Пользовательское соглашение
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
