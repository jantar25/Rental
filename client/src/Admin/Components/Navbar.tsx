import React from 'react'
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Navbar= () => {
    const Admin = useSelector((state:any)=>state.admin.currentAdmin)
    const location = useLocation()
    const title = location.pathname.split('/')[3];
    console.log(title)

  return (
        <div className='flex items-center justify-between p-4 bg-[#002853] text-white' >
            <div className="">
                <h3 className="mx-4 text-3xl font-[800] capitalize">{title? title : 'Dashboard'}</h3>
            </div>
            <div className='flex items-center'>
                <div className="flex mr-2">
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
        </div>
  )
}

export default Navbar
