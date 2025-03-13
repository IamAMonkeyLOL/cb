import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Gallery from './components/Gallery';
import './index-CVrAbH3z.css';

const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/" element={<App />} />
      </Routes>
    </Router>
  </StrictMode>
);