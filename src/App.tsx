import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Statistics from './components/Statistics';
import Stories from './components/Stories';
import MythsFacts from './components/MythsFacts';
import Resources from './components/Resources';
import Quiz from './components/Quiz';
import Support from './components/Support';
import Footer from './components/Footer';

function App() {
  // Update document title
  useEffect(() => {
    document.title = "CyberShield | Behind The Digital Mask";
  }, []);
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Statistics />
        <Stories />
        <MythsFacts />
        <Quiz />
        <Resources />
        <Support />
      </main>
      <Footer />
    </div>
  );
}

export default App;