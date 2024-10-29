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

  useEffect(() => {
    const initModel = async () => {
      try {
        // TODO: Replace with your actual model path
        const modelPath = '/models/drawing_recognition.onnx';
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
    ctx.lineWidth = 3;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
  }, []);

  const preprocessCanvas = async () => {
    const canvas = canvasRef.current;
    // TODO: Implement preprocessing according to your model's requirements
    // Example preprocessing steps:
    // 1. Resize to match model input size
    // 2. Convert to grayscale if needed
    // 3. Normalize pixel values
    // 4. Convert to tensor format
    return new Float32Array(/* your preprocessed data */);
  };

  const predict = async () => {
    if (!session) return;

    try {
      const inputData = await preprocessCanvas();
      // TODO: Replace with your model's input name and shape
      const inputTensor = new ort.Tensor('float32', inputData, [1, 1, 28, 28]);
      const feeds = { input: inputTensor };
      
      const outputMap = await session.run(feeds);
      const output = outputMap[Object.keys(outputMap)[0]];
      // TODO: Process output according to your model's format
      setPrediction("Predicted class: " + output.data[0]);
    } catch (error) {
      console.error('Prediction failed:', error);
      setPrediction("Error during prediction");
    }
  };

  const startDrawing = (e) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    ctx.beginPath();
    ctx.moveTo(x, y);
    setIsDrawing(true);
  };

  const draw = (e) => {
    if (!isDrawing) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
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
    <Card className="p-4 bg-gray-800 border-gray-700">
      <div className="space-y-4">
        <div className="relative">
          <canvas
            ref={canvasRef}
            width={400}
            height={400}
            className="border border-gray-600 rounded-lg bg-gray-900 cursor-crosshair touch-none"
            onMouseDown={startDrawing}
            onMouseMove={draw}
            onMouseUp={stopDrawing}
            onMouseOut={stopDrawing}
          />
          {prediction && (
            <div className="absolute top-4 left-4 bg-gray-800/90 px-3 py-1 rounded-full">
              <p className="text-sm text-blue-300">{prediction}</p>
            </div>
          )}
        </div>
        <div className="flex justify-between">
          <Button variant="outline" onClick={clearCanvas}>
            <Eraser className="mr-2 h-4 w-4" />
            Clear
          </Button>
          <Button variant="outline" onClick={downloadDrawing}>
            <Download className="mr-2 h-4 w-4" />
            Save
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default DrawingCanvas;