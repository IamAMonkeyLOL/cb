import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';

const portfolioItems = [
  {
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    title: 'Custom Kitchen Cabinets',
    category: 'Kitchen'
  },
  {
    image: 'https://i.ibb.co/6JNynHrz/Whats-App-Image-2024-11-01-at-17-50-16.jpg',
    title: 'Home Extension',
    category: 'Construction'
  },
  {
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    title: 'Built-in Wardrobes',
    category: 'Custom Furniture'
  },
  {
    image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    title: 'Bathroom Renovation',
    category: 'Renovation'
  },
  {
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    title: 'Wooden Deck',
    category: 'Outdoor'
  },
  {
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    title: 'Living Room Shelving',
    category: 'Interior'
  }
];

const Portfolio = () => {
  const navigate = useNavigate();
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 transform transition-all duration-500 hover:scale-105">
            Our Portfolio
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            A showcase of our finest work and craftsmanship
          </p>
          <button
            onClick={() => navigate('/gallery')}
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
          >
            View Full Gallery
            <ExternalLink className="ml-2 h-5 w-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-105"
              onMouseEnter={() => setHoveredItem(index)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover transition-transform duration-500 transform hover:scale-110"
              />
              <div 
                className={`absolute inset-0 bg-gradient-to-t from-black/75 to-transparent transition-opacity duration-300 ${
                  hoveredItem === index ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-300">
                  <h3 className="text-xl font-semibold text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-300">{item.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;