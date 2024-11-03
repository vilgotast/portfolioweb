import React from 'react';
import { Card } from "@/components/ui/card";
import { ArrowRight } from 'lucide-react';

const ModelArchitecture = () => {
  return (
    <Card className="p-6 bg-gray-800 border-gray-700">
      <h3 className="text-xl font-semibold mb-4 text-blue-300">Model Architecture</h3>
      <div className="overflow-x-auto">
        <div className="flex flex-col space-y-6 min-w-[900px] p-4">
          {/* Layer Groups */}
          <div className="flex items-center justify-between gap-2">
            {/* Input Processing */}
            <div className="flex-shrink-0 w-48">
              <div className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-lg p-4 border border-blue-500">
                <h4 className="text-blue-300 font-semibold mb-2">Input</h4>
                <div className="text-sm text-gray-300">
                  <p>28 x 28</p>
                  <p>Grayscale</p>
                  <p>1 Channel</p>
                </div>
              </div>
            </div>

            {/* Arrow between Input and Feature Extraction */}
            <ArrowRight className="text-blue-400 flex-shrink-0" />

            {/* Feature Extraction */}
            <div className="flex-shrink-0 w-64">
              <div className="bg-gradient-to-r from-green-500/20 to-green-600/20 rounded-lg p-4 border border-green-500">
                <h4 className="text-green-300 font-semibold mb-2">Feature Extraction</h4>
                <div className="space-y-3">
                  <div className="text-sm text-gray-300">
                    <p className="font-medium">Conv1 + ReLU + MaxPool</p>
                    <p>32 filters (3x3)</p>
                    <p>Output: 14x14x32</p>
                  </div>
                  <div className="text-sm text-gray-300">
                    <p className="font-medium">Conv2 + ReLU + MaxPool</p>
                    <p>64 filters (3x3)</p>
                    <p>Output: 7x7x64</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Arrow between Feature Extraction and Flatten */}
            <ArrowRight className="text-green-400 flex-shrink-0" />

            {/* Flatten */}
            <div className="flex-shrink-0 w-48">
              <div className="bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 rounded-lg p-4 border border-yellow-500">
                <h4 className="text-yellow-300 font-semibold mb-2">Flatten</h4>
                <div className="text-sm text-gray-300">
                  <p>7 x 7 x 64</p>
                  <p>↓</p>
                  <p>3,136 features</p>
                </div>
              </div>
            </div>

            {/* Arrow between Flatten and Classification */}
            <ArrowRight className="text-yellow-400 flex-shrink-0" />

            {/* Classification */}
            <div className="flex-shrink-0 w-48">
              <div className="bg-gradient-to-r from-purple-500/20 to-purple-600/20 rounded-lg p-4 border border-purple-500">
                <h4 className="text-purple-300 font-semibold mb-2">Classification</h4>
                <div className="text-sm text-gray-300">
                  <p>Dense (128)</p>
                  <p>ReLU</p>
                  <p>Dense (3)</p>
                  <p>Softmax</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 text-sm text-gray-400">
        <p className="font-medium mb-2">Architecture Overview:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Input layer accepts 28x28 grayscale images</li>
          <li>Two convolutional blocks with ReLU activation and max pooling extract features</li>
          <li>Flatten layer converts spatial features to a 1D vector</li>
          <li>Two dense layers with ReLU and Softmax produce final class probabilities</li>
        </ul>
      </div>
    </Card>
  );
};

export default ModelArchitecture;