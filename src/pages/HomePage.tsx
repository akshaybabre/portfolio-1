import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import Layout from '../components/layout/Layout';
import Button from '../components/ui/Button';
import ProjectCard from '../components/ui/ProjectCard';
import BlogCard from '../components/ui/BlogCard';
import { useThemeStore } from '../stores/themeStore';
import config from '../config/config';

const HomePage: React.FC = () => {
  const { isDarkMode } = useThemeStore();
  const featuredProjects = config.projects.slice(0, 3);
  const recentPosts = config.blogPosts.slice(0, 2);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20 z-0"
          style={{ 
            background: isDarkMode 
              ? `radial-gradient(circle at 25% 25%, ${config.theme.primaryColor}50, transparent 40%),
                 radial-gradient(circle at 75% 75%, ${config.theme.secondaryColor}50, transparent 40%)`
              : config.theme.backgroundGradient
          }}
        />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                <span className={isDarkMode ? 'text-white' : 'text-gray-900'}>Hi, I'm </span>
                <span 
                  style={{ 
                    background: `linear-gradient(135deg, ${config.theme.primaryColor}, ${config.theme.accentColor})`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent' 
                  }}
                >
                  {config.personalInfo.name.split(' ')[0]}
                </span>
              </h1>
              
              <div className="mb-8">
                <motion.h2 
                  className={`text-xl sm:text-2xl lg:text-3xl mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}
                >
                  {config.personalInfo.jobTitle}
                </motion.h2>
                <motion.p 
                  className={`text-base ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}
                >
                  {config.personalInfo.shortBio}
                </motion.p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Button to="/contact" variant="primary" size="lg">
                  Get in Touch
                </Button>
                <Button 
                  href={config.personalInfo.resumeLink} 
                  variant="outline" 
                  size="lg" 
                  icon={<Download size={18} />}
                >
                  Resume
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="w-56 h-56 sm:w-72 sm:h-72 rounded-full overflow-hidden border-4"
              style={{ borderColor: config.theme.primaryColor }}
            >
              <img 
                src={config.personalInfo.avatarUrl} 
                alt={config.personalInfo.name} 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Featured Projects */}
      <section className={`py-20 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Featured Projects
            </h2>
            <Button to="/projects" variant="ghost" icon={<ArrowRight size={16} />}>
              View All
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Recent Blog Posts */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Latest Blog Posts
            </h2>
            <Button to="/blog" variant="ghost" icon={<ArrowRight size={16} />}>
              View All
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {recentPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;