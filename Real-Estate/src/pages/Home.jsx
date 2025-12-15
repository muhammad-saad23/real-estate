// src/pages/Home.jsx
import React from 'react';
import Hero from '../components/Hero';
import LeadForm from '../components/LeadForm';
import TrustSection from '../components/TrustSection';

const Home = () => {
  // All components assembled into the single landing page flow
  return (
    <main className="min-h-screen bg-white">
      <Hero area="DHA Lahore" />
      <LeadForm />
      <TrustSection />
      {/* Note: Footer (Fixed WhatsApp) is handled in App.jsx/Layout */}
    </main>
  );
};

export default Home;