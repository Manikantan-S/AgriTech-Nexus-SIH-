import React, { useState } from 'react';

const About = () => {
  const [tools, setTools] = useState('');

  const handleToolsChange = (event) => {
    setTools(event.target.value);
  };

  return (
    <div className="h-1/2 bg-blue-500 flex flex-col justify-center items-center">
      <div className="flex-grow">
        <div className="max-w-3xl mx-4">
        </div>
      </div>
      <div className="mt-8 mb-4 w-full">
        <div className="flex items-center border-2 border-black ml-4 mr-4 p-3 bg-white rounded">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-4.35-4.35M15 9a6 6 0 11-12 0 6 6 0 0112 0z"
            />
          </svg>
          <input
            type="text"
            placeholder="Enter your tools"
            value={tools}
            onChange={handleToolsChange}
            className="w-full focus:outline-none"
          />
        </div>
      </div>
    </div>
  );
}

export default About;


