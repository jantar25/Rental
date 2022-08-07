import React,{ useEffect,useState} from 'react'
import { adminRequest } from '../../requestMethode';
import { format } from 'timeago.js';
import { MdDelete } from 'react-icons/md';

const LandLords = () => {
  const [landlords,setLandlords] = useState<any>([]);

  useEffect(()=>{
    const getUsers = async ()=>{
      try {
        const res = await adminRequest.get("/landLordAuth");
        setLandlords(res.data);
      } catch (error) {
        console.log(error)
      }
     
    }
    getUsers();
  },[])

  const newLandLords = landlords.sort(function(a:any, b:any) {
    return new window.Date(b.createdAt).getTime()-new window.Date(a.createdAt).getTime();
  });

  const DeleteLandlod = async (id:any) => {
    try {
      const res = await adminRequest.delete(`/landLordAuth/${id}`)
      setLandlords(res.data);
    } catch (error) {
      console.log(error)
    }
   
  }
  

  return (
<div className='flex flex-col items-center text-[8px] sm:text-sm py-4 px-2 w-full'>
      <h1 className="text-2xl my-4 text-[#002853] font-[900]">Joined Landlords</h1>
      <table className='w-11/12 border border-[#002853] bg-gray-100 my-4 rounded-sm rounded'>
      <tbody className=''>
          <tr className='bg-[#002853] text-white'>
            <th className='text-center py-2'>Images</th>
            <th className='text-center py-2'>Names</th>
            <th className='text-center py-2'>Email</th>
            <th className='text-center py-2'>Phone</th>
            <th className='text-center py-2'>Momo</th>
            <th className='text-center py-2'>Join Date</th>
            <th className='text-center py-2'>Check</th>
          </tr>
          { newLandLords && newLandLords.map((landlord:any)=>(
              <tr key={landlord._id} className=''>
                <td className='border-solid py-1 flex items-center justify-center'>
                  <div className="w-[25px] h-[25px] ">
                    <img src={landlord.img} alt='landlordImg' className='w-full h-full rounded-full'/>
                  </div>
                </td>
                <td className='border-solid text-center py-1'>{landlord.names}</td>
                <td className='border-solid text-center py-1'>{landlord.email}</td>
                <td className='border-solid text-center py-1'>{landlord.line1}</td>
                <td className='border-solid text-center py-1'>{landlord.line2}</td>
                <td className='border-solid text-center py-1'>{format(landlord.createdAt)}</td>
                <td className='border-solid flex items-center justify-center py-1'>
                  <div className="text-red-600">
                    <MdDelete style={{fontSize:'20px',cursor:'pointer'}} onClick={() => DeleteLandlod(landlord._id)}/>
                  </div>
                </td>
            </tr>
        )) } 
          </tbody>
        </table>
    </div>
  )
}

export default LandLords