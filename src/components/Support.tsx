import React, { useState, useRef, useEffect } from 'react';
import { SupportMessage } from '../types';
import { supportMessagesData } from '../data/supportMessagesData';
import { Heart, Send } from 'lucide-react';

const Support: React.FC = () => {
  const [messages, setMessages] = useState<SupportMessage[]>(supportMessagesData);
  const [newMessage, setNewMessage] = useState('');
  const [newAuthor, setNewAuthor] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
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
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (newMessage.trim() && newAuthor.trim()) {
      const newEntry: SupportMessage = {
        id: messages.length + 1,
        message: newMessage,
        author: newAuthor
      };
      
      setMessages([...messages, newEntry]);
      setNewMessage('');
      setNewAuthor('');
      setSubmitted(true);
      
      // Reset submitted state after 3 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    }
  };
  
  return (
    <section 
      id="support" 
      className="py-20 bg-gradient-to-b from-indigo-950 to-purple-950 relative"
    >
      <div 
        ref={sectionRef}
        className="container mx-auto px-4 md:px-6 relative z-10 opacity-0 transition-opacity duration-1000"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Wall of Support
          </h2>
          <p className="text-xl text-indigo-300 max-w-3xl mx-auto">
            Add your message of support and inspiration to those dealing with cyberbullying.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          {/* Message Wall */}
          <div className="h-80 bg-indigo-900 bg-opacity-40 rounded-xl p-4 mb-8 overflow-y-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {messages.map((item) => (
                <div 
                  key={item.id} 
                  className="bg-indigo-800 bg-opacity-40 p-4 rounded-lg shadow-md border border-indigo-700 hover:border-indigo-500 transition-colors"
                >
                  <p className="text-white mb-3 italic">"{item.message}"</p>
                  <p className="text-indigo-300 text-sm text-right">- {item.author}</p>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
          </div>
          
          {/* Add Support Form */}
          <div className="bg-indigo-900 bg-opacity-50 rounded-xl p-6 shadow-lg border border-indigo-800">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
              <Heart className="text-pink-500 mr-2 h-5 w-5" />
              Add Your Message of Support
            </h3>
            
            {submitted ? (
              <div className="bg-green-900 bg-opacity-40 border border-green-700 rounded-lg p-4 text-center text-green-300">
                Thank you for your message of support! It has been added to the wall.
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-indigo-300 mb-2">
                    Your message
                  </label>
                  <textarea
                    id="message"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    className="w-full bg-indigo-950 bg-opacity-70 border border-indigo-700 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    rows={3}
                    placeholder="Share your words of encouragement..."
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="name" className="block text-indigo-300 mb-2">
                    Your name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={newAuthor}
                    onChange={(e) => setNewAuthor(e.target.value)}
                    className="w-full bg-indigo-950 bg-opacity-70 border border-indigo-700 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="How you want to be known (can be anonymous)"
                    required
                  />
                </div>
                
                <button 
                  type="submit" 
                  className="bg-indigo-600 hover:bg-indigo-500 text-white py-3 px-6 rounded-lg transition-colors flex items-center justify-center w-full md:w-auto"
                >
                  <Send className="h-4 w-4 mr-2" />
                  Share Support
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;