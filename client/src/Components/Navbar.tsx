import React,{ useState,useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux';
import decode from 'jwt-decode';
import { NavLink,Link } from 'react-router-dom'
import { FaHome,FaLightbulb,FaPhone,FaBuilding,FaKey,FaSignOutAlt } from 'react-icons/fa';
import { BsSignpostSplitFill } from 'react-icons/bs';
import {landLordLogoutDone} from '../Redux/apiCalls'
import useClickOutside from './Hooks/useClickOutside'
import i18next from 'i18next';
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

    const handleChange = (e:any) =>{
        localStorage.setItem("Language",e.target.value);
        window.location.reload()
    }

    const language = localStorage.getItem('Language') || 'en'
    const navLinkActive = "bg-blue-300 rounded-full"
    const LinkActive = "border-blue-300 border-b-4"
  return (
    <div className={`sticky top-0 z-30 bg-gradient-to-r from-[#002853] to-[#040C18] text-white px-4 lg:px-20 py-4  ${navbar? 'bg-[#000]' : 'bg-transparent'}`} >
        <div className='flex flex-col'>
            <div className='flex items-center justify-between'>
                <NavLink to='/'>
                    <div className='flex items-center text-orange-400'>
                        <FaHome style={{fontSize:'25px'}}/>
                        <h1 className='text-2xl font-[700] ml-2 text-white'>REN<span className='text-orange-400'>TAL</span></h1>
                    </div>
                </NavLink>
                <div className='hidden md:flex w-1/3 justify-center'>
                    <NavLink to='/residences/All' className={({isActive}) => isActive? LinkActive : ""}>
                        <p className='m-2 font-[600]'>{i18next.t('residence')as string}</p>
                    </NavLink>
                    <NavLink to='/about' className={({isActive}) => isActive? LinkActive : ""}>
                        <p className='m-2 font-[600]'>{i18next.t('about')as string}</p>
                    </NavLink>
                    <NavLink to='/contacts' className={({isActive}) => isActive? LinkActive : ""}>
                        <p className='m-2 font-[600]'>{i18next.t('contacts')as string}</p>
                    </NavLink>
                </div>
                <div className=' md:hidden bg-white fixed bottom-2 text-black left-0 right-0 w-[95%] sm:w-[60%] mx-auto shadow shadow-black rounded-md px-8 py-2'>
                    <ul className='flex items-center justify-between'>
                        <NavLink to='/' className={({isActive}) => isActive? navLinkActive : ""}>
                            <li className='w-[33px] h-[33px] flex items-center justify-center'>
                                <FaHome style={{fontSize:'20px',color:'#002853'}} />
                            </li>
                        </NavLink>
                        <NavLink to='/residences/All' className={({isActive}) => isActive? navLinkActive : ""}>
                            <li className='w-[33px] h-[33px] flex items-center justify-center'>
                                <FaBuilding style={{fontSize:'20px',color:'#002853'}} />
                            </li>
                        </NavLink>
                        <NavLink to='/about' className={({isActive}) => isActive? navLinkActive : ""}>
                            <li className='w-[33px] h-[33px] flex items-center justify-center'>
                                <FaLightbulb style={{fontSize:'20px',color:'#002853'}} />
                            </li>
                        </NavLink>
                        <NavLink to='/contacts' className={({isActive}) => isActive? navLinkActive : ""}>
                            <li className='w-[33px] h-[33px] flex items-center justify-center'>
                                <FaPhone style={{fontSize:'20px',color:'#002853'}} />
                            </li>
                        </NavLink>
                    </ul>
                </div>
                <div className='flex items-center justify-around'>
                    <div className="px-2">
                    <select className='p-1 rounded bg-transparent' onChange={handleChange} value={language} >
                        <option value="en" className="flex items-center text-white font-[800] text-md bg-black">EN</option>
                        <option value="kin" className="flex items-center text-white font-[800] text-md bg-black">KIN</option>
                      </select>
                    </div>
                    <div>
                        {landLord? <div className='w-[30px] h-[30px]'>
                            <img src={landLord?.img || avatar} alt="LandlordImg" className="w-full h-full rounded-full cursor-pointer" 
                            onClick={()=>setToggleProfile(!toggleProfile)}/> 
                        </div> 
                        :
                        <Link to='/login'>
                            <button className='flex sm:ml-4 bg-green-600 py-2 px-4 rounded text-sm'>{i18next.t('signIn')as string}</button>
                        </Link>
                        }
                    </div>
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
                                            <span className='ml-2'>{i18next.t('account')as string}</span></button>
                                    </Link>
                                    <Link to='/activity'>
                                        <button className="flex items-center text-white font-Manrope my-1 text-base mb-4" onClick={menu}>
                                            <BsSignpostSplitFill />
                                            <span className='ml-2'>{i18next.t('activity')as string}</span></button>
                                    </Link>
                                    <hr />
                                    <button type='button' className="flex items-center text-lg text-[#FF4820] font-[800] mt-4" onClick={Logout}>
                                       <FaSignOutAlt /><span className='ml-2'>{i18next.t('logOut')as string}</span></button>
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