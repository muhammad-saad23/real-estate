// src/App.jsx (Routing Check)
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const Layout = ({ children }) => {
  return (
      <div className="relative min-h-screen flex flex-col">
          <Navbar /> 
          <div className="flex-grow">
              {children}
          </div>
          {/* Footer is placed here to manage fixed CTA and standard footer */}
          <Footer /> 
      </div>
  );
};

function App() {
  return (
    // Ensure the entire application is wrapped in Router
    <Router>
      <Layout>
        <Routes>
          {/* Ensure the path="/" is correct and pointing to the Home component */}
          <Route path="/" element={<Home />} /> 
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;