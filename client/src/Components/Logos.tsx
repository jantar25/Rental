import React from 'react'
import { logos } from '../data'

const Logos = () => {

  return (
    <div className='px-4 lg:px-20 py-8'>
      <div className='flex justify-around items-center flex-wrap'>
            {logos.map((logo)=>(
            <div key={logo.id} className='w-[200px] h-[100px] sm:w-[300px] sm:h-[150px] p-2 '>
                <img src={logo.image} alt="Partners logo" className='w-full h-full object-contain opacity-50 hover:opacity-100 transition' />
            </div> ))}
      </div>
    </div>
  )
}

export default Logos