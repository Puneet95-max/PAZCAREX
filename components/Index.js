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
import Linecomp2 from '@/pages/lincomp2/Linecomp2';
import Custumsatisfy from './Custumsatisfy';
import Certification from './Certification';
import New from './New';
import Exp from './Exp';


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
        <PazcareCorausal />
      </section>
      <section>
        <Whoispazcare />
      </section>



      <section>
        <Linecomp></Linecomp>
      </section>

      <section>
        <Custumsatisfy></Custumsatisfy>

      </section>
      <section>
        <Linecomp2></Linecomp2>
      </section>

      <section>
        <Certification></Certification>
      </section>
      <section>
        <New></New>
      </section>



      <section>
        <CarouselComponent />
      </section>

      <section>
        <Exp></Exp>
      </section>
    </div>
  )
}

export default Index