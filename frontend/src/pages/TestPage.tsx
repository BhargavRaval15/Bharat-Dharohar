import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const TestPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="max-w-7xl mx-auto py-20 px-4 text-center">
        <h1 className="text-4xl font-bold mb-8">Test Page</h1>
        <p className="mb-8">This is a test page to verify if routing is working correctly.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link 
            to="/" 
            className="px-6 py-2.5 border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-lg font-medium transition-colors"
          >
            Back to Home
          </Link>
          <Link 
            to="/stories" 
            className="px-6 py-2.5 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Go to Stories
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TestPage; 