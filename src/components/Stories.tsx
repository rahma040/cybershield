import React, { useState, useRef, useEffect } from 'react';
import { ArrowLeft, ArrowRight, AlertTriangle } from 'lucide-react';
import { Story } from '../types';
import { storiesData } from '../data/storiesData';

// Color mappings for different perspectives
const perspectiveColors = {
  victim: {
    bg: 'bg-blue-900',
    border: 'border-blue-700',
    text: 'text-blue-300'
  },
  bystander: {
    bg: 'bg-indigo-900',
    border: 'border-indigo-700',
    text: 'text-indigo-300'
  },
  perpetrator: {
    bg: 'bg-purple-900',
    border: 'border-purple-700',
    text: 'text-purple-300'
  }
};

const Stories: React.FC = () => {
  const [activeStory, setActiveStory] = useState<Story>(storiesData[0]);
  const [showTriggerWarning, setShowTriggerWarning] = useState(false);
  const [animationDirection, setAnimationDirection] = useState<'left' | 'right' | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // Show trigger warning if story has one
  useEffect(() => {
    if (activeStory.trigger) {
      setShowTriggerWarning(true);
      const timer = setTimeout(() => {
        setShowTriggerWarning(false);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [activeStory]);
  
  // Scroll animation for section
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
  
  const nextStory = () => {
    setAnimationDirection('right');
    setTimeout(() => {
      const currentIndex = storiesData.findIndex(s => s.id === activeStory.id);
      const nextIndex = (currentIndex + 1) % storiesData.length;
      setActiveStory(storiesData[nextIndex]);
      setAnimationDirection(null);
    }, 300);
  };
  
  const prevStory = () => {
    setAnimationDirection('left');
    setTimeout(() => {
      const currentIndex = storiesData.findIndex(s => s.id === activeStory.id);
      const prevIndex = currentIndex === 0 ? storiesData.length - 1 : currentIndex - 1;
      setActiveStory(storiesData[prevIndex]);
      setAnimationDirection(null);
    }, 300);
  };
  
  const colors = perspectiveColors[activeStory.perspective];
  
  return (
    <section 
      id="stories" 
      className="py-20 bg-gradient-to-br from-purple-950 via-indigo-950 to-purple-950 relative"
    >
      <div 
        ref={sectionRef}
        className="container mx-auto px-4 md:px-6 relative z-10 opacity-0 transition-opacity duration-1000"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Real Stories, Real Impact
          </h2>
          <p className="text-xl text-indigo-300 max-w-3xl mx-auto">
            Experience cyberbullying from different perspectives. These stories help illustrate the reality behind digital harassment.
          </p>
        </div>
        
        {/* Story Navigation */}
        <div className="flex justify-center mb-8 space-x-2">
          {storiesData.map((story) => (
            <button
              key={story.id}
              onClick={() => setActiveStory(story)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                story.id === activeStory.id
                  ? 'bg-indigo-400 scale-125'
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
              aria-label={`Story ${story.id}`}
            />
          ))}
        </div>
        
        {/* Story Card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Trigger Warning */}
            {showTriggerWarning && (
              <div className="absolute top-0 left-0 right-0 transform -translate-y-full mb-4 bg-yellow-800 text-yellow-100 p-3 rounded-t-md flex items-center animate-fade-in">
                <AlertTriangle className="w-5 h-5 mr-2" />
                <span>Trigger Warning: {activeStory.trigger}</span>
              </div>
            )}
            
            <div 
              className={`${colors.bg} ${colors.border} border-2 rounded-xl p-8 shadow-2xl transition-all duration-300 ${
                animationDirection === 'right' 
                  ? 'transform translate-x-full opacity-0' 
                  : animationDirection === 'left'
                  ? 'transform -translate-x-full opacity-0'
                  : 'transform translate-x-0 opacity-100'
              }`}
            >
              <div className="flex items-center mb-6">
                <div className={`${colors.text} font-semibold rounded-full px-4 py-1 text-sm uppercase tracking-wider border border-current`}>
                  {activeStory.perspective} Perspective
                </div>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{activeStory.title}</h3>
              
              <div className="mb-6 text-gray-300 leading-relaxed">
                <p className="mb-4">{activeStory.content}</p>
              </div>
              
              <div className="border-t border-gray-700 pt-4 mt-4">
                <h4 className="text-xl font-semibold text-white mb-2">Outcome</h4>
                <p className="text-gray-300">{activeStory.outcome}</p>
              </div>
              
              <div className="mt-8 flex justify-between">
                <button
                  onClick={prevStory}
                  className="flex items-center text-gray-400 hover:text-white transition-colors"
                >
                  <ArrowLeft className="w-5 h-5 mr-1" />
                  Previous Story
                </button>
                <button
                  onClick={nextStory}
                  className="flex items-center text-gray-400 hover:text-white transition-colors"
                >
                  Next Story
                  <ArrowRight className="w-5 h-5 ml-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stories;