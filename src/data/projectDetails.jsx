import React from 'react';
import DrawingCanvas from '../components/DrawingCanvas';
import ModelArchitecture from '../components/ModelArchitecture';
import DatasetSection from '../components/DatasetSection';
import { Button } from "@/components/ui/button";
import { FileDown, ExternalLink } from "lucide-react";

export const projectDetails = {
  documentclassification: {
    title: "Multimodal Document Classification",
    date: "Jun 2025",
    description: "Optimizing and evaluating language and vision models for Swedish government document classification.",
    content: (
      <>
        <div>
          <img
            src={`${import.meta.env.BASE_URL}images/document_classification/early_fusion_architecture.png`}
            alt="Complex Early Fusion Architecture"
            className="w-full max-w-xl h-auto mx-auto mb-4 bg-white p-3"
            style={{ boxShadow: '0 0 0 1px #2b2118' }}
          />
          <p className="text-sm text-[#6a583f] text-center mb-6">
            Complex early fusion architecture combining pre-trained ViT and KB-SBERT CLS representations through a transformer fusion block with residual connections.
          </p>
        </div>

        <p className="mb-4">
          Swedish government agencies handle an extensive volume of documents daily. These range from digital agreements, decisions, and invoices to scanned receipts, text message screenshots, and photographs. Because of the sensitive nature of public administration records, automated classification systems must be accurate, scalable, and deployable locally without sending data to external cloud providers.
        </p>
        <p className="mb-6">
          This project investigates document classification strategies across 15 document categories (~55,000 files) using both unimodal (text-only and vision-only) and multimodal fusion architectures. We also built a custom human benchmark tool to evaluate dataset quality and compare model performance against human annotators.
        </p>

        <div className="flex flex-wrap gap-4 mb-8">
          <button
            onClick={() => window.open("https://liu.diva-portal.org/smash/get/diva2:2000764/FULLTEXT01.pdf", '_blank', 'noopener,noreferrer')}
            className="ff-go"
          >
            <FileDown className="h-4 w-4 mr-2" />
            Read Full Thesis (PDF)
          </button>
          <a
            href="https://liu.diva-portal.org/smash/record.jsf?pid=diva2%3A2000764&dswid=6416"
            target="_blank"
            rel="noopener noreferrer"
            className="ff-go-secondary inline-flex items-center"
          >
            <ExternalLink className="h-4 w-4 mr-2" />
            View on DiVA Portal
          </a>
        </div>

        <h3 className="ff-section-heading mt-8 mb-3">Key Findings &amp; Contributions</h3>
        <ul className="ff-list mb-6 space-y-2.5">
          <li>
            Novel transformer-based early fusion architecture achieved the highest overall accuracy by combining visual features from ViT and textual features from KB-SBERT, outperforming all unimodal models and the human benchmark.
          </li>
          <li>
            Fine-tuning KB-SBERT improved accuracy from 76.68% (frozen embeddings + MLP head) to 89.34% in just 43 minutes of training, demonstrating effective domain-specific adaptation for Swedish administrative terminology.
          </li>
          <li>
            While QLoRA-tuned Qwen2.5-3B reached 83.90% accuracy, encoder models (KB-SBERT, DeBERTa) were over two orders of magnitude faster at inference (20.7 files/s vs. 0.1 files/s).
          </li>
          <li>
            Introduced a tunable operational score metric evaluating models across varying priorities between inference throughput and predictive accuracy.
          </li>
        </ul>

        <h3 className="ff-section-heading mt-8 mb-4">Model Performance Comparison</h3>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse text-left text-[16px]">
            <thead>
              <tr className="border-b-[3px] border-double border-[#2b2118] font-pixel uppercase tracking-[0.12em] text-[15px] text-[#6a583f]">
                <th className="py-2 pr-4 font-normal">Model</th>
                <th className="py-2 px-3 font-normal">Model Acc.</th>
                <th className="py-2 px-3 font-normal">Dataset Acc.</th>
                <th className="py-2 px-3 font-normal">Weighted F1</th>
                <th className="py-2 pl-3 font-normal">Throughput</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: "Complex Early Fusion (ViT + KB-SBERT)", modelAcc: "89.92%", dataAcc: "86.23%", f1: "0.8981", speed: "2.7 files/s", highlight: true },
                { name: "Fine-tuned KB-SBERT", modelAcc: "89.34%", dataAcc: "83.22%", f1: "0.8931", speed: "20.7 files/s", highlight: false },
                { name: "Fine-tuned DeBERTa", modelAcc: "89.23%", dataAcc: "83.14%", f1: "0.8918", speed: "13.9 files/s", highlight: false },
                { name: "Hierarchical Text Fusion", modelAcc: "88.81%", dataAcc: "82.68%", f1: "0.8863", speed: "3.1 files/s", highlight: false },
                { name: "Late Fusion", modelAcc: "88.59%", dataAcc: "84.95%", f1: "0.8828", speed: "2.7 files/s", highlight: false },
                { name: "Fine-tuned ViT", modelAcc: "85.10%", dataAcc: "75.77%", f1: "0.8496", speed: "6.1 files/s", highlight: false },
                { name: "Decoder-based Qwen2.5-3B (QLoRA)", modelAcc: "83.90%", dataAcc: "78.19%", f1: "0.8369", speed: "0.1 files/s", highlight: false },
                { name: "Human Benchmark", modelAcc: "82.60%", dataAcc: "82.60%", f1: "0.8415", speed: "0.2 files/s", highlight: false },
                { name: "Naive Bayes Baseline", modelAcc: "78.06%", dataAcc: "73.20%", f1: "0.7757", speed: "5379.0 files/s", highlight: false },
              ].map((row, idx) => (
                <tr
                  key={idx}
                  className={`border-b border-[#b9a67e] last:border-b-[#2b2118] ${row.highlight ? "font-semibold bg-[#efe0bc]" : ""}`}
                >
                  <td className="py-2.5 pr-4">{row.name}</td>
                  <td className="py-2.5 px-3">{row.modelAcc}</td>
                  <td className="py-2.5 px-3">{row.dataAcc}</td>
                  <td className="py-2.5 px-3">{row.f1}</td>
                  <td className="py-2.5 pl-3">{row.speed}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="ff-section-heading mt-8 mb-4">Architecture &amp; Evaluation Visuals</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <img
              src={`${import.meta.env.BASE_URL}images/document_classification/early_vs_late_fusion.png`}
              alt="Early Fusion vs Late Fusion"
              className="w-full h-auto mb-2 bg-white p-2"
              style={{ boxShadow: '0 0 0 1px #2b2118' }}
            />
            <p className="text-sm text-[#6a583f]">
              Comparison between early representation fusion and late prediction fusion.
            </p>
          </div>
          <div>
            <img
              src={`${import.meta.env.BASE_URL}images/document_classification/confusion_matrix_fusion.png`}
              alt="Complex Early Fusion Confusion Matrix"
              className="w-full h-auto mb-2 bg-white p-2"
              style={{ boxShadow: '0 0 0 1px #2b2118' }}
            />
            <p className="text-sm text-[#6a583f]">
              Confusion matrix for the Complex Early Fusion classifier across the 15 document classes.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <img
              src={`${import.meta.env.BASE_URL}images/document_classification/model_scores.png`}
              alt="Model Score vs Lambda"
              className="w-full h-auto mb-2 bg-white p-2"
              style={{ boxShadow: '0 0 0 1px #2b2118' }}
            />
            <p className="text-sm text-[#6a583f]">
              Model score as a function of λ (weight placed on accuracy vs. log-normalized throughput).
            </p>
          </div>
          <div>
            <img
              src={`${import.meta.env.BASE_URL}images/document_classification/model_ranks.png`}
              alt="Model Ranks across Lambda"
              className="w-full h-auto mb-2 bg-white p-2"
              style={{ boxShadow: '0 0 0 1px #2b2118' }}
            />
            <p className="text-sm text-[#6a583f]">
              Model ranking across λ. Fine-tuned KB-SBERT remains top-3 across all accuracy–speed trade-offs, while Complex Early Fusion leads when accuracy is prioritized.
            </p>
          </div>
        </div>
      </>
    )
  },
  safetysam: {
    title: "SafetySam",
    date: "Sep 2024",
    description: "A travel-advice chatbot using RAG (Retrieval-Augmented Generation)",
    content: (
      <>
        <div>
          <img
          src={`${import.meta.env.BASE_URL}images/safetysam/example.png`}
          alt='Example of SafetySam'
          className="w-full max-w-2xl h-auto mx-auto mb-4"
          style={{ boxShadow: '0 0 0 1px #2b2118' }}
          />
        </div>
        <p className="mb-6">
          A common issue when using chatbots is that there is no way of knowing where the information came from. Did the bot just make it all up?
          One way to solve this problem is by giving the relevant data to the LLM as context for answering the user prompt. The question then becomes how to know which 
          data to give the model. Here, another model embeds the entire dataset into language embeddings, which can be compared to an embedded version of the user prompt. 
          If the embedded prompt is similar to embedded parts of the dataset, those are the parts that should be supplied to the chatbot as context. This is known as Retrieval-Augmented Generation (RAG).
          SafetySam is a chatbot designed to provide personalized travel safety advice using RAG technology. It can answer questions about different destinations and provide the user with the sources it relied on.
          For more details, see the full project report below.
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <button 
            onClick={() => window.open(`${import.meta.env.BASE_URL}docs/safetysam_report.pdf`, '_blank', 'noopener,noreferrer')}
            className="ff-go"
          >
            <FileDown className="h-4 w-4 mr-2" />
            View Project Report
          </button>
        </div>

        <h3 className="ff-section-heading mt-8 mb-3">Key Features</h3>
        <ul className="list-disc list-inside mb-6 space-y-1">
          <li>Retrieval-Augmented Generation for accurate responses</li>
          <li>Real-time travel safety information</li>
          <li>Context-aware recommendations</li>
          <li>Integration with travel safety databases</li>
        </ul>

        <h3 className="ff-section-heading mt-8 mb-3">Technical Implementation</h3>
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
    date: "May 2024",
    description: "BenBot is proof-of-concept project with a live demo of server-side inference.",
    demoLink: "https://benchat-fbt5.onrender.com/",
    content: (
      <>
        <p>I wanted to try using pre-trained LLMs without having to download large models or run through local hosting. BenBot runs on Llama 3.1 through the Hugging Face API. I have implemented a live demo which can be tried using the button below (takes about 1 min to start if inactive). See if you can figure out the system prompt!</p>
        
        
        <h3 className="ff-section-heading mt-8 mb-3">Key Features</h3>
        <ul className="list-disc list-inside mb-4">
          <li>LLM inference on server-side</li>
          <li>Context-aware responses</li>
          <li>Live Demo</li>
        </ul>

        <div className='mt-6'>
        <h3 className="ff-section-heading mb-4">Some Examples</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <img src={`${import.meta.env.BASE_URL}images/benbot/tired.png`} alt="Random agents" className="w-full h-auto mb-2" style={{ boxShadow: '0 0 0 1px #2b2118' }} />
              </div>
              <div>
                <img src={`${import.meta.env.BASE_URL}/images/benbot/ex2.png`} alt="DQN agents" className="w-full h-auto mb-2" style={{ boxShadow: '0 0 0 1px #2b2118' }} />
              </div>
              <div>
                <img src={`${import.meta.env.BASE_URL}/images/benbot/ex3.png`} alt="Observing agents" className="w-full h-auto mb-2" style={{ boxShadow: '0 0 0 1px #2b2118' }} />
              </div>
            </div>
        </div>
      </>
    )
  },
  sumotraffic: {
    title: "SumoTraffic",
    date: "Dec 2023",
    description: "SumoTraffic is a multi-agent reinforcement learning solution to a traffic simulation.",
    content: (
      <>
        <p>This project aims to understand how multiple agents can interact and learn together in a reinforcement learning environment. It was implemented in the 
          <a href="https://eclipse.dev/sumo/" target="_blank" rel="noopener noreferrer" className="text-[#b8322b] underline underline-offset-4"> "Simulation of Urban MObility" (SUMO) environment</a>
          , which creates a dynamic and realistic simulation environment for urban traffic scenarios. On top of it, reinforcement learning is implemented via 
          <a href="https://zenodo.org/doi/10.5281/zenodo.10869789" target="_blank" rel="noopener noreferrer" className="text-[#b8322b] underline underline-offset-4"> SUMO-RL</a>
          . A DQN with prioritized experience replay is used to train each agent and they are rewarded negatively for each halting veichle. The project showed a potential 259.47% efficiency increase compared to random lights.
          A demo can be seen below. For more information, check out the <a href="https://docs.google.com/presentation/d/1ByZKp5Sz_FeL4wkyGKGTFtV-dTlqwKepkmp44r9op-E/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-[#b8322b] underline underline-offset-4"> slides </a>
           on this project.
        </p>
        <h3 className="ff-section-heading mt-8 mb-3">Key Features</h3>
        <ul className="list-disc list-inside mb-4">
          <li>Realistic traffic flow simulation</li>
          <li>Deep Q-Learning</li>
          <li>Multiple agents</li>
        </ul>
        <div className="mt-6">
          <h3 className="ff-section-heading mb-4">SumoTraffic in Action</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <img src={`${import.meta.env.BASE_URL}images/sumotraffic/random.gif`} alt="Random agents" className="w-full h-auto mb-2" style={{ boxShadow: '0 0 0 1px #2b2118' }} />
              <p className="text-sm text-[#6a583f]">Agents acting at random. </p>
            </div>
            <div>
              <img src={`${import.meta.env.BASE_URL}/images/sumotraffic/dqn.gif`} alt="DQN agents" className="w-full h-auto mb-2" style={{ boxShadow: '0 0 0 1px #2b2118' }} />
              <p className="text-sm text-[#6a583f]">Agents acting according to learned policy.</p>
            </div>
            <div>
              <img src={`${import.meta.env.BASE_URL}/images/sumotraffic/shared.gif`} alt="Observing agents" className="w-full h-auto mb-2" style={{ boxShadow: '0 0 0 1px #2b2118' }} />
              <p className="text-sm text-[#6a583f]">Trained agents also given other's observations (performed worse).</p>
            </div>
          </div>
        </div>
      </>
    )
  },
  stylealign: {
    title: "StyleAlign",
    date: "Jan 2024",
    description: "StyleAlign is a project that aims to explore how attention impacts style during diffusion.",
    content: (
      <>
        <p>This project is inspired by the much broader original project <a href="https://doi.org/10.48550/arXiv.2312.02133" target="_blank" rel="noopener noreferrer" className="text-[#b8322b] underline underline-offset-4"> Style Aligned Image Generation via Shared Attention</a>
        . This project attempts to implement something similar, but on a much smaller scale. Here, the Key, Query and Value inside the attention mechanism are simply concatenated with saved features of a reference image 
        in order to achieve shared attention. This actually works well, although the specific approach is limited to one image per reference. Feel free to try it yourself on Colab below. It runs on T4 and unfortunatly only handles 12 denoising steps before memory errors occurs, but this still allows for some relatively good image generation, see examples below.</p>
        <h3 className="ff-section-heading mt-8 mb-3">Key Features</h3>
        <ul className="list-disc list-inside mb-4">
          <li>Image generation</li>
          <li>Shared attention</li>
        </ul>
        <div className="mt-6">
          <h3 className="ff-section-heading mb-3">Try it on Google Colab</h3>
          <p className="mb-3">Google Colab notebook:</p>
          <a href="https://colab.research.google.com/drive/1sQnSQ6Vl-5_FCbHSddgqDCJO8EEWsvgL?usp=sharing" target="_blank" rel="noopener noreferrer" className="ff-go">
            Open in Google Colab
          </a>
        </div>
        <div className="mt-8">
          <h3 className="ff-section-heading mb-4">Style Transfer Examples</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <img src={`${import.meta.env.BASE_URL}/images/stylealign/stylealign_ex1.png`} alt="StyleAlign Example 1" className="w-full h-auto mb-2" style={{ boxShadow: '0 0 0 1px #2b2118' }} />
              <p className="text-sm text-[#6a583f]">Reference image (left side) had the prompt: "A drawing of a sea", and the target image had the prompt "A boat". </p>
            </div>
            <div>
              <img src={`${import.meta.env.BASE_URL}/images/stylealign/stylealign_ex2.png`} alt="StyleAlign Example 2" className="w-full h-auto mb-2" style={{ boxShadow: '0 0 0 1px #2b2118' }} />
              <p className="text-sm text-[#6a583f]">Reference prompt: "Watercolor painting of a desert highway". Target prompt: "A blue car".</p>
            </div>
            <div>
              <img src={`${import.meta.env.BASE_URL}/images/stylealign/stylealign_ex3.png`} alt="StyleAlign Example 3" className="w-full h-auto mb-2" style={{ boxShadow: '0 0 0 1px #2b2118' }} />
              <p className="text-sm text-[#6a583f]">Reference prompt: "A 1920s photograph of grassy hills". Target prompt: "An airplane".</p>
            </div>
          </div>
        </div>
      </>
    )
  },
  gymracecar: {
    title: "Gym Racecar",
    date: "Oct 2023",
    description: "Gym Racecar is a relatively quick reinforcement learning project focused on training an agent to navigate racing environments.",
    content: (
      <>
        <p>This project is buildt in the classic <a href="https://www.gymlibrary.dev/environments/box2d/car_racing/" target="_blank" rel="noopener noreferrer" className="text-[#b8322b] underline underline-offset-4"> Open AI Gym</a> environment.
        It implements a simple yet powerful Q-learning approach and is rewarded by moving forward and staying on the track. A quick demo can be seen below. It's not the world's fastest racer, but it gets the job done!</p>
        <h3 className="ff-section-heading mt-8 mb-3">Key Features</h3>
        <ul className="list-disc list-inside mb-4">
          <li>Q-Learning</li>
          <li>OpenAI Gym</li>
        </ul>
        <div className="mt-6">
          <h3 className="ff-section-heading mb-3">Demo</h3>
          <p className="mb-2">Watch the agent navigate a race track:</p>
          <video controls className="mt-2" style={{ boxShadow: '0 0 0 1px #2b2118' }}>
            <source src={`${import.meta.env.BASE_URL}/videos/car.mp4`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </>
    )
  },
  drawingrecognition: {
    title: "Drawing Recognition",
    date: "Nov 2024",
    description: "Real-time drawing recognition using ONNX model in browser.",
    content: (
      <>
        <p>This project demonstrates the capabilities of running machine learning models directly in the browser using ONNX Runtime. Draw anything in the canvas below, and the model will try to recognize what you've drawn in real-time! The classes it knows are helicopter, spoon, and bird. 
          You will see the guess in the top left corner of the canvas. Example pictures of what it was trained on and the model architecture can be seen below.
        </p>
        <h3 className="ff-section-heading mt-8 mb-3">Try It Yourself</h3>
        <DrawingCanvas />
        <DatasetSection />
        <h3 className="ff-section-heading mt-8 mb-3">How It Works</h3>
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