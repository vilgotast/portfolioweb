import React from 'react';
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';

const stampStyles = [
  "ff-stamp-farflung",
  "ff-stamp-rare",
  "ff-stamp-uncommon",
  "ff-stamp-elusive",
  "ff-stamp-common",
  "ff-stamp-rare",
];

const ProjectCard = ({ project, index }) => {
  const navigate = useNavigate();
  const stampCls = stampStyles[index % stampStyles.length];

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      onClick={() => navigate(project.link)}
      className="group cursor-pointer ff-box p-4 flex flex-col justify-between transition-transform duration-150 hover:-translate-y-0.5"
    >
      <div>
        {/* Media Window */}
        <div
          className="w-full h-48 overflow-hidden bg-[#f4e9cd] mb-3.5"
          style={{ boxShadow: '0 0 0 1px #2b2118' }}
        >
          {project.image.endsWith('.mp4') ? (
            <video
              className="w-full h-full object-cover"
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
              className="w-full h-full object-cover"
            />
          )}
        </div>

        {/* Title & Description */}
        <div className="flex items-baseline justify-between gap-2 mb-2">
          <h3 className="text-[23px] font-semibold leading-snug text-[#2b2118] group-hover:text-[#b8322b] underline decoration-[#b8322b]/50 group-hover:decoration-[#b8322b] decoration-1 underline-offset-4">
            {project.title}
          </h3>
          {project.date && (
            <time className="font-pixel uppercase tracking-[0.12em] text-[15px] text-[#6a583f] shrink-0">
              {project.date}
            </time>
          )}
        </div>
        <p className="text-[17px] leading-[1.5] text-[#2b2118] mb-4">
          {project.description}
        </p>
      </div>

      {/* Tags & Read Link */}
      <div className="pt-3 border-t border-dashed border-[#b9a67e] flex flex-wrap items-center justify-between gap-2">
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
        <span className="font-pixel uppercase tracking-[0.14em] text-[16px] text-[#b8322b] group-hover:underline">
          Learn More ›
        </span>
      </div>
    </motion.article>
  );
};

export default ProjectCard;