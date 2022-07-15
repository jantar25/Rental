import React,{ useState,useEffect } from 'react'
import axios from "axios"
import { Residence } from "../../Types/Types"
import AvailableResidence from './AvailableResidence/AvailableResidence'

const AllResidences = ({sort,cat,search}:any) => {
  const [properties, setProperties] = useState<Residence[]>([])
      //In case of multiple search

  const searchKeys = ["title","address"];
  const searchItems = (properties:any) => {
    if(search === null) {
      return properties
    }
    return properties.filter(
        (searchProperty:any)=>searchKeys.some(
          key=>typeof searchProperty[key] === "string" && searchProperty[key].toLowerCase().includes(search)
            )
        )
      } 
  const searchProducts = searchItems(properties);

  
  useEffect(()=>{
    const getProperties= async ()=>{
        try {
            const res = await axios.get(cat==="All"? "http://localhost:5000/api/property":
             `http://localhost:5000/api/property?district=${cat}`)

             setProperties(res.data);
        } catch(err){
            console.log(err)
        }
    };
    getProperties();  
},[cat])


useEffect(()=>{
  if(sort=== "newest"){
    setProperties((prev)=>
      [...prev].sort((a:any,b:any)=>new Date(b.createdAt).getTime()-new Date(a.createdAt).getTime()))
  } else if (sort=== "asc"){
    setProperties((prev)=>
    [...prev].sort((a:any,b:any)=>a.price - b.price))
} else {
  setProperties((prev)=>
    [...prev].sort((a:any,b:any)=>b.price - a.price))
}
}, [sort])

  return (
    <div>
      {properties.length>0? (
        <div>
          {searchProducts.length>0? (
            <div className='flex flex-wrap justify-center'>
                {searchProducts.map((propertie:any)=>(
                  <div key={propertie._id} className='my-8'>
                    <AvailableResidence residencesAvailable={propertie} />
                  </div> ))}
            </div>
          ) : (
            <div  className='text-center m-4'>
              <p className='text-gray-500 text-lg font-[700]'>No more Property with that Specification</p>
            </div>
          )}
        </div>
      ) : (
        <div className='text-center m-4'>
           <p className='text-gray-500 text-lg font-[700]'>No more Properties</p>
        </div>
      )}
    </div>
  )
}

export default AllResidences