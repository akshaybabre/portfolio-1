import React from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/layout/Layout';
import Button from '../components/ui/Button';
import { useThemeStore } from '../stores/themeStore';

const NotFoundPage: React.FC = () => {
  const { isDarkMode } = useThemeStore();
  
  return (
    <Layout title="Page Not Found">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 
            className={`text-6xl md:text-9xl font-bold mb-8 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
          >
            404
          </h1>
          
          <h2 
            className={`text-2xl md:text-3xl font-bold mb-4 ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}
          >
            Page Not Found
          </h2>
          
          <p 
            className={`text-lg max-w-md mx-auto mb-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}
          >
            The page you're looking for doesn't exist or has been moved.
          </p>
          
          <Button to="/" variant="primary" size="lg">
            Back to Home
          </Button>
        </motion.div>
      </div>
    </Layout>
  );
};

export default NotFoundPage;