import React, { useState } from 'react'
import { FaMapMarkerAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
const homeImg = require("../Images/home.jpg")

const Header = () => {
    const [search,setSearch] = useState()
    const navigate = useNavigate()
    const handleSearch = () => {
        navigate('/residences/All', {state:search})
    }

  return (
    <div className='flex flex-col md:flex-row bg-gradient-to-r from-[#002853] to-[#040C18] text-white px-4 lg:px-20 pt-8'>
        <div className='flex-1 mb-8'>
            <h1 className='text-3xl md:text-5xl font-[600] leading-tight mb-4'>Discover <br />Most Suitable <br />Property</h1>
            <p className='text-gray-500 text-sm md:text-md mb-8'>Find a variety of properties that suit you very easily,
            forget all dificulties in finding a residnce for you.
            </p>
            <form className='flex items-center bg-white px-2 py-1 rounded-md mb-4 border border-2 border-gray-300'>
                <FaMapMarkerAlt style={{fontSize:'20px',color:'#002853'}} />
                <input type='search' placeholder= 'Search by location...' className='bg-white py-2 w-[90%] px-2 text-black' 
                onChange={(e:any)=>setSearch(e.target.value)} />
                <button className='inline-block px-4 py-2 bg-[#002853] text-lg font-[700] rounded-md' onClick={handleSearch}>Search</button>
            </form>
            <div className="flex items-center justify-between">
                <div className='m-2 p-2 '>
                    <h1 className='text-3xl font-[600]'>
                        9K<span className='text-orange-500 font-[600] ml-1'>+</span></h1>
                    <span className='text-gray-400'>
                        Premium<br />Product
                    </span>
                </div>
                <div className='m-2 p-2 '>
                    <h1 className='text-3xl font-[600]'>
                        2K<span className='text-orange-500 font-[600] ml-1'>+</span></h1>
                    <span className='text-gray-400'>
                        Happy<br />Customer
                    </span>
                </div>
                <div className='m-2 p-2 '>
                    <h1 className='text-3xl font-[600]'>
                        5K<span className='text-orange-500 font-[600] ml-1'>+</span></h1>
                    <span className='text-gray-400'>
                        Awards<br />Winning
                    </span>
                </div>
            </div>
        </div>
        <div className='flex-1 relative flex justify-center'>
            <div className='self-end bg-gradient-to-b from-[#040C18] via-[#002853] to-white w-[260px] h-[284px] 
            md:w-[350px] md:h-[500px] rounded-t-[160px] md:rounded-t-[170px]'></div>
            <div className='absolute w-[245px] h-[300px] overflow-hidden self-end mb-[-30px] md:w-[335px] md:h-[524px]'>
                <img src={homeImg} alt="homeImg" className='w-full h-full rounded-t-[140px] rounded-b-[10px] md:rounded-t-[170px] object-fit' />
            </div>
        </div>
    </div>
  )
}

export default Header