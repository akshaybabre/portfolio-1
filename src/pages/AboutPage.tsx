import React from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/layout/Layout';
import SkillBar from '../components/ui/SkillBar';
import { useThemeStore } from '../stores/themeStore';
import config from '../config/config';

const AboutPage: React.FC = () => {
  const { isDarkMode } = useThemeStore();
  
  // Group skills by category
  const skillsByCategory = config.skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof config.skills>);
  
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  return (
    <Layout title={`About | ${config.seo.siteTitle}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className={`text-4xl font-bold mb-8 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            About Me
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="md:col-span-1">
              <motion.div 
                className="rounded-lg overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src={config.personalInfo.avatarUrl} 
                  alt={config.personalInfo.name} 
                  className="w-full h-auto"
                />
              </motion.div>
            </div>
            
            <div className="md:col-span-2">
              <h2 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                {config.personalInfo.name}
              </h2>
              <h3 className={`text-xl mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                {config.personalInfo.jobTitle}
              </h3>
              
              <div 
                className={`prose max-w-none mb-8 ${isDarkMode ? 'prose-invert' : ''}`}
                style={{ whiteSpace: 'pre-line' }} 
              >
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {config.personalInfo.fullBio}
                </p>
              </div>
              
              <div className="flex items-center mb-4">
                <span className={`mr-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Location:
                </span>
                <span className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {config.personalInfo.location}
                </span>
              </div>
              
              <div className="flex items-center">
                <span className={`mr-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Email:
                </span>
                <a 
                  href={`mailto:${config.personalInfo.email}`} 
                  className={`font-medium hover:underline ${
                    isDarkMode ? 'text-blue-400' : 'text-blue-600'
                  }`}
                >
                  {config.personalInfo.email}
                </a>
              </div>
            </div>
          </div>
          
          <h2 className={`text-3xl font-bold mb-8 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Skills
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mb-16">
            {Object.entries(skillsByCategory).map(([category, skills], categoryIndex) => (
              <motion.div 
                key={category}
                custom={categoryIndex}
                initial="hidden"
                animate="visible"
                variants={fadeIn}
              >
                <h3 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                  {category}
                </h3>
                <div>
                  {skills.map((skill) => (
                    <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default AboutPage;