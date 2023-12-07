import { motion } from 'framer-motion';

const LineAnimation = () => {

    return (
        <>
            <motion.div
                className="absolute z-50"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 10, ease: 'easeInOut' }}
                style={{ height: '4px', background: 'red' }}
            />
            <div className='border-2 border-white w-full relative '></div>
        </>


    );
};

export default LineAnimation;
