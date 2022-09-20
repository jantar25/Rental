import React,{useState} from 'react'
import i18next from 'i18next';
import { useDispatch, useSelector } from "react-redux"
import { LandLordLogin } from "../Redux/apiCalls"
import { Link } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const LandlordLogin = () => {

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const {isFetching,error} = useSelector((state:any)=> state.landLord)
    const dispatch = useDispatch();
    
    const handleClick = (e:any)=>{
        e.preventDefault();
        LandLordLogin(dispatch,{password,email});
    }


  return (
    <div className=''>
        <Navbar />
        <div className="px-4 lg:px-20 py-8 flex justify-center">
            <div className="bg-gray-200 rounded-lg p-4 md:w-2/3 my-8">
                <div className="">
                    <h2 className="text-xl text-orange-500 font-[600]">{i18next.t('landLordLogin')as string}</h2>
                    <p className="text-2xl text-[#002853] font-[700] my-2">{i18next.t('landLordLoginIntro')as string}</p>
                    <span className="text-md text-[#040C18] font-[400]">{i18next.t('landLordLoginIntro2')as string}</span>
                </div>
                <form className="mt-4" onSubmit={handleClick}>
                    <div className="flex flex-col mb-2">
                        <input type="text" required  placeholder={i18next.t('emailPlaceholder')as string} className="px-4 py-2 my-2 rounded" onChange={(e)=> setEmail(e.target.value)}/>
                        <input type="password" required placeholder={i18next.t('passwordPlaceholder')as string} className='px-4 py-2 my-2 rounded' onChange={(e)=> setPassword(e.target.value)}/>
                    </div>
                    <div className='py-2'>
                    {error? <span className='text-red-800 '>{`*${error.payload}*`}</span> : null}
                    </div>
                    <button className="px-8 py-2 bg-[#002853] text-white font-[600] rounded-md hover:shadow-lg" type='submit'>
                        {isFetching? i18next.t('logging')as string : i18next.t('login')as string}</button>
                
                    <div className="flex items-center mt-4">
                        <p className="text-[13px] text-gray-600">{i18next.t('haveAccount')as string}
                            <Link to='/register'>
                                <span className="text-[#002853] ml-2 font-[700] text-sm cursor-pointer">{i18next.t('register')as string}</span>
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default LandlordLogin