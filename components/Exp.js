import React from 'react'

function Exp() {
  return (
    <>
      <main className=' h-48 md:h-36 bg-gradient-to-r from-violet-100 to-fuchsia-100 flex md:flex-row flex-col py-3 "  >'>
        <div className='w-full text-center  md:w-2/3 font-bold md:text-3xl text-2xl text-purple-900 font-serif px-2 md:mx-5 md:pl-9 flex items-center '>
          Ready to give yourself and your team the best employee benefits experience?
        </div>
        <div className='w-full  md:w-1/3 flex items-center  justify-center my-4 md:justify-end md:mx-10 md:px-6'>
          <button className='bg-purple-800 text-white text-xl md:text-2xl px-8 py-2 rounded-3xl font-serif'> Sehedule a call</button>
        </div>
      </main>
    </>
  )
}

export default Exp