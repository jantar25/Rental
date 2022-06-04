import React from 'react';
import {BrowserRouter,Routes,Route } from "react-router-dom";
import Home from './Pages/Home';
import LandlordRegister from './Pages/LandlordRegister'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<LandlordRegister />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
