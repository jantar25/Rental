import React from 'react'
import { Link } from 'react-router-dom';
import { FaBed,FaBath } from 'react-icons/fa';
import { MdChair } from 'react-icons/md';
import { ImSpoonKnife } from "react-icons/im";


const AvailableResidence = ({residencesAvailable}:any) => {
    
  return (
    <Link to={`/residence/${residencesAvailable.id}`}>
      <div className='w-[280px] bg-gray-50 py-4 px-2 rounded-md mx-2 shadow hover:shadow-xl hover:cursor-pointer mb-6'>
          <div className="w-full h-[200px] mb-4">
              <img src={residencesAvailable.FrontImage} alt="house" className="rounded-md w-full h-full" />
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
              <span className="font-[600] mr-1">{residencesAvailable.Livingrooms}</span>
              <MdChair />
            </div>
            <div className="flex items-center justify-center">
              <span className="font-[600] mr-1">{residencesAvailable.Kitchen}</span>
              <ImSpoonKnife />
            </div>
            <div className="flex items-center justify-center">
              <span className="font-[600] mr-1">{residencesAvailable.Bedroom}</span>
              <FaBed />
            </div>
            <div className="flex items-center justify-center">
              <span className="font-[600] mr-1">{residencesAvailable.BathRooms}</span>
              <FaBath />
            </div>
          </div>
      </div>
    </Link>
  )
}

export default AvailableResidence