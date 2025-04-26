import React from 'react';
import { motion } from 'framer-motion';
import { useThemeStore } from '../../stores/themeStore';
import config from '../../config/config';

type SkillBarProps = {
  name: string;
  level: number; // 0-100
};

const SkillBar: React.FC<SkillBarProps> = ({ name, level }) => {
  const { isDarkMode } = useThemeStore();

  return (
    <motion.div 
      className="mb-6"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ 
        opacity: 1, 
        x: 0,
        transition: {
          type: "spring",
          stiffness: 200,
          damping: 20
        }
      }}
      viewport={{ once: true }}
    >
      <div className="flex justify-between items-center mb-2">
        <motion.span 
          className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          {name}
        </motion.span>
        <motion.span 
          className={`text-xs font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          {level}%
        </motion.span>
      </div>
      <div 
        className={`h-2 rounded-full overflow-hidden relative ${
          isDarkMode ? 'bg-gray-700' : 'bg-gray-200'
        }`}
      >
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ 
            duration: 1.5,
            ease: [0.87, 0, 0.13, 1],
            delay: 0.3
          }}
          className="absolute inset-y-0 left-0 rounded-full"
          style={{ 
            background: `linear-gradient(90deg, ${config.theme.primaryColor}, ${config.theme.secondaryColor})`
          }}
        />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="absolute inset-0 rounded-full"
          style={{
            background: `linear-gradient(90deg, transparent, rgba(255,255,255,0.1))`,
          }}
        />
      </div>
    </motion.div>
  );
};

export default SkillBar;