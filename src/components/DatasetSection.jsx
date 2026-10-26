import React from 'react';

const DatasetSection = () => {
  return (
    <div className="ff-box p-5 mt-8">
      <h3 className="ff-section-heading mb-4">About the Dataset</h3>
      <p className="text-[#2b2118] mb-5">
        This model was trained on a subset of the Quick, Draw! dataset, focusing on three classes: helicopters, spoons, and birds.
        The Quick, Draw! dataset was created through a fun drawing game where players had to draw objects in under 20 seconds.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
        <div className="bg-[#f4e9cd] p-3.5 text-center" style={{ boxShadow: '0 0 0 1px #2b2118' }}>
          <img
            src={`${import.meta.env.BASE_URL}/images/drawing_recognition/helicopter.png`}
            alt="Example of helicopter drawings"
            className="w-full h-auto mb-2.5"
            style={{ boxShadow: '0 0 0 1px #2b2118' }}
          />
          <span className="ff-stamp ff-stamp-common">Helicopter</span>
        </div>
        <div className="bg-[#f4e9cd] p-3.5 text-center" style={{ boxShadow: '0 0 0 1px #2b2118' }}>
          <img
            src={`${import.meta.env.BASE_URL}/images/drawing_recognition/spoon.png`}
            alt="Example of spoon drawings"
            className="w-full h-auto mb-2.5"
            style={{ boxShadow: '0 0 0 1px #2b2118' }}
          />
          <span className="ff-stamp ff-stamp-uncommon">Spoon</span>
        </div>
        <div className="bg-[#f4e9cd] p-3.5 text-center" style={{ boxShadow: '0 0 0 1px #2b2118' }}>
          <img
            src={`${import.meta.env.BASE_URL}/images/drawing_recognition/bird.png`}
            alt="Example of bird drawings"
            className="w-full h-auto mb-2.5"
            style={{ boxShadow: '0 0 0 1px #2b2118' }}
          />
          <span className="ff-stamp ff-stamp-rare">Bird</span>
        </div>
      </div>

      <p className="text-[#2b2118]">
        Want to try the original Quick, Draw! game?{" "}
        <a
          href="https://quickdraw.withgoogle.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#b8322b] underline underline-offset-4"
        >
          Play it here!
        </a>
      </p>
    </div>
  );
};

export default DatasetSection;