'use client';

import React, { useState } from 'react'
import Hero from '../components/Hero'
import Advantages from '../components/Advantages'
import About from '../components/About'
import Services from '../components/Services'
import Portfolio from '../components/Portfolio'
import Reviews from '../components/Reviews'
import Certificates from '../components/Certificates'
import ContactForm from '../components/ContactForm'
import Contacts from '../components/Contacts'
import Footer from '../components/Footer'

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);

  return (
    <>
      <main>
        <Hero onOpenModal={handleOpenModal} />
        <Advantages />
        <section id="about">
          <About />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="portfolio">
          <Portfolio />
        </section>
        <section id="reviews">
          <Reviews />
        </section>
        <section id="certificates">
          <Certificates />
        </section>
        <section id="contacts">
          <ContactForm />
          <Contacts />
        </section>
        <Footer />
      </main>
    </>
  )
} 