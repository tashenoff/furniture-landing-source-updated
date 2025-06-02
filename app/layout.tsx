import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Modal from '@/components/Modal'
import { ModalProvider } from '@/context/ModalContext'

const inter = Inter({ subsets: ['latin', 'cyrillic'] })

export const metadata: Metadata = {
  title: 'Мебель Home',
  description: 'Индивидуальный подход, соблюдение сроков и безупречное качество для вашего идеального интерьера',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <ModalProvider>
          <Header />
          {children}
          <Modal />
        </ModalProvider>
      </body>
    </html>
  )
} 