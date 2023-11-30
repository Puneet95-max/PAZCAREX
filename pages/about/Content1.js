// Content1.js
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion'
import Shadow from './Shadow';

const Content1 = () => {
  return (
    <>
      <main className='  h-screen my-8 py-14 px-6 mx-8 flex flex-col '>

        <div className=' h-2/4 pt-10 px-3 flex'>
          <div className=' w-1/2 flex p-4 m-2 bg-green-100  hover:border-2 hover:border-green-500    rounded-3xl'>
            <div className='w-4/6'>
              <p className='text-2xl font-bold my-7 mx-2 px-3'>Group Health Insurance</p>
              <p className='mx-2 px-3 my-2'>Comprehensive health insurance plans that consider all your needs</p>
            </div>
            <div className='w-2/6 flex flex-col'>
              <motion.img
                src="https://assets-global.website-files.com/6145f7146a1337faae24d53f/648fe9baa96e5e16f4793220_GHI%20icon.svg"
                width={170}
                height={170}
                alt='img not working'
                className=' mt-10 '

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
          <div className=' w-1/2 flex p-4 m-2 bg-blue-100 hover:border-2 hover:border-blue-500 rounded-3xl'>
            <div className='w-4/6'>
              <p className='text-2xl font-bold my-7 mx-2 px-3'>Group Persernal Health Insurance</p>
              <p className='mx-2 px-3 my-2'>Accident properties that can be tailor made to meet your team strenghth and needs </p>
            </div>
            <div className='w-2/6'>
              <motion.img
                src="https://assets-global.website-files.com/6145f7146a1337faae24d53f/648ff8f5dc6153f840e6f400_GPA%20icon.svg"
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
        <div className=' h-2/4 pb-10 px-3 flex'>
          <div className=' w-1/2 flex p-4 m-2 bg-yellow-100 hover:border-2 hover:border-yellow-500 rounded-3xl'>
            <div className='w-4/6'>
              <p className='text-2xl font-bold my-7 mx-2 px-3'>Group Term Life  Insurance</p>
              <p className='mx-2 px-3 my-2'>Protect Your employee and their families with the best group-term  life insurance  policy</p>
            </div>
            <div className='w-2/6'>
              <motion.img
                src="https://assets-global.website-files.com/6145f7146a1337faae24d53f/648ff96e6e41759fe44774ba_GTL%20icon.svg"
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
          <div className=' w-1/2 flex p-4 m-2 bg-red-100 hover:border-2 hover:border-red-500  rounded-3xl'>
            <div className='w-4/6'>
              <p className='text-2xl font-bold my-7 mx-2 px-3'>Health Super top-up</p>
              <p className='mx-2 px-3 my-2'>Why settle up for less you can upgrade your health inusrance upto 20 lakhs</p>
            </div>
            <div className='w-2/6 flex-col'>
              <motion.img
                src="https://assets-global.website-files.com/6145f7146a1337faae24d53f/648ff96e9513baa9534ee6c1_Health%20super-topup%20icon.svg"
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

              {/* <motion.div

                animate={{}}
                className='border-2 bg-black'
                
              /> */}
            </div>
          </div>
        </div>


      </main>
    </>
  );
};

export default Content1;
