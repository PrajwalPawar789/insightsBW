import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import MagazineSection from './components/MagazineSection';
import reportWebVitals from './reportWebVitals';
import RssFeeds from './components/rssFeed';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <React.StrictMode>
      <Routes>
        
        <Route path="/" element={<App />} />
        <Route path="/magazine" element={<MagazineSection />} />
        <Route path="/RssFeeds" element={<RssFeeds />} />
      </Routes>
    </React.StrictMode>
  </Router>
);

reportWebVitals();
