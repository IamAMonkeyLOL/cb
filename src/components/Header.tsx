import React from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Link } from 'react-scroll';

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <div className="text-2xl font-bold text-gray-800">CB Carpentry</div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link 
              to="home" 
              smooth={true} 
              className="text-gray-600 hover:text-gray-900 cursor-pointer transition-colors duration-200"
            >
              Home
            </Link>
            <Link 
              to="services" 
              smooth={true} 
              className="text-gray-600 hover:text-gray-900 cursor-pointer transition-colors duration-200"
            >
              Services
            </Link>
            <Link 
              to="portfolio" 
              smooth={true} 
              className="text-gray-600 hover:text-gray-900 cursor-pointer transition-colors duration-200"
            >
              Portfolio
            </Link>
            <Link 
              to="contact" 
              smooth={true} 
              className="text-gray-600 hover:text-gray-900 cursor-pointer transition-colors duration-200"
            >
              Contact
            </Link>
          </nav>

          {/* Contact Info */}
          <div className="hidden md:flex items-center space-x-6">
            <a 
              href="tel:07940512491" 
              className="flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              <Phone size={20} className="mr-2" />
              <span className="hidden lg:inline">07940 512491</span>
            </a>
            <a 
              href="mailto:CBcarpentry1@hotmail.co.uk" 
              className="flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              <Mail size={20} className="mr-2" />
              <span className="hidden lg:inline">Email Us</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-600 hover:text-gray-900 transition-colors duration-200" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link 
                to="home" 
                smooth={true} 
                className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-200" 
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link 
                to="services" 
                smooth={true} 
                className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-200" 
                onClick={toggleMenu}
              >
                Services
              </Link>
              <Link 
                to="portfolio" 
                smooth={true} 
                className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-200" 
                onClick={toggleMenu}
              >
                Portfolio
              </Link>
              <Link 
                to="contact" 
                smooth={true} 
                className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-200" 
                onClick={toggleMenu}
              >
                Contact
              </Link>
              <div className="border-t border-gray-200 my-2"></div>
              <a 
                href="tel:07940512491" 
                className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-200"
              >
                <Phone size={20} className="inline mr-2" />
                07940 512491
              </a>
              <a 
                href="mailto:CBcarpentry1@hotmail.co.uk" 
                className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-200"
              >
                <Mail size={20} className="inline mr-2" />
                Email Us
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;