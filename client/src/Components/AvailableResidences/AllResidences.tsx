import React,{ useState,useEffect } from 'react'
import axios from "axios"
import { Residence } from "../../Types/Types"
import AvailableResidence from './AvailableResidence/AvailableResidence'

const AllResidences = ({sort,cat,filters}:any) => {
  const [properties, setProperties] = useState<Residence[]>([])
  
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


  return (
    <div className='flex flex-wrap justify-center'>
        {properties.map((propertie)=>(
            <div key={propertie._id} className='my-8'>
              <AvailableResidence residencesAvailable={propertie} />
            </div> ))}
    </div>
  )
}

export default AllResidences