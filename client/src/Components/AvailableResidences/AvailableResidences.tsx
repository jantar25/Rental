import { useState,useEffect } from 'react'
import { useDispatch } from 'react-redux'
import axios from "axios"
import { getProperties } from '../../Redux/apiCalls'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { residencesAvailables } from '../../data'
import AvailableResidence from './AvailableResidence/AvailableResidence'

const AvailableResidences = () => {
  const dispatch = useDispatch()
  const [properties,setProperties] =useState<any[]>([])

  useEffect(()=>{
    const getProperties= async ()=>{
        try {
            const res = await axios.get("http://localhost:5000/api/property")
            setProperties(res.data);
        } catch(err){
            console.log(err)
        }
    };
    getProperties();  
},[])

  useEffect(() => {
    getProperties(dispatch)
  }, [dispatch])

  const availableProperties = properties?.filter(
        (propertie:any) => 
        propertie?.Avaiable === true 
      );

  return (
    <div className='px-4 lg:px-20 py-8'>
        <div>
            <h3 className="text-orange-600 text-lg font-[600]">Best Choise</h3>
            <h1 className="text-purple-900 my-2 text-3xl font-[700]">Available Residences<span className="text-pink-500 ">.</span></h1>
            <div className='w-[80px] h-[5px] bg-gradient-to-r from-purple-400 via-pink-500 to-[#FF8A71] 
                shadow-lg mb-[5px]'/>
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
              slidesPerView: 4,
              spaceBetween: 10,
            },
          }}
          modules={[Pagination]}  
        >
          {availableProperties.map((availablePropertie)=>(
            <SwiperSlide key={availablePropertie._id} className='flex my-8 justify-center'>
              <AvailableResidence residencesAvailable={availablePropertie} />
            </SwiperSlide> ))}
      </Swiper>    
    </div>
  )
}

export default AvailableResidences