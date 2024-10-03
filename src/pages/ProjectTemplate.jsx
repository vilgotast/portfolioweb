import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";

const projectDetails = {
  benbot: {
    title: "BenBot",
    description: "BenBot is an advanced chatbot project with a live demo. It showcases natural language processing capabilities and real-time interaction.",
    demoLink: "https://benchat-fbt5.onrender.com/",
    content: (
      <>
        <p>BenBot is a state-of-the-art chatbot that demonstrates the power of modern NLP techniques. Users can interact with BenBot in real-time, experiencing fluid and context-aware conversations.</p>
        <h3 className="text-xl font-semibold mt-4 mb-2">Key Features:</h3>
        <ul className="list-disc list-inside mb-4">
          <li>Natural language understanding and generation</li>
          <li>Context-aware responses</li>
          <li>Multi-turn conversation handling</li>
          <li>Integration with external knowledge bases</li>
        </ul>
      </>
    )
  },
  sumotraffic: {
    title: "SumoTraffic",
    description: "SumoTraffic is a sophisticated traffic simulation project that models and analyzes urban traffic patterns.",
    content: (
      <>
        <p>SumoTraffic leverages advanced simulation techniques to model complex traffic scenarios in urban environments. This project aims to improve traffic management strategies and optimize traffic flow in cities.</p>
        <h3 className="text-xl font-semibold mt-4 mb-2">Key Features:</h3>
        <ul className="list-disc list-inside mb-4">
          <li>Realistic traffic flow simulation</li>
          <li>Multiple vehicle types and behaviors</li>
          <li>Traffic light optimization algorithms</li>
          <li>Data visualization for traffic patterns</li>
        </ul>
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-2">Project Showcase</h3>
          <p>Check out this GIF demonstrating SumoTraffic in action:</p>
          <img src="/path/to/sumotraffic-demo.gif" alt="SumoTraffic Demo" className="mt-2 rounded-lg shadow-lg" />
        </div>
      </>
    )
  },
  stylealign: {
    title: "StyleAlign",
    description: "StyleAlign is an innovative project that explores style transfer techniques using machine learning.",
    content: (
      <>
        <p>StyleAlign pushes the boundaries of computer vision and machine learning to achieve impressive style transfer results. This project demonstrates the ability to apply the style of one image to the content of another.</p>
        <h3 className="text-xl font-semibold mt-4 mb-2">Key Features:</h3>
        <ul className="list-disc list-inside mb-4">
          <li>Advanced neural style transfer algorithms</li>
          <li>Real-time style application</li>
          <li>Support for various artistic styles</li>
          <li>Integration with Google Colab for accessible experimentation</li>
        </ul>
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-2">Try it on Google Colab</h3>
          <p>Experience StyleAlign yourself using our Google Colab notebook:</p>
          <a href="https://colab.research.google.com/drive/1sQnSQ6Vl-5_FCbHSddgqDCJO8EEWsvgL?usp=sharing" target="_blank" rel="noopener noreferrer" className="mt-2 inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Open in Google Colab
          </a>
        </div>
        <div className="mt-8">
          <h3 className="text-2xl font-semibold mb-4">Style Transfer Examples</h3>
          <div className="space-y-8">
            <div>
              <h4 className="text-lg font-medium mb-2">Example 1: Sea Drawing to Boat</h4>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <img src="/images/stylealign/sea-drawing.jpg" alt="Drawing of a sea" className="w-full h-auto rounded-lg shadow-md" />
                  <p className="mt-2 text-sm text-gray-500">Reference prompt: "a drawing of a sea"</p>
                </div>
                <div className="flex-1">
                  <img src="/images/stylealign/boat-drawing.jpg" alt="Drawing of a boat" className="w-full h-auto rounded-lg shadow-md" />
                  <p className="mt-2 text-sm text-gray-500">New prompt: "a boat"</p>
                </div>
              </div>
              <p className="mt-2">The style of the sea drawing is successfully transferred to the new image of a boat.</p>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-2">Example 2: Watercolor Desert Highway to Blue Car</h4>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <img src="/images/stylealign/desert-highway.jpg" alt="Watercolor painting of a desert highway" className="w-full h-auto rounded-lg shadow-md" />
                  <p className="mt-2 text-sm text-gray-500">Reference prompt: "water color painting of a desert highway"</p>
                </div>
                <div className="flex-1">
                  <img src="/images/stylealign/blue-car.jpg" alt="Watercolor painting of a blue car" className="w-full h-auto rounded-lg shadow-md" />
                  <p className="mt-2 text-sm text-gray-500">New prompt: "a blue car"</p>
                </div>
              </div>
              <p className="mt-2">The watercolor style and desert context are effectively applied to the new image of a blue car.</p>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-2">Example 3: 1920s Photograph to Airplane</h4>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <img src="/images/stylealign/1920s-hill.jpg" alt="1920s photograph of a hill" className="w-full h-auto rounded-lg shadow-md" />
                  <p className="mt-2 text-sm text-gray-500">Reference prompt: "a 1920s photograph of a hill"</p>
                </div>
                <div className="flex-1">
                  <img src="/images/stylealign/1920s-airplane.jpg" alt="1920s style photograph of an airplane" className="w-full h-auto rounded-lg shadow-md" />
                  <p className="mt-2 text-sm text-gray-500">New prompt: "an airplane"</p>
                </div>
              </div>
              <p className="mt-2">While not perfect, the 1920s photographic style is effectively transferred to the new image of an airplane.</p>
            </div>
          </div>
        </div>
      </>
    )
  },
  gymracecar: {
    title: "Gym Racecar",
    description: "Gym Racecar is a reinforcement learning project focused on training AI agents to navigate racing environments.",
    content: (
      <>
        <p>Gym Racecar combines the excitement of racing with the power of reinforcement learning. This project creates a virtual racing environment where AI agents learn to navigate complex tracks and improve their performance over time.</p>
        <h3 className="text-xl font-semibold mt-4 mb-2">Key Features:</h3>
        <ul className="list-disc list-inside mb-4">
          <li>Custom OpenAI Gym environment for racing</li>
          <li>Implementation of various RL algorithms (e.g., PPO, SAC)</li>
          <li>Realistic physics simulation</li>
          <li>Performance metrics and visualization tools</li>
        </ul>
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-2">Project Demo</h3>
          <p>Watch our AI agent navigate a challenging race track:</p>
          <video controls className="mt-2 rounded-lg shadow-lg">
            <source src="/path/to/gymracecar-demo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </>
    )
  },
  deepbirdsound: {
    title: "Deep Birdsound Generator",
    description: "Deep Birdsound Generator is an experimental project aimed at synthesizing realistic bird sounds using deep learning techniques.",
    content: (
      <>
        <p>While currently in development, the Deep Birdsound Generator project explores the fascinating intersection of audio processing, deep learning, and ornithology. Our goal is to create an AI model capable of generating authentic-sounding bird calls and songs.</p>
        <h3 className="text-xl font-semibold mt-4 mb-2">Project Goals:</h3>
        <ul className="list-disc list-inside mb-4">
          <li>Develop a deep learning model for audio synthesis</li>
          <li>Create a diverse dataset of bird sounds</li>
          <li>Implement spectral and temporal analysis of bird vocalizations</li>
          <li>Explore applications in ecology and environmental monitoring</li>
        </ul>
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-2">Project Status</h3>
          <p>This project is currently in the research and development phase. Stay tuned for updates and preliminary results!</p>
        </div>
      </>
    )
  },
  chatbot: {
    title: "Flask Chatbot",
    description: "A simple chatbot implemented using Flask with a Python backend and HTML frontend.",
    content: (
      <>
        <p>This Flask Chatbot project demonstrates a basic implementation of a web-based chatbot using Python and Flask. It showcases the integration of a backend API with a simple HTML frontend.</p>
        <h3 className="text-xl font-semibold mt-4 mb-2">Key Features:</h3>
        <ul className="list-disc list-inside mb-4">
          <li>Flask-based API for handling chat requests</li>
          <li>Simple HTML/JavaScript frontend for user interaction</li>
          <li>Basic natural language processing capabilities</li>
          <li>Easily extensible for more advanced features</li>
        </ul>
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-2">Try the Chatbot</h3>
          <p>Interact with the Flask Chatbot:</p>
          <iframe src="/projects/chatbot" className="w-full h-96 mt-2 border-2 border-gray-300 rounded-lg"></iframe>
        </div>
      </>
    )
  }
};

const ProjectTemplate = () => {
  const { projectId } = useParams();
  const project = projectDetails[projectId];

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <main className="container mx-auto px-4 py-24">
        <h1 className="text-4xl font-bold mb-6">{project.title}</h1>
        <p className="text-xl mb-8 text-gray-300">{project.description}</p>
        <div className="prose prose-invert max-w-none">
          {project.content}
        </div>
        {project.demoLink && (
          <div className="mt-8">
            <Button 
              onClick={() => window.open(project.demoLink, '_blank')}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            >
              Try Live Demo
            </Button>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default ProjectTemplate;
