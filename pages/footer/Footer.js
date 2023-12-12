import React, { useState } from 'react'
import { motion } from 'framer-motion';
import Link from 'next/link'
import Tab1 from './Tab1';
import Tab2 from './Tab2';
import Tab3 from './Tab3';
import Tab4 from './Tab4';
import Footer2 from './Footer2';

const Footer = () => {
    const [selectedContent, setSelectedContent] = useState('Tab1');

    const handleButtonClick = (content) => {
        setSelectedContent(content);
    };
    return (
        <div className='py-32 px-16 w-full h-auto bg-[#f6f6f6]'>
            <div className='w-full flex flex-row '>
                <div className='w-[60%] flex flex-row  ' >
                    <div className=' flex flex-col pl-10 text-left'>
                        <h2 className='  pb-8 flex  text-left font-bold text-xl '>Platform </h2>
                        <div className='flex justify-center text-left flex-col '>
                            <Link href="/" className=' hover:underline font-semibold flex items-center pb-3  text-black/70'>Overview</Link>
                            <Link href="/" className=' hover:underline font-semibold flex items-center pb-3  text-black/70'>Employs Experience</Link>
                            <Link href="/" className=' hover:underline font-semibold flex items-center pb-3  text-black/70'>Mobile Apps for Employs</Link>
                        </div>
                    </div>
                    <div className='flex flex-col pl-16 text-left'>
                        <h2 className='  pb-8 flex  text-left font-bold text-xl '>Products </h2>
                        <div className='flex justify-center text-left flex-col '>
                            <Link href="/" className=' hover:underline font-semibold flex items-center pb-3  text-black/70'>Group health insurance</Link>
                            <Link href="/" className=' hover:underline font-semibold flex items-center pb-3  text-black/70'>Group personal accident insurance</Link>
                            <Link href="/" className=' hover:underline font-semibold flex items-center pb-3  text-black/70'>group term life insurance</Link>
                            <Link href="/" className=' hover:underline font-semibold flex items-center pb-3  text-black/70'>Super top-up insurance</Link>
                            <Link href="/" className=' hover:underline font-semibold flex items-center pb-3  text-black/70'>Coperate wellness packages</Link>
                            <Link href="/" className=' hover:underline font-semibold flex items-center pb-3  text-black/70'>Pazcard employe packages</Link>
                            <Link href="/" className=' hover:underline font-semibold flex items-center pb-3  text-black/70'>Keyman insurance</Link>
                            <Link href="/" className=' hover:underline font-semibold flex items-center pb-3  text-black/70'>Fire insurance</Link>
                            <Link href="/" className=' hover:underline font-semibold flex items-center pb-3  text-black/70'>Directors & officers liability insurance</Link>
                        </div>
                    </div>
                    <div className='flex flex-col pl-16 text-left'>
                        <h2 className='  pb-8 flex  text-left font-bold text-xl '>Company </h2>
                        <div className='flex justify-center text-left flex-col '>
                            <Link href="/" className=' hover:underline font-semibold flex items-center pb-3  text-black/70'>Pazcare reviews</Link>
                            <Link href="/" className=' hover:underline font-semibold flex items-center pb-3  text-black/70'>Contact us</Link>
                            <Link href="/" className=' hover:underline font-semibold flex items-center pb-3  text-black/70'>about us</Link>
                            <Link href="/" className=' hover:underline font-semibold flex items-center pb-3  text-black/70'>Get help</Link>
                            <Link href="/" className=' hover:underline font-semibold flex items-center pb-3  text-black/70'>Terms & conditions</Link>
                            <Link href="/" className=' hover:underline font-semibold flex items-center pb-3  text-black/70'>Privacy policy</Link>

                        </div>
                    </div>
                </div>
                <div className='w-[40%] ml-12'>
                    <div className='flex flex-col  justify-between px-12 py-4'>
                        <div className='flex flex-row  justify-between'>
                            <button onClick={() => handleButtonClick('Tab1')} className={`flex items-center text-sm font-semibold border-solid border-black p-2 px-5 rounded-full ${selectedContent === 'Tab1' ? 'bg-black text-white ' : 'text-black bg-[#f6f6f6] border-solid border-black  border-[1.5px] hover:bg-white'} `}>Reports</button>
                            <button onClick={() => handleButtonClick('Tab2')} className={`flex items-center text-sm font-semibold border-solid border-black p-2 px-5 rounded-full ${selectedContent === 'Tab2' ? 'bg-black text-white ' : 'text-black bg-[#f6f6f6] border-solid border-black  border-[1.5px] hover:bg-white'} `}>Guides</button>
                            <button onClick={() => handleButtonClick('Tab3')} className={`flex items-center text-sm font-semibold border-solid border-black p-2 px-5 rounded-full ${selectedContent === 'Tab3' ? 'bg-black text-white ' : 'text-black bg-[#f6f6f6] border-solid border-black  border-[1.5px] hover:bg-white'}  `}>Blogs</button>
                            <button onClick={() => handleButtonClick('Tab4')} className={`flex items-center text-sm font-semibold border-solid border-black p-2 px-5 rounded-full ${selectedContent === 'Tab4' ? 'bg-black text-white ' : 'text-black bg-[#f6f6f6] border-solid border-black  border-[1.5px] hover:bg-white'}  `}>HR Kit</button>
                        </div>
                        <div className='flex flex-col'>
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className=" w-full "
                            >
                                {selectedContent === 'Tab1' && <Tab1 />}
                                {selectedContent === 'Tab2' && <Tab2 />}
                                {selectedContent === 'Tab3' && <Tab3 />}
                                {selectedContent === 'Tab4' && <Tab4 />}
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full'>
            </div>

            <Footer2></Footer2>
        </div>
    )
}

export default Footer