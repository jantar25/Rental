import React from 'react'
import i18next from 'i18next';
import { FiPhoneCall } from 'react-icons/fi';
import { BsChatDotsFill,BsFillCameraVideoFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'


const contactImg = require("../Images/house4.png")
const contacts = () => {
  return (
    <div className=''>
        <Navbar />
        <div className="flex px-4 lg:px-20 py-8">
            <div className="flex-1">
                <h3 className="text-orange-600 text-lg font-[600]">{i18next.t('callUs')as string}</h3>
                <h1 className="text-purple-900 my-2 text-3xl font-[700]">{i18next.t('easyConnect')as string}<span className="text-pink-500 ">.</span></h1>
                <div className='w-[80px] h-[5px] bg-gradient-to-r from-purple-400 via-pink-500 to-[#FF8A71] 
                    shadow-lg mb-[5px]'/>
                <p className="mt-2 text-gray-400 md:w-2/3 text-sm">{i18next.t('easyConnectIntro')as string}</p>
                <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 my-4">
                    <div className="flex flex-col justify-center items-center shadow-lg p-4">
                        <div className="flex justify-center items-center">
                            <FiPhoneCall style={{fontSize:'30px',color:'#002853'}} />
                            <div className="ml-4">
                                <h2 className='text-orange-600 font-[800]'>{i18next.t('call')as string}</h2>
                                <p className="text-[12px] text-gray-400">+250786120934</p>
                            </div>
                        </div>
                        <button className='px-4 py-2 bg-orange-600 text-white font-[600] rounded-md mt-4'>{i18next.t('callBtn')as string}</button>
                    </div>
                    <div className="flex flex-col justify-center items-center shadow-lg p-4">
                        <div className="flex justify-center items-center">
                            <BsChatDotsFill style={{fontSize:'30px',color:'#002853'}} />
                            <div className="ml-4">
                                <h2 className='text-orange-600 font-[800]'>{i18next.t('chat')as string}</h2>
                                <p className="text-sm text-gray-400">+250786120934</p>
                            </div>
                        </div>
                        <button className='px-4 py-2 bg-orange-600 text-white font-[600] rounded-md mt-4'>{i18next.t('chatBtn')as string}</button>
                    </div>
                    <div className="flex flex-col justify-center items-center shadow-lg p-4">
                        <div className="flex justify-center items-center">
                            <BsFillCameraVideoFill style={{fontSize:'30px',color:'#002853'}} />
                            <div className="ml-4">
                                <h2 className='text-orange-600 font-[800]'>{i18next.t('videoCall')as string}</h2>
                                <p className="text-sm text-gray-400">+250786120934</p>
                            </div>
                        </div>
                        <button className='px-4 py-2 bg-orange-600 text-white font-[600] rounded-md mt-4'>{i18next.t('videoCallBtn')as string}</button>
                    </div>
                    <div className="flex flex-col justify-center items-center shadow-lg p-4">
                        <div className="flex justify-center items-center">
                            <MdEmail style={{fontSize:'30px',color:'#002853'}} />
                            <div className="ml-4">
                                <h2 className='text-orange-600 font-[800]'>{i18next.t('message')as string}</h2>
                                <p className="text-sm text-gray-400">+250786120934</p>
                            </div>
                        </div>
                        <button className='px-4 py-2 bg-orange-600 text-white font-[600] rounded-md mt-4'>{i18next.t('messageBtn')as string}</button>
                    </div>
                </div>
            </div>
            <div className="hidden flex-1 relative md:flex justify-center">
                <div className='self-end bg-gradient-to-b from-gray-700 via-gray-400 to-white w-[260px] h-[284px] 
                md:w-[350px] md:h-[500px] rounded-t-[160px] md:rounded-t-[170px]'></div>
                <div className='absolute w-[245px] h-[300px] overflow-hidden self-end md:w-[335px] md:h-[492px]'>
                    <img src={contactImg} alt="ContactImg" className='w-full h-full rounded-t-[140px] rounded-b-[10px] md:rounded-t-[170px] object-cover' />
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default contacts