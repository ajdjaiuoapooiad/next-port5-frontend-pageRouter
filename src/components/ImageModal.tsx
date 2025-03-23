// ImageModal.tsx
import { Screenshot } from '@/utils/types';
import React from 'react';


interface ImageModalProps {
  selectedImage: Screenshot | null;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ selectedImage, onClose }) => {
  if (!selectedImage) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-90 flex items-center justify-center">
      <div className="relative">
        <img
          src={selectedImage.src}
          alt={selectedImage.alt}
          className="rounded-lg max-w-full max-h-screen mb-4"
        />
        <p className="text-center text-white">{selectedImage.description}</p>
        <button
          className="absolute top-4 right-4 bg-gray-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl hover:bg-gray-700 transition-colors duration-300"
          onClick={onClose}
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default ImageModal;