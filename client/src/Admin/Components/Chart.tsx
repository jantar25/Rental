import React,{ useEffect, useMemo, useState } from 'react'
import { adminRequest } from '../../requestMethode';

const Chart = () => {
    const [useStats,setUserStats] = useState([]);
    const MONTHS = useMemo(
        ()=>[
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
      ],[]);
    
    //   useEffect(()=>{
    //     const getStats = async () =>{
    //       try {
    //         const res = await adminRequest.get("/users/stats")
    //         res.data.map((item:any)=>{
    //           setUserStats((prev) => [...prev,{name:MONTHS[item._id-1], "Active User":item.total}]);
    //         })
    //       } catch (error) {
    //         console.log(error)
    //       }
    //     }
    //     getStats();
    //   },[MONTHS])

  return (
    <div>

    </div>
  )
}

export default Chart