import React,{useEffect,useState} from 'react'
import decode from 'jwt-decode';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {adminLogoutDone} from '../../Redux/apiCalls'
import useClickOutside from '../../Components/Hooks/useClickOutside'
import { FaUsers,FaSignOutAlt } from 'react-icons/fa';
import { HiMenuAlt1 } from 'react-icons/hi'
import { MdDashboard,MdOtherHouses,MdLibraryBooks,MdOutlineUnsubscribe,MdReport } from 'react-icons/md'
import { FiSettings } from 'react-icons/fi'
import { Link } from 'react-router-dom';




const Navbar= () => {
    const Admin = useSelector((state:any)=>state.admin.currentAdmin)
    const location = useLocation()
    const title = location.pathname.split('/')[3];
    const [ toggleSidebar,setToggleSidebar ] = useState(false)
    const menu = () =>{setToggleSidebar(false)} 
    const dropDownRef = useClickOutside(menu)
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

  return (
        <div className='flex items-center justify-between py-2 px-4 bg-[#002853] text-white' >
            <div className="md:hidden " onClick={()=>setToggleSidebar(true)}>
                <HiMenuAlt1 style={{fontSize:'30px'}}/>
            </div>
            <h3 className="mx-4 text-3xl font-[800] capitalize">{title? title : 'Dashboard'}</h3>
            <div className='flex items-center'>
                <div className="hidden sm:flex mr-2">
                    <p className="mr-1">Hey,</p>
                    <div className="">
                        <p className='font-[700]'>{Admin.names}</p>
                        <span className="text-[10px] font-[400]">Administrator</span>
                    </div>
                </div>
                <div className="w-[40px] h-[40px]">
                    <img src={Admin.img} alt="" className="w-full h-full rounded-full" />
                </div>
            </div>
            {toggleSidebar?
            <div className="flex md:hidden flex-col bg-gradient-to-b from-[#002853] to-[#040C18] text-right p-4 absolute
                top-20 left-2 min-w-[210px] rounded shadow-lg shadow-blue-700" ref={dropDownRef}>
                <Link to='' >
                    <div className="flex items-center my-2" onClick={menu}>
                        <MdDashboard style={{fontSize:'25px'}}/>
                        <h3 className="ml-2 text-xl">Dashboard</h3>
                    </div>
                </Link>
                <Link to='landlords'>
                    <div className="flex items-center my-2" onClick={menu}>
                        <FaUsers style={{fontSize:'25px'}}/>
                        <h3 className="ml-2 text-xl">LandLords</h3>
                    </div>
                </Link>
                <Link to='residences'>
                    <div className="flex items-center my-2" onClick={menu}>
                        <MdOtherHouses style={{fontSize:'25px'}}/>
                        <h3 className="ml-2 text-xl">Residences</h3>
                    </div>
                </Link>
                <Link to='analytics'>
                    <div className="flex items-center my-2" onClick={menu}>
                        <FaUsers style={{fontSize:'25px'}}/>
                        <h3 className="ml-2 text-xl">Analytics</h3>
                    </div>
                </Link>
                <Link to='bookings'>
                    <div className="flex items-center my-2" onClick={menu}>
                        <MdLibraryBooks style={{fontSize:'25px'}}/>
                        <h3 className="ml-2 text-xl">Bookings</h3>
                    </div>
                </Link>
                <Link to=''>
                    <div className="flex items-center my-2" onClick={menu}>
                        <MdOutlineUnsubscribe style={{fontSize:'25px'}}/>
                        <h3 className="ml-2 text-xl">Subscribers</h3>
                    </div>
                </Link>
                <Link to=''>
                    <div className="flex items-center my-2" onClick={menu}>
                        <FiSettings style={{fontSize:'25px'}}/>
                        <h3 className="ml-2 text-xl">Settings</h3>
                    </div>
                </Link>
                <Link to=''>
                    <div className="flex items-center my-2" onClick={menu}>
                        <MdReport style={{fontSize:'25px'}}/>
                        <h3 className="ml-2 text-xl">Reports</h3>
                    </div>
                </Link>

            <button type='button' className=" mt-8 flex items-center text-lg text-[#FF4820] font-[800] mt-4" onClick={Logout}>
            <FaSignOutAlt /><span className='ml-2'>Sign Out</span></button>
            </div> : null}
        </div>
  )
}

export default Navbar
