import React from 'react'
import i18next from 'i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { ClientsComments } from '../../data'
import ClientSay from './ClientsSay/ClientSay';

const ClientsSays = () => {
  return (
    <div className='px-4 lg:px-20 py-16'>
        <div className='flex flex-col items-center'>
            <h1 className="text-purple-900 text-4xl md:text-6xl font-[600] mb-8">{i18next.t('clientSays')as string}<span className="text-pink-500 ">.</span></h1>
            <h2 className="text-orange-600 text-xl font-[700] text-center">{i18next.t('clientSaysIntro')as string}</h2>
        </div>
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            900: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1120: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
          }}
          modules={[Pagination]}   
        >
          {ClientsComments.map((ClientsComment)=>(
            <SwiperSlide key={ClientsComment.id} className='flex my-8 justify-center'>
                <ClientSay ClientsComment={ClientsComment} />
            </SwiperSlide> ))}
      </Swiper> 
    </div>
  )
}

export default ClientsSays