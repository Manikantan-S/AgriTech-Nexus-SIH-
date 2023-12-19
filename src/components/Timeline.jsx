import React, { useState } from 'react';
import fireImage from '../components/images/fire.jpg'; // Import the image

const Timeline = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState('');

  const handleSave = () => {
    // Simulate an asynchronous operation, like making an API call
    setLoading(true);

    setTimeout(() => {
      setOutput(`Dear user ${phoneNumber}, you will be intimated before disaster via SMS.`);
      setLoading(false);
    }, 2000); // Simulating a 2-second delay
  };

  return (
    <div className="container mx-auto p-8 bg-cover bg-center h-3/4" style={{ backgroundImage: `url(${fireImage})` }}>
      <h1 className="text-5xl font-bold leading-snug mb-4 text-red-500">
        <span className="text-primary">ALERT SYSTEM</span>
      </h1>
      <div className="text-white">
        {/* Updated input field with increased length */}
        <input
          type="text"
          id="phoneNumber"
          placeholder="Enter your phone number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="p-3 mb-2 rounded-full w-3/4" // Adjusted width to 75% of the container
        />
        <button onClick={handleSave} disabled={loading} className="p-3 bg-primary text-white rounded-full" style={{ cursor: loading ? 'not-allowed' : 'pointer' }}>
          Save
        </button>
      </div>
      {/* Loading indicator below input field and save button */}
      <div className="text-white mt-2">
        {loading && <span>Loading...</span>}
      </div>
      <div className="text-white">
        <p>{output}</p>
      </div>
    </div>
  );
};

export default Timeline;
