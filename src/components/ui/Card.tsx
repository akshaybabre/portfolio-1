import React from 'react';
import { motion } from 'framer-motion';
import { useThemeStore } from '../../stores/themeStore';

type CardProps = {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
};

const Card: React.FC<CardProps> = ({ children, className = '', hover = true }) => {
  const { isDarkMode } = useThemeStore();

  return (
    <motion.div
      whileHover={hover ? { 
        y: -8,
        scale: 1.02,
        transition: { type: "spring", stiffness: 300 }
      } : {}}
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: 1, 
        y: 0,
        transition: {
          type: "spring",
          stiffness: 200,
          damping: 20
        }
      }}
      className={`
        rounded-xl overflow-hidden
        transform-gpu perspective-1000
        ${
          isDarkMode
            ? 'bg-gray-800/80 backdrop-blur-lg border border-gray-700/50 hover:border-blue-500/30'
            : 'bg-white/90 backdrop-blur-lg shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:shadow-blue-100/50'
        }
        transition-all duration-300 ease-out
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
};

export default Card;