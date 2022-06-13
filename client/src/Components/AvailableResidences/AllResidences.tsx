import React from 'react'
import { residencesAvailables } from '../../data'
import AvailableResidence from './AvailableResidence/AvailableResidence'

const AllResidences = () => {
  return (
    <div>
        {residencesAvailables.map((residencesAvailable)=>(
            <div key={residencesAvailable.id} className='flex my-8 justify-center'>
              <AvailableResidence residencesAvailable={residencesAvailable} />
            </div> ))}
    </div>
  )
}

export default AllResidences