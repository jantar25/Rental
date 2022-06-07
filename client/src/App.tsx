import React from 'react';
import {BrowserRouter,Routes,Route } from "react-router-dom";
import Home from './Pages/Home';
import LandlordRegister from './Pages/LandlordRegister'
import LandlordLogin from './Pages/landlordLogin';
import Contacts from './Pages/contacts';
import Residence from './Pages/Residence';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<LandlordRegister />} />
        <Route path="/login" element={<LandlordLogin />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/residence/:category" element={<Residence />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
