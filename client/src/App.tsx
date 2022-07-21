import React from 'react';
import {BrowserRouter,Routes,Route,Navigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import Home from './Pages/Home';
import LandlordRegister from './Pages/LandlordRegister'
import LandlordLogin from './Pages/LandlordLogin';
import Contacts from './Pages/contacts';
import Residence from './Pages/Residence';
import Residences from './Pages/Residences';
import Profile from './Pages/Profile';
import LandLordActivity from './Pages/LandLordActivity';
import ScrollToTop from './Components/scrollToTop';
import LoginAdmin from './Admin/Pages/LoginAdmin';
import AdminDashboard from './Admin/Pages/AdminDashboard';


function App() {
  const landLord= useSelector((state:any)=>state.landLord.currentLandLord);
  const isAdmin = useSelector((state:any)=>state.admin.currentAdmin)
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<LandlordRegister />} />
        <Route path="/login" element= {!landLord? <LandlordLogin /> : <Navigate to="/" />} />
        <Route path="/profile" element= {landLord? <Profile /> : <Navigate to="/" />} />
        <Route path="/activity" element= {landLord? <LandLordActivity /> : <Navigate to="/" />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/residence/:property" element={<Residence />} />
        <Route path="/residences/:category" element={<Residences />} />
        <Route path="/admin" element={!isAdmin? <LoginAdmin /> : <Navigate to='/admin/dashboard' />} />
        <Route path="/admin/dashboard" element={isAdmin? <AdminDashboard /> : <Navigate to="/admin" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
