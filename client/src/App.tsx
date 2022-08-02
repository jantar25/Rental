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
import Sidebar from './Admin/Components/Sidebar';
import Navbar from './Admin/Components/Navbar';
import Dashboard from './Admin/Interfaces/Dashboard';
import LandLords from './Admin/Interfaces/LandLords';
import Booking from './Admin/Interfaces/Booking';
import AdminResidences from './Admin/Interfaces/AdminResidences';
import Analytics from './Admin/Interfaces/Analytics'; 
import Subscribers from './Admin/Interfaces/Subscribers';


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
        <Route path="/admin/dashboard/*" element={isAdmin? (
                    <div className='flex w-screen '>
                      <Sidebar />
                      <div className='flex-auto h-screen md:overflow-hidden'>
                        <Navbar />
                        <Routes>
                            <Route path="/" element={<Dashboard />} />
                            <Route path="/landlords" element={<LandLords />} />
                            <Route path="/bookings" element={<Booking />} />
                            <Route path="/residences" element={<AdminResidences />} />
                            <Route path="/analytics" element={<Analytics />} />
                            <Route path="/subscribers" element={<Subscribers />} />
                        </Routes>
                      </div>
                    </div>
                    ) : <Navigate to="/admin" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
