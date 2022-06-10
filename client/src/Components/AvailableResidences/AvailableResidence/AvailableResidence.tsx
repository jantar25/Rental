import React from 'react'
import { FaBed,FaBath } from 'react-icons/fa';


const AvailableResidence = ({residencesAvailable}:any) => {
    
  return (
    <div className='w-[280px] bg-gray-50 py-4 px-2 rounded-md mx-2 shadow hover:shadow-xl hover:cursor-grabbing mb-6'>
        <div className="w-full h-[200px] mb-4">
            <img src={residencesAvailable.FrontImage} alt="house image" className="rounded-md w-full h-full" />
        </div>
        <div className="mx-2">
            <h1 className="text-xl font-[700] text-purple-400">
                <span className='text-orange-400 mr-2'>Rwf</span>
                {residencesAvailable.price}
            </h1>
            <h2 className="text-2xl font-[700] text-[#002853] mb-2 ">{residencesAvailable.title}</h2>
            <p className="text-sm text-gray-400">{residencesAvailable.address}</p>
        </div>
        <div className="flex justify-between text-[#002853] mt-2">
          <div className="flex items-center justify-center">
            <span className="font-[600] mr-1">2</span>
            <FaBed />
          </div>
          <div className="flex items-center justify-center">
            <span className="font-[600] mr-1">1</span>
            <FaBath />
          </div>
        </div>
    </div>
  )
}

export default AvailableResidence