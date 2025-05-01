import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const Stories = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Simple content for testing */}
      <div className="max-w-7xl mx-auto py-20 px-4 text-center">
        <h1 className="text-4xl font-bold mb-8">Stories of India</h1>
        <p className="mb-8 max-w-2xl mx-auto">This is a simplified Stories page for testing. If you can see this, the routing is working correctly!</p>
        <Link 
          to="/" 
          className="px-6 py-2.5 border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-lg font-medium transition-colors"
        >
          Back to Home
        </Link>
      </div>
      
      <Footer />
    </div>
  );
};

export default Stories; 