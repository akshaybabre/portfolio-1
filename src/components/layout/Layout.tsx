import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { useThemeStore } from '../../stores/themeStore';
import config from '../../config/config';

type LayoutProps = {
  children: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string[];
};

const Layout: React.FC<LayoutProps> = ({
  children,
  title = config.seo.siteTitle,
  description = config.seo.siteDescription,
  keywords = config.seo.siteKeywords,
}) => {
  const { isDarkMode } = useThemeStore();
  const location = useLocation();

  const pageVariants = {
    initial: {
      opacity: 0,
      y: 20,
      scale: 0.98,
    },
    in: {
      opacity: 1,
      y: 0,
      scale: 1,
    },
    out: {
      opacity: 0,
      y: -20,
      scale: 0.98,
    },
  };

  const pageTransition = {
    type: "spring",
    stiffness: 200,
    damping: 20,
  };

  return (
    <div 
      className={`
        flex flex-col min-h-screen 
        ${isDarkMode ? 'bg-gray-950 text-white' : 'bg-white text-gray-900'}
        transition-colors duration-300
      `}
    >
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords.join(', ')} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
      </Helmet>

      <Header />
      
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={pageTransition}
          className="flex-grow pt-16 sm:pt-20 relative"
        >
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              background: isDarkMode
                ? `radial-gradient(circle at 50% 0%, ${config.theme.primaryColor}15, transparent 50%),
                   radial-gradient(circle at 100% 50%, ${config.theme.secondaryColor}15, transparent 50%)`
                : `radial-gradient(circle at 50% 0%, ${config.theme.primaryColor}08, transparent 50%),
                   radial-gradient(circle at 100% 50%, ${config.theme.secondaryColor}08, transparent 50%)`
            }}
          />
          {children}
        </motion.main>
      </AnimatePresence>
      
      <Footer />
    </div>
  );
};

export default Layout;