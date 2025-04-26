import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useThemeStore } from '../../stores/themeStore';
import config from '../../config/config';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDarkMode, toggleTheme } = useThemeStore();
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const headerVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20
      }
    }
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
        staggerChildren: 0.07,
        delayChildren: 0.2
      }
    }
  };

  const menuItemVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 }
  };

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={headerVariants}
      className={`
        fixed top-0 left-0 right-0 z-50 
        transition-all duration-300 ease-out
        ${
          isScrolled
            ? `backdrop-blur-xl ${
                isDarkMode
                  ? 'bg-gray-900/80 shadow-lg shadow-gray-900/10'
                  : 'bg-white/80 shadow-lg shadow-gray-200/20'
              }`
            : isDarkMode
            ? 'bg-transparent'
            : 'bg-transparent'
        }
      `}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link 
            to="/" 
            className="text-2xl font-bold relative group"
          >
            <span
              style={{ 
                background: `linear-gradient(135deg, ${config.theme.primaryColor}, ${config.theme.accentColor})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
              className="relative z-10"
            >
              {config.personalInfo.name.split(' ')[0]}
              <span className="opacity-80">.dev</span>
            </span>
            <motion.span
              className="absolute inset-0 rounded-lg -z-10"
              initial={{ opacity: 0, scale: 0.8 }}
              whileHover={{ opacity: 0.1, scale: 1.2 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
              style={{ 
                background: `linear-gradient(135deg, ${config.theme.primaryColor}, ${config.theme.accentColor})`,
              }}
            />
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`
                  text-sm font-medium transition-colors duration-200 relative 
                  ${
                    isDarkMode 
                      ? 'text-gray-200 hover:text-white' 
                      : 'text-gray-700 hover:text-gray-900'
                  }
                `}
              >
                {link.name}
                {location.pathname === link.path && (
                  <motion.span
                    layoutId="underline"
                    className="absolute left-0 top-full block h-[2px] w-full"
                    style={{ background: `${config.theme.primaryColor}` }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <motion.button
              onClick={toggleTheme}
              className={`
                p-2 rounded-full transition-colors duration-300
                ${
                  isDarkMode 
                    ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }
              `}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle dark mode"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isDarkMode ? 'dark' : 'light'}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 20, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
                </motion.div>
              </AnimatePresence>
            </motion.button>

            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isMenuOpen ? 'close' : 'menu'}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isMenuOpen ? (
                    <X className={isDarkMode ? 'text-white' : 'text-gray-900'} />
                  ) : (
                    <Menu className={isDarkMode ? 'text-white' : 'text-gray-900'} />
                  )}
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className={`md:hidden ${
              isDarkMode ? 'bg-gray-900' : 'bg-white'
            } shadow-xl`}
          >
            <div className="px-4 pt-2 pb-6 space-y-3">
              {navLinks.map((link) => (
                <motion.div
                  key={link.path}
                  variants={menuItemVariants}
                >
                  <Link
                    to={link.path}
                    className={`
                      block px-3 py-3 text-base font-medium rounded-lg
                      transition-colors duration-200
                      ${
                        location.pathname === link.path
                          ? isDarkMode
                            ? 'bg-gray-800 text-white'
                            : 'bg-gray-100 text-gray-900'
                          : isDarkMode
                          ? 'text-gray-300 hover:bg-gray-800 hover:text-white'
                          : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                      }
                    `}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;