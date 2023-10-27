import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes and Route
import './index.css';
import App from './App';
import MagazineSection from './components/MagazineSection';
import reportWebVitals from './reportWebVitals';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/magazine" element={<MagazineSection />} />
      </Routes>
    </React.StrictMode>
  </Router>,
);

reportWebVitals();
