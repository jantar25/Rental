import React,{useEffect} from 'react'
import decode from 'jwt-decode';
import { useDispatch } from 'react-redux';
import {adminLogoutDone} from '../../Redux/apiCalls'
import { FaHome,FaSignOutAlt,FaUsers } from 'react-icons/fa';
import { MdDashboard,MdOtherHouses,MdLibraryBooks,MdOutlineUnsubscribe,MdReport } from 'react-icons/md'
import { FiSettings } from 'react-icons/fi'
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
        const dispatch = useDispatch()
        const Logout= ()=>{
            adminLogoutDone(dispatch);
        }
    
        useEffect(()=>{
            const currentToken = localStorage.getItem("persist:root");
            const token =currentToken? 
            JSON.parse(JSON.parse(currentToken).admin).currentAdmin?.accessToken : "";  
            
           if(token){
               const decodedToken :any =decode(token);
               const today = new Date().getTime();
               const inToken=decodedToken.exp*1000;
               if (inToken < today) {
                adminLogoutDone(dispatch);
               }
                      }
        },[dispatch])
        const LinkActive = "bg-blue-300 rounded-lg"
        
  return (
    <div className='hidden md:flex basis-1/5 bg-gradient-to-b from-[#002853] to-[#040C18] h-screen text-white'>
        <div className="relative p-2 h-full">
            <div className='flex items-center my-4 text-orange-400'>
                <FaHome style={{fontSize:'25px',color:'orange'}}/>
                <h1 className='text-2xl font-[700] ml-2 text-white'>REN<span className='text-orange-400'>TAL</span></h1>
            </div>
            <div className='my-8 flex flex-col justify-center items-start mx-4'>
                <NavLink to='' >
                    <div className="flex items-center m-2">
                        <MdDashboard style={{fontSize:'25px'}}/>
                        <h3 className="ml-2 text-xl">Dashboard</h3>
                    </div>
                </NavLink>
                <NavLink to='landlords' className={({isActive}) => isActive? LinkActive : ""}>
                    <div className="flex items-center m-2">
                        <FaUsers style={{fontSize:'25px'}}/>
                        <h3 className="ml-2 text-xl">LandLords</h3>
                    </div>
                </NavLink>
                <NavLink to='residences' className={({isActive}) => isActive? LinkActive : ""}>
                    <div className="flex items-center m-2">
                        <MdOtherHouses style={{fontSize:'25px'}}/>
                        <h3 className="ml-2 text-xl">Residences</h3>
                    </div>
                </NavLink>
                <NavLink to='analytics' className={({isActive}) => isActive? LinkActive : ""}>
                    <div className="flex items-center m-2">
                        <FaUsers style={{fontSize:'25px'}}/>
                        <h3 className="ml-2 text-xl">Analytics</h3>
                    </div>
                </NavLink>
                <NavLink to='bookings' className={({isActive}) => isActive? LinkActive : ""}>
                    <div className="flex items-center m-2">
                        <MdLibraryBooks style={{fontSize:'25px'}}/>
                        <h3 className="ml-2 text-xl">Bookings</h3>
                    </div>
                </NavLink>
                <NavLink to='subscribers' className={({isActive}) => isActive? LinkActive : ""}>
                    <div className="flex items-center m-2">
                        <MdOutlineUnsubscribe style={{fontSize:'25px'}}/>
                        <h3 className="ml-2 text-xl">Subscribers</h3>
                    </div>
                </NavLink>
                <NavLink to=''>
                    <div className="flex items-center m-2">
                        <FiSettings style={{fontSize:'25px'}}/>
                        <h3 className="ml-2 text-xl">Settings</h3>
                    </div>
                </NavLink>
                <NavLink to=''>
                    <div className="flex items-center m-2">
                        <MdReport style={{fontSize:'25px'}}/>
                        <h3 className="ml-2 text-xl">Reports</h3>
                    </div>
                </NavLink>
            </div>
            <button type='button' className="absolute bottom-8 flex items-center text-lg text-[#FF4820] font-[800] mt-4" onClick={Logout}>
            <FaSignOutAlt /><span className='ml-2'>Sign Out</span></button>
        </div>
    </div>
  )
}

export default Sidebar