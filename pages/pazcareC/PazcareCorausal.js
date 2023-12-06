import React, { useEffect, useRef, Component } from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'
import Image from 'next/image';


function PazcareCorausal() {

    const sliderRef = useRef(null);

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToScroll: 1,
        slidesToShow: 3.5,
        responsive: [
            {
                breakpoint: 1024, // Large screens
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768, // Medium screens
                settings: {
                    slidesToShow: 1.5,
                },
            },
            {
                breakpoint: 640, // Small screens
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    const mycss = {

    };

    return (

        <main className='bg-slate-50 ' >
            <div className='flex flex-col items-center   py-11 ' >
                <div className='font-bold  text-3xl md:text-5xl my-5 mx-2 md:mt-16'>Why choose Pazcare?</div>
                <div className='py-3 mx-3 text-center'>You're choosing flexibility, transparency, and personalization in your employee benefits when choosing Pazcare</div>
            </div>
            <div>
                <Slider ref={sliderRef} {...settings} className='' >
                    <div className='slide-wrapper rounded-3xl' >
                        <div className='flex flex-col bg-green-50 rounded-3xl border-2 ' style={{ width: '400px',height:"", margin: '0 auto' }}>
                            <div className='mx-5 text-3xl flex justify-center text-center' style={{ margin: "30px" }}>Handpick employee benefits which you want </div>
                            <div className='flex justify-center mx-10 text-center'>Handpick the ideal perks for  your team with a catalogue of choices</div>
                            <div><img src="https://assets-global.website-files.com/6145f7146a1337faae24d53f/64884c87c2377ab9d5d09745_handpick%20benefits.svg" className='mt-14'></img></div>
                        </div>
                    </div>

                   
                        <div className='slide-wrapper rounded-3xl'>
                            <div className=' flex flex-col bg-purple-50  rounded-3xl border-2 ' style={{ width: '400px', margin: '0 auto' }}>
                                <div className='mx-5 text-3xl flex justify-center text-center' style={{ margin: "30px" }}>Benfits that never go wasted</div>
                                <div className='flex justify-center mx-10 text-center my-3'> The benefits are easily accessiable for  your team to explore,enjoy and make most of them</div>
                                <div ><img src="https://assets-global.website-files.com/6145f7146a1337faae24d53f/64917af070e6f03c6d46b2a9_pazcare%20app.png" className='w-[400px]' /></div>
                            </div>
                        </div>
                

                    <div className='slide-wrapper rounded-3xl'>
                        <div className=' bg-blue-50 flex flex-col rounded-3xl border-2  ' style={{ width: '400px', margin: '0 auto' }}>
                            <div className='mx-5 text-3xl flex justify-center text-center' style={{ margin: "30px" }}>Save hours with digital benefits  management</div>
                            <div className='flex justify-center mx-10 text-center'>No more sheets or emails,manage employee benefits digitaly and save hours every month</div>
                            <div><img src="https://assets-global.website-files.com/6145f7146a1337faae24d53f/6492d0bba817191a67fb6364_pazcare-dashboard.svg" className='mt-9'></img></div>
                        </div>
                    </div>

                    <div className='slide-wrapper rounded-3xl'>
                        <div className='bg-yellow-50 flex flex-col rounded-3xl border-2  ' style={{ width: '400px', margin: '0 auto' }}>
                            <div className='mx-5 text-3xl flex justify-center text-center ' style={{ margin: "30px" }}>Compassionate ,efficent claims assistance</div>
                            <div className='flex justify-center mx-10 text-center'>stress free claims support,handled with care and empathy</div>
                            <div><img src="https://assets-global.website-files.com/6145f7146a1337faae24d53f/64917bfbde25cb7209604896_pazcare%20assistance.png" className='mt-12'></img> </div>
                        </div>
                    </div>

                </Slider>
                <div className="flex justify-center space-x-6  text-slate-950 m-8">
                    <button className="text-4xl rounded-full bg-slate-200 px-5 py-1" onClick={() => sliderRef.current.slickPrev()}>
                        &#8249;
                    </button>
                    <button className="text-4xl rounded-full bg-slate-200 px-5 py-1" onClick={() => sliderRef.current.slickNext()}>
                        &#8250;
                    </button>
                </div>
            </div>
        </main>
    )
}


export default PazcareCorausal