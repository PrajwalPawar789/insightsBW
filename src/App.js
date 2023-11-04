import React from 'react';
import './App.css';
import NewsList from './components/NewsList';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <NewsList />
      <Footer/>
    </div>
  );
}

export default App;
