import React from 'react';
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRightIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const projectData = [
  {
    title: "BenBot",
    description: "A chatbot project with a live demo.",
    tags: ["Chatbot", "AI", "NLP"],
    link: "/projects/benbot"
  },
  {
    title: "SumoTraffic",
    description: "Traffic simulation project.",
    tags: ["Simulation", "Traffic Management"],
    link: "/projects/sumotraffic"
  },
  {
    title: "StyleAlign",
    description: "Style transfer project with Google Colab integration.",
    tags: ["Machine Learning", "Computer Vision", "Google Colab"],
    link: "/projects/stylealign"
  },
  {
    title: "Gym Racecar",
    description: "A reinforcement learning project for racing car simulation.",
    tags: ["Reinforcement Learning", "Simulation"],
    link: "/projects/gymracecar"
  },
  {
    title: "Deep Birdsound Generator",
    description: "An experimental project for generating bird sounds (currently in development).",
    tags: ["Audio Generation", "Deep Learning"],
    link: "/projects/deepbirdsound"
  },
  {
    title: "Flask Chatbot",
    description: "A simple chatbot implemented using Flask with a Python backend and HTML frontend.",
    tags: ["Python", "Flask", "HTML", "JavaScript"],
    link: "/projects/chatbot"
  }
];

const Projects = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-blue-200">Innovative AI Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projectData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <motion.div
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)"
                }}
                transition={{ duration: 0.3 }}
              >
                <Card className="overflow-hidden transition-all duration-300 bg-gray-800 border-gray-700 h-full">
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
                      <Link to={project.link} className="inline-flex items-center text-blue-300 hover:text-blue-100 transition-colors duration-300">
                        Learn More <ArrowRightIcon className="ml-2 h-4 w-4" />
                      </Link>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;