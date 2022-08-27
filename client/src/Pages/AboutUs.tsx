import React from 'react'
import i18next from 'i18next';
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { BsAsterisk } from 'react-icons/bs';
import { OurMembers } from '../data';

const AboutUs = () => {
  return (
    <div>
        <Navbar />
        <div className="px-4 lg:px-20 py-8">
            <h3 className="text-orange-600 text-lg font-[600]">{i18next.t('aboutUs')as string}</h3>
            <h1 className="text-purple-900 my-2 text-3xl font-[700]">{i18next.t('weDo')as string}<span className="text-pink-500 ">.</span></h1>
            <div className='w-[80px] h-[5px] bg-gradient-to-r from-purple-400 via-pink-500 to-[#FF8A71] 
                    shadow-lg mb-[5px]'/>
            <p className="mt-2 text-gray-400 md:w-2/3 text-sm">{i18next.t('weDoIntro')as string}</p>
            <div className="my-4">
                <div className=" p-4">
                    <div className="flex items-center mb-2 text-pink-500 text-2xl ">
                        <BsAsterisk />
                        <h1 className='font-[700] text-purple-900 ml-2'>{i18next.t('whatwWeDoIntro')as string}</h1>
                    </div>
                    <p className="text-center text-lg text-gray-500">{i18next.t('whatwWeDo')as string}</p>
                </div>
                <div className=" p-4">
                    <div className="flex items-center mb-2 text-pink-500 text-2xl ">
                        <BsAsterisk />
                        <h1 className='font-[700] text-purple-900 ml-2'>{i18next.t('members')as string}</h1>
                    </div>
                    <div className="flex flex-wrap items-center justify-center">
                        {OurMembers.map((member:any) => 
                            <div key={member.id} className="relative m-2 w-[270px] h-[320px]">
                                <img src={member.image} alt="MemberImg" className="w-full h-full rounded-lg brightness-50" />
                                <div className="absolute bottom-4 left-2">
                                    <h1 className='text-white font-700'>{member.names}</h1>
                                    <span className="text-gray-300 text-[12px]">{member.title}</span>
                                    <p className="text-[10px] text-gray-100">{member.comment}</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default AboutUs