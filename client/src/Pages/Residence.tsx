import React,{useEffect, useState} from 'react'
import axios from "axios"
import {useSelector,useDispatch} from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { useLocation } from 'react-router-dom'
import AvailableResidence from '../Components/AvailableResidences/AvailableResidence/AvailableResidence'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import MapRender from '../Components/Mapbox/Mapbox';
import {updateProperty} from '../Redux/apiCalls'
import { AiOutlineArrowRight,AiOutlineArrowLeft,AiOutlineClose } from 'react-icons/ai';
const avatar = require("../Images/avatar.png")


const Residence = () => {
    const location = useLocation()
    const dispatch = useDispatch();
    const currentPropetyId = location.pathname.split('/')[2];
    const properties = useSelector((state:any) => state.properties.properties);
    const residence = properties.filter((propertie:any)=>propertie._id === currentPropetyId)[0];
    const recomendedResidences = properties.filter((propertie:any)=>propertie.District === residence.District)
    const filteredRecomendedResidences=recomendedResidences.filter((propertie:any)=>propertie._id !== currentPropetyId); 
    const OtherImages = residence.OtherImages;
    const [error,setError] = useState()
    const [ isOpen,setIsOpen ] = useState(false)
    const [ slideNumber,setSlideNumber ] = useState(0)
    const [toggleMap, setToggleMap] = useState(false)
    const [residenceOwner,setResidenceOwner] = useState<any>([])
    const [bookingInputs,setBookingInputs] = useState<any>({
      names:'',
      number:'',
      transactionId:'',
      propertyName:'',
      propertyAddress:'',
      landlordNumber:'',
      eror:'',
      loading:false,
    })

    const {names,number,transactionId,eror,loading} = bookingInputs

    const handleChange = (e:any)=>{
      setBookingInputs({...bookingInputs,[e.target.name]:e.target.value})
      }

    const handleBooking = (e:any) => {
      e.preventDefault();
      setBookingInputs({ ...bookingInputs,eror:'',loading:true });
      if(!names || !number || !transactionId ) {
        setBookingInputs({ ...bookingInputs,eror: 'All fields are required' })
      } else {
        const Booking = ({...bookingInputs,propertyName:residence.title,propertyAddress:residence.address,landlordNumber:residenceOwner.line1})
        const updatedProperty = ({...residence,Avaiable: false})
        const id = currentPropetyId
        try {
          const bookingResidance = async () => {
            const res = await axios.post(`http://localhost:5000/api/messages`,Booking)
            setError(res.data.message);
            updateProperty(id,updatedProperty,dispatch)
            setBookingInputs({
              names:'',
              number:'',
              transactionId:'',
              propertyName:'',
              propertyAddress:'',
              eror:'',
              loading:false,
            })
          }
          bookingResidance()
      } catch(error:any){
        setError(error.massage)
      }
      }
    }
 
    const handleSlide = (i:number) =>{
      setIsOpen(true)
      setSlideNumber(i)
    }

    if(isOpen){
      document.body.classList.add('overflow-hidden')
      } else  {
          document.body.classList.remove('overflow-hidden')
      }

    const handleArrow = (direction:string) =>{
      let swappedSlideNumber
      if (direction==="left"){
        swappedSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1
      } else {
        swappedSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1
      }
      setSlideNumber(swappedSlideNumber)
    }
    
    useEffect(() => {
      const getResidanceOwner= async ()=>{
        try {
            const res = await axios.get(`http://localhost:5000/api/landLordAuth/find/${residence.OwnerDetails[0]._id}`)
            setResidenceOwner(res.data);
        } catch(err){
            console.log(err)
        }
    };
    getResidanceOwner();
    },[])


  return (
      <div className='relative'>
      <Navbar />
      {toggleMap && 
      <div className='h-screen w-screen overflow-auto fixed bottom-0 left-0 right-0 top-0 z-50'>
      <div className='h-screen w-screen fixed top-0 bottom-0 left-0 right-0 bg-black/[0.9]'></div>
        <div className="absolute top-12 left-0 right-0 w-11/12 md:w-3/4 h-3/4 
              container ml-auto mr-auto rounded overflow-auto ">
          <MapRender residence={residence} />
        </div>
        <div className="absolute top-5 right-10 cursor-pointer text-red-600" onClick={()=>setToggleMap(false)} >
          <AiOutlineClose style={{fontSize:'25px',fontWeight:'900'}} />
        </div>
      </div>}
      {isOpen && 
      <div className='h-screen w-screen overflow-auto fixed bottom-0 left-0 right-0 top-0 z-50'>
      <div className='h-screen w-screen fixed top-0 bottom-0 left-0 right-0 bg-black/[0.9]'></div>
        <div className="absolute bottom-4 md:bottom-1/2 left-8 md:left-2 p-2 cursor-pointer bg-white rounded-full" onClick={()=>handleArrow("left")}>
          <AiOutlineArrowLeft />
        </div>
        <div className="absolute p-2 top-5 right-5 cursor-pointer bg-red-600 rounded-full" onClick={()=>setIsOpen(false)} >
          <AiOutlineClose />
        </div>
        <div className="absolute bottom-4 md:bottom-1/2 right-8 md:right-2 p-2 cursor-pointer bg-white rounded-full" onClick={()=>handleArrow("right")}>
          <AiOutlineArrowRight />
        </div>
        <div className="absolute top-16 bottom-16 left-0 right-0 w-11/12 md:w-3/4 max-h-full 
            container ml-auto mr-auto rounded overflow-auto border border-neutral-600">
            <img src={OtherImages[slideNumber]} alt="" className="w-full h-full rounded" />
        </div>
      </div>}
      <div className="px-4 lg:px-20 py-8 ">
        <h1 className="text-4xl font-[600] text-center my-4 text-[#002853]">{residence.title}</h1>
        <div className="bg-purple-50 rounded">
          <div className="flex flex-col md:flex-row p-2 ">
            <div className="flex-1 w-full h-[450px] p-2">
              <img src={residence.OtherImages[0]} alt="MainImg" className="w-full h-full object-cover rounded-lg" />
            </div>
            <div className="flex-1 p-2 h-[450px] overflow-auto">
              <h2 className="text-2xl font-[600] text-orange-400">Property Details:</h2>
              <div className="">
                <button className="px-2 py-1 bg-gray-800 text-white rounded font-[600] text-sm my-2" onClick={()=>setToggleMap(true)}>
                  View Map
                </button>
                <div className="text-gray-500 my-2">Status: {residence.Avaiable ? (
                  <span className='text-lg font-[700] text-green-500'>Available</span>
                ) : (
                  <span className='text-lg font-[700] text-red-500'>Occupied</span>
                )}
              </div>
                <p className="text-gray-500 my-2">Address: <span className='font-[600]'>{residence.address}/{residence.District}</span></p>
                <p className="text-gray-500 my-2">Price/Month: <span className='font-[600] text-orange-400 text-lg'>{residence.price} Frw</span></p>
                <p className="text-gray-500 my-2">Living Room: <span className='font-[600] text-gray-700 text-lg'>{residence.Livingrooms}</span></p>
                <p className="text-gray-500 my-2">Bed Room: <span className='font-[600] text-gray-700 text-lg'>{residence.Bedroom}</span></p>
                <p className="text-gray-500 my-2">Bath Room: <span className='font-[600] text-gray-700 text-lg'>{residence.BathRooms}</span></p>
                <p className="text-gray-500 my-2">Kitchen: <span className='font-[600] text-gray-700 text-lg'>{residence.Kitchen}</span></p>
                <p className="text-gray-500 my-2">Floors: <span className='font-[600] text-gray-700 text-lg'>{residence.Floors}</span></p>
                <p className="text-gray-500 my-2">{residence.Description}</p>
              </div>
            </div>
          </div>
          <div className="p-2 ">
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
              >
                {OtherImages.map((OtherImage:any,i:any)=>(
                  <SwiperSlide className='flex my-2 justify-center' key={i}>
                    <div className="h-[100px] w-[150px] cursor-pointer" onClick={()=>handleSlide(i)} >
                      <img src={OtherImage} alt='OtherImg' className='h-full w-full' />
                    </div>
                  </SwiperSlide> ))}
            </Swiper>
          </div>
        </div>
        <div className="mt-8 p-2 md:p-8 bg-purple-50 rounded">
            <div className="mb-4">
              <h1 className="text-2xl font-[600] text-orange-400">Landlord Contact details:</h1>
              <p className="text-gray-500">Please use the details below to book or visit of the property.</p>
            </div>
            <div className='flex items-center justify-start flex-col lg:flex-row'>
              <div className="flex-1 flex flex-col sm:flex-row items-center p-2">
                <div className="w-[150px] h-[150px] m-8">
                  <img src={residenceOwner.img? residenceOwner.img: avatar} alt="profileimg" className="w-full h-full rounded-full object-cover" />
                </div>
                <div className="">
                  <p className="text-gray-500 my-2">Names: <span className='font-[600] text-gray-700 text-lg'>{residenceOwner.names}</span></p>
                  <p className="text-gray-500 my-2">Call: <span className='font-[600] text-gray-700 text-lg'>{residenceOwner.line1}</span></p>
                  <p className="text-gray-500 my-2">Mobile Money: <span className='font-[600] text-gray-700 text-lg'>{residenceOwner.line2}</span></p>
                  <p className="text-gray-500 my-2">Email: <span className='font-[600] text-gray-700 text-lg'>{residenceOwner.email}</span></p>
                </div>
              </div>
              {residence.Avaiable ?(
              <div className='flex-1 p-2 bg-purple-300 rounded sm:w-3/4 lg:w-full'>
                <div>
                  <h2 className='font-[700] text-[#002853] text-[20px] my-2'>Want to Book the Rent of this property?</h2>
                  <p className='text-[13px] text-gray-800'>Please pay the equivalent of <strong>2(two)Months</strong> via MTN Mobile money using the number marked as 
                  <strong> Mobile Money</strong> and send us the below request:</p>
                </div>
                <form className='mt-2 p-1 rounded-lg bg-purple-200' onSubmit={handleBooking}>
                  <div className='flex flex-col'>
                    <input className='my-1 p-1 rounded' placeholder='Names' name="names" value={names} type="text" onChange={handleChange} />
                    <input className='my-1 p-1 rounded' placeholder='Phone Number' name="number" value={number} onChange={handleChange}  />
                    <input className='my-1 p-1 rounded' placeholder='Transaction Number' name="transactionId" value={transactionId} onChange={handleChange}  />
                  </div>
                  {eror? (<p className='text-red-500 font-[600] my-2'>{`*${bookingInputs.eror}*`}</p>) : null}
                  {error==="susccessful"? (<p className='bg-green-500 text-white font-[600] my-2 p-2 rounded text-center'>Booked successfully</p>)
                  : (<p className='bg-red-500 text-white font-[600] my-2 p-2 rounded'>{`*Something went wrong*`}</p>)}
                  <button className='mt-3 px-3 py-1 rounded-md text-white font-[700] bg-[#002853]' type='submit' >{loading? 'Booking ...' : 'Book Now'}</button>
                </form>
              </div>
              ) : (
                <div className='flex-1 p-2 bg-purple-200 rounded sm:w-3/4 lg:w-full'>
                  <p className='text-xl text-red-700 font-[700] text-center'>This Property is not Available for now</p>
                </div>
              )}
            </div>
          </div>
        <div className="">
          <h1 className="text-2xl mt-12 mb-4 font-[700] text-[#002853]">Recommended Residences:</h1>
          <div className="flex flex-wrap items-center justify-center">
            {filteredRecomendedResidences?.length > 0? filteredRecomendedResidences.slice(0,4).map((recomendedResidence:any) =>(
              <AvailableResidence residencesAvailable={recomendedResidence} key={recomendedResidence._id} />
            )) : <p className='text-center m-4 text-orange-500 font-[600] text-lg'>There is no related Properties</p>}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Residence