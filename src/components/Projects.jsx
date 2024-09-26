import React from 'react';
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRightIcon } from 'lucide-react';

const projectData = [
  {
    title: "AI-Powered Image Recognition",
    description: "Real-time object detection in images and video streams using deep learning.",
    tags: ["Computer Vision", "TensorFlow", "Python"],
    link: "#"
  },
  {
    title: "Natural Language Processing Chatbot",
    description: "Intelligent chatbot using NLP techniques for understanding and responding to queries.",
    tags: ["NLP", "BERT", "Python", "Flask"],
    link: "#"
  },
  {
    title: "Predictive Analytics Dashboard",
    description: "Web-based dashboard for visualizing and analyzing predictive models' outputs.",
    tags: ["Machine Learning", "React", "D3.js", "Python"],
    link: "#"
  }
];

const Projects = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-blue-300">Innovative AI Projects</h2>
        <div className="grid grid-cols-1 gap-12">
          {projectData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-gray-800 border-gray-700">
                <CardHeader className="bg-gradient-to-r from-blue-800 to-blue-600 text-white">
                  <CardTitle className="text-2xl">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <CardDescription className="text-gray-300 mb-4">{project.description}</CardDescription>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="bg-blue-900 text-blue-200">{tag}</Badge>
                    ))}
                  </div>
                  <a href={project.link} className="inline-flex items-center text-blue-300 hover:text-blue-100 transition-colors duration-300">
                    Learn More <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;