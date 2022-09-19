import React,{useEffect,useState} from 'react'
import { useSelector } from 'react-redux'
import i18next from 'i18next';
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import { publicRequest } from '../requestMethode'
import { format } from 'timeago.js';


const LandlordBookings = () => {
    const [orders,setOrders] = useState<any>([]);
    const landLord= useSelector((state:any)=>state.landLord.currentLandLord);

    useEffect(()=>{
      const getOrders = async ()=>{
        try {
          const res = await publicRequest.get("/messages");
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


    const FarmerOrders = newOrders.filter(
        (order:any) => (order?.landlordName === landLord.names)
        );
        const date =new Date(FarmerOrders[1]?.createdAt)
        date.setMonth(date.getMonth() + 2)
        const currentDate = new Date()

  return (
    <div>
        <Navbar />
        <div className='flex flex-col items-center text-[8px] sm:text-sm py-4 px-2 w-full'>
        <h1 className="text-2xl my-4 text-[#002853] font-[900]">{i18next.t('transation')as string}</h1>
        <table className='w-11/12 border border-[#002853] bg-gray-100 my-4 rounded-sm rounded'>
        <tbody className=''>
            <tr className='bg-[#002853] text-white'>
                <th className='text-center py-2'>{i18next.t('title')as string}</th>
                <th className='text-center py-2'>{i18next.t('address')as string}</th>
                <th className='text-center py-2'>{i18next.t('Customer')as string}</th>
                <th className='text-center py-2'>{i18next.t('Amount')as string}</th>
                <th className='text-center py-2'>{i18next.t('transactionNumber')as string}</th>
                <th className='text-center py-2'>{i18next.t('Date')as string}</th>
                <th className='text-center py-2'>{i18next.t('status')as string}</th>
            </tr>
            { FarmerOrders.map((order:any)=>(
                <tr key={order._id} className=''>
                    <td className='border-solid text-center py-1'>{order.propertyName}</td>
                    <td className='border-solid text-center py-1'>{order.propertyAddress}</td>
                    <td className='border-solid text-center py-1'>{order.names}</td>
                    <td className='border-solid text-center py-1'>{order.Amount}</td>
                    <td className='border-solid text-center py-1'>{order.transactionId}</td>
                    <td className='border-solid text-center py-1'>{format(order.createdAt)}</td>
                    <td className="text-gray-500 my-2">{date > currentDate ? (
                  <span className='text-md font-[700] text-green-500'>{i18next.t('Uptodate')as string} </span>
                ) : (
                  <span className='text-md font-[700] text-red-500'>{i18next.t('exipired')as string} </span>
                )}
              </td>
                </tr>
            )) } 
            </tbody>
            </table>
        </div>
        <Footer />
    </div>
  )
}

export default LandlordBookings