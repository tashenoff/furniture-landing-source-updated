import React from 'react';

const NotFound: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-4xl font-bold mb-6">Страница не найдена</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-lg mx-auto">
          Извините, запрашиваемая страница не существует или была перемещена.
        </p>
        <a 
          href="/" 
          className="btn-primary inline-block"
        >
          Вернуться на главную
        </a>
      </div>
    </section>
  );
};

export default NotFound;
