import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter, Instagram, Mail } from 'lucide-react';
import { useThemeStore } from '../../stores/themeStore';
import config from '../../config/config';

const Footer: React.FC = () => {
  const { isDarkMode } = useThemeStore();
  const currentYear = new Date().getFullYear();

  const getSocialIcon = (iconName: string) => {
    const props = { size: 18 };
    
    switch (iconName) {
      case 'Github':
        return <Github {...props} />;
      case 'Linkedin':
        return <Linkedin {...props} />;
      case 'Twitter':
        return <Twitter {...props} />;
      case 'Instagram':
        return <Instagram {...props} />;
      default:
        return <Mail {...props} />;
    }
  };

  return (
    <footer className={`mt-auto py-12 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link 
              to="/" 
              className="text-xl font-bold inline-block mb-4"
              style={{ 
                background: `linear-gradient(135deg, ${config.theme.primaryColor}, ${config.theme.accentColor})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent' 
              }}
            >
              {config.personalInfo.name.split(' ')[0]}
              <span className="opacity-80">.dev</span>
            </Link>
            <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              {config.personalInfo.shortBio}
            </p>
          </div>
          
          <div>
            <h3 className={`text-sm font-semibold uppercase tracking-wider mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-900'}`}>
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className={`text-sm ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className={`text-sm ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/projects" className={`text-sm ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/blog" className={`text-sm ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className={`text-sm ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className={`text-sm font-semibold uppercase tracking-wider mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-900'}`}>
              Connect
            </h3>
            <div className="flex space-x-4">
              {config.personalInfo.socialLinks.map((link) => (
                <a 
                  key={link.platform} 
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`p-2 rounded-full transition-colors duration-200 ${
                    isDarkMode 
                      ? 'bg-gray-800 text-gray-300 hover:text-white hover:bg-gray-700' 
                      : 'bg-gray-100 text-gray-700 hover:text-gray-900 hover:bg-gray-200'
                  }`}
                  aria-label={link.platform}
                >
                  {getSocialIcon(link.icon)}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className={`text-sm text-center ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            © {currentYear} {config.personalInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;