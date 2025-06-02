'use client';

import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Advantages from '@/components/Advantages';
import About from '@/components/About';
import Portfolio from '@/components/Portfolio';
import Certificates from '@/components/Certificates';
import Contacts from '@/components/Contacts';
import Footer from '@/components/Footer';
import { useModal } from '@/context/ModalContext';

const App: React.FC = () => {
  const { openModal } = useModal();

  const handleOpenModal = () => {
    openModal();
  };

  return (
    <div className="App">
      <Header />
      <main>
        <Hero onOpenModal={handleOpenModal} />
        <Advantages />
        <About />
        <Portfolio />
        <Certificates />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
};

export default App;
