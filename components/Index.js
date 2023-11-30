import  { useState, useEffect } from 'react';
import Home from '@/pages/home/Home'
import React from 'react'
import Navbar from './navbar/Navbar'
import Customers from '@/pages/customers/Customers'
import About from '@/pages/about/About'
import CarouselComponent from './Carousel/CarouselComponent'


function Index() {
  return (
    <div>
      <section>
        <Navbar />
      </section>

      <section>
        <Home />
      </section>

      <section>
        <Customers />
      </section>

      <section>
        <About />
      </section>

      <section>
        <CarouselComponent />
      </section>




    </div>
  )
}

export default Index