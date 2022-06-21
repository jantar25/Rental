import React,{ useState,useEffect,useRef } from 'react'
import {useDispatch, useSelector} from 'react-redux';
import { Link } from 'react-router-dom'
import { FaHome,FaLightbulb,FaPhone,FaBuilding,FaMoon } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import {landLordLogoutDone} from '../Redux/apiCalls'
const avatar = require("../Images/avatar.png")



const Navbar = () => {
    const dispatch = useDispatch();
    const menuRef = useRef<any>([]);
    const [toggleProfile,setToggleProfile] = useState(false);
    const [navbar,setNavbar]=useState(false); 
    const landLord= useSelector((state:any)=>state.landLord.currentLandLord);

    const menu = () =>{setToggleProfile(false)} 
    const Logout= ()=>{
        landLordLogoutDone(dispatch);
        menu()
    }
    const changeBackground=()=>{
        if(window.scrollY>=80){
          setNavbar(true)
        } else{
          setNavbar(false)
        }
      }
      window.addEventListener('scroll',changeBackground)

      useEffect(()=>{  
        let handeler = (event:any) => {if(!menuRef?.current?.contains (event.target)){setToggleProfile(false)}} 
        document.addEventListener('mousedown',handeler,{ capture: true })
        return ()=> document.removeEventListener('mousedown',handeler,{ capture: true })
      },[])

  return (
    <div className={`sticky top-0 z-30 bg-gradient-to-r from-[#002853] to-[#040C18] text-white px-4 lg:px-20 py-4  ${navbar? 'bg-[#000]' : 'bg-transparent'}`} >
        <div className='flex flex-col'>
            <div className='flex items-center justify-between'>
                <Link to='/'>
                    <div className='flex items-center'>
                        <FaHome style={{fontSize:'25px',}}/>
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
                            {!toggleProfile? <img src={landLord?.img || avatar} alt="LandlordImg" className="w-full h-full rounded-full cursor-pointer" 
                            onClick={()=>setToggleProfile(!toggleProfile)}/> 
                        : <div className='flex items-center justify-center '><AiOutlineClose style={{fontSize:'30px',color:'red'}} /></div>}
                        </div> 
                        :
                        <Link to='/login'>
                            <button className='flex sm:ml-4 bg-green-600 py-2 px-4 rounded text-sm'>Sign In</button>
                        </Link>
                        }
                    
                </div>
                {toggleProfile && (
                        <div className="flex flex-col bg-gradient-to-b from-[#002853] to-[#040C18] text-left p-8 absolute
                        top-16 right-2 lg:right-20 min-w-[210px] rounded shadow-lg shadow-blue-700" ref={menuRef}>
                            <div className='flex flex-col justify-center items-center'>
                                <div className='w-[150px] h-[150px] mb-2'>
                                    <img src={landLord?.img || avatar} alt="LandlordImg" className="w-full h-full rounded-full" />
                                </div>
                                <div className="flex flex-col justify-center items-center flex-col mx-4">
                                    <Link to='/profile'>
                                        <button className="text-white font-Manrope my-1 text-base" onClick={menu}>Your Profile</button>
                                    </Link>
                                    <Link to='/activity'>
                                        <button className="text-white font-Manrope my-1 text-base" onClick={menu}>Activity</button>
                                    </Link>
                                    <button type='button' className="bg-[#FF4820] px-6 py-2 mt-2 text-white font-Manrope rounded" onClick={Logout}>
                                        Sign Out</button>
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