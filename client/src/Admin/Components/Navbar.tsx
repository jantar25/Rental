import React,{useEffect} from 'react'
import decode from 'jwt-decode';
import { useDispatch } from 'react-redux';
import {adminLogoutDone} from '../../Redux/apiCalls'
import { FaHome } from 'react-icons/fa';

const Navbar= () => {
    const dispatch = useDispatch()
    const Logout= ()=>{
        adminLogoutDone(dispatch);
    }

    useEffect(()=>{
        const currentToken = localStorage.getItem("persist:root");
        const token =currentToken? 
        JSON.parse(JSON.parse(currentToken).landLord).currentLandLord?.accessToken : "";  
         
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
    <div className='flex items-center justify-between p-8 bg-gradient-to-r from-[#002853] to-[#040C18] text-white' >
        <div className="">
        <div className='flex items-center'>
            <FaHome style={{fontSize:'35px',}}/>
            <h1 className='text-3xl font-[700] ml-2'>ADMIN DASHBOARD</h1>
        </div>
        </div>
        <div className="">
            <button className="py-2 px-4 bg-red-700 rounded text-lg font-[700]" onClick={Logout}>Log out</button>
        </div>
    </div>
  )
}

export default Navbar
