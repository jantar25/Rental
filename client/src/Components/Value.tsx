import React,{useState} from 'react' 
import { TiPointOfInterestOutline,TiCancel } from 'react-icons/ti';
import { AiOutlineCaretDown,AiOutlineCaretUp } from 'react-icons/ai';
import { IoIosStats } from 'react-icons/io';
import { MdVerifiedUser } from 'react-icons/md';

const valueImg = require("../Images/home1.jpg")
const Value = () => {
    const [toggle1,setToggle1] = useState(false)
    const [toggle2,setToggle2] = useState(false)
    const [toggle3,setToggle3] = useState(false)
    const [toggle4,setToggle4] = useState(false)
  return (
    <div className='px-4 lg:px-20 py-8'>
        <div className="flex">
            <div className="hidden flex-1 relative md:flex justify-center">
                <div className='self-end bg-gradient-to-b from-gray-700 via-gray-400 to-white w-[260px] h-[284px] 
                md:w-[350px] md:h-[500px] rounded-t-[160px] md:rounded-t-[170px]'></div>
                <div className='absolute w-[245px] h-[300px] overflow-hidden self-end md:w-[335px] md:h-[492px]'>
                    <img src={valueImg} alt="homeImg" className='w-full h-full rounded-t-[140px] rounded-b-[10px] md:rounded-t-[170px] object-cover' />
                </div>
            </div>
            <div className="flex-1">
                <h3 className="text-orange-600 text-lg font-[600]">Our Value</h3>
                <h1 className="text-purple-900 my-2 text-3xl font-[700]">Value we give to you<span className="text-pink-500 ">.</span></h1>
                <div className='w-[80px] h-[5px] bg-gradient-to-r from-purple-400 via-pink-500 to-[#FF8A71] 
                    shadow-lg mb-[5px]'/>
                <p className="mt-2 text-gray-400 md:w-2/3 text-sm">We are always ready to help by providing the best service for you.
                We believe a good place to live can make your life better.</p>
                <div className="mt-4 lg:w-3/4 grid gap-2 ">
                    <div className="shadow-lg p-4">
                        <div className="flex justify-between text-purple-700 text-sm sm:text-xl font-[600] cursor-pointer"
                         onClick={()=>setToggle1(!toggle1)}>
                            <div className="flex items-center ">
                                <TiPointOfInterestOutline />
                                <h2 className="ml-2">Best interest rates on the market</h2>
                            </div>
                            <button className='' >
                                {toggle1? <AiOutlineCaretUp /> : <AiOutlineCaretDown />}
                            </button>
                        </div>
                        <div className=''>
                            {toggle1? <p className='text-gray-400 text-sm mt-2'>Price we provide is the best for you, we guarantee no price changes on your property
                            due to various unexpected costs that may come</p> : null}
                        </div>
                    </div>
                    <div className="shadow-lg p-4">
                        <div className="flex justify-between text-purple-700 text-sm sm:text-xl font-[600] cursor-pointer"
                        onClick={()=>setToggle2(!toggle2)}>
                            <div className="flex items-center ">
                                <TiCancel />
                                <h2 className="ml-2">Prevent unstable prices</h2>
                            </div>
                            <button className='' >
                                {toggle2? <AiOutlineCaretUp /> : <AiOutlineCaretDown />}
                            </button>
                        </div>
                        <div>
                            {toggle2? <p className='text-gray-400 text-sm mt-2'>Price we provide is the best for you, we guarantee no price changes on your property
                            due to various unexpected costs that may come</p> : null}
                        </div>
                    </div>
                    <div className="shadow-lg p-4">
                        <div className="flex justify-between text-purple-700 text-sm sm:text-xl font-[600] cursor-pointer"
                        onClick={()=>setToggle3(!toggle3)}>
                            <div className="flex items-center ">
                                <IoIosStats />
                                <h2 className="ml-2">Best price on the market</h2>
                            </div>
                            <button className='' >
                                {toggle3? <AiOutlineCaretUp /> : <AiOutlineCaretDown />}
                            </button>
                        </div>
                        <div>
                            {toggle3? <p className='text-gray-400 text-sm mt-2'>Price we provide is the best for you, we guarantee no price changes on your property
                            due to various unexpected costs that may come</p> : null}
                        </div>
                    </div>
                    <div className="shadow-lg p-4">
                        <div className="flex justify-between text-purple-700 text-sm sm:text-xl font-[600] cursor-pointer"
                        onClick={()=>setToggle4(!toggle4)}>
                            <div className="flex items-center ">
                                <MdVerifiedUser />
                                <h2 className="ml-2">Security of your data</h2>
                            </div>
                            <button className='' >
                                {toggle4? <AiOutlineCaretUp /> : <AiOutlineCaretDown />}
                            </button>
                        </div>
                        <div>
                            {toggle4? <p className='text-gray-400 text-sm mt-2'>Price we provide is the best for you, we guarantee no price changes on your property
                            due to various unexpected costs that may come</p> : null}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Value