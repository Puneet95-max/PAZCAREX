import React from 'react';
import { motion } from 'framer-motion';

const CustomArrow = () => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="13"
      height="13"
      fill="currentColor"
      viewBox="0 0 16 16"
      whileHover={{ rotate: 180 }}
      transition={{ duration: 0.2 }}
    >
      <motion.path
        d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"
        initial={{ rotate: 0 }}
      />
    </motion.svg>
  );
};

export default CustomArrow;
