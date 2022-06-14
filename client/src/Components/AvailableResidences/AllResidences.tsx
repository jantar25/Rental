import React,{ useState,useEffect } from 'react'
import { residencesAvailables } from '../../data'
import AvailableResidence from './AvailableResidence/AvailableResidence'

const AllResidences = ({sort,cat,filters}:any) => {

  return (
    <div className='flex flex-wrap justify-center'>
        {residencesAvailables.map((residencesAvailable)=>(
            <div key={residencesAvailable.id} className='my-8'>
              <AvailableResidence residencesAvailable={residencesAvailable} />
            </div> ))}
    </div>
  )
}

export default AllResidences