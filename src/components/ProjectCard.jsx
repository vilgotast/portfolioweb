import React from 'react';
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRightIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ProjectCard = ({ project, index, showPreview }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className={`relative ${showPreview ? 'group' : ''}`}
    >
      <motion.div
        whileHover={{ 
          scale: 1.05, 
          y: -10,
          boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)"
        }}
        transition={{ duration: 0.3 }}
        onClick={() => navigate(project.link)}
        className="cursor-pointer"
      >
        <Card className="overflow-hidden transition-all duration-300 bg-gray-800 border-gray-700 h-full">
          <div className="w-full h-48 overflow-hidden">
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
          <CardHeader className="bg-gradient-to-r from-gray-800 to-gray-700 text-white">
            <CardTitle className="text-2xl">{project.title}</CardTitle>
          </CardHeader>
          <CardContent className="p-6 flex flex-col justify-between h-full">
            <div>
              <CardDescription className="text-gray-300 mb-4">{project.description}</CardDescription>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <Badge key={tagIndex} variant="secondary" className="bg-gray-700 text-blue-200">{tag}</Badge>
                ))}
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileHover={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="inline-flex items-center text-blue-300 hover:text-blue-100 transition-colors duration-300">
                Learn More <ArrowRightIcon className="ml-2 h-4 w-4" />
              </div>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
      {showPreview && (
        <div
          className={`absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent pointer-events-none 
            transition-opacity duration-300
            ${index >= 2 ? 'opacity-100 md:opacity-100' : 'opacity-0'}
            ${index >= 1 ? 'opacity-0 md:opacity-100' : ''} 
            group-hover:opacity-0
          `}
        ></div>
      )}
    </motion.div>
  );
};

export default ProjectCard;