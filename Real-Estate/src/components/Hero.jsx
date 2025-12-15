// src/components/Hero.jsx (UPDATED)
import React from 'react';

const Hero = ({ area = 'DHA Lahore' }) => {
  return (
    <section className="p-6 pt-12 text-center bg-gray-50 border-b-4 border-emerald-500">
      
      {/* 🔴 FIX 1: Headline changed to target Agent's Goal (Lead Generation) */}
      <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 leading-tight mb-3">
        Get Daily Property Leads from <span className="text-emerald-600">{area}</span>
      </h1>
      
      <p className="text-lg text-gray-600 font-medium">
        **Direct WhatsApp inquiries — no portals, no commission**
      </p>
      
      <div className="mt-6">
        <div className="w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center text-sm text-gray-500">
          [Image Placeholder: Key Properties / Agent Success Photo]
        </div>
      </div>
    </section>
  );
};

export default Hero;