// Content1.js
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion'
import Shadow from './Shadow';

const Content3 = () => {
  return (
    <>
      <main className='md:h-screen md:my-8 md:py-14 md:px-6 md:mx-8 flex flex-col '>

        <div className=' md:h-2/4 md:pt-10 px-3 md:flex'>
          <div className=' w-full md:w-1/2 h-60 md:h-auto flex my-2 md:p-4 md:m-2 bg-green-50  hover:border-2 hover:border-green-500    rounded-3xl  '>
            <div className='w-full md:w-4/6'>
              <p className='text-2xl font-bold  my-7 mx-2 px-3 '>Meat wallet</p>
              <p className='mx-2 px-3 my-2'>Comprehensive health insurance plans that consider all your needs</p>
            </div>
            <div className='w-2/6 flex flex-col'>
              <motion.img
                src="https://assets-global.website-files.com/6145f7146a1337faae24d53f/648ffb5c04af85ab6bf90e4c_Meal%20wallet.svg"
                width={170}
                height={170}
                alt='img not working'
                className='mt-2 md:mt-10 '

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
          <div className= ' w-full h-60 md:w-1/2  md:h-auto flex flex-row md:p-4 md:m-2 bg-blue-50 hover:border-2 hover:border-blue-500 rounded-3xl my-2'>
            <div className='md:w-4/6 w-full '>
              <p className='text-2xl font-bold my-7 mx-2 px-3  '>Fuel wallet</p>
              <p className='mx-2 px-3 my-2'>Accident properties that can be tailor made to meet your team strenghth and needs </p>
            </div>
            <div className='w-2/6 flex flex-col'>
              <motion.img
                src="https://assets-global.website-files.com/6145f7146a1337faae24d53f/648ffb5c7a5a9e037e2df2bf_Fuel%20wallet.svg"
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
        <div className=' h-2/4 pb-10 px-3 flex flex-col md:flex-row'>
          <div className='w-full h-60 md:h-auto  md:w-1/2 flex flex-row  md:p-4 md:m-2 bg-yellow-50 hover:border-2 hover:border-yellow-500 rounded-3xl my-2'>
            <div className='w-full md:w-4/6'>
              <p className='text-2xl font-bold my-7 mx-2 px-3 '>Telecom wallet</p>
              <p className='mx-2 px-3 my-2'>Protect Your employee and their families with the best group-term  life insurance  policy</p>
            </div>
            <div className='w-2/6'>
              <motion.img
                src="https://assets-global.website-files.com/6145f7146a1337faae24d53f/648ffb5b47139e4ad7363fdd_Telecom%20wallet.svg"
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
          <div className=' w-full   h-60 md:h-auto md:w-1/2 flex flex-row md:p-4 md:m-2 bg-red-50 hover:border-2 hover:border-red-500  rounded-3xl my-2'>
            <div className=' w-full md:w-4/6'>
              <p className='text-2xl font-bold my-7 md:mx-2 px-3 '>Multi benefits</p>
              <p className='mx-2 px-3 my-2'>Why settle up for less you can upgrade your health inusrance upto 20 lakhs</p>
            </div>
            <div className='w-2/6 flex flex-col'>
              <motion.img
                src="https://assets-global.website-files.com/6145f7146a1337faae24d53f/648ffb5c78f750da0d5e3f68_Multi%20benefits%20wallet.svg"
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

export default Content3;
