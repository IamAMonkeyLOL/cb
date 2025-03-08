import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Gallery from './components/Gallery';

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