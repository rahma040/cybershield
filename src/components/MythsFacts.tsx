import React, { useState, useRef, useEffect } from 'react';
import { Myth } from '../types';
import { mythsData } from '../data/mythsData';

// Component for a single flippable card
const FlipCard: React.FC<{ myth: Myth; index: number }> = ({ myth, index }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);
  
  const toggleFlip = () => {
    setIsFlipped(!isFlipped);
  };
  
  return (
    <div 
      ref={cardRef}
      className={`h-80 opacity-0 translate-y-8 transition-all duration-700 delay-${index * 100} cursor-pointer perspective-1000`}
      onClick={toggleFlip}
    >
      <div 
        className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* Front - Myth */}
        <div 
          className="absolute w-full h-full backface-hidden bg-gradient-to-br from-red-900 to-red-950 rounded-xl p-6 flex flex-col items-center justify-center text-center shadow-xl border border-red-800"
        >
          <h3 className="text-2xl font-bold text-white mb-3">MYTH</h3>
          <p className="text-white text-xl">{myth.myth}</p>
          <p className="text-gray-400 mt-4 text-sm">Click to reveal the truth</p>
        </div>
        
        {/* Back - Fact */}
        <div 
          className="absolute w-full h-full backface-hidden rotate-y-180 bg-gradient-to-br from-green-900 to-green-950 rounded-xl p-6 flex flex-col items-center justify-center text-center shadow-xl border border-green-800"
        >
          <h3 className="text-2xl font-bold text-white mb-3">FACT</h3>
          <p className="text-white text-xl">{myth.fact}</p>
          <p className="text-gray-400 mt-4 text-sm">Click to see the myth</p>
        </div>
      </div>
    </div>
  );
};

const MythsFacts: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  // Add custom styles for 3D transforms
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      .perspective-1000 {
        perspective: 1000px;
      }
      .transform-style-3d {
        transform-style: preserve-3d;
      }
      .backface-hidden {
        backface-visibility: hidden;
      }
      .rotate-y-180 {
        transform: rotateY(180deg);
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);
  
  return (
    <section 
      id="myths" 
      className="py-20 bg-gradient-to-br from-indigo-950 to-purple-950 relative"
    >
      <div 
        ref={sectionRef}
        className="container mx-auto px-4 md:px-6 relative z-10 opacity-0 transition-opacity duration-1000"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Myths vs. Facts
          </h2>
          <p className="text-xl text-indigo-300 max-w-3xl mx-auto">
            Let's debunk common misconceptions about cyberbullying and replace them with the truth.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mythsData.map((myth, index) => (
            <FlipCard key={myth.id} myth={myth} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MythsFacts;