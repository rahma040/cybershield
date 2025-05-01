import React from 'react';
import { Heart, Shield, Mail, ExternalLink, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-indigo-950 border-t border-indigo-900">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Shield className="text-indigo-400 h-8 w-8 mr-2" />
              <span className="font-bold text-xl text-white">CyberShield</span>
            </div>
            <p className="text-gray-400 mb-6">
              An immersive experience to raise awareness and promote action against cyberbullying.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-indigo-400 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-indigo-400 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#statistics" className="text-gray-400 hover:text-indigo-400 transition-colors">
                  Statistics
                </a>
              </li>
              <li>
                <a href="#stories" className="text-gray-400 hover:text-indigo-400 transition-colors">
                  Real Stories
                </a>
              </li>
              <li>
                <a href="#myths" className="text-gray-400 hover:text-indigo-400 transition-colors">
                  Myths vs. Facts
                </a>
              </li>
              <li>
                <a href="#quiz" className="text-gray-400 hover:text-indigo-400 transition-colors">
                  What Would You Do?
                </a>
              </li>
              <li>
                <a href="#resources" className="text-gray-400 hover:text-indigo-400 transition-colors">
                  Resources
                </a>
              </li>
              <li>
                <a href="#support" className="text-gray-400 hover:text-indigo-400 transition-colors">
                  Wall of Support
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">External Resources</h3>
            <ul className="space-y-3">
              <li>
                <a href="https://www.stopbullying.gov/" className="flex items-center text-gray-400 hover:text-indigo-400 transition-colors" target="_blank" rel="noopener noreferrer">
                  <span>StopBullying.gov</span>
                  <ExternalLink size={14} className="ml-1" />
                </a>
              </li>
              <li>
                <a href="https://cyberbullying.org/" className="flex items-center text-gray-400 hover:text-indigo-400 transition-colors" target="_blank" rel="noopener noreferrer">
                  <span>Cyberbullying Research Center</span>
                  <ExternalLink size={14} className="ml-1" />
                </a>
              </li>
              <li>
                <a href="https://www.connectsafely.org/" className="flex items-center text-gray-400 hover:text-indigo-400 transition-colors" target="_blank" rel="noopener noreferrer">
                  <span>ConnectSafely</span>
                  <ExternalLink size={14} className="ml-1" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-indigo-900 text-center text-gray-500">
          <p>© 2025 CyberShield. All rights reserved.</p>
          <p className="mt-2 flex items-center justify-center text-sm">
            Made with 
            <Heart className="h-4 w-4 text-pink-500 mx-1" />
            to foster a safer digital world
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;