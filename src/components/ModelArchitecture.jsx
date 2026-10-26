import React from 'react';
import { ArrowRight, ArrowDown } from 'lucide-react';

const ModelArchitecture = () => {
  return (
    <div className="ff-box p-5">
      <h3 className="ff-section-heading mb-4">Model Architecture</h3>
      <div className="overflow-x-auto">
        <div className="py-2">
          {/* Desktop Layout (Horizontal) */}
          <div className="hidden md:flex items-center justify-between gap-2 min-w-[820px]">
            <div className="flex-shrink-0 w-44 bg-[#f4e9cd] p-3.5" style={{ boxShadow: '0 0 0 1px #2b2118' }}>
              <span className="ff-stamp ff-stamp-common mb-2">Stage I · Input</span>
              <div className="text-[16px] text-[#2b2118] mt-1">
                <p>28 × 28 px</p>
                <p>Grayscale</p>
                <p>1 Channel</p>
              </div>
            </div>

            <ArrowRight className="text-[#b8322b] flex-shrink-0" />

            <div className="flex-shrink-0 w-60 bg-[#f4e9cd] p-3.5" style={{ boxShadow: '0 0 0 1px #2b2118' }}>
              <span className="ff-stamp ff-stamp-uncommon mb-2">Stage II · Features</span>
              <div className="space-y-2 text-[15px] text-[#2b2118] mt-1">
                <div>
                  <p className="font-semibold">Conv1 + ReLU + MaxPool</p>
                  <p className="text-[#6a583f]">32 filters (3×3) → 14×14×32</p>
                </div>
                <div>
                  <p className="font-semibold">Conv2 + ReLU + MaxPool</p>
                  <p className="text-[#6a583f]">64 filters (3×3) → 7×7×64</p>
                </div>
              </div>
            </div>

            <ArrowRight className="text-[#b8322b] flex-shrink-0" />

            <div className="flex-shrink-0 w-40 bg-[#f4e9cd] p-3.5" style={{ boxShadow: '0 0 0 1px #2b2118' }}>
              <span className="ff-stamp ff-stamp-rare mb-2">Stage III · Flatten</span>
              <div className="text-[16px] text-[#2b2118] mt-1">
                <p>7 × 7 × 64</p>
                <p className="text-[#b8322b]">↓</p>
                <p>3,136 features</p>
              </div>
            </div>

            <ArrowRight className="text-[#b8322b] flex-shrink-0" />

            <div className="flex-shrink-0 w-44 bg-[#f4e9cd] p-3.5" style={{ boxShadow: '0 0 0 1px #2b2118' }}>
              <span className="ff-stamp ff-stamp-elusive mb-2">Stage IV · Output</span>
              <div className="text-[16px] text-[#2b2118] mt-1">
                <p>Dense (128) + ReLU</p>
                <p>Dense (3)</p>
                <p>Softmax</p>
              </div>
            </div>
          </div>

          {/* Mobile Layout (Vertical) */}
          <div className="md:hidden flex flex-col items-center space-y-3">
            <div className="w-full bg-[#f4e9cd] p-3.5" style={{ boxShadow: '0 0 0 1px #2b2118' }}>
              <span className="ff-stamp ff-stamp-common mb-1">Stage I · Input</span>
              <p className="text-[16px] text-[#2b2118] mt-1">28 × 28 Grayscale (1 Channel)</p>
            </div>
            <ArrowDown className="text-[#b8322b]" />
            <div className="w-full bg-[#f4e9cd] p-3.5" style={{ boxShadow: '0 0 0 1px #2b2118' }}>
              <span className="ff-stamp ff-stamp-uncommon mb-1">Stage II · Feature Extraction</span>
              <p className="text-[16px] text-[#2b2118] mt-1">Conv1 (32) → Conv2 (64) + ReLU + MaxPool</p>
            </div>
            <ArrowDown className="text-[#b8322b]" />
            <div className="w-full bg-[#f4e9cd] p-3.5" style={{ boxShadow: '0 0 0 1px #2b2118' }}>
              <span className="ff-stamp ff-stamp-rare mb-1">Stage III · Flatten</span>
              <p className="text-[16px] text-[#2b2118] mt-1">7 × 7 × 64 → 3,136 features</p>
            </div>
            <ArrowDown className="text-[#b8322b]" />
            <div className="w-full bg-[#f4e9cd] p-3.5" style={{ boxShadow: '0 0 0 1px #2b2118' }}>
              <span className="ff-stamp ff-stamp-elusive mb-1">Stage IV · Classification</span>
              <p className="text-[16px] text-[#2b2118] mt-1">Dense (128) → Dense (3) + Softmax</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5 pt-4 border-t border-dashed border-[#b9a67e] text-[16.5px] text-[#6a583f]">
        <p className="font-pixel uppercase tracking-[0.14em] text-[16px] text-[#b8322b] mb-1">Architecture Overview</p>
        <ul className="list-disc list-inside space-y-1 text-[#2b2118]">
          <li>Input layer accepts 28×28 grayscale images</li>
          <li>Two convolutional blocks with ReLU activation and max pooling extract features</li>
          <li>Flatten layer converts spatial features to a 1D vector</li>
          <li>Two dense layers with ReLU and Softmax produce final class probabilities</li>
        </ul>
      </div>
    </div>
  );
};

export default ModelArchitecture;