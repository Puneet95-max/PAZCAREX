import { useState, useEffect } from 'react';
import Home from '@/pages/home/Home'
import React from 'react'
import Navbar from './navbar/Navbar'
import Customers from '@/pages/customers/Customers'
import About from '@/pages/about/About'
import CarouselComponent from './Carousel/CarouselComponent'
import Smallnavbar from './navbar/Smallnavbar';
import PazcareCorausal from '@/pages/pazcareC/PazcareCorausal';
import Whoispazcare from './Whoispazcare';
import Linecomp from '@/pages/linecomp/Linecomp';


function Index() {

  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 600);
    };

    // Initial check on mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <div className='overflow-x-hidden'>
      <section>
        {isDesktop ? (
          // Render FirstComponent for larger screens
          <Navbar />
        ) : (
          // Render SecondComponent for smaller screens
          <Smallnavbar />
        )}
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
        <PazcareCorausal/>
      </section>

      <section>
        <Linecomp></Linecomp>
      </section>
      
      <section>
        <Whoispazcare/>
      </section>

  

      <section>
        <CarouselComponent />
      </section>

      




    </div>
  )
}

export default Index