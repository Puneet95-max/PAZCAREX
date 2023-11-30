import React from 'react'
import { motion } from 'framer-motion'


function Shadow() {
    return (
        <>
            <svg width="200" height="200" >
                <motion.ellipse
                    animate={{
                        rx: [18, 30]
                    }}
                    transition={{
                        duration: 1.9,
                        repeat: Infinity,
                        ease: "easeInOut",
                        repeatType: "reverse"
                    }}
                    
                    cx='52' cy='0' rx='15' ry='5' className=" fill-black/40 "
                />

            </svg>

        </>
    )
}

export default Shadow