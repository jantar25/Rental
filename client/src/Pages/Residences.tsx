import React from 'react'
import AvailableResidence from '../Components/AvailableResidences/AvailableResidence/AvailableResidence'
import { residencesAvailables } from '../data'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const Residences = () => {
  return (
    <div>
        <Navbar />
        <div className="flex flex-wrap px-4 lg:px-20 py-4 items-center justify-center ">
            {residencesAvailables.map((residencesAvailable)=>(
              <AvailableResidence residencesAvailable={residencesAvailable} />  
            ))}
        </div>
        <Footer />
    </div>
  )
}

export default Residences