import React from 'react';
import { Card } from "@/components/ui/card";

const DatasetSection = () => {
  return (
    <Card className="p-6 bg-gray-800 border-gray-700 mt-8">
      <h3 className="text-xl font-semibold mb-4 text-blue-300">About the Dataset</h3>
      <p className="text-gray-300 mb-4">
        This model was trained on a subset of the Quick, Draw! dataset, focusing on three classes: helicopters, spoons, and birds. 
        The Quick, Draw! dataset was created through a fun drawing game where players had to draw objects in under 20 seconds.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-gray-700 p-4 rounded-lg">
          <img 
            src={`${import.meta.env.BASE_URL}/images/quickdraw/helicopter.png`} 
            alt="Example of helicopter drawing" 
            className="w-full h-auto mb-2"
          />
          <p className="text-center text-gray-300">Helicopter</p>
        </div>
        <div className="bg-gray-700 p-4 rounded-lg">
          <img 
            src={`${import.meta.env.BASE_URL}/images/quickdraw/spoon.png`} 
            alt="Example of spoon drawing" 
            className="w-full h-auto mb-2"
          />
          <p className="text-center text-gray-300">Spoon</p>
        </div>
        <div className="bg-gray-700 p-4 rounded-lg">
          <img 
            src={`${import.meta.env.BASE_URL}/images/quickdraw/bird.png`} 
            alt="Example of bird drawing" 
            className="w-full h-auto mb-2"
          />
          <p className="text-center text-gray-300">Bird</p>
        </div>
      </div>
      
      <p className="text-gray-300">
        Want to try the original Quick, Draw! game? {" "}
        <a 
          href="https://quickdraw.withgoogle.com/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-blue-400 hover:text-blue-300 underline"
        >
          Play it here!
        </a>
      </p>
    </Card>
  );
};

export default DatasetSection;