import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import { format } from 'date-fns';
import { Calendar, ArrowLeft } from 'lucide-react';
import Layout from '../components/layout/Layout';
import Button from '../components/ui/Button';
import { useThemeStore } from '../stores/themeStore';
import config from '../config/config';

const BlogPostPage: React.FC = () => {
  const { postId } = useParams<{ postId: string }>();
  const navigate = useNavigate();
  const { isDarkMode } = useThemeStore();
  
  const post = config.blogPosts.find(p => p.id === postId);
  
  if (!post) {
    return (
      <Layout title="Post Not Found">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <h1 className={`text-4xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Post Not Found
          </h1>
          <p className={`mb-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            The blog post you're looking for doesn't exist or has been removed.
          </p>
          <Button to="/blog" variant="primary">
            Back to Blog
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout
      title={`${post.title} | ${config.seo.siteTitle}`}
      description={post.excerpt}
      keywords={[...config.seo.siteKeywords, ...post.tags]}
    >
      <article className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl mx-auto">
          <Button 
            onClick={() => navigate(-1)} 
            variant="ghost" 
            size="sm" 
            className="mb-8" 
            icon={<ArrowLeft size={16} />}
          >
            Back
          </Button>
          
          {post.imageUrl && (
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="w-full h-64 sm:h-96 rounded-xl overflow-hidden mb-8"
            >
              <img 
                src={post.imageUrl} 
                alt={post.title} 
                className="w-full h-full object-cover"
              />
            </motion.div>
          )}
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className={`text-3xl sm:text-4xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              {post.title}
            </h1>
            
            <div className="flex items-center mb-8">
              <Calendar size={16} className={isDarkMode ? 'text-gray-400' : 'text-gray-500'} />
              <span className={`text-sm ml-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                {format(new Date(post.date), config.microblog.dateFormat)}
              </span>
              
              {config.microblog.enableTags && post.tags.length > 0 && (
                <div className="flex ml-4 flex-wrap">
                  {post.tags.map(tag => (
                    <span 
                      key={tag}
                      className={`
                        text-xs px-2 py-1 rounded-full mr-2 mb-2
                        ${
                          isDarkMode 
                            ? 'bg-gray-800 text-gray-300' 
                            : 'bg-gray-100 text-gray-700'
                        }
                      `}
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
            
            <div 
              className={`
                prose prose-lg max-w-none 
                ${isDarkMode ? 'prose-invert' : ''}
              `}
            >
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </div>
          </motion.div>
        </div>
      </article>
    </Layout>
  );
};

export default BlogPostPage;