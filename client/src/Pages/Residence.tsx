import React from 'react'
import { useLocation } from 'react-router-dom'
import { residencesAvailables } from '../data'
import AvailableResidence from '../Components/AvailableResidences/AvailableResidence/AvailableResidence'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const Residence = () => {
    const location = useLocation()
    const user = parseInt(location.pathname.split('/')[2]);
    const residence = residencesAvailables.filter((residencesAvailable)=>residencesAvailable.id === user )[0];
    
  return (
    <div>
      <Navbar />
      <div className="px-4 lg:px-20 py-8 ">
        <div className="flex flex-col md:flex-row">
          <div className="flex-1 m-2 w-full h-[450px]">
            <img src={residence.FrontImage} alt="MainImg" className="w-full h-full object-cover rounded-lg" />
          </div>
          <div className="flex-1 m-2">
            <h2 className="">{residence.title}</h2>

          </div>
        </div>
        <div className="">
          <h1 className="text-2xl mt-12 mb-4">Recommended Residences</h1>
          <div className="flex flex-wrap items-center justify-center">
            {residencesAvailables.slice(0,4).map((residencesAvailable) =>(
              <AvailableResidence residencesAvailable={residencesAvailable} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Residence