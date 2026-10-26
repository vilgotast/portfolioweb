import React, { useRef, useState, useEffect } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eraser, Download } from 'lucide-react';
import * as ort from 'onnxruntime-web';

const DrawingCanvas = () => {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [prediction, setPrediction] = useState(null);
  const [session, setSession] = useState(null);
  const [logits, setLogits] = useState(null);
  const [canvasSize, setCanvasSize] = useState({ width: 400, height: 400 });
  
  useEffect(() => {
    const updateCanvasSize = () => {
      const screenWidth = window.innerWidth;
      const newSize = screenWidth < 500 ? screenWidth - 40 : 400; // 20px margin on each side for small screens
      setCanvasSize({ width: newSize, height: newSize });
    };

    // Set initial canvas size and add resize listener
    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);

    return () => window.removeEventListener('resize', updateCanvasSize);
  }, []);

  useEffect(() => {
    const initModel = async () => {
      try {
        // actual model path
        const modelPath = `${import.meta.env.BASE_URL}/models/quickdraw_cnn_new.onnx`;
        const session = await ort.InferenceSession.create(modelPath);
        setSession(session);
      } catch (error) {
        console.error('Failed to load ONNX model:', error);
      }
    };

    initModel();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 35;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
  }, [canvasSize]);

  const preprocessCanvas = async () => {
    const canvas = canvasRef.current; // Assuming you have a reference to your canvas element
    const ctx = canvas.getContext('2d');

    // Create a new canvas to resize the image to 28x28
    const resizedCanvas = document.createElement('canvas');
    const resizedCtx = resizedCanvas.getContext('2d');
    resizedCanvas.width = 28;
    resizedCanvas.height = 28;

    // Draw the original canvas content onto the resized canvas
    resizedCtx.drawImage(canvas, 0, 0, 28, 28);

    // Get the image data from the resized canvas
    const imgData = resizedCtx.getImageData(0, 0, 28, 28);
    const data = imgData.data; // This is an array of RGBA values

    // Create a Float32Array for normalized grayscale values
    const normalizedData = new Float32Array(28 * 28);

    // Convert to grayscale and normalize
    for (let i = 0; i < data.length; i += 4) {
        // Calculate grayscale value (using average of RGB channels)
        const gray = (data[i] + data[i + 1] + data[i + 2]) / 3; // Average of R, G, B
        // Normalize pixel values to [-1, 1]
        normalizedData[i / 4] = (gray / 255.0) * 2 - 1; // Scale to [-1, 1]
    }

    return normalizedData; // Return the preprocessed data
  };


  const predict = async () => {
    if (!session) return;

    try {
        // Preprocess the canvas drawing
        const inputData = await preprocessCanvas();
        
        // Create an input tensor with shape [1, 1, 28, 28]
        const inputTensor = new ort.Tensor('float32', inputData, [1, 1, 28, 28]);
        const feeds = { input: inputTensor }; // Replace 'input' with your actual model's input name

        // Run the model
        const outputMap = await session.run(feeds);
        const output = outputMap[Object.keys(outputMap)[0]]; // Get the first output tensor

        // Assuming the model returns an array of probabilities for each class
        const predictions = output.data;

        // Process output: Find the class with the highest probability
        const predictedClassIndex = Array.from(predictions).indexOf(Math.max(...predictions));
        
        // Assuming you have a way to map predicted class index to class names
        const classNames = ["helicopter", "spoon", "bird"]; // Replace with your actual class names
        const predictedClassName = classNames[predictedClassIndex];

        console.log(predictions)

        // Set the prediction state to display
        setPrediction(`Predicted class: ${predictedClassName}`);
        setLogits(predictions);
    } catch (error) {
        console.error('Prediction failed:', error);
        setPrediction("Error during prediction");
        setLogits(null);
    }
  };


  const startDrawing = (e) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    const x = (e.touches ? e.touches[0].clientX : e.clientX) - rect.left;
    const y = (e.touches ? e.touches[0].clientY : e.clientY) - rect.top;
    
    ctx.beginPath();
    ctx.moveTo(x, y);
    setIsDrawing(true);
  };

  const draw = (e) => {
    if (!isDrawing) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    const x = (e.touches ? e.touches[0].clientX : e.clientX) - rect.left;
    const y = (e.touches ? e.touches[0].clientY : e.clientY) - rect.top;
    
    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const stopDrawing = () => {
    if (isDrawing) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      ctx.closePath();
      setIsDrawing(false);
      
      // Make prediction when drawing stops
      predict();
    }
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setPrediction(null);
    setLogits(null);
  };

  const downloadDrawing = () => {
    const canvas = canvasRef.current;
    const dataURL = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.download = 'drawing.png';
    link.href = dataURL;
    link.click();
  };

  return (
    <div className="ff-box p-4 inline-block">
      <div className="space-y-4">
        <div className="relative">
          <canvas
            ref={canvasRef}
            width={canvasSize.width}
            height={canvasSize.height}
            className="bg-[#2b2118] cursor-crosshair touch-none"
            style={{ boxShadow: '0 0 0 1px #2b2118' }}
            onMouseDown={startDrawing}
            onMouseMove={draw}
            onMouseUp={stopDrawing}
            onMouseOut={stopDrawing}
            onTouchStart={startDrawing}
            onTouchMove={draw}
            onTouchEnd={stopDrawing}
            onTouchCancel={stopDrawing}
          />
          {prediction && (
            <div className="absolute top-3 left-3">
              <span className="ff-stamp ff-stamp-farflung text-[16px]">
                {prediction}
              </span>
            </div>
          )}
        </div>
        <div className="flex justify-between gap-3">
          <button onClick={clearCanvas} className="ff-go-secondary">
            <Eraser className="mr-2 h-4 w-4" />
            Clear
          </button>
          <button onClick={downloadDrawing} className="ff-go">
            <Download className="mr-2 h-4 w-4" />
            Save
          </button>
        </div>
        {logits && (
          <div className="mt-4 p-3 bg-[#f4e9cd]" style={{ boxShadow: '0 0 0 1px #2b2118' }}>
            <h3 className="font-pixel uppercase tracking-[0.14em] text-[16px] text-[#b8322b] mb-1">
              Logits:
            </h3>
            <ul className="font-pixel text-[18px] text-[#2b2118] space-y-0.5">
              {Array.from(logits).map((logit, index) => (
                <li key={index}>
                  Class {index}: {logit.toFixed(4)}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default DrawingCanvas;