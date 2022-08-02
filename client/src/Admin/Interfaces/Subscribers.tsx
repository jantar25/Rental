import React,{ useEffect,useState} from 'react'
import { adminRequest } from '../../requestMethode';
import { format } from 'timeago.js';
import { MdDelete } from 'react-icons/md';

const Subscribers = () => {
    const [subscribers,setSubscribers] = useState<any>([]);

    useEffect(()=>{
      const getUsers = async ()=>{
        try {
          const res = await adminRequest.get("/newsletter");
        setSubscribers(res.data);
        } catch (error) {
          console.log(error)
        }
       
      }
      getUsers();
    },[])
  
    const newSubscribers = subscribers.sort(function(a:any, b:any) {
      return new window.Date(b.createdAt).getTime()-new window.Date(a.createdAt).getTime();
    });

  return (
    <div className='flex flex-col items-center text-sm py-4 px-2 w-full'>
      <h1 className="text-2xl my-4 text-[#002853] font-[900]">Newsletter Subscribers</h1>
      <table className='w-11/12 border border-[#002853] bg-gray-100 my-4 rounded-sm rounded'>
      <tbody className=''>
          <tr className='bg-[#002853] text-white'>
            <th className='text-center py-2'>Email</th>
            <th className='text-center py-2'>Subscribe Date</th>
          </tr>
          { newSubscribers.map((subscriber:any)=>(
              <tr key={subscriber._id} className=''>
                <td className='border-solid text-center py-1'>{subscriber.email}</td>
                <td className='border-solid text-center py-1'>{format(subscriber.createdAt)}</td>
            </tr>
        )) } 
          </tbody>
        </table>
    </div>
  )
}

export default Subscribers