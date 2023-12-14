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
import Footer from '@/pages/footer/Footer';
import Smallcustsatis from './Smallcustsatis';
import Smallcerti from './Smallcerti';
import Footer2 from '@/pages/footer/Footer2';
import Smallcustomer from '@/pages/customers/Smallcustomer';


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

        {/* {isDesktop ? (
          <Customers />
        ) : (
          <Smallcustomer />
        )} */}

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
        {isDesktop ? (
          <Custumsatisfy />
        ) : (
          <Smallcustsatis />
        )}

      </section>



      <section>
        <Linecomp2></Linecomp2>
      </section>

      <section>
        {isDesktop ? (
          <Certification />) : (
          <Smallcerti />
        )}
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

      <section>
        {isDesktop ? (
          <Footer />
        ) : (
          <Footer2 />
        )}
      </section>
    </div>
  )
}

export default Index