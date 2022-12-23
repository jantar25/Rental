import React from 'react'
import i18next from 'i18next';
import Newsletter from './Newsletter'
import { FaHome } from 'react-icons/fa';
import { BsInstagram,BsFacebook,BsWhatsapp } from 'react-icons/bs';
import { Link } from 'react-router-dom';

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
                <p className="text-md text-gray-300 font-[100] md:w-3/4">{i18next.t('ourVision')as string}</p>
            </div>
            <div className="flex-1 grid gap-2 grid-cols-2 my-2">
                <div className="flex flex-col">
                    <h3 className="font-[700] text-lg mb-4">{i18next.t('about')as string}</h3>
                    <Link to='/about'>
                        <p className="text-gray-500 hover:text-gray-200">{i18next.t('aboutUs')as string}</p>
                    </Link>
                    <p className="my-2 text-gray-500 hover:text-gray-200">{i18next.t('features')as string}</p>
                    <p className="text-gray-500 hover:text-gray-200">{i18next.t('news&blog')as string}</p>
                </div>
                <div className="flex flex-col">
                    <h3 className="font-[700] text-lg mb-4">{i18next.t('comgagny')as string}</h3>
                    <p className="mb-2 text-gray-500 hover:text-gray-200">{i18next.t('howWeWork')as string}</p>
                    <p className="mb-2 text-gray-500 hover:text-gray-200">{i18next.t('capital')as string}</p>
                    <p className="mb-2 text-gray-500 hover:text-gray-200">{i18next.t('support')as string}</p>
                </div>
            </div>
            <div className="flex-1 grid gap-2 grid-cols-2 my-2">
                <div className="flex flex-col">
                    <h3 className="font-[700] text-lg mb-4">{i18next.t('support')as string}</h3>
                    <Link to='/admin'>
                        <span className="text-gray-500 hover:text-gray-200">{i18next.t('admin')as string}</span>
                    </Link>
                    <p className="my-2 text-gray-500 hover:text-gray-200">{i18next.t('supportCenter')as string}</p>
                    <Link to='/contacts'>
                        <a href="/contacts" className="text-gray-500 hover:text-gray-200">{i18next.t('callUs')as string}</a>
                    </Link>
                </div>
                <div className="">
                    <h3 className="font-[700] text-lg mb-4">{i18next.t('followUs')as string}</h3>
                    <div className=" flex gap-x-3">
                        <p className="text-gray-500 hover:text-gray-200"><BsWhatsapp /></p>
                        <p className="text-gray-500 hover:text-gray-200"><BsFacebook /></p>
                        <p className="text-gray-500 hover:text-gray-200"><BsInstagram /></p>
                    </div>
                </div>
            </div>
        </div>
        <hr className="" />
        <div className="m-8 flex flex-col">
            <div className="flex flex-col sm:flex-row justify-between mb-4 items-center">
                <p className="text-gray-500 hover:text-gray-200 my-2">{i18next.t('termsAgreement')as string}</p>
                <p className="text-gray-500 hover:text-gray-200 my-2">{i18next.t('privacyPolice')as string}</p>
            </div>
            <p className="text-center text-gray-300">{i18next.t('copyRight')as string}</p>
        </div>
    </div>
  )
}

export default Footer