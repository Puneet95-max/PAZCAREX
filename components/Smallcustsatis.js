import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function Smallcustsatis() {
    return (
        <>
            <main className='bg-gradient-to-r from-purple-500 to-pink-500'>


                <div className='text-white flex flex-col mx-5 py-4'>
                    <p className='font-bold mx-5 my-2  font-serif text-3xl'>We take</p>
                    <p className='text-5xl   mx-5 font-bold font-sans'>customer satisfaction</p>
                    <p className='font-bold mx-5 my-2 font-serif text-3xl'>Very seriously</p>
                </div>
                <Carousel autoPlay showStatus={false}>


                    <div className='flex flex-row justify-center m-5 mx-14 my-10 '>
                        <div className=' border-2   rounded-3xl bg-white relative'>
                            {/* <img src="https://assets-global.website-files.com/6145f7146a1337faae24d53f/6465edc3b94dae417d50a05c_pie%20chart%20icon.svg" className='absolute top-0 right-0 m-1 h-[5px] w-[5px]' /> */}
                            <p className='text-purple-950 flex justify-center'>
                                <p className=''><span className='text-[80px] font-bold'>70</span><span className='text-2xl'>+</span></p></p>
                            <p className='font-bold  mx-3 text-purple-950'>NPS score for claims and support</p>
                        </div>
                    </div>

                    <div className='flex flex-row justify-center m-5 mx-14 my-10 '>
                        <div className=' border-2 rounded-3xl my-2 bg-white relative'>
                            {/* <img src="https://assets-global.website-files.com/6145f7146a1337faae24d53f/63f85777df873510ebdd9ca5_shield-icon%20(2).svg" className='absolute top-0 right-0 m-1' /> */}
                            <p className='text-purple-950 flex justify-center'>
                                <p className=''><span className='text-[80px] font-bold'>9.2</span><span className='text-2xl'>/10</span></p> </p>
                            <p className='font-bold  mx-3 text-purple-950'>Rating for overall customer satisfaction</p>
                        </div>
                    </div>
                    <div className='flex flex-row justify-center m-5 mx-14 my-10 '>
                        <div className='border-2 my-2 rounded-3xl bg-white relative' >
                            {/* <img src="https://assets-global.website-files.com/6145f7146a1337faae24d53f/63f85778a3a619529af08c4f_offer-icon.svg" className='absolute top-0 right-0 m-1' /> */}
                            <p className='text-purple-950 flex justify-center'>
                                <p className=''><span className='text-[80px] font-bold'>1</span><span className='text-2xl'>ST</span></p> </p>
                            <p className='font-bold  mx-3 text-purple-950'>Awarded as the best brand in insurance   </p>
                        </div>
                    </div>
                </Carousel>


            </main>
        </>
    )
}

export default Smallcustsatis