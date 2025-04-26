import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/layout/Layout';
import BlogCard from '../components/ui/BlogCard';
import { useThemeStore } from '../stores/themeStore';
import config from '../config/config';
import { Search } from 'lucide-react';

const BlogPage: React.FC = () => {
  const { isDarkMode } = useThemeStore();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [filteredPosts, setFilteredPosts] = useState(config.blogPosts);
  
  // Extract all unique tags
  const allTags = Array.from(
    new Set(config.blogPosts.flatMap(post => post.tags))
  ).sort();
  
  useEffect(() => {
    const filtered = config.blogPosts.filter(post => {
      const matchesSearch = 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.content.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesTag = selectedTag ? post.tags.includes(selectedTag) : true;
      
      return matchesSearch && matchesTag;
    });
    
    setFilteredPosts(filtered);
  }, [searchTerm, selectedTag]);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <Layout title={`Blog | ${config.seo.siteTitle}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-screen-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <h1 className={`text-4xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Blog
            </h1>
            <p className={`max-w-2xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Thoughts, stories, and ideas about development, design, and technology.
            </p>
          </motion.div>
          
          <div className="mb-12">
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="relative flex-grow">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search size={18} className={isDarkMode ? 'text-gray-500' : 'text-gray-400'} />
                </div>
                <input
                  type="text"
                  placeholder="Search posts..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className={`
                    w-full py-2 pl-10 pr-4 rounded-lg focus:outline-none focus:ring-2
                    ${
                      isDarkMode 
                        ? 'bg-gray-800 text-white placeholder-gray-500 focus:ring-blue-500 border border-gray-700'
                        : 'bg-white text-gray-900 placeholder-gray-400 focus:ring-blue-600 border border-gray-200'
                    }
                  `}
                />
              </div>
            </div>
            
            {config.microblog.enableTags && allTags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedTag(null)}
                  className={`
                    text-sm px-3 py-1 rounded-full transition-colors
                    ${
                      selectedTag === null
                        ? isDarkMode
                          ? 'bg-blue-600 text-white'
                          : 'bg-blue-500 text-white'
                        : isDarkMode
                        ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }
                  `}
                >
                  All
                </button>
                
                {allTags.map(tag => (
                  <button
                    key={tag}
                    onClick={() => setSelectedTag(tag === selectedTag ? null : tag)}
                    className={`
                      text-sm px-3 py-1 rounded-full transition-colors
                      ${
                        selectedTag === tag
                          ? isDarkMode
                            ? 'bg-blue-600 text-white'
                            : 'bg-blue-500 text-white'
                          : isDarkMode
                          ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }
                    `}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            )}
          </div>
          
          {filteredPosts.length > 0 ? (
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {filteredPosts.map(post => (
                <motion.div key={post.id} variants={itemVariants}>
                  <BlogCard post={post} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <div 
              className={`text-center py-16 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}
            >
              <p className="text-xl">No posts found matching your criteria.</p>
              <p className="mt-2">Try adjusting your search or filters.</p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default BlogPage;