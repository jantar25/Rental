import React from 'react'
import i18next from 'i18next';
import { BsDot } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const GetStartedProcess = () => {
  return (
    <div className='px-4 sm:px-8 lg:px-20 py-8 '>
        <h1 className="text-center font-[700] text-3xl md:text-5xl mb-16">{i18next.t('clientSays')as string}</h1>
        <div className="flex flex-col md:flex-row justify-between">
            <div className="flex-1 flex md:flex-col">
                <div className=" relative flex flex-col justify-center md:w-full mb-4">
                    <h1 className="text-8xl text-green-500 font-[600] mb-4 hidden md:flex">1</h1>
                    <div className="flex items-center justify-center bg-green-200 w-[40px] h-[40px] rounded-full z-10">
                        <p className="text-green-500"><BsDot style={{fontSize:'80px'}} /></p>
                    </div>
                    <div className="absolute w-[2px] h-[110px] bottom-[-80px] md:bottom-[18px] left-5 md:left-4 md:w-full md:h-[2px] bg-green-500"></div>
                </div>
                <div className="pl-4 md:pl-8">
                    <h1 className="text-xl font-[600] mb-4">{i18next.t('getStartedProcess1')as string}</h1>
                    <p className="text-gray-400 md:w-2/3">{i18next.t('getStartedProcess1Intro')as string}</p>
                </div>
            </div>
            <div className="flex-1 flex md:flex-col my-8 md:my-0">
                <div className=" relative flex flex-col justify-center md:w-full mb-4">
                    <h1 className="text-8xl text-green-500 font-[600] mb-4 hidden md:flex">2</h1>
                    <div className="flex items-center justify-center bg-green-200 w-[40px] h-[40px] rounded-full z-10">
                        <p className="text-green-500"><BsDot style={{fontSize:'80px'}} /></p>
                    </div>
                    <div className="absolute w-[2px] h-[110px] bottom-[-80px] md:bottom-[18px] left-5 md:left-4 md:w-full md:h-[2px] bg-green-500"></div>
                </div>
                <div className="pl-4 md:pl-8">
                    <h1 className="text-xl font-[600] mb-4">{i18next.t('getStartedProcess2')as string}</h1>
                    <p className="text-gray-400">{i18next.t('getStartedProcess2Intro')as string}</p>
                </div>
            </div>
            <div className="flex-1 flex md:flex-col">
                <div className=" relative flex flex-col justify-center md:w-full mb-4">
                    <h1 className="text-8xl text-green-500 font-[600] mb-4 hidden md:flex">3</h1>
                    <div className="flex items-center justify-center bg-green-200 w-[40px] h-[40px] rounded-full z-10">
                        <p className="text-green-500"><BsDot style={{fontSize:'80px'}} /></p>
                    </div>
                    <div className="absolute md:bottom-[18px] left-5 md:left-4 md:w-full md:h-[2px] bg-green-500"></div>
                </div>
                <div className="pl-4 md:pl-8">
                    <h1 className="text-xl font-[600] mb-4">{i18next.t('getStartedProcess3')as string}</h1>
                    <p className="text-gray-400 ">{i18next.t('getStartedProcess3Intro')as string}</p>
                </div>
            </div>
        </div>
        <div className="flex flex-col items-center justify-center my-24">
            <h1 className="font-[700] text-3xl mb-6 text-center">{i18next.t('freeAccess')as string}</h1>
            <p className="text-gray-500 text-lg mb-4 text-center">{i18next.t('createAccount')as string}</p>
            <Link to='/register' >
                <button className="px-24 py-4 bg-orange-600 text-white font-[700] text-2xl rounded-md ">{i18next.t('createBtn')as string}</button>
            </Link>
        </div>
    </div>
  )
}

export default GetStartedProcess