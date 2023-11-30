// CarouselComponent.js
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Slider from 'react-slick';

const Corausal = () => {
    return (
        <Carousel autoPlay showStatus={false}>

           
                <div className='flex flex-row justify-center m-5 mx-14 my-10 '>

                    <div className='border-2 border-pink-500 h-16'></div>
                    <div className='flex  flex-col p-1'>
                        <div className='font-bold text-4xl text-blue-950 px-1 font-mono'>1600+</div>
                        <div className='font-serif text-blue-950 px-1'>Satisfied Customers</div>
                    </div>

                </div>
          
            <div className='flex  justify-center flex-row m-5 mx-14 my-10 '>

                <div className='border-2 border-pink-500 h-16'></div>
                <div className='flex  flex-col p-1'>
                    <div className='font-bold text-4xl text-blue-950 px-1 font-mono'>3Lakh+</div>
                    <div className='font-serif  text-blue-950 px-1'>Happy employees</div>
                </div>

            </div>
            <div className='flex flex-row m-5 mx-14 justify-center my-10  '>

                <div className='border-2 border-pink-500 h-16 font-mono '></div>
                <div className='flex  flex-col p-1'>
                    <div className='font-bold text-4xl text-blue-950 px-1'>4.7/5</div>
                    <div className='font-serif text-blue-950 px-1'>Rated on Google</div>
                </div>

            </div>
        </Carousel>
    );
};

export default Corausal;






