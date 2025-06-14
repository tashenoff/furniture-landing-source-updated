import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Modal from '@/components/Modal'
import { ModalProvider } from '@/context/ModalContext'

const inter = Inter({ subsets: ['latin', 'cyrillic'] })

export const metadata: Metadata = {
  title: 'Мебель Home - Дизайнерская мебель на заказ в Москве',
  description: 'Мебель Home - Дизайнерская мебель на заказ в Москве. Индивидуальный подход, соблюдение сроков и безупречное качество для вашего идеального интерьера. Изготовление мебели на заказ в Москве.',
  keywords: 'мебель на заказ, дизайнерская мебель, кухни на заказ, шкафы-купе, встроенная мебель, мебель для ванной, мебель для офиса',
  authors: [{ name: 'Мебель Home' }],
  creator: 'Мебель Home',
  publisher: 'Мебель Home',
  formatDetection: {
    email: false,
    address: false,
    telephone: true,
  },
  openGraph: {
    title: 'Мебель Home - Дизайнерская мебель на заказ',
    description: 'Индивидуальный подход, соблюдение сроков и безупречное качество для вашего идеального интерьера',
    url: 'https://mebel-home.ru',
    siteName: 'Мебель Home',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Мебель Home - Дизайнерская мебель на заказ',
      },
    ],
    locale: 'ru_RU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Мебель Home - Дизайнерская мебель на заказ',
    description: 'Индивидуальный подход, соблюдение сроков и безупречное качество для вашего идеального интерьера',
    images: ['/og-image.jpg'],
    creator: '@mebelhome',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  verification: {
    google: 'google-site-verification-code',
    yandex: 'yandex-verification-code',
  },
  alternates: {
    canonical: 'https://mebel-home.ru',
  },
  category: 'furniture',
  classification: 'business',
  referrer: 'origin-when-cross-origin',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
  manifest: '/manifest.json',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/apple-touch-icon-precomposed.png',
    },
  },
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