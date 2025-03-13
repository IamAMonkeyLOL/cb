import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { Link } from 'react-scroll';
import {
  Menu, X, Phone, Mail, ArrowRight, ChevronLeft, ChevronRight,
  ExternalLink, Home, PenTool, Hammer, Ruler, PaintBucket, Wrench,
  Facebook, Instagram, Twitter
} from 'lucide-react';

// Import components
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Gallery from './components/Gallery';

// Main App Component
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/" element={
          <div className="min-h-screen">
            <Header />
            <Hero />
            <Services />
            <Portfolio />
            <Contact />
            <Footer />
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;