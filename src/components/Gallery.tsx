import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const images = [
  {
    url: 'https://i.ibb.co/jkhndC8N/Whats-App-Image-2024-11-01-at-17-44-26-4.jpg',
    title: 'Full House Work'
  },
  {
    url: 'https://i.ibb.co/VYJYqSYd/Whats-App-Image-2024-11-01-at-17-44-18-1.jpg',
    title: 'Kitchen Renovation'
  },
  {
    url: 'https://i.ibb.co/svRmMH60/Whats-App-Image-2024-11-01-at-17-50-20.jpg',
    title: 'Custom Project'
  },
  {
    url: 'https://i.ibb.co/chmptnNV/Whats-App-Image-2024-11-01-at-17-50-09.jpg',
    title: 'Interior Design'
  }
];

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') navigate('/');
      if (e.key === 'ArrowLeft') goToPrevious();
      if (e.key === 'ArrowRight') goToNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [navigate]);

  return (
    <div className="fixed inset-0 bg-black">
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src={images[currentIndex].url}
          alt={images[currentIndex].title}
          className="max-h-screen max-w-full object-contain"
        />
      </div>

      <button
        onClick={() => navigate('/')}
        className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors duration-200"
        aria-label="Close gallery"
      >
        <X size={32} />
      </button>

      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 rounded-full p-3 transition-colors duration-200"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-8 h-8 text-white" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 rounded-full p-3 transition-colors duration-200"
        aria-label="Next image"
      >
        <ChevronRight className="w-8 h-8 text-white" />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-200 ${
              index === currentIndex
                ? 'bg-white w-8'
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white text-lg font-semibold">
        {images[currentIndex].title}
      </div>
    </div>
  );
};

export default Gallery;