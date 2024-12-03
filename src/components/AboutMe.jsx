import React from 'react';
import { motion, useInView } from "framer-motion";
import { Code2Icon, BrainCircuitIcon, DatabaseIcon } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const AboutMe = () => {
  const skills = [
    { icon: <BrainCircuitIcon className="w-6 h-6" />, name: "Machine Learning", description: "Deep Learning, Reinforcement Learning, Neural Networks" },
    { icon: <Code2Icon className="w-6 h-6" />, name: "Programming", description: "Python, PyTorch, TensorFlow, React" },
    { icon: <DatabaseIcon className="w-6 h-6" />, name: "Data Science", description: "Data Analysis, Visualization, Statistical Modeling" },
  ];

  // Ref to track the section
  const sectionRef = React.useRef(null);
  const isInView = useInView(sectionRef, { margin: "-100px" });

  return (
    <section ref={sectionRef} className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 1.6 }}
          className="max-w-4xl mx-auto text-center mb-6"
        >
          <h2 className="text-3xl font-bold mb-6 text-blue-200">About Me</h2>
          <p className="text-lg text-gray-300 mb-8">
            I'm passionate about AI and exploring its frontiers through interesting projects.
            I love learning about new techniques and often want to try implementing them into something concrete and functional to see the theory work in practice. 
            I wanted a place to share some of my projects, so I created this page! 
            My work spans across various domains of AI, but I especially enjoy NLP, 
            reinforcement learning, and neural networks.
          </p>
        </motion.div>
        <div className="flex items-center justify-center mb-6">
        <Avatar className="h-20 w-20 sm:h-24 sm:w-24 md:h-32 md:w-32">
            <AvatarImage src={`${import.meta.env.BASE_URL}/images/contact/profile_pic.jpg`} alt="Profile Picture" className="object-cover" />
            <AvatarFallback>VA</AvatarFallback>
          </Avatar>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 20 }}
              transition={{
                duration: 1.6,
                delay: index * 0.2,
                type: "spring",
                stiffness: 200, // Increased for faster bounce
                damping: 20,    // Lower damping for more bounce
                mass: 1         // Control the size of the bounce
              }}
            >
              <Card className="bg-gray-700 border-gray-600 h-full hover:scale-105 transition-transform duration-300 ease-in-out">
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
