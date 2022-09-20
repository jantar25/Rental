import React,{ useEffect,useState} from 'react'
import { adminRequest } from '../../requestMethode';
import { format } from 'timeago.js';


const Booking = () => {
  const [orders,setOrders] = useState<any>([]);

  useEffect(()=>{
    const getOrders = async ()=>{
      try {
        const res = await adminRequest.get("/messages");
        setOrders(res.data);
      } catch (error) {
        console.log(error)
      }
     
    }
    getOrders();
  },[])

  const newOrders = orders.sort(function(a:any, b:any) {
    return new window.Date(b.createdAt).getTime()-new window.Date(a.createdAt).getTime();
  });


  return (
    <div className='flex flex-col items-center text-[8px] sm:text-sm py-4 px-2 w-full'>
      <h1 className="text-2xl my-4 text-[#002853] font-[900]">Latest transactions</h1>
      <table className='w-11/12 border border-[#002853] bg-gray-100 my-4 rounded-sm rounded'>
      <tbody className=''>
          <tr className='bg-[#002853] text-white'>
            <th className='text-center py-2'>Customer</th>
            <th className='text-center py-2'>Date</th>
            <th className='text-center py-2'>Amount</th>
            <th className='text-center py-2'>TransactionID</th>
            <th className='text-center py-2'>landlordName</th>
          </tr>
          { newOrders.map((order:any)=>(
              <tr key={order._id} className=''>
                <td className='border-solid text-center py-1'>{order.names}</td>
                <td className='border-solid text-center py-1'>{format(order.createdAt)}</td>
                <td className='border-solid text-center py-1'>{order.Amount}</td>
                <td className='border-solid text-center py-1'>{order.transactionId}</td>
                <td className='border-solid text-center py-1'>{order.landlordName}</td>
            </tr>
        )) } 
          </tbody>
        </table>
    </div>
  )
}

export default Booking