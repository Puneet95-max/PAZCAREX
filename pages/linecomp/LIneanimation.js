import { motion } from 'framer-motion';

const LineAnimation = () => {
  const containerVariants = {
    initial: { width: 0 },
    animate: { width: '100%' },
    transition: { duration: 0, ease: 'easeInOut' },
  };

  return (
    <motion.div
      className="line-container"
      variants={containerVariants}
      initial="initial"
      animate="animate"
      transition="transition"
   
      style={{ height: '2px', background: 'white' }}
    >
      {/* You can add content or leave it empty based on your design */}
      hi
    </motion.div>
  );
};

export default LineAnimation;
