import React from 'react';
import DrawingCanvas from '../components/DrawingCanvas';
import ModelArchitecture from '../components/ModelArchitecture';
import DatasetSection from '../components/DatasetSection';
import { Button } from "@/components/ui/button";
import { FileDown } from "lucide-react";

export const projectDetails = {
  safetysam: {
    title: "SafetySam",
    description: "A travel-advice chatbot using RAG (Retrieval-Augmented Generation)",
    content: (
      <>
        <p className="mb-6">
          A common issue when using chatbots is that there is no way of knowing where the information came from. Did the bot just make it all up?
          One way to solve this problem is by giving the relevant data to the LLM as context for answering the user prompt. The question then becomes how to know which 
          data to give the model. Here, another model embeds the entire dataset into language embeddings, which then can be compared to an embedded version of the user prompt. 
          If the embedded prompt is similar to embedded parts of the dataset, those are the parts that should be supplied to the chatbot as context. This is known as Retrieval-Augmented Generation (RAG).
          SafetySam is a chatbot designed to provide personalized travel safety advice using RAG technology. It can answer questions about different destinations and provide the user with the sources it relied on.
          For more details, see the full project report below.
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <Button 
            onClick={() => window.open(`${import.meta.env.BASE_URL}docs/safetysam_report.pdf`, '_blank', 'noopener,noreferrer')}
            className="flex items-center gap-2"
          >
            <FileDown className="h-4 w-4" />
            View Project Report
          </Button>
        </div>

        <h3 className="text-xl font-semibold mb-4">Key Features:</h3>
        <ul className="list-disc list-inside mb-6">
          <li>Retrieval-Augmented Generation for accurate responses</li>
          <li>Real-time travel safety information</li>
          <li>Context-aware recommendations</li>
          <li>Integration with travel safety databases</li>
        </ul>

        <h3 className="text-xl font-semibold mb-4">Technical Implementation</h3>
        <p className="mb-4">
          The system uses a RAG architecture to combine the power of large language models with a 
          specialized knowledge base of travel safety information. This ensures that responses are 
          both contextually relevant and factually accurate. It is deployed locally with a React frontend and a python flask backend, using ollama for the LLM integration.
          The specific language model used for the chat is the 3B version of Llama3.2, and the dataset is embedded with the model all-minilm-l6-v2 which is integrated via Hugging Face. The full source code can be accessed in the report.
        </p>
      </>
    )
  },
  benbot: {
    title: "BenBot",
    description: "BenBot is proof-of-concept project with a live demo of server-side inference.",
    demoLink: "https://benchat-fbt5.onrender.com/",
    content: (
      <>
        <p>I wanted to try using pre-trained LLMs without having to download large models or run through local hosting. BenBot runs on Llama 3 through the Huggingface API. I have implemented a live demo which can be tried using the button below (takes about 1 min to start if inactive). See if you can figure out the system prompt!</p>
        <h3 className="text-xl font-semibold mt-4 mb-2">Key Features:</h3>
        <ul className="list-disc list-inside mb-4">
          <li>LLM inference on server-side</li>
          <li>Context-aware responses</li>
          <li>Live Demo</li>
        </ul>
      </>
    )
  },
  sumotraffic: {
    title: "SumoTraffic",
    description: "SumoTraffic is a multi-agent reinforcement learning solution to a traffic simulation.",
    content: (
      <>
        <p>This project aims to understand how multiple agent can interact and learn together in a reinforcement learning environment. It was implemented in the 
          <a href="https://eclipse.dev/sumo/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline"> "Simulation of Urban MObility" (SUMO) environment</a>
          , which creates a dynamic and realistic simulation environment for urban traffic scenarios. On top of it, reinforcement learning is implemented via 
          <a href="https://zenodo.org/doi/10.5281/zenodo.10869789" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline"> SUMO-RL</a>
          . A DQN with prioritized experience replay is used to train each agent and they are rewarded negatively for each halting veichle. The project showed a potential 259.47% efficiency increase compared to random lights.
          A demo can be seen below. For more information, check out the <a href="https://docs.google.com/presentation/d/1ByZKp5Sz_FeL4wkyGKGTFtV-dTlqwKepkmp44r9op-E/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline"> slides </a>
           on this project.
        </p>
        <h3 className="text-xl font-semibold mt-4 mb-2">Key Features:</h3>
        <ul className="list-disc list-inside mb-4">
          <li>Realistic traffic flow simulation</li>
          <li>Deep Q-Learning</li>
          <li>Multiple agents</li>
        </ul>
        <div className="mt-6">
          <h3 className="text-2xl font-semibold mb-4">SumoTraffic in action:</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <img src={`${import.meta.env.BASE_URL}images/sumotraffic/random.gif`} alt="Random agents" className="w-full h-auto rounded-lg shadow-md mb-2" />
              <p className="text-sm text-gray-400">Agents acting at random. </p>
            </div>
            <div>
              <img src={`${import.meta.env.BASE_URL}/images/sumotraffic/dqn.gif`} alt="DQN agents" className="w-full h-auto rounded-lg shadow-md mb-2" />
              <p className="text-sm text-gray-400">Agents acting according to learned policy.</p>
            </div>
            <div>
              <img src={`${import.meta.env.BASE_URL}/images/sumotraffic/shared.gif`} alt="Observing agents" className="w-full h-auto rounded-lg shadow-md mb-2" />
              <p className="text-sm text-gray-400">Trained agents also given other's observations (performed worse).</p>
            </div>
          </div>
        </div>
      </>
    )
  },
  stylealign: {
    title: "StyleAlign",
    description: "StyleAlign is a project that aims to explore how attention impacts style during diffusion.",
    content: (
      <>
        <p>This project is inspired by the much broader original project <a href="https://doi.org/10.48550/arXiv.2312.02133" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline"> Style Aligned Image Generation via Shared Attention</a>
        . This project attempts to implement something similar, but on a much smaller scale. Here, the Key, Query and Value inside the attention mechanism are simply concatenated with saved features of a reference image 
        in order to achieve shared attention. This actually works well, although the specific approach is limited to one image per reference. Feel free to try it yourself on Colab below. It runs on T4 and unfortunatly only handles 12 denoising steps before memory errors occurs, but this still allows for some relatively good image generation, see examples below.</p>
        <h3 className="text-xl font-semibold mt-4 mb-2">Key Features:</h3>
        <ul className="list-disc list-inside mb-4">
          <li>Image generation</li>
          <li>Shared attention</li>
        </ul>
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-2">Try it on Google Colab</h3>
          <p>Google Colab notebook:</p>
          <a href="https://colab.research.google.com/drive/1sQnSQ6Vl-5_FCbHSddgqDCJO8EEWsvgL?usp=sharing" target="_blank" rel="noopener noreferrer" className="mt-2 inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Open in Google Colab
          </a>
        </div>
        <div className="mt-8">
          <h3 className="text-2xl font-semibold mb-4">Style Transfer Examples</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <img src={`${import.meta.env.BASE_URL}/images/stylealign/stylealign_ex1.png`} alt="StyleAlign Example 1" className="w-full h-auto rounded-lg shadow-md mb-2" />
              <p className="text-sm text-gray-400">Reference image (left side) had the prompt: "A drawing of a sea", and the target image got the prompt "A boat". </p>
            </div>
            <div>
              <img src={`${import.meta.env.BASE_URL}/images/stylealign/stylealign_ex2.png`} alt="StyleAlign Example 2" className="w-full h-auto rounded-lg shadow-md mb-2" />
              <p className="text-sm text-gray-400">Reference prompt: "Watercolor painting of a desert highway". Target prompt: "A blue car".</p>
            </div>
            <div>
              <img src={`${import.meta.env.BASE_URL}/images/stylealign/stylealign_ex3.png`} alt="StyleAlign Example 3" className="w-full h-auto rounded-lg shadow-md mb-2" />
              <p className="text-sm text-gray-400">Reference prompt: "A 1920s photograph of grassy hills". Target prompt: "An airplane".</p>
            </div>
          </div>
        </div>
      </>
    )
  },
  gymracecar: {
    title: "Gym Racecar",
    description: "Gym Racecar is a relatively quick reinforcement learning project focused on training an agent to navigate racing environments.",
    content: (
      <>
        <p>This project is buildt in the classic <a href="https://www.gymlibrary.dev/environments/box2d/car_racing/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline"> Open AI Gym</a> environment.
        It implements a simple yet powerful Q-learning approach and is rewarded by moving forward and staying on the track. A quick demo can be seen below. It's not the world's fastest racer, but it gets the job done!</p>
        <h3 className="text-xl font-semibold mt-4 mb-2">Key Features:</h3>
        <ul className="list-disc list-inside mb-4">
          <li>Q-Learning</li>
          <li>OpenAI Gym</li>
        </ul>
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-2">Demo</h3>
          <p>Watch the agent navigate a race track:</p>
          <video controls className="mt-2 rounded-lg shadow-lg">
            <source src={`${import.meta.env.BASE_URL}/videos/car.mp4`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </>
    )
  },
  deepbirdsound: {
    title: "Deep Birdsound Generator",
    description: "Deep Birdsound Generator is an experimental project.",
    content: (
      <>
        <p>zzzzzzzzzzzzzzzzzzzzzzz</p>
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
  drawingrecognition: {
    title: "Drawing Recognition",
    description: "Real-time drawing recognition using ONNX model in browser.",
    content: (
      <>
        <p>This project demonstrates the capabilities of running machine learning models directly in the browser using ONNX Runtime. Draw anything in the canvas below, and the model will try to recognize what you've drawn in real-time! The classes are helicopter, spoon, bird. It REALLY likes to predict bird. Some good spoon drawings can be correctly guessed.</p>
        <h3 className="text-xl font-semibold mt-4 mb-2">Try it yourself:</h3>
        <DrawingCanvas />
        <DatasetSection />
        <h3 className="text-xl font-semibold mt-8 mb-2">How it works:</h3>
        <ul className="list-disc list-inside mb-4">
          <li>The model was trained on the QuickDraw dataset and converted to ONNX format</li>
          <li>ONNX Runtime Web enables running the model directly in your browser</li>
          <li>The drawing is preprocessed in real-time to match the model's input format</li>
          <li>Predictions are made locally without any server requests</li>
        </ul>
        <div className="mt-8">
          <ModelArchitecture />
        </div>
      </>
    )
  }
};