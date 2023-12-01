import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-lg font-semibold">Simple Home</div>
        <ul className="flex space-x-4">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
