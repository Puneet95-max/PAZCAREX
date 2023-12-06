import { motion } from 'framer-motion';

const LineAnimation = () => {

    return (
        <>
            <motion.div
                className=""
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 10, ease: 'easeInOut' }}
                style={{ height: '4px', background: 'red' }}
            />
            <div className='border-2 border-white w-full '></div>
        </>


    );
};

export default LineAnimation;
