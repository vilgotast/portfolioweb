import React from 'react';
import { Card } from "@/components/ui/card";

const ModelArchitecture = () => {
  return (
    <Card className="p-6 bg-gray-800 border-gray-700">
      <h3 className="text-xl font-semibold mb-4 text-blue-300">Model Architecture</h3>
      <div className="overflow-x-auto">
        <div className="flex items-center space-x-4 min-w-[600px] p-4">
          {/* Input Layer */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-blue-500/20 border border-blue-500 rounded flex items-center justify-center">
              <span className="text-xs text-center">Input<br/>28x28x1</span>
            </div>
            <span className="text-xs mt-2">Input</span>
          </div>
          
          {/* Conv1 + ReLU + Pool */}
          <div className="flex flex-col items-center">
            <div className="relative w-16 h-16 bg-green-500/20 border border-green-500 rounded flex items-center justify-center">
              <span className="text-xs text-center">Conv1<br/>3x3x32</span>
              <div className="absolute -bottom-3 w-12 h-3 bg-purple-500/20 border border-purple-500 rounded-sm">
                <span className="text-[10px]">ReLU+Pool</span>
              </div>
            </div>
            <span className="text-xs mt-4">14x14x32</span>
          </div>

          {/* Conv2 + ReLU + Pool */}
          <div className="flex flex-col items-center">
            <div className="relative w-16 h-16 bg-green-500/20 border border-green-500 rounded flex items-center justify-center">
              <span className="text-xs text-center">Conv2<br/>3x3x64</span>
              <div className="absolute -bottom-3 w-12 h-3 bg-purple-500/20 border border-purple-500 rounded-sm">
                <span className="text-[10px]">ReLU+Pool</span>
              </div>
            </div>
            <span className="text-xs mt-4">7x7x64</span>
          </div>

          {/* Flatten */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-yellow-500/20 border border-yellow-500 rounded flex items-center justify-center">
              <span className="text-xs text-center">Flatten<br/>3136</span>
            </div>
            <span className="text-xs mt-2">Flatten</span>
          </div>

          {/* FC1 + ReLU */}
          <div className="flex flex-col items-center">
            <div className="relative w-16 h-16 bg-red-500/20 border border-red-500 rounded flex items-center justify-center">
              <span className="text-xs text-center">FC1<br/>128</span>
              <div className="absolute -bottom-3 w-12 h-3 bg-purple-500/20 border border-purple-500 rounded-sm">
                <span className="text-[10px]">ReLU</span>
              </div>
            </div>
            <span className="text-xs mt-4">Dense 128</span>
          </div>

          {/* FC2 + Softmax */}
          <div className="flex flex-col items-center">
            <div className="relative w-16 h-16 bg-red-500/20 border border-red-500 rounded flex items-center justify-center">
              <span className="text-xs text-center">FC2<br/>3</span>
              <div className="absolute -bottom-3 w-12 h-3 bg-orange-500/20 border border-orange-500 rounded-sm">
                <span className="text-[10px]">Softmax</span>
              </div>
            </div>
            <span className="text-xs mt-4">Output</span>
          </div>
        </div>
      </div>
      <div className="mt-4 text-sm text-gray-400">
        <p>The model consists of:</p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Two convolutional layers (32 and 64 filters) with ReLU activation and max pooling</li>
          <li>Flatten layer to convert 2D features to 1D</li>
          <li>Two fully connected layers (128 neurons and 3 output classes)</li>
          <li>Final softmax activation for class probabilities</li>
        </ul>
      </div>
    </Card>
  );
};

export default ModelArchitecture;