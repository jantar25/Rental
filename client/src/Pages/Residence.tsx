import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { useLocation } from 'react-router-dom'
import { residencesAvailables } from '../data'
import AvailableResidence from '../Components/AvailableResidences/AvailableResidence/AvailableResidence'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const Residence = () => {
    const location = useLocation()
    const user = parseInt(location.pathname.split('/')[2]);
    const residence = residencesAvailables.filter((residencesAvailable)=>residencesAvailable.id === user )[0];
    const OtherImages = residence.OtherImages
  return (
    <div>
      <Navbar />
      <div className="px-4 lg:px-20 py-8 ">
        <h1 className="text-4xl font-[600] text-center my-4 text-[#002853]">{residence.title}</h1>
        <div className="bg-purple-50 rounded">
          <div className="flex flex-col md:flex-row p-2 ">
            <div className="flex-1 w-full h-[450px] p-2">
              <img src={residence.FrontImage} alt="MainImg" className="w-full h-full object-cover rounded-lg" />
            </div>
            <div className="flex-1 p-2 h-[450px] overflow-auto">
              <h2 className="text-2xl font-[600] text-orange-400">Property Details:</h2>
              <div className="">
                <div className="text-gray-500 my-2">Status: {residence.Avaiable ? (
                  <span className='text-lg font-[700] text-green-500'>Available</span>
                ) : (
                  <span className='text-lg font-[700] text-red-500'>Occupied</span>
                )}</div>
                <p className="text-gray-500 my-2">Address: <span className='font-[600]'>{residence.address}</span></p>
                <p className="text-gray-500 my-2">Price/Month: <span className='font-[600] text-orange-400 text-lg'>{residence.price} Frw</span></p>
                <p className="text-gray-500 my-2">Living Room: <span className='font-[600] text-gray-700 text-lg'>{residence.Livingrooms}</span></p>
                <p className="text-gray-500 my-2">Bed Room: <span className='font-[600] text-gray-700 text-lg'>{residence.Bedroom}</span></p>
                <p className="text-gray-500 my-2">Bath Room: <span className='font-[600] text-gray-700 text-lg'>{residence.BathRooms}</span></p>
                <p className="text-gray-500 my-2">Kitchen: <span className='font-[600] text-gray-700 text-lg'>{residence.Kitchen}</span></p>
                <p className="text-gray-500 my-2">Floors: <span className='font-[600] text-gray-700 text-lg'>{residence.Floors}</span></p>
                <p className="text-gray-500 my-2">{residence.Description}</p>
              </div>
              <button className="px-2 py-1 bg-gray-800 text-white rounded font-[600] text-sm my-2">View Map</button>
            </div>
          </div>
          <div className="">
            <Swiper
                spaceBetween={10}
                slidesPerView={3}
                pagination={{
                  clickable: true,
                }}
                breakpoints={{
                  640: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                  },
                  900: {
                    slidesPerView: 5,
                    spaceBetween: 10,
                  },
                  1120: {
                    slidesPerView: 8,
                    spaceBetween: 10,
                  },
                }}
                modules={[Pagination]}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}   
              >
                {OtherImages.map((OtherImage,index)=>(
                  <SwiperSlide key={index} className='flex my-2 justify-center'>
                    <div className="h-[100px] w-[150px] cursor-pointer">
                      <img src={OtherImage} alt='OtherImg' className='h-full w-full' />
                    </div>
                  </SwiperSlide> ))}
            </Swiper>
          </div>
        </div>
        <div className="">
          <h1 className="text-2xl mt-12 mb-4 font-[700] text-[#002853]">Recommended Residences:</h1>
          <div className="flex flex-wrap items-center justify-center">
            {residencesAvailables.slice(0,4).map((residencesAvailable) =>(
              <AvailableResidence residencesAvailable={residencesAvailable} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Residence