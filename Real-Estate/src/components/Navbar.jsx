// src/components/Navbar.jsx
import React from 'react';
import { PhoneIcon } from '@heroicons/react/24/outline';

const Navbar = ({ agentName = 'Lahore Property Pro' }) => {
  // Replace with the actual agent phone number
  const phoneNumber = '03XX-XXXXXXX'; 
  const callLink = `tel:${phoneNumber}`;

  return (
    <nav className="bg-white shadow-md sticky top-0 z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo/Agent Name */}
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold text-emerald-600">
              {agentName}
            </span>
          </div>

          {/* Contact Button (Visible on all screen sizes) */}
          <div className="flex items-center">
            <a 
              href={callLink}
              className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150"
            >
              <PhoneIcon className="h-5 w-5 mr-1" />
              Call Now
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;