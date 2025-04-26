import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import { format } from 'date-fns';
import Card from './Card';
import { useThemeStore } from '../../stores/themeStore';
import { BlogPost } from '../../types';
import config from '../../config/config';

type BlogCardProps = {
  post: BlogPost;
};

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  const { isDarkMode } = useThemeStore();
  
  return (
    <Card className="h-full flex flex-col">
      {post.imageUrl && (
        <div 
          className="h-48 bg-cover bg-center" 
          style={{ backgroundImage: `url(${post.imageUrl})` }}
        />
      )}
      <div className="p-6 flex flex-col flex-grow">
        <Link to={`/blog/${post.id}`}>
          <h3 
            className={`text-xl font-bold mb-2 hover:underline ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}
          >
            {post.title}
          </h3>
        </Link>
        
        <div className="flex items-center mb-3">
          <Calendar size={14} className={isDarkMode ? 'text-gray-400' : 'text-gray-500'} />
          <span className={`text-xs ml-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            {format(new Date(post.date), config.microblog.dateFormat)}
          </span>
        </div>
        
        <p className={`text-sm mb-4 flex-grow ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          {post.excerpt}
        </p>
        
        {config.microblog.enableTags && post.tags.length > 0 && (
          <div className="mb-4 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span 
                key={tag} 
                className={`
                  text-xs px-2 py-1 rounded-full 
                  ${
                    isDarkMode 
                      ? 'bg-gray-700 text-gray-300' 
                      : 'bg-gray-100 text-gray-700'
                  }
                `}
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
        
        <Link 
          to={`/blog/${post.id}`}
          className={`
            text-sm font-medium mt-2 
            ${
              isDarkMode 
                ? 'text-blue-400 hover:text-blue-300' 
                : 'text-blue-600 hover:text-blue-800'
            }
          `}
        >
          Read more →
        </Link>
      </div>
    </Card>
  );
};

export default BlogCard;