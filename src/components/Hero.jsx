import React, { useEffect, useState } from 'react';

const Hero = () => {
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    // Delay the animation to give some time for the component to load
    const delay = setTimeout(() => {
      setShowImage(true);
    }, 500); // Adjust the delay as needed

    return () => clearTimeout(delay);
  }, []);

  return (
    <div className="hero h-120 bg-base-100 relative overflow-hidden flex">
      {/* Left Side for Text */}
      <div className={`w-1/2 p-8 flex items-center justify-center animate-fly-in-left delay-1200`}>
        <div className="max-w-lg">
          <h1 className="text-5xl font-bold mb-4 leading-snug">
            Your pass to a decentralized future
          </h1>
          <p className="text-xl">
            Control your finance, Own your data, embrace your community
          </p>
          {/* You can add more text or components here */}
        </div>
      </div>

      {/* Right Side for Image */}
      <div className={`w-1/2 bg-blue-500 ${showImage ? 'transform translate-y-0 transition-transform duration-1000' : 'transform translate-y-[-100%] transition-transform duration-1000'}`}>
        <img
          src="/images/ninjacart.jpg"
          alt="Ninjacart Image"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;


