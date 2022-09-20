import React,{useEffect,useState} from 'react'
import { AiOutlineArrowUp,AiOutlineArrowDown } from 'react-icons/ai';
import { adminRequest } from '../../requestMethode';


const FeaturedInfo = () => {
    const [income,setIncome] = useState<any>([]);
    const [percentage,setPercentage] = useState(0)
    
    useEffect(()=>{
      const getIncome = async ()=> {
        try {
          const res = await adminRequest.get("/messages/income");
          setIncome(res.data);
          setPercentage((res.data[0]?.total *100)/res.data[1]?.total -100)
        } catch (error) {
          console.log(error)
        }
      }  
      getIncome();
    },[]);


    // const currentIncome:any  = income.reduce((currentTotal:any,item:any) =>{
    //   return currentTotal = currentTotal > item._id ? currentTotal : item
    // },0)
    
 
    // useEffect(()=>{
    //   const lastIncome:any = income.filter((item:any) => item._id === currentIncome._id - 1)
    //   setPercentage((currentIncome.total *100)/lastIncome[0]?.total -100)
    // },[income,currentIncome])


  return (
    <div className='m-2 flex flex-wrap items-center justify-center'>
        <div className="bg-gradient-to-b from-[#002853] to-[#040C18] text-white rounded-lg p-2 w-[270px] m-1">
            <h3 className="text-lg font-[700]">Revenue</h3>
            <div className="flex my-2 items-center justify-between">
                <h1 className="text-3xl">{income[0]?.total}<span className='text-orange-600 text-lg'>Rwf</span></h1>
                <div className="flex items-center">
                <span className='mr-2'>{Math.floor(percentage)}{""} % </span>
                    {percentage<0? <AiOutlineArrowDown style={{ color: 'red' }} /> :
                            <AiOutlineArrowUp style={{ color: 'green' }} />
                        }
                </div>
            </div>
            <span className="text-gray-500">Compared to last month</span>
        </div>
        <div className="bg-gradient-to-b from-[#002853] to-[#040C18] text-white rounded-lg p-2 w-[270px] m-1">
            <h3 className="text-lg font-[700]">Our Profit</h3>
            <div className="flex my-2 items-center justify-between">
                <h1 className="text-3xl">{income[0]?.total*0.05}<span className='text-orange-600 text-lg'>Rwf</span></h1>
                <div className="flex items-center">
                <span className='mr-2'>{Math.floor(percentage)}{""} % </span>
                    {percentage<0? <AiOutlineArrowDown style={{ color: 'red' }} /> :
                            <AiOutlineArrowUp style={{ color: 'green' }} />
                        }
                </div>
            </div>
            <span className="text-gray-500">Compared to last month</span>
        </div>
        <div className="bg-gradient-to-b from-[#002853] to-[#040C18] text-white rounded-lg p-2 w-[270px] m-1">
            <h3 className="text-lg font-[700]">Landlords Due</h3>
            <div className="flex my-2 items-center justify-between">
                <h1 className="text-3xl">{income[1]?.total-income[0]?.total*0.05}<span className='text-orange-600 text-lg'>Rwf</span></h1>
                <div className="flex items-center">
                <span className='mr-2'>{Math.floor(percentage)}{""} % </span>
                    {percentage<0? <AiOutlineArrowDown style={{ color: 'red' }} /> :
                            <AiOutlineArrowUp style={{ color: 'green' }} />
                        }
                </div>
            </div>
            <span className="text-gray-500">Compared to last month</span>
        </div>
    </div>
  )
}

export default FeaturedInfo