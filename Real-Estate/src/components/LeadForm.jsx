// src/components/LeadForm.jsx (PREMIUM STYLE UPDATE)
import React, { useState } from 'react';
import { PhoneIcon } from '@heroicons/react/24/solid';

const LeadForm = ({ areaOptions = ['DHA Lahore', 'Bahria Town', 'Askari X', 'Other'] }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    purpose: 'Buying', 
    interest: 'House',
    budget: '1-3 Cr', 
    area: areaOptions[0],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // --- WhatsApp Redirect Logic (Unchanged) ---
    if (!formData.name || !formData.phone) {
        alert("Please fill out your Name and WhatsApp Number.");
        return;
    }

    const agentNumber = '923001234567'; 
    const messageTemplate = `Hello, I need assistance with property in Lahore.\n
    *Name*: ${formData.name}\n
    *Phone*: ${formData.phone}\n
    *Purpose*: ${formData.purpose}\n
    *Type*: ${formData.interest}\n
    *Budget*: ${formData.budget}\n
    *Area*: ${formData.area}\n
    Please share verified listings on priority.`;
    
    const encodedMessage = encodeURIComponent(messageTemplate);
    const whatsappUrl = `https://wa.me/${agentNumber}?text=${encodedMessage}`;
    
    window.location.href = whatsappUrl;
    console.log('Lead Data Sent:', formData);
  };

  // Helper component for segment radio buttons
  const SegmentedControl = ({ name, options }) => (
    <div className="flex bg-gray-100 rounded-lg p-1 space-x-1">
      {options.map((option) => (
        <label 
          key={option.value} 
          className={`flex-1 text-center py-2 text-sm font-medium rounded-md cursor-pointer transition-colors duration-200 
            ${formData[name] === option.value ? 'bg-white text-emerald-700 shadow-md' : 'text-gray-500 hover:bg-gray-200'}`
          }
        >
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={formData[name] === option.value}
            onChange={handleChange}
            className="hidden"
          />
          {option.label}
        </label>
      ))}
    </div>
  );

  return (
    <section className="p-6 bg-white shadow-2xl rounded-xl -mt-8 z-10 relative mx-4 sm:mx-auto max-w-lg transform transition-transform duration-300 hover:scale-[1.01]">
      <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-2">
        Start Your Property Search
      </h2>
      <p className="text-center text-md text-gray-600 mb-8 border-b pb-4">
        Connect directly with the agent on WhatsApp.
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        
        {/* === SECTION 1: CONTACT DETAILS === */}
        <h3 className="text-lg font-bold text-emerald-600">1. Contact Details</h3>
        
        {/* Name Input */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="e.g., Ahmed Khan"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition duration-150"
          />
        </div>

        {/* Phone / WhatsApp Input */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">WhatsApp Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="e.g., 03XX-XXXXXXX"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition duration-150"
          />
        </div>

        {/* === SECTION 2: PROPERTY REQUIREMENTS === */}
        <h3 className="text-lg font-bold text-emerald-600 pt-3">2. Your Requirements</h3>

        {/* Purpose: Buying / Selling (Styled as Segmented Control) */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Purpose:</label>
          <SegmentedControl 
            name="purpose"
            options={[
              { label: 'Buying', value: 'Buying' },
              { label: 'Selling', value: 'Selling' }
            ]}
          />
        </div>
        
        {/* Interested In: House / Plot (Styled as Segmented Control) */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Property Type:</label>
          <SegmentedControl 
            name="interest"
            options={[
              { label: 'House', value: 'House' },
              { label: 'Plot', value: 'Plot' }
            ]}
          />
        </div>

        {/* Budget Range Select */}
        <div>
          <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1">
            Budget Range (PKR):
          </label>
          <select
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            required
            className="w-full p-3 border-2 border-gray-300 rounded-lg bg-white appearance-none focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition duration-150"
          >
            <option value="1-3 Cr">1 Crore - 3 Crore</option>
            <option value="3-5 Cr">3 Crore - 5 Crore</option>
            <option value="5+ Cr">5 Crore+</option>
            <option value="Not Applicable (Selling)">N/A (Selling)</option>
          </select>
        </div>

        {/* Area Preference Select */}
        <div>
          <label htmlFor="area" className="block text-sm font-medium text-gray-700 mb-1">
            Area Preference:
          </label>
          <select
            id="area"
            name="area"
            value={formData.area}
            onChange={handleChange}
            className="w-full p-3 border-2 border-gray-300 rounded-lg bg-white appearance-none focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition duration-150"
          >
            {areaOptions.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>

        {/* CTA Button */}
        <button
          type="submit"
          className="w-full p-4 mt-6 bg-green-600 hover:bg-green-700 text-white font-bold text-lg rounded-lg transition duration-150 ease-in-out shadow-xl hover:shadow-2xl flex items-center justify-center transform hover:scale-[1.02]"
        >
          <PhoneIcon className="h-5 w-5 mr-2" />
          ✅ Send Details on WhatsApp
        </button>
        
        <p className="text-center text-xs text-gray-500 pt-4">
          All inquiries lead directly to the agent. No spam, guaranteed.
        </p>
      </form>
    </section>
  );
};

export default LeadForm;