import React from 'react'
import i18next from 'i18next';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

const DistrictResidence = ({districtResidence}:any) => {
  const properties = useSelector((state:any) => state.properties.properties);
  const districts = properties.map((propertie:any)=>propertie.District)
  const propertyNumber = districtResidence.district==="All" ? districts :
  districts.filter((district:any)=>district===districtResidence.district)

  return (
    <Link to={`/residences/${districtResidence.district}`}>
      <div className='relative flex w-[270px] h-[200px] m-2 hover:translate-y-2 duration-300'>
          <img src={districtResidence.townImage} alt="district img" className="w-full h-full rounded-lg brightness-50" />
          <div className="absolute bottom-4 left-2">
            <h2 className="text-white font-[700] text-3xl">{districtResidence.district}</h2>
            <p className="font-[600] text-orange-500 text-2xl">
              {propertyNumber.length}
            <span className="text-gray-200 text-lg ml-2">{i18next.t('properties')as string}</span>
            </p>
          </div>
      </div>
    </Link>
  )
}

export default DistrictResidence