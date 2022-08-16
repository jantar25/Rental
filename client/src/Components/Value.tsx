import React,{useState} from 'react' 
import { TiPointOfInterestOutline,TiCancel } from 'react-icons/ti';
import { AiOutlinePlus,AiOutlineMinus } from 'react-icons/ai';
import { IoIosStats } from 'react-icons/io';
import { MdVerifiedUser } from 'react-icons/md';
import { Accodions } from '../data';

const valueImg = require("../Images/home1.jpg")
const Value = () => {
    const [clicked,setClicked] = useState(null)

    const toggleAccordion = (id:any) => {
        if (clicked === id) {
            setClicked(null)
        } else{
            setClicked(id)
        }
    }

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
                    {Accodions.map((Accodion) => 
                    <div className="shadow-lg p-4" key={Accodion.id}>
                        <div className="flex justify-between text-purple-700 text-sm sm:text-xl font-[600] cursor-pointer"
                         onClick={() => toggleAccordion(Accodion.id)}>
                            <div className="flex items-center ">
                                {Accodion.id === 1 ? <TiPointOfInterestOutline /> : Accodion.id === 2 ? <TiCancel />
                                 :Accodion.id === 3 ? <IoIosStats /> : <MdVerifiedUser />}
                                <h2 className="ml-2">{Accodion.intro}</h2>
                            </div>
                            <button className='' >
                                {clicked === Accodion.id ? <AiOutlineMinus /> : <AiOutlinePlus />}
                            </button>
                        </div>
                        <div className=''>
                            {clicked === Accodion.id ? <p className='text-gray-400 text-sm mt-2'>{Accodion.paragraph}</p> : null}
                        </div>
                    </div>
                    )}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Value