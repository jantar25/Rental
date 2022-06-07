import React from 'react'
import { FaHome } from 'react-icons/fa';

const Newsletter = () => {
  return (
        <div className="flex flex-col items-center">
            <div className="flex flex-col sm:flex-row items-center mb-4">
                <h1 className="text-3xl font-[600] mr-4">Get timely update from</h1>
                <div className='flex items-center'>
                    <FaHome style={{fontSize:'35px',}}/>
                    <h1 className='text-4xl font-[700] ml-2'>RENTAL</h1>
                </div>
            </div>
            <p className="text-gray-400 text-center">Subscribe and find super attractive prices quotes from us,Find you residence soon.</p>
            <form className="flex w-full sm:w-2/3 md:w-1/2 mt-2">
                <input type="email" className="flex-1 px-4 py-2 rounded-l" placeholder='Email' />
                <button className='flex-3 bg-green-600 py-2 px-4 rounded-r text-sm font-[600]'>Get Started</button>
            </form>
        </div>
  )
}

export default Newsletter