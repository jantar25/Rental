import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const LandlordRegister = () => {
  return (
    <div>
        <Navbar />
        <div className=" flex justify-center my-8">
          <div className="bg-gray-200 rounded-lg p-4 md:w-2/3">
              <div className="">
                  <h2 className="text-xl text-[#002853] font-[600]">Dear LandLord!</h2>
                  <p className="text-2xl text-orange-500 font-[700] my-2">Please Fill the form and submit</p>
                  <span className="text-md text-[#040C18] font-[400]">Start share your properties with more than thousands people in need</span>
              </div>
              <form className="mt-4">
                  <div className="flex flex-col mb-2">
                      <input type="text" placeholder='Names' className="px-4 py-2 my-2 rounded" />
                      <input type="text" placeholder='Email' className="px-4 py-2 my-2 rounded" />
                      <input type="text" placeholder='Phone' className="px-4 py-2 my-2 rounded" />
                      <input type="password" placeholder='Password' className='px-4 py-2 my-2 rounded' />
                      <input type="password" placeholder='Confirm password' className='px-4 py-2 my-2 rounded' />
                  </div>
                  <button className="px-8 py-2 bg-[#002853] text-white font-[600] rounded-md hover:shadow-lg">Register</button>
                  <div className="flex items-center mt-4">
                    <p className="text-[13px] text-gray-600">Do you have an account?
                        <Link to='/login'>
                            <span className="text-[#002853] ml-2 font-[700] text-sm cursor-pointer">Login</span>
                        </Link>
                    </p>
                </div>
              </form>
          </div>
        </div>
        <Footer />
    </div>
  )
}

export default LandlordRegister