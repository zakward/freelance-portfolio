import React from 'react';
import { Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={  <About />} />
        <Route path="/portfolio" element={  <Portfolio />} />
      </Routes>
     
     
    </>
  );
}

export default App;