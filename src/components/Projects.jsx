import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProjectCard from './ProjectCard';
import { projectData } from '../data/projectsData';

const Projects = ({ showPreview = false }) => {
  const navigate = useNavigate();
  const displayedProjects = showPreview ? projectData.slice(0, 4) : projectData;

  return (
    <section className="py-12">
      <div className="container mx-auto px-5 max-w-5xl">
        <h2 className="ff-section-heading mb-6">AI Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
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
          <div className="flex flex-wrap items-center gap-6 mt-10 pt-7 border-t-[3px] border-double border-[#2b2118]">
            <button
              onClick={() => navigate('/projects')}
              className="ff-go"
            >
              Show All Projects ({projectData.length})
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="font-pixel uppercase tracking-[0.14em] text-[18px] text-[#6a583f] hover:text-[#2b2118] underline underline-offset-4"
            >
              Or get in touch ›
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;