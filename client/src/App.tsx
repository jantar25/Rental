import React from 'react';
import {BrowserRouter,Routes,Route } from "react-router-dom";
import Home from './Pages/Home';
import LandlordRegister from './Pages/LandlordRegister'
import LandlordLogin from './Pages/landlordLogin';
import Contacts from './Pages/contacts';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<LandlordRegister />} />
        <Route path="/login" element={<LandlordLogin />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
