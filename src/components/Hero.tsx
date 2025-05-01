import React, { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import LiveCounter from './LiveCounter';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      
      // Parallax effect
      const scrollValue = window.scrollY;
      const opacity = Math.max(1 - scrollValue / 700, 0);
      const translateY = scrollValue * 0.3;
      
      heroRef.current.style.opacity = opacity.toString();
      heroRef.current.style.transform = `translateY(${translateY}px)`;
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToContent = () => {
    const statisticsSection = document.getElementById('statistics');
    if (statisticsSection) {
      statisticsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-950 via-purple-900 to-indigo-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, index) => (
          <div 
            key={index}
            className="absolute rounded-full bg-indigo-600 opacity-10 animate-pulse"
            style={{
              width: `${Math.random() * 300 + 50}px`,
              height: `${Math.random() * 300 + 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 8 + 4}s`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>
      
      {/* Main hero content */}
      <div 
        ref={heroRef}
        className="container mx-auto px-4 md:px-6 z-10 text-center"
      >
        <h1 className="font-bold text-4xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight">
          <span className="block">Behind The</span>
          <span className="text-indigo-400">Digital Mask</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
          An immersive journey into the reality of cyberbullying and how we can all make a difference.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
          <button 
            onClick={scrollToContent}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            Begin Experience
          </button>
          
          <a 
            href="#resources" 
            className="bg-transparent hover:bg-purple-800 text-indigo-300 hover:text-white font-medium py-3 px-8 border border-indigo-600 rounded-full transition-all duration-300"
          >
            Find Help
          </a>
        </div>
        
        <div className="backdrop-blur-sm bg-indigo-900 bg-opacity-30 p-6 rounded-xl">
          <p className="text-gray-300 mb-2">Estimated global cyberbullying incidents today:</p>
          <LiveCounter />
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
        onClick={scrollToContent}
      >
        <ChevronDown className="h-10 w-10 text-indigo-400" />
      </div>
    </div>
  );
};

export default Hero;