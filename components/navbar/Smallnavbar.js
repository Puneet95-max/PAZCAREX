import Link from 'next/link';
import React, { useState } from 'react';
import { motion } from 'framer-motion';


function Smallnavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen)
  }
  return (

    <div className='h-[4rem] p-10 shadow-2xl w-full bg-white  flex flex-row fixed z-50 justify-between  '>

      <div className='flex items-center  text-left ' style={{ marginLeft: '' }}>
        <Link href={"/"}>
          <img src="https://assets-global.website-files.com/6145f7146a1337faae24d53f/642e93d94ccdf8a321436907_logo%20paz.svg" className='m-6 ml-4 w-40 ' alt="Pazcare logo" class="header-logo" />
        </Link>
      </div>
      <div className='font-medium flex items-center justify-between relative z-10 ' >
        <button className='w-full flex-col justify-center items-center   lg:flex ' onClick={handleClick} >
          <span className={` bg-purple-900 block transition-all duration-300 ease-out h-[2.5px] w-7 rounded-sm  ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`} ></span>
          <span className={` bg-purple-900 block transition-all duration-300 ease-out h-[2.5px] w-7  rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`} ></span>
          <span className={` bg-purple-900 block transition-all duration-300 ease-out h-[2.5px] w-7 rounded-sm  ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'} `} ></span>
        </button>
      </div>
      {
        isOpen ?
          <motion.div
            initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
            animate={{ scale: 1, opacity: 1 }}
            className='min-w-[100vw] flex flex-col z-30 justify-between  fixed top-[37%] left-1/2 
      bg-white/70 rounded-lg backdrop-blur-md py-0 shadow-lg' >
            <nav className='py-8 px-6 text-left'>
              <h2 className=' text-2xl pb-6'>Platform</h2>
              <h2 className=' text-2xl pb-6'>Products</h2>
              <h2 className=' text-2xl pb-6'>Resources</h2>
              <h2 className=' text-2xl pb-6'>Pazcare reviews</h2>
              <h2 className=' text-2xl pb-6'>Contact us</h2>
              <h2 className=' text-2xl pb-6'>Sign in</h2>
              <h2 className='text-[#193765] text-2xl pb-6 text'>Get Quote</h2>
            </nav>
          </motion.div>

          : null
      }

    </div>
  )
}

export default Smallnavbar