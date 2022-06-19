import React from 'react';
import {BrowserRouter,Routes,Route } from "react-router-dom";
import Home from './Pages/Home';
import LandlordRegister from './Pages/LandlordRegister'
import LandlordLogin from './Pages/LandlordLogin';
import Contacts from './Pages/contacts';
import Residence from './Pages/Residence';
import Residences from './Pages/Residences';
import ScrollToTop from './Components/scrollToTop';


function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<LandlordRegister />} />
        <Route path="/login" element={<LandlordLogin />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/residence/:property" element={<Residence />} />
        <Route path="/residences/:category" element={<Residences />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
