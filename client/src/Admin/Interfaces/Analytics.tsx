import React,{ useEffect, useMemo, useState } from 'react'
import Chart from '../Components/Chart'
import { adminRequest } from '../../requestMethode'

const Analytics = () => {
    const [useStats,setUserStats] = useState<any>([]);

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
  
    useEffect(()=>{
      const getStats = async () =>{
        try {
          const res = await adminRequest.get("/landLordAuth/stats")
          setUserStats(
          res.data.map((item:any)=>{
            return {name:MONTHS[item._id-1], "Active User":item.total};
          }))
        } catch (error) {
          console.log(error)
        }
      }
      getStats();
    },[MONTHS])
  return (
    <div>
        <Chart data={useStats} title="Landlords Analytics" dataKey="Active User"/>
    </div>
  )
}

export default Analytics