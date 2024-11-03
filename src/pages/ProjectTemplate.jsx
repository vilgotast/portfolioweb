import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import { projectDetails } from '../data/projectDetails';

const ProjectTemplate = () => {
  const { projectId } = useParams();
  const project = projectDetails[projectId];

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header isStartPage={false} />
      <main className="container mx-auto px-4 py-32 max-w-5xl">
        <h1 className="text-4xl font-bold mb-6">{project.title}</h1>
        <p className="text-xl mb-8 text-gray-300">{project.description}</p>
        {project.content}
        {project.demoLink && (
          <div className="mt-8">
            <Button 
              onClick={() => window.open(project.demoLink, '_blank')}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            >
              Try Live Demo
            </Button>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default ProjectTemplate;