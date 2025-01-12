import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const ongoingProjects = [
  "Text-to-SQL project: Natural language to SQL query",
  "Volleyball metric improvement for players and coaches",
  "Deep Birdsound Generator using diffusion in an audio context",
  "Optimizing and Evaluating Large Language Models for Swedish Government Document Classification"
];

const OngoingProjects = () => {
  return (
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
  );
};

export default OngoingProjects;