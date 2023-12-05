// Content1.js
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion'
import Shadow from './Shadow';

const Content2 = () => {
  return (
    <>
      <main className='md:h-screen md:my-8 md:py-14 md:px-6  md:mx-8 flex flex-col '>

        <div className=' h-2/4 pt-10 px-3 flex'>
          <div className='w-full h-60 md:h-auto flex md:p-4 md:m-2 bg-green-50  hover:border-2 hover:border-green-500  my-2    rounded-3xl'>
            <div className='w-4/6'>
              <p className='text-2xl font-bold my-7 mx-2 px-3'>Tele Doctor consultations</p>
              <p className='mx-2 px-3 my-2'>consult exerpts anytime anywhere from comfort of your home</p>
            </div>
            <div className='w-2/6'>
              <motion.img
                src="https://assets-global.website-files.com/6145f7146a1337faae24d53f/6490018f35d6666c4a8800fa_Tele%20doctor%20consultations%20(2).svg"
                width={170}
                height={170}
                alt='img not working'
                className='mt-10'
                animate={{
                  y: [-20, 20], // Animate between -20 and 20
                }}
                transition={{
                  duration: 2,
                  ease: 'linear',
                  repeat: Infinity, // Infinite loop
                  repeatType: 'reverse', // Yoyo effect
                }}
              />
              <span className='flex justify-center px-2 items-start' >

                <svg width="200" height="200" >
                  <motion.ellipse
                    animate={{
                      rx: [18, 30]
                    }}
                    transition={{
                      duration: 1.9,
                      repeat: Infinity,
                      ease: "easeInOut",
                      repeatType: "reverse"
                    }}

                    cx='65' cy='0' rx='15' ry='5' className=" fill-black/40 "
                  />
                </svg>
              </span>

            </div>
          </div>

        </div>
        <div className=' h-2/4 pb-10 px-3 flex md:flex-row flex-col'>
          <div className='w-full  h-60 md:h-auto md:w-1/2 flex md:p-4 md:m-2 bg-yellow-50 hover:border-2 hover:border-yellow-500 rounded-3xl my-2'>
            <div className='w-full md:w-4/6'>
              <p className='text-2xl font-bold my-7 mx-2 px-3'>Healths Check </p>
              <p className='mx-2 px-3 my-2'>Catch potential hiccups early withb reguler health checkups ,Help your team bring  their A- game to Persernal lives and work daily</p>
            </div>
            <div className='w-2/6'>
              <motion.img
                src="https://assets-global.website-files.com/6145f7146a1337faae24d53f/6490018ff75399278bbeab92_Health%20Check-ups.svg"
                width={170}
                height={170}
                alt='img not working'
                className='mt-10'
                animate={{
                  y: [-20, 20], // Animate between -20 and 20
                }}
                transition={{
                  duration: 2,
                  ease: 'linear',
                  repeat: Infinity, // Infinite loop
                  repeatType: 'reverse', // Yoyo effect
                }}

              />
              <span className='flex justify-center px-2 items-start' ><Shadow /></span>

            </div>
          </div>
          <div className='w-full h-60 md:h-auto md:w-1/2 flex md:p-4 md:m-2 bg-red-50 hover:border-2 hover:border-red-500  rounded-3xl my-2'>
            <div className=' w-full md:w-4/6'>
              <p className='text-2xl font-bold my-7 mx-2 px-3'>Fitness Plans</p>
              <p className='mx-2 px-3 my-2'>Physically fit employees financly fit busness foster a healthier , more enegetic workforce witj customizable fitness plans</p>
            </div>
            <div className='w-2/6'>
              <motion.img
                src="https://assets-global.website-files.com/6145f7146a1337faae24d53f/6490019004af85ab6bfeb3fd_Fitness%20Plans%20(2).svg"
                width={170}
                height={170}
                alt='img not working'
                className='mt-10'
                animate={{
                  y: [-20, 20], // Animate between -20 and 20
                }}
                transition={{
                  duration: 2,
                  ease: 'linear',
                  repeat: Infinity, // Infinite loop
                  repeatType: 'reverse', // Yoyo effect
                }}

              />
              <span className='flex justify-center px-2 items-start' ><Shadow /></span>

            </div>
          </div>
        </div>


      </main>
    </>
  );
};

export default Content2;
