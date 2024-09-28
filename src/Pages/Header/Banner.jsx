import React from 'react';

const Banner = () => {
  return (
    <div className="bg-blue-600 text-white h-screen flex items-center justify-center">
      <div className="text-center max-w-lg">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our App!</h1>
        <p className="text-lg mb-6">
          Discover a world of possibilities with our application. Streamline your workflow, collaborate with your team, and achieve your goals more efficiently.
        </p>
        <button className="px-6 py-2 bg-white text-blue-600 rounded-lg hover:bg-gray-200 transition duration-200">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Banner;