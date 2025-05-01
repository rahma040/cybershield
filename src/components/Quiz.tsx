import React, { useState, useEffect, useRef } from 'react';
import { Scenario } from '../types';
import { scenariosData } from '../data/scenariosData';
import { CheckCircle, XCircle, RefreshCw } from 'lucide-react';

const Quiz: React.FC = () => {
  const [currentScenario, setCurrentScenario] = useState<Scenario>(scenariosData[0]);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [scenarioIndex, setScenarioIndex] = useState(0);
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
  
  const handleOptionSelect = (optionId: string) => {
    if (!isSubmitted) {
      setSelectedOption(optionId);
    }
  };
  
  const handleSubmit = () => {
    if (selectedOption) {
      setIsSubmitted(true);
    }
  };
  
  const resetAndNext = () => {
    const nextIndex = (scenarioIndex + 1) % scenariosData.length;
    setScenarioIndex(nextIndex);
    setCurrentScenario(scenariosData[nextIndex]);
    setSelectedOption(null);
    setIsSubmitted(false);
  };
  
  return (
    <section 
      id="quiz" 
      className="py-20 bg-gradient-to-b from-indigo-950 via-indigo-900 to-indigo-950 relative"
    >
      <div 
        ref={sectionRef}
        className="container mx-auto px-4 md:px-6 relative z-10 opacity-0 transition-opacity duration-1000"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Would You Do?
          </h2>
          <p className="text-xl text-indigo-300 max-w-3xl mx-auto">
            Test your knowledge and decision-making skills in these cyberbullying scenarios.
          </p>
        </div>
        
        {/* Quiz Container */}
        <div className="max-w-3xl mx-auto bg-indigo-900 bg-opacity-60 backdrop-blur-sm rounded-xl overflow-hidden shadow-2xl border border-indigo-800">
          {/* Scenario */}
          <div className="p-8 border-b border-indigo-800">
            <h3 className="text-2xl font-bold text-white mb-6">Scenario {scenarioIndex + 1}</h3>
            <p className="text-xl text-gray-300 mb-6">{currentScenario.situation}</p>
            
            {/* Options */}
            <div className="space-y-4">
              {currentScenario.options.map(option => (
                <button
                  key={option.id}
                  onClick={() => handleOptionSelect(option.id)}
                  className={`w-full text-left p-4 rounded-lg transition-all duration-300 border ${
                    selectedOption === option.id
                      ? isSubmitted
                        ? option.isRecommended
                          ? 'bg-green-800 bg-opacity-30 border-green-600'
                          : 'bg-red-900 bg-opacity-30 border-red-600'
                        : 'bg-indigo-800 bg-opacity-70 border-indigo-600'
                      : 'bg-indigo-950 bg-opacity-70 border-indigo-800 hover:bg-indigo-900'
                  }`}
                  disabled={isSubmitted}
                >
                  <div className="flex justify-between items-center">
                    <span className="text-white">{option.text}</span>
                    {isSubmitted && selectedOption === option.id && (
                      option.isRecommended 
                        ? <CheckCircle className="h-5 w-5 text-green-400" /> 
                        : <XCircle className="h-5 w-5 text-red-400" />
                    )}
                  </div>
                  
                  {isSubmitted && selectedOption === option.id && (
                    <div className={`mt-3 text-sm ${
                      option.isRecommended ? 'text-green-300' : 'text-red-300'
                    }`}>
                      {option.consequence}
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
          
          {/* Actions */}
          <div className="p-6 bg-indigo-950 flex justify-between">
            {!isSubmitted ? (
              <button
                onClick={handleSubmit}
                disabled={!selectedOption}
                className={`py-3 px-6 rounded-lg transition-all duration-300 ${
                  selectedOption
                    ? 'bg-indigo-600 hover:bg-indigo-500 text-white'
                    : 'bg-indigo-800 text-indigo-300 cursor-not-allowed'
                }`}
              >
                Submit Answer
              </button>
            ) : (
              <button
                onClick={resetAndNext}
                className="py-3 px-6 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg transition-colors flex items-center"
              >
                <RefreshCw className="h-4 w-4 mr-2" />
                Next Scenario
              </button>
            )}
            
            <div className="text-indigo-400">
              {scenarioIndex + 1} of {scenariosData.length}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quiz;