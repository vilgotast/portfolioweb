import React from 'react';
import { useNavigate } from 'react-router-dom';
import Masonry from 'react-masonry-css';
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRightIcon } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const projectData = [
  {
    title: "SumoTraffic",
    description: "Traffic manegement through multi-agent reinforcement learning.",
    tags: ["Simulation", "Reinforement Learning", "DQN", "Multi-agent"],
    link: "/projects/sumotraffic",
  },
  {
    title: "StyleAlign",
    description: "Style transfer project using pretrained diffusion model.",
    tags: ["Diffusion", "Style Transfer"],
    link: "/projects/stylealign",
  },
  {
    title: "SafetySam",
    description: "A travel-advice chatbot using RAG for personalized safety recommendations.",
    tags: ["RAG", "LangChain", "Vector DB"],
    link: "/projects/safetysam"
  },
  {
    title: "Gym Racecar",
    description: "A reinforcement learning project for racing car simulation.",
    tags: ["Reinforcement Learning", "Q-learning"],
    link: "/projects/gymracecar",
  },
  {
    title: "Drawing Recognition",
    description: "Real-time drawing recognition using ONNX model in browser.",
    tags: ["ONNX", "Computer Vision", "Interactive"],
    link: "/projects/drawingrecognition",
  },
  {
    title: "BenBot",
    description: "A proof-of-concept chatbot using server-side inference.",
    tags: ["Chatbot", "Hugging Face"],
    link: "/projects/benbot",
  },
];

const ongoingProjects = [
  "Text-to-SQL project: Natural language to SQL query",
  "Volleyball metric improvement for players and coaches",
  "Deep Birdsound Generator using diffusion in an audio context",
  "Optimizing and Evaluating Large Language Models for Swedish Government Document Classification"
];

const ProjectsPage = () => {
  const navigate = useNavigate();

  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header isStartPage={false} />
      <main className="container mx-auto px-4 py-32 max-w-7xl">
        <h1 className="text-4xl font-bold mb-12 text-center">My Projects</h1>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="flex w-auto -ml-4"
          columnClassName="pl-4 bg-clip-padding"
        >
          {projectData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-4"
            >
              <Card 
                className="bg-gray-800 border-gray-700 cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105"
                onClick={() => navigate(project.link)}
              >
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-300">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300 mb-4">{project.description}</CardDescription>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="bg-gray-700 text-blue-200">{tag}</Badge>
                    ))}
                  </div>
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="inline-flex items-center text-blue-300 hover:text-blue-100 transition-colors duration-300"
                  >
                    Learn More <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </Masonry>
        
        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-6 text-blue-200">Currently Working On</h2>
          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="pt-6">
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                {ongoingProjects.map((project, index) => (
                  <li key={index}>{project}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectsPage;