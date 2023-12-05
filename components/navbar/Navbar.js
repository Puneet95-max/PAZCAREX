import Link from 'next/link'
import React from 'react'
import CustomArrow from './Customarrow'
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';


function Navbar() {
    const [isHovered, setHovered] = useState(false);

    return (
        <>
            <div className='h-20  shadow-2xl w-full bg-white  flex flex-row sticky top-0 '>

                {/* logo */}
                <div className='flex items-center w-1/5 ' style={{ marginLeft: '90px' }}>
                    <Link href={"/"}>
                        <img src="https://assets-global.website-files.com/6145f7146a1337faae24d53f/642e93d94ccdf8a321436907_logo%20paz.svg" className='m-6' alt="Pazcare logo" class="header-logo" />
                    </Link>
                </div>


                <div className='flex items-center w-3/5'>
                    <ul className='flex  '>
                        <li className='mx-6 ml-10 hover:cursor-pointer flex  items-center'>
                            <div>
                                <motion.p
                                    onMouseEnter={() => setHovered(true)}
                                    onMouseLeave={() => setHovered(false)}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <div className='flex items-center'>   Platform <CustomArrow /></div>
                                </motion.p>

                                <AnimatePresence>
                                    {isHovered && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            transition={{ duration: 0.2 }}
                                            style={{
                                                position: 'absolute',
                                                background: 'white',
                                                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                                                padding: '10px',
                                                marginTop: '26px',
                                            }}
                                            className='rounded-2xl'
                                        >
                                            {/* Your dropdown menu content goes here */}
                                            <div className='p-5'>
                                                <p className='m-3 hover:text-red-400'>overview</p>
                                                <p className='m-3 hover:text-red-400'>employee experience</p>
                                                <p className='m-3 hover:text-red-400'>employer experience</p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </li>
                        <li className='mx-6 hover:cursor-pointer flex  items-center'>Products <CustomArrow /></li>
                        <li className='mx-6 hover:cursor-pointer flex  items-center'>Resource <CustomArrow /></li>
                        <li className='mx-6 hover:text-pink-500 hover:cursor-pointer flex  items-center'>Pazcare Review </li>
                        <li className='mx-6  hover:text-pink-500 hover:cursor-pointer flex  items-center'>Contact us</li>
                    </ul>

                </div>

                <div className='flex  items-center   mx-10 w-1/5 '>
                    <button className='  bg-slate-200  font-bold hover:bg-slate-300 rounded-3xl px-5 py-2 m-2'>Login</button>
                    <button className='bg-purple-800 font-bold hover:bg-purple-900  text-white rounded-3xl px-5 py-2 m-2'>Get Qoute</button>
                </div>






            </div>
        </>
    )
}

export default Navbar