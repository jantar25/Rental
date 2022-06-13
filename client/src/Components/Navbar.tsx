import React,{ useState } from 'react'
import { Link } from 'react-router-dom'
import { FaHome,FaLightbulb,FaPhone,FaBuilding,FaMoon } from 'react-icons/fa';



const Navbar = () => {
    const [navbar,setNavbar]=useState(false); 
    const changeBackground=()=>{
        if(window.scrollY>=80){
          setNavbar(true)
        } else{
          setNavbar(false)
        }
      }
      window.addEventListener('scroll',changeBackground)

  return (
    <div className={`sticky top-0 z-50 bg-gradient-to-r from-[#002853] to-[#040C18] text-white px-4 lg:px-20 py-4  ${navbar? 'bg-[#000]' : 'bg-transparent'}`} >
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
                        <Link to='/residences'>
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
                    <Link to='/login'>
                        <button className='flex sm:ml-4 bg-green-600 py-2 px-4 rounded text-sm'>Sign In</button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar