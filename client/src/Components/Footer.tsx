import React from 'react'
import Newsletter from './Newsletter'
import { FaHome } from 'react-icons/fa';
import { BsInstagram,BsFacebook,BsWhatsapp } from 'react-icons/bs';

const Footer = () => {
  return (
    <div className='bg-gradient-to-r from-[#040C18] to-[#002853] text-white px-4 lg:px-20 py-8 items-center'>
        <Newsletter />
        <div className="mt-16 mb-8 flex flex-col md:flex-row">
            <div className="flex-1 my-2">
                <div className='flex items-center mb-4'>
                    <FaHome style={{fontSize:'20px',}}/>
                    <h1 className='text-lg font-[700] ml-2'>RENTAL</h1>
                </div>
                <p className="text-md text-gray-300 font-[100] md:w-3/4">Our vision is to make all people the best place to live for them</p>
            </div>
            <div className="flex-1 grid gap-2 grid-cols-2 my-2">
                <div className="flex flex-col">
                    <h3 className="font-[700] text-lg mb-4">About</h3>
                    <a href="" className="mb-2 text-gray-500 hover:text-gray-200">About us</a>
                    <a href="" className="mb-2 text-gray-500 hover:text-gray-200">Features</a>
                    <a href="" className="mb-2 text-gray-500 hover:text-gray-200">News&Blog</a>
                </div>
                <div className="flex flex-col">
                    <h3 className="font-[700] text-lg mb-4">Company</h3>
                    <a href="" className="mb-2 text-gray-500 hover:text-gray-200">How we work?</a>
                    <a href="" className="mb-2 text-gray-500 hover:text-gray-200">Capital</a>
                    <a href="" className="mb-2 text-gray-500 hover:text-gray-200">Security</a>
                </div>
            </div>
            <div className="flex-1 grid gap-2 grid-cols-2 my-2">
                <div className="flex flex-col">
                    <h3 className="font-[700] text-lg -4">Support</h3>
                    <a href="" className="mb-2 text-gray-500 hover:text-gray-200">FAQs</a>
                    <a href="" className="mb-2 text-gray-500 hover:text-gray-200">Support center</a>
                    <a href="" className="mb-2 text-gray-500 hover:text-gray-200">Contact us</a>
                </div>
                <div className="">
                    <h3 className="font-[700] text-lg mb-4">Follow us</h3>
                    <div className=" flex gap-x-3">
                        <a href="" className="text-gray-500 hover:text-gray-200"><BsWhatsapp /></a>
                        <a href="" className="text-gray-500 hover:text-gray-200"><BsFacebook /></a>
                        <a href="" className="text-gray-500 hover:text-gray-200"><BsInstagram /></a>
                    </div>
                </div>
            </div>
        </div>
        <hr className="" />
        <div className="m-8 flex flex-col">
            <div className="flex flex-col sm:flex-row justify-between mb-4 items-center">
                <a href="" className="text-gray-500 hover:text-gray-200 my-2">Terms&Agreement</a>
                <a href="" className="text-gray-500 hover:text-gray-200 my-2">Privacy Policy</a>
            </div>
            <p className="text-center text-gray-300">Ⓒ Jantar 2022, All right reserved</p>
        </div>
    </div>
  )
}

export default Footer