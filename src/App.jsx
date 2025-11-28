import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Home from './Navbar/Home';
import Surway from './Navbar/Survey';
import Candidate from './Navbar/Candidate';
import Complain from './Navbar/Complain';
import Contact from './Navbar/Contact';
import Admin from './Navbar/Admin';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/survey" element={<Surway />} />
        <Route path="/candidate" element={<Candidate />} />
        <Route path="/complaints" element={<Complain />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </>
  );
}

export default App;
