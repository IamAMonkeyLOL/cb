import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
      
      // Reset success message after 3 seconds
      setTimeout(() => setSubmitted(false), 3000);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 transform transition-all duration-500 hover:scale-105">
            Contact Us
          </h2>
          <p className="text-xl text-gray-600">
            Get in touch for a free quote or to discuss your project
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4 transform transition-all duration-300 hover:translate-x-2">
              <Phone className="w-6 h-6 text-blue-600 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
                <p className="text-gray-600">
                  <a href="tel:07940512491" className="hover:text-blue-600 transition-colors">
                    07940 512491
                  </a>
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 transform transition-all duration-300 hover:translate-x-2">
              <Mail className="w-6 h-6 text-blue-600 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                <p className="text-gray-600">
                  <a href="mailto:CBcarpentry1@hotmail.co.uk" className="hover:text-blue-600 transition-colors">
                    CBcarpentry1@hotmail.co.uk
                  </a>
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 transform transition-all duration-300 hover:translate-x-2">
              <MapPin className="w-6 h-6 text-blue-600 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Service Area</h3>
                <p className="text-gray-600">
                  Hampshire, England
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 transform transition-all duration-300 hover:translate-x-2">
              <Clock className="w-6 h-6 text-blue-600 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Working Hours</h3>
                <p className="text-gray-600">
                  Flexible and negotiable to best accommodate your needs
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8 transform transition-all duration-300 hover:shadow-xl">
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-blue-600 text-white py-3 px-6 rounded-md transition-all duration-300 transform hover:bg-blue-700 hover:scale-105 ${
                isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>

            {submitted && (
              <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-md text-center animate-fade-in">
                Thank you for your message! We will contact you soon.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;