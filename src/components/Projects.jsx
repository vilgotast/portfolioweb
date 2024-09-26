import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projectData = [
  {
    title: "AI-Powered Image Recognition",
    description: "Developed a deep learning model for real-time object detection in images and video streams.",
    tags: ["Computer Vision", "TensorFlow", "Python"],
    link: "#"
  },
  {
    title: "Natural Language Processing Chatbot",
    description: "Created an intelligent chatbot using NLP techniques to understand and respond to user queries.",
    tags: ["NLP", "BERT", "Python", "Flask"],
    link: "#"
  },
  {
    title: "Predictive Analytics Dashboard",
    description: "Built a web-based dashboard for visualizing and analyzing predictive models' outputs.",
    tags: ["Machine Learning", "React", "D3.js", "Python"],
    link: "#"
  }
];

const Projects = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary">{tag}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" asChild>
                  <a href={project.link}>Learn More</a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;