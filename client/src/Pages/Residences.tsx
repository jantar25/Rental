import React,{ useState } from 'react'
import { useLocation } from 'react-router-dom'
import i18next from 'i18next';
import AllResidences from '../Components/AvailableResidences/AllResidences'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const Residences = () => {
  const location=useLocation();
  const cat = location.pathname.split("/")[2]; 
  const [sort,setSort] = useState("Newest");
  const [search,setSearch] = useState<any>(location.state)

  return (
    <div>
        <Navbar />
        <h1 className="text-orange-500 text-center m-4 text-[50px]">{cat}</h1>
          <div className='flex flex-wrap items-center justify-center p-4 '>
            <input className='bg-gray-200 py-2 px-4 w-full md:w-1/2 rounded-sm' defaultValue={search} 
            type='text' placeholder={i18next.t('search')as string} onChange={(e:any)=>setSearch(e.target.value)} />
            <div className="flex m-4">
                <select className="p-2 my-2 font-[600] rounded bg-gray-400" onChange={(e)=>setSort(e.target.value)}>
                  <option value ="newest">{i18next.t('new')as string}</option>
                  <option value ="asc">{i18next.t('priceAsc')as string}</option>
                  <option value ="desc">{i18next.t('priceDesc')as string}</option>
                </select> 
            </div>
          </div>
        <div className="px-4 lg:px-20 py-4 items-center justify-center ">
          <AllResidences cat={cat} sort={sort} search={search} />  
        </div>
        <Footer />
    </div>
  )
}

export default Residences