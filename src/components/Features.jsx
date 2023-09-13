import React, { useState } from 'react';

const Features = () => {
  const [city, setCity] = useState('');
  const [item, setItem] = useState('');
  const [quantity, setQuantity] = useState('');
  const [monthOfHarvest, setMonthOfHarvest] = useState('');
  const [result, setResult] = useState(null);

  const handleCalculateClick = () => {
    if (city !== '' && item !== '' && quantity !== '' && monthOfHarvest !== '') {
      const priceCity = parseFloat(city);
      const priceItem = parseFloat(item);
      const priceQuantity = parseFloat(quantity);
      const priceMonthOfHarvest = parseFloat(monthOfHarvest);
      const calculatedResult =
        ((priceCity * 31) / 356) +
        ((priceItem * 31) / 356) +
        ((priceQuantity * 31) / 356) +
        ((priceMonthOfHarvest * 31) / 356); // Adjust your calculation as needed

      setResult(calculatedResult.toFixed(2)); // Round to 2 decimal places
    }
  };

  return (
    <div className="bg-green-500 min-h-screen flex">
      {/* Left side with Google Maps */}
      <div className="w-1/2 h-screen">
        <div style={{ border: '2px solid #004000', height: '80%', width: '80%', margin: '10%' }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63188.97635573904!2d77.37383201226193!3d8.171387978415233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04f0dfc0ddc7b7%3A0x809a9e32a95d3ed1!2sNagercoil%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1694382000591!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: '0' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* Right side with Price Calculator */}
      <div className="w-1/2 flex flex-col justify-center items-center p-8">
        <div className="bg-gradient-to-r from-yellow-300 via-green-500 to-yellow-300 p-4 rounded-lg mb-4">
          {/* Calculator heading inside the gradient box */}
          <h1 className="text-2xl font-bold mb-4 text-white">Calculator</h1>

          {/* Input fields for city, item, quantity, and month of harvest */}
          <div className="mb-4">
            <input
              type="text"
              placeholder="Enter city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full p-3 rounded-lg border border-gray-300"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Enter item"
              value={item}
              onChange={(e) => setItem(e.target.value)}
              className="w-full p-3 rounded-lg border border-gray-300"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Enter Quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="w-full p-3 rounded-lg border border-gray-300"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Month of Harvest"
              value={monthOfHarvest}
              onChange={(e) => setMonthOfHarvest(e.target.value)}
              className="w-full p-3 rounded-lg border border-gray-300"
            />
          </div>
          <button
            onClick={handleCalculateClick}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-4"
          >
            Calculate
          </button>
        </div>

        {result !== null && (
          <p className="mt-4">Result: {result}</p>
        )}
      </div>
    </div>
  );
};

export default Features;











