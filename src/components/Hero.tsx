import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-scroll';

const slides = [
  {
    url: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
    title: "Expert Carpentry & Construction",
    description: "Transforming spaces with precision craftsmanship and exceptional attention to detail"
  },
  {
    url: "https://images.unsplash.com/photo-1600573472591-ee6c563aaec9?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
    title: "Custom Kitchen Design",
    description: "Beautiful, functional kitchens tailored to your lifestyle"
  },
  {
    url: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
    title: "Home Extensions",
    description: "Expand your living space with expertly crafted extensions"
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isImageLoaded, setIsImageLoaded] = useState<boolean[]>(slides.map(() => false));

  useEffect(() => {
    slides.forEach((slide, index) => {
      const img = new Image();
      img.src = slide.url;
      img.onload = () => {
        setIsImageLoaded(prev => {
          const newState = [...prev];
          newState[index] = true;
          return newState;
        });
      };
    });
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') goToPrevious();
      if (e.key === 'ArrowRight') goToNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section id="home" className="relative h-screen">
      <div className="absolute inset-0 overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div
              className={`absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 transition-transform duration-[2000ms] ${
                isImageLoaded[index] ? '' : 'blur-sm'
              }`}
              style={{
                backgroundImage: `url('${slide.url}')`,
              }}
            />
            <div className="absolute inset-0 bg-black opacity-50" />
          </div>
        ))}
      </div>

      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 rounded-full p-2 backdrop-blur-sm transition-all duration-200 z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 rounded-full p-2 backdrop-blur-sm transition-all duration-200 z-10"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-200 ${
              index === currentSlide
                ? 'bg-white w-8'
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              {slides[currentSlide].title}
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              {slides[currentSlide].description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="contact"
                smooth={true}
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:text-lg"
              >
                Get a Quote
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link
                to="portfolio"
                smooth={true}
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 md:text-lg"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;