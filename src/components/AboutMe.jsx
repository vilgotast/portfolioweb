import React from 'react';
import { motion } from "framer-motion";
import { Code2Icon, BrainCircuitIcon, DatabaseIcon } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const AboutMe = () => {
  const skills = [
    { icon: <BrainCircuitIcon className="w-6 h-6" />, name: "Machine Learning", description: "Deep Learning, Reinforcement Learning, Neural Networks" },
    { icon: <Code2Icon className="w-6 h-6" />, name: "Programming", description: "Python, PyTorch, TensorFlow, React" },
    { icon: <DatabaseIcon className="w-6 h-6" />, name: "Data Science", description: "Data Analysis, Visualization, Statistical Modeling" },
  ];

  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-6 text-blue-200">About Me</h2>
          <p className="text-lg text-gray-300 mb-8">
            I'm a passionate AI researcher and developer focused on exploring the frontiers of artificial intelligence. 
            My work spans across various domains of AI, from reinforcement learning to neural networks, 
            always seeking innovative solutions to complex problems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="bg-gray-700 border-gray-600 h-full">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 text-blue-300 flex justify-center">
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-blue-200">{skill.name}</h3>
                  <p className="text-gray-300">{skill.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;