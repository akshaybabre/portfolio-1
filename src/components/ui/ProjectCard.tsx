import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import Card from './Card';
import Button from './Button';
import { useThemeStore } from '../../stores/themeStore';
import { Project } from '../../types';

type ProjectCardProps = {
  project: Project;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { isDarkMode } = useThemeStore();
  
  return (
    <Card className="h-full flex flex-col">
      <div 
        className="h-48 bg-cover bg-center" 
        style={{ backgroundImage: `url(${project.imageUrl})` }}
      />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          {project.title}
        </h3>
        <p className={`text-sm mb-4 flex-grow ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          {project.description}
        </p>
        
        <div className="mb-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span 
              key={tech} 
              className={`
                text-xs px-2 py-1 rounded-full 
                ${
                  isDarkMode 
                    ? 'bg-gray-700 text-gray-300' 
                    : 'bg-gray-100 text-gray-700'
                }
              `}
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-3 mt-auto">
          {project.liveUrl && (
            <Button 
              href={project.liveUrl} 
              variant="primary" 
              size="sm" 
              icon={<ExternalLink size={14} />}
              className="flex-1"
            >
              Live Demo
            </Button>
          )}
          
          {project.repoUrl && (
            <Button 
              href={project.repoUrl} 
              variant="outline" 
              size="sm" 
              icon={<Github size={14} />}
              className="flex-1"
            >
              Repository
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;