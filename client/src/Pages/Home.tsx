import React from 'react'
import Navbar from '../Components/Navbar'
import Header from '../Components/Header'
import Logos from '../Components/Logos'
import DistrictResidences from '../Components/ResidenseByDistrict/DistrictResidences'
import AvailableResidences from '../Components/AvailableResidences/AvailableResidences'


const Home = () => {
  return (
    <div>
       <Navbar />
       <Header />
       <Logos />
       <DistrictResidences />
       <AvailableResidences />
    </div>
  )
}

export default Home