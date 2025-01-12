import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import ProjectCard from './ProjectCard';
import { projectData } from '../data/projectsData';

const Projects = ({ showPreview = false }) => {
  const navigate = useNavigate();
  const displayedProjects = showPreview ? projectData.slice(0, 4) : projectData;

  return (
    <section className="py-20 bg-gray-900 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-blue-200">AI Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative">
          {displayedProjects.map((project, index) => (
            <ProjectCard 
              key={index} 
              project={project} 
              index={index} 
              showPreview={showPreview}
            />
          ))}
        </div>
        {showPreview && (
          <div className="mt-12 text-center relative z-10">
            <Button 
              onClick={() => navigate('/projects')}
              className="bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-300"
            >
              Show All Projects
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;