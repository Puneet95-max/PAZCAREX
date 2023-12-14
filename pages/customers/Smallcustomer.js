import React from 'react'
import './Smallcustomers.module.css'
import { motion } from 'framer-motion'

function Smallcustomer() {
    return (
        <>
            <motion.div
                className="overflow-hidden whitespace-nowrap w-full"
                animate={{ x: '-100%' }}
                transition={{ repeat: Infinity, duration: 10, ease: 'linear' }}
            >

                <div className='flex justify-evenly px-6'>
                    <span><img src="https://assets-global.website-files.com/6145f7146a1337faae24d53f/6491875dd31f132488f26edf_dunzo-2.svg" loading="lazy" id="w-node-_49a16693-1d64-a744-e2ce-602f559b1b28-559b1b1f" alt="Dunzo" class="client-logo" style={{ height: '500px', width: '500px' }} tabindex="0" /></span>
                    <span><img src="https://assets-global.website-files.com/6145f7146a1337faae24d53f/6491875d32d5e1196d866046_Open-2.svg" loading="lazy" id="w-node-_49a16693-1d64-a744-e2ce-602f559b1b24-559b1b1f" alt="Open" class="client-logo" style={{ height: '200px', width: '200px' }} tabindex="-1" /></span>
                    <span><img src="https://assets-global.website-files.com/6145f7146a1337faae24d53f/6491875dd366a419f0de91bf_mamaearth-2.svg" loading="lazy" id="w-node-_49a16693-1d64-a744-e2ce-602f559b1b25-559b1b1f" alt="Mamaearth" class="client-logo" style={{ height: '200px', width: '200px' }} tabindex="0" /></span>
                    <span><img src="https://assets-global.website-files.com/6145f7146a1337faae24d53f/64f57a3746a5c3a35a1a935b_Treebo%20(2).svg" loading="lazy" id="w-node-_49a16693-1d64-a744-e2ce-602f559b1b26-559b1b1f" alt="Treebo Logo" class="client-logo" style={{ height: '200px', width: '200px' }} tabindex="-1" /></span>
                    <span><img src="https://assets-global.website-files.com/6145f7146a1337faae24d53f/6491875d70e6f03c6d5579cc_mindtickle-2.svg" loading="lazy" id="w-node-_49a16693-1d64-a744-e2ce-602f559b1b27-559b1b1f" alt="Mindtickle" class="client-logo" style={{ height: '200px', width: '200px' }} tabindex="-1" /></span>
                    <span><img src="https://assets-global.website-files.com/6145f7146a1337faae24d53f/64f57a3646a5c3a35a1a91eb_mailmodo%20(3).svg" loading="lazy" id="w-node-_49a16693-1d64-a744-e2ce-602f559b1b29-559b1b1f" alt="Mailmodo Logo" class="client-logo" style={{ height: '200px', width: '200px' }} tabindex="-1" /></span>
                </div>


            </motion.div>


        </>
    )
}

export default Smallcustomer
