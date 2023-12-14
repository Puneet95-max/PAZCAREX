import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import Img from './Img';
import Textcont1 from '../linecomp/Textcont1';
import Text1 from './Text1';
import Text2 from './Text2';
import Text3 from './Text3';
import RotatingArrow from '../linecomp/RotatingArrow';
import RotoatingArrow3 from '../linecomp/RotoatingArrow3';
import RotatingArrow2 from '../linecomp/RotatingArrow2';



function Linecomp2() {

  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    // Rotate the arrow by 90 degrees after 10 seconds
    const rotateTimeout = setTimeout(() => {
      setRotation(-90);
    }, 10000);

    // Rotate the arrow back to its normal position after another 10 seconds
    const resetTimeout = setTimeout(() => {
      setRotation(0);
    }, 20000);

    // Cleanup the timeouts to avoid memory leaks
    return () => {
      clearTimeout(rotateTimeout);
      clearTimeout(resetTimeout);
    };
  }, []);




  return (
    <>
      <main className=' bg-purple-200 text-black py-6 px-2'>
        <p className='md:mx-24  text-purple-800 text-center flex justify-center py-20 text-3xl md:text-5xl'>You take care of people strategies.
          We'll take care of your end-to-end benefits management..</p>

        <div className='flex w-full'>
          <div className='w-full md:w-1/2 flex flex-col my-10 px-5 md:ml-20'>
            {/* <LineAnimation/> */}
            <div className='relative'>
              <motion.div
                className="absolute z-40"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 10, ease: 'easeInOut', repeat: Infinity, repeatDelay: 20 }}
                style={{ height: '2px', background: 'red' }}
              />
              <div className='border-[1px]  border-black w-full'></div>
            </div>
            <div className='text-4xl font-white flex flex-col justify-between'>
              <div className='flex justify-between'>
                <p className='m-2 my-6 font-bold font-serif'> Simplify benefits management </p>
                <div className='flex justify-end items-center'>
                  <RotatingArrow></RotatingArrow>
                </div>
              </div>
              <div>
               <Text1></Text1>
              </div>
            </div>

            {/* <LineAnimation /> */}
            <div className='relative'>
              <motion.div
                className="absolute z-40"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 10, ease: 'easeInOut', delay: 10, repeat: Infinity, repeatDelay: 20 }}
                style={{ height: '2px', background: 'red' }}
              />
              <div className='border-[1px] border-black w-full '></div>
            </div>
            <div className='text-4xl font-bold flex flex-col justify-between'>
              <div className='flex justify-between'>
                <p className='m-2 my-6 font-bold font-serif'>Claims and benefits analytics</p>
                <div className='flex justify-end items-center'>
                  <RotatingArrow2></RotatingArrow2>
                </div>
              </div>
              <div>
               <Text2></Text2>
              </div>

            </div>
            {/* <LineAnimation /> */}
            <div className='relative'>
              <motion.div
                className="absolute"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 10, ease: 'easeInOut', delay: 20, repeat: Infinity, repeatDelay: 20 }}
                style={{ height: '2px', background: 'red' }}
              />
              <div className='border-[1px]  border-black w-full '></div>
            </div>

            <div className='text-4xl font-bold  flex flex-col justify-between'>
              <div className='flex justify-between'>
                <p className='m-2 my-6 font-bold font-serif'> More benefits. Less switching</p>
                <div className='flex justify-end items-center'>
                  <RotoatingArrow3></RotoatingArrow3>
                </div>

              </div>

              <div>
             <Text3></Text3>
              </div>


            </div>
            <div className='border-[1px] border-black w-full '></div>
          </div>
          <div className='w-0 md:w-1/2 '>
            <Img></Img>
          </div>
        </div>


        <div className='py-20'>
          <button className='flex mx-auto   justify-center hover:bg-purple-300 font-bold  text-purple-800 border-2 border-purple-800 px-3 py-2 rounded-full'>Know more about our platform</button>
        </div>



      </main>
    </>
  )
}

export default Linecomp2