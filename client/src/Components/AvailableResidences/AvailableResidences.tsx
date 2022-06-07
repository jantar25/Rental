import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { Link } from 'react-router-dom';
import { residencesAvailables } from '../../data'
import AvailableResidence from './AvailableResidence/AvailableResidence'

const AvailableResidences = () => {

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
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}   
        >
          {residencesAvailables.map((residencesAvailable)=>(
            <SwiperSlide key={residencesAvailable.id} className='flex my-8 justify-center'>
              <Link to={`/residence/${residencesAvailable.id}`}>
                <AvailableResidence residencesAvailable={residencesAvailable} />
              </Link>
            </SwiperSlide> ))}
      </Swiper>    
    </div>
  )
}

export default AvailableResidences