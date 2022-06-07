import React from 'react'
import { BsDot } from 'react-icons/bs';

const GetStartedProcess = () => {
  return (
    <div className='px-4 sm:px-8 lg:px-20 py-8 '>
        <h1 className="text-center font-[700] text-5xl mb-16">It's simple to get started</h1>
        <div className="flex justify-between">
            <div className="flex-1">
                <div className=" relative flex flex-col justify-center w-full mb-4">
                    <h1 className="text-8xl text-green-500 font-[600] mb-4 hidden md:flex">1</h1>
                    <div className="flex items-center justify-center bg-green-200 w-[40px] h-[40px] rounded-full z-10">
                        <p className="text-green-500"><BsDot style={{fontSize:'80px'}} /></p>
                    </div>
                    <div className="absolute bottom-[18px] left-4 w-full h-[2px] bg-green-500"></div>
                </div>
                <div className="">
                    <h1 className="text-xl font-[600] mb-4">Sign Up</h1>
                    <p className="text-gray-400 w-2/3">Create an account for free using your emain address</p>
                </div>
            </div>
            <div className="flex-1">
                <div className=" relative flex flex-col justify-center w-full mb-4">
                    <h1 className="text-8xl text-green-500 font-[600] mb-4 hidden md:flex">2</h1>
                    <div className="flex items-center justify-center bg-green-200 w-[40px] h-[40px] rounded-full z-10">
                        <p className="text-green-500"><BsDot style={{fontSize:'80px'}} /></p>
                    </div>
                    <div className="absolute bottom-[18px] left-4 w-full h-[2px] bg-green-500"></div>
                </div>
                <div className="">
                    <h1 className="text-xl font-[600] mb-4">Explore the platform</h1>
                    <p className="text-gray-400 w-2/3">See what it's like to get a residence without surrounding in street</p>
                </div>
            </div>
            <div className="flex-1">
                <div className=" relative flex flex-col justify-center w-full mb-4">
                    <h1 className="text-8xl text-green-500 font-[600] mb-4 hidden md:flex">3</h1>
                    <div className="flex items-center justify-center bg-green-200 w-[40px] h-[40px] rounded-full z-10">
                        <p className="text-green-500"><BsDot style={{fontSize:'80px'}} /></p>
                    </div>
                    <div className="absolute bottom-[18px] left-4 w-full h-[2px] bg-green-500"></div>
                </div>
                <div className="">
                    <h1 className="text-xl font-[600] mb-4">Post your properties</h1>
                    <p className="text-gray-400 w-2/3">Put your recommendation and let money come to you</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default GetStartedProcess