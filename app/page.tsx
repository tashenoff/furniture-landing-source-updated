'use client';

import React from 'react';
import Hero from '@/components/Hero';
import Advantages from '@/components/Advantages';
import About from '@/components/About';
import Portfolio from '@/components/Portfolio';
import Certificates from '@/components/Certificates';
import Contacts from '@/components/Contacts';
import Footer from '@/components/Footer';
import { useModal } from '@/context/ModalContext';

const Home: React.FC = () => {
  const { openModal } = useModal();

  const handleOpenModal = () => {
    openModal();
  };

  return (
    <>
      <main>
        <Hero onOpenModal={handleOpenModal} />
        <Advantages />
        <section id="about">
          <About />
        </section>
        <Portfolio />
        <Certificates />
        <Contacts />
      </main>
      <Footer />
    </>
  );
};

export default Home; 