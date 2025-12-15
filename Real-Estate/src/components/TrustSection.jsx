// src/components/TrustSection.jsx (UPDATED)
import React from 'react';
import { ShieldCheckIcon, UsersIcon, CheckCircleIcon } from '@heroicons/react/24/solid';

const TrustSection = () => {
  return (
    <section className="p-6 bg-gray-100 border-t border-gray-200">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Why Connect with Us?
      </h2>
      <div className="max-w-md mx-auto space-y-4">
        
        {/* 🟢 TRUST ITEM 1: Trusted Agents */}
        <div className="flex items-start p-3 bg-white rounded-lg shadow-sm">
          <UsersIcon className="h-6 w-6 text-indigo-500 mt-0.5 flex-shrink-0" />
          <div className="ml-3">
            <h3 className="text-lg font-semibold text-gray-800">
              Trusted by DHA Property Agents
            </h3>
            <p className="text-sm text-gray-600">
              We focus purely on serious buyers and sellers in Lahore.
            </p>
          </div>
        </div>

        {/* 🟢 TRUST ITEM 2: Verified Listings */}
        <div className="flex items-start p-3 bg-white rounded-lg shadow-sm">
          <ShieldCheckIcon className="h-6 w-6 text-emerald-500 mt-0.5 flex-shrink-0" />
          <div className="ml-3">
            <h3 className="text-lg font-semibold text-gray-800">
              Verified Listings Only
            </h3>
            <p className="text-sm text-gray-600">
              No fake data. Property details are cross-checked before sharing.
            </p>
          </div>
        </div>
        
        {/* 🟢 TRUST BADGE: WhatsApp Verified Leads */}
        <div className="flex justify-center pt-4">
          <div className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-bold flex items-center shadow-md">
            <CheckCircleIcon className="h-5 w-5 mr-2" />
            WhatsApp Verified Leads
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default TrustSection;