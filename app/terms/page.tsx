'use client';

import React from 'react';
import Footer from '@/components/Footer';

export default function Terms() {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <main className="flex-grow container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto bg-black/50 p-8 rounded-lg border border-red-900/20">
          <h1 className="text-3xl font-bold text-white mb-8">Пользовательское соглашение</h1>
          
          <div className="space-y-6 text-gray-300">
            <p>
              Настоящее Пользовательское соглашение регулирует отношения между компанией и пользователями сайта.
            </p>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-white mt-6">1. Общие положения</h2>
              <p>
                1.1. Настоящее Соглашение является публичной офертой и определяет условия использования сайта мебельной компании.
              </p>
              <p>
                1.2. Использование сайта означает полное и безоговорочное принятие настоящего Соглашения.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-white mt-6">2. Предмет соглашения</h2>
              <p>
                2.1. Компания предоставляет пользователю доступ к сервисам сайта на условиях, предусмотренных настоящим Соглашением.
              </p>
              <p>
                2.2. Сайт предоставляет следующие виды сервисов:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Информация о мебельной продукции</li>
                <li>Возможность оформления заказа</li>
                <li>Обратная связь с компанией</li>
                <li>Консультации по продукции</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-white mt-6">3. Права и обязанности сторон</h2>
              <p>
                3.1. Пользователь имеет право:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Получать информацию о продукции</li>
                <li>Оформлять заказы на изготовление мебели</li>
                <li>Получать консультации по продукции</li>
                <li>Обращаться в службу поддержки</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-white mt-6">4. Ответственность сторон</h2>
              <p>
                4.1. Компания не несет ответственности за:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Действия пользователей на сайте</li>
                <li>Содержание информации, предоставляемой пользователем</li>
                <li>Технические сбои в работе сайта</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-white mt-6">5. Заключительные положения</h2>
              <p>
                5.1. Настоящее Соглашение может быть изменено компанией в одностороннем порядке без предварительного уведомления пользователей.
              </p>
              <p>
                5.2. Все споры по настоящему Соглашению разрешаются путем переговоров.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 