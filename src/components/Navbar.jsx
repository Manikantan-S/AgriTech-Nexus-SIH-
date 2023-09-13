import React, { useState } from 'react';

const Navbar = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];

  return (
    <div className="navbar z-50 top-4 fixed left-1/2 -translate-x-1/2 bg-green-500">
      <div className="flex-1"></div>
      <div className="">
        <ul className="menu menu-horizontal px-1 md:flex hidden">
          <li><a href='/'>Services</a></li>
          <li><a href='/'>Resources</a></li>
          <li><a href='/'>About</a></li>
          <li><a href='/'>Contact</a></li>
        </ul>
        <div className="md:hidden">
          <input
            type="text"
            placeholder="Type here..."
            className="p-2 shadow bg-blue-500 text-white" // Blue input field with white text
            value={selectedOption}
            onChange={handleOptionChange}
          />
          <select
            className="p-2 shadow bg-green-500 text-white" // Blue dropdown with white text
            value={selectedOption}
            onChange={handleOptionChange}
          >
            <option value="">Select an option</option>
            {options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

