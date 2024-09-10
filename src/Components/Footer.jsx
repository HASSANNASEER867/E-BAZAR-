// Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-center items-center">
        <div className="mb-4 md:mb-0">
          <h2 className="text-xl font-semibold">E - BAZAR </h2>
          <p className="text-sm mt-1">© 2024 Company Name. All rights reserved.</p>
        </div>
    
      </div>
    </footer>
  );
};

export default Footer;
