import Link from 'next/link'
import Footer from '@/components/Footer'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow flex items-center justify-center bg-black">
        <div className="container mx-auto px-4 flex items-center justify-center min-h-[calc(100vh-200px)]">
          <div className="relative w-full max-w-[600px]">
            {/* Декоративные блики */}
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-500/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-red-500/10 rounded-full blur-3xl"></div>
            
            {/* Основной контейнер */}
            <div className="relative px-16 py-12 bg-black rounded-lg border border-red-900/20">
              <div className="text-center space-y-5">
                {/* Текст 404 */}
                <h1 className="text-[100px] font-bold text-red-600 leading-none relative z-10">
                  404
                </h1>
                
                <div className="space-y-3 relative z-10">
                  <h2 className="text-2xl font-semibold text-white">
                    Страница не найдена
                  </h2>
                  <p className="text-gray-400 text-base">
                    К сожалению, запрашиваемая страница не существует
                  </p>
                </div>

                {/* Кнопка */}
                <Link 
                  href="/" 
                  className="inline-flex items-center justify-center px-8 py-3 mt-4 text-base font-medium text-white bg-red-700 rounded hover:bg-red-600 transition-colors relative z-10"
                >
                  Вернуться на главную
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
} 