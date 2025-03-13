import React, { useState } from 'react';
import { Home, PenTool as Tools, Hammer, Ruler, PaintBucket, Wrench } from 'lucide-react';

const services = [
  {
    icon: <Home className="w-12 h-12 text-blue-600" />,
    title: 'Custom Carpentry',
    description: 'Bespoke furniture and fittings tailored to your specific needs and preferences.'
  },
  {
    icon: <Tools className="w-12 h-12 text-blue-600" />,
    title: 'Home Renovations',
    description: 'Complete home renovation services from planning to execution.'
  },
  {
    icon: <Hammer className="w-12 h-12 text-blue-600" />,
    title: 'Construction',
    description: 'New builds, extensions, and structural modifications.'
  },
  {
    icon: <Ruler className="w-12 h-12 text-blue-600" />,
    title: 'Kitchen Fitting',
    description: 'Expert kitchen installation and customization services.'
  },
  {
    icon: <PaintBucket className="w-12 h-12 text-blue-600" />,
    title: 'Interior Finishing',
    description: 'High-quality interior woodwork and finishing touches.'
  },
  {
    icon: <Wrench className="w-12 h-12 text-blue-600" />,
    title: 'Maintenance',
    description: 'Regular maintenance and repair services for all wooden structures.'
  }
];

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 transform transition-all duration-500 hover:scale-105">
            Our Services
          </h2>
          <p className="text-xl text-gray-600">
            Comprehensive carpentry and construction solutions for all your needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg p-8 shadow-lg transition-all duration-300 transform ${
                hoveredIndex === index ? 'scale-105 shadow-xl' : ''
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className={`mb-4 transition-transform duration-300 ${
                hoveredIndex === index ? 'scale-110' : ''
              }`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;