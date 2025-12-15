// src/components/Footer.jsx (FINAL VERSION)
import React from 'react';
import { ChatBubbleLeftIcon } from '@heroicons/react/24/solid';

const Footer = ({ agentNumber = '923001234567' }) => {
  // Replace with the actual agent number for the WhatsApp link
  const whatsappLink = `https://wa.me/${agentNumber}`;

  return (
    <>
      {/* 1. STANDARD FOOTER (Bottom of the page content) */}
      <footer className="p-4 text-center text-xs text-gray-500 bg-gray-50 border-t border-gray-200">
        &copy; {new Date().getFullYear()} Lahore Property Pro. | All rights reserved. 
        <p className="mt-1">Disclaimer: Leads are generated via digital marketing channels.</p>
      </footer>
      
      {/* 2. FIXED WHATSAPP BUTTON (Crucial Lead CTA) */}
      
      {/* A. Mobile View (Icon Only) - Always visible on small screens */}
      <a 
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        // Fixed positioning and high z-index to overlay content
        className="fixed bottom-4 right-4 z-50 p-3 bg-green-500 rounded-full shadow-xl hover:bg-green-600 transition duration-300 flex items-center justify-center sm:hidden" 
      >
        <ChatBubbleLeftIcon className="h-8 w-8 text-white" />
      </a>
      
      {/* B. Desktop/Tablet View (Text CTA) - More explicit call-to-action */}
      <a 
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        // Fixed positioning
        className="fixed bottom-6 right-6 z-50 px-6 py-3 bg-green-500 rounded-lg shadow-xl hover:bg-green-600 transition duration-300 items-center hidden sm:flex font-bold text-white text-lg " // Added subtle pulse effect for attention
      >
        <ChatBubbleLeftIcon className="h-6 w-6 mr-2" />
        💬 Chat on Whatsapp
      </a>
    </>
  );
};

export default Footer;