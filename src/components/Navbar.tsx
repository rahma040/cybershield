import React, { useState, useEffect } from 'react';
import { Menu, X, Shield, Heart } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-indigo-950 bg-opacity-90 backdrop-blur-sm shadow-lg py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <div className="flex items-center">
          <Shield className="text-indigo-400 h-8 w-8 mr-2" />
          <span className="font-bold text-xl text-white">CyberShield</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <a href="#statistics" className="text-gray-300 hover:text-indigo-400 transition-colors">
            Statistics
          </a>
          <a href="#stories" className="text-gray-300 hover:text-indigo-400 transition-colors">
            Stories
          </a>
          <a href="#myths" className="text-gray-300 hover:text-indigo-400 transition-colors">
            Myths vs Facts
          </a>
          <a href="#resources" className="text-gray-300 hover:text-indigo-400 transition-colors">
            Resources
          </a>
          <a 
            href="#support" 
            className="flex items-center bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-full transition-colors"
          >
            <Heart className="h-4 w-4 mr-1" />
            <span>Show Support</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-full left-0 w-full bg-indigo-950 bg-opacity-95 backdrop-blur-md shadow-lg transition-all duration-300 md:hidden ${
          isOpen ? 'max-h-screen py-4' : 'max-h-0 overflow-hidden'
        }`}
      >
        <div className="container mx-auto px-4 flex flex-col space-y-4 pb-4">
          <a
            href="#statistics"
            className="text-gray-300 hover:text-white py-2 border-b border-indigo-900"
            onClick={() => setIsOpen(false)}
          >
            Statistics
          </a>
          <a
            href="#stories"
            className="text-gray-300 hover:text-white py-2 border-b border-indigo-900"
            onClick={() => setIsOpen(false)}
          >
            Stories
          </a>
          <a
            href="#myths"
            className="text-gray-300 hover:text-white py-2 border-b border-indigo-900"
            onClick={() => setIsOpen(false)}
          >
            Myths vs Facts
          </a>
          <a
            href="#resources"
            className="text-gray-300 hover:text-white py-2 border-b border-indigo-900"
            onClick={() => setIsOpen(false)}
          >
            Resources
          </a>
          <a
            href="#support"
            className="flex items-center justify-center bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-full transition-colors"
            onClick={() => setIsOpen(false)}
          >
            <Heart className="h-4 w-4 mr-1" />
            <span>Show Support</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;