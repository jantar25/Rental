import React,{ useState,useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux';
import decode from 'jwt-decode';
import { Link } from 'react-router-dom'
import { FaHome,FaLightbulb,FaPhone,FaBuilding,FaMoon,FaKey,FaSignOutAlt } from 'react-icons/fa';
import { BsSignpostSplitFill } from 'react-icons/bs';
import {landLordLogoutDone} from '../Redux/apiCalls'
import useClickOutside from './Hooks/useClickOutside'
const avatar = require("../Images/avatar.png")



const Navbar = () => {
    const dispatch = useDispatch();
    const [toggleProfile,setToggleProfile] = useState(false);
    const [navbar,setNavbar]=useState(false); 
    const landLord= useSelector((state:any)=>state.landLord.currentLandLord);
    const menu = () =>{setToggleProfile(false)} 
    const dropDownRef = useClickOutside(menu)
    const Logout= ()=>{
        landLordLogoutDone(dispatch);
        menu()
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
            landLordLogoutDone(dispatch);
           }
                  }
    },[dispatch])

    const changeBackground=()=>{
        if(window.scrollY>=80){
          setNavbar(true)
        } else{
          setNavbar(false)
        }
      }
      window.addEventListener('scroll',changeBackground)


  return (
    <div className={`sticky top-0 z-30 bg-gradient-to-r from-[#002853] to-[#040C18] text-white px-4 lg:px-20 py-4  ${navbar? 'bg-[#000]' : 'bg-transparent'}`} >
        <div className='flex flex-col'>
            <div className='flex items-center justify-between'>
                <Link to='/'>
                    <div className='flex items-center'>
                        <FaHome style={{fontSize:'25px'}}/>
                        <h1 className='text-2xl font-[700] ml-2'>RENTAL</h1>
                    </div>
                </Link>
                <div className='hidden md:flex w-1/3 justify-center'>
                    <Link to='/residences/All'>
                        <p className='mx-2 font-[600]'>Residences</p>
                    </Link>
                    <p className='mx-2 font-[600]'>Value</p>
                    <Link to='/contacts'>
                        <p className='mx-2 font-[600]'>Contacts</p>
                    </Link>
                </div>
                <div className=' md:hidden bg-white fixed bottom-2 text-black left-0 right-0 w-[95%] sm:w-[60%] mx-auto shadow shadow-black rounded-md px-8 py-2'>
                    <ul className='flex items-center justify-between'>
                        <Link to='/'>
                            <li className='bg-blue-300 w-[33px] h-[33px] flex items-center justify-center rounded-full'>
                                <FaHome style={{fontSize:'20px',color:'#002853'}} />
                            </li>
                        </Link>
                        <Link to='/residences/All'>
                            <li>
                                <FaBuilding style={{fontSize:'20px',color:'#002853'}} />
                            </li>
                        </Link>
                        <li>
                            <FaLightbulb style={{fontSize:'20px',color:'#002853'}} />
                        </li>
                        <Link to='/contacts'>
                            <li>
                                <FaPhone style={{fontSize:'20px',color:'#002853'}} />
                            </li>
                        </Link>
                    </ul>
                </div>
                <div className='flex items-center justify-around'>
                    <div className="px-4">
                        <FaMoon style={{fontSize:'20px',color:'#fff'}} />
                    </div>

                        {landLord? <div className='w-[30px] h-[30px]'>
                            <img src={landLord?.img || avatar} alt="LandlordImg" className="w-full h-full rounded-full cursor-pointer" 
                            onClick={()=>setToggleProfile(!toggleProfile)}/> 
                        </div> 
                        :
                        <Link to='/login'>
                            <button className='flex sm:ml-4 bg-green-600 py-2 px-4 rounded text-sm'>Sign In</button>
                        </Link>
                        }
                    
                </div>
                {toggleProfile && (
                        <div className="flex flex-col bg-gradient-to-b from-[#002853] to-[#040C18] text-left p-4 absolute
                        top-16 right-2 lg:right-20 min-w-[210px] rounded shadow-lg shadow-blue-700" ref={dropDownRef}>
                            <div className='flex flex-col'>
                                <div className="flex items-center justify-center mb-4">
                                    <div className='w-[50px] h-[50px] mr-2'>
                                        <img src={landLord?.img || avatar} alt="LandlordImg" className="w-full h-full rounded-full" />
                                    </div>
                                    <h2 className='text-lg font-[600]'>{landLord?.names}</h2>
                                </div>
                                <hr />
                                <div className="flex flex-col justify-center flex-col mt-4">
                                    <Link to='/profile'>
                                        <button className="flex items-center text-white font-Manrope my-1 text-base" onClick={menu}>
                                            <FaKey />
                                            <span className='ml-2'>Account</span></button>
                                    </Link>
                                    <Link to='/activity'>
                                        <button className="flex items-center text-white font-Manrope my-1 text-base mb-4" onClick={menu}>
                                            <BsSignpostSplitFill />
                                            <span className='ml-2'>Activity</span></button>
                                    </Link>
                                    <hr />
                                    <button type='button' className="flex items-center text-lg text-[#FF4820] font-[800] mt-4" onClick={Logout}>
                                       <FaSignOutAlt /><span className='ml-2'>Sign Out</span></button>
                                </div>
                            </div>
                        </div>
                    )}
            </div>
        </div>
    </div>
  )
}

export default Navbar