import React from 'react'
import { districtResidences } from '../../data'
import DistrictResidence from './DistrictResidence/DistrictResidence'

const DistrictResidences = () => {
  return (
    <div className='px-4 lg:px-20 pt-8'>
        <div className="flex justify-center items-cemter flex-wrap">
            {districtResidences.map((districtResidence)=>(
                <div>
                    <DistrictResidence districtResidence={districtResidence} />
                </div>
            ))}
        </div>
    </div>
  )
}

export default DistrictResidences