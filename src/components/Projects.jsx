import React from 'react';
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRightIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const projectData = [
  {
    title: "SafetySam",
    description: "A travel-advice chatbot using RAG (Retrieval-Augmented Generation).",
    tags: ["RAG", "Chatbot", "NLP"],
    link: "/projects/safetysam",
    image: `${import.meta.env.BASE_URL}images/sumotraffic/random.gif`
  },
  {
    title: "BenBot",
    description: "A chatbot project with a live demo.",
    tags: ["Chatbot", "Hugging Face", "Flask"],
    link: "/projects/benbot",
    image: `${import.meta.env.BASE_URL}images/drawing_recognition/bird.png`
  },
  {
    title: "SumoTraffic",
    description: "mMlti-agent reinforcement learning solution to a traffic simulation.",
    tags: ["Multi Agent", "DQN"],
    link: "/projects/sumotraffic",
    image: `${import.meta.env.BASE_URL}images/sumotraffic/dqn.gif`
  },
  {
    title: "StyleAlign",
    description: "Style transfer using shared attention.",
    tags: ["Style transfer", "Image generation", "Attention processing"],
    link: "/projects/stylealign",
    image: `${import.meta.env.BASE_URL}images/stylealign/stylealign_ex1.png`
  },
  {
    title: "Gym Racecar",
    description: "A reinforcement learning project for racing car environment",
    tags: ["Reinforcement Learning", "Q-learning", "OpenAI Gym"],
    link: "/projects/gymracecar",
    image: `${import.meta.env.BASE_URL}videos/car.mp4`
  }
];

const Projects = ({ showPreview = false }) => {
  const navigate = useNavigate();
  const displayedProjects = showPreview ? projectData.slice(0, 4) : projectData;

  return (
    <section className="py-20 bg-gray-900 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-blue-200">AI Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={index}
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
                    ${index >= displayedProjects.length - 1
                      ? 'opacity-100 md:opacity-100'
                      : 'opacity-0'}
                    ${index >= displayedProjects.length - 2 
                      ? 'opacity-0 md:opacity-100'
                      : ''} 
                    group-hover:opacity-0
                  `}
                ></div>
              )}
            </motion.div>
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