import React from 'react'
import { AiOutlineClose } from 'react-icons/ai';

const LandlordEditProperty = ({property,handleToggleEdit}:any) => {
  return (
    <div className='relative'>
        <div className="text-white">{property.title}</div>
        <div className="absolute p-2 top-5 right-5 cursor-pointer bg-red-600 rounded-full" onClick={()=>handleToggleEdit()} >
          <AiOutlineClose />
        </div>
    </div>
  )
}

export default LandlordEditProperty