import React from 'react'
import LandlordProperty from './LandlordProperty.tsx/LandLordProperty'
import {useSelector} from 'react-redux';

const LandlordProperties = () => {
    const properties = useSelector((state:any) => state.properties.properties);
    const landlord=useSelector((state:any)=>state.landLord.currentLandLord);
    const landlordId = landlord?._id
    const landlordProperties = properties?.filter(
        (propertie:any) => 
        propertie?.OwnerDetails[0]?._id === landlordId 
      );
      
  return (
    <div className='flex flex-col justify-center items-center p-4'>
    {landlordProperties.length>0? 
    (<div className='flex justify-around items-center flex-wrap'>
        {landlordProperties.map((landlordProperty:any)=>(
        <div key={landlordProperty._id}>
            <LandlordProperty property={landlordProperty} />
        </div> ))}
    </div>) : 
    (<div>
        <p className='text-center font-[700]'> You don't have any Property yet</p>
    </div>)}
</div>
  )
}

export default LandlordProperties