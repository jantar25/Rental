import React from 'react'

const DistrictResidence = ({districtResidence}:any) => {
  return (
    <div className='relative flex w-[270px] h-[200px] m-2'>
        <img src={districtResidence.townImage} alt="district img" className="w-full h-full rounded-lg brightness-50" />
        <div className="absolute bottom-4 left-2">
          <h2 className="text-white font-[700] text-3xl">{districtResidence.district}</h2>
          <p className="font-[600] text-orange-500 text-2xl">
            {districtResidence.properties}
          <span className="text-gray-200 text-lg ml-2">Properties</span>
          </p>
        </div>
    </div>
  )
}

export default DistrictResidence