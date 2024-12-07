import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-6 text-center">
        <p className="text-lg">
          Created by{' '}
          <a 
            href="https://www.linkedin.com/in/shahrukh-javed/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-600"
          >
            Shahrukh Javed
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
