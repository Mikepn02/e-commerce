import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './homePage';
import Dh from './Dinningroom';
import About from './aboutUs';
import BedRoom from './bedroom';
import Landin from './landin';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Dh" element={<Dh />} />
        <Route path='/Bedroom' element={<BedRoom />}/>
        <Route path='/About' element={<About />}/>
        <Route path='/landin' element={<Landin />}/>
        

      </Routes>
    </Router>
  );
}

export default App;
