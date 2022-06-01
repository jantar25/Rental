import React from 'react'
import { logos } from '../data'

const Logos = () => {

  return (
    <div className='px-4 lg:px-20 py-8'>
      <div className='flex justify-around items-center flex-wrap'>
            {logos.map((logo)=>(
            <div key={logo.id} className='w-[300px] h-[150px] p-2'>
                <img src={logo.image} alt="Partners logo" className='w-full h-full object-contain' />
            </div> ))}
      </div>
    </div>
  )
}

export default Logos