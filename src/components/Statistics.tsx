import React, { useEffect, useRef } from 'react';
import { Statistic } from '../types';
import { statisticsData } from '../data/statisticsData';
import { PieChart, BarChartBig, Users, MessageCircle } from 'lucide-react';

// Component for each statistic card
const StatCard: React.FC<{ stat: Statistic; index: number }> = ({ stat, index }) => {
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
  
  const icons = [
    <PieChart key={0} className="h-10 w-10 text-indigo-400" />,
    <BarChartBig key={1} className="h-10 w-10 text-purple-400" />,
    <Users key={2} className="h-10 w-10 text-indigo-400" />,
    <MessageCircle key={3} className="h-10 w-10 text-purple-400" />
  ];
  
  return (
    <div 
      ref={cardRef}
      className={`bg-indigo-900 bg-opacity-70 backdrop-blur-sm rounded-xl p-6 shadow-lg flex flex-col items-center text-center opacity-0 translate-y-8 transition-all duration-700 delay-${index * 100}`}
    >
      <div className="mb-4">
        {icons[index % icons.length]}
      </div>
      <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</h3>
      <p className="text-xl text-indigo-300 font-medium mb-3">{stat.label}</p>
      <p className="text-gray-400">{stat.description}</p>
    </div>
  );
};

const Statistics: React.FC = () => {
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
      id="statistics" 
      className="py-20 relative bg-gradient-to-b from-indigo-900 to-purple-950"
    >
      <div className="absolute inset-0 overflow-hidden">
        {/* Abstract shapes for background */}
        <svg className="absolute top-0 left-0 w-full h-full opacity-10" viewBox="0 0 1000 1000">
          <path d="M0,500 Q250,300 500,500 T1000,500 L1000,1000 L0,1000 Z" fill="url(#statsGradient)" />
          <defs>
            <linearGradient id="statsGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4F46E5" />
              <stop offset="100%" stopColor="#9333EA" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      <div 
        ref={sectionRef}
        className="container mx-auto px-4 md:px-6 relative z-10 opacity-0 transition-opacity duration-1000"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            The Numbers Behind The Screen
          </h2>
          <p className="text-xl text-indigo-300 max-w-3xl mx-auto">
            Cyberbullying affects millions of people each year. Understanding the scope helps us combat it more effectively.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {statisticsData.map((stat, index) => (
            <StatCard key={stat.id} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;