import React, { useState, useEffect } from 'react';

const LiveCounter: React.FC = () => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    // Start with a base number that represents an estimate for the day
    const startingCount = 1250000;
    setCount(startingCount);
    
    // Increment counter at random intervals to simulate real-time incidents
    const interval = setInterval(() => {
      setCount(prevCount => {
        // Add between 1-3 incidents randomly
        return prevCount + Math.floor(Math.random() * 3) + 1;
      });
    }, 2000); // Every 2 seconds
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="font-mono text-4xl md:text-5xl font-bold text-white">
      {count.toLocaleString()}
      <span className="ml-2 text-xs text-indigo-400 align-top animate-pulse">LIVE</span>
    </div>
  );
};

export default LiveCounter;