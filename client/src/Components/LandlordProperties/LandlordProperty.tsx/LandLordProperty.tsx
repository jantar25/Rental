import React,{ useState } from 'react'
import i18next from 'i18next';
import {deletePropety} from '../../../Redux/apiCalls'
import {useDispatch} from 'react-redux';
import { AiFillDelete,AiOutlineClose } from 'react-icons/ai';
import { FaBed,FaBath } from 'react-icons/fa';
import { MdChair } from 'react-icons/md';
import { ImSpoonKnife } from "react-icons/im";
import LandlordEditProperty from '../../LandlordPropertyManagement/LandlordEditProperty';



const LandLordProperty = ({property}:any) => {
    const [toggleEdit,setToggleEdit] = useState(false);

    const handleToggleEdit = () => {
        setToggleEdit(!toggleEdit)
      }

    const dispatch=useDispatch();

    const handleDelete = (id:any) => {
         deletePropety(id,dispatch)
      };

  return (
<div className=' flex-1 flex flex-col bg-gray-200 m-2 max-w-[280px] rounded'>              
            <div className=" flex flex-col w-full h-[400px]">
                <div className="flex-1 w-full h-1/3 justify-center items-center">
                    <img className="w-full h-full object-cover" src={property.OtherImages[0]} alt='itemImg' />
                </div>
                <div className="flex-1 flex flex-col justify-center ml-2 p-2 ">
                    <h1 className="text-lg text-orange-500 mb-2 font-[500]">{property.title}</h1>
                    <p className="text-[11px] mb-2 text-neutral-400">{property.Description.split(' ').splice(0, 15).join(' ')}...</p>
                    <p className="font-[900] text-[#002853]">Rwf {property.price}</p>
                    <div className=" flex flex-col justify-between text-neutral-600 text-sm">
                        <div className=" flex items-center my-2">
                            <h3 className="mr-1">{i18next.t('address')as string}</h3>
                            <p className='text-md font-[700]'>{property.address}/{property.District}</p>
                        </div>
                        <div className="flex items-center">
                            <h3 className="mr-1">{i18next.t('status')as string}</h3>
                            <p>{property.Avaiable ? (
                                <span className='text-md font-[700] text-green-500'>{i18next.t('available')as string}</span>
                                    ) : (
                                <span className='text-md font-[700] text-red-500'>{i18next.t('occupied')as string}</span>
                                    )}</p>
                        </div>
                    </div>
                    <div className="flex justify-between text-[#002853] mt-2 p-1 bg-gray-100 rounded-lg">
                        <div className="flex items-center justify-center">
                            <span className="font-[600] mr-1">{property.Livingrooms}</span>
                            <MdChair />
                        </div>
                        <div className="flex items-center justify-center">
                            <span className="font-[600] mr-1">{property.Kitchen}</span>
                            <ImSpoonKnife />
                        </div>
                        <div className="flex items-center justify-center">
                            <span className="font-[600] mr-1">{property.Bedroom}</span>
                            <FaBed />
                        </div>
                        <div className="flex items-center justify-center">
                            <span className="font-[600] mr-1">{property.BathRooms}</span>
                            <FaBath />
                        </div>
                    </div>
                    <div className="flex justify-between items-center py-4 px-2">
                        <button className='bg-[#002853] text-white font-[600] px-2 rounded' onClick={handleToggleEdit}>{i18next.t('edit')as string}</button>
                        <AiFillDelete style={{'color':'red','cursor':'pointer',"fontSize":'25px'}}
                        onClick={() => handleDelete(property._id)}/>            
                    </div>
                </div>
            </div>
            {toggleEdit && 
            <div className='h-screen w-screen overflow-auto fixed bottom-0 left-0 right-0 top-0 z-50'>
            <div className='h-screen w-screen fixed top-0 bottom-0 left-0 right-0 bg-black/[0.9]'></div>
                <div className="absolute top-16 left-0 right-0 bottom-7 w-11/12 max-h-full 
                    container ml-auto mr-auto rounded overflow-auto">              
                    <div className="w-full h-full">
                        <LandlordEditProperty property={property} handleToggleEdit={handleToggleEdit} />
                    </div>
                </div>
                <div className="absolute p-1 top-5 right-10 cursor-pointer bg-red-600 rounded-full" onClick={()=>handleToggleEdit()} >
                    <AiOutlineClose />
                </div>
            </div>}
    </div>
  )
}

export default LandLordProperty