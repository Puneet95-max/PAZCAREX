import React from 'react'

function New() {
    return (
        <>
            <main className=' md:h-80 flex flex-col my-4 '>
                <div className='flex justify-center text-4xl md:text-5xl font-serif font-bold my-10 py-3'>Pazcare in the news</div>
                <div className='flex md:flex-row flex-col justify-center items-center '>
                    <img src="https://assets-global.website-files.com/6145f7146a1337faae24d53f/6492a54c1371d99bc9b76b59_yourstory.png" loading="lazy" className='w-[150px] h-[80px] my-2  md:w-[200px] md:h-[100px] rounded-lg shadow-lg mx-3 hover:shadow-2xl cursor-pointer' />
                    <img src="https://assets-global.website-files.com/6145f7146a1337faae24d53f/6492a54bc475e74ad6eface5_Inc42.png" loading="lazy" className='w-[150px] h-[80px] my-2   md:w-[200px] md:h-[100px] rounded-lg shadow-lg mx-3 hover:shadow-2xl cursor-pointer' />
                    <img src="https://assets-global.website-files.com/6145f7146a1337faae24d53f/6492a54be0346cedcf0abcbf_Entrepreneur.png" loading="lazy" className=' w-[150px] h-[80px] my-2  md:w-[200px] md:h-[100px] rounded-lg shadow-lg mx-3 hover:shadow-2xl cursor-pointer' />
                    <img src="https://assets-global.website-files.com/6145f7146a1337faae24d53f/6492a54d16eed3fa15d63c58_TechCrunch.png" loading="lazy" className=' w-[150px] h-[80px] my-2   md:w-[200px] md:h-[100px] rounded-lg shadow-lg mx-3 hover:shadow-2xl cursor-pointer' />
                </div>
            </main>
        </>
    )
}

export default New