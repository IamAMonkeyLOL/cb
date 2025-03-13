import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">CB Carpentry</h3>
            <p className="text-gray-400">
              Expert carpentry and construction services with over 20 years of experience.
              Quality craftsmanship and attention to detail in every project.
            </p>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Info</h4>
            <p className="text-gray-400 mb-2">Phone: 07940 512491</p>
            <p className="text-gray-400 mb-2">Email: CBcarpentry1@hotmail.co.uk</p>
            <p className="text-gray-400">Hampshire, England</p>
            <p className="text-gray-400 mt-2">Hours: Flexible and negotiable</p>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} CB Carpentry. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;