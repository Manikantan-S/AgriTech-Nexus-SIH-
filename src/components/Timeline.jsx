import React, { useState, useEffect } from 'react';

const Circle = ({ index, isVisible, onMouseEnter }) => {
  const backgroundImages = [
    'url("/images/agrimorning.jpg")',
    'url("/images/agrievening.jpg")',
  ];

  const [backgroundIndex, setBackgroundIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`w-8 h-8 rounded-full bg-blue-500 mx-20 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      } transition-opacity duration-1000 relative`}
      onMouseEnter={() => onMouseEnter(index)}
      style={{
        backgroundImage: backgroundImages[backgroundIndex],
      }}
    >
      {isVisible && (
        <div
          className="absolute bg-blue-500 text-white py-1 px-2 rounded text-xs"
          style={{
            top: '-80px',
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        >
          Step {index + 1}
        </div>
      )}
    </div>
  );
};

const Timeline = () => {
  const [hoveredIndex, setHoveredIndex] = useState(0);

  const handleHover = (index) => {
    setHoveredIndex(index);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="relative">
        <div
          className="w-full h-0.5 bg-blue-500 absolute top-1/2 transform -translate-y-1/2"
        ></div>
        <div className="flex relative">
          {[0, 1, 2, 3, 4].map((index) => (
            <Circle
              key={index}
              index={index}
              isVisible={index === hoveredIndex}
              onMouseEnter={handleHover}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;















