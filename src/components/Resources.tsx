import React, { useState, useRef, useEffect } from 'react';
import { Resource, Platform } from '../types';
import { resourcesData } from '../data/resourcesData';
import { platformsData } from '../data/platformsData';
import { ExternalLink, Download, ArrowRight } from 'lucide-react';

const ResourceCard: React.FC<{ resource: Resource }> = ({ resource }) => {
  return (
    <a 
      href={resource.link} 
      target="_blank" 
      rel="noopener noreferrer"
      className="bg-indigo-900 bg-opacity-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-indigo-800 hover:bg-opacity-60 border border-indigo-800 hover:border-indigo-700 group"
    >
      <div className="flex items-start mb-4">
        <div className="bg-indigo-800 p-3 rounded-lg mr-4">
          {/* Use dynamic import based on icon name */}
          <span dangerouslySetInnerHTML={{ __html: resource.icon }} className="h-6 w-6 text-indigo-300" />
        </div>
        <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">{resource.title}</h3>
      </div>
      <p className="text-gray-300 mb-4">{resource.description}</p>
      <div className="flex items-center text-indigo-400 group-hover:text-white transition-colors">
        <span>Learn more</span>
        <ExternalLink className="h-4 w-4 ml-2" />
      </div>
    </a>
  );
};

const PlatformGuide: React.FC<{ platform: Platform }> = ({ platform }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-purple-900 bg-opacity-50 rounded-xl shadow-lg border border-purple-800 overflow-hidden transition-all duration-300">
      <div 
        className="p-6 cursor-pointer flex justify-between items-center"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center">
          <div className="bg-purple-800 p-3 rounded-lg mr-4">
            <span dangerouslySetInnerHTML={{ __html: platform.icon }} className="h-6 w-6 text-purple-300" />
          </div>
          <h3 className="text-xl font-bold text-white">{platform.name}</h3>
        </div>
        <div className={`transition-transform duration-300 ${isExpanded ? 'rotate-90' : ''}`}>
          <ArrowRight className="h-5 w-5 text-purple-400" />
        </div>
      </div>
      
      <div 
        className={`transition-all duration-500 overflow-hidden ${
          isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="p-6 pt-0 border-t border-purple-800">
          <ol className="list-decimal pl-5 space-y-2 text-gray-300">
            {platform.reportingSteps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

const Resources: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'help' | 'reporting'>('help');
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
  
  return (
    <section 
      id="resources" 
      className="py-20 bg-gradient-to-b from-purple-950 to-indigo-950 relative"
    >
      <div 
        ref={sectionRef}
        className="container mx-auto px-4 md:px-6 relative z-10 opacity-0 transition-opacity duration-1000"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Resources & Support
          </h2>
          <p className="text-xl text-indigo-300 max-w-3xl mx-auto">
            Find the help you need to combat cyberbullying and protect yourself and others.
          </p>
        </div>
        
        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-indigo-900 bg-opacity-30 backdrop-blur-sm p-1 rounded-full inline-flex">
            <button
              onClick={() => setActiveTab('help')}
              className={`py-2 px-6 rounded-full transition-all duration-300 ${
                activeTab === 'help'
                  ? 'bg-indigo-700 text-white shadow-lg'
                  : 'text-indigo-300 hover:bg-indigo-800 hover:bg-opacity-50'
              }`}
            >
              Mental Health & Support
            </button>
            <button
              onClick={() => setActiveTab('reporting')}
              className={`py-2 px-6 rounded-full transition-all duration-300 ${
                activeTab === 'reporting'
                  ? 'bg-indigo-700 text-white shadow-lg'
                  : 'text-indigo-300 hover:bg-indigo-800 hover:bg-opacity-50'
              }`}
            >
              Reporting Guides
            </button>
          </div>
        </div>
        
        {/* Tab Content */}
        <div className="transition-all duration-300">
          {activeTab === 'help' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
              {resourcesData.map(resource => (
                <ResourceCard key={resource.id} resource={resource} />
              ))}
            </div>
          )}
          
          {activeTab === 'reporting' && (
            <div className="space-y-6 animate-fade-in">
              {platformsData.map(platform => (
                <PlatformGuide key={platform.id} platform={platform} />
              ))}
              
              <div className="bg-indigo-900 bg-opacity-50 p-6 rounded-xl mt-8 border border-indigo-800">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <Download className="mr-2 h-5 w-5 text-indigo-400" />
                  Download the Full Guide
                </h3>
                <p className="text-gray-300 mb-6">
                  Want to have these resources available offline? Download our comprehensive guide to reporting cyberbullying across all platforms.
                </p>
                <button className="bg-indigo-700 hover:bg-indigo-600 text-white py-3 px-6 rounded-lg transition-colors flex items-center">
                  <Download className="mr-2 h-4 w-4" />
                  Download PDF Guide
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Resources;