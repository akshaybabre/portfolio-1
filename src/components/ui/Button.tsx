import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useThemeStore } from '../../stores/themeStore';
import config from '../../config/config';

type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  to?: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
};

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  onClick,
  className = '',
  icon,
  disabled = false,
  type = 'button',
}) => {
  const { isDarkMode } = useThemeStore();

  const baseClasses = `
    inline-flex items-center justify-center 
    rounded-lg font-medium relative
    transition-all duration-300 ease-out
    transform-gpu perspective-1000
    ${disabled ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer'} 
    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-opacity-50
    before:absolute before:inset-0 before:rounded-lg before:transition-all before:duration-300
    hover:before:opacity-100 before:opacity-0
  `;

  const sizeClasses = {
    sm: 'text-xs px-3 py-1.5',
    md: 'text-sm px-4 py-2',
    lg: 'text-base px-6 py-3',
  };

  const getVariantClasses = () => {
    switch (variant) {
      case 'primary':
        return `
          text-white relative overflow-hidden
          ${isDarkMode ? 'focus:ring-offset-gray-900' : 'focus:ring-offset-white'}
          focus:ring-${config.theme.primaryColor}
          before:bg-black/10
        `;
      case 'secondary':
        return `
          text-white relative overflow-hidden
          ${isDarkMode ? 'focus:ring-offset-gray-900' : 'focus:ring-offset-white'}
          focus:ring-${config.theme.secondaryColor}
          before:bg-black/10
        `;
      case 'outline':
        return `
          bg-transparent border-2 relative overflow-hidden
          ${
            isDarkMode 
              ? 'border-gray-600 text-gray-300 hover:border-gray-500' 
              : 'border-gray-300 text-gray-700 hover:border-gray-400'
          }
          before:bg-current before:opacity-5
          focus:ring-gray-500
        `;
      case 'ghost':
        return `
          bg-transparent relative overflow-hidden
          ${
            isDarkMode 
              ? 'text-gray-300 before:bg-gray-700' 
              : 'text-gray-700 before:bg-gray-100'
          }
          focus:ring-gray-500
        `;
      default:
        return '';
    }
  };

  const buttonClasses = `
    ${baseClasses}
    ${sizeClasses[size]}
    ${getVariantClasses()}
    ${className}
  `;

  const primaryGradient = {
    background: 
      variant === 'primary' 
        ? `linear-gradient(135deg, ${config.theme.primaryColor}, ${config.theme.secondaryColor})`
        : variant === 'secondary'
        ? `linear-gradient(135deg, ${config.theme.secondaryColor}, ${config.theme.accentColor})`
        : undefined,
  };

  const content = (
    <>
      {icon && <span className="mr-2 relative z-10">{icon}</span>}
      <span className="relative z-10">{children}</span>
    </>
  );

  const motionProps = {
    whileHover: disabled ? {} : { 
      scale: 1.02,
      y: -2,
      transition: { type: "spring", stiffness: 400 }
    },
    whileTap: disabled ? {} : { 
      scale: 0.98,
      transition: { type: "spring", stiffness: 400 }
    },
    initial: { opacity: 0, y: 10 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20
      }
    }
  };

  if (to) {
    return (
      <motion.div {...motionProps}>
        <Link
          to={to}
          className={buttonClasses}
          style={primaryGradient}
        >
          {content}
        </Link>
      </motion.div>
    );
  }

  if (href) {
    return (
      <motion.div {...motionProps}>
        <a
          href={href}
          className={buttonClasses}
          style={primaryGradient}
          target="_blank"
          rel="noopener noreferrer"
        >
          {content}
        </a>
      </motion.div>
    );
  }

  return (
    <motion.button
      {...motionProps}
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      style={primaryGradient}
    >
      {content}
    </motion.button>
  );
};

export default Button;