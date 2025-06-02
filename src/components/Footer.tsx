import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope, faClock } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faTelegram } from '@fortawesome/free-brands-svg-icons';
import logo from '../assets/logos.png';
import '../styles/Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8 bg-cover bg-center" style={{ backgroundImage: 'url(/assets/bg.jpg)' }}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="text-left">
            <div className="flex items-center mb-6">
              <img src={logo} alt="Мебель Home" className="h-12" />
              <span className="text-white text-xl font-bold ml-3">Мебель Home</span>
            </div>
            <p className="text-gray-400 mb-6">
              Индивидуальный подход, соблюдение сроков и безупречное качество для вашего идеального интерьера
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FontAwesomeIcon icon={faWhatsapp} size="lg" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FontAwesomeIcon icon={faTelegram} size="lg" />
              </a>
            </div>
          </div>
          
          <div className="text-left">
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
                <span className="text-gray-400">+7 (495) 123-45-67</span>
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
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>ООО "Мебель Home"</li>
              <li>ИНН: 7712345678</li>
              <li>КПП: 771201001</li>
              <li>ОГРН: 1157746123456</li>
              <li>Р/с: 40702810123450000123</li>
              <li>Банк: ПАО Сбербанк</li>
              <li>БИК: 044525225</li>
              <li>К/с: 30101810400000000225</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between">
            <p className="text-gray-500 text-sm mb-4 md:mb-0 text-left">
              © {new Date().getFullYear()} Мебель Home. Все права защищены.
            </p>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 text-left">
              <a href="/privacy-policy" className="text-gray-500 text-sm hover:text-white transition-colors">
                Политика конфиденциальности
              </a>
              <a href="/terms-of-service" className="text-gray-500 text-sm hover:text-white transition-colors">
                Пользовательское соглашение
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
