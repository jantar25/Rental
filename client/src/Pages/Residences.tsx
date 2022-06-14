import React,{ useState } from 'react'
import { useLocation } from 'react-router-dom'
import AllResidences from '../Components/AvailableResidences/AllResidences'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const Residences = () => {
  const location=useLocation();
  const cat = location.pathname.split("/")[2]; 
  const [filters,setFilters] = useState({});
  const [sort,setSort] = useState("Newest");

  const handleFilters = (e:any)=>{
      const value = e.target.value;
      setFilters({...filters,[e.target.name] : value})
  }
  return (
    <div>
        <Navbar />
        <h1 className="text-orange-500 text-center m-4 text-[50px]">{cat}</h1>
           <div className="flex flex-col md:flex-row justify-between">
                <div className="flex m-4 items-center justify-start flex-wrap">
                    <h3 className="text-gray-600 font-[700] mr-4">Filter Residences:</h3>
                    <select className="mr-4 p-2 my-2 font-[600] rounded bg-gray-500" name="content" onChange={handleFilters}>
                        <option disabled>District</option>
                        <option>Nyarugenge</option>
                        <option>Gasabo</option>
                        <option>Kicukiro</option>
                    </select>               
                </div>
                <div className="flex m-4 items-center justify-start flex-wrap">
                    <h3 className="text-gray-600 font-[700] mr-4">Sort Residences:</h3>
                    <select className="mr-4 p-2 my-2 font-[600] rounded bg-gray-500" onChange={(e)=>setSort(e.target.value)}>
                        <option value ="newest">Newest</option>
                        <option value ="asc">Price(Asc)</option>
                        <option value ="desc">Price(Desc)</option>
                    </select> 
                </div>
           </div>
        <div className="px-4 lg:px-20 py-4 items-center justify-center ">
          <AllResidences cat={cat} sort={sort} filters={filters} />  
        </div>
        <Footer />
    </div>
  )
}

export default Residences