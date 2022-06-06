import React from 'react'
import Navbar from '../Components/Navbar'
import Header from '../Components/Header'
import Logos from '../Components/Logos'
import DistrictResidences from '../Components/ResidenseByDistrict/DistrictResidences'
import AvailableResidences from '../Components/AvailableResidences/AvailableResidences'
import Value from '../Components/Value'
import Footer from '../Components/Footer'


const Home = () => {
  return (
    <div>
       <Navbar />
       <Header />
       <Logos />
       <DistrictResidences />
       <AvailableResidences />
       <Value />
       <Footer />
    </div>
  )
}

export default Home