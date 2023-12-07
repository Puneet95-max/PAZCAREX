import React from 'react'

function Certification() {
    return (

        <>

            <div className='relative '>
                <div className='h-40 bg-purple-200 '></div>
                <main className='w-9/12 h-80 py-10 bg-purple-900 mx-auto rounded-3xl flex px-3 absolute z-30 top-0 right-52'>
                    <div className='w-1/2 my-4'>
                        <p className='text-white text-2xl mx-2 my-2'>Trust in our</p>
                        <p className='text-white text-5xl font-bold mx-2 my-2 font-serif'>Compliance
                            & Certification
                        </p> 
                        <p className='text-white text-2xl mx-2 my-2'>
                            when it comes to managing your employee benefits
                        </p>
                    </div>

                    <div className='w-1/2 flex'>
                       <div className='w-1/3 flex flex-col  justify-center' >
                       <img src="https://assets-global.website-files.com/6145f7146a1337faae24d53f/640eb11bd1a77e4e0499d919_AICPA.png" loading="lazy" alt="AICPA" className='w-[100px] h-[100px] mx-auto '/>
                       <p className='text-white  font-bold my-2 mx-3 text-center '>AICPA SOC 2 certified</p>
                       </div>
                       <div className='w-1/3 flex flex-col justify-center'>
                       <img src="https://assets-global.website-files.com/6145f7146a1337faae24d53f/641014152823f6f59f2eaa94_ISO%2027001%20certified.svg" loading="lazy" alt="ISO 27001 certificate" className='w-[100px] h-[100px] mx-auto'/>
                       <p className='text-white font-bold my-2  mx-5 text-center'>ISO 27001 certified</p>
                       </div>
                       <div className='w-1/3  flex flex-col justify-center'>
                       <img src="https://assets-global.website-files.com/6145f7146a1337faae24d53f/6492a0361371d99bc9b1cb1d_ISNP-white.svg" loading="lazy" alt="ISNP " className='w-[100px] h-[100px] mx-auto'/>
                       <p className='text-white  font-bold my-2  mx-5 text-center'>ISO 27001 certified</p>
                       </div>
                    </div>
                </main>
                <div className=' h-44 w-100% '></div>


            </div>




        </>
    )
}

export default Certification