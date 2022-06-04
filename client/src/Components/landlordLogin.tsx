import React from 'react'
import { Link } from 'react-router-dom'

const landlordLogin = () => {
  return (
    <div className='px-4 lg:px-20 py-8 flex justify-center'>
        <div className="bg-gray-200 rounded-lg p-4 md:w-2/3">
            <div className="">
                <h2 className="text-xl text-orange-500 font-[600]">Are you a LandLord?</h2>
                <p className="text-2xl text-[#002853] font-[700] my-2">Seeking for people to rent your house</p>
                <span className="text-md text-[#040C18] font-[400]">Please <strong className="">Sign in</strong> and share your properties</span>
            </div>
            <form className="mt-4">
                <div className="flex flex-col mb-2">
                    <input type="text" placeholder='Email' className="px-4 py-2 my-2 rounded" />
                    <input type="password" placeholder='Password' className='px-4 py-2 my-2 rounded' />
                </div>
                <button className="px-8 py-2 bg-[#002853] text-white font-[600] rounded-md">Login</button>
                <div className="flex items-center mt-4">
                    <p className="text-sm text-gray-600">Don't you have yet an account?</p>
                    <Link to='/register'>
                        <span className="text-[#002853] ml-2 font-[700] cursor-pointer">Registor</span>
                    </Link>
                </div>
            </form>
        </div>
    </div>
  )
}

export default landlordLogin