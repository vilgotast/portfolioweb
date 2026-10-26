import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { projectDetails } from '../data/projectDetails';

const ProjectTemplate = () => {
  const { projectId } = useParams();
  const project = projectDetails[projectId];

  if (!project) {
    return (
      <div className="min-h-screen bg-[#f4e9cd] text-[#2b2118] flex items-center justify-center font-pixel text-2xl">
        Project not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f4e9cd] text-[#2b2118]">
      <Header isStartPage={false} />
      <main className="container mx-auto px-5 pt-28 pb-12 max-w-3xl">
        {/* Farflung Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-5 font-pixel uppercase tracking-[0.14em] text-[17px]">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link to="/projects" className="text-[#b8322b] hover:underline">
                Projects
              </Link>
            </li>
            <li className="text-[#6a583f]" aria-hidden="true">›</li>
            <li className="text-[#2b2118]">{project.title}</li>
          </ol>
        </nav>

        <article>
          {project.date && (
            <p className="font-pixel uppercase tracking-[0.14em] text-[17px] text-[#6a583f] mt-2">
              {project.date}
            </p>
          )}
          <h1 className="ff-title text-[48px] sm:text-[60px] mt-1 mb-3">
            {project.title}
          </h1>

          <figure className="ff-prompt my-6">
            <blockquote>
              <p className="font-pixel text-[24px] sm:text-[26px] leading-[1.12] text-[#2b2118]">
                {project.description}
              </p>
            </blockquote>
          </figure>

          <div className="space-y-4 text-[18px] leading-[1.58] text-[#2b2118]">
            {project.content}
          </div>

          <div className="flex flex-wrap items-center gap-6 mt-12 pt-7 border-t-[3px] border-double border-[#2b2118]">
            {project.demoLink && (
              <button
                onClick={() => window.open(project.demoLink, '_blank')}
                className="ff-go"
              >
                Try Live Demo
              </button>
            )}
            <Link
              to="/projects"
              className="font-pixel uppercase tracking-[0.14em] text-[18px] text-[#6a583f] hover:text-[#2b2118] underline underline-offset-4"
            >
              ‹ Back to all projects
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectTemplate;