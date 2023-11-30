import Link from 'next/link'
import React from 'react'

function Navbar() {
    return (
        <>
            <div className='h-20  shadow-2xl w-full bg-white p-0 m-0 flex '>

                {/* logo */}
                <div className='flex items-center ' style={{marginLeft:'90px'}}>
                    <Link href={"/"}>
                        <img src="https://assets-global.website-files.com/6145f7146a1337faae24d53f/642e93d94ccdf8a321436907_logo%20paz.svg" className='m-6' alt="Pazcare logo" class="header-logo" />
                    </Link>
                </div>


                <div className='flex items-center'>
                    <ul className='flex  '>
                        <li className='mx-6 ml-10 hover:cursor-pointer'>Platform</li>
                        <li className='mx-6 hover:cursor-pointer'>Products</li>
                        <li className='mx-6 hover:cursor-pointer'>Resource</li>
                        <li className='mx-6 hover:text-pink-500 hover:cursor-pointer'>Pazcare Review</li>
                        <li className='mx-6  hover:text-pink-500 hover:cursor-pointer'>Contact us</li>
                    </ul>
                </div>


                <div className='flex items-center ml-48'>
                    <button className='  bg-slate-200  font-bold hover:bg-slate-300 rounded-3xl px-5 py-2 m-2'>Login</button>
                    <button className='bg-purple-800 font-bold hover:bg-purple-900  text-white rounded-3xl px-5 py-2 m-2'>Get Qoute</button>
                </div>



            </div>
        </>
    )
}

export default Navbar