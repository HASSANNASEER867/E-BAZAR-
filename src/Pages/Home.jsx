// WelcomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const WelcomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Welcome to Our Website!</h1>
        <p className="text-lg text-gray-600 mt-2">We're glad to have you here.</p>
      </header>
      <div className="text-center">
        <Link to="/login" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">
          Login
        </Link>
        <Link to="/signup" className="ml-4 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-300">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default WelcomePage;
