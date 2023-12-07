import LineAnimation from './LIneanimation'
import { motion } from 'framer-motion';
import ImageRotator from './ImageRotator';
import RotatingArrow from './RotatingArrow';
import React, { useState, useEffect } from 'react';
import RotatingArrow2 from './RotatingArrow2';
import RotoatingArrow3 from './RotoatingArrow3';
import Textcont1 from './Textcont1';
import Textcont2 from './Textcont2';
import Textcont3 from './Textcont3';
import Customers from '../customers/Customers';
import Custumsatisfy from '@/components/Custumsatisfy';



function Linecomp() {

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
            <main className=' bg-purple-950 text-white px-2'>
                <p className='mx-5 font0 bold text-center flex justify-center py-20 text-5xl'>Accessing employee benefits is now easy and straightforward with the Pazcare app.</p>

                <div className='flex w-full'>
                    <div className='w-1/2 flex flex-col my-10 px-5 ml-20'>
                        {/* <LineAnimation/> */}
                        <div className='relative'>
                            <motion.div
                                className="absolute z-40"
                                initial={{ width: 0 }}
                                animate={{ width: '100%' }}
                                transition={{ duration: 10, ease: 'easeInOut', repeat: Infinity, repeatDelay: 20 }}
                                style={{ height: '2px', background: 'red' }}

                            />
                            <div className='border-[1px]  border-white w-full'></div>
                        </div>
                        <div className='text-4xl font-white flex flex-col justify-between'>
                            <div className='flex justify-between'>
                                <p className='m-2 my-6 font-bold font-serif'>  Easy claims process</p>
                                <div className='flex justify-end items-center'>
                                    <RotatingArrow />
                                </div>
                            </div>
                            <div>
                                <Textcont1></Textcont1>
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
                            <div className='border-[1px] border-white w-full '></div>
                        </div>
                        <div className='text-4xl font-bold flex flex-col justify-between'>
                            <div className='flex justify-between'>
                                <p className='m-2 my-6 font-bold font-serif'>Pazcare “Care Crew”</p>
                                <div className='flex justify-end items-center'>
                                    <RotatingArrow2></RotatingArrow2>
                                </div>
                            </div>
                            <div>
                                <Textcont2></Textcont2>
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
                            <div className='border-[1px]  border-white w-full '></div>
                        </div>

                        <div className='text-4xl font-bold  flex flex-col justify-between'>
                            <div className='flex justify-between'>
                                <p className='m-2 my-6 font-bold font-serif'> More benefits. Less switching</p>
                                <div className='flex justify-end items-center'>
                                    <RotoatingArrow3></RotoatingArrow3>
                                </div>

                            </div>

                            <div>
                                <Textcont3></Textcont3>
                            </div>


                        </div>
                        <div className='border-[1px] border-white w-full '></div>
                    </div>
                    <div className='w-1/2 '>
                        <ImageRotator />
                    </div>
                </div>


                <div className='py-20'>
                    <button className='flex mx-auto   justify-center hover:bg-purple-500 font-bold  text-white border-2 border-white px-3 py-2 rounded-full'>Know more about our platform</button>
                </div>

              

            </main>
        </>
    )
}

export default Linecomp