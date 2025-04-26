import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Linkedin, Github, Twitter, Instagram } from 'lucide-react';
import Layout from '../components/layout/Layout';
import Button from '../components/ui/Button';
import { useThemeStore } from '../stores/themeStore';
import config from '../config/config';

const ContactPage: React.FC = () => {
  const { isDarkMode } = useThemeStore();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormState({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    }, 1500);
  };
  
  const getSocialIcon = (iconName: string) => {
    const props = { size: 24 };
    
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
    <Layout title={`Contact | ${config.seo.siteTitle}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className={`text-4xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Get in Touch
            </h1>
            <p className={`max-w-2xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Have a question or want to work together? Feel free to reach out!
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Contact Information
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div 
                    className={`p-2 rounded-full mr-4 ${
                      isDarkMode ? 'bg-gray-800' : 'bg-gray-100'
                    }`}
                  >
                    <Mail size={20} className={isDarkMode ? 'text-blue-400' : 'text-blue-600'} />
                  </div>
                  <div>
                    <h3 className={`font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-900'}`}>
                      Email
                    </h3>
                    <a 
                      href={`mailto:${config.personalInfo.email}`} 
                      className={`hover:underline ${
                        isDarkMode ? 'text-blue-400' : 'text-blue-600'
                      }`}
                    >
                      {config.personalInfo.email}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div 
                    className={`p-2 rounded-full mr-4 ${
                      isDarkMode ? 'bg-gray-800' : 'bg-gray-100'
                    }`}
                  >
                    <MapPin size={20} className={isDarkMode ? 'text-blue-400' : 'text-blue-600'} />
                  </div>
                  <div>
                    <h3 className={`font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-900'}`}>
                      Location
                    </h3>
                    <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
                      {config.personalInfo.location}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h3 className={`text-lg font-medium mb-4 ${isDarkMode ? 'text-gray-200' : 'text-gray-900'}`}>
                  Connect with me
                </h3>
                <div className="flex space-x-4">
                  {config.personalInfo.socialLinks.map((link) => (
                    <a 
                      key={link.platform} 
                      href={link.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`p-3 rounded-full transition-colors duration-200 ${
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
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Send Me a Message
              </h2>
              
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label 
                    htmlFor="name" 
                    className={`block text-sm font-medium mb-2 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className={`
                      w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2
                      ${
                        isDarkMode 
                          ? 'bg-gray-800 text-white border border-gray-700 focus:ring-blue-500'
                          : 'bg-white text-gray-900 border border-gray-300 focus:ring-blue-600'
                      }
                    `}
                  />
                </div>
                
                <div className="mb-4">
                  <label 
                    htmlFor="email" 
                    className={`block text-sm font-medium mb-2 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className={`
                      w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2
                      ${
                        isDarkMode 
                          ? 'bg-gray-800 text-white border border-gray-700 focus:ring-blue-500'
                          : 'bg-white text-gray-900 border border-gray-300 focus:ring-blue-600'
                      }
                    `}
                  />
                </div>
                
                <div className="mb-6">
                  <label 
                    htmlFor="message" 
                    className={`block text-sm font-medium mb-2 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formState.message}
                    onChange={handleChange}
                    required
                    className={`
                      w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2
                      ${
                        isDarkMode 
                          ? 'bg-gray-800 text-white border border-gray-700 focus:ring-blue-500'
                          : 'bg-white text-gray-900 border border-gray-300 focus:ring-blue-600'
                      }
                    `}
                  />
                </div>
                
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full"
                  icon={isSubmitting ? undefined : <Send size={18} />}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
                
                {isSuccess && (
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 text-center text-green-500 font-medium"
                  >
                    Thank you! Your message has been sent.
                  </motion.p>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;