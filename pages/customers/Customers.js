import React from 'react'
import { motion } from 'framer-motion'

function Customers() {
    return (
        <>
            <main className='h-96 bg-purple-950 flex flex-col'>
                <motion.div
                    initial={{ opacity: 0.5 }}
                    whileInView={{ opacity: 1 }}
                    transition={{
                        ease: 'easeInOut', duration: 2 
                    }}
                    className='p-2 mt-5'
                >
                    <div className=' text-3xl  md:text-5xl text-purple-300 font-serif flex justify-center mx-18  md:mx-28 px-8 text-center mt-10 py-2 font-bold'>1600+ top companies in India trust Pazcare for their employee benefits.</div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0.5 }}
                    whileInView={{ opacity: 1 }}
                    transition={{
                        ease: 'easeInOut', duration: 2
                    }}
                    className='flex justify-evenly px-6'
                >
                    <span><img src="https://assets-global.website-files.com/6145f7146a1337faae24d53f/6491875dd31f132488f26edf_dunzo-2.svg" loading="lazy" id="w-node-_49a16693-1d64-a744-e2ce-602f559b1b28-559b1b1f" alt="Dunzo" class="client-logo" style={{ height: '200px', width: '200px' }} tabindex="0" /></span>
                    <span><img src="https://assets-global.website-files.com/6145f7146a1337faae24d53f/6491875d32d5e1196d866046_Open-2.svg" loading="lazy" id="w-node-_49a16693-1d64-a744-e2ce-602f559b1b24-559b1b1f" alt="Open" class="client-logo" style={{ height: '200px', width: '200px' }} tabindex="-1" /></span>
                    <span><img src="https://assets-global.website-files.com/6145f7146a1337faae24d53f/6491875dd366a419f0de91bf_mamaearth-2.svg" loading="lazy" id="w-node-_49a16693-1d64-a744-e2ce-602f559b1b25-559b1b1f" alt="Mamaearth" class="client-logo" style={{ height: '200px', width: '200px' }} tabindex="0" /></span>
                    <span><img src="https://assets-global.website-files.com/6145f7146a1337faae24d53f/64f57a3746a5c3a35a1a935b_Treebo%20(2).svg" loading="lazy" id="w-node-_49a16693-1d64-a744-e2ce-602f559b1b26-559b1b1f" alt="Treebo Logo" class="client-logo" style={{ height: '200px', width: '200px' }} tabindex="-1" /></span>
                    <span><img src="https://assets-global.website-files.com/6145f7146a1337faae24d53f/6491875d70e6f03c6d5579cc_mindtickle-2.svg" loading="lazy" id="w-node-_49a16693-1d64-a744-e2ce-602f559b1b27-559b1b1f" alt="Mindtickle" class="client-logo" style={{ height: '200px', width: '200px' }} tabindex="-1" /></span>
                    <span><img src="https://assets-global.website-files.com/6145f7146a1337faae24d53f/64f57a3646a5c3a35a1a91eb_mailmodo%20(3).svg" loading="lazy" id="w-node-_49a16693-1d64-a744-e2ce-602f559b1b29-559b1b1f" alt="Mailmodo Logo" class="client-logo" style={{ height: '200px', width: '200px' }} tabindex="-1" /></span>
                </motion.div>
            </main>
        </>
    )
}

export default Customers