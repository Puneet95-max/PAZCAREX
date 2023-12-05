import React from 'react'
import LineAnimation from './LIneanimation'

function Linecomp() {
    return (
        <>
        <main className='h-screen bg-purple-950 text-white px-2'>
          <p className='mx-5 font0 bold text-center flex justify-center text-5xl'>Accessing employee benefits is now easy and straightforward with the Pazcare app.</p>

          <div className='flex w-full'>
              <div className='w-1/2'>text
              <LineAnimation></LineAnimation>
              </div>
              <div className='w-1/2'>image</div>
          </div>
        </main>
        </>
    )
}

export default Linecomp