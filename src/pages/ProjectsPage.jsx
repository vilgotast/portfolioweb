import React from 'react';
import { useNavigate } from 'react-router-dom';
import Masonry from 'react-masonry-css';
import { motion } from "framer-motion";
import Header from '../components/Header';
import Footer from '../components/Footer';
import { projectData } from '../data/projectsData';

const stampStyles = [
  "ff-stamp-farflung",
  "ff-stamp-rare",
  "ff-stamp-uncommon",
  "ff-stamp-elusive",
  "ff-stamp-common",
  "ff-stamp-rare",
];

const ProjectsPage = () => {
  const navigate = useNavigate();

  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1
  };

  return (
    <div className="min-h-screen bg-[#f4e9cd] text-[#2b2118]">
      <Header isStartPage={false} />
      <main className="container mx-auto px-5 pt-28 pb-12 max-w-5xl">
        <h1 className="ff-title text-[52px] sm:text-[62px] mb-8">My Projects</h1>

        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="flex w-auto -ml-5"
          columnClassName="pl-5 bg-clip-padding"
        >
          {projectData.map((project, index) => {
            const stampCls = stampStyles[index % stampStyles.length];
            return (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                onClick={() => navigate(project.link)}
                className="mb-5 group cursor-pointer ff-box p-4 transition-transform duration-150 hover:-translate-y-0.5"
              >
                <div
                  className="w-full overflow-hidden bg-[#f4e9cd] mb-3"
                  style={{ boxShadow: '0 0 0 1px #2b2118' }}
                >
                  {project.image.endsWith('.mp4') ? (
                    <video
                      className="w-full h-auto object-cover"
                      autoPlay
                      loop
                      muted
                      playsInline
                    >
                      <source src={project.image} type="video/mp4" />
                    </video>
                  ) : (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-auto object-cover"
                    />
                  )}
                </div>

                <div className="flex items-baseline justify-between gap-2 mb-1.5">
                  <h2 className="text-[22px] font-semibold leading-snug text-[#2b2118] group-hover:text-[#b8322b] underline decoration-[#b8322b]/50 group-hover:decoration-[#b8322b] decoration-1 underline-offset-4">
                    {project.title}
                  </h2>
                  {project.date && (
                    <time className="font-pixel uppercase tracking-[0.12em] text-[15px] text-[#6a583f] shrink-0">
                      {project.date}
                    </time>
                  )}
                </div>

                <p className="text-[16.5px] leading-[1.48] text-[#2b2118] mb-3.5">
                  {project.description}
                </p>

                <div className="pt-2.5 border-t border-dashed border-[#b9a67e] flex flex-wrap items-center justify-between gap-2">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className={tagIndex === 0 ? `ff-stamp ${stampCls}` : "px-2 py-0.5 bg-[#f4e9cd] font-pixel uppercase tracking-[0.1em] text-[14px] text-[#6a583f]"}
                        style={tagIndex === 0 ? undefined : { boxShadow: 'inset 0 0 0 1px #b9a67e' }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="font-pixel uppercase tracking-[0.14em] text-[15px] text-[#b8322b] group-hover:underline">
                    Learn More ›
                  </span>
                </div>
              </motion.article>
            );
          })}
        </Masonry>

        <section className="mt-14">
          <h2 className="ff-section-heading mb-6">Currently Working On</h2>

          <div className="ml-2 border-l border-[#b9a67e] space-y-5 pl-6 py-1">
            {[
              "Text-to-SQL project: Natural language to SQL query",
              "Volleyball metric improvement for players and coaches",
              "Deep Birdsound Generator using diffusion in an audio context",
            ].map((project, index) => (
              <div key={index} className="relative">
                <span
                  aria-hidden="true"
                  className="absolute -left-[28px] top-2.5 w-[7px] h-[7px] bg-[#2b2118]"
                  style={{ boxShadow: '0 0 0 2px #f4e9cd' }}
                />
                <p className="text-[18px] text-[#2b2118]">
                  {project}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectsPage;