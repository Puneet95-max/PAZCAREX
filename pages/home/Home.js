import React from 'react'
import { useState, useEffect } from 'react';
import Text from './Text'
import Cora from './Cora'
import Corausal from './Corausal'

function Home() {

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
        <div className=' p-2  flex flex-col items-center overscroll-none ' style={{ backgroundImage: 'url("https://assets-global.website-files.com/6145f7146a1337faae24d53f/649936135cffdde3689065e0_background%20(1).svg")' }}>

            <div className='text-5xl md:text-6xl font-bold text-center my-3 mx-12 md:m-4 mt-20 md:mt-24 py-12 md:py-2 md:pt-24 font-serif'>Comprehensive Benefits, <br />Uncomplicated Experience</div>

            <div className='flex flex-col   md:text-3xl justify-center '>
                <span className=''> Looking for employee benefits?</span>
            </div>

            <div className='flex     flex-row  md:text-3xl '>
                <span className='flex flex-col  text-center  md:flex-row'><p>We'e got the whole kit - </p><p><Text /></p></span>

            </div>
            <div>
                <button className='border-2 text-xl bg-pink-500 hover:bg-pink-600 rounded-3xl px-7 py-2 my-9 text-white font-bold'>Get Quote</button>
            </div>

            <div className='flex flex-row'>


                {isDesktop ? (
                    // Render FirstComponent for larger screens
                    <Cora />
                ) : (
                    // Render SecondComponent for smaller screens
                    <Corausal />
                )}

                {/* <Corausal /> */}


            </div>
        </div>
    )
}

export default Home