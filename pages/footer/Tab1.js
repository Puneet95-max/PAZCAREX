import React from 'react'
import Link from 'next/link'

const Tab1 = () => {
  return (
    <div className='py-6'>
    <div className='mb-4 flex items-center justify-between  bg-white text-black p-2 px-6 rounded-lg text-lg font-semibold  hover:underline'>
         <Link href='/' target='_blank' className=' text-base font-semibold'  
           
          >State of employee insurance 2.0 in India </Link>
          <div className='text-2xl ' ><img  src="https://assets-global.website-files.com/6145f7146a1337faae24d53f/6492c223cd3d734145e70b2e_arrow-icon-2.svg" alt="arrow icon"/></div>
          
          
          
    </div>
    <div className='mb-4 flex items-center justify-between  bg-white text-black p-2 px-6 rounded-lg text-lg font-semibold  hover:underline'>
         <Link href='/' target='_blank' className=' text-base font-semibold'  
           
          >State of employee benifits in India </Link>
          <div className='text-2xl ' ><img  src="https://assets-global.website-files.com/6145f7146a1337faae24d53f/6492c223cd3d734145e70b2e_arrow-icon-2.svg" alt="arrow icon"/></div>
          
          
          
    </div>
    <div className='mb-4 flex items-center justify-between  bg-white text-black p-2 px-6 rounded-lg text-lg font-semibold  hover:underline'>
         <Link href='/' target='_blank' className=' text-base font-semibold'  
           
          >Employee health & wellness report </Link>
          <div className='text-2xl ' ><img  src="https://assets-global.website-files.com/6145f7146a1337faae24d53f/6492c223cd3d734145e70b2e_arrow-icon-2.svg" alt="arrow icon"/></div>
          
          
          
    </div>
    </div>
  )
}

export default Tab1