import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function Smallcerti() {
    return (
        <>
            <main className='bg-purple-900'>

                <div className='flex flex-col text-white mx-8 py-7'>
                    <p className='text-3xl  font-serif font-bold'>Trust in our</p>
                    <p className='text-5xl  font-bold '>Compliance & Certification</p>
                    <p className='text-3xl  font-serif font-bold'>when it comes to <br /> managing your</p>
                    <p className='text-3xl  font-serif font-bold'>employee benefits.</p>
                </div>

                <Carousel autoPlay showStatus={false}>


                    <div className='flex flex-row justify-center m-5 mx-14  my-10'>
                        <div className=' flex flex-col justify-center' >
                            <img src="https://assets-global.website-files.com/6145f7146a1337faae24d53f/640eb11bd1a77e4e0499d919_AICPA.png" loading="lazy" alt="AICPA" className='mx-auto ' style={{ height: '130px', width: '130px' }} />
                            <p className='text-white  font-bold my-2 mx-3 text-center '>AICPA SOC 2 certified</p>
                        </div>
                    </div>

                    <div className='flex flex-row justify-center m-5 mx-14 my-10 '>
                        <div className=' flex flex-col justify-center'>
                            <img src="https://assets-global.website-files.com/6145f7146a1337faae24d53f/641014152823f6f59f2eaa94_ISO%2027001%20certified.svg" loading="lazy" alt="ISO 27001 certificate" className='w-[60px] h-[60px] mx-auto' style={{ height: '130px', width: '130px' }} />
                            <p className='text-white font-bold my-2  mx-5 text-center'>ISO 27001 certified</p>
                        </div>
                    </div>

                    <div className='flex flex-row justify-center m-5 mx-14 my-10 '>
                        <div className='flex flex-col justify-center'>
                            <img src="https://assets-global.website-files.com/6145f7146a1337faae24d53f/6492a0361371d99bc9b1cb1d_ISNP-white.svg" loading="lazy" alt="ISNP " className='w-[60px] h-[60px] mx-auto' style={{ height: '130px', width: '130px' }} />
                            <p className='text-white  font-bold my-2  mx-5 text-center'>ISO 27001 certified</p>
                        </div>
                    </div>
                </Carousel>

            </main>
        </>
    )
}

export default Smallcerti